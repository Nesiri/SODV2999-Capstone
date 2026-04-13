// constants/mental-health-cards.ts

export interface MentalHealthCard {
  id: number;
  image: string[];
  title: string;
  subtitle: string;
  link?: string;
  category?: string;
}

export const mentalHealthCards: MentalHealthCard[] = [
  // Mental Health Conditions (1-5)
  {
    id: 1,
    image: ['assets/ResourceImages/Mission-img-600x635.png'],
    title: 'Depression',
    subtitle:
      'Understand depression, its symptoms, and healthy coping strategies.',
    link: '/resources/depression',
    category: 'depression',
  },
  {
    id: 2,
    image: ['assets/ResourceImages/axiety.jpg'],
    title: 'Anxiety',
    subtitle: 'Find tools and support for managing fear, worry, and stress.',
    link: '/resources/anxiety',
    category: 'anxiety',
  },
  {
    id: 3,
    image: ['assets/ResourceImages/ptsd2-400x297.jpg'],
    title: 'Post Traumatic Stress Disorder',
    subtitle: 'Learn about PTSD symptoms, treatments, and recovery strategies.',
    link: '/resources/ptsd',
    category: 'ptsd',
  },
  {
    id: 4,
    image: ['assets/ResourceImages/addict2-400x330.jpg'],
    title: 'Addiction',
    subtitle:
      'Support and resources for substance use and behavioral addictions.',
    link: '/resources/addiction',
    category: 'addiction',
  },
  {
    id: 5,
    image: ['assets/ResourceImages/Coping with Suicidal Thoughts.jpg'],
    title: 'Coping with Suicidal Thoughts',
    subtitle:
      'Immediate help and strategies for coping with suicidal thoughts.',
    link: '/resources/suicidal-thoughts',
    category: 'suicidal-thoughts',
  },

  // Support Services (6-8)
  {
    id: 6,
    image: ['assets/ResourceImages/crisis-600x316.png'],
    title: 'Crisis Centres',
    subtitle: 'Access immediate help through call, text, or emergency support.',
    link: '/incrisisneedhelp',
    category: 'crisis',
  },
  {
    id: 7,
    image: ['assets/ResourceImages/e-counselling.png'],
    title: 'E-Counselling',
    subtitle:
      'Connect with licensed professionals for online therapy and support.',
    link: '/resources/e-counselling',
    category: 'counselling',
  },
  {
    id: 8,
    image: ['assets/ResourceImages/Search for a Professional.png'],
    title: 'Search for a Professional',
    subtitle: 'Find mental health professionals and therapists in your area.',
    link: '/resources/search-professional',
    category: 'professional-help',
  },

  // Grief and Loss (9-12)
  {
    id: 9,
    image: ['assets/ResourceImages/griefSupport-600x338.png'],
    title: 'Grief',
    subtitle: 'Support and guidance for coping with the loss of a loved one.',
    link: '/resources/grief',
    category: 'grief',
  },
  {
    id: 10,
    image: ['assets/ResourceImages/emotionalSupport-400x267.jpg'],
    title: 'Bereaved Support',
    subtitle: 'Resources and community support for those experiencing loss.',
    link: '/resources/bereaved-support',
    category: 'grief',
  },
  {
    id: 11,
    image: ['assets/ResourceImages/survivorsOf_hand-ribbon-400x267.jpg'],
    title: 'Survivors of Suicide Loss',
    subtitle: 'Healing and support for those who have lost someone to suicide.',
    link: '/resources/suicide-loss',
    category: 'grief',
  },
  {
    id: 12,
    image: ['assets/ResourceImages/afterSuicide-400x320.jpg'],
    title: 'After a Suicide Loss',
    subtitle: 'Immediate guidance and support following a suicide loss.',
    link: '/resources/after-suicide-loss',
    category: 'grief',
  },

  // Self-Management and Education (13-16)
  {
    id: 13,
    image: ['assets/ResourceImages/self-care-400x225.jpg'],
    title: 'Self Management',
    subtitle: 'Tools and techniques for managing your mental health daily.',
    link: '/resources/self-management',
    category: 'self-help',
  },
  {
    id: 14,
    image: ['assets/ResourceImages/warningSigns-768x768.webp'],
    title: 'Warning Signs',
    subtitle:
      'Learn to recognize early warning signs of mental health concerns.',
    link: '/resources/warning-signs',
    category: 'education',
  },
  {
    id: 15,
    image: ['assets/ResourceImages/MythsFacts-400x296.jpg'],
    title: 'Myths & Facts',
    subtitle: 'Separate fact from fiction about mental health and suicide.',
    link: '/resources/myths-facts',
    category: 'education',
  },
  {
    id: 16,
    image: ['assets/ResourceImages/How-to-Help-400x267.jpg'],
    title: 'How Can I Help Someone?',
    subtitle: 'Guidance on supporting a friend or family member in distress.',
    link: '/resources/how-to-help',
    category: 'supporters',
  },

  // Age-Specific Groups (17-19)
  {
    id: 17,
    image: ['assets/ResourceImages/youth-group-400x267.jpg'],
    title: 'Teens & Youth',
    subtitle:
      'Mental health resources specifically for teenagers and young adults.',
    link: '/resources/teens-youth',
    category: 'youth',
  },
  {
    id: 18,
    image: ['assets/ResourceImages/college-300x200.webp'],
    title: 'College Students',
    subtitle: 'Support and resources for mental health in academic settings.',
    link: '/resources/college-students',
    category: 'students',
  },
  {
    id: 19,
    image: ['assets/ResourceImages/Seniors-400x335.jpg'],
    title: 'Seniors',
    subtitle: 'Mental health resources and support for older adults.',
    link: '/resources/seniors',
    category: 'seniors',
  },

  // Family and Relationships (20-21)
  {
    id: 20,
    image: ['assets/parents.png'],
    title: 'Parents',
    subtitle: "Guidance and tools to support your child's mental well-being.",
    link: '/resources/parents',
    category: 'parents',
  },
  {
    id: 21,
    image: ['assets/ResourceImages/lgbtqHeart.jpg'],
    title: 'LGBTQ2S',
    subtitle: 'Affirming mental health resources for LGBTQ2S communities.',
    link: '/resources/lgbtq2s',
    category: 'lgbtq2s',
  },

  // Cultural and Community Groups (22-23)
  {
    id: 22,
    image: ['assets/ResourceImages/indigenousMentalHealth-400x267.jpg'],
    title: 'Indigenous',
    subtitle:
      'Culturally grounded mental health resources for Indigenous peoples.',
    link: '/resources/indigenous',
    category: 'indigenous',
  },
  {
    id: 23,
    image: ['assets/ResourceImages/refugees-300x169.webp'],
    title: 'Refugees',
    subtitle: 'Mental health support and resources for refugees and newcomers.',
    link: '/resources/refugees',
    category: 'refugees',
  },

  // Specific Populations (24-27)
  {
    id: 24,
    image: ['assets/ResourceImages/men-400x225.jpg'],
    title: 'Men',
    subtitle: "Mental health resources tailored for men's unique needs.",
    link: '/resources/men',
    category: 'men',
  },
  {
    id: 25,
    image: ['assets/ResourceImages/soldier-300x200.webp'],
    title: 'Veterans & Military',
    subtitle: 'Support for veterans, active military, and their families.',
    link: '/resources/veterans',
    category: 'veterans',
  },
  {
    id: 26,
    image: ['assets/ResourceImages/firstResponders-400x209.jpg'],
    title: 'First Responders',
    subtitle: 'Mental health resources for police, fire, and EMS personnel.',
    link: '/resources/first-responders',
    category: 'first-responders',
  },
  {
    id: 27,
    image: ['assets/ResourceImages/attempt-survivors-400x267.jpg'],
    title: 'Attempt Survivors',
    subtitle: 'Healing and support for survivors of suicide attempts.',
    link: '/resources/attempt-survivors',
    category: 'survivors',
  },

  // Professional and Caregiver Resources (28-30)
  {
    id: 28,
    image: ['assets/ResourceImages/Teacher-300x200.webp'],
    title: 'Educators',
    subtitle:
      'Resources for teachers and school staff to support student mental health.',
    link: '/resources/educators',
    category: 'professionals',
  },
  {
    id: 29,
    image: ['assets/ResourceImages/HealthProfessionals-400x267.jpg'],
    title: 'Health Professionals',
    subtitle: 'Clinical resources and support for healthcare providers.',
    link: '/resources/health-professionals',
    category: 'professionals',
  },
  {
    id: 30,
    image: ['assets/ResourceImages/Caregivers-400x210.png'],
    title: 'Care Givers',
    subtitle: 'Support and resources for those caring for loved ones.',
    link: '/resources/care-givers',
    category: 'caregivers',
  },

  // Workplace and Media (31-32)
  {
    id: 31,
    image: ['assets/ResourceImages/Workplace-400x267.jpeg'],
    title: 'Workplace Employers',
    subtitle: 'Mental health resources and strategies for workplace wellness.',
    link: '/resources/workplace',
    category: 'workplace',
  },
  {
    id: 32,
    image: ['assets/ResourceImages/mediaPros-300x169.webp'],
    title: 'Media Professionals',
    subtitle: 'Guidelines for responsible mental health and suicide reporting.',
    link: '/resources/media-professionals',
    category: 'media',
  },

  // Organizational Resources (33)
  {
    id: 33,
    image: ['assets/ResourceImages/organizations.jpg'],
    title: 'Resource Organizations',
    subtitle: 'Directory of mental health organizations and support services.',
    link: '/resources/organizations',
    category: 'resources',
  },
];
