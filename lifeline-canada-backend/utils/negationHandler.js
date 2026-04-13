// utils/negationHandler.js
// COMPLETE NEGATION HANDLER - Includes all negation patterns

export function checkNegationOverride(userInput) {
  if (!userInput || typeof userInput !== 'string') {
    return null;
  }
  
  const lower = userInput.toLowerCase().trim();
  
  // ============================================
  // REFUGEE NEGATION
  // ============================================
  if (lower.includes('refugee')) {
    if (/\b(not|am not|'m not) (a )?refugee\b/i.test(lower)) {
      return {
        response: "Thanks for clarifying. Here's general mental health support that may be helpful.",
        intent: 'general',
        links: [],
        score: 1.0,
        method: 'negation_override',
        requiresEscalation: false
      };
    }
    if (/\bdon't consider myself\b|\bwouldn't call myself\b/i.test(lower)) {
      return {
        response: "Thanks for clarifying. Here's general mental health support that may be helpful.",
        intent: 'general',
        links: [],
        score: 1.0,
        method: 'negation_override',
        requiresEscalation: false
      };
    }
  }
  
  // ============================================
  // MOOD POSITIVE
  // ============================================
  if (/\b(feeling|doing) (better|good|well|great)\b/i.test(lower) && !/\bnot\b/.test(lower)) {
    return {
      response: "That's wonderful to hear! I'm glad you're feeling better. How can I support you today?",
      intent: 'positive_checkin',
      links: [],
      score: 1.0,
      method: 'negation_override',
      requiresEscalation: false
    };
  }
  
  // ============================================
  // MOOD NEGATIVE
  // ============================================
  if (/\bnot (feeling|doing) (better|good|well)\b/i.test(lower)) {
    return {
      response: "I'm sorry you're not feeling your best. Want to talk about what's bothering you?",
      intent: 'empathetic',
      links: [],
      score: 1.0,
      method: 'negation_override',
      requiresEscalation: false
    };
  }
  
  // ============================================
  // DEPRESSION NEGATION & PAST RECOVERY
  // ============================================
  if (lower.includes('depressed') || lower.includes('depression')) {
    if (/\b(not|am not|'m not) depressed\b/i.test(lower)) {
      return {
        response: "I'm glad to hear that. Is there anything else on your mind today?",
        intent: 'general',
        links: [],
        score: 1.0,
        method: 'negation_override',
        requiresEscalation: false
      };
    }
    if (/\b(used to be|was|were) depressed\b|\b(not anymore|no longer|recovered from) depression\b/i.test(lower)) {
      return {
        response: "I'm glad to hear you're in a better place. That's wonderful progress! How can I support you today?",
        intent: 'recovery_acknowledgment',
        links: [],
        score: 1.0,
        method: 'negation_override',
        requiresEscalation: false
      };
    }
    // NEW: "I wouldn't say I'm depressed"
    if (/\bwouldn't say\b|\bdon't think\b|\bdon't believe\b/i.test(lower)) {
      return {
        response: "Thanks for clarifying. Is there something specific you'd like to talk about today?",
        intent: 'general',
        links: [],
        score: 1.0,
        method: 'negation_override',
        requiresEscalation: false
      };
    }
  }
  
  // ============================================
  // ANXIETY NEGATION & PAST RECOVERY
  // ============================================
  if (lower.includes('anxious') || lower.includes('anxiety')) {
    if (/\b(not|am not|'m not) anxious\b/i.test(lower)) {
      return {
        response: "That's good to hear. What would you like to focus on today?",
        intent: 'general',
        links: [],
        score: 1.0,
        method: 'negation_override',
        requiresEscalation: false
      };
    }
    if (/\b(no longer|not anymore|used to be|was|were) anxious\b|\brecovered from anxiety\b/i.test(lower)) {
      return {
        response: "That's great progress! I'm glad you're feeling better. How can I support you today?",
        intent: 'recovery_acknowledgment',
        links: [],
        score: 1.0,
        method: 'negation_override',
        requiresEscalation: false
      };
    }
    // NEW: "Anxiety isn't my issue"
    if (/\bisn't my issue\b|\bis not my issue\b|\bnot my problem\b/i.test(lower)) {
      return {
        response: "Thanks for letting me know. What brings you here today?",
        intent: 'general',
        links: [],
        score: 1.0,
        method: 'negation_override',
        requiresEscalation: false
      };
    }
  }
  
  // ============================================
// SUICIDAL NEGATION (COMPLETE)
// ============================================
if (lower.includes('suicidal') || lower.includes('suicide')) {
  
  // "no suicide" (with ellipsis or incomplete)
  if (/\bno suicide\.\.\./i.test(lower) || /\bno suicide$/i.test(lower)) {
    return {
      response: "Thanks for clarifying. Is there something specific you'd like to talk about today?",
      intent: 'general',
      links: [],
      score: 1.0,
      method: 'negation_override',
      requiresEscalation: false
    };
  }
  
  // "no suicide" (without ellipsis)
  if (/\bno suicide\b/i.test(lower)) {
    return {
      response: "Thanks for clarifying. Is there something specific you'd like to talk about today?",
      intent: 'general',
      links: [],
      score: 1.0,
      method: 'negation_override',
      requiresEscalation: false
    };
  }
  
  // "not suicide" (without "a")
  if (/\bnot suicide\b/i.test(lower)) {
    return {
      response: "Thanks for clarifying. Is there something specific you'd like to talk about today?",
      intent: 'general',
      links: [],
      score: 1.0,
      method: 'negation_override',
      requiresEscalation: false
    };
  }
  
  // "I am not a suicide"
  if (/\b(not|am not|'m not) a suicide\b/i.test(lower)) {
    return {
      response: "Thanks for clarifying. Is there something specific you'd like to talk about today?",
      intent: 'general',
      links: [],
      score: 1.0,
      method: 'negation_override',
      requiresEscalation: false
    };
  }
  
  // "this is not a suicide"
  if (/\bthis is not a suicide\b/i.test(lower)) {
    return {
      response: "I understand. What would you like to discuss?",
      intent: 'general',
      links: [],
      score: 1.0,
      method: 'negation_override',
      requiresEscalation: false
    };
  }
  
  // "I am not suicidal"
  if (/\b(not|am not|'m not) suicidal\b/i.test(lower)) {
    return {
      response: "I'm relieved to hear that. Remember, support is always here if you need it. How are you feeling today?",
      intent: 'general',
      links: [],
      score: 1.0,
      method: 'negation_override',
      requiresEscalation: false
    };
  }
  
  // "I've never been suicidal"
  if (/\bnever been\b|\bnever had\b|\bnever experienced\b/i.test(lower)) {
    return {
      response: "I'm glad to hear that. Remember, support is always here if you need it. How can I help you today?",
      intent: 'general',
      links: [],
      score: 1.0,
      method: 'negation_override',
      requiresEscalation: false
    };
  }
}
  // ============================================
  // HOPELESS NEGATION
  // ============================================
  if (lower.includes('hopeless')) {
    if (/\b(not|am not|'m not) hopeless\b/i.test(lower)) {
      return {
        response: "That's good to hear. Would you like to explore some wellness resources?",
        intent: 'general',
        links: [],
        score: 1.0,
        method: 'negation_override',
        requiresEscalation: false
      };
    }
  }
  
  // ============================================
  // BURDEN NEGATION
  // ============================================
  if (lower.includes('burden')) {
    if (/\b(not|am not|'m not|no longer) a? ?burden\b/i.test(lower)) {
      return {
        response: "I'm glad you're seeing your value. You matter. How can I support you today?",
        intent: 'general',
        links: [],
        score: 1.0,
        method: 'negation_override',
        requiresEscalation: false
      };
    }
  }
  
  // ============================================
  // LONELY NEGATION
  // ============================================
  if (lower.includes('lonely')) {
    if (/\b(not|am not|'m not) lonely\b/i.test(lower)) {
      return {
        response: "I'm glad you're feeling connected. Let me know if there's anything I can help with.",
        intent: 'general',
        links: [],
        score: 1.0,
        method: 'negation_override',
        requiresEscalation: false
      };
    }
  }
  
  // ============================================
  // POSITIVE PROGRESS STATEMENTS
  // ============================================
  if (/\b(things are getting better|making progress|feeling better these days|improving|on the upswing)\b/i.test(lower)) {
    return {
      response: "That's wonderful to hear! Progress is a journey, and I'm glad you're seeing positive changes. Keep going!",
      intent: 'positive_progress',
      links: [],
      score: 1.0,
      method: 'negation_override',
      requiresEscalation: false
    };
  }
  
  // ============================================
  // INCOMPLETE SENTENCE HANDLER
  // ============================================
  if (userInput.endsWith('...') || 
      (userInput.length < 15 && /\b(what|where|when|why|how|i can't|i don't|i am|wouldn't say)\b/i.test(lower) && !lower.includes('?'))) {
    return {
      response: "I'm here to help. Could you tell me a bit more about what you're looking for?",
      intent: 'clarification',
      links: [],
      score: 1.0,
      method: 'negation_override',
      requiresEscalation: false
    };
  }
  
  return null;
}

export default { checkNegationOverride };