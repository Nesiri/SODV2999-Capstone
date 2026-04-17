

type KindnessBlock = {
  image: string;
  alt: string;
  items: string[];
  imageLeft?: boolean;
};

const kindnessBlocks: KindnessBlock[] = [
  {
    image: '/images/pattern/acts-of-kindness/elderly-support.jpg',
    alt: 'Helping an elderly person',
    items: [
      'Say “Good morning” to a person standing next to you in line.',
      'Wave.',
      'Bake the last of the dinner behind you.',
      'Hold a minute to deliver someone who is sick, warm soup.',
      'Write a note to a child who could use some extra attention.',
      'Give someone a compliment.',
      'Offer to help set groceries for an elderly neighbor, especially in winter snow or on icy days.',
      'Give a generous review to your doctor, dentist, or therapist.',
      'Say “I love you” to someone you love.',
      'Put a coin in an expired meter.',
    ],
  },
  {
    image: '/images/pattern/acts-of-kindness/friends-together.jpg',
    alt: 'Friends together',
    imageLeft: false,
    items: [
      'Help a mother carry her baby stroller up the subway stairs, or hold a door open for her.',
      'Each time you get an item from a vending machine, give away something extra.',
      'Take a picture of a friend at the carnival, picnic, or festival.',
      'Let your waitress/waiter know she/he is doing a great job.',
      'Say “please” and “thank you” — and really mean it.',
      'When you see a crowded bus or train, offer your seat to an elderly, disabled, or pregnant person.',
      'Don’t interrupt when someone else is speaking their heart.',
      'Leave a kind note where someone will find it.',
    ],
  },
  {
    image: '/images/pattern/acts-of-kindness/helping-homeless.jpg',
    alt: 'Helping someone in need',
    items: [
      'Offer to babysit for a single mom.',
      'Pay your shopping cart back in its place.',
      'Cut a smile in line behind you through your life.',
      'Bring a box of doughnuts to share at the office.',
      'Bring someone a dish — and never bring it up again.',
      'Listen with your whole heart.',
      'Take a minute to be part of someone who helps you, and thank them if you had patience to show.',
      'Surprise your family with what you’re making.',
    ],
  },
  {
    image: '/images/pattern/acts-of-kindness/grocery-help.jpg',
    alt: 'Helping with groceries',
    imageLeft: false,
    items: [
      'Invite a lonely senior over for a meal or dessert.',
      'Give your partner a little massage or shoulder rub.',
      'Encourage someone who seems disappointed.',
      'Volunteer to look after a friend’s dog while he is vacationing.',
      'Wish someone the best in the interview.',
      'Help someone look up the information they need immediately.',
      'Ask a friend how she really feels today.',
      'Offer change when the person in front of you at the register comes up short.',
      'Donate a brand new, unused item your favorite place or person asked for.',
      'Leave a positive note for a driver or service worker today from another department, even if he usually forgets.',
      'Tell someone a joke that gets you to smile.',
      'At work, offer to transfer a caller who means help from another department.',
      'Pick up a little piece of litter and put it in the bin.',
      'Go through a rough patch, try to buy your friend lunch.',
      'Let somebody go in front of you.',
      'Celebrate someone else’s success without comparing it to your own.',
      'Before someone moves away, give them a note, recipe, or keepsake.',
      'Pass along a great book you just finished reading.',
      'Support a local cause or small business with a kind review.',
    ],
  },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="max-w-[620px]">
            <h1 className="text-3xl sm:!text-4xl lg:text-5xl font-black tracking-tight">
              <span className="!text-[#5f2d85]">Acts of Kindness</span>
            </h1>

            <div className="mt-4 space-y-6 text-[16px] leading-7 text-slate-700">
              <p>
                Stepping outside of oneself and focusing on the needs of others
                is an excellent Pattern Interrupt. Not only do you stop focusing
                on your own thoughts, but the reward of strengthening a
                friendship and the dopamine hit of working happily together with
                someone else all work together to make acting in kindness a very
                strong pattern interrupt and self help, well-being exercise.
              </p>

              <p>
                There is some evidence that being aware of our own acts of
                kindness, as well as the things we are grateful for, can
                increase feelings of happiness, optimism and satisfaction. Doing
                good may help you to have a more positive outlook about your own
                circumstances.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/images/pattern/acts-of-kindness/hero.jpg"
              alt="Acts of kindness"
              className="w-full max-w-[580px] rounded-xl object-cover shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function KindnessListBlock({
  image,
  alt,
  items,
  imageLeft = true,
}: KindnessBlock) {
  const imageContent = (
    <div className="flex justify-center">
      <img
        src={image}
        alt={alt}
        className="w-full max-w-[370px] rounded-xl object-cover shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
      />
    </div>
  );

  const textContent = (
    <ol className="list-decimal pl-6 text-[16px] leading-7 text-slate-700 max-w-[520px] space-y-1">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );

  return (
    <div className="grid items-start gap-12 py-8 md:grid-cols-2">
      {imageLeft ? (
        <>
          <div>{imageContent}</div>
          <div>{textContent}</div>
        </>
      ) : (
        <>
          <div>{textContent}</div>
          <div>{imageContent}</div>
        </>
      )}
    </div>
  );
}

export default function ActsOfKindnes() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12">
      <div className="mx-auto max-w-[1200px] px-6"></div>

      <HeroSection />

      <section className="mx-auto max-w-[1200px] rounded-2xl border border-purple-100 !bg-white/90 px-6 py-14 shadow-sm backdrop-blur-sm">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-2xl sm:text-3xl lg:!text-4xl font-bold tracking-tight !text-[#5f2d85]">
            35 Small Acts of Kindness
          </h2>

          <p className="mt-3 text-[16px] text-slate-700">
            A small, thoughtful gesture can make someone else’s day.
          </p>

          <div className="mt-8">
            {kindnessBlocks.map((block, index) => (
              <KindnessListBlock key={index} {...block} />
            ))}
          </div>

          <div className="mt-10 text-center text-[14px] text-slate-700">
            More Acts of Kindness ideas click here{' '}
            <a
              href="https://www.randomactsofkindness.org/"
              target="_blank"
              rel="noreferrer"
              className="font-normal uppercase tracking-wide !text-[#5f2d85] hover:underline"
            >
              Random Acts of Kindness Foundation
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
