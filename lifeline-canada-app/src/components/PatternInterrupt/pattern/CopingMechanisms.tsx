import { Link } from "react-router-dom";

type CopingRow = {
  title: string;
  image: string;
  alt: string;
  text: string;
};

const unhealthyRows: CopingRow[] = [
  {
    title: "Passive-Aggressiveness",
    image: "/images/pattern/coping-mechanisms/passive-aggressiveness.jpg",
    alt: "Passive aggressiveness",
    text:
      "This is a very common coping mechanism when anger, hurt, or frustration feels too difficult to express directly. Instead of communicating honestly, the person acts indirectly through sarcasm, avoidance, or subtle hostile behavior. Although it may feel safer in the moment, passive-aggressive behavior damages trust and keeps real emotions unresolved.",
  },
  {
    title: "Displacement",
    image: "/images/pattern/coping-mechanisms/displacement.jpg",
    alt: "Displacement",
    text:
      "Displacement happens when negative feelings about one person or situation get redirected toward someone else who feels safer or easier to confront. For example, stress from work may get taken out on a partner, child, or friend. This can create confusion, tension, and unnecessary pain in close relationships.",
  },
  {
    title: "Compartmentalization",
    image: "/images/pattern/coping-mechanisms/compartmentalization.jpg",
    alt: "Compartmentalization",
    text:
      "This coping mechanism puts conflicting thoughts, emotions, or parts of life into separate mental boxes so they do not have to be dealt with together. While it can create short-term emotional distance, over time those disconnected parts often begin to leak into each other and cause internal stress.",
  },
  {
    title: "Staying Ridiculously Busy",
    image: "/images/pattern/coping-mechanisms/staying-busy.jpg",
    alt: "Staying ridiculously busy",
    text:
      "Constant busyness can become a way to avoid emotions, conflict, grief, or personal reflection. If every moment is filled, there is less chance to feel what is actually going on. The problem is that what gets avoided usually returns later with more pressure and exhaustion.",
  },
  {
    title: "Procrastination",
    image: "/images/pattern/coping-mechanisms/procrastination.jpg",
    alt: "Procrastination",
    text:
      "Procrastination often happens when something feels stressful, uncomfortable, or emotionally loaded. Avoiding the task may bring temporary relief, but it usually creates more anxiety, guilt, and pressure. In recovery, procrastination can delay growth and make small problems feel much bigger.",
  },
  {
    title: "Denial",
    image: "/images/pattern/coping-mechanisms/denial.jpg",
    alt: "Denial",
    text:
      "Denial is refusing to fully admit a painful truth, problem, or consequence. It can protect a person from emotional overload for a while, but it also blocks change. Recovery becomes difficult when reality is constantly minimized or pushed away.",
  },
  {
    title: "Avoidance",
    image: "/images/pattern/coping-mechanisms/avoidance.jpg",
    alt: "Avoidance",
    text:
      "Avoidance is a common response to anxiety, shame, conflict, or fear. It can look like putting things off, isolating, distracting yourself, or staying away from people and responsibilities. Unfortunately, every time avoidance works in the short term, it becomes easier to repeat.",
  },
  {
    title: "Intellectualization",
    image: "/images/pattern/coping-mechanisms/intellectualization.jpg",
    alt: "Intellectualization",
    text:
      "This happens when a person uses logic, analysis, or detached thinking to avoid feeling emotions directly. Understanding a problem intellectually is not the same as emotionally processing it. Intellectualization may create distance from pain, but it can also prevent genuine healing.",
  },
  {
    title: "Trivialization",
    image: "/images/pattern/coping-mechanisms/trivialization.jpg",
    alt: "Trivialization",
    text:
      "Trivialization means minimizing something important by acting as if it is no big deal. This can happen with emotional pain, harmful situations, relationship problems, or personal struggles. Downplaying pain may feel protective, but it often stops a person from getting support or taking needed action.",
  },
];

