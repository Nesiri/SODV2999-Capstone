import { Link } from "react-router-dom";

type Resource = {
  title: string;
  description: string;
  url: string;
  image: string;
};

const resources: Resource[] = [
  {
    title: "Suicide… Read This First",
    description:
      "A widely shared essay by Martha Ainsworth offering a compassionate perspective for people experiencing suicidal thoughts.",
    url: "http://metanoia.org/suicide/",
    image: "/images/pattern/self-management/read-this-first.jpg",
  },
  {
    title: "Coping & Self-Care",
    description:
      "Strategies from Crisis Centre BC for managing stress, emotional pain, and overwhelming thoughts.",
    url: "https://crisiscentre.bc.ca/resources/",
    image: "/images/pattern/self-management/crisis-centre.jpg",
  },
  {
    title: "Coping With Suicidal Thoughts",
    description:
      "A supportive resource designed for people currently experiencing suicidal thoughts or intense emotional distress.",
    url: "https://www.suicideinfo.ca/",
    image: "/images/pattern/self-management/copingsuicidal.jpg",
  },
  {
    title: "GetSelfHelp",
    description:
      "Free CBT self-help worksheets, coping strategies, and guided exercises for anxiety, depression, and stress.",
    url: "https://www.getselfhelp.co.uk/",
    image: "/images/pattern/self-management/getselfhelp.jpg",
  },
  {
    title: "Now Matters Now",
    description:
      "Real coping skills for intense emotions using Dialectical Behaviour Therapy techniques.",
    url: "https://nowmattersnow.org/",
    image: "/images/pattern/self-management/nowmattersnow.jpg",
  },
  {
    title: "Reasons to Go On Living",
    description:
      "A Canadian research project sharing stories from people who survived suicide attempts and why they are glad to be alive.",
    url: "https://www.suicideinfo.ca/",
    image: "/images/pattern/self-management/reasons-living.jpg",
  },
  {
    title: "Reasons for Staying Alive",
    description:
      "A grassroots suicide prevention project sharing meaningful reasons people choose to keep living.",
    url: "https://grassrootshelp.org/",
    image: "/images/pattern/self-management/stayingalive.jpg",
  },
  {
    title: "Wellness Workshop",
    description:
      "An online program providing tools for improving and maintaining mental wellness.",
    url: "https://www.suicideinfo.ca/",
    image: "/images/pattern/self-management/wellness.jpg",
  },
  {
    title: "HereToHelp",
    description:
      "Trusted Canadian mental health information including anxiety, depression, substance use, and self-care tools.",
    url: "https://www.heretohelp.bc.ca/",
    image: "/images/pattern/self-management/heretohelp.jpg",
  },
];

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_25px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
    >
      <div className="flex gap-6">
        <img
          src={resource.image}
          alt={resource.title}
          className="h-20 w-20 rounded-lg object-cover"
        />

        <div>
          <h3 className="text-lg font-semibold text-violet-700 group-hover:underline">
            {resource.title}
          </h3>

          <p className="mt-2 text-[15px] leading-7 text-slate-700">
            {resource.description}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function SelfManagementPage() {
  return (
    <div className="min-h-screen bg-[#f5f3f8]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 text-sm text-slate-500">
          <Link to="/pattern" className="text-blue-600 hover:underline">
            Pattern Interrupts
          </Link>{" "}
          <span className="text-slate-400">/</span>{" "}
          <span className="text-slate-700">Self Management</span>
        </div>

        {/* HERO */}
        <section className="rounded-[32px] bg-gradient-to-r from-[#efe7f7] to-[#e9eef9] px-10 py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold md:text-5xl">
                Self Management
              </h1>

              <p className="mt-6 text-[17px] leading-8 text-slate-800">
                Self-management empowers people to take an active role in their
                mental health and wellbeing. It involves learning skills,
                building awareness, and developing healthy strategies to manage
                stress, emotions, and difficult thoughts.
              </p>

              <p className="mt-4 text-[17px] leading-8 text-slate-800">
                Even small self-care habits can reduce stress, improve mood,
                increase resilience, and help you feel more in control of your
                mental health journey.
              </p>

              <p className="mt-4 text-[17px] leading-8 text-slate-800">
                Below are trusted resources, coping strategies, and tools to
                support your mental health.
              </p>
            </div>

            <div>
              <img
                src="/images/pattern/self-management/hero.jpg"
                alt="Self management"
                className="rounded-[28px] shadow-[0_14px_30px_rgba(0,0,0,0.14)]"
              />
            </div>
          </div>
        </section>

        {/* QUICK SELF CARE */}
        <section className="mt-10 rounded-[28px] bg-white p-8 shadow">
          <h2 className="text-3xl font-semibold">Quick Self-Care Ideas</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Take 10 slow breaths and relax your shoulders.",
              "Drink water and step outside for fresh air.",
              "Write down three things you're grateful for.",
              "Message a friend you trust.",
              "Listen to music that calms you.",
              "Go for a short walk.",
            ].map((tip, i) => (
              <div
                key={i}
                className="rounded-xl bg-slate-50 p-4 text-slate-700"
              >
                {tip}
              </div>
            ))}
          </div>
        </section>

        {/* RESOURCES */}
        <section className="mt-10">
          <h2 className="mb-6 text-3xl font-semibold">
            Trusted Self-Management Resources
          </h2>

          <div className="grid gap-6">
            {resources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </section>

        {/* FINAL NOTE */}
        <section className="mt-10 rounded-[28px] bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-10 text-white">
          <h2 className="text-3xl font-semibold">Remember</h2>

          <p className="mt-4 text-lg leading-8 text-violet-50">
            Managing mental health is not about being perfect. It’s about
            learning tools, practicing small steps, and asking for help when you
            need it. Every step you take toward caring for yourself matters.
          </p>
        </section>
      </div>
    </div>
  );
}