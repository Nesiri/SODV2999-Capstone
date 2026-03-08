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
    <div className="grid gap-6 py-7 md:grid-cols-[170px_1fr] md:items-start">
      <div className="flex flex-col items-center text-center">
        <img
          src={row.image}
          alt={row.alt}
          className="h-[86px] w-[132px] rounded-xl border border-slate-300 object-cover shadow-sm"
        />

        <p className="mt-3 text-[17px] leading-5 text-violet-700">{row.title}</p>

        {row.button ? (
          <a
            href={row.href}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex rounded bg-violet-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-violet-800"
          >
            {row.button}
          </a>
        ) : null}
      </div>

      <div className="space-y-4">
        <p className="text-[16px] leading-7 text-slate-800">{row.text}</p>

        {!row.button && row.href ? (
          <a
            href={row.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-sm font-medium text-blue-600 hover:underline"
          >
            Visit resource
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function InteractiveMindPage() {
  return (
    <div className="min-h-screen bg-[#f5f3f8]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 text-sm text-slate-500">
          <Link to="/pattern" className="text-blue-600 hover:underline">
            Pattern Interrupts
          </Link>{" "}
          <span className="text-slate-400">/</span>{" "}
          <span className="text-slate-700">Interactive Mind</span>
        </div>

        <section className="bg-gradient-to-r from-[#efe7f7] to-[#e9eef9] px-10 py-16">
          <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                Interactive Mind
              </h1>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                Mental fitness can be understood as a state of wellbeing that
                supports how we feel, think, and act. It includes keeping the
                brain active and emotionally healthy, not just through memory
                games and puzzles, but also through activities that support
                focus, curiosity, resilience, and positive mental habits.
              </p>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                Brain-training apps and interactive tools will never replace
                face-to-face support or therapy, but they can become useful
                additions to a healthy routine. Apps can help strengthen memory,
                improve attention, encourage reflection, and redirect the mind
                away from stress-heavy thought loops.
              </p>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                When used well, interactive tools can support emotional
                wellbeing by giving the brain healthier places to focus.
                Technology can sharpen attention, build structure, and encourage
                positive habits — especially when it is used intentionally.
              </p>
            </div>

            <div>
              <img
                src="/images/pattern/interactive-mind/hero.jpg"
                alt="Interactive mind"
                className="w-full rounded-none object-cover shadow-[0_10px_18px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-10 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-[38px] leading-tight text-slate-900">
              Interactive Apps
            </h2>

            <div className="mt-8">
              {appRows.map((row, index) => (
                <div
                  key={row.title}
                  className={index !== 0 ? "border-t border-violet-200" : ""}
                >
                  <ResourceRowItem row={row} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-10 py-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-[38px] leading-tight text-slate-900">
              Links, Exercises &amp; Puzzles
            </h2>

            <div className="mt-8">
              {puzzleRows.map((row, index) => (
                <div
                  key={row.title}
                  className={index !== 0 ? "border-t border-violet-200" : ""}
                >
                  <ResourceRowItem row={row} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}