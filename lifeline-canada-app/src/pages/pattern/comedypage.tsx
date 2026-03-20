import React from "react";

const comedyLinks = [
  {
    title: "14 Minutes of Comedians Reaffirming Mental Health Struggles",
    description:
      "May is mental health awareness month and some of our comedians have kept it all the way 100 with their mental health journey as well as letting us know: you’re doing just fine! Comedian Lineup: Jim Norton, Tom Papa, Neal Brennan, Maria Bamford.",
    image: "/images/comedy/comedy-link-1.jpg",
    href: "https://www.youtube.com/watch?v=GfS8bV8jJ6M",
  },
  {
    title: "So Funny It Can Cure Depression",
    description:
      "The very best and funniest videos! You will need to wipe tears from laughing! From funny kids & toddlers to hilarious cats, funny fail moments,... The hardest TRY NOT TO LAUGH challenge! Only the best and the funniest fail videos! The content in this compilation is licensed and used with authorization of the rights holder.",
    image: "/images/comedy/comedy-link-2.jpg",
    href: "https://www.youtube.com/watch?v=QJfJ6Fh8R7Q",
  },
  {
    title: "10 Minutes of Comedy to Cure Your Anxiety",
    description:
      "Going through it? Can relate. This 10-minute break will make you smile. Unless you’re a sociopath. John Mulaney, Michelle Buteau, and Jim Gaffigan.",
    image: "/images/comedy/comedy-link-3.jpg",
    href: "https://www.youtube.com/watch?v=2YwC4Vsm5h0",
  },
  {
    title: "Kevin Breel: Confessions of a Depressed Comic",
    description:
      "Writer, comic and mental health activist Kevin Breel speaks up about depression. Kevin Breel didn’t look like a depressed kid: team captain, at every party, funny and confident. But he tells the story of the night he realized that to save his own life he needed to say four simple words.",
    image: "/images/comedy/comedy-link-4.jpg",
    href: "https://www.ted.com/talks/kevin_breel_confessions_of_a_depressed_comic",
  },
];