const healthyRows: CopingRow[] = [
  {
    title: "Exercise",
    image: "/images/pattern/coping-mechanisms/exercise.jpg",
    alt: "Exercise",
    text:
      "Exercise is one of the strongest healthy coping mechanisms because it supports both mind and body. It can reduce stress, lift mood, improve sleep, build confidence, and release physical tension. Regular movement also improves long-term resilience and emotional regulation.",
  },
  {
    title: "Turn Your Anger or Pain Into Something Useful",
    image: "/images/pattern/coping-mechanisms/purpose.jpg",
    alt: "Turn pain into something useful",
    text:
      "Pain can sometimes be transformed into service, creativity, advocacy, or support for others. Many charities, books, projects, and healing communities began because someone chose to channel suffering into something meaningful. Giving purpose to pain can help reduce hopelessness.",
  },
  {
    title: "Practice Gratitude",
    image: "/images/pattern/coping-mechanisms/gratitude.jpg",
    alt: "Practice gratitude",
    text:
      "Gratitude does not deny pain, but it helps you notice what is still steady, meaningful, or supportive. Practicing gratitude regularly can improve perspective, reduce mental heaviness, and help refocus attention on what is still working in your life.",
  },
  {
    title: "Journaling",
    image: "/images/pattern/coping-mechanisms/journaling.jpg",
    alt: "Journaling",
    text:
      "Writing is a powerful way to process thoughts and emotions. Journaling helps release inner pressure, identify patterns, and create clarity. It can also help you slow down enough to understand what you are really feeling instead of reacting automatically.",
  },
  {
    title: "Meditation",
    image: "/images/pattern/coping-mechanisms/meditation.jpg",
    alt: "Meditation",
    text:
      "Meditation helps calm the nervous system and trains attention to return to the present moment. Even a few minutes of stillness, breathing, or guided mindfulness can reduce mental noise and make difficult emotions easier to tolerate.",
  },
  {
    title: "Talking It Out",
    image: "/images/pattern/coping-mechanisms/talking-it-out.jpg",
    alt: "Talking it out",
    text:
      "Human beings are not meant to carry everything alone. Talking to someone safe can reduce isolation, bring perspective, and lower emotional pressure. Supportive conversation is often one of the healthiest alternatives to shutting down or escaping.",
  },
  {
    title: "Deep Breathing",
    image: "/images/pattern/coping-mechanisms/deep-breathing.jpg",
    alt: "Deep breathing",
    text:
      "Deep breathing is a simple but powerful way to calm the body when stress rises. It slows physical activation, reduces panic, and helps bring attention back into the present moment. Practiced regularly, it becomes a reliable tool during overwhelming moments.",
  },
];

function RowItem({ row }: { row: CopingRow }) {
  return (
    <div className="grid gap-6 py-7 md:grid-cols-[170px_1fr] md:items-start">
      <div className="flex flex-col items-center text-center">
        <img
          src={row.image}
          alt={row.alt}
          className="h-[78px] w-[78px] rounded-2xl border border-slate-300 object-cover shadow-sm"
        />
        <p className="mt-3 text-[17px] leading-5 text-slate-900">{row.title}</p>
      </div>

      <p className="text-[16px] leading-7 text-slate-800">{row.text}</p>
    </div>
  );
}

