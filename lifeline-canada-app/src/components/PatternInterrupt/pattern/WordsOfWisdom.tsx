

type QuoteItem = {
  quote: string;
  author: string;
};

type QuoteImageCard = {
  image: string;
  alt: string;
};

const featuredQuotes: QuoteItem[] = [
  {
    quote: "There is hope, even when your brain tells you there isn't.",
    author: 'John Green',
  },
  {
    quote:
      'Do the best you can until you know better. Then when you know better, do better.',
    author: 'Maya Angelou',
  },
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    quote: "Everything you've ever wanted is on the other side of fear.",
    author: 'George Addair',
  },
  {
    quote: 'In the middle of difficulty lies opportunity.',
    author: 'Albert Einstein',
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
];

const strengthQuotes: QuoteItem[] = [
  {
    quote: 'Life is about making an impact, not making an income.',
    author: 'Kevin Kruse',
  },
  { quote: 'What we think, we become.', author: 'Buddha' },
  {
    quote: 'Strive not to be a success, but rather to be of value.',
    author: 'Albert Einstein',
  },
  { quote: 'The best revenge is massive success.', author: 'Frank Sinatra' },
  {
    quote: 'Start where you are. Use what you have. Do what you can.',
    author: 'Arthur Ashe',
  },
  { quote: 'Fall seven times and stand up eight.', author: 'Japanese Proverb' },
  {
    quote: "Whether you think you can or you think you can't, you're right.",
    author: 'Henry Ford',
  },
  { quote: 'If you can dream it, you can achieve it.', author: 'Zig Ziglar' },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: 'Wayne Gretzky',
  },
  {
    quote: 'The secret of getting ahead is getting started.',
    author: 'Mark Twain',
  },
  {
    quote:
      'Hardships often prepare ordinary people for an extraordinary destiny.',
    author: 'C.S. Lewis',
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
];

const healingQuotes: QuoteItem[] = [
  {
    quote:
      'You do not have to control your thoughts. You just have to stop letting them control you.',
    author: 'Dan Millman',
  },
  {
    quote:
      "Feelings are much like waves: we can't stop them from coming, but we can choose which one to surf.",
    author: 'Jonatan Mårtensson',
  },
  {
    quote: 'Healing takes time, and asking for help is a courageous step.',
    author: 'Mariska Hargitay',
  },
  {
    quote:
      "Your present circumstances don't determine where you can go; they merely determine where you start.",
    author: 'Nido Qubein',
  },
  {
    quote:
      'Although the world is full of suffering, it is also full of the overcoming of it.',
    author: 'Helen Keller',
  },
  {
    quote:
      "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
    author: 'Mary Anne Radmacher',
  },
  {
    quote: 'Even the darkest night will end and the sun will rise.',
    author: 'Victor Hugo',
  },
  {
    quote:
      "Promise me you'll always remember: you're braver than you believe, stronger than you seem, and smarter than you think.",
    author: 'A.A. Milne',
  },
  {
    quote:
      'Rock bottom became the solid foundation on which I rebuilt my life.',
    author: 'J.K. Rowling',
  },
  {
    quote: 'The wound is the place where the Light enters you.',
    author: 'Rumi',
  },
  {
    quote: 'Sometimes the bravest thing you can do is ask for help.',
    author: 'Unknown',
  },
  {
    quote:
      'You are not alone in this. There are others who feel what you feel.',
    author: 'Unknown',
  },
];

const purposeQuotes: QuoteItem[] = [
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    author: 'Mark Twain',
  },
  {
    quote: "Life is what happens to you while you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    quote:
      'The two most important days in your life are the day you are born and the day you find out why.',
    author: 'Mark Twain',
  },
  {
    quote:
      'Go confidently in the direction of your dreams. Live the life you have imagined.',
    author: 'Henry David Thoreau',
  },
  {
    quote: "Set your goals high, and don't stop till you get there.",
    author: 'Bo Jackson',
  },
  {
    quote:
      'Setting goals is the first step in turning the invisible into the visible.',
    author: 'Tony Robbins',
  },
  { quote: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    quote: 'The most common form of despair is not being who you are.',
    author: 'Søren Kierkegaard',
  },
  {
    quote:
      'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    author: 'Ralph Waldo Emerson',
  },
  { quote: 'Get busy living or get busy dying.', author: 'Stephen King' },
  {
    quote: 'In order to write about life first you must live it.',
    author: 'Ernest Hemingway',
  },
];

