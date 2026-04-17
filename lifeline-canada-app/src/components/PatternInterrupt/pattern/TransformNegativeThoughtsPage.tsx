

type ArticleSection = {
  title: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: ArticleSection[] = [
  {
    title: 'Releasing Negative Thought Patterns',
    image: '/images/pattern/transform-negative/releasing-negative-thoughts.jpg',
    imageAlt: 'Releasing negative thought patterns',
    reverse: true,
    paragraphs: [
      'Mindfulness can be defined as “Paying attention in a particular way: on purpose, in the present moment, and nonjudgmentally.” In other words, mindfulness allows us to become more aware of our thoughts without labeling or judging them. When we are able to be still, and be anchored in the now, we notice our thoughts more clearly. And when we become aware of our thoughts, we’re able to begin challenging them.',
    ],
  },
  {
    title: 'Challenging Negative Thoughts',
    image: '/images/pattern/transform-negative/challenge-negative-thoughts.jpg',
    imageAlt: 'Challenge your negative thoughts poster',
    paragraphs: [
      'It’s easier to challenge negative thoughts when the process is broken down into steps. The next time you observe yourself stuck in a negative thought pattern, try practicing these four steps.',
    ],
    bullets: [
      'Recognize that you are having a negative thought or pattern of negative thoughts.',
      'Say “Stop!” in your head (or out loud if it feels socially appropriate).',
      'Challenge the thought by probing it with questions. Ask yourself, “What evidence do I have to support this thought?” Odds are, you’ll notice that the evidence isn’t strong.',
      'Replace the thought with something more rational or positive. For example, if you’re thinking, “I am ugly,” try thinking instead about the individuals in your life who would disagree, or browse through flattering photos on Facebook or Instagram.',
      'When we release negative thought patterns and become mindful of the present, we allow ourselves to fully experience all the joy that is available to us in a given moment.',
    ],
  },
  {
    title: 'Becoming Mindful: Your Action Plan',
    image: '/images/pattern/transform-negative/mindfulness-activities.jpg',
    imageAlt: 'Mindfulness activities poster',
    reverse: true,
    paragraphs: [
      'Mindfulness may feel great, but that doesn’t mean it feels easy to achieve. To help clients start on the path to mindfulness, try the following practices.',
      'Imagine how young children and animals act in the world. They’re so connected to whatever’s going on in the present. Set an intention to bring a gentle curiosity to life, as animals and children do. When we approach our thoughts in this way, we don’t feel a need to attach to them or push them away. Instead, we can explore them, with childlike wonder, and let them be nothing more than what they are — thoughts.',
      'Practice Yoga — especially the hard poses. Yoga is a meditation of the body. In yoga, our bodies help to “anchor” us in the present, as our awareness is focused on the changes happening within our bodies.',
      'Eat Mindfully. When was the last time you sat down for a meal and really enjoyed the flavor, texture, smell, and presentation of your food? Challenge yourself to eat a meal mindfully.',
      'Take a Mindful Shower. The next time you’re in the shower, focus on the water on your skin, the temperature, and the experience of being fully present.',
      'Practice Mindful Listening. It means to listen, just listen, without judgment and without preparing or thinking about your response or opinion.',
    ],
  },
  {
    title: 'Transform Negative Thoughts with these Suggested Actions:',
    image: '/images/pattern/transform-negative/suggested-actions.jpg',
    imageAlt: 'Meditating illustration',
    bullets: [
      'Kiss somebody.',
      'Laugh out loud in a public restroom so it echoes.',
      'Eat some candy while waiting in line.',
      'Say thank you for anything.',
      'Compliment someone you know needs to hear it.',
      'Slide down a banister.',
      'Plant something.',
      'Do yoga.',
      'Sprint as fast as you can like Phoebe Buffay.',
      'Take a silly picture.',
      'Play your favorite song — LOUDLY!',
      'Exercise.',
      'Read a book and tell someone else what you read placing yourself in the story.',
      'Spin until you are dizzy.',
      'Blow bubbles.',
      'Walk in nature.',
      'Watch a funny movie.',
      'Call a friend.',
      'Plan a vacation.',
      'Hug someone — preferably a stranger.',
      'Attempt a cartwheel.',
      'Adopt a pet.',
      'Dance naked to Richard Simmons’ “Sweatin to the Oldies.”',
      'Sleep naked on silk sheets.',
      'Do push-ups while trying to play the harmonica.',
      'Arm wrestle your neighbor.',
      'Whistle show tunes during your next meeting.',
      'Meditate.',
      'Buy yourself something.',
      'Get a giant frozen yogurt bowl.',
      'Test drive a new car.',
      'Let it out — Go in your closet and SCREAMAAM!',
      'Read anything by Louise L. Hay.',
      'Get a manicure — guys and gals!',
      'Walk barefoot in the grass.',
      'Brush your hair — proven to be relaxing.',
      'Skip rocks at the lake.',
      'Dump negative friends.',
      'Get acupuncture.',
      'Paint something.',
      'Listen to ambient sounds — those soft relaxing tones that lower your brain wave frequency.',
      'Go to the pet store and hold something slimy.',
      'Take a long hot bath.',
      'Turn off your cell phone.',
      'Ignore others opinions and start valuing your own.',
      'Overcome a fear — do something you are afraid to do.',
      'Challenge your negative thoughts for validity.',
      'Look for something to be grateful for right this minute.',
      'Swim naked.',
      'Basically — do anything you would normally do, but naked.',
      'Bake something and pass it out to your neighbors.',
      'Inhale from a helium balloon and order a pizza.',
      'Take a nap on a park bench.',
      'Get a massage.',
      'Jump in a pool fully clothed.',
      'Spend time alone — but do it with friends, family and strangers.',
      'Get a facial.',
      'SMILE = ) — Neurological changes happen in the brain just by smiling.',
      'Put the past in the past.',
      'Learn in-home acupuncture kit... without the needles.',
      'Climb a tree.',
      'Go to your happy place.',
      'Help a stranger.',
      'Write in your journal.',
      'Know there is no such thing as failure — only giving up.',
    ],
  },
  {
    title: 'A More Helpful Inner Voice',
    image: '/images/pattern/transform-negative/inner-voice.jpg',
    imageAlt: 'Mindfulness definition card',
    reverse: true,
    paragraphs: [
      'One of the strongest ways to transform negative thinking is to change how you speak to yourself. Many people use a level of harshness on themselves that they would never use on someone they care about.',
      'A healthier inner voice does not pretend everything is perfect. It simply speaks with honesty and compassion at the same time.',
      'Instead of saying “I am a failure,” you can say “I am struggling right now, but that is not the same as being a failure.”',
      'Instead of saying “Nothing ever gets better,” you can say “This moment is painful, but moments change, and I can take one step forward.”',
      'That kind of self-talk creates more stability, more self-respect, and more room for recovery.',
    ],
  },
];

function SectionBlock({ section }: { section: ArticleSection }) {
  const textBlock = (
    <div className="max-w-[720px]">
      <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
        {section.title}
      </h2>

      {section.paragraphs && (
        <div className="mt-4 space-y-4 text-[16px] leading-7 text-slate-700">
          {section.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}

      {section.bullets && (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-7 text-slate-700">
          {section.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );

  const imageBlock = (
    <div className="flex justify-center">
      <img
        src={section.image}
        alt={section.imageAlt}
        className="w-full max-w-[520px] rounded-xl object-contain shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
      />
    </div>
  );

  return (
    <section className="py-12">
      <div className="mx-auto grid max-w-[1200px] items-start gap-12 px-6 md:grid-cols-[1fr_520px]">
        {section.reverse ? (
          <>
            <div className="md:order-2">{textBlock}</div>
            <div className="md:order-1">{imageBlock}</div>
          </>
        ) : (
          <>
            <div>{textBlock}</div>
            <div>{imageBlock}</div>
          </>
        )}
      </div>
    </section>
  );
}

function SuggestedActionsBlock({ section }: { section: ArticleSection }) {
  const bullets = section.bullets || [];
  const firstHalf = bullets.slice(0, Math.ceil(bullets.length / 2));
  const secondHalf = bullets.slice(Math.ceil(bullets.length / 2));

  return (
    <section className="py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
          {section.title}
        </h2>

        <div className="mt-10 grid items-start gap-12 md:grid-cols-[520px_1fr]">
          <img
            src={section.image}
            alt={section.imageAlt}
            className="w-full max-w-[520px] rounded-xl object-contain shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
          />

          <ul className="list-disc space-y-1 pl-5 text-[16px] leading-7 text-slate-700">
            {firstHalf.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-[1fr_520px]">
          <ul className="list-disc space-y-1 pl-5 text-[16px] leading-7 text-slate-700">
            {secondHalf.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>

          <img
            src="/images/pattern/transform-negative/meditation.jpg"
            alt="Meditation illustration"
            className="w-full max-w-[520px] rounded-xl object-contain shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
          />
        </div>
      </div>
    </section>
  );
}

export default function TransformNegativeThoughts() {
  const normalSections = sections.filter(
    (section) =>
      section.title !==
      'Transform Negative Thoughts with these Suggested Actions:'
  );

  const suggestedActionsSection = sections.find(
    (section) =>
      section.title ===
      'Transform Negative Thoughts with these Suggested Actions:'
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12">
      <div className="relative z-10">
        <div className="mx-auto max-w-[1200px] px-6"></div>

        <main className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-10 rounded-2xl border border-white/50 !bg-white/70 p-6 shadow-lg backdrop-blur-sm md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="text-3xl sm:!text-4xl lg:text-5xl font-black tracking-tight">
                <span className="!text-[#5f2d85]">
                  Transform Negative Thoughts
                </span>
              </h1>

              <div className="mt-4 space-y-4 text-[16px] leading-7 text-slate-700">
                <p>
                  By cultivating mindfulness, we can learn to identify the
                  negative thoughts that keep us trapped in feelings of
                  self-doubt and shame, and learn instead to embrace the
                  peacefulness that stems from living in the present moment.
                </p>
                <p>
                  One of the easiest ways to be disconnected from our core
                  selves is through habitual negative thinking. It can be easy
                  to feel like negative or worrisome thoughts are capable of
                  kidnapping our minds and taking us out of the present moment;
                  especially when we’re stressed or anxious.
                </p>
                <p>
                  These unpleasant thoughts are often based on automatic thought
                  processes that have been playing over and over in our heads,
                  unchallenged, for years. These thought patterns can fall into
                  three general categories: labeling, catastrophizing, and
                  overgeneralization.
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src="/images/pattern/transform-negative/hero.jpg"
                alt="Transform negative thoughts"
                className="w-full max-w-[420px] rounded-xl object-cover shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
              />
            </div>
          </div>
        </main>

        <div className="mt-10">
          {normalSections
            .filter((section) => section.title !== 'A More Helpful Inner Voice')
            .map((section) => (
              <SectionBlock key={section.title} section={section} />
            ))}

          {suggestedActionsSection ? (
            <SuggestedActionsBlock section={suggestedActionsSection} />
          ) : null}

          {normalSections
            .filter((section) => section.title === 'A More Helpful Inner Voice')
            .map((section) => (
              <SectionBlock key={section.title} section={section} />
            ))}
        </div>
      </div>
    </section>
  );
}