export default function CopingMechanisms() {
  return (
    <div className="min-h-screen bg-[#f5f3f8]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 text-sm text-slate-500">
          <Link to="/pattern" className="text-blue-600 hover:underline">
            Pattern Interrupts
          </Link>{" "}
          <span className="text-slate-400">/</span>{" "}
          <span className="text-slate-700">Coping Mechanisms</span>
        </div>

        <section className="bg-gradient-to-r from-[#efe7f7] to-[#e9eef9] px-10 py-16">
          <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-[#89009B] md:text-5xl ">
                Coping Mechanisms
              </h1>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                Life is filled with challenges, interpersonal conflict, physical
                and emotional pain, loss, and stress. It does not matter who you
                are — no one goes through life untouched.
              </p>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                Some people also experience significant trauma, difficult
                relationships, deep fear, shame, abuse, or violence. Because of
                this, many of us develop patterns for coping that may feel useful
                in the moment but become harmful over time.
              </p>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                Recovery is not only about recognizing unhealthy coping
                mechanisms. It is also about learning healthier ways to respond
                to stress, pain, and emotional discomfort so that your coping
                supports your wellbeing instead of damaging it.
              </p>
            </div>

            <div>
              <img
                src="/images/pattern/coping-mechanisms/hero.jpg"
                alt="Coping mechanisms"
                className="w-full rounded-none object-cover shadow-[0_10px_18px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-10 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-3xl font-medium text-slate-900">
                  Coping Mechanisms to Aid Your Recovery
                </h2>
                <p className="mt-3 text-sm italic text-violet-700">
                  Source: Promises Treatment Centre
                </p>

                <div className="mt-6 space-y-5 text-[16px] leading-7 text-slate-800">
                  <p>
                    Regardless of your past, your life story up until now, or the
                    details of what you have been through, what matters most is
                    how you cope. Every person learns coping mechanisms. Some are
                    picked up early in childhood. Others develop later as ways to
                    manage stress, rejection, pain, fear, conflict, or emotional
                    overload.
                  </p>
                  <p>
                    At first, a coping mechanism may seem useful because it helps
                    you get through a hard moment. But not every coping strategy
                    supports long-term recovery. Some only reduce discomfort for a
                    short time and then create more problems afterward.
                  </p>
                  <p>
                    That is why recovery often includes identifying the
                    strategies that no longer serve you and replacing them with
                    healthier ones. You are not failing because you developed
                    survival habits. The goal now is simply to build better ones.
                  </p>
                </div>
              </div>

              <img
                src="/images/pattern/coping-mechanisms/recovery.jpg"
                alt="Coping recovery"
                className="w-full rounded-none object-cover shadow-[0_10px_18px_rgba(0,0,0,0.14)]"
              />
            </div>

            <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-start">
              <img
                src="/images/pattern/coping-mechanisms/substance-use.jpg"
                alt="Substance use and emotional avoidance"
                className="w-full rounded-none object-cover shadow-[0_10px_18px_rgba(0,0,0,0.14)]"
              />

              <div className="space-y-5 text-[16px] leading-7 text-slate-800">
                <p>
                  Sometimes people learn to use alcohol, drugs, emotional
                  shutdown, distraction, overworking, or other avoidant habits as
                  ways to cope. These patterns may begin because they reduce pain
                  quickly, create numbness, or make difficult feelings easier to
                  escape.
                </p>
                <p>
                  The problem is that avoidant coping does not actually heal the
                  underlying issue. It only postpones it. Eventually the pain,
                  fear, shame, or anxiety comes back, often stronger than before.
                </p>
                <p>
                  If lasting recovery is one of your goals, it is important to
                  become honest about which coping strategies are helping you heal
                  and which ones are quietly keeping you stuck.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-10 py-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-[42px] leading-tight text-slate-900">
              Common Unhealthy Coping Mechanisms
            </h2>

            <p className="mt-6 max-w-4xl text-[16px] leading-7 text-slate-800">
              Following are some of the more common unhealthy coping mechanisms —
              the ones that can easily trip you up and make you more vulnerable to
              stress, relapse, conflict, and emotional disconnection.
            </p>

            <div className="mt-8">
              {unhealthyRows.map((row, index) => (
                <div
                  key={row.title}
                  className={index !== 0 ? "border-t border-violet-200" : ""}
                >
                  <RowItem row={row} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eee5f5] px-10 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-[42px] leading-tight text-slate-900">
              Common Healthy Coping Mechanisms
            </h2>

            <div className="mt-6 space-y-5 text-[16px] leading-7 text-slate-800">
              <p>
                There is a popular saying that nature abhors a vacuum. The same
                tends to be true in psychology. When a person gives up an
                unhealthy coping mechanism, something usually needs to replace it.
                Recovery is not only about stopping destructive patterns — it is
                about filling that space with healthier ones.
              </p>
              <p>
                Healthy coping mechanisms may seem simple or even unfamiliar at
                first, especially if unhealthy habits have been present for a
                long time. But repeated healthy actions build stability, self-
                respect, emotional regulation, and long-term resilience.
              </p>
              <p>
                Below are several examples of coping mechanisms that support
                healing rather than avoidance.
              </p>
            </div>

            <div className="mt-10">
              {healthyRows.map((row, index) => (
                <div
                  key={row.title}
                  className={index !== 0 ? "border-t border-violet-300" : ""}
                >
                  <RowItem row={row} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}