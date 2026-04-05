// utils/aiMatcher.js
import { pipeline } from '@xenova/transformers';

/**
 * AI Semantic Matcher - uses transformer model for intelligent matching
 * This is the PRIMARY matching method
 */
class AIMatcher {
  constructor(chatbotResponses, config) {
    this.chatbotResponses = chatbotResponses;
    this.config = config;
    this.model = null;
    this.keywordEmbeddings = new Map();
    this.isReady = false;
    this.initializationPromise = null;
  }

  async initialize() {
    if (this.isReady && this.model) {
      console.log(' AI Matcher already initialized');
      return;
    }

    if (this.initializationPromise) {
      console.log('⏳ AI Matcher initialization in progress...');
      return this.initializationPromise;
    }

    this.initializationPromise = this._doInitialization();
    return this.initializationPromise;
  }

  async _doInitialization() {
    console.log('🚀 Initializing AI Semantic Matcher...');
    
    try {
      console.log('Loading AI model (Xenova/all-MiniLM-L6-v2)...');
      this.model = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
        progress_callback: (progress) => {
          if (progress?.progress) {
            console.log(`Model download: ${Math.round(progress.progress * 100)}%`);
          }
        }
      });
      
      console.log('✅ AI model loaded! Generating keyword embeddings...');
      
      // Pre-compute embeddings for all keywords
      for (const rule of this.chatbotResponses) {
        for (const keyword of rule.keywords) {
          const embedding = await this.model(keyword, { 
            pooling: 'mean', 
            normalize: true 
          });
          this.keywordEmbeddings.set(keyword.toLowerCase(), {
            rule: rule,
            keyword: keyword,
            vector: Array.from(embedding.data)
          });
        }
      }
      
      this.isReady = true;
      console.log(`✅ AI Matcher ready with ${this.keywordEmbeddings.size} keyword embeddings!`);
      this.initializationPromise = null;
      
    } catch (error) {
      console.error('❌ Failed to load AI model:', error);
      this.isReady = false;
      this.model = null;
      this.initializationPromise = null;
      throw error;
    }
  }

  async findAIMatch(input) {
    if (!this.isReady || !this.model || this.keywordEmbeddings.size === 0) {
      console.log('⚠️ AI model not ready');
      return null;
    }

    try {
      console.log(`🧠 AI analyzing: "${input.substring(0, 50)}..."`);
      
      const inputEmbedding = await this.model(input, { 
        pooling: 'mean', 
        normalize: true 
      });
      const inputVector = Array.from(inputEmbedding.data);

      let bestMatch = null;
      let bestScore = 0;

      for (const [keyword, { rule, vector }] of this.keywordEmbeddings) {
        const similarity = this.cosineSimilarity(inputVector, vector);
        
        // Lower threshold for crisis (priority 10)
        const threshold = rule.priority === 10 ? 0.35 : this.config.AI_THRESHOLD;
        
        if (similarity > bestScore && similarity >= threshold) {
          bestScore = similarity;
          bestMatch = {
            rule: rule,
            score: similarity,
            method: 'ai_semantic',
            matchedText: keyword
          };
        }
      }

      if (bestMatch) {
        console.log(`🎯 AI match: "${bestMatch.matchedText}" (score: ${bestMatch.score.toFixed(3)})`);
      }
      
      return bestMatch;
      
    } catch (error) {
      console.error('AI matching error:', error);
      return null;
    }
  }

  cosineSimilarity(a, b) {
    if (a.length !== b.length) return 0;
    
    let dot = 0, magA = 0, magB = 0;
    for (let i = 0; i < a.length; i++) {
      dot += a[i] * b[i];
      magA += a[i] * a[i];
      magB += b[i] * b[i];
    }
    
    if (magA === 0 || magB === 0) return 0;
    return dot / (Math.sqrt(magA) * Math.sqrt(magB));
  }

  isReadyStatus() {
    return this.isReady && this.model !== null;
  }
}

export default AIMatcher;