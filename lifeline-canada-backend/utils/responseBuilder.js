// utils/responseBuilder.js

class ResponseBuilder {
  constructor(chatbotResponses) {
    this.chatbotResponses = chatbotResponses;
  }

  buildResult(rule, method, matchedText, score) {
    return {
      rule: rule,
      score: score,
      method: method,
      matchedText: matchedText,
      intent: this.getIntentName(rule),
      response: rule.response,
      links: rule.links || [],
      requiresEscalation: rule.requiresEscalation || false
    };
  }

  getIntentName(rule) {
    if (rule.priority === 10) return 'crisis';
    if (rule.priority === 9) return 'emergency';
    if (rule.priority === 8 && rule.keywords.some(k => ['panic', 'anxiety'].includes(k))) return 'panic';
    return 'general';
  }

  getDefaultResponse() {
    return this.chatbotResponses.find(r => r.keywords[0] === 'default') || this.chatbotResponses[0];
  }
}

export default ResponseBuilder;