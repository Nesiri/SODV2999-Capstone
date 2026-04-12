import React from "react";
const coverPhoto = "/assets/AdditionalResourceImages/warningSigns-600x600.webp";
const talkingAbout = "/assets/AdditionalResourceImages/Mission-img-400x423.png";
const behaviour = "/assets/AdditionalResourceImages/coping-200x144.jpg";
const mood = "/assets/AdditionalResourceImages/Vision-img-200x154.png";
const healthFactors = "/assets/AdditionalResourceImages/healthFactors-200x94.jpg";
const environmentalFactors = "/assets/AdditionalResourceImages/environmental-factors-200x150.webp";
const historicalFactors = "/assets/AdditionalResourceImages/More-Resources-200x196.png";

const MentalHealthResourcesWarningSigns: React.FC = () => {
  const sectionClassName = "rounded-xl border border-slate-200 bg-white p-5 sm:p-6 text-slate-700";

  return (
    <section className="relative w-full bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 relative z-10">
        <div className="w-full lg:w-4/5 mx-auto">

        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 bg-clip-text text-transparent">
            Warning Signs
          </span>
        </h1>

        <div className="flex items-center gap-4 mt-3 mb-1">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-[1fr_300px]">
            <div className="h-full p-3 text-slate-700 lg:border-r lg:border-slate-200">
              <p className="leading-relaxed">
                What leads to suicide? There is no single cause for suicide. Suicide most often occurs when stressors exceed current coping abilities of someone suffering from a mental health condition. Depression is the most common condition associated with suicide, and it is often undiagnosed or untreated.
              </p>
              <p className="mt-3 leading-relaxed">
                Conditions like depression, anxiety and substance problems, especially when unaddressed, increase risk for suicide. Yet it's important to note that most people who actively manage their mental health conditions lead fulfilling lives.
              </p>
            </div>

            <div className="h-36 lg:h-auto p-3 flex items-center">
              <img
                src={coverPhoto}
                alt="Warning signs support"
                className="h-full w-full rounded-lg object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-900">
          <p className="font-semibold">Emergency:</p>
          <p className="mt-1">If the person has a plan, means, and intent, call 911 immediately and stay with them.</p>
        </div>

        <div className="mt-6 space-y-4">
          <div className={sectionClassName}>
            <h2 className="text-lg font-semibold text-purple-700">Suicide Warning Signs</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white mb-3">
                  <img src={talkingAbout} alt="Talking about suicide" className="h-40 w-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">If a person talks about</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 leading-relaxed">
                  <li>Being a burden to others</li>
                  <li>Feeling trapped</li>
                  <li>Unbearable pain</li>
                  <li>Having no reason to live</li>
                  <li>Killing themselves</li>
                </ul>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white mb-3">
                  <img src={behaviour} alt="Behaviour changes" className="h-40 w-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Behavior changes to watch for</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 leading-relaxed">
                  <li>Increased alcohol or drug use</li>
                  <li>Looking for means online or in person</li>
                  <li>Reckless behavior</li>
                  <li>Withdrawal and isolation</li>
                  <li>Sleep changes (too much or too little)</li>
                  <li>Saying goodbye or giving away possessions</li>
                  <li>Aggression</li>
                </ul>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white mb-3">
                  <img src={mood} alt="Common crisis moods" className="h-40 w-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Common crisis moods</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 leading-relaxed">
                  <li>Depression</li>
                  <li>Loss of interest</li>
                  <li>Rage or irritability</li>
                  <li>Humiliation</li>
                  <li>Anxiety</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={sectionClassName}>
            <h2 className="text-lg font-semibold text-purple-700">Suicide Risk Factors</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white mb-3">
                  <img src={healthFactors} alt="Health factors" className="h-40 w-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Health Factors</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 leading-relaxed">
                  <li>Mental health conditions (depression, bipolar disorder, schizophrenia, anxiety)</li>
                  <li>Personality or psychotic symptoms</li>
                  <li>Substance use disorders</li>
                  <li>Serious chronic illness or pain</li>
                </ul>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white mb-3">
                  <img src={environmentalFactors} alt="Environmental factors" className="h-40 w-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Environmental Factors</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 leading-relaxed">
                  <li>Major life stressors (death, divorce, job loss)</li>
                  <li>Ongoing stress (bullying, relationship conflict, unemployment)</li>
                  <li>Access to firearms or large quantities of medication/drugs</li>
                  <li>Exposure to another person’s suicide</li>
                </ul>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white mb-3">
                  <img src={historicalFactors} alt="Historical factors" className="h-40 w-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Historical Factors</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 leading-relaxed">
                  <li>Previous suicide attempts</li>
                  <li>Family history of suicide attempts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 py-12 rounded-xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-center">
          <p className="max-w-3xl mx-auto text-center text-lg text-gray-800 mb-4">
            For further helpful information see our <a href="/resources/how-to-help" className="text-purple-700 font-medium underline">How Can I Help Someone</a> and other resources on our <a href="/resources" className="text-purple-700 font-medium underline">Resources page</a>.
          </p>

          <p className="max-w-3xl mx-auto text-center italic text-xl font-semibold text-red-600 mb-6">
            If you, or someone you know is in crisis, call 911 immediately!
          </p>

          <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 mb-6">
            See our directory of mental health crisis support in your area
          </p>

          <div>
            <a
              href="/incrisisneedhelp"
              style={{ color: '#ffffff' }}
              className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-[1.02] transform transition"
            >
              CRISIS LINES
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResourcesWarningSigns;