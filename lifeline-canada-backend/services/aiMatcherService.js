// services/aiMatcherService.js (AI ONLY - No fuzzy)
import responseMapper from './responseMapperService.js';
import AIMatcher from '../utils/aiMatcher.js';
import ResponseBuilder from '../utils/responseBuilder.js';
import { checkNegationOverride } from '../utils/negationHandler.js';
import { checkCrisis } from '../utils/crisisHandler.js';

const { chatbotResponses } = responseMapper;

const CONFIG = {
  AI_THRESHOLD: 0.55,
  CACHE_SIZE: 50
};

class AIMatcherService {
  constructor() {
    this.cache = new Map();
    this.aiMatcher = new AIMatcher(chatbotResponses, CONFIG);
    this.responseBuilder = new ResponseBuilder(chatbotResponses);
  }

  async initialize() {
    await this.aiMatcher.initialize();
    console.log('✅ AI Matcher Service ready (AI only)');
    console.log('✅ Crisis Handler loaded (two-tier detection)');
    console.log('✅ Negation Handler loaded');
  }

  async matchUserInput(userInput) {
    if (!userInput || userInput.trim().length === 0) {
      return null;
    }

    const normalizedInput = userInput.toLowerCase().trim();

    // Cache check
    if (this.cache.has(normalizedInput)) {
      return this.cache.get(normalizedInput);
    }

    // ============================================
    // TIER 1: NEGATION HANDLER (RUN FIRST)
    // ============================================
    const negationResult = checkNegationOverride(userInput);
    if (negationResult) {
     // console.log(`✅ Negation override: "${userInput}" → ${negationResult.intent}`);
      this.cache.set(normalizedInput, negationResult);
      return negationResult;
    }

    // ============================================
    // TIER 2: SUICIDAL INTENT (CRISIS ESCALATION)
    // ============================================
    const crisisResult = checkCrisis(userInput);
    if (crisisResult && crisisResult.requiresEscalation) {
      console.log('🚨 SUICIDAL INTENT DETECTED - Escalating to crisis response');
      const result = {
        ...crisisResult,
        score: 1.0,
        method: 'crisis_detection',
        matchedText: crisisResult.matchedPattern
      };
      this.cache.set(normalizedInput, result);
      return result;
    }

    // ============================================
    // TIER 3: AI MATCHING
    // ============================================
    console.log('🤖 AI matching...');
    const aiMatch = await this.aiMatcher.findAIMatch(userInput);

    let result;
    if (aiMatch && aiMatch.score >= CONFIG.AI_THRESHOLD) {
      // console.log(`🎯 AI match: ${aiMatch.score.toFixed(3)}`);
      result = this.responseBuilder.buildResult(
        aiMatch.rule,
        'ai',
        aiMatch.matchedText,
        aiMatch.score
      );
    } else {
      // console.log('📋 No match, using default');
      result = this.responseBuilder.getDefaultResponse();
    }

    // Cache management (FIFO)
    if (this.cache.size >= CONFIG.CACHE_SIZE) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(normalizedInput, result);

    return result;
  }

  isReadyStatus() {
    return this.aiMatcher.isReadyStatus();
  }
}

const aiMatcherService = new AIMatcherService();
export { AIMatcherService, aiMatcherService };