const resilienceQuotes: QuoteItem[] = [
  {
    quote: "It always seems impossible until it's done.",
    author: 'Nelson Mandela',
  },
  { quote: 'Turn your wounds into wisdom.', author: 'Oprah Winfrey' },
  {
    quote: "If you're going through hell, keep going.",
    author: 'Winston Churchill',
  },
  {
    quote: 'We may encounter many defeats but we must not be defeated.',
    author: 'Maya Angelou',
  },
  {
    quote: 'Out of suffering have emerged the strongest souls.',
    author: 'Khalil Gibran',
  },
  {
    quote:
      'You have power over your mind, not outside events. Realize this, and you will find strength.',
    author: 'Marcus Aurelius',
  },
  {
    quote: 'Tough times never last, but tough people do.',
    author: 'Robert H. Schuller',
  },
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    quote:
      'Life is not about waiting for the storm to pass but learning to dance in the rain.',
    author: 'Vivian Greene',
  },
  {
    quote:
      'Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened.',
    author: 'Helen Keller',
  },
  {
    quote:
      "The human capacity for burden is like bamboo — far more flexible than you'd ever believe at first glance.",
    author: 'Jodi Picoult',
  },
  {
    quote:
      'The bravest sight in the world is to see a great man struggling against adversity.',
    author: 'Seneca',
  },
];

const mindsetQuotes: QuoteItem[] = [
  {
    quote: "Whether you think you can or think you can't — you are right.",
    author: 'Henry Ford',
  },
  {
    quote: 'The mind is everything. What you think you become.',
    author: 'Buddha',
  },
  {
    quote: 'Change your thoughts and you change your world.',
    author: 'Norman Vincent Peale',
  },
  {
    quote: 'A person who never made a mistake never tried anything new.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'I am not a product of my circumstances. I am a product of my decisions.',
    author: 'Stephen Covey',
  },
  {
    quote:
      'The only limit to our realization of tomorrow will be our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote:
      'Happiness is not something readymade. It comes from your own actions.',
    author: 'Dalai Lama',
  },
  {
    quote: 'We become what we think about most of the time.',
    author: 'Earl Nightingale',
  },
  {
    quote:
      'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle',
  },
  {
    quote:
      'Keep your face always toward the sunshine, and shadows will fall behind you.',
    author: 'Walt Whitman',
  },
  {
    quote:
      'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    author: 'Ralph Waldo Emerson',
  },
  {
    quote:
      'The only person you are destined to become is the person you decide to be.',
    author: 'Ralph Waldo Emerson',
  },
];

const imageCards: QuoteImageCard[] = [
  {
    image: '/images/pattern/words-of-wisdom/hope-lives-here.jpg',
    alt: 'Hope lives here',
  },
  {
    image: '/images/pattern/words-of-wisdom/john-green-hope.jpg',
    alt: 'John Green hope quote',
  },
  {
    image: '/images/pattern/words-of-wisdom/maya-angelou.jpg',
    alt: 'Maya Angelou quote',
  },
  {
    image: '/images/pattern/words-of-wisdom/victor-hugo.jpg',
    alt: 'Victor Hugo quote',
  },
  {
    image: '/images/pattern/words-of-wisdom/tony-robbins.jpg',
    alt: 'Tony Robbins quote',
  },
  {
    image: '/images/pattern/words-of-wisdom/steve-jobs.jpg',
    alt: 'Steve Jobs quote',
  },
];

const allQuotes: QuoteItem[] = [
  ...strengthQuotes,
  ...featuredQuotes,
  ...healingQuotes,
  ...purposeQuotes,
  ...resilienceQuotes,
  ...mindsetQuotes,
];

