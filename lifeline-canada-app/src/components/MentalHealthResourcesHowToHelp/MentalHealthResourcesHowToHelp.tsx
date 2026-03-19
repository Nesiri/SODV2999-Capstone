import React from 'react';
import coverPhoto from '../../assets/How-To-Help.jpg';

const MentalHealthResourcesHowToHelp: React.FC = () => {
  const sectionClassName = 'rounded-xl border border-slate-200 bg-white p-5 sm:p-6';

  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-600 sm:text-sm">
          Mental Health Support
        </div>

        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
            How Can I Help Someone?
          </span>
        </h1>

        <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
          This page is designed for quick action first, then deeper guidance. If someone may be in immediate danger, call 911 now.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className={sectionClassName}>
            <h2 className="text-xl font-semibold text-purple-700">Start Here</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Ask directly: "Are you thinking about suicide?"</li>
              <li>Stay with the person and listen without judgment.</li>
              <li>If there is immediate risk, call 911 or go to emergency.</li>
              <li>Remove or secure lethal means if possible (medications, firearms, blades).</li>
              <li>Connect them to professional support as soon as possible.</li>
            </ol>
            <p className="mt-4 text-sm text-slate-600">
              Talking about suicide does not cause suicide. Asking directly can save a life.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <img
              src={coverPhoto}
              alt="How to help someone in crisis"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-900">
          <p className="font-semibold">Emergency:</p>
          <p className="mt-1 text-sm sm:text-base">
            If the person has a plan, means, and intent, call 911 immediately and stay with them.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <details className={sectionClassName} open>
            <summary className="cursor-pointer text-lg font-semibold text-purple-700">
              Understanding Suicide
            </summary>
            <div className="mt-4 space-y-3 text-slate-700">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Main points</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Most people want the pain to stop, not their life to end.</li>
                  <li>A person may be conflicted and still open to help.</li>
                  <li>Your calm, caring response can make a real difference.</li>
                </ul>
              </div>
              <p className="leading-relaxed">
                People in suicidal crisis often feel trapped, hopeless, and alone. Taking warning signs seriously and responding early is one of the most effective ways to help.
              </p>
            </div>
          </details>

          <details className={sectionClassName}>
            <summary className="cursor-pointer text-lg font-semibold text-purple-700">
              Warning Signs to Watch For
            </summary>
            <div className="mt-4 space-y-3 text-slate-700">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Main points</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Always treat suicidal talk or behavior as urgent.</li>
                  <li>Risk is higher with recent loss, substance use, or past attempts.</li>
                  <li>Sudden mood and behavior changes matter.</li>
                </ul>
              </div>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                <li>Talking about death, suicide, or being a burden.</li>
                <li>Looking for ways to die (weapons, pills, ropes).</li>
                <li>Hopelessness, feeling trapped, unbearable emotional pain.</li>
                <li>Withdrawal from others, sleep/appetite changes, major mood swings.</li>
              </ul>
              <p>
                More information:{' '}
                <a
                  href="https://www.helpguide.org/mental-health/suicide-self-harm/suicide-prevention-tips"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 underline underline-offset-2"
                >
                  Helpguide.org
                </a>
              </p>
            </div>
          </details>

          <details className={sectionClassName}>
            <summary className="cursor-pointer text-lg font-semibold text-purple-700">
              How to Talk to Someone You’re Worried About
            </summary>
            <div className="mt-4 space-y-3 text-slate-700">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Main points</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Be direct, kind, and non-judgmental.</li>
                  <li>Listen more than you speak.</li>
                  <li>Do not promise to keep suicide risk a secret.</li>
                </ul>
              </div>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                <li>Say: "I care about you. Are you thinking about suicide?"</li>
                <li>Validate feelings: "I’m glad you told me."</li>
                <li>Avoid arguing, minimizing, or trying to quickly "fix" everything.</li>
                <li>If risk is high, involve emergency or professional support immediately.</li>
              </ul>
              <p>
                Additional guidance:{' '}
                <a
                  href="https://panow.com/2014/09/12/how-to-talk-about-suicide-with-the-person-you-are-worried-about-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 underline underline-offset-2"
                >
                  Parkland Ambulance
                </a>
              </p>
            </div>
          </details>

          <details className={sectionClassName}>
            <summary className="cursor-pointer text-lg font-semibold text-purple-700">
              Quick Risk Questions
            </summary>
            <div className="mt-4 space-y-3 text-slate-700">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Main points</p>
                <p className="mt-2 font-medium">Ask clearly and calmly:</p>
                <p className="mt-1">Suicidal thoughts? Plan? Means? Timing?</p>
              </div>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                <li>Are you thinking of suicide?</li>
                <li>Have you tried before?</li>
                <li>How would you do it?</li>
                <li>Do you have access to what you would use?</li>
                <li>Have you thought about when?</li>
                <li>Who can we contact right now for support?</li>
              </ul>
            </div>
          </details>

          <details className={sectionClassName}>
            <summary className="cursor-pointer text-lg font-semibold text-purple-700">
              If You Receive a Suicidal Phone Call
            </summary>
            <div className="mt-4 space-y-3 text-slate-700">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Main points</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Listen, stay calm, and assess immediate risk.</li>
                  <li>Ask directly about plan, means, and timing.</li>
                  <li>If risk is high, call 911 and keep them connected.</li>
                </ul>
              </div>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                <li>Let the person talk and express emotion without judgment.</li>
                <li>Reflect back what you heard to confirm understanding.</li>
                <li>If they have plan + means + timing, treat as emergency now.</li>
                <li>Encourage immediate emergency care or same-day professional support.</li>
              </ul>
            </div>
          </details>

          <details className={sectionClassName}>
            <summary className="cursor-pointer text-lg font-semibold text-purple-700">
              After a Suicide Attempt: What to Do Next
            </summary>
            <div className="mt-4 space-y-3 text-slate-700">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Main points</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Do not leave the person alone right after an attempt.</li>
                  <li>Prioritize medical and mental health follow-up.</li>
                  <li>Reduce access to lethal means and create a safety plan.</li>
                </ul>
              </div>
              <h3 className="font-semibold text-slate-900">Helpful actions</h3>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                <li>Listen with compassion; avoid blame and shame.</li>
                <li>Arrange therapy and medical follow-up before discharge when possible.</li>
                <li>Support routines: sleep, meals, movement, and medication monitoring.</li>
                <li>Watch for warning signs and respond quickly if risk returns.</li>
              </ul>
              <h3 className="font-semibold text-slate-900">Avoid these</h3>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                <li>Ignoring the attempt or assuming it will not happen again.</li>
                <li>Keeping risk a secret.</li>
                <li>Monitoring in a punitive way instead of supportive safety planning.</li>
              </ul>
            </div>
          </details>
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 text-center sm:p-8">
          <p className="mx-auto max-w-3xl text-center text-lg italic text-slate-700 sm:text-2xl">
            The most important pain-coping resource is the help of a trained
            mental health professional. A person who feels suicidal, should get
            help, and do so sooner rather than later.
          </p>

          <div className="mt-8">
            <a
              href="/resources/search-professional"
              className="inline-block rounded-full bg-purple-700 px-6 py-3 font-semibold !text-white transition hover:bg-purple-800 hover:!text-white focus:!text-white visited:!text-white sm:px-8"
            >
              SEARCH FOR A PROFESSIONAL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResourcesHowToHelp;
