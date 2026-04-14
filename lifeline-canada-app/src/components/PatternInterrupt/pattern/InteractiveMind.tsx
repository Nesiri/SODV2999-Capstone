import { Link } from "react-router-dom";

type ResourceRow = {
  title: string;
  image: string;
  alt: string;
  text: string;
  button?: string;
  href?: string;
};

const appRows: ResourceRow[] = [
  {
    title: "CogniFit — Brain Training",
    image: "/images/pattern/interactive-mind/cognifit.jpg",
    alt: "CogniFit app",
    text:
      "Improve cognitive abilities such as memory, attention, concentration, and problem-solving with brain-training games designed around neuroscience. CogniFit gives users personalized exercises, tracks progress, and provides insight into areas of strength and weakness. It is a strong option for people who want structured and measurable mental stimulation.",
    button: "Download App",
    href: "https://www.cognifit.com/",
  },
  {
    title: "Happify",
    image: "/images/pattern/interactive-mind/happify.jpg",
    alt: "Happify app",
    text:
      "Train your brain to be happier through science-based activities that support gratitude, mindfulness, resilience, emotional awareness, and positive thinking. Happify combines interactive exercises, reflective prompts, and mood-building tools to help users build daily habits that support mental wellbeing.",
    button: "Download App",
    href: "https://www.happify.com/",
  },
];

const puzzleRows: ResourceRow[] = [
  {
    title: "Word Brain Puzzles",
    image: "/images/pattern/interactive-mind/word-brain-puzzles.jpg",
    alt: "Word brain puzzles",
    text:
      "Face brain puzzles that challenge logic, vocabulary, focus, and reasoning skills. Word and logic puzzles can help sharpen attention while also giving your mind a healthy break from repetitive negative thought cycles.",
    href: "https://www.mentalup.co/brain-teasers",
  },
  {
    title: "SharpBrains.com",
    image: "/images/pattern/interactive-mind/sharpbrains.jpg",
    alt: "SharpBrains website",
    text:
      "Explore cognitive exercises, brain fitness tools, and articles about how the brain works. SharpBrains offers puzzles, games, and educational resources that support mental stimulation and lifelong brain health.",
    href: "https://sharpbrains.com/",
  },
  {
    title: "Math and Logic Puzzles",
    image: "/images/pattern/interactive-mind/math-logic-puzzles.jpg",
    alt: "Math and logic puzzles",
    text:
      "If you enjoy figuring things out, math and logic puzzles can be a great way to build concentration, patience, and reasoning. They encourage the brain to slow down, observe patterns, and solve step by step.",
    href: "https://www.mathsisfun.com/puzzles/",
  },
  {
    title: "Braingle.com",
    image: "/images/pattern/interactive-mind/braingle.jpg",
    alt: "Braingle website",
    text:
      "Braingle offers a large collection of brain teasers, trivia, riddles, games, and puzzles. It is useful for quick mental stimulation and can help redirect attention away from stress-heavy thinking.",
    href: "https://www.braingle.com/",
  },
];

function ResourceRowItem({ row }: { row: ResourceRow }) {
  return (
    <div className="group rounded-2xl border border-purple-100 bg-white/90 p-5 sm:p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="grid gap-5 md:grid-cols-[160px_1fr] md:items-start">
        {/* Image & Title */}
        <div className="flex flex-col items-center text-center">
          <div className="overflow-hidden rounded-xl shadow-md ring-1 ring-purple-100">
            <img
              src={row.image}
              alt={row.alt}
              className="h-[90px] w-[140px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <p className="mt-3 text-[17px] font-semibold leading-5 text-purple-700">
            {row.title}
          </p>

          {row.button && row.href && (
            <a
              href={row.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center rounded-md bg-purple-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-purple-800"
            >
              {row.button}
            </a>
          )}
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-[16px] leading-7 text-slate-700">{row.text}</p>

          {!row.button && row.href && (
            <a
              href={row.href}
              target="_blank"
              rel="noreferrer"
              className=" !text-purple-700 inline-flex text-sm font-medium text-purple-700 hover:underline"
            >
              Visit resource
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function InteractiveMind() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-200/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-200/20 blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12">
        <div className="mx-auto w-full lg:w-4/5">

          {/* Page Title */}
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 bg-clip-text text-transparent">
              Interactive Mind
            </span>
          </h1>

          <div className="mt-3 mb-1 flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          {/* Intro Section */}
          <main className="mt-6 rounded-2xl border border-white/50 bg-white/70 p-6 text-gray-700 shadow-lg backdrop-blur-sm sm:p-8">
            <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="leading-relaxed">
                  Mental fitness can be understood as a state of wellbeing that
                  supports how we feel, think, and act. It includes keeping the
                  brain active and emotionally healthy, not just through memory
                  games and puzzles, but also through activities that support
                  focus, curiosity, resilience, and positive mental habits.
                </p>

                <p className="mt-4 leading-relaxed">
                  Brain-training apps and interactive tools will never replace
                  face-to-face support or therapy, but they can become useful
                  additions to a healthy routine. Apps can help strengthen
                  memory, improve attention, encourage reflection, and redirect
                  the mind away from stress-heavy thought loops.
                </p>

                <p className="mt-4 leading-relaxed">
                  When used well, interactive tools can support emotional
                  wellbeing by giving the brain healthier places to focus.
                  Technology can sharpen attention, build structure, and
                  encourage positive habits — especially when it is used
                  intentionally.
                </p>
              </div>

              <div>
                <img
                  src="/images/pattern/interactive-mind/hero.jpg"
                  alt="Interactive mind"
                  className="w-full rounded-xl object-cover shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
                />
              </div>
            </div>
          </main>

          {/* Interactive Apps */}
          <section className="mt-8 rounded-2xl border border-purple-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-purple-700 sm:text-3xl">
              Interactive Apps
            </h2>

            <div className="mt-6 space-y-4 sm:space-y-5">
              {appRows.map((row) => (
                <ResourceRowItem key={row.title} row={row} />
              ))}
            </div>
          </section>

          {/* Links & Puzzles */}
          <section className="mt-8 rounded-2xl border border-purple-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Links, Exercises &amp; Puzzles
            </h2>

            <div className="mt-6 space-y-4 sm:space-y-5">
              {puzzleRows.map((row) => (
                <ResourceRowItem key={row.title} row={row} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}