// utils/crisisHandler.js
// INDEPENDENT CRISIS DETECTION UTILITY
// Two-tier system: Suicidal intent (escalate) vs Emotional distress (softer response)

/**
 * Tier 1: Suicidal intent patterns - REQUIRES escalation to 988
 * These explicitly mention death, suicide, or self-harm
 */
const SUICIDAL_INTENT_PATTERNS = [
  // Direct suicide statements (with context exclusions)
  { pattern: /\b(kill|end|take) (myself|my (own )?life)\b(?! (this conversation|this call|this meeting|this chat))/i, severity: 'critical' },
  { pattern: /\bwant to die\b/i, severity: 'critical' },
  { pattern: /\bwant to kill myself\b/i, severity: 'critical' },
  { pattern: /\bsuicidal (thoughts|ideation|plan)\b/i, severity: 'critical' },
  { pattern: /\b(hurt|harm) myself\b/i, severity: 'high' },
  { pattern: /\bcut myself\b|\bself harm\b/i, severity: 'high' },
  { pattern: /\b(plan to|going to) (kill|end) myself\b/i, severity: 'critical' },
  { pattern: /\b(thinking of|considering) (killing|ending) myself\b/i, severity: 'critical' },
  
  // Hopelessness + death wish
  { pattern: /\bno reason to live\b/i, severity: 'high' },
  { pattern: /\bbetter off dead\b/i, severity: 'high' },
  { pattern: /\bwish i was dead\b|\bwant to be dead\b/i, severity: 'high' },
  
  // Giving up on life specifically
  { pattern: /\bgive up on life\b/i, severity: 'high' },
  { pattern: /\bend my existence\b/i, severity: 'critical' },
  { pattern: /\btake my (own )?life\b/i, severity: 'critical' },
  
  // High-risk suicide indicators
  { pattern: /\b(better off without me|no one would miss me|everyone would be better off)\b/i, severity: 'high' },
  { pattern: /\bpeople would be happier if (i was|i'm) gone\b/i, severity: 'high' }
];
/**
 * Tier 2: Emotional distress patterns - DO NOT escalate to 988
 * These indicate distress but not suicidal intent
 */
const EMOTIONAL_DISTRESS_PATTERNS = [
  // General hopelessness (without death wish)
  { pattern: /\b(hopeless|worthless|pointless|meaningless)\b/i, response: 'depression' },
  { pattern: /\b(nothing matters|nothing makes sense)\b/i, response: 'depression' },
  { pattern: /\b(feel empty|empty inside)\b/i, response: 'depression' },
  { pattern: /\b(numb inside|feel nothing)\b/i, response: 'depression' },
  
  // Giving up (without "on life")
  { pattern: /\b(i give up|i quit)\b(?! on life)/i, response: 'general_support' },
  { pattern: /\b(can't go on|don't have the strength)\b(?! living)/i, response: 'general_support' },
  { pattern: /\b(done with everything|had enough)\b/i, response: 'general_support' },
  { pattern: /\btoo tired to keep going\b/i, response: 'general_support' },
  { pattern: /\bno energy to fight\b/i, response: 'general_support' },
  
  // "want to end it" needs clarification (not suicide)
  { pattern: /\bwant to end it\b(?! (this conversation|this call|this meeting|this chat))/i, response: 'clarification_needed' },
  
  // Isolation and darkness (metaphorical)
  { pattern: /\b(trapped|stuck) in (darkness|a hole)\b/i, response: 'depression' },
  { pattern: /\b(can't see the light|no way out)\b/i, response: 'depression' },
  { pattern: /\b(dark place|deep dark hole)\b/i, response: 'depression' },
  
  // Burden feelings (without suicidal conclusion)
  { pattern: /\b(burden|feel like a burden|i'm a burden)\b/i, response: 'self_worth' },
  
  // Existential questions
  { pattern: /\bwhat's the point\b(?! of (living|life|existing))/i, response: 'existential' },
  { pattern: /\b(no point in|don't see a point)\b(?! (living|life))/i, response: 'existential' }
];

/**
 * Check if input contains suicidal intent (Tier 1)
 */
export function checkSuicidalIntent(userInput) {
  if (!userInput || typeof userInput !== 'string') {
    return null;
  }
  
  const lower = userInput.toLowerCase().trim();
  
  for (const item of SUICIDAL_INTENT_PATTERNS) {
    if (item.pattern.test(lower)) {
      console.log(`🚨 SUICIDAL INTENT DETECTED: ${item.pattern.source} (${item.severity})`);
      return {
        isCrisis: true,
        severity: item.severity,
        matchedPattern: item.pattern.source,
        response: "I'm really concerned about you. Please reach out immediately: Call or text 988 for the Suicide Crisis Helpline. You are not alone.",
        intent: 'crisis',
        requiresEscalation: true,
        priority: 10,
        links: [
          { name: "Call 988", path: "tel:988", description: "Free, confidential crisis support" },
          { name: "Text 988", path: "sms:988", description: "24/7 text support" },
          { name: "Crisis Support Directory", path: "/incrisisneedhelp", description: "More crisis resources" }
        ]
      };
    }
  }
  return null;
}

/**
 * Check if input contains emotional distress (Tier 2)
 */
export function checkEmotionalDistress(userInput) {
  if (!userInput || typeof userInput !== 'string') {
    return null;
  }
  
  const lower = userInput.toLowerCase().trim();
  
  for (const item of EMOTIONAL_DISTRESS_PATTERNS) {
    if (item.pattern.test(lower)) {
      console.log(`⚠️ EMOTIONAL DISTRESS DETECTED: ${item.pattern.source} → ${item.response}`);
      return {
        isCrisis: false,
        requiresEscalation: false,
        suggestedIntent: item.response,
        matchedPattern: item.pattern.source
      };
    }
  }
  return null;
}

/**
 * Combined crisis check
 */
export function checkCrisis(userInput) {
  const suicidalIntent = checkSuicidalIntent(userInput);
  if (suicidalIntent) {
    return suicidalIntent;
  }
  
  const distress = checkEmotionalDistress(userInput);
  if (distress) {
    return null;
  }
  
  return null;
}

/**
 * Get crisis response object
 */
export function getCrisisResponse() {
  return {
    response: "I'm really concerned about you. Please reach out immediately: Call or text 988 for the Suicide Crisis Helpline. You are not alone.",
    intent: 'crisis',
    requiresEscalation: true,
    links: [
      { name: "Call 988", path: "tel:988", description: "Free, confidential crisis support" },
      { name: "Text 988", path: "sms:988", description: "24/7 text support" },
      { name: "Crisis Support Directory", path: "/incrisisneedhelp", description: "More crisis resources" }
    ]
  };
}

/**
 * Get distress response by type
 */
export function getDistressResponse(distressType) {
  const responses = {
    depression: {
      response: "I hear that you're going through a difficult time. Would you like to talk about what's bothering you?",
      intent: 'depression',
      requiresEscalation: false
    },
    general_support: {
      response: "It sounds like you're struggling right now. I'm here to listen. Can you tell me more about what's going on?",
      intent: 'general_support',
      requiresEscalation: false
    },
    self_worth: {
      response: "I want you to know that you matter. It sounds like you're carrying a heavy weight. Would you like to talk about it?",
      intent: 'self_worth',
      requiresEscalation: false
    },
    existential: {
      response: "That's a deep question. Sometimes life feels meaningless, but there are people who care about you. Would you like to explore this further?",
      intent: 'existential',
      requiresEscalation: false
    },
    clarification_needed: {
      response: "I want to make sure I understand. Are you saying you want to end this conversation, or is something else going on?",
      intent: 'clarification',
      requiresEscalation: false
    }
  };
  
  return responses[distressType] || responses.general_support;
}

/**
 * Check if input contains any crisis-related keywords
 */
export function hasCrisisKeywords(userInput) {
  if (!userInput) return false;
  const lower = userInput.toLowerCase();
  
  const allPatterns = [
    ...SUICIDAL_INTENT_PATTERNS.map(p => p.pattern),
    ...EMOTIONAL_DISTRESS_PATTERNS.map(p => p.pattern)
  ];
  
  return allPatterns.some(pattern => pattern.test(lower));
}

export default {
  checkSuicidalIntent,
  checkEmotionalDistress,
  checkCrisis,
  getCrisisResponse,
  getDistressResponse,
  hasCrisisKeywords
};