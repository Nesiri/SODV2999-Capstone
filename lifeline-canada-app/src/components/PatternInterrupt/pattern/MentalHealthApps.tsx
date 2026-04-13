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
    <a href={`#${card.target}`} className="block text-center">
      <img
        src={card.image}
        alt={card.alt}
        className="mx-auto h-[150px] w-[150px] rounded-[28px] object-cover shadow-[0_8px_18px_rgba(0,0,0,0.12)]"
      /><p className="mt-4 text-[17px]" style={{ color: "#89009B" }}>
  {card.title}
</p>
    </a>
  );
}

function AppRowItem({ row }: { row: AppRow }) {
  return (
    <div className="grid gap-6 py-7 md:grid-cols-[170px_1fr] md:items-start">
      <div className="flex flex-col items-center text-center">
        <img
          src={row.image}
          alt={row.alt}
          className="h-[86px] w-[132px] rounded-xl border border-slate-300 object-cover shadow-sm"
        />
        <p className="mt-3 text-[17px] leading-5 text-violet-700">{row.title}</p>
        <p className="mt-1 text-sm text-slate-500">{row.subtitle}</p>
      </div>

      <div className="space-y-4">
        <p className="text-[16px] leading-7 text-slate-800">{row.text}</p>
        <a
          href={row.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded bg-violet-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-violet-800"
        >
          Visit App
        </a>
      </div>
    </div>
  );
}

export default function MentalHealthApps() {
  return (
    <div className="min-h-screen bg-[#f5f3f8]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 text-sm text-slate-500">
          <Link to="/pattern" className="text-blue-600 hover:underline">
            Pattern Interrupts
          </Link>{" "}
          <span className="text-slate-400">/</span>{" "}
          <span className="text-slate-700">Mental Health Apps</span>
        </div>

        <section className="bg-gradient-to-r from-[#efe7f7] to-[#e9eef9] px-10 py-16">
          <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-[#89009B] md:text-5xl">
                Mental Health Apps
              </h1>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                Seeing a therapist or mental health professional regularly is not
                always possible for everyone. Mobile apps can offer another way to
                interact with supportive tools, build healthy routines, and access
                activities that improve emotional wellbeing.
              </p>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                Studies and lived experience both suggest that mindfulness apps,
                mood tracking tools, guided breathing, journaling, and structured
                coping exercises can help reduce stress, anxiety, and feelings of
                depression when used consistently.
              </p>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
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
                className="w-full rounded-none object-cover shadow-[0_10px_18px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-10 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-[38px] leading-tight text-slate-900">
              Apps by Category
            </h2>

            <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
              {categoryCards.map((card) => (
                <CategoryCardItem key={card.title} card={card} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t-4 border-violet-300 bg-[linear-gradient(to_bottom,rgba(243,240,248,0.95),rgba(238,242,249,0.95))] px-10 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-[38px] leading-tight text-slate-900">
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
          </div>
        </section>

        <section id="suicide-prevention" className="bg-white px-10 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-[34px] leading-tight text-slate-900">
              Suicide Prevention
            </h2>
            <div className="mt-8 border-t border-violet-200">
              <AppRowItem row={appRows[0]} />
              <div className="border-t border-violet-200">
                <AppRowItem row={appRows[1]} />
              </div>
            </div>
          </div>
        </section>

        <section id="mood-tracking" className="bg-white px-10 py-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-[34px] leading-tight text-slate-900">
              Mood Tracking
            </h2>
            <div className="mt-8 border-t border-violet-200">
              <AppRowItem row={appRows[2]} />
              <div className="border-t border-violet-200">
                <AppRowItem row={appRows[3]} />
              </div>
            </div>
          </div>
        </section>

        <section id="depression-anxiety" className="bg-white px-10 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-[34px] leading-tight text-slate-900">
              Depression &amp; Anxiety
            </h2>
            <div className="mt-8 border-t border-violet-200">
              <AppRowItem row={appRows[4]} />
              <div className="border-t border-violet-200">
                <AppRowItem row={appRows[5]} />
              </div>
            </div>
          </div>
        </section>

        <section id="sleep-relax" className="bg-white px-10 py-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-[34px] leading-tight text-slate-900">
              Sleep / Meditate / Relax
            </h2>
            <div className="mt-8 border-t border-violet-200">
              <AppRowItem row={appRows[6]} />
              <div className="border-t border-violet-200">
                <AppRowItem row={appRows[7]} />
              </div>
            </div>
          </div>
        </section>

        <section id="journaling" className="bg-white px-10 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-[34px] leading-tight text-slate-900">
              Journaling
            </h2>
            <div className="mt-6 text-[16px] leading-7 text-slate-800">
              Journaling apps and writing tools can help you process emotions,
              notice patterns, release stress, and reflect more clearly on what
              you are experiencing. Apps like Daylio and Moodfit can already
              support journaling habits through prompts and tracking.
            </div>
          </div>
        </section>

        <section id="grounding-breathing" className="bg-white px-10 py-4 pb-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-[34px] leading-tight text-slate-900">
              Grounding &amp; Breathing
            </h2>
            <div className="mt-6 text-[16px] leading-7 text-slate-800">
              Grounding and breathing tools help calm the nervous system during
              stress, panic, racing thoughts, and emotional overload. Apps like
              Calm Harm, Insight Timer, Smiling Mind, and Moodfit all include
              useful breathing, relaxation, and grounding-based support.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}