export default function ComedyPage() {
  return (
    <div className="w-full bg-white text-black">
      {/* Hero */}
      <section className="w-full bg-[#f3ecf7]">
        <div className="mx-auto max-w-[1400px] px-10 py-20">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div className="max-w-[720px]">
              <h1
                className="mb-4 text-[48px] leading-none text-black"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Comedy
              </h1>

              <p
                className="mb-8 text-[24px] leading-[1.28] text-black"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
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

              <p
                className="text-[24px] leading-[1.28] text-black"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Gelotology – or the study of laughter – has long sought
                scientific answers to the potential health benefits of laughing.
                Whether it’s giggling at something someone said or laughing out
                loud at a comedy show, a good laugh is healthy for you.
                Numerous medical studies agree that laughter is a natural mental
                health remedy and the ultimate stress relief medicine.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/comedy/comedy-hero.jpg"
                alt="Comedy and laughter"
                className="w-full max-w-[620px] object-cover shadow-[8px_10px_12px_rgba(0,0,0,0.28)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Humor and Mental Health */}
      <section className="mx-auto max-w-[1400px] px-10 py-20">
        <h2
          className="mb-6 text-[48px] leading-none text-black"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Humor and Mental Health
        </h2>

        <p
          className="mb-8 text-[24px] leading-[1.3] text-black"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Having a good sense of humor has numerous long-term and short-term
          mental health benefits. Web MD.
        </p>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className="max-w-[720px] text-[20px] leading-[1.32] text-black"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            <p className="mb-5">
              <strong>Short-term</strong> mental health benefits of humor.
              Laughing automatically triggers positive physical and mental
              changes that help to relax your mind. The short-term benefits of
              laughter include:
            </p>

            <ul className="list-disc space-y-2 pl-10">
              <li>
                <strong>Organ stimulation:</strong> A good laugh improves your
                intake of oxygen-rich air. This, in turn, stimulates organs such
                as the heart, lungs, and muscles. Your brain also releases
                endorphins — hormones that cause a feeling of pleasure and a
                relaxed mind.
              </li>
              <li>
                <strong>Stress relief:</strong> Laughing activates your body’s
                stress response mechanism. This process changes your heart rate
                leaving you in high spirits.
              </li>
              <li>
                <strong>Relief from tension:</strong> Laughter also stimulates
                rapid blood circulation. When this happens, you may experience a
                calming sensation that takes away tension and stress.
              </li>
            </ul>
          </div>

          <div
            className="max-w-[720px] text-[20px] leading-[1.32] text-black"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            <p className="mb-5">
              <strong>Long-term</strong> benefits of humor on mental health. In
              addition to the short-term benefits, humor has several
              scientifically proven long-term effects. Some of them include:
            </p>

            <ul className="list-disc space-y-2 pl-10">
              <li>
                <strong>A boost to the immune system:</strong> Positive thoughts
                lead to the release of neuropeptides. These are brain chemicals
                known to fight anxiety, stress, and other related mental
                conditions. Having negative thoughts may result in chemical
                reactions in the body that cause elevated stress levels, which
                in turn works against your immunity.
              </li>
              <li>
                <strong>Pain relief:</strong> A good laugh causes your body to
                release natural painkillers, thereby relieving you of physical
                pain.
              </li>
              <li>
                <strong>Positivity:</strong> Having a good sense of humor can
                help you interact and connect with other people. Positive
                thoughts and good relationships may assist you to cope by taking
                your mind off difficult situations.
              </li>
              <li>
                <strong>Improving mood:</strong> Laughter can significantly lift
                your spirits by reducing anxiety and depression, making you
                happier.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="mx-auto max-w-[1400px] px-10 pb-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_520px] lg:gap-16">
          <div
            className="max-w-[760px] text-[20px] leading-[1.32] text-black"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            <h2
              className="mb-6 text-[48px] leading-none text-black"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Tips to Improve Your Sense of Humor
            </h2>

            <p className="mb-6">
              If you are a naturally cheerful person, you may be less prone to
              depression and anxiety. This, however, doesn’t mean happy people
              are not vulnerable to mental health issues. Life can be
              overwhelming at times. Even the strongest people break. A good
              sense of humor is a natural way to keep your stress levels in
              check. The following tips will help you develop it:
            </p>

            <ul className="list-disc space-y-2 pl-10">
              <li>
                <strong>
                  Focus your attention on things that make you happy:
                </strong>{" "}
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
                <strong>Find something funny on social media:</strong> Social
                media platforms can be a good source of laughter. You can join
                groups or follow people who are all about humor. This way, you
                too can learn a few things about being funny.
              </li>
              <li>
                <strong>Be discerning:</strong> As much as a good laugh is
                healthy, not everything is funny. Discern what types of jokes
                are appropriate. It will help to avoid making innocent jokes
                that turn out to be rude or hurtful to some people.
              </li>
            </ul>
          </div>

          <div className="flex items-start justify-center lg:justify-end">
            <img
              src="/images/comedy/comedy-group.jpg"
              alt="People laughing together"
              className="w-full max-w-[520px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Helpful Links */}
      <section className="w-full bg-[#f3f3f3]">
        <div className="mx-auto max-w-[1400px] px-10 py-20">
          <h2
            className="mb-12 text-[48px] leading-none text-black"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Helpful Comedy Links
          </h2>

          <div className="space-y-12">
            {comedyLinks.map((item, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr] lg:gap-10">
                  <div className="flex justify-start">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full max-w-[240px] rounded-[8px] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                      />
                    </a>
                  </div>

                  <div
                    className="max-w-[900px] text-[20px] leading-[1.32] text-black"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[22px] text-[#8d1bb3] hover:underline"
                    >
                      {item.title}
                    </a>

                    <p className="mt-4">{item.description}</p>
                  </div>
                </div>

                {index !== comedyLinks.length - 1 && (
                  <div className="mt-10 border-b border-[#d9b7f0]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}