import { Link } from "react-router-dom";

type QuoteItem = {
  quote: string;
  author: string;
};

type QuoteImageCard = {
  image: string;
  alt: string;
  caption?: string;
};

const featuredQuotes: QuoteItem[] = [
  {
    quote: "There is hope, even when your brain tells you there isn’t.",
    author: "John Green",
  },
  {
    quote: "Do the best you can until you know better. Then when you know better, do better.",
    author: "Maya Angelou",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
];

const strengthQuotes: QuoteItem[] = [
  {
    quote: "Life is about making an impact, not making an income.",
    author: "Kevin Kruse",
  },
  {
    quote: "What we think, we become.",
    author: "Buddha",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    quote: "Fall seven times and stand up eight.",
    author: "Japanese Proverb",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    quote: "If you can dream it, you can achieve it.",
    author: "Zig Ziglar",
  },
];

const healingQuotes: QuoteItem[] = [
  {
    quote: "You do not have to control your thoughts. You just have to stop letting them control you.",
    author: "Dan Millman",
  },
  {
    quote: "Feelings are much like waves: we can’t stop them from coming, but we can choose which one to surf.",
    author: "Jonatan Mårtensson",
  },
  {
    quote: "Healing takes time, and asking for help is a courageous step.",
    author: "Mariska Hargitay",
  },
  {
    quote: "Your present circumstances don’t determine where you can go; they merely determine where you start.",
    author: "Nido Qubein",
  },
  {
    quote: "Although the world is full of suffering, it is also full of the overcoming of it.",
    author: "Helen Keller",
  },
  {
    quote: "Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’",
    author: "Mary Anne Radmacher",
  },
];

const purposeQuotes: QuoteItem[] = [
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    author: "Mark Twain",
  },
  {
    quote: "Life is what happens to you while you’re busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    quote: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau",
  },
  {
    quote: "Set your goals high, and don’t stop till you get there.",
    author: "Bo Jackson",
  },
  {
    quote: "Setting goals is the first step in turning the invisible into the visible.",
    author: "Tony Robbins",
  },
];

const imageCards: QuoteImageCard[] = [
  {
    image: "/images/pattern/words-of-wisdom/hope-lives-here.jpg",
    alt: "Hope lives here",
    caption: "A reminder that hope still exists, even during dark seasons.",
  },
  {
    image: "/images/pattern/words-of-wisdom/john-green-hope.jpg",
    alt: "John Green hope quote",
    caption: "One of the most powerful reminders for depression and hopelessness.",
  },
  {
    image: "/images/pattern/words-of-wisdom/maya-angelou.jpg",
    alt: "Maya Angelou quote",
    caption: "Growth starts when you allow yourself to learn and continue.",
  },
  {
    image: "/images/pattern/words-of-wisdom/victor-hugo.jpg",
    alt: "Victor Hugo quote",
    caption: "Even the darkest night ends.",
  },
  {
    image: "/images/pattern/words-of-wisdom/tony-robbins.jpg",
    alt: "Tony Robbins quote",
    caption: "Small goals can make invisible hope feel real again.",
  },
  {
    image: "/images/pattern/words-of-wisdom/steve-jobs.jpg",
    alt: "Steve Jobs quote",
    caption: "Purpose and passion create movement.",
  },
];

