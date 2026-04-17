import React from 'react';

const MentalIllnessImage =
  '/assets/AdditionalResourceImages/coping-800x575.jpg';
const coverPhoto = '/assets/AdditionalResourceImages/MythsFacts-600x444.jpg';
const strongConflict = '/assets/AdditionalResourceImages/strongConflict.webp';

const mythsVsFacts = [
  {
    myth: 'You should never ask people who are suicidal if they are thinking about it, or of a method. Just talking about it will give them the idea.',
    fact: "Asking someone in crisis if they are thinking about suicide does not give them the idea. It's important to talk about suicide with them. You'll learn more about their mindset & intentions. It may also diffuse some of the tension that's causing their feelings.",
  },
  {
    myth: 'People who talk about suicide are trying to manipulate others.',
    fact: 'No. People who talk about suicide are in pain and need help. Telling them that they "just want something" or "are trying to manipulate" is both insensitive and ignorant. People often talk about suicide before acting on it. Always take talk about suicide seriously.',
  },
  {
    myth: 'People who talk about suicide are just trying to get attention.',
    fact: 'People who die by suicide usually talk about it first. They are in pain and oftentimes reach out for help because they do not know what to do and have lost hope. Always take talk about suicide seriously.',
  },
  {
    myth: 'Once people decide to die by suicide, there is nothing you can do to stop them.',
    fact: 'Suicide can be prevented. Most people who are suicidal do not want to die; they just want to stop their pain.',
  },
  {
    myth: 'People who talk about wanting to die by suicide do not try to kill themselves.',
    fact: 'People who talk about wanting to die by suicide often follow though.',
  },
  {
    myth: 'People who attempt suicide and survive will not attempt suicide again.',
    fact: 'People who attempt suicide & survive will often make additional attempts.',
  },
  {
    myth: 'Suicide only strikes people of a certain gender, race, financial status, age, etc.',
    fact: 'Suicide can strike anyone.',
  },
  {
    myth: 'Suicide always occurs without any warning signs.',
    fact: 'There are almost always warning signs.',
  },
  {
    myth: 'People who attempt suicide are crazy.',
    fact: 'No, no, no. They are in pain, and probably have a chemical imbalance in their brain. Anyone could attempt suicide.',
  },
  {
    myth: 'People who attempt suicide are weak.',
    fact: 'Not so. They are in pain and possibly have a chemical imbalance in their brain. Many people who are very "strong" die by suicide.',
  },
  {
    myth: 'When people become suicidal, they will always be suicidal.',
    fact: 'Most people are suicidal for a limited period of time. However, suicidal feelings can recur.',
  },
  {
    myth: 'People who are suicidal definitely want to die.',
    fact: 'The vast majority of people who are suicidal do not want to die. They are in pain, and they want to stop the pain.',
  },
  {
    myth: 'When people who are suicidal feel better, they are no longer suicidal.',
    fact: 'Sometimes suicidal people feel better because they have decided to die by suicide, and may feel a sense of relief that the pain will soon be over.',
  },
  {
    myth: 'Young people never think about suicide, they have their entire life ahead of them.',
    fact: 'Suicide is the third leading cause of death for young people aged 15-24. Sometimes children under 10 die by suicide.',
  },
  {
    myth: 'People who are suicidal do not seek help.',
    fact: 'Many people who are suicidal reach out for help.',
  },
];

