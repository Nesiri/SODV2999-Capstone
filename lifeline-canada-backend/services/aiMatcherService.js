// services/aiMatcherService.js (AI ONLY - No fuzzy)
import responseMapper from './responseMapperService.js';
import AIMatcher from '../utils/aiMatcher.js';
import ResponseBuilder from '../utils/responseBuilder.js';

const { chatbotResponses } = responseMapper;

const CONFIG = {
  AI_THRESHOLD: 0.45,  // Lower threshold to catch more
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
    console.log(' AI Matcher Service ready (AI only)');
  }

  async matchUserInput(userInput) {
    if (!userInput || userInput.trim().length === 0) {
      return null;
    }

    const normalizedInput = userInput.toLowerCase().trim();
    
    // Check cache
    if (this.cache.has(normalizedInput)) {
      return this.cache.get(normalizedInput);
    }

    // Crisis keywords (fast bypass)
    const crisisMatch = this.checkCrisisKeywords(normalizedInput);
    if (crisisMatch) {
      console.log(' CRISIS DETECTED');
      const result = this.responseBuilder.buildResult(crisisMatch.rule, 'crisis', crisisMatch.matchedKeyword, 1.0);
      this.cache.set(normalizedInput, result);
      return result;
    }

    // AI ONLY - no fuzzy, no exact
    console.log(' AI matching...');
    const aiMatch = await this.aiMatcher.findAIMatch(userInput);
    
    let result;
    if (aiMatch && aiMatch.score >= CONFIG.AI_THRESHOLD) {
      console.log(` AI match: ${aiMatch.score.toFixed(3)}`);
      result = this.responseBuilder.buildResult(aiMatch.rule, 'ai', aiMatch.matchedText, aiMatch.score);
    } else {
      console.log(' No match, using default');
      result = this.responseBuilder.getDefaultResponse();
    }
    
    // Cache
    if (this.cache.size >= CONFIG.CACHE_SIZE) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(normalizedInput, result);
    
    return result;
  }

  checkCrisisKeywords(input) {
    const crisisRule = chatbotResponses.find(r => r.priority === 10);
    if (!crisisRule) return null;
    
    for (const keyword of crisisRule.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        return { rule: crisisRule, matchedKeyword: keyword };
      }
    }
    return null;
  }

  isReadyStatus() {
    return this.aiMatcher.isReadyStatus();
  }
}

const aiMatcherService = new AIMatcherService();
export { AIMatcherService, aiMatcherService };