function QuoteList({
  title,
  intro,
  quotes,
}: {
  title: string;
  intro: string;
  quotes: QuoteItem[];
}) {
  return (
    <section className="rounded-[28px] bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
      <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-4 text-[17px] leading-8 text-slate-700">{intro}</p>

      <div className="mt-8 space-y-5">
        {quotes.map((item, index) => (
          <div
            key={`${item.author}-${index}`}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
          >
            <p className="text-[17px] leading-7 text-slate-900">
              “{item.quote}”
            </p>
            <p className="mt-2 text-sm font-medium text-violet-700">
              — {item.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ImageQuoteGrid({ cards }: { cards: QuoteImageCard[] }) {
  return (
    <section className="rounded-[28px] bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
      <h2 className="text-3xl font-semibold text-slate-900">
        Visual Inspiration
      </h2>
      <p className="mt-4 text-[17px] leading-8 text-slate-700">
        Sometimes images carry encouragement in a way that words alone cannot.
        Save the ones that speak to you and return to them on hard days.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
          >
            <img
              src={card.image}
              alt={card.alt}
              className="h-[260px] w-full object-cover"
            />
            {card.caption ? (
              <div className="px-5 py-4">
                <p className="text-[15px] leading-7 text-slate-700">
                  {card.caption}
                </p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function WordsOfWisdomPage() {
  return (
    <div className="min-h-screen bg-[#f5f3f8]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 text-sm text-slate-500">
          <Link to="/pattern" className="text-blue-600 hover:underline">
            Pattern Interrupts
          </Link>{" "}
          <span className="text-slate-400">/</span>{" "}
          <span className="text-slate-700">Words of Wisdom</span>
        </div>

        <section className="rounded-[32px] bg-gradient-to-r from-[#efe7f7] to-[#e9eef9] px-10 py-16">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                Words of Wisdom
              </h1>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                Words of wisdom can offer comfort, direction, perspective, and
                encouragement during difficult moments. A powerful sentence can
                sometimes say what a tired heart has been trying to feel for a
                long time.
              </p>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                The goal of this page is not just motivation. It is to give you
                reminders that help you breathe, slow down, reconnect with hope,
                and return to your own strength. Save the quotes that speak to
                you. Re-read them on heavy days. Let them interrupt the thoughts
                that pull you downward.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {featuredQuotes.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/80 px-5 py-4 shadow-sm"
                  >
                    <p className="text-[16px] leading-7 text-slate-900">
                      “{item.quote}”
                    </p>
                    <p className="mt-2 text-sm font-medium text-violet-700">
                      — {item.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="/images/pattern/words-of-wisdom/hero.jpg"
                alt="Words of wisdom"
                className="w-full rounded-[28px] object-cover shadow-[0_14px_30px_rgba(0,0,0,0.14)]"
              />
            </div>
          </div>
        </section>

        <div className="mt-10 grid gap-8">
          <ImageQuoteGrid cards={imageCards} />

          <div className="grid gap-8 lg:grid-cols-2">
            <QuoteList
              title="Quotes for Strength"
              intro="These quotes are for courage, momentum, resilience, and getting back up when life feels heavy."
              quotes={strengthQuotes}
            />

            <QuoteList
              title="Quotes for Healing"
              intro="These reminders are softer. They focus on emotional recovery, gentleness, hope, and self-compassion."
              quotes={healingQuotes}
            />
          </div>

          <QuoteList
            title="Quotes for Purpose and Direction"
            intro="When you feel stuck or uncertain, these words can help shift your attention toward meaning, growth, and the next step."
            quotes={purposeQuotes}
          />

          <section className="rounded-[28px] bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-10 text-white shadow-[0_12px_30px_rgba(109,40,217,0.22)]">
            <h2 className="text-3xl font-semibold">How to Use This Page</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 px-5 py-4">
                <p className="text-lg font-medium">1. Pick one quote</p>
                <p className="mt-2 text-[15px] leading-7 text-violet-50">
                  Choose the line that feels most true or most needed today.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 px-5 py-4">
                <p className="text-lg font-medium">2. Write it down</p>
                <p className="mt-2 text-[15px] leading-7 text-violet-50">
                  Save it in your notes, journal, wallpaper, or mirror.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 px-5 py-4">
                <p className="text-lg font-medium">3. Repeat it often</p>
                <p className="mt-2 text-[15px] leading-7 text-violet-50">
                  Repetition helps hopeful thoughts become more familiar than
                  harsh ones.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
            <h2 className="text-3xl font-semibold text-slate-900">
              A Few Reminders to Keep
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "A hard day is not a hopeless life.",
                "You can be healing and hurting at the same time.",
                "Small progress still counts.",
                "Rest is not failure.",
                "You do not need to have everything figured out today.",
                "Hope can return quietly.",
                "You are allowed to begin again.",
                "Your story is still unfolding.",
              ].map((line, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-[16px] leading-7 text-slate-800"
                >
                  {line}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}