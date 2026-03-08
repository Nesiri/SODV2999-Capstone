import { Link } from "react-router-dom";

type KindnessIdea = {
  title: string;
  items: string[];
};

const kindnessSections: KindnessIdea[] = [
  {
    title: "Kindness for Strangers",
    items: [
      "Say good morning to someone standing next to you.",
      "Hold the door open for the person behind you.",
      "Put your shopping cart back and return an extra one too.",
      "Pay for the coffee, parking, or small item of the person behind you.",
      "Give clear directions to someone who looks lost.",
      "Leave a positive note for a delivery driver or service worker.",
      "Smile at someone who looks like they are having a hard day.",
      "Let someone merge into your lane in traffic.",
      "Offer your seat to an elderly, disabled, or pregnant person.",
    ],
  },
  {
    title: "Kindness for Friends and Family",
    items: [
      "Text someone first and ask how they are really doing.",
      "Say “I love you” to someone you care about.",
      "Write a kind message to a friend you have not checked on recently.",
      "Bring someone their favorite coffee or snack.",
      "Listen without interrupting or trying to fix everything.",
      "Send a photo of a good memory you shared together.",
      "Cook a meal or bring groceries to someone who is overwhelmed.",
      "Offer to babysit or help with a practical task.",
      "Before someone moves away, give them a note, recipe, or keepsake.",
    ],
  },
  {
    title: "Kindness for Your Community",
    items: [
      "Donate clothes you no longer wear.",
      "Volunteer at a local shelter, food bank, or community program.",
      "Pick up trash after a picnic, movie, or walk in the park.",
      "Offer to help a neighbor carry groceries or shovel snow.",
      "Leave a generous tip when you are able.",
      "Support a local small business with a kind review.",
      "Donate books, hygiene products, or school supplies.",
      "Help a friend pack for a move.",
      "Pass along a great book you just finished reading.",
    ],
  },
  {
    title: "Kindness at Work or School",
    items: [
      "Thank a teacher, classmate, coworker, or mentor who made a difference.",
      "Bring extra coffee, donuts, or snacks to share.",
      "Write a note to your boss or supervisor about someone doing a great job.",
      "Offer to help someone who is falling behind.",
      "Give encouragement before a presentation, exam, or stressful meeting.",
      "Transfer a call or task to the right person instead of ignoring it.",
      "Say please and thank you — and mean it.",
      "Celebrate someone else’s success without comparing it to your own.",
    ],
  },
  {
    title: "Kindness to Yourself",
    items: [
      "Speak to yourself the way you would speak to a close friend.",
      "Take a break without guilt.",
      "Forgive yourself for one mistake you are still carrying.",
      "Eat something nourishing and drink water.",
      "Rest when your body asks for it.",
      "Write down three things you did well today.",
      "Set one healthy boundary where you usually overextend yourself.",
      "Let today be imperfect and still call it progress.",
    ],
  },
];

const photoBlocks = [
  {
    image: "/images/pattern/acts-of-kindness/elderly-support.jpg",
    alt: "Helping an elderly person",
    title: "Kindness can be practical",
    text:
      "Acts of kindness do not need to be dramatic to matter. Helping someone carry groceries, checking on a neighbor, or offering support during an ordinary moment can make a person feel seen, safe, and valued.",
  },
  {
    image: "/images/pattern/acts-of-kindness/friends-together.jpg",
    alt: "Friends together",
    title: "Kindness strengthens connection",
    text:
      "Kindness often creates more than a moment of relief. It strengthens trust, deepens friendships, improves belonging, and reminds people that they are not alone in what they are carrying.",
  },
  {
    image: "/images/pattern/acts-of-kindness/helping-homeless.jpg",
    alt: "Helping someone in need",
    title: "Small help still counts",
    text:
      "Even brief gestures matter. Offering food, warm conversation, practical help, or a few minutes of dignity and attention can create a meaningful shift in someone else’s day.",
  },
  {
    image: "/images/pattern/acts-of-kindness/grocery-help.jpg",
    alt: "Helping with groceries",
    title: "Care can be simple",
    text:
      "Sometimes kindness is not about saying the perfect thing. It is about showing up, helping with what is in front of you, and making life a little easier for someone who needs it.",
  },
];

