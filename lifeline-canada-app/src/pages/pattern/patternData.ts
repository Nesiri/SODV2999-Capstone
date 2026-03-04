export type PatternCategory = "Mood & Inspiration" | "Self Help & Tools";

export type PatternSection = {
  heading: string;
  items: string[];
};

export type PatternItem = {
  title: string;
  description: string;
  category: PatternCategory;
  icon: string;
  color: string;
  sections?: PatternSection[];
  resources?: ResourceBlock;
  heroImage?: string;
};

export type ResourceItem = {
  title: string;
  description?: string;
  href?: string;
  tags?: string[];
  icon?: string;
  meta?: string;
  image?: string;
};

export type ResourceBlock = {
  heading: string;
  items: ResourceItem[];
};

export const patternData: Record<string, PatternItem> = {
  // =========================
  // Self Help & Tools
  // =========================
  "self-management": {
    title: "Self Management",
    description: "Tools and strategies to manage emotions, stress, and daily challenges.",
    category: "Self Help & Tools",
    icon: "🧘",
    color: "from-teal-400 to-emerald-400",
    sections: [
      {
        heading: "Quick Reset",
        items: [
          "Take 5 slow breaths.",
          "Drink water and sit comfortably.",
          "Write one thing you can control today.",
        ],
      },
      {
        heading: "Try This",
        items: ["Do a 2-minute body scan.", "Set one small goal for the next hour."],
      },
    ],
  },

  "coping-mechanisms": {
    title: "Coping Mechanisms",
    description: "Healthy techniques to manage difficult emotions and stressful situations.",
    category: "Self Help & Tools",
    icon: "🛡️",
    color: "from-blue-400 to-indigo-400",
    sections: [
      {
        heading: "Fast Coping",
        items: [
          "Name 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste.",
          "Hold ice for 10 seconds (safe, not too long).",
          "Splash cold water on your face.",
        ],
      },
      {
        heading: "Daily Coping",
        items: ["Walk for 10 minutes.", "Journal one page.", "Talk to a trusted person."],
      },
    ],
  },

  "interactive-mind": {
    title: "Interactive Mind",
    description: "Interactive exercises and activities to improve mental clarity.",
    category: "Self Help & Tools",
    icon: "🧩",
    color: "from-purple-400 to-pink-400",
    sections: [
      {
        heading: "Mental Warm-Up",
        items: [
          "Solve a quick puzzle or riddle.",
          "Write 3 ideas for something you want to improve.",
          "Do a 30-second focus stare (pick one object).",
        ],
      },
      {
        heading: "Focus Practice",
        items: ["Set a 10-minute timer and do one task only.", "Turn off notifications for 15 minutes."],
      },
    ],
  },

  "mental-health-apps": {
    title: "Mental Health Apps",
    description: "Apps designed to support emotional wellbeing and self-care.",
    category: "Self Help & Tools",
    icon: "📱",
    color: "from-green-400 to-teal-400",
    sections: [
      {
        heading: "What to Look For",
        items: ["Mood tracking", "Breathing and grounding tools", "Journaling prompts", "Guided meditation"],
      },
      {
        heading: "Quick Tip",
        items: ["Try one feature daily for a week (don’t download 10 apps at once)."],
      },
    ],
  },

  "transform-negative-thoughts": {
    title: "Transform Negative Thoughts",
    description: "Learn how to challenge and reframe negative thinking patterns.",
    category: "Self Help & Tools",
    icon: "🔄",
    color: "from-red-400 to-orange-400",
    sections: [
      {
        heading: "Step 1: Catch the Thought",
        items: ["Notice the negative thought.", "Write it down exactly as it appears."],
      },
      {
        heading: "Step 2: Challenge It",
        items: ["Is this 100% true?", "What evidence supports it? What evidence does not?"],
      },
      {
        heading: "Step 3: Replace It",
        items: ["Rewrite it in a balanced way.", "Use compassionate self-talk."],
      },
    ],
  },

  "words-of-wisdom": {
    title: "Words of Wisdom",
    description: "Inspiring quotes and reflections to uplift your mindset.",
    category: "Self Help & Tools",
    icon: "💭",
    color: "from-yellow-400 to-amber-400",
    sections: [
      {
        heading: "Quick Reset",
        items: ["Read one quote slowly.", "Take 3 deep breaths.", "Write one sentence: What do I need today?"],
      },
      {
        heading: "Try This",
        items: ["Pick a quote and repeat it for 30 seconds.", "Share it with someone who needs encouragement."],
      },
    ],
  },

  gallery: {
    title: "Image Gallery",
    description: "A visual collection of calming and motivational imagery.",
    category: "Self Help & Tools",
    icon: "🖼️",
    color: "from-pink-400 to-rose-400",
    sections: [
      {
        heading: "How to Use",
        items: [
          "Pick one image and focus on it for 30 seconds.",
          "Notice 3 details you didn’t see at first.",
          "Match your breathing to a slow count of 4 in / 4 out.",
        ],
      },
    ],
  },

  "acts-of-kindness": {
    title: "Acts of Kindness",
    description: "Simple ways to spread positivity and compassion.",
    category: "Self Help & Tools",
    icon: "❤️",
    color: "from-red-400 to-pink-400",
    sections: [
      {
        heading: "Small Acts",
        items: [
          "Send a supportive message to someone.",
          "Hold the door or say thank you.",
          "Leave a kind review for a small business.",
        ],
      },
      {
        heading: "Kindness to Yourself",
        items: ["Take a break without guilt.", "Eat something nourishing.", "Speak to yourself like a friend."],
      },
    ],
  },

  // =========================
  // Mood & Inspiration
  // =========================
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
"comedy": {
  title: "Comedy",
  description:
    "A quick humor break can lower stress and give your mind a reset. Pick one link and stop when it ends.",
  category: "Mood & Inspiration",
  icon: "😂",
  color: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
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
        description:
          "Create a 3-clip playlist you know you’ll enjoy. Save it for tough days.",
        href: "https://www.youtube.com/",
        icon: "📌",
        meta: "5 min",
        image: "/images/resources/comedy-playlist.jpg",
        tags: ["Habit", "Easy"],
      },
      {
        title: "Share a laugh (message template)",
        description:
          'Text: “Saw this and thought of you 😂 Want a 2-minute laugh break?”',
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
    "Short, uplifting videos that can reset your mindset and bring you back to hope. Pick one and stop when it ends.",
  category: "Mood & Inspiration",
  icon: "🎬",
  color: "bg-gradient-to-r from-purple-500 to-fuchsia-500",
  heroImage: "/images/pattern/inspiring-videos-hero.jpg",
  resources: {
    heading: "Watch one inspiring video",
    items: [
      {
        title: "Be Phenomenal",
        description:
          "A high-energy motivational video that’s great when you feel stuck or tired.",
        href: "https://www.youtube.com/watch?v=QGJuMBdaqIw",
        meta: "Video",
        tags: ["Motivation", "Energy"],
        embed: true
      },
      {
        title: "Never Give Up",
        description:
          "A reminder to keep going — especially on the days you feel like quitting.",
        href: "https://www.youtube.com/watch?v=mgmVOuLgFB0",
        meta: "Video",
        tags: ["Hope", "Resilience"],
        embed: true
      },
      {
        title: "Everyone Has Obstacles",
        description:
          "A short perspective shift: progress comes from working through the hard parts.",
        href: "https://www.youtube.com/watch?v=wnHW6o8WMas",
        meta: "Video",
        tags: ["Mindset", "Reset"],
        embed: true
      }
    ]
  }
},

  "emotional-support": {
    title: "Emotional Support Videos",
    description: "Comforting videos for support and reassurance.",
    category: "Mood & Inspiration",
    icon: "💖",
    color: "from-pink-400 to-rose-400",
    sections: [
      {
        heading: "When You Feel Overwhelmed",
        items: ["Watch something calming for 3 minutes.", "Breathe slowly while watching.", "Text someone “I could use support.”"],
      },
    ],
  },

  music: {
    title: "Uplifting Music Videos",
    description: "Music videos to lift your mood and energy.",
    category: "Mood & Inspiration",
    icon: "🎵",
    color: "from-blue-400 to-cyan-400",
    sections: [{ heading: "Try This", items: ["Make a 3-song “reset playlist.”", "Listen with headphones and breathe to the beat."] }],
  },

  books: {
    title: "Life Changing Books",
    description: "Books that inspire growth, clarity, and resilience.",
    category: "Mood & Inspiration",
    icon: "📚",
    color: "from-emerald-400 to-green-400",
    sections: [{ heading: "Start Simple", items: ["Read 5 pages today.", "Highlight one sentence you want to remember."] }],
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