const MentalHealthResourcesMythsFacts: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12 overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>
      <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full lg:w-4/5 mx-auto">
          <h1 className="!text-[#5f2d85] mt-4 !text-3xl sm:!text-4xl lg:!text-5xl font-black tracking-tight">
            <span className="!text-[#5f2d85]">Myths &amp; Facts</span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <main className="mt-6 !bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 lg:gap-8 items-start">
              <div>
                <p className="leading-relaxed">
                  "An overwhelming surge of emotions that never seems to end."
                  That&apos;s what some who have attempted suicide try to
                  describe to those who ask to understand why they feel the way
                  they do. Those who are contemplating suicide might literally
                  feel as though there is no way out of their situation. They
                  are bombarded with feelings of hopelessness, fear, isolation,
                  hatred toward themselves and so much more. The pain they feel
                  is often immeasurable, to a point where they see no other
                  option than to end their lives.
                </p>

                <p className="mt-4 leading-relaxed">
                  But many people who have attempted suicide will say that they
                  wanted to live. They really didn&apos;t want to die; the
                  desire to remain with loved ones remained very strong. They
                  simply didn&apos;t see any other options.
                </p>
              </div>

              <div className="w-full h-full">
                <img
                  src={coverPhoto}
                  alt="Myths and facts cover"
                  className="w-full h-full min-h-[260px] rounded-xl border border-purple-100 shadow-sm object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </main>

          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-4 lg:gap-6 lg:items-start">
              <div>
                <p className="leading-relaxed">
                  What causes such a strong conflict in a person? What leads to
                  that feeling of a dead-end, no-way-out scenario?
                </p>

                <p className="mt-4 leading-relaxed">
                  There are many reasons that someone might choose suicide or
                  contemplate suicidal thoughts. Those reasons are often so
                  complex and complicated that the person suffering from those
                  feelings might not be able to articulate exactly what is going
                  on in their head and heart. However, long and difficult
                  research has found that the basic motivation for suicide is
                  the feeling of utter despair and hopelessness. How a person
                  reaches that point is what varies from one to another.
                </p>
              </div>

              <div className="w-full">
                <img
                  src={strongConflict}
                  alt="Strong internal conflict"
                  className="w-full h-full min-h-[180px] rounded-xl border border-purple-100 shadow-sm object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Suicide Myths vs Facts
            </h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 [&_strong]:font-bold [&_strong]:!text-[#5f2d85]">
              {mythsVsFacts.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm"
                >
                  <details className="rounded-lg border border-purple-100 bg-purple-50/40 p-3">
                    <summary className="cursor-pointer leading-relaxed">
                      <strong>Myth:</strong> Click to show or hide
                    </summary>
                    <p className="mt-3 leading-relaxed text-gray-700">
                      {item.myth}
                    </p>
                  </details>

                  <details className="mt-3 rounded-lg border border-purple-100 bg-purple-50/40 p-3">
                    <summary className="cursor-pointer leading-relaxed">
                      <strong>Fact:</strong> Click to show or hide
                    </summary>
                    <p className="mt-3 leading-relaxed text-gray-700">
                      {item.fact}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <details open className="group">
              <summary className="cursor-pointer text-lg font-normal !text-[#5f2d85]">
                Facts About Mental Illness and Suicide
              </summary>

              <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 lg:gap-8 lg:items-stretch">
                <div className="space-y-4 leading-relaxed">
                  <p>
                    The great majority of people who experience a mental illness
                    do not die by suicide. However, of those who die from
                    suicide, more than 90 percent have a diagnosable mental
                    disorder.
                  </p>

                  <p>
                    People who die by suicide are frequently experiencing
                    undiagnosed, undertreated, or untreated depression.
                  </p>

                  <p>
                    Worldwide, suicide is among the three leading causes of
                    death among people aged 15 to 44.
                  </p>

                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      An estimated 2-15% of persons who have been diagnosed with
                      major depression die by suicide. Suicide risk is highest
                      in depressed individuals who feel hopeless about the
                      future, those who have just been discharged from the
                      hospital, those who have a family history of suicide and
                      those who have made a suicide attempt in the past.
                    </li>

                    <li>
                      An estimated 3-20% of persons who have been diagnosed with
                      bipolar disorder die by suicide. Hopelessness, recent
                      hospital discharge, family history, and prior suicide
                      attempts all raise the risk of suicide in these
                      individuals.
                    </li>

                    <li>
                      An estimated 6-15% of persons diagnosed with schizophrenia
                      die by suicide. Suicide is the leading cause of premature
                      death in those diagnosed with schizophrenia. Between 75
                      and 95% of these individuals are male.
                    </li>

                    <li>
                      Also at high risk are individuals who suffer from
                      depression at the same time as another mental illness.
                      Specifically, the presence of substance abuse, anxiety
                      disorders, schizophrenia and bipolar disorder put those
                      with depression at greater risk for suicide.
                    </li>

                    <li>
                      People with personality disorders are approximately three
                      times as likely to die by suicide than those without.
                      Between 25 and 50% of these individuals also have a
                      substance abuse disorder or major depressive disorder.
                    </li>
                  </ul>

                  <p className="text-sm sm:text-base text-gray-600">
                    Source:{' '}
                    <a
                      href="https://www.samhsa.gov"
                      target="_blank"
                      rel="noreferrer"
                      className="font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-2"
                    >
                      SAMHSA
                    </a>
                  </p>
                </div>

                <div className="w-full h-full">
                  <img
                    src={MentalIllnessImage}
                    alt="Mental health awareness"
                    className="w-full h-full min-h-[320px] rounded-xl border border-purple-100 shadow-sm object-cover"
                  />
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResourcesMythsFacts;
