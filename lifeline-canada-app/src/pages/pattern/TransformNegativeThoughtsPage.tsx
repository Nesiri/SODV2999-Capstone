import React from "react";
import { Link } from "react-router-dom";

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
    title: "Releasing Negative Thought Patterns",
    image: "/images/pattern/transform-negative/releasing-negative-thoughts.jpg",
    imageAlt: "Releasing negative thought patterns",
    reverse: true,
    paragraphs: [
      "Mindfulness can be defined as paying attention in a particular way: on purpose, in the present moment, and without judgment. In simple words, mindfulness helps us become more aware of our thoughts instead of automatically getting carried away by them.",
      "When we slow down and observe what is happening in our minds, we begin to notice repeated thought patterns. We can see how certain beliefs, assumptions, or fears keep showing up again and again. This awareness is important because we cannot change what we do not notice.",
      "Negative thoughts often become stronger when they remain automatic and unchallenged. Mindfulness creates a pause between the thought and the reaction. That pause gives you a chance to respond differently.",
      "Instead of believing every negative thought immediately, you can learn to step back and ask whether it is helpful, accurate, or necessary. Over time, that practice weakens the control those thoughts have over your emotions and behavior.",
    ],
  },
  {
    title: "Challenging Negative Thoughts",
    image: "/images/pattern/transform-negative/challenge-negative-thoughts.jpg",
    imageAlt: "Challenge your negative thoughts poster",
    paragraphs: [
      "It becomes easier to challenge negative thoughts when the process is broken down into simple steps. The goal is not to force yourself to be unrealistically positive. The goal is to notice harmful thinking patterns and replace them with something more balanced and truthful.",
      "The next time you notice yourself stuck in a negative thought loop, try using these four steps.",
    ],
    bullets: [
      "Recognize that you are having a negative thought or pattern of negative thoughts.",
      "Pause and say “Stop” in your mind, or out loud if that helps you interrupt the spiral.",
      "Challenge the thought by asking questions such as: What evidence do I have to support this thought? Is there another way to look at this? What would I say to a friend in the same situation?",
      "Replace the thought with something more rational, balanced, and compassionate.",
      "For example, instead of saying “I always ruin everything,” try “I made a mistake, but I can learn, recover, and make a better choice next time.”",
    ],
  },
  {
    title: "Becoming Mindful: Your Action Plan",
    image: "/images/pattern/transform-negative/mindfulness-activities.jpg",
    imageAlt: "Mindfulness activities poster",
    reverse: true,
    paragraphs: [
      "Mindfulness sounds simple, but it takes practice. The purpose is not to empty your mind. The purpose is to bring your attention back to the present moment when your thoughts begin to pull you away.",
      "One helpful way to begin is to observe how children and animals move through the world. They tend to respond with curiosity and presence rather than endless mental replay. That same attitude can help you soften your relationship with difficult thoughts.",
      "Mindful movement can also be useful. Gentle yoga, stretching, or even sitting still and noticing your breathing can help anchor your mind back into your body.",
      "When you feel anxiety, shame, or racing thoughts, the mind often predicts that the feeling will last forever. Mindfulness teaches the opposite: emotions rise, pass, and change.",
    ],
    bullets: [
      "Notice your breath without trying to control it too much.",
      "Observe your thoughts without judging them as good or bad.",
      "Bring attention back to your body when your mind feels crowded.",
      "Practice short moments of stillness instead of waiting for the perfect time.",
      "Repeat the process daily, even for only two or three minutes.",
    ],
  },
  {
    title: "Simple Daily Mindfulness Practices",
    image: "/images/pattern/transform-negative/mindfulness-circle.jpg",
    imageAlt: "Mindfulness circle diagram",
    paragraphs: [
      "Mindfulness works best when it becomes part of everyday life instead of something you only try during a crisis. Small repeated practices are often more powerful than one long session.",
      "You can practice mindfulness while eating, showering, walking, listening, stretching, washing dishes, or sitting quietly for a minute. The key is to bring your full attention into what you are doing right now.",
      "This helps lower mental noise and gives your mind fewer chances to spiral into old negative patterns.",
    ],
    bullets: [
      "Eat mindfully by noticing the taste, texture, smell, and pace of your food.",
      "Take a mindful shower by focusing on the water, temperature, and physical sensations.",
      "Practice mindful listening by fully hearing someone without planning your reply.",
      "Take a slow walk and notice colors, sounds, movement, and air around you.",
      "Pause during the day and ask: What am I thinking right now, and is it helping me?",
    ],
  },
  {
    title: "Transform Negative Thoughts with Suggested Actions",
    image: "/images/pattern/transform-negative/suggested-actions.jpg",
    imageAlt: "Meditating illustration",
    reverse: true,
    paragraphs: [
      "When negative thoughts become heavy, it helps to interrupt them with action. Action changes mental momentum. You do not always need a deep solution first — sometimes you need a healthy shift in state.",
      "Try simple activities that move your attention, body, or environment. A small change can reduce the intensity of the thought loop and make it easier to think clearly again.",
    ],
    bullets: [
      "Go for a walk.",
      "Call a friend.",
      "Take a silly picture.",
      "Do yoga or stretching.",
      "Play your favorite song loudly.",
      "Read something comforting.",
      "Buy yourself a small treat.",
      "Take a warm bath or shower.",
      "Paint, draw, or create something.",
      "Write in your journal.",
      "Challenge one negative thought for accuracy.",
      "Look for one thing to be grateful for right now.",
      "Help someone else in a small way.",
      "Go somewhere bright or peaceful.",
      "Smile on purpose and soften your shoulders.",
    ],
  },
  {
    title: "A More Helpful Inner Voice",
    image: "/images/pattern/transform-negative/inner-voice.jpg",
    imageAlt: "Mindfulness definition card",
    paragraphs: [
      "One of the strongest ways to transform negative thinking is to change how you speak to yourself. Many people use a level of harshness on themselves that they would never use on someone they care about.",
      "A healthier inner voice does not pretend everything is perfect. It simply speaks with honesty and compassion at the same time.",
      "Instead of saying “I am a failure,” you can say “I am struggling right now, but that is not the same as being a failure.”",
      "Instead of saying “Nothing ever gets better,” you can say “This moment is painful, but moments change, and I can take one step forward.”",
      "That kind of self-talk creates more stability, more self-respect, and more room for recovery.",
    ],
  },
];

