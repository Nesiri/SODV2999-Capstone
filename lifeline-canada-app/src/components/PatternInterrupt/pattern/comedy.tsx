const comedyLinks = [
  {
    title: '14 Minutes of Comedians Reaffirming Mental Health Struggles',
    description:
      "May is mental health awareness month and some of our comedians have kept it all the way 100 with their mental health journey as well as letting us know: you're doing just fine! Comedian Lineup: Jim Norton, Tom Papa, Neal Brennan, Maria Bamford.",
    image: '/images/comedy/comedy-link-1.jpg',
    href: 'https://www.youtube.com/watch?v=GfS8bV8jJ6M',
  },
  {
    title: 'So Funny It Can Cure Depression',
    description:
      'The very best and funniest videos! You will need to wipe tears from laughing! From funny kids & toddlers to hilarious cats, funny fail moments,... The hardest TRY NOT TO LAUGH challenge! Only the best and the funniest fail videos! The content in this compilation is licensed and used with authorization of the rights holder.',
    image: '/images/comedy/comedy-link-2.jpg',
    href: 'https://www.youtube.com/watch?v=QJfJ6Fh8R7Q',
  },
  {
    title: '10 Minutes of Comedy to Cure Your Anxiety',
    description:
      "Going through it? Can relate. This 10-minute break will make you smile. Unless you're a sociopath. John Mulaney, Michelle Buteau, and Jim Gaffigan.",
    image: '/images/comedy/comedy-link-3.jpg',
    href: 'https://www.youtube.com/watch?v=2YwC4Vsm5h0',
  },
  {
    title: 'Kevin Breel: Confessions of a Depressed Comic',
    description:
      "Writer, comic and mental health activist Kevin Breel speaks up about depression. Kevin Breel didn't look like a depressed kid: team captain, at every party, funny and confident. But he tells the story of the night he realized that to save his own life he needed to say four simple words.",
    image: '/images/pattern/comedy/kevin-breel.jpg',
    href: 'https://www.ted.com/talks/kevin_breel_confessions_of_a_depressed_comic',
  },
];

