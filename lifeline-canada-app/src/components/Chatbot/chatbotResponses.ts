// data/chatbotResponses.ts
export interface ChatbotRule {
  keywords: string[];
  response: string;
  priority?: number;
  requiresEscalation?: boolean;
  links?: Array<{ name: string; path?: string; description?: string }>;
}

export const chatbotResponses: ChatbotRule[] = [
  // Crisis / Suicide - HIGHEST PRIORITY
  {
    keywords: ["crisis", "suicide", "kill myself", "want to die", "end my life", "hopeless", "no reason to live", "can't go on", "give up"],
    response: "I'm really concerned about you. Please reach out immediately: Call or text 988 for the Suicide Crisis Helpline. You are not alone.",
    priority: 10,
    requiresEscalation: true,
    links: [
      { name: "Call 988", path: "tel:988", description: "Free, confidential crisis support" },
      { name: "Text 988", path: "sms:988", description: "24/7 text support" },
      { name: "Crisis Support Directory", path: "/incrisisneedhelp", description: "More crisis resources" }
    ]
  },
  {
    keywords: ["emergency", "danger", "hurt myself", "hurt others", "immediate danger"],
    response: "This sounds like an emergency. Please call 911 immediately for immediate assistance. Your safety is the most important thing right now.",
    priority: 9,
    requiresEscalation: true,
    links: [
      { name: "Call 911", path: "tel:911", description: "Emergency services" }
    ]
  },
  
  // Login / Account
  {
    keywords: ["login", "sign in", "log in", "account", "access", "dashboard", "my account"],
    response: "You can access your account here:",
    priority: 8,
    links: [
      { name: "Login to Your Account", path: "/app?mode=login", description: "Access your personal dashboard" },
      { name: "Create New Account", path: "/app?mode=signup", description: "Sign up for free" },
      { name: "LifeLine App", path: "/app", description: "Explore the app features" }
    ]
  },
  
  // About TLC
  {
    keywords: ["about", "who are you", "what is tlc", "lifeline canada", "about the foundation"],
    response: "The LifeLine Canada Foundation (TLC) is a registered nonprofit committed to positive mental health and suicide prevention. Here's how to learn more:",
    priority: 7,
    links: [
      { name: "About Us", path: "/about-us", description: "Our mission and story" },
      { name: "Contact Us", path: "/contact-us", description: "Get in touch with us" },
      { name: "Get Involved", path: "/volunteers", description: "Volunteer opportunities" },
      { name: "Contribute", path: "/contribute", description: "Support our mission" }
    ]
  },
  
  // Contact
  {
    keywords: ["contact", "email", "reach", "phone", "call us", "support email"],
    response: "You can reach us through:",
    priority: 7,
    links: [
      { name: "Contact Form", path: "/contact-us", description: "Send us a message" },
      { name: "Email Support", path: "/support", description: "Support email" },
      { name: "Volunteer Opportunities", path: "/volunteers", description: "Join our team" }
    ]
  },
  
 // Core Pattern Interrupts - Main
{
  keywords: ["pattern interrupt", "break pattern", "interrupt", "negative thoughts", "break cycle", "pattern interruption"],
  response: "Pattern Interrupts help break negative thought cycles. Here are resources to get started:",
  priority: 8,
  links: [
    { name: "Explore Pattern Interrupts", path: "/pattern-interrupts", description: "Start breaking negative patterns" },
    { name: "Self Management Tools", path: "/pattern-interrupt/self-management", description: "Practical techniques" },
    { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Healthy coping strategies" },
    { name: "Transform Negative Thoughts", path: "/pattern-interrupt/transform-thoughts", description: "Change your thinking patterns" },
    { name: "Improve Your Mood", path: "/pattern-interrupt/improve-mood", description: "Mood-boosting activities" },
    { name: "Mental Health Apps", path: "/pattern-interrupt/apps", description: "Helpful apps for wellness" },
    { name: "Interactive Mind", path: "/pattern-interrupt/interactive-mind", description: "Interactive tools for mental wellness" }
  ]
},

// Movies & Films
{
  keywords: ["movie", "movies", "film", "films", "cinema", "watch movie", "movie suggestion", "recommend movie"],
  response: "Movies can be a powerful tool for healing and perspective. Here are some film recommendations:",
  priority: 7,
  links: [
    { name: "Movies of Inspiration", path: "/pattern-interrupt/movies-inspiration", description: "Films that uplift and inspire" },
    { name: "Helpful Movies", path: "/pattern-interrupt/helpful-movies", description: "Movies about mental health and healing" }
  ]
},

// Videos & YouTube
{
  keywords: ["video", "videos", "youtube", "watch video", "video suggestion", "ted talk"],
  response: "Here are videos to support your mental wellness journey:",
  priority: 7,
  links: [
    { name: "Inspiring Videos", path: "/pattern-interrupt/inspiring-videos", description: "Uplifting and motivational videos" },
    { name: "Emotional Support Videos", path: "/pattern-interrupt/emotional-support", description: "Videos for comfort and understanding" }
  ]
},

// Music & Songs
{
  keywords: ["music", "song", "songs", "playlist", "listen", "calming music", "uplifting music", "relaxing music"],
  response: "Music has the power to heal and transform. Here are some musical resources:",
  priority: 7,
  links: [
    { name: "Uplifting Music Videos", path: "/pattern-interrupt/music", description: "Music to lift your spirits" }
  ]
},

// Images & Visuals
{
  keywords: ["image", "images", "picture", "pictures", "photo", "photos", "gallery", "visual", "calming images"],
  response: "Visual imagery can help calm the mind and lift your spirits. Here are some visual resources:",
  priority: 7,
  links: [
    { name: "Image Gallery", path: "/pattern-interrupt/gallery", description: "Calming and beautiful images" }
  ]
},

// Books & Reading
{
  keywords: ["book", "books", "reading", "read", "recommend book", "life changing book", "self help book"],
  response: "Books can be wonderful companions on your healing journey. Here are some recommendations:",
  priority: 7,
  links: [
    { name: "Life Changing Books", path: "/pattern-interrupt/books", description: "Books for growth and healing" }
  ]
},

// Comedy & Humor
{
  keywords: ["comedy", "funny", "laugh", "humor", "jokes", "stand up", "make me laugh"],
  response: "Laughter is powerful medicine. Here are resources to bring some joy:",
  priority: 7,
  links: [
    { name: "Comedy", path: "/pattern-interrupt/comedy", description: "Laugh and lighten your mood" }
  ]
},

// Inspiration & Motivation
{
  keywords: ["inspiration", "inspiring", "motivational", "encouragement", "hope", "uplifting", "positive", "affirmation"],
  response: "Here are resources to inspire and motivate you:",
  priority: 7,
  links: [
    { name: "Inspiring Videos", path: "/pattern-interrupt/inspiring-videos", description: "Uplifting and motivational videos" },
    { name: "Words of Wisdom", path: "/pattern-interrupt/wisdom", description: "Inspirational quotes and affirmations" },
    { name: "Acts of Kindness", path: "/pattern-interrupt/kindness", description: "Spread kindness to feel better" }
  ]
},

// Mood Improvement
{
  keywords: ["mood", "improve mood", "feel better", "boost mood", "happy", "happiness", "cheer up"],
  response: "Here are resources to help improve your mood:",
  priority: 7,
  links: [
    { name: "Improve Your Mood", path: "/pattern-interrupt/improve-mood", description: "Mood-boosting activities" },
    { name: "Comedy", path: "/pattern-interrupt/comedy", description: "Laugh and lighten your mood" },
    { name: "Uplifting Music Videos", path: "/pattern-interrupt/music", description: "Music to lift your spirits" }
  ]
},
  
  // Resources - General
  {
    keywords: ["resource", "help", "support", "where to go", "who to call", "find help", "get help"],
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
  
  // Depression
  {
    keywords: ["depressed", "depression", "sad", "down", "empty", "worthless", "feeling down"],
    response: "I hear that you're feeling down. Here are some resources that might help:",
    priority: 7,
    links: [
      { name: "Understanding Depression", path: "/resources/depression", description: "Learn about depression" },
      { name: "Coping with Depression", path: "/resources/self-management", description: "Self-management strategies" },
      { name: "Improve Your Mood", path: "/pattern-interrupt/improve-mood", description: "Mood-boosting activities" },
      { name: "Find a Professional", path: "/resources/search-professional", description: "Get professional help" }
    ]
  },
  
  // Anxiety
  {
    keywords: ["anxious", "anxiety", "panic", "overwhelmed", "worry", "stressed", "nervous", "scared", "fear"],
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
  {
    keywords: ["panic attack", "racing heart", "can't breathe", "hyperventilating"],
    response: "It sounds like you're having a panic attack. Here are some resources to help:",
    priority: 8,
    links: [
      { name: "Coping with Panic", path: "/resources/anxiety", description: "Strategies for panic attacks" },
      { name: "Breathing Exercises", path: "/pattern-interrupt/self-management", description: "Calm your breathing" },
      { name: "Call 988", path: "tel:988", description: "Talk to someone now" }
    ]
  },
  
  // Grief / Loss
  {
    keywords: ["grief", "loss", "died", "passed away", "funeral", "mourning", "bereavement"],
    response: "I'm so sorry for your loss. Here are resources for grief support:",
    priority: 7,
    links: [
      { name: "Grief Support", path: "/resources/grief", description: "Coping with loss" },
      { name: "Survivors of Suicide Loss", path: "/resources/suicide-loss", description: "Support after suicide loss" },
      { name: "Bereaved Support", path: "/resources/bereaved-support", description: "Find support groups" },
      { name: "After a Suicide Loss", path: "/resources/after-suicide-loss", description: "Resources for survivors" }
    ]
  },
  
  // PTSD / Trauma
  {
    keywords: ["ptsd", "trauma", "traumatic", "flashback", "nightmare", "hypervigilant"],
    response: "Healing from trauma takes time. Here are resources that can help:",
    priority: 7,
    links: [
      { name: "Understanding PTSD", path: "/resources/ptsd", description: "Learn about PTSD" },
      { name: "Find a Professional", path: "/resources/search-professional", description: "Trauma-informed therapists" },
      { name: "Self Management", path: "/resources/self-management", description: "Coping strategies" },
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Grounding techniques" }
    ]
  },
  
  // Addiction
  {
    keywords: ["addiction", "substance", "alcohol", "drugs", "recovery", "sober", "drinking"],
    response: "Recovery is possible. Here are resources for addiction support:",
    priority: 7,
    links: [
      { name: "Addiction Resources", path: "/resources/addiction", description: "Support for addiction" },
      { name: "Find Help", path: "/resources/search-professional", description: "Find addiction counselors" },
      { name: "Self Management", path: "/resources/self-management", description: "Recovery strategies" }
    ]
  },
  
  // Teens / Youth
  {
    keywords: ["teen", "youth", "student", "young person", "adolescent", "high school"],
    response: "Here are resources specifically for teens and young adults:",
    priority: 6,
    links: [
      { name: "Teens & Youth", path: "/resources/teens-youth", description: "Support for young people" },
      { name: "College Students", path: "/resources/college-students", description: "Campus mental health" },
      { name: "Warning Signs", path: "/resources/warning-signs", description: "Recognize warning signs" },
      { name: "How Can I Help Someone?", path: "/resources/how-to-help", description: "Supporting friends" }
    ]
  },
  
  // Parents / Family
  {
    keywords: ["parent", "family", "child", "kids", "son", "daughter", "mother", "father"],
    response: "Here are resources for parents and families:",
    priority: 6,
    links: [
      { name: "Parents Support", path: "/resources/parents", description: "Support for parents" },
      { name: "How Can I Help Someone?", path: "/resources/how-to-help", description: "Supporting loved ones" },
      { name: "Warning Signs", path: "/resources/warning-signs", description: "Recognize warning signs" },
      { name: "Grief Support", path: "/resources/grief", description: "Family grief resources" }
    ]
  },
  
  // LGBTQ2S+
  {
    keywords: ["lgbtq", "queer", "trans", "gay", "lesbian", "bisexual", "nonbinary", "gender"],
    response: "Here are resources for the LGBTQ2S+ community:",
    priority: 6,
    links: [
      { name: "LGBTQ2S+ Support", path: "/resources/lgbtq2s", description: "Affirming mental health support" },
      { name: "Teens & Youth", path: "/resources/teens-youth", description: "Support for LGBTQ2S+ youth" }
    ]
  },
  
  // Indigenous
  {
    keywords: ["indigenous", "first nations", "native", "metis", "inuit", "aboriginal"],
    response: "Here are culturally appropriate resources for Indigenous communities:",
    priority: 6,
    links: [
      { name: "Indigenous Resources", path: "/resources/indigenous", description: "Culturally grounded support" },
      { name: "Crisis Support", path: "/incrisisneedhelp", description: "Immediate crisis resources" }
    ]
  },
  
  // Men
  {
    keywords: ["men", "male", "guy", "father", "husband"],
    response: "Here are resources specifically for men:",
    priority: 6,
    links: [
      { name: "Men's Mental Health", path: "/resources/men", description: "Support for men" },
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Healthy coping strategies" }
    ]
  },
  
  // Veterans / Military
  {
    keywords: ["veteran", "military", "army", "navy", "air force", "serving", "soldier"],
    response: "Here are resources for veterans and military personnel:",
    priority: 6,
    links: [
      { name: "Veterans Support", path: "/resources/veterans", description: "Mental health for veterans" },
      { name: "PTSD Resources", path: "/resources/ptsd", description: "Trauma support" }
    ]
  },
  
  // Professionals / Therapists
  {
    keywords: ["professional", "therapist", "counselor", "psychologist", "social worker", "clinician"],
    response: "Here are resources for finding professional help:",
    priority: 6,
    links: [
      { name: "Search for a Professional", path: "/resources/search-professional", description: "Find a therapist" },
      { name: "Health Professionals", path: "/resources/health-professionals", description: "Resources for providers" },
      { name: "Educators", path: "/resources/educators", description: "Resources for teachers" },
      { name: "First Responders", path: "/resources/first-responders", description: "Support for first responders" }
    ]
  },
  
  // 988 Crisis Line
  {
    keywords: ["988", "hotline", "helpline", "crisis line", "suicide hotline"],
    response: "988 is Canada's national suicide prevention hotline. Here's how to connect:",
    priority: 7,
    links: [
      { name: "Call 988", path: "tel:988", description: "Free, confidential support" },
      { name: "Text 988", path: "sms:988", description: "24/7 text support" },
      { name: "Crisis Support Directory", path: "/incrisisneedhelp", description: "More crisis resources" }
    ]
  },
  
  // Companion Paws
  {
    keywords: ["companion paws", "therapy dog", "animal therapy", "dog adoption", "therapy pet", "dog"],
    response: "Companion Paws Canada connects therapy dogs with individuals and organizations in need:",
    priority: 6,
    links: [
      { name: "Companion Paws Canada", path: "https://companionpaws.ca/", description: "Visit Companion Paws website" },
      { name: "Therapy Dog Programs", path: "https://companionpaws.ca/personal-therapy-dog-adoption/", description: "Adopt a therapy dog" }
    ]
  },
  
  // Warning Signs
  {
    keywords: ["warning signs", "signs", "symptoms", "red flags", "notice"],
    response: "Recognizing warning signs can help save lives. Here are resources to learn more:",
    priority: 6,
    links: [
      { name: "Warning Signs", path: "/resources/warning-signs", description: "Learn to recognize signs of crisis" },
      { name: "How Can I Help Someone?", path: "/resources/how-to-help", description: "Support someone in need" },
      { name: "Myths & Facts", path: "/resources/myths-facts", description: "Common misconceptions" }
    ]
  },
  
  // Suicide Prevention
  {
    keywords: ["prevent suicide", "suicide prevention", "prevention", "save a life"],
    response: "Suicide prevention starts with awareness. Here are resources:",
    priority: 7,
    links: [
      { name: "Coping with Suicidal Thoughts", path: "/resources/suicidal-thoughts", description: "Help for yourself" },
      { name: "How Can I Help Someone?", path: "/resources/how-to-help", description: "Support someone in crisis" },
      { name: "Warning Signs", path: "/resources/warning-signs", description: "Know the signs" },
      { name: "Call 988", path: "tel:988", description: "Get help now" }
    ]
  },
  
  // Self Care / Wellness
  {
    keywords: ["self care", "wellness", "healthy", "exercise", "meditation", "mindfulness", "take care"],
    response: "Taking care of yourself is so important. Here are some resources:",
    priority: 5,
    links: [
      { name: "Self Management", path: "/resources/self-management", description: "Wellness strategies" },
      { name: "Improve Your Mood", path: "/pattern-interrupt/improve-mood", description: "Mood-boosting activities" },
      { name: "Mental Health Apps", path: "/pattern-interrupt/apps", description: "Helpful wellness apps" },
      { name: "Inspiring Videos", path: "/pattern-interrupt/inspiring-videos", description: "Find inspiration" }
    ]
  },
  
  // Greetings
  {
    keywords: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"],
    response: "Hello! I'm here to support you. You can ask me about:",
    priority: 5,
    links: [
      { name: "Mental Health Resources", path: "/resources", description: "Find help and information" },
      { name: "Pattern Interrupts", path: "/pattern-interrupts", description: "Break negative cycles" },
      { name: "Crisis Support", path: "/incrisisneedhelp", description: "Get help now" },
      { name: "About TLC", path: "/about-us", description: "Learn about us" }
    ]
  },
  {
    keywords: ["how are you", "how are you doing"],
    response: "I'm here to support you. More importantly, how are YOU feeling today?",
    priority: 5
  },
  
  // Gratitude
  {
    keywords: ["thank", "thanks", "appreciate", "grateful"],
    response: "You're welcome. Remember, you're not alone. Is there anything else you'd like to explore?",
    priority: 5,
    links: [
      { name: "Browse Resources", path: "/resources", description: "Find more support" },
      { name: "Pattern Interrupts", path: "/pattern-interrupts", description: "Explore wellness tools" }
    ]
  },
  
  // Sleep
  {
    keywords: ["sleep", "insomnia", "tired", "can't sleep", "restless"],
    response: "Sleep is important for mental health. Here are some resources that might help:",
    priority: 6,
    links: [
      { name: "Self Management", path: "/resources/self-management", description: "Sleep hygiene tips" },
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Relaxation techniques" }
    ]
  },
  
  // Anger / Frustration
  {
    keywords: ["angry", "frustrated", "mad", "annoyed", "upset"],
    response: "It sounds like you're feeling frustrated. Here are some resources to help:",
    priority: 6,
    links: [
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Manage anger" },
      { name: "Self Management", path: "/resources/self-management", description: "Emotional regulation" }
    ]
  },
  
  // Relationships
  {
    keywords: ["relationship", "partner", "friend", "family", "fighting", "argument", "breakup"],
    response: "Relationships can be challenging. Here are some resources:",
    priority: 6,
    links: [
      { name: "How Can I Help Someone?", path: "/resources/how-to-help", description: "Supporting loved ones" },
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Healthy communication" }
    ]
  },
  
  // Work / School Stress
  {
    keywords: ["work", "school", "job", "boss", "teacher", "deadline", "pressure", "burnout"],
    response: "Work and school stress can be overwhelming. Here are some resources:",
    priority: 6,
    links: [
      { name: "Self Management", path: "/resources/self-management", description: "Stress management" },
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Coping strategies" },
      { name: "Improve Your Mood", path: "/pattern-interrupt/improve-mood", description: "Boost your mood" }
    ]
  },
  
  // Loneliness
  {
    keywords: ["lonely", "isolation", "no one", "alone", "abandoned"],
    response: "Feeling lonely is really hard. Here are some resources to connect:",
    priority: 6,
    links: [
      { name: "Call 988", path: "tel:988", description: "Talk to someone now" },
      { name: "Coping Mechanisms", path: "/pattern-interrupt/coping", description: "Ways to cope" },
      { name: "Get Involved", path: "/volunteers", description: "Connect with community" }
    ]
  },

  // Email Verification & Account Help
  {
    keywords: [
      "verify email", "email verification", "confirm email", "verification link", 
      "didn't get email", "no email", "verification not received", "check spam", 
      "junk folder", "promotions tab", "resend verification", "how to verify"
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

  // Privacy & Data Collection
  {
    keywords: ["privacy policy", "data collection", "privacy concerns", "what data", "personal information", "store data", "data policy"],
    response: "Your privacy is our priority. Here's what you should know:",
    priority: 7,
    links: [
      { name: "Privacy Policy", path: "/privacy?mode=privacy", description: "Read our full privacy policy" },
      { name: "What We Collect", description: "We only collect your name and email to support your wellness journey" },
      { name: "Data Protection", description: "Your information is encrypted and never shared without consent" },
      { name: "Your Control", description: "You can access, update, or delete your data anytime" }
    ]
  },

  // Why Sign Up / Benefits
  {
    keywords: ["why sign up", "why create account", "benefits of account", "what do I get", "sign up benefits", "why register", "create account benefits", "is it worth it", "why should I sign up", "what's in the app", "dashboard features", "after login", "what happens after login"],
    response: "Creating a free account unlocks personalized tools to support your mental wellness journey:",
    priority: 7,
    links: [
      { name: "Mood Tracker", description: "Track your daily mood, identify patterns, and see your progress over time" },
      { name: "Breathing Exercises", description: "Guided techniques to calm anxiety and reduce stress" },
      { name: "My Resources", description: "Save and organize mental health resources that resonate with you" },
      { name: "Personalized Dashboard", description: "Your central hub for wellness insights and tools" }
    ]
  },

  // Dashboard Features
  {
    keywords: ["dashboard features", "what's in dashboard", "dashboard explained", "app features", "lifeline app features"],
    response: "After you sign up and log in, your personal dashboard gives you access to:",
    priority: 7,
    links: [
      { name: "Mood Tracker", description: "Log daily emotions, track triggers, and visualize mood patterns" },
      { name: "Breathing Exercises", description: "Guided sessions for anxiety relief, stress reduction, and better sleep" },
      { name: "My Resources", description: "Bookmark articles, videos, and tools that work for you" },
      { name: "Settings", description: "Manage your profile, notifications, and privacy preferences" }
    ]
  },

  // Sign Up Process
  {
    keywords: ["sign up process", "how to sign up", "create account steps", "registration steps", "account creation"],
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

  // Mood Tracker Benefits
  {
    keywords: ["mood tracker benefit", "why track mood", "mood journal", "benefits of mood tracking", "mood tracking helps"],
    response: "Mood tracking is a powerful tool for mental wellness. After you sign up, you can:",
    priority: 6,
    links: [
      { name: "Identify Patterns", description: "See how your mood changes with sleep, stress, and daily activities" },
      { name: "Recognize Triggers", description: "Discover what situations affect your mental health" },
      { name: "Track Progress", description: "Celebrate improvements and see your growth over time" },
      { name: "Share with Professionals", description: "Share your mood history with therapists or counselors" }
    ]
  },

  // Breathing Exercises Benefits
  {
    keywords: ["breathing exercises", "breathing benefits", "why breathing exercises", "calm breathing", "anxiety breathing", "stress relief breathing"],
    response: "Once you create an account, you'll get access to guided breathing exercises proven to calm the nervous system:",
    priority: 6,
    links: [
      { name: "4-7-8 Breathing", description: "Calm anxiety and fall asleep faster" },
      { name: "Box Breathing", description: "Used by Navy SEALs to stay calm under pressure" },
      { name: "Deep Belly Breathing", description: "Activate your body's relaxation response" },
      { name: "Quick Calm (2 min)", description: "Short exercises for moments of overwhelm" }
    ]
  },

  // Privacy & Data Safety
  {
    keywords: ["is my data safe", "privacy dashboard", "secure account", "data protection", "is it private", "who can see my data"],
    response: "Your privacy and safety are our top priorities:",
    priority: 7,
    links: [
      { name: "Your Data is Private", description: "Only you can see your mood tracker and personal information" },
      { name: "What We Collect", description: "We only collect your name and email to support your journey" },
      { name: "Privacy Controls", description: "You control your notifications and preferences" },
      { name: "Secure Access", description: "Email verification keeps your account safe" }
    ]
  },

  // Getting Started Guide
  {
    keywords: ["get started", "new user", "first time", "how to use", "beginner guide", "what to do first", "where to start"],
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

  // Free Account Info
  {
    keywords: ["is it free", "free account", "cost", "how much does it cost", "paid features"],
    response: "The LifeLine App is completely free to use. We believe mental wellness support should be accessible to everyone:",
    priority: 6,
    links: [
      { name: "Mood Tracker", description: "Track your daily emotions and patterns" },
      { name: "Breathing Exercises", description: "Guided calming techniques" },
      { name: "My Resources Library", description: "Save and organize helpful content" },
      { name: "Personalized Dashboard", description: "Your central wellness hub" }
    ]
  },

  // Default - General Support
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