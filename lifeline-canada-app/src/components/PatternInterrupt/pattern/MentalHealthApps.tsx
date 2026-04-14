import { Link } from "react-router-dom";

type CategoryCard = {
  title: string;
  image: string;
  alt: string;
  target: string;
};

type AppRow = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  text: string;
  href: string;
};

const categoryCards: CategoryCard[] = [
  {
    title: "Suicide Prevention",
    image: "/images/pattern/mental-health-apps/suicide-prevention.jpg",
    alt: "Suicide prevention",
    target: "suicide-prevention",
  },
  {
    title: "Mood Tracking",
    image: "/images/pattern/mental-health-apps/mood-tracking.jpg",
    alt: "Mood tracking",
    target: "mood-tracking",
  },
  {
    title: "Depression & Anxiety",
    image: "/images/pattern/mental-health-apps/depression-anxiety.jpg",
    alt: "Depression and anxiety",
    target: "depression-anxiety",
  },
  {
    title: "Sleep / Meditate / Relax",
    image: "/images/pattern/mental-health-apps/sleep-meditate-relax.jpg",
    alt: "Sleep meditate relax",
    target: "sleep-relax",
  },
  {
    title: "Journaling",
    image: "/images/pattern/mental-health-apps/journaling.jpg",
    alt: "Journaling",
    target: "journaling",
  },
  {
    title: "Grounding & Breathing",
    image: "/images/pattern/mental-health-apps/grounding-breathing.jpg",
    alt: "Grounding and breathing",
    target: "grounding-breathing",
  },
];

const appRows: AppRow[] = [
  {
    title: "Calm Harm",
    subtitle: "Suicide prevention / self-harm support",
    image: "/images/pattern/mental-health-apps/calm-harm.jpg",
    alt: "Calm Harm app",
    text:
      "Calm Harm is designed to help users manage urges related to self-harm through private, guided tasks based on comfort, distraction, release, and breathing. It is simple, focused, and useful for moments when someone needs help getting through emotional intensity safely.",
    href: "https://calmharm.co.uk/",
  },
  {
    title: "notOK",
    subtitle: "Crisis support",
    image: "/images/pattern/mental-health-apps/notok.jpg",
    alt: "notOK app",
    text:
      "notOK makes it easier to reach trusted people quickly during overwhelming moments. Users can pre-select support contacts and send a distress alert with one tap. It is especially helpful for people who struggle to explain what they need in a crisis.",
    href: "https://www.notokapp.com/",
  },
  {
    title: "Daylio",
    subtitle: "Mood tracking",
    image: "/images/pattern/mental-health-apps/daylio.jpg",
    alt: "Daylio app",
    text:
      "Daylio helps users track mood, habits, routines, and daily patterns without needing to write long journal entries. Over time, it becomes easier to notice what improves mood, what triggers stress, and how daily habits affect emotional wellbeing.",
    href: "https://daylio.net/",
  },
  {
    title: "Moodfit",
    subtitle: "Mood tracking / self-care",
    image: "/images/pattern/mental-health-apps/moodfit.jpg",
    alt: "Moodfit app",
    text:
      "Moodfit combines mood tracking with gratitude prompts, breathing tools, sleep tracking, and self-care check-ins. It gives structure to mental health support and can be useful for people who want both reflection and practical daily tools in one place.",
    href: "https://www.getmoodfit.com/",
  },
  {
    title: "MindShift CBT",
    subtitle: "Depression & anxiety",
    image: "/images/pattern/mental-health-apps/mindshift-cbt.jpg",
    alt: "MindShift CBT app",
    text:
      "MindShift CBT is built around evidence-based strategies for anxiety, panic, worry, perfectionism, and social anxiety. It includes short exercises, belief challenges, coping cards, and guided check-ins that help users build more balanced thought patterns.",
    href: "https://www.anxietycanada.com/resources/mindshift-cbt/",
  },
  {
    title: "Sanvello",
    subtitle: "Depression & anxiety",
    image: "/images/pattern/mental-health-apps/sanvello.jpg",
    alt: "Sanvello app",
    text:
      "Sanvello offers mood tracking, journaling, guided journeys, and coping tools for people dealing with stress, anxiety, and depression. It is designed to combine self-help structure with emotional check-ins and supportive routines.",
    href: "https://www.sanvello.com/",
  },
  {
    title: "Insight Timer",
    subtitle: "Sleep / meditate / relax",
    image: "/images/pattern/mental-health-apps/insight-timer.jpg",
    alt: "Insight Timer app",
    text:
      "Insight Timer includes a large library of guided meditations, breathing exercises, sleep tracks, and calming audio. It is useful for people who want mindfulness support, sleep help, or short calming sessions throughout the day.",
    href: "https://insighttimer.com/",
  },
  {
    title: "Smiling Mind",
    subtitle: "Sleep / meditate / relax",
    image: "/images/pattern/mental-health-apps/smiling-mind.jpg",
    alt: "Smiling Mind app",
    text:
      "Smiling Mind offers guided mindfulness programs designed for stress management, focus, sleep, and emotional wellbeing. It is beginner-friendly and works well for people who want a simple and steady introduction to mindfulness practice.",
    href: "https://www.smilingmind.com.au/",
  },
];

function CategoryCardItem({ card }: { card: CategoryCard }) {
  return (
    <a href={`#${card.target}`} className="group block text-center">
      <div className="overflow-hidden rounded-[28px] shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover:scale-105">
        <img
          src={card.image}
          alt={card.alt}
          className="mx-auto h-[150px] w-[150px] object-cover"
        />
      </div>
      <p className="mt-4 text-[17px] font-semibold text-purple-700">
        {card.title}
      </p>
    </a>
  );
}

