// src/services/responseMapperService.js
// ============================================
// COMPLETE CHATBOT RESPONSES - EXPANDED FOR AI MATCHING
// ============================================

const chatbotResponses = [
  // CRISIS & SUICIDE (Highest Priority - Priority 10)

{
  keywords: [
    // Direct suicide statements
    "suicide",
    "kill myself",
    "kill my self",
    "want to die",
    "end my life",
    "end my existence",
    "take my life",
    "suicidal thoughts",
    "thinking about suicide",
    "wish i was dead",
    "better off dead",
    "no reason to live",
    "give up on life",
    
    // Self-harm (clear intent)
    "hurt myself",
    "harm myself",
    "self harm",
    "cut myself",
    "want to hurt myself",
    "thinking of hurting myself",
    
    // HIGH-RISK SUICIDE INDICATORS (MOVED FROM DISTRESS)
    "better off without me",
    "no one would miss me",
    "everyone would be better off",
    "people would be happier if i was gone",
    "people would be happier if i'm gone"
  ],
  response: "I'm really concerned about you. Please reach out immediately: Call or text 988 for the Suicide Crisis Helpline. You are not alone.",
  priority: 10,
  requiresEscalation: true,
  links: [
    { name: "Call 988", path: "tel:988", description: "Free, confidential crisis support" },
    { name: "Text 988", path: "sms:988", description: "24/7 text support" },
    { name: "Crisis Support Directory", path: "/incrisisneedhelp", description: "More crisis resources" }
  ]
},

// ============================================
// EMOTIONAL DISTRESS (Priority 6.5) - NO 988 ESCALATION
// ============================================
{
  keywords: [
    // Emotional state
    "hopeless",
    "worthless",
    "useless",
    "pointless",
    "meaningless",
    "feel empty",
    "empty inside",
    "numb inside",
    "feel nothing",
    "emotionless",
    "void inside",
    "hollow inside",
    "dead inside",
    
    // Giving up language (without suicide)
    "i give up",
    "i quit",
    "can't do this anymore",
    "cannot do this",
    "don't have the strength",
    "too tired to keep going",
    "done with everything",
    
    // Existential distress
    "don't see a point",
    "no point in living",
    "what's the point",
    "point in living",
    "nothing makes sense",
    
    // Burden feelings (without suicidal conclusion)
    "burden",
    "feel like a burden",
    "i'm a burden",
    "burden to everyone",
    "burden to my family",
    "burden to others",
    "being a burden",
    "i'm a burden to everyone",
    "feel like burden",
    
    // Isolation and darkness (metaphorical)
    "trapped in darkness",
    "can't see the light",
    "no way out",
    "stuck in this hole",
    "can't escape my thoughts",
    "dark place",
    "deep dark hole",
    "falling into darkness",
    "lost in darkness",
    
    // Action-based giving up (not life)
    "can't go on"
  ],
  response: "I hear that you're going through a really difficult time. You're not alone. Would you like to talk about what's bothering you?",
  priority: 6.5,
  requiresEscalation: false,
  links: [
    { name: "Depression Resources", path: "/resources/depression", description: "Learn about depression and coping strategies" },
    { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Healthy ways to cope" },
    { name: "Call 988", path: "tel:988", description: "Free, confidential support if you need to talk" }
  ]
},

  // EMERGENCY (Priority 9) - keep as is
  {
    keywords: [
      "emergency", "danger", "hurt myself", "hurt my self", 
      "hurt others", "immediate danger", "medical emergency", 
      "life threatening", "need ambulance", "bleeding badly",
      "emergency room", "call 911", "need help now", "urgent help",
      "critical situation", "life threatening situation", "severe injury",
      "dangerous situation", "unsafe", "in danger right now"
    ],
    response: "This sounds like an emergency. Please call 911 immediately for immediate assistance. Your safety is the most important thing right now.",
    priority: 9,
    requiresEscalation: true,
    links: [{ name: "Call 911", path: "tel:911", description: "Emergency services" }]
  },
  
  
  // PANIC ATTACK (Priority 8)
  {
    keywords: [
      "panic attack", "having a panic attack", "racing heart", 
      "can't breathe panic", "hyperventilating", "panic episode",
      "i think i'm having a panic attack", "panic disorder",
      "heart pounding", "chest tightness", "can't catch breath",
      "shortness of breath", "dizzy panic", "feeling faint",
      "panic symptoms", "anxiety attack", "nervous breakdown",
      "losing control", "scared for no reason", "sudden fear"
    ],
    response: "It sounds like you're having a panic attack. Here are some resources to help:",
    priority: 8,
    links: [
      { name: "Coping with Panic", path: "/resources/anxiety", description: "Strategies for panic attacks" },
      { name: "Breathing Exercises", path: "/pattern-interrupt/self-management", description: "Calm your breathing" },
      { name: "Call 988", path: "tel:988", description: "Talk to someone now" }
    ]
  },
  
  // PATTERN INTERRUPTS (Priority 8)
  {
    keywords: [
      "pattern interrupt", "break pattern", "interrupt negative thoughts", 
      "break cycle", "stop negative thinking", "change my thoughts", 
      "thought patterns", "negative thought loop", "stuck in thoughts",
      "can't stop thinking", "overthinking", "racing thoughts",
      "stop overthinking", "break the cycle", "change thinking",
      "rewire my brain", "change mindset", "shift perspective",
      "mental patterns", "thinking patterns", "habitual thoughts"
    ],
    response: "Pattern Interrupts help break negative thought cycles. Here are resources to get started:",
    priority: 8,
    links: [
      { name: "Explore Pattern Interrupts", path: "/pattern-interrupts", description: "Start breaking negative patterns" },
      { name: "Self Management Tools", path: "/pattern-interrupt/self-management", description: "Practical techniques" },
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Healthy coping strategies" }
    ]
  },

  // EMAIL VERIFICATION (Priority 8)
  {
    keywords: [
      "verify email", "email verification", "confirm email", 
      "verification link", "didn't get email", "no email received", 
      "verification not received", "check spam", "junk folder", 
      "promotions tab", "resend verification", "how to verify", 
      "verification code", "confirm account", "activate account",
      "email confirm", "verification email", "verify my email",
      "haven't received verification", "resend email"
    ],
    response: "Here's what you need to know about email verification:",
    priority: 8,
    links: [
      { name: "Create Account", path: "/app?mode=signup", description: "Step 1: Enter your full name and email" },
      { name: "Check Your Email", description: "Step 2: We'll send a verification link to your inbox" },
      { name: "Check Spam/Junk Folder", description: "Step 3: If you don't see it, check spam or junk folder" },
      { name: "Login", path: "/app?mode=login", description: "Step 4: After verification, login to access your dashboard" }
    ]
  },
    // LOGIN / ACCOUNT (Priority 8)
  {
    keywords: ["login", "sign in", "log in", "my account", "can't login", "account settings", "access account", "locked out"],
    response: "You can access your account here:",
    priority: 8,
    links: [
      { name: "Login to Your Account", path: "/app?mode=login", description: "Access your personal dashboard" },
      { name: "Sign Up with Google", path: "/app?mode=login", description: "Sign up using Google" }
    ]
  },

  // SIGN UP PROCESS (Priority 7)
  {
    keywords: [
      "sign up process", "how to sign up", "create account steps", 
      "registration steps", "account creation", "how do i sign up", 
      "creating an account", "register account", "make an account",
      "set up account", "join lifeline", "become a member",
      "sign up for app", "create profile", "register now"
    ],
    response: "Creating your free account takes less than a minute:",
    priority: 7,
    links: [
      { name: "Step 1: Enter Your Full Name", description: "Just your name - we keep things simple" },
      { name: "Step 2: Enter Your Email", description: "We'll send a verification link to confirm your account" },
      { name: "Step 3: Check Your Email", description: "Look for the verification email (check spam if you don't see it)" },
      { name: "Step 4: Click Verification Link", description: "Confirm your email address with one click" },
      { name: "Login", path: "/app?mode=login", description: "Step 5: Start using your personalized wellness tools" }
    ]
  },

   // APP FEATURES (Priority 7)
  {
    keywords: ["app features", "dashboard features", "what's in the app", "lifeline app", "mood tracker", "breathing exercises", "my resources"],
    response: "The LifeLine App gives you free tools for your wellness journey:",
    priority: 7,
    links: [
      { name: "Mood Tracker", description: "Track daily emotions and patterns" },
      { name: "Breathing Exercises", description: "Guided calming techniques" },
      { name: "My Resources", description: "Save helpful content" },
      { name: "LifeLine App", path: "/app?mode=login", description: "Access the app" }
    ]
  },


  // PRIVACY (Priority 7)
  {
    keywords: ["privacy", "data collection", "is my data safe", "data protection", "secure", "confidential", "privacy policy"],
    response: "Your privacy is our priority. Your data is encrypted and never shared without your consent.",
    priority: 7,
    links: [
      { name: "Privacy Policy", path: "/privacy?mode=privacy", description: "Read our full privacy policy" }
    ]
  },
  // FREE ACCOUNT INFO (Priority 6)
  {
    keywords: [
      "is it free", "free account", "cost", "how much does it cost", 
      "paid features", "any cost", "monthly fee", "subscription fee",
      "premium account", "free vs paid", "payment required",
      "charge for app", "free forever", "no cost", "complimentary",
      "free service", "no payment", "free to use"
    ],
    response: "The LifeLine App is completely free to use. We believe mental wellness support should be accessible to everyone:",
    priority: 6,
    links: [
      { name: "Mood Tracker", description: "Track your daily emotions and patterns" },
      { name: "Breathing Exercises", description: "Guided calming techniques" },
      { name: "My Resources Library", description: "Save and organize helpful content" },
      { name: "Personalized Dashboard", description: "Your central wellness hub" }
    ]
  },

  // GETTING STARTED GUIDE (Priority 6)
  {
    keywords: [
      "get started", "new user", "first time", "how to use", 
      "beginner guide", "what to do first", "where to start", 
      "first time user", "new to app", "just joined",
      "how does it work", "guide for beginners", "getting started guide",
      "start here", "beginner tips", "first steps"
    ],
    response: "New to the LifeLine App? Here's how to get started:",
    priority: 6,
    links: [
      { name: "Create Your Free Account", path: "/app?mode=signup", description: "Start your wellness journey" },
      { name: "Verify Your Email", description: "Click the link we send to confirm your account" },
      { name: "Log In", path: "/app?mode=login", description: "Access your personal dashboard" },
      { name: "Start Mood Tracking", description: "Log your first mood entry" },
      { name: "Try a Breathing Exercise", description: "Practice a 2-minute calming session" }
    ]
  },

  // ABOUT TLC (Priority 7)
  {
    keywords: [
      "who are you", "what is tlc", "lifeline canada", "about the foundation",
      "tell me about lifeline", "what does tlc do", "about lifeline canada",
      "organization info", "nonprofit info", "mission statement",
      "what is lifeline", "tlc foundation", "canadian lifeline",
      "about your organization", "tell me about yourself"
    ],
    response: "The LifeLine Canada Foundation (TLC) is a registered nonprofit committed to positive mental health and suicide prevention. Here's how to learn more:",
    priority: 7,
    links: [
      { name: "About Us", path: "/about-us", description: "Our mission and story" },
      { name: "Contact Us", path: "/contact-us", description: "Get in touch with us" },
      { name: "Get Involved", path: "/volunteers", description: "Volunteer opportunities" },
      { name: "Contribute", path: "/contribute", description: "Support our mission" }
    ]
  },
  
  // CONTACT (Priority 7)
  {
    keywords: [
      "contact", "email address", "phone number", "call you", "reach you",
      "get in touch", "support email", "how to contact", "contact info",
      "contact details", "reach out", "talk to someone", "speak to person",
      "customer service", "support team", "human contact"
    ],
    response: "You can reach us through:",
    priority: 7,
    links: [
      { name: "Contact Form", path: "/contact/contact-us", description: "Send us a message" },
      { name: "Email Support", path: "/contact/support", description: "Support email" },
      { name: "Volunteer Opportunities", path: "/volunteers", description: "Join our team" }
    ]
  },

  // RESOURCES - GENERAL (Priority 7)
  {
    keywords: [
      "find resources", "mental health resources", "where to go", "who to call",
      "get support", "need assistance", "find help", "looking for resources",
      "help available", "support options", "available resources",
      "what help is there", "where can i go", "resources near me"
    ],
    response: "I can help you find mental health resources. Here are some options:",
    priority: 7,
    links: [
      { name: "Mental Health Topics", path: "/resources", description: "Learn about depression, anxiety, PTSD and more" },
      { name: "Crisis Support Directory", path: "/incrisisneedhelp", description: "Immediate crisis resources" },
      { name: "Search for a Professional", path: "/resources/search-professional", description: "Find a therapist or counselor" },
      { name: "E-Counselling", path: "/resources/e-counselling", description: "Online counseling services" },
      { name: "Self Management", path: "/resources/self-management", description: "Tools for managing mental health" }
    ]
  },
  
  // DEPRESSION (Priority 7)
  {
    keywords: [
      "i feel depressed", "i have depression", "feeling depressed",
      "feeling sad", "feeling empty", "feeling worthless",
      "clinically depressed", "major depression", "depressive episode",
      "low mood", "down all the time", "always sad", "can't feel happy",
      "loss of interest", "no motivation", "don't enjoy anything",
      "depressed mood", "feeling down", "in a slump"
    ],
    response: "I hear that you're feeling down. Here are some resources that might help:",
    priority: 7,
    links: [
      { name: "Understanding Depression", path: "/resources/depression", description: "Learn about depression" },
      { name: "Coping with Depression", path: "/resources/self-management", description: "Self-management strategies" },
      { name: "Improve Your Mood", path: "/pattern-interrupt/improve-mood", description: "Mood-boosting activities" },
      { name: "Find a Professional", path: "/resources/search-professional", description: "Get professional help" }
    ]
  },
  
  // ANXIETY (Priority 7)
  {
    keywords: [
      "i feel anxious", "i have anxiety", "feeling anxious",
      "anxiety attack", "generalized anxiety", "social anxiety", 
      "constant worry", "anxiety disorder", "always worried",
      "can't stop worrying", "nervous all the time", "on edge",
      "feel tense", "restless", "anxious thoughts", "worry too much"
    ],
    response: "Anxiety can be overwhelming. Here are some resources to help you cope:",
    priority: 7,
    links: [
      { name: "Understanding Anxiety", path: "/resources/anxiety", description: "Learn about anxiety" },
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Practical coping strategies" },
      { name: "Self Management", path: "/resources/self-management", description: "Manage anxiety symptoms" },
      { name: "Breathing Exercises", path: "/pattern-interrupt/self-management", description: "Calming techniques" },
      { name: "Panic Attack Support", path: "/resources/anxiety", description: "Help for panic attacks" }
    ]
  },
  
  // GRIEF & LOSS (Priority 7)
  {
    keywords: [
      "grief", "bereavement", "lost someone", "someone died",
      "passed away", "mourning", "coping with loss", "death of loved one",
      "lost my parent", "lost my spouse", "lost my child", "lost my friend",
      "dealing with death", "after death", "grieving process"
    ],
    response: "I'm so sorry for your loss. Here are resources for grief support:",
    priority: 7,
    links: [
      { name: "Grief Support", path: "/resources/grief", description: "Coping with loss" },
      { name: "Survivors of Suicide Loss", path: "/resources/suicide-loss", description: "Support after suicide loss" },
      { name: "Bereaved Support", path: "/resources/bereaved-support", description: "Find support groups" },
      { name: "After a Suicide Loss", path: "/resources/after-suicide-loss", description: "Resources for survivors" }
    ]
  },
  
  // PTSD & TRAUMA (Priority 7)
  {
    keywords: [
      "ptsd", "post traumatic stress", "trauma", "traumatic event",
      "flashback", "nightmares trauma", "hypervigilant", "cptsd",
      "past trauma", "childhood trauma", "abuse survivor",
      "sexual assault", "accident trauma", "war trauma",
      "constantly alert", "reliving experience"
    ],
    response: "Healing from trauma takes time. Here are resources that can help:",
    priority: 7,
    links: [
      { name: "Understanding PTSD", path: "/resources/ptsd", description: "Learn about PTSD" },
      { name: "Find a Professional", path: "/resources/search-professional", description: "Trauma-informed therapists" },
      { name: "Self Management", path: "/resources/self-management", description: "Coping strategies" },
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Grounding techniques" }
    ]
  },
  
  // ADDICTION (Priority 7)
  {
    keywords: [
      "addiction", "substance abuse", "alcohol problem", "drug addiction",
      "recovery", "sober living", "drinking problem", "substance use",
      "addicted to drugs", "addicted to alcohol", "can't stop drinking",
      "can't stop using", "withdrawal", "rehab", "AA meetings", "NA meetings"
    ],
    response: "Recovery is possible. Here are resources for addiction support:",
    priority: 7,
    links: [
      { name: "Addiction Resources", path: "/resources/addiction", description: "Support for addiction" },
      { name: "Find Help", path: "/resources/search-professional", description: "Find addiction counselors" },
      { name: "Self Management", path: "/resources/self-management", description: "Recovery strategies" }
    ]
  },

  // 988 CRISIS LINE (Priority 7)
  {
    keywords: [
      "988", "hotline", "helpline", "crisis line", "suicide hotline",
      "crisis hotline", "988 number", "call 988", "text 988",
      "mental health hotline", "emergency hotline"
    ],
    response: "988 is Canada's national suicide prevention hotline. Here's how to connect:",
    priority: 7,
    links: [
      { name: "Call 988", path: "tel:988", description: "Free, confidential support" },
      { name: "Text 988", path: "sms:988", description: "24/7 text support" },
      { name: "Crisis Support Directory", path: "/incrisisneedhelp", description: "More crisis resources" }
    ]
  },

  // SUICIDE PREVENTION (Priority 7)
  {
    keywords: [
      "prevent suicide", "suicide prevention", "prevention",
      "save a life", "stop suicide", "help someone suicidal",
      "suicide intervention", "preventing suicide"
    ],
    response: "Suicide prevention starts with awareness. Here are resources:",
    priority: 7,
    links: [
      { name: "Coping with Suicidal Thoughts", path: "/resources/suicidal-thoughts", description: "Help for yourself" },
      { name: "How Can I Help Someone?", path: "/resources/how-to-help", description: "Support someone in crisis" },
      { name: "Warning Signs", path: "/resources/warning-signs", description: "Know the signs" },
      { name: "Call 988", path: "tel:988", description: "Get help now" }
    ]
  },

  // WARNING SIGNS (Priority 6)
  {
    keywords: [
      "warning signs", "suicide signs", "red flags", "signs of crisis", 
      "how to recognize", "identify crisis", "spotting warning signs",
      "signs someone is struggling", "early warning signs"
    ],
    response: "Recognizing warning signs can help save lives. Here are resources to learn more:",
    priority: 6,
    links: [
      { name: "Warning Signs", path: "/resources/warning-signs", description: "Learn to recognize signs of crisis" },
      { name: "How Can I Help Someone?", path: "/resources/how-to-help", description: "Support someone in need" },
      { name: "Myths & Facts", path: "/resources/myths-facts", description: "Common misconceptions" }
    ]
  },
  // REFUGEES (Priority 6)
  {
    keywords: ["refugee", "asylum seeker", "forced displacement", "newcomer mental health"],
    response: "Adjusting to a new country comes with unique challenges. Here are resources for refugees.",
    priority: 6,
    links: [
      { name: "Refugees", path: "/resources/refugees", description: "Mental health support for refugees" }
    ]
  },

  // MOVIES & FILMS (Priority 7)
  {
    keywords: [
      "movie", "movies", "film", "films", "cinema", "watch movie", 
      "movie suggestion", "recommend movie", "film recommendation",
      "what to watch", "good movies", "mental health movies"
    ],
    response: "Movies can be a powerful tool for healing and perspective. Here are some film recommendations:",
    priority: 7,
    links: [
      { name: "Movies of Inspiration", path: "/pattern-interrupt/movies-inspiration", description: "Films that uplift and inspire" },
      { name: "Helpful Movies", path: "/pattern-interrupt/helpful-movies", description: "Movies about mental health and healing" }
    ]
  },

  // VIDEOS & YOUTUBE (Priority 7)
  {
    keywords: [
      "video", "videos", "youtube", "watch video", "video suggestion", 
      "ted talk", "motivational video", "youtube channel",
      "inspirational video", "calming video"
    ],
    response: "Here are videos to support your mental wellness journey:",
    priority: 7,
    links: [
      { name: "Inspiring Videos", path: "/pattern-interrupt/inspiring-videos", description: "Uplifting and motivational videos" },
      { name: "Emotional Support Videos", path: "/pattern-interrupt/emotional-support", description: "Videos for comfort and understanding" }
    ]
  },

  // MUSIC & SONGS (Priority 7)
  {
    keywords: [
      "music", "song", "songs", "playlist", "listen", "calming music", 
      "uplifting music", "relaxing music", "soothing music", "spotify",
      "apple music", "music therapy", "healing music"
    ],
    response: "Music has the power to heal and transform. Here are some musical resources:",
    priority: 7,
    links: [
      { name: "Uplifting Music Videos", path: "/pattern-interrupt/music", description: "Music to lift your spirits" }
    ]
  },

  // IMAGES & VISUALS (Priority 7)
  {
    keywords: [
      "image", "images", "picture", "pictures", "photo", "photos", 
      "gallery", "visual", "calming images", "art therapy", "wallpaper",
      "beautiful pictures", "nature images"
    ],
    response: "Visual imagery can help calm the mind and lift your spirits. Here are some visual resources:",
    priority: 7,
    links: [
      { name: "Image Gallery", path: "/pattern-interrupt/gallery", description: "Calming and beautiful images" }
    ]
  },

  // BOOKS & READING (Priority 7)
  {
    keywords: [
      "book", "books", "reading", "read", "recommend book", 
      "life changing book", "self help book", "book recommendation",
      "what to read", "good books", "mental health books"
    ],
    response: "Books can be wonderful companions on your healing journey. Here are some recommendations:",
    priority: 7,
    links: [
      { name: "Life Changing Books", path: "/pattern-interrupt/books", description: "Books for growth and healing" }
    ]
  },

  // COMEDY & HUMOR (Priority 7)
  {
    keywords: [
      "comedy", "funny", "laugh", "humor", "jokes", "stand up", 
      "make me laugh", "comedian", "comedy special", "funny videos",
      "laughter therapy"
    ],
    response: "Laughter is powerful medicine. Here are resources to bring some joy:",
    priority: 7,
    links: [
      { name: "Comedy", path: "/pattern-interrupt/comedy", description: "Laugh and lighten your mood" }
    ]
  },

  // INSPIRATION & MOTIVATION (Priority 7)
  {
    keywords: [
      "inspiration", "inspiring", "motivational", "encouragement", 
      "hope", "uplifting", "positive", "affirmation", "daily inspiration",
      "motivation", "stay positive", "positive thinking"
    ],
    response: "Here are resources to inspire and motivate you:",
    priority: 7,
    links: [
      { name: "Inspiring Videos", path: "/pattern-interrupt/inspiring-videos", description: "Uplifting and motivational videos" },
      { name: "Words of Wisdom", path: "/pattern-interrupt/wisdom", description: "Inspirational quotes and affirmations" },
      { name: "Acts of Kindness", path: "/pattern-interrupt/kindness", description: "Spread kindness to feel better" }
    ]
  },

  // MOOD IMPROVEMENT (Priority 7)
  {
    keywords: [
      "improve mood", "feel better", "boost mood", "happy", 
      "happiness", "cheer up", "mood booster", "lift my spirits",
      "feel happier", "increase happiness", "positive mood"
    ],
    response: "Here are resources to help improve your mood:",
    priority: 7,
    links: [
      { name: "Improve Your Mood", path: "/pattern-interrupt/improve-mood", description: "Mood-boosting activities" },
      { name: "Comedy", path: "/pattern-interrupt/comedy", description: "Laugh and lighten your mood" },
      { name: "Uplifting Music Videos", path: "/pattern-interrupt/music", description: "Music to lift your spirits" }
    ]
  },

  // SELF CARE & WELLNESS (Priority 5)
  {
    keywords: [
      "self care", "wellness", "healthy habits", "exercise",
      "meditation", "mindfulness", "take care of myself", "wellness tips",
      "self compassion", "self love", "healthy lifestyle"
    ],
    response: "Taking care of yourself is so important. Here are some resources:",
    priority: 5,
    links: [
      { name: "Self Management", path: "/resources/self-management", description: "Wellness strategies" },
      { name: "Improve Your Mood", path: "/pattern-interrupt/improve-mood", description: "Mood-boosting activities" },
      { name: "Mental Health Apps", path: "/pattern-interrupt/apps", description: "Helpful wellness apps" },
      { name: "Inspiring Videos", path: "/pattern-interrupt/inspiring-videos", description: "Find inspiration" }
    ]
  },

  // SLEEP (Priority 6)
  {
    keywords: [
      "insomnia", "can't sleep", "trouble sleeping", "difficulty sleeping", 
      "sleep problems", "waking up tired", "sleep hygiene", "poor sleep",
      "can't fall asleep", "wake up at night", "restless sleep"
    ],
    response: "Sleep is important for mental health. Here are some resources that might help:",
    priority: 6,
    links: [
      { name: "Self Management", path: "/resources/self-management", description: "Sleep hygiene tips" },
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Relaxation techniques" }
    ]
  },

  // ANGER MANAGEMENT (Priority 6)
  {
    keywords: [
      "anger management", "controlling anger", "i feel angry",
      "rage issues", "temper problems", "anger issues", "losing temper",
      "irritated", "frustrated", "easily angered"
    ],
    response: "It sounds like you're feeling frustrated. Here are some resources to help:",
    priority: 6,
    links: [
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Manage anger" },
      { name: "Self Management", path: "/resources/self-management", description: "Emotional regulation" }
    ]
  },

  // RELATIONSHIPS (Priority 6)
  {
    keywords: [
      "relationship problems", "partner issues", "friend problems",
      "family conflict", "fighting with partner", "breakup", "divorce",
      "relationship advice", "couples therapy", "communication issues"
    ],
    response: "Relationships can be challenging. Here are some resources:",
    priority: 6,
    links: [
      { name: "How Can I Help Someone?", path: "/resources/how-to-help", description: "Supporting loved ones" },
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Healthy communication" }
    ]
  },

  // WORK & SCHOOL STRESS (Priority 6)
  {
    keywords: [
      "work stress", "school stress", "job pressure", "teacher problems", 
      "deadline stress", "burnout", "work burnout", "academic pressure",
      "work anxiety", "exam stress", "assignment stress"
    ],
    response: "Work and school stress can be overwhelming. Here are some resources:",
    priority: 6,
    links: [
      { name: "Self Management", path: "/resources/self-management", description: "Stress management" },
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Coping strategies" },
      { name: "Improve Your Mood", path: "/pattern-interrupt/improve-mood", description: "Boost your mood" }
    ]
  },

  // LONELINESS (Priority 6)
  {
    keywords: [
      "feel lonely", "feel isolated", "no friends", "by myself", 
      "no one to talk to", "social isolation", "lonely", "alone",
      "isolated", "disconnected", "no support system"
    ],
    response: "Feeling lonely is really hard. Here are some resources to connect:",
    priority: 6,
    links: [
      { name: "Call 988", path: "tel:988", description: "Talk to someone now" },
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Ways to cope" },
      { name: "Get Involved", path: "/volunteers", description: "Connect with community" }
    ]
  },

  // TEENS & YOUTH (Priority 6)
  {
    keywords: [
      "teen", "youth", "student", "young person", "adolescent", 
      "high school", "teenager", "young adult", "college student",
      "university student", "gen z", "young people"
    ],
    response: "Here are resources specifically for teens and young adults:",
    priority: 6,
    links: [
      { name: "Teens & Youth", path: "/resources/teens-youth", description: "Support for young people" },
      { name: "College Students", path: "/resources/college-students", description: "Campus mental health" },
      { name: "Warning Signs", path: "/resources/warning-signs", description: "Recognize warning signs" },
      { name: "How Can I Help Someone?", path: "/resources/how-to-help", description: "Supporting friends" }
    ]
  },
  
  // PARENTS & FAMILY (Priority 6)
  {
    keywords: [
      "parent", "family",  
      "mother", "father", "parenting", "mom", "dad", "parents",
      "family support", 
    ],
    response: "Here are resources for parents and families:",
    priority: 6,
    links: [
      { name: "Parents Support", path: "/resources/parents", description: "Support for parents" },
      { name: "How Can I Help Someone?", path: "/resources/how-to-help", description: "Supporting loved ones" },
      { name: "Warning Signs", path: "/resources/warning-signs", description: "Recognize warning signs" },
      { name: "Grief Support", path: "/resources/grief", description: "Family grief resources" }
    ]
  },
  
  // LGBTQ2S+ (Priority 6)
  {
    keywords: [
      "lgbtq", "queer", "trans", "gay", "lesbian", "bisexual", 
      "nonbinary", "gender", "lgbtq support", "pride", "lgbtqia",
      "gender identity", "sexual orientation"
    ],
    response: "Here are resources for the LGBTQ2S+ community:",
    priority: 6,
    links: [
      { name: "LGBTQ2S+ Support", path: "/resources/lgbtq2s", description: "Affirming mental health support" },
      { name: "Teens & Youth", path: "/resources/teens-youth", description: "Support for LGBTQ2S+ youth" }
    ]
  },
  
  // INDIGENOUS (Priority 6)
  {
    keywords: [
      "indigenous", "first nations", "native", "metis", "inuit", 
      "aboriginal", "indigenous support", "native american",
      "indigenous health", "first nations support"
    ],
    response: "Here are culturally appropriate resources for Indigenous communities:",
    priority: 6,
    links: [
      { name: "Indigenous Resources", path: "/resources/indigenous", description: "Culturally grounded support" },
      { name: "Crisis Support", path: "/incrisisneedhelp", description: "Immediate crisis resources" }
    ]
  },

    // SENIORS (Priority 6)
  {
    keywords: ["senior", "elderly", "older adult", "aging", "senior mental health"],
    response: "Mental health matters at every age. Here are resources for seniors.",
    priority: 6,
    links: [
      { name: "Seniors", path: "/resources/seniors", description: "Mental health support for seniors" }
    ]
  },
  
  // MEN (Priority 6)
  {
    keywords: [
      "men", "male", "guy", "father", "husband", "men's mental health",
      "masculine", "mens issues", "male mental health"
    ],
    response: "Here are resources specifically for men:",
    priority: 6,
    links: [
      { name: "Men's Mental Health", path: "/resources/men", description: "Support for men" },
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Healthy coping strategies" }
    ]
  },
  
  // VETERANS & MILITARY (Priority 6)
  {
    keywords: [
      "veteran", "military", "army", "navy", "air force", "serving", 
      "soldier", "veteran support", "armed forces", "ex military",
      "military service", "combat veteran"
    ],
    response: "Here are resources for veterans and military personnel:",
    priority: 6,
    links: [
      { name: "Veterans Support", path: "/resources/veterans", description: "Mental health for veterans" },
      { name: "PTSD Resources", path: "/resources/ptsd", description: "Trauma support" }
    ]
  },
  
  // PROFESSIONALS & THERAPISTS (Priority 6)
  {
    keywords: [
      "professional", "therapist", "counselor", "psychologist", 
      "social worker", "clinician", "find a therapist", "therapy",
      "mental health professional", "psychiatrist"
    ],
    response: "Here are resources for finding professional help:",
    priority: 6,
    links: [
      { name: "Search for a Professional", path: "/resources/search-professional", description: "Find a therapist" },
      { name: "Health Professionals", path: "/resources/health-professionals", description: "Resources for providers" },
      { name: "Educators", path: "/resources/educators", description: "Resources for teachers" },
      { name: "First Responders", path: "/resources/first-responders", description: "Support for first responders" }
    ]
  },

  // COMPANION PAWS (Priority 6)
  {
    keywords: [
      "companion paws", "therapy dog", "animal therapy", "dog adoption", 
      "therapy pet", "emotional support dog", "dog therapy", "service dog",
      "emotional support animal", "pet therapy", "canine therapy"
    ],
    response: "Companion Paws Canada connects therapy dogs with individuals and organizations in need:",
    priority: 6,
    links: [
      { name: "Companion Paws Canada", path: "https://companionpaws.ca/", description: "Visit Companion Paws website" },
      { name: "Therapy Dog Programs", path: "https://companionpaws.ca/personal-therapy-dog-adoption/", description: "Adopt a therapy dog" }
    ]
  },



  // GREETINGS (Priority 5)
  {
    keywords: [
      "hello", "hi", "hey", "greetings", "good morning", 
      "good afternoon", "good evening", "what's up", "yo", "hi there"
    ],
    response: "Hello! I'm here to support you. You can ask me about:",
    priority: 5,
    links: [
      { name: "Mental Health Resources", path: "/resources", description: "Find help and information" },
      { name: "Pattern Interrupts", path: "/pattern-interrupts", description: "Break negative cycles" },
      { name: "Crisis Support", path: "/incrisisneedhelp", description: "Get help now" },
      { name: "About TLC", path: "/about-us", description: "Learn about us" }
    ]
  },
  
  // HOW ARE YOU (Priority 5)
  {
    keywords: [
      "how are you", "how are you doing", "how's it going",
      "how are things", "how do you do"
    ],
    response: "I'm here to support you. More importantly, how are YOU feeling today?",
    priority: 5
  },
  
  // GRATITUDE (Priority 5)
  {
    keywords: [
      "thank", "thanks", "appreciate", "grateful", "thank you",
      "much appreciated", "thanks a lot", "thank you so much"
    ],
    response: "You're welcome. Remember, you're not alone. Is there anything else you'd like to explore?",
    priority: 5,
    links: [
      { name: "Browse Resources", path: "/resources", description: "Find more support" },
      { name: "Pattern Interrupts", path: "/pattern-interrupts", description: "Explore wellness tools" }
    ]
  },

  // CALL LINE SUPPORT (Priority 3) - Focus on VOICE/PHONE only
{
  keywords: [
    "call line", "phone line", "helpline", "hotline", "crisis line",
    "support line", "mental health line", "distress line", "talk to someone",
    "call someone", "phone support", "kids help phone", "hope for wellness",
    "trans lifeline", "trevor project", "veterans crisis line",
    "national suicide prevention", "need to talk"
  ],
  response: "You're not alone. Crisis support is available 24/7 by phone.",
  priority: 3,
  links: [
    { name: "Crisis Call Lines", path: "/in-crisis-help/support-and-call-lines", description: "Find phone support in your area" }
  ]
},

// CHAT SUPPORT (Priority 4) - Focus on WEB/ONLINE/EMAIL only
{
  keywords: [
    "online chat", "chat line", "chat support", "live chat", 
    "web chat", "online counseling",
    "teen chat", "youth chat", "kids helpline", "childline chat",
    "prefer to write", "compose my thoughts", "record of advice",
    "write an email", "send an email", "online messaging"
  ],
  response: "Sometimes it's easier to open up through chat where you can compose your thoughts. Online chat and email support options are available.",
  priority: 4,
  links: [
    { name: "Online Chat Support", path: "/in-crisis-help/email-chat", description: "Chat and email crisis support" }
  ]
},

// TEXT CHAT SUPPORT (Priority 4) - Focus on SMS/TEXT only
{
  keywords: [
    "text chat", "text line", "text support", "sms support",
    "text helpline", "text crisis line", "text a counselor",
    "text a counsellor", "crisis text line", "text message",
    "text connect", "text matter", "text voice", "text teen",
    "text trevor", "hopeline uk", "samaritans text",
    "prefer to text", "kids help phone text", "connecteen text", "lowdown nz"
  ],
  response: "Sometimes it's easier to open up through text where you can compose your thoughts. Text chat support options are available.",
  priority: 4,
  links: [
    { name: "Text Chat Support", path: "/in-crisis-help/textchat", description: "Free text-based crisis support" }
  ]
},
// DONATE / CONTRIBUTE (Priority 6)
{
  keywords: ["donate", "donation", "contribute", "contribution", "support us", "give money", "financial support", "fundraise", "sponsor"],
  response: "Thank you for your generosity. Your contribution helps us continue providing mental health support.",
  priority: 6,
  links: [
    { name: "Make a Donation", path: "/contribute", description: "Support mental health crisis support" }
  ]
},

// VOLUNTEERS (Priority 6)
{
  keywords: ["volunteer", "volunteering", "volunteer opportunity", "become a volunteer", "help out", "give time", "volunteer program"],
  response: "Thank you for your interest in volunteering. Volunteers are the heart of our mission.",
  priority: 6,
  links: [
    { name: "Volunteer Opportunities", path: "/volunteers", description: "Join our team" }
  ]
},
// KIDS TEXT SUPPORT (Priority 4)
{
  keywords: [
    "kid help",
    "help kid",
    "kid crisis",
    "crisis support kid",
    "kid support",
    "kid connect",
    "kid text help",
    "kid hotline",
    "kid emergency help",
    "child", "kids", "son", "daughter",
  ],
  response: "If you need immediate support, you can text Kids Help Phone. Text CONNECT for English or PARLER for French to 686868 to talk with a trained responder.",
  priority: 4,
  links: [
    { name: "Text Support", path: "/in-crisis-help/textchat", description: "Start a confidential text conversation" }
  ]
},
  // DEFAULT (Lowest Priority - Priority 0)
  {
    keywords: ["default"],
    response: "I'm here to help! You can ask me about:",
    priority: 0,
    links: [
      { name: "Mental Health Resources", path: "/resources", description: "Find support for depression, anxiety, PTSD and more" },
      { name: "Pattern Interrupts", path: "/pattern-interrupts", description: "Break negative thought patterns" },
      { name: "Crisis Support (988)", path: "/incrisisneedhelp", description: "Get immediate help" },
      { name: "Login / Account", path: "/app?mode=login", description: "Access your dashboard" },
      { name: "About TLC", path: "/about-us", description: "Learn about our mission" },
      { name: "Companion Paws", path: "https://companionpaws.ca/", description: "Therapy dog programs" }
    ]
  }
];

class ResponseMapperService {
  getAllRules() {
    return chatbotResponses;
  }

  getDefaultResponse() {
    return chatbotResponses.find(r => r.keywords[0] === 'default') || chatbotResponses[0];
  }

  getIntentName(rule) {
    if (rule.priority === 10) return 'crisis';
    if (rule.priority === 9) return 'emergency';
    if (rule.keywords && rule.keywords.some(k => ['anxiety', 'anxious', 'panic', 'nervous', 'worried'].includes(k))) return 'anxiety';
    if (rule.keywords && rule.keywords.some(k => ['depression', 'depressed', 'sad', 'hopeless', 'worthless', 'empty'].includes(k))) return 'depression';
    if (rule.keywords && rule.keywords.some(k => ['grief', 'loss', 'died', 'passed away'].includes(k))) return 'grief';
    return 'general';
  }

  findRuleByKeyword(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return chatbotResponses.find(rule => 
      rule.keywords && rule.keywords.some(k => k.toLowerCase() === lowerKeyword)
    ) || null;
  }
}

export default { ResponseMapperService, chatbotResponses };