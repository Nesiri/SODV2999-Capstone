export type PatternCategory = "Mood & Inspiration" | "Self Help & Tools";

export type PatternSection = {
  heading: string;
  items: string[];
};

export type ResourceItem = {
  title: string;
  description?: string;
  href?: string;
  tags?: string[];
  icon?: string;
  meta?: string;
  image?: string;
  moreText?: string;
  kind?: "book" | "video" | "link";
};

export type ResourceBlock = {
  heading: string;
  subheading?: string;
  items: ResourceItem[];
};

export type PatternItem = {
  title: string;
  description: string;
  longDescription?: string;
  category: PatternCategory;
  icon: string;
  color: string;
  sections?: PatternSection[];
  resources?: ResourceBlock;
  heroImage?: string;
  resourceLayout?: "grid" | "list";
  resourceColumns?: 2 | 3 | 4;
};

export const patternData: Record<string, PatternItem> = {
  
  "self-management": {
  title: "Self Management",
  description:
    "Self-management is intended to empower individuals in their recovery by providing the skills and confidence they need to take active steps in recognizing and managing their own health problems.",
  longDescription:
    "When it comes to your mental health, self-care can help you manage stress, lower your risk of illness, and increase your energy. Even small acts of self-care in your daily life can have a big impact. Below are some strategies, research, information, and resources for self managing stress, emotional pain, depression, anxiety, and suicidal thoughts.",
  category: "Self Help & Tools",
  icon: "🧘",
  color: "from-violet-500 to-fuchsia-500",
  heroImage: "/images/resources/self-management-hero.jpg",
  resourceLayout: "list",
  sections: [
    {
      heading: "What self-management means",
      items: [
        "Self-management helps you take small, active steps toward caring for your emotional wellbeing.",
        "It can include coping tools, calming exercises, reflection, support resources, and practical strategies for difficult days.",
        "You do not need to do everything at once. Start with one resource that feels manageable.",
      ],
    },
    {
      heading: "How to use this page",
      items: [
        "Pick one resource only.",
        "Spend 5 to 10 minutes exploring it.",
        "If it feels helpful, save it and come back later.",
      ],
    },
  ],
  resources: {
    heading: "Some Great Self Management Links",
    subheading:
      "A collection of self-help and coping resources for stress, emotional pain, depression, anxiety, and suicidal thoughts.",
    items: [
      {
        title: "Suicide...Read This First",
        description:
          "The original web page written by Martha Ainsworth. A suicide prevention classic, this simple essay has been saving lives on the internet since 1995. As powerful today as when it was first created.",
        image: "/images/resources/self-management/read-this-first.jpg",
        meta: "Article",
        tags: ["Crisis support", "Reading"],
        kind: "link",
      },
      {
        title: "Coping & Self-Care",
        description:
          "There are many things you can do to help reduce your feelings of stress and emotional pain. This section on coping strategies and dealing with stress will be helpful to you.",
        image: "/images/resources/self-management/coping-self-care.jpg",
        meta: "Guide",
        tags: ["Stress", "Self-care"],
        kind: "link",
      },
      {
        title: "Coping With Suicidal Thoughts",
        description:
          "Coping with Suicidal Thoughts is intended for individuals who are currently experiencing suicidal ideation and/or have had a plan or made an attempt to hurt themselves.",
        image: "/images/resources/self-management/coping-with-suicidal-thoughts.jpg",
        meta: "Workbook",
        tags: ["Safety", "Support"],
        kind: "link",
      },
      {
        title: "Get Self-Help – Coping with Suicidal Thoughts",
        description:
          "This website provides CBT self-help and therapy resources, including worksheets and information sheets and self-help mp3s.",
        image: "/images/resources/self-management/getselfhelp.jpg",
        meta: "CBT Tools",
        tags: ["CBT", "Worksheets"],
        kind: "link",
      },
      {
        title: "NowMattersNow",
        description:
          "Here we offer strategies to survive and build more manageable and meaningful lives.",
        image: "/images/resources/self-management/now-matters-now.jpg",
        meta: "Tools",
        tags: ["Skills", "Hope"],
        kind: "link",
      },
      {
        title: "Reasons to go on Living",
        description:
          "Canadian research project archiving suicide attempt stories along with why the survivor is now glad to be alive.",
        image: "/images/resources/self-management/reasons-to-go-on-living.jpg",
        meta: "Stories",
        tags: ["Hope", "Recovery"],
        kind: "link",
      },
      {
        title: "Reasons for Staying Alive",
        description:
          "Grassroots reasons for staying alive when you are considering suicide.",
        image: "/images/resources/self-management/reasons-for-staying-alive.jpg",
        meta: "Support",
        tags: ["Hope", "Encouragement"],
        kind: "link",
      },
      {
        title: "Wellness Workshop",
        description:
          "The Wellness Workshop online is a resource to help you on your personal journey to mental health wellness. The workshop is for everyone and is designed to give you tools to both improve your mental wellness and to maintain your wellness.",
        image: "/images/resources/self-management/wellness-workshop.jpg",
        meta: "Workshop",
        tags: ["Wellness", "Tools"],
        kind: "link",
      },
      {
        title: "Self-help Resources",
        description:
          "Mental Health Info in 11 Languages.",
        image: "/images/resources/self-management/self-help-resources.jpg",
        meta: "Multilingual",
        tags: ["Resources", "Information"],
        kind: "link",
      },
    ],
  },
},

  "coping-mechanisms": {
  title: "Coping Mechanisms",
  description:
    "Coping mechanisms are the thoughts and behaviors people use to deal with stress, pain, fear, anxiety, and overwhelming life situations.",
  longDescription:
    "Life is filled with challenges, interpersonal conflict, physical and emotional pain, loss, and stress. It does not matter who you are — no one goes through life untouched. Some people also experience significant trauma, abuse, violence, or deep loss. Because of that, many of us develop ways to cope that may help in the moment but hurt us in the long term.\n\nThis page is designed to help you better understand both unhealthy and healthy coping mechanisms. Recovery is not only about noticing patterns that hold you back, but also about replacing them with healthier tools that support your wellbeing, relationships, and future growth.",
  category: "Self Help & Tools",
  icon: "🛡️",
  color: "from-violet-500 to-fuchsia-500",
  heroImage:
    "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1600&q=80",
  resourceLayout: "list",
  sections: [
    {
      heading: "Coping Mechanisms to Aid Your Recovery",
      items: [
        "Regardless of your past, what matters most is how you cope now.",
        "Many of us learn coping habits early in life and repeat them without noticing.",
        "Some coping patterns reduce pain temporarily, but later increase stress, shame, conflict, or isolation.",
        "Recovery becomes stronger when you identify harmful patterns and replace them with healthier ones.",
      ],
    },
    {
      heading: "Common Unhealthy Coping Mechanisms",
      items: [
        "Passive-aggressiveness",
        "Displacement",
        "Compartmentalization",
        "Staying ridiculously busy",
        "Procrastination",
        "Denial",
        "Avoidance",
        "Intellectualization",
        "Trivialization",
      ],
    },
    {
      heading: "Common Healthy Coping Mechanisms",
      items: [
        "Exercise",
        "Turning pain into something useful",
        "Practicing gratitude",
        "Journaling",
        "Meditation",
        "Talking it out",
        "Deep breathing",
        "Creating healthy structure and routine",
      ],
    },
  ],
  resources: {
    heading: "Healthy coping tools you can try",
    subheading:
      "Start with one small action. The goal is not perfection — it is building safer and healthier ways to respond.",
    items: [
      {
        title: "Exercise",
        description:
          "Movement can lower stress, improve mood, release tension, and build confidence. A short walk, stretching session, or workout can help interrupt overwhelming thoughts.",
        href: "https://www.youtube.com/results?search_query=10+minute+beginner+workout",
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
        meta: "Healthy coping",
        tags: ["Movement", "Stress relief"],
        kind: "link",
      },
      {
        title: "Turn your pain into something useful",
        description:
          "Many people heal by transforming pain into service, creativity, advocacy, volunteering, or supporting others. Giving meaning to pain can reduce hopelessness.",
        href: "https://www.youtube.com/results?search_query=how+to+turn+pain+into+purpose",
        image:
          "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
        meta: "Mindset",
        tags: ["Purpose", "Healing"],
        kind: "link",
      },
      {
        title: "Practice gratitude",
        description:
          "Gratitude does not erase pain, but it can help your mind notice what is still supportive, meaningful, or steady. Try writing down 3 small things each day.",
        href: "https://www.youtube.com/results?search_query=gratitude+journal+how+to",
        image:
          "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80",
        meta: "Reflection",
        tags: ["Mindset", "Daily habit"],
        kind: "link",
      },
      {
        title: "Journaling",
        description:
          "Writing down thoughts and feelings can help you process emotions, notice patterns, and release inner pressure instead of carrying everything mentally.",
        href: "https://www.youtube.com/results?search_query=mental+health+journaling+prompts",
        image:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
        meta: "Tool",
        tags: ["Writing", "Clarity"],
        kind: "link",
      },
      {
        title: "Meditation",
        description:
          "Meditation can help calm the nervous system, reduce mental noise, and improve emotional regulation. Even 2 to 5 minutes can make a difference.",
        href: "https://www.youtube.com/results?search_query=5+minute+guided+meditation",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
        meta: "Calming practice",
        tags: ["Breathing", "Calm"],
        kind: "link",
      },
      {
        title: "Talk it out",
        description:
          "Sharing what you are carrying with someone safe can reduce isolation and emotional pressure. Support does not need to be perfect to be helpful.",
        href: "https://www.youtube.com/results?search_query=why+talking+about+feelings+helps",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
        meta: "Connection",
        tags: ["Support", "Relationships"],
        kind: "link",
      },
      {
        title: "Deep breathing",
        description:
          "Slow breathing helps your body shift out of panic and stress. Try inhaling for 4, holding for 2, and exhaling for 6.",
        href: "https://www.youtube.com/results?search_query=box+breathing+exercise",
        image:
          "https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=1200&q=80",
        meta: "Quick reset",
        tags: ["Breathwork", "Anxiety relief"],
        kind: "link",
      },
      {
        title: "Build structure and routine",
        description:
          "A simple routine can create safety and momentum. Start with waking up, eating, moving, and resting at more consistent times.",
        href: "https://www.youtube.com/results?search_query=how+to+build+a+healthy+routine",
        image:
          "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
        meta: "Daily habit",
        tags: ["Routine", "Stability"],
        kind: "link",
      },
    ],
  },
},

"interactive-mind": {
  title: "Interactive Mind",
  description:
    "Interactive tools, brain games, and simple mental exercises can help sharpen focus, support positive thinking, and gently interrupt stress-heavy thought patterns.",
  longDescription:
    "Mental fitness is more than memory games and puzzles — it is also about keeping your mind active, flexible, and engaged in ways that support wellbeing. Interactive tools can help you practice focus, reduce boredom, create positive momentum, and build mental resilience.\n\nWhile digital tools cannot replace human support or therapy, they can be a useful part of a healthy routine. This page brings together interactive apps, puzzles, and exercises that support attention, curiosity, and mental stimulation.",
  category: "Self Help & Tools",
  icon: "🧩",
  color: "from-purple-500 to-pink-500",
  heroImage:
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
  resourceLayout: "list",
  sections: [
    {
      heading: "Why interactive tools can help",
      items: [
        "They can interrupt negative thought loops by redirecting attention.",
        "They encourage focus, curiosity, and small wins.",
        "They can be used as a light daily practice for mental stimulation.",
      ],
    },
  ],
  resources: {
    heading: "Interactive apps, links, exercises and puzzles",
    subheading:
      "Use these tools for stimulation, focus, and small mental resets. Pick one and keep it simple.",
    items: [
      {
        title: "CogniFit — Brain Training",
        description:
          "A brain-training app designed to strengthen memory, attention, coordination, and concentration through personalized mental exercises and games.",
        href: "https://www.cognifit.com/",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        meta: "App",
        tags: ["Focus", "Memory"],
        kind: "link",
      },
      {
        title: "Happify",
        description:
          "A wellbeing app with guided activities and science-based exercises that support positivity, resilience, stress management, and emotional balance.",
        href: "https://www.happify.com/",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
        meta: "App",
        tags: ["Mood", "Resilience"],
        kind: "link",
      },
      {
        title: "MentalUP — Word Brain Puzzles",
        description:
          "Puzzle-based activities that challenge logic, vocabulary, and attention while giving your brain a fun reset from passive scrolling.",
        href: "https://www.mentalup.co/brain-teasers",
        image:
          "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=1200&q=80",
        meta: "Puzzles",
        tags: ["Logic", "Word games"],
        kind: "link",
      },
      {
        title: "SharpBrains",
        description:
          "A resource hub that explores brain health, mental fitness, and cognitive tools, including brain teasers and educational content.",
        href: "https://sharpbrains.com/",
        image:
          "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=1200&q=80",
        meta: "Website",
        tags: ["Brain health", "Learning"],
        kind: "link",
      },
      {
        title: "Math and Logic Puzzles",
        description:
          "Simple logic and number puzzles that challenge your brain and improve concentration without needing long periods of time.",
        href: "https://www.mathsisfun.com/puzzles/",
        image:
          "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
        meta: "Practice",
        tags: ["Logic", "Problem solving"],
        kind: "link",
      },
      {
        title: "Braingle",
        description:
          "A large collection of brain teasers, riddles, trivia, and puzzles you can use for a quick challenge and mental refresh.",
        href: "https://www.braingle.com/",
        image:
          "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=1200&q=80",
        meta: "Games",
        tags: ["Trivia", "Puzzles"],
        kind: "link",
      },
    ],
  },
},

"mental-health-apps": {
  title: "Mental Health Apps",
  description:
    "Mental health apps can offer practical support for stress, mood, sleep, mindfulness, journaling, grounding, and crisis planning.",
  longDescription:
    "Seeing a therapist or mental health professional regularly is not always possible for everyone. Mobile apps can offer extra support by providing structure, reminders, coping tools, guided exercises, and self-monitoring features that can be used throughout the day.\n\nThese apps are best used as supportive tools rather than replacements for professional care. The goal is to help you find practical resources that make mental health support more accessible, personal, and consistent.",
  category: "Self Help & Tools",
  icon: "📱",
  color: "from-cyan-500 to-blue-500",
  heroImage:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
  resourceColumns: 4,
  sections: [
    {
      heading: "Apps by category",
      items: [
        "Suicide prevention and safety planning",
        "Mood tracking",
        "Depression and anxiety support",
        "Sleep, meditation, and relaxation",
      ],
    },
    {
      heading: "Regarding apps and privacy",
      items: [
        "Read privacy policies before signing up.",
        "Be careful with apps that collect sensitive health information.",
        "Use apps as support tools, not as a replacement for emergency or clinical care.",
      ],
    },
  ],
  resources: {
    heading: "Helpful mental health apps",
    subheading:
      "Choose one category that fits what you need right now — safety, mood, anxiety, or sleep.",
    items: [
      {
        title: "Calm Harm",
        description:
          "Designed to help people resist or ride out urges related to self-harm through private, guided activities and grounding tools.",
        href: "https://calmharm.co.uk/",
        meta: "Suicide prevention",
        tags: ["Safety", "Grounding"],
        kind: "link",
      },
      {
        title: "notOK",
        description:
          "A simple app that helps users quickly reach trusted contacts during overwhelming moments using an easy alert system.",
        href: "https://www.notokapp.com/",
        meta: "Crisis support",
        tags: ["Emergency contact", "Support"],
        kind: "link",
      },
      {
        title: "Daylio",
        description:
          "A popular mood tracking app that helps you log emotions, routines, and habits so you can notice patterns over time.",
        href: "https://daylio.net/",
        meta: "Mood tracking",
        tags: ["Habits", "Mood"],
        kind: "link",
      },
      {
        title: "Moodfit",
        description:
          "Tracks mood, sleep, exercise, mindfulness, and gratitude with a structured dashboard designed to support emotional wellbeing.",
        href: "https://www.getmoodfit.com/",
        meta: "Mood tracking",
        tags: ["Tracking", "Reflection"],
        kind: "link",
      },
      {
        title: "MindShift CBT",
        description:
          "A CBT-based app focused on anxiety, worry, perfectionism, panic, and social anxiety using practical exercises and check-ins.",
        href: "https://www.anxietycanada.com/resources/mindshift-cbt/",
        meta: "Depression & anxiety",
        tags: ["CBT", "Anxiety"],
        kind: "link",
      },
      {
        title: "Sanvello",
        description:
          "Offers guided journeys, journaling, mood tracking, and coping tools for stress, anxiety, and depression support.",
        href: "https://www.sanvello.com/",
        meta: "Depression & anxiety",
        tags: ["Stress", "Support"],
        kind: "link",
      },
      {
        title: "Insight Timer",
        description:
          "A large meditation and sleep app with guided breathing, sleep tracks, and mindfulness sessions for beginners and regular users.",
        href: "https://insighttimer.com/",
        meta: "Sleep / meditate / relax",
        tags: ["Meditation", "Sleep"],
        kind: "link",
      },
      {
        title: "Smiling Mind",
        description:
          "A guided mindfulness app with programs for calm, focus, sleep, and stress regulation for different ages and needs.",
        href: "https://www.smilingmind.com.au/",
        meta: "Sleep / meditate / relax",
        tags: ["Mindfulness", "Calm"],
        kind: "link",
      },
    ],
  },
},

"transform-negative-thoughts": {
  title: "Transform Negative Thoughts",
  description:
    "By practicing mindfulness and self-awareness, it becomes possible to identify negative thoughts, challenge them, and gradually replace them with healthier and more balanced thinking patterns.",
  longDescription:
    "Negative thoughts can sometimes feel automatic, intense, and believable — especially during stress, anxiety, shame, sadness, or emotional overwhelm. Over time, repeated negative thinking can keep a person stuck in self-doubt, fear, hopelessness, and unhealthy patterns.\n\nThe good news is that thoughts are not fixed truths. They can be observed, questioned, challenged, and transformed. This page is designed to help you understand how negative thought patterns work, how mindfulness can weaken their power, and what practical steps you can take to build healthier thinking habits.\n\nYou do not need to change every thought at once. The goal is not perfection. The goal is to notice patterns, slow them down, and begin choosing responses that are kinder, wiser, and more supportive of your wellbeing.",
  category: "Self Help & Tools",
  icon: "🔄",
  color: "from-rose-500 to-orange-500",
  heroImage:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
  resourceLayout: "list",
  sections: [
    {
      heading: "Why negative thoughts feel so powerful",
      items: [
        "Negative thoughts often feel convincing because they repeat themselves. The more often a thought appears, the more familiar and automatic it becomes.",
        "Stress, anxiety, loneliness, shame, grief, and exhaustion can make negative thinking stronger and harder to question.",
        "Many negative thoughts are based on fear rather than fact. They may sound true in the moment, but that does not mean they are accurate.",
        "When we do not challenge unhealthy thoughts, they can begin shaping mood, confidence, choices, relationships, and our view of the future.",
      ],
    },
    {
      heading: "Releasing negative thought patterns",
      items: [
        "Mindfulness helps you notice your thoughts without immediately believing or obeying them.",
        "Instead of judging yourself for having a negative thought, pause and simply observe it.",
        "When you become aware of a thought pattern, you create space between the thought and your reaction.",
        "That small pause is powerful — it gives you a chance to choose a healthier response.",
      ],
    },
    {
      heading: "Common unhelpful thinking patterns",
      items: [
        "Catastrophizing: assuming the worst possible outcome will happen.",
        "Overgeneralizing: believing one painful event means everything is bad or always will be.",
        "Labeling: using harsh words like “I’m useless,” “I’m broken,” or “I’m a failure.”",
        "Mind-reading: assuming you know what others think of you without real evidence.",
        "Black-and-white thinking: seeing things as total success or total failure with no middle ground.",
        "Personalization: blaming yourself for things that may not actually be your fault.",
      ],
    },
    {
      heading: "Challenging negative thoughts",
      items: [
        "Step 1: Recognize that you are having a negative thought or thought pattern.",
        "Step 2: Pause and mentally say, “Stop,” “This is a thought, not a fact,” or “Let me slow down.”",
        "Step 3: Challenge the thought with questions like: What evidence do I have? Is there another explanation? Would I say this to someone I love?",
        "Step 4: Replace the thought with something more balanced, realistic, and kind.",
        "Example: instead of “I always ruin everything,” try “I made a mistake, but I can learn, repair, and move forward.”",
      ],
    },
    {
      heading: "Becoming mindful: your action plan",
      items: [
        "Imagine how children and animals experience the world — they are often more present, curious, and engaged in the moment.",
        "Practice bringing gentle curiosity to your thoughts instead of fear or judgment.",
        "Try yoga, stretching, or mindful movement to connect your attention back to your body.",
        "Use your breathing as an anchor when your mind feels crowded or fast.",
        "Return your attention to the present moment again and again. That repetition is part of the practice.",
      ],
    },
    {
      heading: "Simple mindfulness practices for daily life",
      items: [
        "Eat mindfully: notice flavor, texture, smell, and the act of chewing instead of rushing.",
        "Take a mindful shower: pay attention to the temperature, the water, the scent, and how your body feels.",
        "Practice mindful listening: hear someone fully without preparing your response while they speak.",
        "Use grounding through the senses: name 5 things you see, 4 you feel, 3 you hear, 2 you smell, and 1 you taste.",
        "Pause during the day and ask: What am I thinking right now? Is it helping me or harming me?",
      ],
    },
    {
      heading: "Suggested actions to interrupt negative thinking",
      items: [
        "Go for a walk outside.",
        "Stretch or do a short yoga video.",
        "Write in a journal for 5 minutes.",
        "Message a trusted friend.",
        "Listen to calming music.",
        "Take a deep breath and drink water.",
        "Read something comforting.",
        "Watch a funny video or movie clip.",
        "Take a warm shower or bath.",
        "Do one small task fully and slowly.",
        "Sit in sunlight or near a window.",
        "Practice gratitude by naming 3 small things that are okay right now.",
      ],
    },
    {
      heading: "A healthier replacement mindset",
      items: [
        "I can have difficult thoughts without becoming those thoughts.",
        "I do not need to believe everything my mind says when I am overwhelmed.",
        "This moment is hard, but it is not permanent.",
        "I am allowed to slow down and question what feels true.",
        "Progress comes from practice, not perfection.",
        "A more balanced thought can be stronger than a louder negative one.",
      ],
    },
  ],
  resources: {
    heading: "Practical tools for transforming negative thoughts",
    subheading:
      "Use these one at a time. The goal is to practice noticing, slowing down, and responding more wisely.",
    items: [
      {
        title: "Thought check worksheet",
        description:
          "Write the thought down exactly as it appears. Then ask: Is it true? Is it fully true? What evidence supports it? What evidence does not? What is a more balanced version of this thought?",
        image:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
        meta: "Reflection tool",
        tags: ["CBT", "Writing", "Awareness"],
        kind: "link",
      },
      {
        title: "Challenge the thought",
        description:
          "When a negative thought appears, ask questions like: Is there another way to look at this? What would I say to a friend? Am I assuming the worst? Am I using extreme language?",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        meta: "Mindset skill",
        tags: ["Reframing", "Clarity"],
        kind: "link",
      },
      {
        title: "Mindfulness reset",
        description:
          "Use a short mindfulness break to come back into the present. Sit, breathe slowly, relax your shoulders, and notice what is happening right now instead of what your mind predicts.",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
        meta: "Calming practice",
        tags: ["Mindfulness", "Breathing"],
        kind: "link",
      },
      {
        title: "Daily gratitude practice",
        description:
          "Gratitude does not deny pain. It helps you notice what is still supportive, meaningful, or beautiful even in difficult seasons.",
        image:
          "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80",
        meta: "Daily habit",
        tags: ["Gratitude", "Perspective"],
        kind: "link",
      },
      {
        title: "Action before overthinking",
        description:
          "Choose one useful action before your mind spirals further. Send the email, wash your face, step outside, make tea, tidy one small area, or ask for support.",
        image:
          "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
        meta: "Reset idea",
        tags: ["Action", "Momentum"],
        kind: "link",
      },
      {
        title: "Gentle self-talk replacement",
        description:
          "Replace harsh self-talk with language that is honest but kind. Example: “I am struggling right now” is healthier than “I am hopeless.”",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
        meta: "Self-compassion",
        tags: ["Self-talk", "Healing"],
        kind: "link",
      },
    ],
  },
},
"words-of-wisdom": {
  title: "Words of Wisdom",
  description:
    "Sometimes a short quote, reflection, or simple reminder can bring comfort, perspective, and strength during difficult moments.",
  longDescription:
    "Words alone do not solve everything, but the right sentence at the right time can help you breathe, soften self-judgment, and remember that pain is not permanent. This page offers steady, encouraging reflections that can support hope, patience, and self-kindness.",
  category: "Self Help & Tools",
  icon: "💭",
  color: "from-amber-500 to-yellow-500",
  heroImage:
    "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?auto=format&fit=crop&w=1600&q=80",
  resources: {
    heading: "Gentle reminders",
    items: [
      {
        title: "You do not need to heal all at once.",
        description:
          "Progress often happens in small, quiet steps. Resting, pausing, and starting again still count.",
        tags: ["Healing", "Patience"],
        icon: "🌱",
        meta: "Reflection",
        image:
          "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "A hard day is not a hopeless life.",
        description:
          "Today may feel heavy, but feelings change. Give yourself time before deciding what this moment means.",
        tags: ["Hope", "Perspective"],
        icon: "☀️",
        meta: "Reminder",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Speak to yourself like someone worth protecting.",
        description:
          "Harsh self-talk increases pain. Compassion creates more room for healing and wiser choices.",
        tags: ["Self-kindness", "Care"],
        icon: "🫶",
        meta: "Self-talk",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "You are allowed to ask for help.",
        description:
          "Reaching out is not weakness. Support can be part of recovery, not proof that you failed.",
        tags: ["Support", "Strength"],
        icon: "🤝",
        meta: "Encouragement",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Try one small good thing today.",
        description:
          "Drink water, step outside, message someone, breathe slowly, or rest. Small actions matter more than they look.",
        tags: ["Action", "Gentle reset"],
        icon: "✨",
        meta: "Daily practice",
        image:
          "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Your story is still being written.",
        description:
          "This moment is real, but it is not the final chapter. Leave room for change, help, and surprise.",
        tags: ["Hope", "Future"],
        icon: "📖",
        meta: "Perspective",
        image:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
},

gallery: {
  title: "Image Gallery",
  description:
    "A visual gallery of calming, hopeful, and grounding images to help you pause, breathe, and reset.",
  longDescription:
    "Sometimes words feel like too much. Visuals can offer a softer way to regulate emotions, ground attention, and create a moment of calm. Use this page as a simple reset: choose one image, slow down, and stay with it for a minute.",
  category: "Self Help & Tools",
  icon: "🖼️",
  color: "from-pink-500 to-rose-500",
  heroImage:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
  resourceColumns: 3,
  resources: {
    heading: "Calming visuals",
    subheading:
      "Pick one image and stay with it. Notice color, light, detail, and how your breathing changes.",
    items: [
      {
        title: "Mountain sunrise",
        description: "A steady visual for grounding and perspective.",
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        tags: ["Nature", "Hope"],
        meta: "Visual reset",
      },
      {
        title: "Forest path",
        description: "Use this image to imagine walking somewhere quiet and safe.",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        tags: ["Grounding", "Calm"],
        meta: "Nature",
      },
      {
        title: "Ocean horizon",
        description: "A wide, gentle view that can help slow racing thoughts.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        tags: ["Breathing", "Space"],
        meta: "Visual calm",
      },
      {
        title: "Soft clouds",
        description: "A light image for brief rest and mental softness.",
        image:
          "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1200&q=80",
        tags: ["Rest", "Lightness"],
        meta: "Pause",
      },
      {
        title: "Warm window light",
        description: "A simple image to create a sense of comfort and stillness.",
        image:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        tags: ["Comfort", "Quiet"],
        meta: "Home",
      },
      {
        title: "Flowers in bloom",
        description: "A reminder that growth can return slowly and gently.",
        image:
          "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80",
        tags: ["Growth", "Hope"],
        meta: "Nature",
      },
    ],
  },
},

"acts-of-kindness": {
  title: "Acts of Kindness",
  description:
    "Simple acts of kindness can improve mood, build connection, and create moments of meaning for both you and other people.",
  longDescription:
    "Kindness does not need to be big to matter. A short message, a sincere thank you, checking in on someone, or doing one gentle thing for yourself can shift the emotional tone of a day. Kindness can interrupt isolation, increase connection, and remind you that your actions still matter.\n\nThis page offers easy ways to practice kindness toward others and yourself without pressure or perfection.",
  category: "Self Help & Tools",
  icon: "❤️",
  color: "from-red-500 to-pink-500",
  heroImage:
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80",
  resources: {
    heading: "Kindness ideas to try",
    items: [
      {
        title: "Send a supportive text",
        description:
          "Message someone with something simple like: “Thinking of you today” or “Hope you’re doing okay.”",
        tags: ["Connection", "Support"],
        icon: "💬",
        meta: "2 min",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Say thank you directly",
        description:
          "Choose one person and thank them specifically for something they did, even if it was small.",
        tags: ["Gratitude", "Relationships"],
        icon: "🙏",
        meta: "Quick act",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Hold space for someone",
        description:
          "Listen without rushing to fix. Being present and gentle can be deeply supportive.",
        tags: ["Listening", "Care"],
        icon: "🫂",
        meta: "Connection",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Do one kind thing for your future self",
        description:
          "Prepare something helpful for tomorrow: water, a clean space, a note, or clothes ready for the morning.",
        tags: ["Self-care", "Routine"],
        icon: "🌿",
        meta: "Self-kindness",
        image:
          "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Leave a positive review or note",
        description:
          "Thank a teacher, small business, coworker, or service worker with a kind review or message.",
        tags: ["Encouragement", "Impact"],
        icon: "⭐",
        meta: "Small action",
        image:
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Be kind to yourself on purpose",
        description:
          "Speak to yourself with patience. Rest without guilt. Eat something nourishing. Lower one expectation today.",
        tags: ["Self-compassion", "Relief"],
        icon: "💖",
        meta: "Important",
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
},
  "improve-mood": {
    title: "Improve Your Mood",
    description:
      "A practical, feel-better guide with quick resets, simple habits, and 30 mood-boosting ideas you can try today.",
    category: "Mood & Inspiration",
    icon: "😊",
    color: "from-fuchsia-400 to-violet-500",
    heroImage:
      "https://images.unsplash.com/photo-1520975597475-cd75d4c7f6db?auto=format&fit=crop&w=1800&q=80",
    sections: [
      {
        heading: "Why this helps",
        items: [
          "When you’re feeling low, it’s easy to get stuck in the same thoughts and routines. Mood improves faster when you gently interrupt the pattern with small actions.",
          "You don’t need to do all of these. Pick 1–2 ideas, try them for 10 minutes, and see what shifts.",
        ],
      },
      {
        heading: "Quick Mood Reset (2–5 minutes)",
        items: [
          "Take 5 slow breaths. In for 4, hold 2, out for 6.",
          "Drink a glass of water and sit up straight.",
          "Step outside for 60 seconds (fresh air + light).",
          "Name 3 things you can see, 2 you can feel, 1 you can hear.",
          "Play one uplifting song (no scrolling).",
        ],
      },
      {
        heading: "30 Ways to Improve Your Mood",
        items: [
          "Step back and self-reflect. Pause and notice what you’re feeling without judging it.",
          "Reach out to someone. Text a friend or family member: “Can I talk for a minute?”",
          "Listen to music. Choose one song that matches the mood you want.",
          "Cuddle or play with a pet (or watch a cute animal video for 2 minutes).",
          "Go for a walk—especially somewhere with trees or open space.",
          "Drink something refreshing (water, tea, or a smoothie).",
          "Write it out. Journal one page: what’s on your mind + one small next step.",
          "Take a short nap (20 minutes) if you’re exhausted.",
          "Plan a fun activity for later today or this week.",
          "Do something spontaneous—tiny changes help break the loop.",
          "Prioritize. Pick the one thing that matters most today and do 5 minutes on it.",
          "Look through old photos or capture a new one.",
          "Hug someone (or wrap yourself in a blanket like a hug).",
          "Laugh. Watch a short comedy clip or a funny scene.",
          "Cry if you need to. It’s a normal release for a heavy moment.",
          "Read kind messages you’ve received (emails/texts/notes).",
          "Reconnect with an old friend—send a simple “Hey, how have you been?”",
          "Write yourself a letter like you’re encouraging your best friend.",
          "Try a deep breathing exercise (box breathing: 4–4–4–4).",
          "Practice gratitude: write 3 small things you appreciate right now.",
          "Re-watch a funny or inspiring YouTube video (set a timer to avoid scrolling).",
          "Bake or cook something simple—focus on the steps and smells.",
          "Get out of the house: coffee, library, or a quick errand outside.",
          "Focus on what truly matters to you—one value you want to live today.",
          "Reframe a negative thought: “What’s another possible explanation?”",
          "Daydream for 2 minutes—imagine something you’re excited for.",
          "Let sunlight in: open blinds, sit near a window, step outside.",
          "Take a mental health day-style reset: shower, clean clothes, tidy one small area.",
          "Let go of one small pressure today—lower the bar on something non-essential.",
          "Read something calming (short article, poem, or a few pages of a book).",
        ],
      },
      {
        heading: "After you try 1–2 ideas",
        items: [
          "Rate your mood from 1–10 (before and after). Even a 1-point change is progress.",
          "Pick the best one and repeat it tomorrow. Repetition is what builds results.",
        ],
      },
    ],
    resources: {
      heading: "Helpful extras (with images)",
      items: [
        {
          title: "A 10-minute outdoor reset",
          description: "Walk slowly, notice 5 things you see, and breathe deeper than usual.",
          tags: ["Nature", "Movement", "Calm"],
          icon: "🌿",
          meta: "10 min",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Make a 3-song mood playlist",
          description: "Pick 3 songs: 1 comfort, 1 lift, 1 energy. Stop after song #3.",
          tags: ["Music", "Energy"],
          icon: "🎧",
          meta: "5 min",
          image:
            "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "One-page brain dump",
          description: "Write everything on your mind. Circle one thing you can act on today.",
          tags: ["Journaling", "Clarity"],
          icon: "📝",
          meta: "10 min",
          image:
            "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Simple stretch + posture reset",
          description: "Shoulder rolls, neck stretch, stand tall for 30 seconds.",
          tags: ["Body", "Relief"],
          icon: "🧍",
          meta: "3 min",
          image:
            "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Gratitude (small + real)",
          description: "Write 3 tiny things: warm drink, clean bed, a kind message.",
          tags: ["Mindset", "Grounding"],
          icon: "🙏",
          meta: "2 min",
          image:
            "https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Call or text someone you trust",
          description: "You don’t need a perfect message. Start with: “Can I share something?”",
          tags: ["Support", "Connection"],
          icon: "💬",
          meta: "Anytime",
          image:
            "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
  },

  comedy: {
    title: "Comedy",
    description:
      "A quick humor break can lower stress and give your mind a reset. Pick one link and stop when it ends.",
    category: "Mood & Inspiration",
    icon: "😂",
    color: "from-violet-500 to-fuchsia-500",
    heroImage: "/images/pattern/comedy-hero.jpg",
    sections: [
      {
        heading: "Why this helps",
        items: [
          "Laughter can reduce stress hormones and help your body relax.",
          "A short humor break can interrupt spiraling thoughts and bring you back to the present.",
        ],
      },
      {
        heading: "Try this (2–5 minutes)",
        items: [
          "Set a timer so it stays a quick reset, not endless scrolling.",
          "Choose one video. Watch it fully. Stop when it ends.",
          "If it helps even 1%, save it to reuse later.",
        ],
      },
    ],
    resources: {
      heading: "Helpful comedy links",
      items: [
        {
          title: "14 Minutes of Comedians Reaffirming Mental Health Struggles",
          description:
            "A short compilation where comedians talk openly about mental health and remind you you’re not alone.",
          href: "https://www.youtube.com/watch?v=RZAcw1G9M8E",
          icon: "▶️",
          meta: "Video",
          image: "/images/resources/comedy-mental-health.jpg",
          tags: ["Support", "Relief"],
        },
        {
          title: "So Funny It Can Cure Depression (Compilation)",
          description:
            "A quick laugh break. Use a timer and stop after one video so it doesn’t become doom-scrolling.",
          href: "https://www.youtube.com/watch?v=HqSoxMOrVeE",
          icon: "🐱",
          meta: "Video",
          image: "/images/resources/comedy-cat.jpg",
          tags: ["Mood lift", "Light"],
        },
        {
          title: "10 Minutes of Comedy to Ease Anxiety",
          description: "A short break that helps you breathe and reset your mind.",
          href: "https://www.youtube.com/results?search_query=10+minutes+of+comedy+to+cure+your+anxiety",
          icon: "🎭",
          meta: "10 min",
          image: "/images/resources/comedy-anxiety.jpg",
          tags: ["Reset", "Calm"],
        },
        {
          title: "Kevin Breel: Confessions of a Depressed Comic (Talk)",
          description:
            "A powerful talk blending humor and honesty about depression and vulnerability.",
          href: "https://www.youtube.com/watch?v=2qB8p4TnH4A",
          icon: "🎤",
          meta: "Talk",
          image: "/images/resources/comedy-kevin-breel.jpg",
          tags: ["Hope", "Real talk"],
        },
        {
          title: 'Make your own "Laugh playlist"',
          description: "Create a 3-clip playlist you know you’ll enjoy. Save it for tough days.",
          href: "https://www.youtube.com/",
          icon: "📌",
          meta: "5 min",
          image: "/images/resources/comedy-playlist.jpg",
          tags: ["Habit", "Easy"],
        },
        {
          title: "Share a laugh (message template)",
          description: 'Text: “Saw this and thought of you 😂 Want a 2-minute laugh break?”',
          icon: "💬",
          meta: "Anytime",
          image: "/images/resources/comedy-share.jpg",
          tags: ["Connection", "Support"],
        },
      ],
    },
  },

  "inspiring-videos": {
    title: "Inspiring Videos",
    description:
      "Positive videos can shift your mindset fast. Pick one, watch it fully, and stop when it ends — no endless scrolling.",
    category: "Mood & Inspiration",
    icon: "🎬",
    color: "from-indigo-500 to-fuchsia-500",
    heroImage: "/images/pattern/resources/inspiring-hero.jpg",
    resourceColumns: 4,
    sections: [
      {
        heading: "Why this helps",
        items: [
          "A good story can interrupt spiraling thoughts and bring you back to the present.",
          "Watching someone overcome challenges can remind you that change is possible.",
          "Finishing one short video gives your brain a clean “done” moment and reduces doom-scrolling.",
        ],
      },
      {
        heading: "Try this (5–12 minutes)",
        items: [
          "Set a timer before you press play.",
          "Watch one video fully. Stop when it ends.",
          "If it helped even 1%, save it and reuse it later.",
        ],
      },
    ],
    resources: {
      heading: "Watch one inspiring video",
      items: [
        {
          title: "Be Phenomenal",
          description: "A high-energy reminder to show up fully — even on the days you feel tired or stuck.",
          href: "https://www.youtube.com/watch?v=vVJJj9hshCM",
          meta: "Video",
          tags: ["Motivation", "Energy"],
        },
        {
          title: "Never Give Up",
          description: "A reminder to keep going — especially on the days you feel like quitting.",
          href: "https://www.youtube.com/watch?v=tYzMYcUty6s",
          meta: "Video",
          tags: ["Hope", "Resilience"],
        },
        {
          title: "Everyone Has Obstacles",
          description: "A short perspective shift: progress comes from working through the hard parts.",
          href: "https://www.youtube.com/watch?v=mgmVOuLgFB0",
          meta: "Video",
          tags: ["Mindset", "Reset"],
        },
        {
          title: "Increasing Your Confidence",
          description: "A gentle reminder that confidence is built through repetition, not perfection.",
          href: "https://www.youtube.com/watch?v=w-HYZv6HzAs",
          meta: "Video",
          tags: ["Confidence", "Growth"],
        },
        {
          title: "Neil Gaiman — Make Good Art",
          description: "A practical and inspiring talk about turning setbacks into meaningful work.",
          href: "https://www.youtube.com/watch?v=ikAb-NYkseI",
          meta: "Talk",
          tags: ["Creativity", "Purpose"],
        },
        {
          title: "Christian the Lion",
          description: "A touching story about friendship, loyalty, and unexpected connection.",
          href: "https://www.youtube.com/watch?v=oiGKWoJi5qM",
          meta: "Story",
          tags: ["Hope", "Connection"],
        },
        {
          title: "Randy Pausch — The Last Lecture",
          description: "A classic talk on joy, perspective, and living with intention.",
          href: "https://www.youtube.com/watch?v=ji5_MqicxSo",
          meta: "Talk",
          tags: ["Perspective", "Life"],
        },
        {
          title: "Free Hugs",
          description: "Sometimes one small act of kindness can change someone’s whole day.",
          href: "https://www.youtube.com/watch?v=vr3x_RRJdd4",
          meta: "Video",
          tags: ["Kindness", "Humanity"],
        },
        {
          title: "Passion: The Secret Ingredient to Success",
          description: "A motivational reminder that persistence and purpose often go together.",
          href: "https://www.youtube.com/watch?v=9fbP4S7vV1A",
          meta: "Video",
          tags: ["Passion", "Success"],
        },
        {
          title: "Look Up",
          description: "A spoken-word reminder to reconnect with people, not just screens.",
          href: "https://www.youtube.com/watch?v=Z7dLU6fk9QY",
          meta: "Short Film",
          tags: ["Connection", "Awareness"],
        },
        {
          title: "Nick Vujicic — Never Give Up",
          description: "A moving message about resilience, gratitude, and courage.",
          href: "https://www.youtube.com/watch?v=6P2nPI6CTlc",
          meta: "Talk",
          tags: ["Resilience", "Courage"],
        },
        {
          title: "Gift — Do Your Parents Embarrass You?",
          description: "A heartfelt story about perspective, love, and understanding sacrifice.",
          href: "https://www.youtube.com/watch?v=YoXxevp1WRQ",
          meta: "Short Film",
          tags: ["Family", "Perspective"],
        },
      ],
    },
  },

  "emotional-support": {
    title: "Emotional Support Videos",
    description:
      "Sometimes watching someone else talk honestly about tough moments can help you feel less alone. These videos are meant to offer comfort, perspective, and small reminders that support exists.",
    category: "Mood & Inspiration",
    icon: "🫂",
    color: "from-violet-500 to-fuchsia-500",
    heroImage: "/images/resources/emotional-support-hero.jpg",
    sections: [
      {
        heading: "Quick reset",
        items: [
          "Pick one video only.",
          "Watch it fully—no endless scrolling.",
          "After it ends, take 30 seconds to breathe and notice how you feel.",
        ],
      },
      {
        heading: "If you want to go deeper",
        items: [
          "Write one sentence: “What did I need to hear today?”",
          "Send one supportive message to someone you trust.",
          "Save one video you’d re-watch on hard days.",
        ],
      },
    ],
    resources: {
      heading: "Emotional support picks",
      items: [
        {
          title: "It Gets Better",
          description:
            "Stories of hope, identity, and future possibility for people who need to hear that hard seasons do not last forever.",
          href: "https://www.youtube.com/watch?v=WaAUrVYYmTU",
          meta: "Video",
          tags: ["Hope", "Identity"],
        },
        {
          title: "Suicidal? It’s ok. You can get through it. Please Talk",
          description:
            "An honest video encouraging people to talk, reach out, and remember that support is available.",
          href: "https://www.youtube.com/watch?v=0QXmmP4psbA",
          meta: "Video",
          tags: ["Talk", "Support"],
        },
        {
          title: "Suicide and a Safety Plan",
          description:
            "A practical explanation of what a safety plan is and how it can help during overwhelming moments.",
          href: "https://www.youtube.com/watch?v=om5E4K1bCLw",
          meta: "Video",
          tags: ["Safety", "Tools"],
        },
        {
          title: "Suicidal? Take Some Pause For Thought",
          description: "A reflective conversation that encourages pause, thought, and compassionate perspective.",
          href: "https://www.youtube.com/watch?v=6n3XEbloPRI",
          meta: "Video",
          tags: ["Pause", "Perspective"],
        },
        {
          title: "The Laughing Heart",
          description:
            "A poetic and reflective piece that can feel grounding when you need gentleness instead of pressure.",
          href: "https://www.youtube.com/watch?v=8MNfX8j0B8Q",
          meta: "Video",
          tags: ["Reflection", "Poetry"],
        },
        {
          title: "IDrankTheSeaWater",
          description:
            "Personal, honest content that helps people feel less isolated in their mental health experience.",
          href: "https://www.youtube.com/watch?v=mNnP6eP0Q0o",
          meta: "Video",
          tags: ["Understanding", "Honesty"],
        },
      ],
    },
  },

  music: {
    title: "Uplifting Music Videos",
    description:
      "There is something powerful about music that can instantly shift our emotions and lift our mood. A great uplifting song can remind us of hope, resilience, and the beauty of life even during difficult moments. Music has the ability to capture joy, empowerment, and encouragement in a way words sometimes cannot.",
    longDescription:
      "Take a moment when you need motivation or positivity and listen to one of these uplifting songs. Many of these songs have inspired people across generations and continue to remind us to keep moving forward.",
    category: "Mood & Inspiration",
    icon: "🎵",
    color: "from-amber-400 to-pink-500",
    heroImage: "/images/resources/uplifting-music.jpg",
    resourceColumns: 4,
    sections: [
      {
        heading: "How to use uplifting music",
        items: [
          "Pick one song and listen fully without distractions.",
          "Let the music change your mood gradually.",
          "Notice the lyrics and what message they bring.",
          "If the song helps, save it to your playlist for difficult days.",
        ],
      },
      {
        heading: "Small reflection",
        items: [
          "Which lyric stood out to you?",
          "Did the music change your mood even a little?",
          "What is one thing you feel grateful for right now?",
        ],
      },
    ],
    resources: {
      heading: "Uplifting songs to listen to",
      items: [
        {
          title: "What a Wonderful World — Louis Armstrong",
          description:
            "This timeless classic reminds us to appreciate the beauty in everyday life. Even during difficult moments, the world still contains kindness, color, and hope.",
          href: "https://www.youtube.com/watch?v=rBrd_3VMC3c",
          meta: "Music Video",
          tags: ["Hope", "Classic"],
        },
        {
          title: "Stand By Me — Ben E. King",
          description:
            "A legendary song about friendship, loyalty, and standing together during difficult times. It reminds us that we are stronger when we support each other.",
          href: "https://www.youtube.com/watch?v=hwZNL7QVJjE",
          meta: "Music Video",
          tags: ["Friendship", "Support"],
        },
        {
          title: "Ordinary World — Duran Duran",
          description:
            "A powerful song about healing and perseverance after loss. It reminds us that even after difficult experiences, life continues and we can rebuild.",
          href: "https://www.youtube.com/watch?v=FqIACCH20JU",
          meta: "Music Video",
          tags: ["Healing", "Reflection"],
        },
        {
          title: "Take On Me — A-ha",
          description:
            "An energetic 80s classic known for its iconic music video. The upbeat rhythm and hopeful lyrics make it a great mood booster.",
          href: "https://www.youtube.com/watch?v=djV11Xbc914",
          meta: "Music Video",
          tags: ["Energy", "Classic"],
        },
        {
          title: "Don't Worry Be Happy — Bobby McFerrin",
          description:
            "A joyful song that reminds us not to let stress take over our lives. Its simple message encourages us to focus on positivity.",
          href: "https://www.youtube.com/watch?v=d-diB65scQU",
          meta: "Music Video",
          tags: ["Positive", "Relax"],
        },
        {
          title: "Lovely Day — Bill Withers",
          description:
            "A soulful song that celebrates the feeling of waking up and realizing it will be a good day. A reminder that small moments matter.",
          href: "https://www.youtube.com/watch?v=bEeaS6fuUoA",
          meta: "Music Video",
          tags: ["Joy", "Motivation"],
        },
        {
          title: "Beautiful Day — U2",
          description:
            "A powerful anthem about appreciating life even when things are imperfect. It encourages gratitude and resilience.",
          href: "https://www.youtube.com/watch?v=co6WMzDOh1o",
          meta: "Music Video",
          tags: ["Gratitude", "Inspiration"],
        },
        {
          title: "Always Look on the Bright Side of Life — Monty Python",
          description:
            "A humorous but uplifting song reminding us that sometimes laughter and optimism are the best ways to deal with life’s challenges.",
          href: "https://www.youtube.com/watch?v=SJUhlRoBL8M",
          meta: "Music Video",
          tags: ["Humor", "Optimism"],
        },
        {
          title: "Imagine — John Lennon",
          description:
            "One of the most inspiring songs ever written. It encourages listeners to imagine a world of peace, unity, and hope.",
          href: "https://www.youtube.com/watch?v=YkgkThdzX-8",
          meta: "Music Video",
          tags: ["Peace", "Hope"],
        },
        {
          title: "Stronger — Kelly Clarkson",
          description:
            "An empowering anthem about resilience and learning from difficult experiences. A reminder that challenges can make us stronger.",
          href: "https://www.youtube.com/watch?v=Xn676-fLq7I",
          meta: "Music Video",
          tags: ["Strength", "Empowerment"],
        },
        {
          title: "You're Beautiful — James Blunt",
          description:
            "A heartfelt song about appreciating beauty and emotional connection in unexpected moments.",
          href: "https://www.youtube.com/watch?v=oofSnsGkops",
          meta: "Music Video",
          tags: ["Emotion", "Reflection"],
        },
        {
          title: "Don't Stop Believin' — Journey",
          description:
            "One of the most motivational songs ever recorded. It encourages listeners to keep believing in themselves and their dreams.",
          href: "https://www.youtube.com/watch?v=1k8craCGpgs",
          meta: "Music Video",
          tags: ["Motivation", "Classic"],
        },
      ],
    },
  },

  books: {
    title: "Life Changing Books",
    description:
      "Reading can be a quiet reset — it helps you step outside your current stress, learn new ideas, and rebuild hope one page at a time.",
    longDescription:
      "These picks are a mix of mindset, resilience, purpose, and uplifting stories. Use them as a gentle routine: 10–15 minutes a day is enough to feel progress.",
    category: "Mood & Inspiration",
    icon: "📚",
    color: "from-violet-400 to-fuchsia-500",
    heroImage: "/images/resources/life-changing-books.jpg",
    resourceLayout: "list",
    sections: [
      {
        heading: "How to use this page",
        items: [
          "Pick ONE book only (don’t overload).",
          "Read 10–15 minutes daily — keep it simple.",
          "Write 1 line: “What’s my takeaway today?”",
        ],
      },
      {
        heading: "Small reflection",
        items: [
          "Which idea felt most personal?",
          "What’s one habit you can try for 7 days?",
          "Who could you share this with?",
        ],
      },
    ],
    resources: {
      heading: "Books that can shift your mindset",
      subheading: "Click a book to open it in a new tab.",
      items: [
        {
          title: "The Book of Virtues — William J. Bennett",
          description:
            "A collection of classic stories and poems that teach character, courage, and kindness. Great if you want something meaningful and grounded.",
          href: "https://www.amazon.ca/s?k=The+Book+of+Virtues+William+J+Bennett",
          image: "/images/resources/books/book-of-virtues.jpg",
          meta: "Book",
          tags: ["Character", "Values"],
          kind: "book",
        },
        {
          title: "The 7 Habits of Highly Effective People — Stephen R. Covey",
          description:
            "A practical framework for building better habits, relationships, and purpose. Strong for structure and long-term change.",
          href: "https://www.amazon.ca/s?k=7+Habits+of+Highly+Effective+People+Stephen+Covey",
          image: "/images/resources/books/7-habits.jpg",
          meta: "Book",
          tags: ["Habits", "Purpose"],
          kind: "book",
        },
        {
          title: "How to Win Friends & Influence People — Dale Carnegie",
          description:
            "Classic communication and confidence builder. Helps with social anxiety, connection, and better conversations.",
          href: "https://www.amazon.ca/s?k=How+to+Win+Friends+and+Influence+People+Dale+Carnegie",
          image: "/images/resources/books/how-to-win-friends.jpg",
          meta: "Book",
          tags: ["Confidence", "Relationships"],
          kind: "book",
        },
        {
          title: "The Secret — Rhonda Byrne",
          description:
            "Popular mindset book focused on hope, visualization, and positive direction. Use it as motivation, not pressure.",
          href: "https://www.amazon.ca/s?k=The+Secret+Rhonda+Byrne",
          image: "/images/resources/books/the-secret.jpg",
          meta: "Book",
          tags: ["Mindset", "Hope"],
          kind: "book",
        },
        {
          title: "The Book Thief — Markus Zusak",
          description:
            "A powerful story about resilience and humanity during hard times. Emotional, meaningful, and unforgettable.",
          href: "https://www.amazon.ca/s?k=The+Book+Thief+Markus+Zusak",
          image: "/images/resources/books/the-book-thief.jpg",
          meta: "Book",
          tags: ["Resilience", "Story"],
          kind: "book",
        },
        {
          title: "The Shack — William P. Young",
          description:
            "A reflective novel about grief, healing, and finding meaning again after loss.",
          href: "https://www.amazon.ca/s?k=The+Shack+William+P+Young",
          image: "/images/resources/books/the-shack.jpg",
          meta: "Book",
          tags: ["Healing", "Grief"],
          kind: "book",
        },
        {
          title: "The Lion, the Witch and the Wardrobe — C.S. Lewis",
          description:
            "A comforting classic about courage, hope, and good overcoming darkness — easy to read, big impact.",
          href: "https://www.amazon.ca/s?k=The+Lion+the+Witch+and+the+Wardrobe",
          image: "/images/resources/books/narnia.jpg",
          meta: "Book",
          tags: ["Hope", "Comfort"],
          kind: "book",
        },
        {
          title: "The Great Divorce — C.S. Lewis",
          description:
            "A short, thought-provoking book about choices, growth, and the direction of your life.",
          href: "https://www.amazon.ca/s?k=The+Great+Divorce+C.S.+Lewis",
          image: "/images/resources/books/the-great-divorce.jpg",
          meta: "Book",
          tags: ["Reflection", "Growth"],
          kind: "book",
        },
        {
          title: "The Seven Paths — Anasazi Foundation",
          description:
            "A journey-style book about restoration, responsibility, and reconnecting with what matters.",
          href: "https://www.amazon.ca/s?k=The+Seven+Paths+Anasazi",
          image: "/images/resources/books/the-seven-paths.jpg",
          meta: "Book",
          tags: ["Restoration", "Identity"],
          kind: "book",
        },
        {
          title: "Les Misérables — Victor Hugo",
          description:
            "A deep story of redemption, compassion, and rebuilding life after hardship.",
          href: "https://www.amazon.ca/s?k=Les+Miserables+Victor+Hugo",
          image: "/images/resources/books/les-miserables.jpg",
          meta: "Book",
          tags: ["Redemption", "Meaning"],
          kind: "book",
        },
      ],
    },
  },

  "movies-of-inspiration": {
    title: "Movies of Inspiration",
    description:
      "Inspiring movies are a powerful way to uplift your soul, fill your heart with hope, and remind you that better days are possible.",
    heroImage:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80",
    category: "Mood & Inspiration",
    icon: "🎬",
    color: "from-violet-400 to-purple-400",
    sections: [
      {
        heading: "After Watching",
        items: [
          "Write down one lesson from the story.",
          "Pick one small action to try tomorrow.",
          "Share one scene that inspired you with a friend.",
        ],
      },
    ],
    resources: {
      heading: "Inspirational Movies based on True Stories & Events",
      items: [
        {
          title: "The Theory of Everything",
          description:
            "A story of love, resilience, and staying hopeful while facing life-changing challenges.",
          href: "https://www.imdb.com/title/tt2980516/",
          tags: ["Hope", "Resilience", "True story"],
          icon: "📘",
          meta: "2014",
          image:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "42",
          description:
            "Courage and persistence in the face of hate—changing history one step at a time.",
          href: "https://www.imdb.com/title/tt0453562/",
          tags: ["Inspiring", "True story", "Perseverance"],
          icon: "⚾",
          meta: "2013",
          image:
            "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Lincoln",
          description:
            "A powerful reminder that leadership and sacrifice can move a nation toward justice.",
          href: "https://www.imdb.com/title/tt0443272/",
          tags: ["Leadership", "Courage", "True story"],
          icon: "🏛️",
          meta: "2012",
          image:
            "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Intouchables",
          description:
            "Friendship can change everything—hope and laughter during hard seasons.",
          href: "https://www.imdb.com/title/tt1675434/",
          tags: ["Friendship", "Hope", "Inspiring"],
          icon: "🤝",
          meta: "2011",
          image:
            "https://images.unsplash.com/photo-1520975958221-6d283a9d82bb?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Moneyball",
          description:
            "Challenging the old way of thinking—learning, adapting, and staying confident.",
          href: "https://www.imdb.com/title/tt1210166/",
          tags: ["Growth", "Perseverance", "True story"],
          icon: "🏀",
          meta: "2011",
          image:
            "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Invictus",
          description:
            "Unity and leadership—how sport can bring people together and inspire purpose.",
          href: "https://www.imdb.com/title/tt1057500/",
          tags: ["Leadership", "Hope", "True story"],
          icon: "🏉",
          meta: "2009",
          image:
            "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "The Blind Side",
          description:
            "Support, second chances, and the impact of someone believing in you.",
          href: "https://www.imdb.com/title/tt0878804/",
          tags: ["Second chances", "Kindness", "True story"],
          icon: "🏈",
          meta: "2009",
          image:
            "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Into the Wild",
          description:
            "A reflective journey about searching for meaning, identity, and freedom.",
          href: "https://www.imdb.com/title/tt0758758/",
          tags: ["Growth", "Reflection", "Hope"],
          icon: "🏔️",
          meta: "2007",
          image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "The Pursuit of Happyness",
          description:
            "Resilience and hope through hard times—small steps can lead to big change.",
          href: "https://www.imdb.com/title/tt0454921/",
          tags: ["Hope", "Resilience"],
          icon: "🌤️",
          meta: "2006",
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Hotel Rwanda",
          description:
            "Bravery during an unimaginable crisis—choosing compassion when the world feels unsafe.",
          href: "https://www.imdb.com/title/tt0395169/",
          tags: ["Courage", "True story", "Hope"],
          icon: "🕊️",
          meta: "2004",
          image:
            "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Catch Me If You Can",
          description:
            "Identity, consequences, and second chances—surprisingly human beneath the excitement.",
          href: "https://www.imdb.com/title/tt0264464/",
          tags: ["Growth", "Second chances"],
          icon: "💳",
          meta: "2002",
          image:
            "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "A Beautiful Mind",
          description:
            "Brilliance, love, and recovery—accepting support and finding hope through connection.",
          href: "https://www.imdb.com/title/tt0268978/",
          tags: ["Hope", "Growth", "Inspiring"],
          icon: "🧠",
          meta: "2001",
          image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
        },
      ],
    },
  },

  "helpful-movies": {
    title: "Helpful Movies",
    description: "Helpful movies that support reflection and healing.",
    category: "Mood & Inspiration",
    icon: "🎥",
    color: "from-indigo-400 to-blue-400",
    sections: [
      {
        heading: "Use It as Support",
        items: ["Watch with someone if you can.", "Pause and breathe if emotions rise."],
      },
    ],
    resources: {
      heading: "Helpful & Healing Movies",
      items: [
        {
          title: "Good Will Hunting",
          description: "Healing, mentorship, and learning to accept help.",
          href: "https://www.imdb.com/title/tt0119217/",
          tags: ["Healing", "Growth"],
          meta: "1997",
          image:
            "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Inside Out",
          description: "Understanding emotions and how they shape us.",
          href: "https://www.imdb.com/title/tt2096673/",
          tags: ["Emotions", "Healing"],
          meta: "2015",
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "The Intouchables",
          description: "Friendship and perspective during difficult seasons.",
          href: "https://www.imdb.com/title/tt1675434/",
          tags: ["Friendship", "Support"],
          meta: "2011",
          image:
            "https://images.unsplash.com/photo-1520975958221-6d283a9d82bb?auto=format&fit=crop&w=900&q=80",
        },
      ],
    },
  },
};