export default function Comedy() {
  const imageRowClassName =
    'rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row gap-5 items-start';
  const sideImageClassName =
    'w-full h-auto object-cover object-top rounded-lg shadow-md';

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12 overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full lg:w-4/5 mx-auto">
          {/* Page Title */}
          <h1 className="!text-[#5f2d85] mt-4 !text-3xl sm:!text-4xl lg:!text-5xl font-black tracking-tight">
            <span className="!text-[#5f2d85]">Comedy</span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          {/* Intro Card */}
          <main className="mt-6 !bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="leading-relaxed">
                The health benefits of comedy and laughing are widely
                chronicled. It releases endorphins, which make us feel happy, as
                well as other hormones linked with reducing stress, boosting
                immune response and strengthening social relationships. When it
                comes to mental health, the release of these happy hormones are
                an excellent short-term relief, while a heightened level of
                social bonding can lead to longer term feelings of inclusion and
                the creation of support networks. Both are key elements in the
                fight against depression.
              </p>
              <p className="mt-4 leading-relaxed">
                Gelotology – or the study of laughter – has long sought
                scientific answers to the potential health benefits of laughing.
                Whether it's giggling at something someone said or laughing out
                loud at a comedy show, a good laugh is healthy for you. Numerous
                medical studies agree that laughter is a natural mental health
                remedy and the ultimate stress relief medicine.
              </p>
            </div>
            <div className="sm:w-[30vw] sm:max-w-[18rem] sm:flex-shrink-0 w-full">
              <img
                src="/images/comedy/comedy-hero.jpg"
                alt="Comedy and laughter"
                className="w-full h-full object-cover object-top rounded-lg shadow-md"
              />
            </div>
          </main>

          {/* Humor and Mental Health */}
          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Humor and Mental Health
            </h2>
            <p className="mt-3 leading-relaxed">
              Having a good sense of humor has numerous long-term and short-term
              mental health benefits. Web MD.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
              {/* Short-term */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <h3 className="!text-xl font-normal !text-[#5f2d85]">
                  Short-term Benefits
                </h3>
                <p className="mt-3 leading-relaxed">
                  <strong>Short-term</strong> mental health benefits of humor.
                  Laughing automatically triggers positive physical and mental
                  changes that help to relax your mind. The short-term benefits
                  of laughter include:
                </p>
                <ul className="mt-3 space-y-3 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Organ stimulation:</strong> A good laugh improves
                    your intake of oxygen-rich air. This, in turn, stimulates
                    organs such as the heart, lungs, and muscles. Your brain
                    also releases endorphins — hormones that cause a feeling of
                    pleasure and a relaxed mind.
                  </li>
                  <li>
                    <strong>Stress relief:</strong> Laughing activates your
                    body's stress response mechanism. This process changes your
                    heart rate leaving you in high spirits.
                  </li>
                  <li>
                    <strong>Relief from tension:</strong> Laughter also
                    stimulates rapid blood circulation. When this happens, you
                    may experience a calming sensation that takes away tension
                    and stress.
                  </li>
                </ul>
              </div>

              {/* Long-term */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <h3 className="!text-xl font-normal !text-[#5f2d85]">
                  Long-term Benefits
                </h3>
                <p className="mt-3 leading-relaxed">
                  <strong>Long-term</strong> benefits of humor on mental health.
                  In addition to the short-term benefits, humor has several
                  scientifically proven long-term effects. Some of them include:
                </p>
                <ul className="mt-3 space-y-3 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>A boost to the immune system:</strong> Positive
                    thoughts lead to the release of neuropeptides. These are
                    brain chemicals known to fight anxiety, stress, and other
                    related mental conditions. Having negative thoughts may
                    result in chemical reactions in the body that cause elevated
                    stress levels, which in turn works against your immunity.
                  </li>
                  <li>
                    <strong>Pain relief:</strong> A good laugh causes your body
                    to release natural painkillers, thereby relieving you of
                    physical pain.
                  </li>
                  <li>
                    <strong>Positivity:</strong> Having a good sense of humor
                    can help you interact and connect with other people.
                    Positive thoughts and good relationships may assist you to
                    cope by taking your mind off difficult situations.
                  </li>
                  <li>
                    <strong>Improving mood:</strong> Laughter can significantly
                    lift your spirits by reducing anxiety and depression, making
                    you happier.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tips to Improve Your Sense of Humor */}
          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <div className={imageRowClassName}>
              <div className="flex-1">
                <h2
                  className="text-2xl sm:text-3xl font-bold tracking-tight !text-[#5f2d85]
                "
                >
                  Tips to Improve Your Sense of Humor
                </h2>
                <p className="mt-4 leading-relaxed">
                  If you are a naturally cheerful person, you may be less prone
                  to depression and anxiety. This, however, doesn't mean happy
                  people are not vulnerable to mental health issues. Life can be
                  overwhelming at times. Even the strongest people break. A good
                  sense of humor is a natural way to keep your stress levels in
                  check. The following tips will help you develop it:
                </p>
                <ul className="mt-4 space-y-3 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>
                      Focus your attention on things that make you happy:
                    </strong>{' '}
                    Humor revolves around happiness. Try to stay happy by doing
                    things that make you smile. A good way to do so is by
                    identifying the simple things that bring good thoughts and
                    rekindle fond memories.
                  </li>
                  <li>
                    <strong>Embrace a giving spirit:</strong> Not just material
                    things. When in the company of funny people, get involved in
                    making jokes with them. When they make you laugh, return the
                    favor by sharing funny stories.
                  </li>
                  <li>
                    <strong>Find something funny on social media:</strong>{' '}
                    Social media platforms can be a good source of laughter. You
                    can join groups or follow people who are all about humor.
                    This way, you too can learn a few things about being funny.
                  </li>
                  <li>
                    <strong>Be discerning:</strong> As much as a good laugh is
                    healthy, not everything is funny. Discern what types of
                    jokes are appropriate. It will help to avoid making innocent
                    jokes that turn out to be rude or hurtful to some people.
                  </li>
                </ul>
              </div>
              <div className="sm:w-[18vw] sm:max-w-[14rem] sm:flex-shrink-0 w-full">
                <img
                  src="/images/comedy/comedy-group.jpg"
                  alt="People laughing together"
                  className={sideImageClassName}
                />
              </div>
            </div>
          </div>

          {/* Helpful Comedy Links */}
          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Helpful Comedy Links
            </h2>

            <div className="mt-6 space-y-4 sm:space-y-5">
              {comedyLinks.map((item, index) => (
                <div key={index} className={imageRowClassName}>
                  <div className="sm:w-[18vw] sm:max-w-[14rem] sm:flex-shrink-0 w-full !text-[#5f2d85]">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="!text-[#5f2d85] hover:!text-[#5f2d85] transition-colors duration-200 inline-block"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className={sideImageClassName}
                      />
                    </a>
                  </div>
                  <div className="flex-1">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="!text-xl font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                    >
                      {item.title}
                    </a>
                    <p className="mt-3 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