function IdeaSection({ section }: { section: KindnessIdea }) {
  return (
    <section className="rounded-[28px] bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
      <h2 className="text-3xl font-semibold text-slate-900">{section.title}</h2>
      <div className="mt-6 grid gap-3">
        {section.items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-[16px] leading-7 text-slate-800"
          >
            <span className="font-semibold text-violet-700">{index + 1}.</span>{" "}
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function PhotoBlock({
  image,
  alt,
  title,
  text,
  reverse = false,
}: {
  image: string;
  alt: string;
  title: string;
  text: string;
  reverse?: boolean;
}) {
  return (
    <section className="rounded-[28px] bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className={reverse ? "md:order-2" : ""}>
          <img
            src={image}
            alt={alt}
            className="w-full rounded-[24px] object-cover shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
          />
        </div>
        <div className={reverse ? "md:order-1" : ""}>
          <h3 className="text-3xl font-semibold text-slate-900">{title}</h3>
          <p className="mt-5 text-[17px] leading-8 text-slate-700">{text}</p>
        </div>
      </div>
    </section>
  );
}

export default function ActsOfKindnessPage() {
  return (
    <div className="min-h-screen bg-[#f5f3f8]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 text-sm text-slate-500">
          <Link to="/pattern" className="text-blue-600 hover:underline">
            Pattern Interrupts
          </Link>{" "}
          <span className="text-slate-400">/</span>{" "}
          <span className="text-slate-700">Acts of Kindness</span>
        </div>

        <section className="rounded-[32px] bg-gradient-to-r from-[#efe7f7] to-[#e9eef9] px-10 py-16">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                Acts of Kindness
              </h1>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                Stepping outside of yourself and focusing on the needs of others
                can be a powerful pattern interrupt. Kindness shifts attention
                away from spiraling thoughts, strengthens connection, and often
                brings meaning, warmth, and perspective back into the day.
              </p>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                Acts of kindness do not need to be big to matter. A small
                thoughtful gesture can brighten someone else’s day, deepen a
                friendship, or remind a hurting person that they are not alone.
              </p>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                There is also evidence that noticing kindness, practicing
                gratitude, and helping others can improve happiness, life
                satisfaction, and emotional wellbeing. Doing good can become a
                gentle but powerful way to support your own healing too.
              </p>
            </div>

            <div>
              <img
                src="/images/pattern/acts-of-kindness/hero.jpg"
                alt="Acts of kindness"
                className="w-full rounded-[28px] object-cover shadow-[0_14px_30px_rgba(0,0,0,0.14)]"
              />
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
          <h2 className="text-3xl font-semibold text-slate-900">
            Why kindness helps
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 px-5 py-4">
              <p className="text-lg font-medium text-slate-900">
                It interrupts spiraling
              </p>
              <p className="mt-2 text-[15px] leading-7 text-slate-700">
                Doing something caring redirects your mind away from repetitive
                stress and toward meaningful action.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 px-5 py-4">
              <p className="text-lg font-medium text-slate-900">
                It builds connection
              </p>
              <p className="mt-2 text-[15px] leading-7 text-slate-700">
                Kindness strengthens trust, belonging, friendship, and emotional
                safety.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 px-5 py-4">
              <p className="text-lg font-medium text-slate-900">
                It creates meaning
              </p>
              <p className="mt-2 text-[15px] leading-7 text-slate-700">
                Helping others can remind you that even small actions still have
                value and purpose.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 grid gap-8">
          <PhotoBlock
            image={photoBlocks[0].image}
            alt={photoBlocks[0].alt}
            title={photoBlocks[0].title}
            text={photoBlocks[0].text}
          />

          <IdeaSection section={kindnessSections[0]} />
          <IdeaSection section={kindnessSections[1]} />

          <PhotoBlock
            image={photoBlocks[1].image}
            alt={photoBlocks[1].alt}
            title={photoBlocks[1].title}
            text={photoBlocks[1].text}
            reverse
          />

          <IdeaSection section={kindnessSections[2]} />
          <IdeaSection section={kindnessSections[3]} />

          <PhotoBlock
            image={photoBlocks[2].image}
            alt={photoBlocks[2].alt}
            title={photoBlocks[2].title}
            text={photoBlocks[2].text}
          />

          <IdeaSection section={kindnessSections[4]} />

          <PhotoBlock
            image={photoBlocks[3].image}
            alt={photoBlocks[3].alt}
            title={photoBlocks[3].title}
            text={photoBlocks[3].text}
            reverse
          />

          <section className="rounded-[28px] bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-10 text-white shadow-[0_12px_30px_rgba(109,40,217,0.22)]">
            <h2 className="text-3xl font-semibold">A simple kindness challenge</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 px-5 py-4">
                <p className="text-lg font-medium">Today</p>
                <p className="mt-2 text-[15px] leading-7 text-violet-50">
                  Do one small act of kindness for someone else.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 px-5 py-4">
                <p className="text-lg font-medium">This week</p>
                <p className="mt-2 text-[15px] leading-7 text-violet-50">
                  Do one thoughtful act for someone you know personally.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 px-5 py-4">
                <p className="text-lg font-medium">For yourself</p>
                <p className="mt-2 text-[15px] leading-7 text-violet-50">
                  Practice one act of self-kindness without guilt.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)] text-center">
            <h2 className="text-3xl font-semibold text-slate-900">
              More Acts of Kindness Ideas
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-slate-700">
              Explore even more simple and meaningful kindness ideas here.
            </p>

            <a
              href="https://www.randomactsofkindness.org/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-xl bg-violet-700 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-800"
            >
              Random Acts of Kindness Foundation
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}