export default function TransformNegativeThoughtsPage() {
  return (
    <div className="min-h-screen bg-[#f5f3f8]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6 text-sm text-slate-500">
          <Link to="/pattern" className="text-blue-600 hover:underline">
            Pattern Interrupts
          </Link>{" "}
          <span className="text-slate-400">/</span>{" "}
          <span className="text-slate-700">Transform Negative Thoughts</span>
        </div>

        <section className="bg-gradient-to-r from-[#efe7f7] to-[#e9eef9] px-10 py-16">
          <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                Transform Negative Thoughts
              </h1>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                By cultivating mindfulness, we can learn to identify the negative
                thoughts that keep us trapped in feelings of self-doubt, fear,
                shame, and anxiety. Instead of being controlled by automatic
                thought patterns, we can begin learning how to challenge them and
                replace them with healthier ways of thinking.
              </p>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                One of the easiest ways to become disconnected from our core selves
                is through habitual negative thinking. These thoughts can feel loud
                and convincing, especially when we are stressed or overwhelmed.
                Left unchallenged, they can lead to labeling, catastrophizing,
                overgeneralizing, and harsh self-judgment.
              </p>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                This page is designed to help you slow down, understand how these
                patterns work, and practice concrete strategies for replacing them
                with calmer, more balanced, and more compassionate thinking.
              </p>
            </div>

            <div>
              <img
                src="/images/pattern/transform-negative/hero.jpg"
                alt="Transform negative thoughts"
                className="w-full rounded-none object-cover shadow-[0_10px_18px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-10 py-16">
          <div className="mx-auto max-w-4xl space-y-20">
            {sections.map((section, index) => (
              <article
                key={section.title}
                className="grid items-start gap-10 md:grid-cols-2"
              >
                <div className={section.reverse ? "md:order-2" : ""}>
                  <h2 className="text-3xl font-medium leading-tight text-slate-900">
                    {section.title}
                  </h2>

                  <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-800">
                    {section.paragraphs?.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}

                    {section.bullets ? (
                      <ul className="list-disc space-y-3 pl-6">
                        {section.bullets.map((bullet, bIndex) => (
                          <li key={bIndex}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>

                <div className={section.reverse ? "md:order-1" : ""}>
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className="w-full rounded-none object-cover shadow-[0_10px_18px_rgba(0,0,0,0.14)]"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}