function QuoteBlock({
  items,
  startNumber,
}: {
  items: QuoteItem[];
  startNumber: number;
}) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <p
          key={`${item.author}-${startNumber + index}`}
          className="text-[16px] leading-8 text-slate-700"
        >
          {startNumber + index}. {item.quote}{' '}
          <span className="text-slate-500">– {item.author}</span>
        </p>
      ))}
    </div>
  );
}

function QuoteImage({ image, alt }: QuoteImageCard) {
  return (
    <div className="my-8 flex justify-center">
      <img
        src={image}
        alt={alt}
        className="w-full max-w-[420px] rounded-xl object-cover shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
      />
    </div>
  );
}

export default function WordsOfWisdom() {
  const leftQuotes = allQuotes.filter((_, i) => i % 2 === 0);
  const rightQuotes = allQuotes.filter((_, i) => i % 2 !== 0);

  const chunkSize = Math.ceil(leftQuotes.length / 3);
  const leftBlock1 = leftQuotes.slice(0, chunkSize);
  const leftBlock2 = leftQuotes.slice(chunkSize, chunkSize * 2);
  const leftBlock3 = leftQuotes.slice(chunkSize * 2);

  const rChunkSize = Math.ceil(rightQuotes.length / 3);
  const rightBlock1 = rightQuotes.slice(0, rChunkSize);
  const rightBlock2 = rightQuotes.slice(rChunkSize, rChunkSize * 2);
  const rightBlock3 = rightQuotes.slice(rChunkSize * 2);

  const leftStart1 = 1;
  const leftStart2 = leftStart1 + leftBlock1.length * 2;
  const leftStart3 = leftStart2 + leftBlock2.length * 2;

  const rightStart1 = 2;
  const rightStart2 = rightStart1 + rightBlock1.length * 2;
  const rightStart3 = rightStart2 + rightBlock2.length * 2;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12">
      <div className="relative z-10">
        <div className="mx-auto max-w-[1200px] px-6"></div>

        <main className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-10 rounded-2xl border border-white/50 !bg-white/70 p-6 shadow-lg backdrop-blur-sm md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="text-3xl sm:!text-4xl lg:text-5xl font-black tracking-tight">
                <span className="!text-[#5f2d85]">Words of Wisdom</span>
              </h1>
              <div className="mt-4 space-y-4 text-[16px] leading-7 text-slate-700">
                <p>
                  Words of wisdom are helpful to anyone looking to get inspired
                  through words that are as powerful as they are meaningful.
                  They offer solace, clarity, and profound insights into the art
                  of living. Sometimes a great mind can put a complex subject or
                  feeling into a few succinct words to powerful effect.
                </p>
                <p>
                  Motivational quotes provide us with a quick and timely burst
                  of wisdom to get our focus back, offering the inspiration
                  needed for the day or occasion. Often a quote can offer
                  inspiration for the week, and inspire us when our normal
                  motivation has lapsed.
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="/images/pattern/words-of-wisdom/hero.jpg"
                alt="Words of wisdom"
                className="w-full max-w-[420px] rounded-xl object-cover shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
              />
            </div>
          </div>
        </main>

        <section className="mx-auto mt-10 max-w-[1200px] px-6">
          <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
            Inspirational Quotes
          </h2>

          <div className="mt-8 grid items-start gap-x-10 md:grid-cols-2">
            <div>
              <QuoteBlock items={leftBlock1} startNumber={leftStart1} />
              {imageCards[1] && <QuoteImage {...imageCards[1]} />}
              <QuoteBlock items={leftBlock2} startNumber={leftStart2} />
              {imageCards[2] && <QuoteImage {...imageCards[2]} />}
              <QuoteBlock items={leftBlock3} startNumber={leftStart3} />
              {imageCards[4] && <QuoteImage {...imageCards[4]} />}
            </div>

            <div className="mt-10 md:mt-0">
              {imageCards[0] && <QuoteImage {...imageCards[0]} />}
              <QuoteBlock items={rightBlock1} startNumber={rightStart1} />
              {imageCards[3] && <QuoteImage {...imageCards[3]} />}
              <QuoteBlock items={rightBlock2} startNumber={rightStart2} />
              {imageCards[5] && <QuoteImage {...imageCards[5]} />}
              <QuoteBlock items={rightBlock3} startNumber={rightStart3} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