function AppRowItem({ row }: { row: AppRow }) {
  return (
    <div className="group rounded-2xl border border-purple-100 bg-white/90 p-5 sm:p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="grid gap-5 md:grid-cols-[160px_1fr] md:items-start">
        <div className="flex flex-col items-center text-center">
          <div className="overflow-hidden rounded-xl shadow-md ring-1 ring-purple-100">
            <img
              src={row.image}
              alt={row.alt}
              className="h-[90px] w-[140px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <p className="mt-3 text-[17px] font-semibold text-purple-700">
            {row.title}
          </p>
          <p className="mt-1 text-sm text-slate-500">{row.subtitle}</p>
        </div>

        <div className="space-y-4">
          <p className="text-[16px] leading-7 text-slate-700">{row.text}</p>
          <a
            href={row.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-md bg-purple-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-purple-800"
          >
            Visit App
          </a>
        </div>
      </div>
    </div>
  );
}

export default function MentalHealthApps() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-200/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-200/20 blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12">
        <div className="mx-auto w-full lg:w-4/5">
          <div className="mb-4 text-sm text-gray-500">
            <Link
              to="/pattern"
              className="text-purple-700 hover:text-purple-800 hover:underline"
            >
              Pattern Interrupts
            </Link>{" "}
            / <span className="text-gray-700">Mental Health Apps</span>
          </div>

          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 bg-clip-text text-transparent">
              Mental Health Apps
            </span>
          </h1>

          <div className="mt-3 mb-1 flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <main className="mt-6 rounded-2xl border border-white/50 bg-white/70 p-6 text-gray-700 shadow-lg backdrop-blur-sm sm:p-8">
            <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="leading-relaxed">
                  Seeing a therapist or mental health professional regularly is not
                  always possible for everyone. Mobile apps can offer another way to
                  interact with supportive tools, build healthy routines, and access
                  activities that improve emotional wellbeing.
                </p>
                <p className="mt-4 leading-relaxed">
                  Studies and lived experience both suggest that mindfulness apps,
                  mood tracking tools, guided breathing, journaling, and structured
                  coping exercises can help reduce stress, anxiety, and feelings of
                  depression when used consistently.
                </p>
                <p className="mt-4 leading-relaxed">
                  The apps collected below are intended to be supportive resources.
                  They are not meant to replace professional medical or clinical
                  mental health care. Talking to a qualified professional is still
                  one of the most important steps on the road to healing and mental
                  wellbeing.
                </p>
              </div>

              <div>
                <img
                  src="/images/pattern/mental-health-apps/hero.jpg"
                  alt="Mental health apps"
                  className="w-full rounded-xl object-cover shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
                />
              </div>
            </div>
          </main>

          <section className="mt-8 rounded-2xl border border-purple-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Apps by Category
            </h2>

            <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
              {categoryCards.map((card) => (
                <CategoryCardItem key={card.title} card={card} />
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-purple-100 bg-gradient-to-br from-white via-purple-50/70 to-white p-6 shadow-sm backdrop-blur-sm sm:p-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Regarding Apps &amp; Privacy
            </h2>

            <div className="mx-auto mt-6 max-w-3xl space-y-5 text-[17px] italic leading-8 text-slate-700">
              <p>
                When choosing an online therapy provider or mental health app, it
                is important to read the company’s privacy information before you
                sign up. This can help you understand whether the app is
                HIPAA-compliant, what personal information is collected, and
                whether data is shared with third parties.
              </p>
              <p>
                Mental health apps can be useful, but they may also collect
                sensitive information about mood, health habits, location,
                journaling content, or personal routines. Before relying on an
                app, take a moment to understand how your information is handled.
              </p>
            </div>
          </section>

          <section id="suicide-prevention" className="mt-8 rounded-2xl border border-purple-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Suicide Prevention
            </h2>
            <div className="mt-6 space-y-4">
              <AppRowItem row={appRows[0]} />
              <AppRowItem row={appRows[1]} />
            </div>
          </section>

          <section id="mood-tracking" className="mt-8 rounded-2xl border border-purple-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Mood Tracking
            </h2>
            <div className="mt-6 space-y-4">
              <AppRowItem row={appRows[2]} />
              <AppRowItem row={appRows[3]} />
            </div>
          </section>

          <section id="depression-anxiety" className="mt-8 rounded-2xl border border-purple-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Depression &amp; Anxiety
            </h2>
            <div className="mt-6 space-y-4">
              <AppRowItem row={appRows[4]} />
              <AppRowItem row={appRows[5]} />
            </div>
          </section>

          <section id="sleep-relax" className="mt-8 rounded-2xl border border-purple-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Sleep / Meditate / Relax
            </h2>
            <div className="mt-6 space-y-4">
              <AppRowItem row={appRows[6]} />
              <AppRowItem row={appRows[7]} />
            </div>
          </section>

          <section id="journaling" className="mt-8 rounded-2xl border border-purple-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Journaling
            </h2>
            <div className="mt-6 text-[16px] leading-7 text-slate-700">
              Journaling apps and writing tools can help you process emotions,
              notice patterns, release stress, and reflect more clearly on what
              you are experiencing. Apps like Daylio and Moodfit can already
              support journaling habits through prompts and tracking.
            </div>
          </section>

          <section id="grounding-breathing" className="mt-8 rounded-2xl border border-purple-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8 pb-20">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Grounding &amp; Breathing
            </h2>
            <div className="mt-6 text-[16px] leading-7 text-slate-700">
              Grounding and breathing tools help calm the nervous system during
              stress, panic, racing thoughts, and emotional overload. Apps like
              Calm Harm, Insight Timer, Smiling Mind, and Moodfit all include
              useful breathing, relaxation, and grounding-based support.
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}