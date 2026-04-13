import React from 'react';

const coverPhoto = '/assets/AdditionalResourceImages/Workplace-600x400.jpeg';
const workplaceHealth =
  '/assets/AdditionalResourceImages/WorkplaceHealth_En.pdf';
const workplaceMentalHealth =
  '/assets/AdditionalResourceImages/workplaceMentalHealth.png';
const guideToWorkplaceBullying =
  '/assets/AdditionalResourceImages/guideToWorkPlaceBullying.png';

const MentalHealthResourcesWorkplace: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full lg:w-4/5 mx-auto">
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 bg-clip-text text-transparent">
              Workplace Employers
            </span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row-reverse sm:items-start gap-6">
            <img
              src={coverPhoto}
              alt="Workplace Employers"
              className="w-full h-40 sm:w-[30vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
            />
            <div className="flex-1">
              <p className="leading-relaxed">
                There&apos;s a perception that bullying is something that only
                happens at school, as if you&apos;ll leave education and never
                meet a bully again. Unfortunately, some people never grow up.
                Bullying is a problem across ages and environments. It&apos;s by
                no means restricted to school. In fact, bullying in the
                workplace is more commonplace than you&apos;d think.
              </p>

              <p className="mt-4 leading-relaxed">
                Whether it&apos;s a critical boss singling out one employee to
                blame and punish, or a workforce playing repeated pranks on a
                colleague and choosing to ignore their contributions to a
                project, workplace bullying is on the rise.
              </p>
            </div>
          </main>

          <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Resources for Workplace Employers
            </h2>

            <div className="mt-6 grid gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={workplaceMentalHealth}
                  alt="Workplace Mental Health"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                />
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Workplace Mental Health
                  </h3>
                  <p className="mt-3 leading-relaxed">
                    This handbook offers employers a step-by-step approach to
                    adopting the National Standard for Psychological Health and
                    Safety by the Mental Health Commission of Canada. By
                    summarizing both the Standard and an Action Guide, Mood
                    Disorders Society of Canada has created for employers an
                    accessible resource for making positive changes in their
                    workplaces that will benefit employees and protect their
                    company&apos;s bottom-line. Mental Health in the Workplace
                    will encourage discussion and dialogue in your place of
                    employment. Mental illness affects all Canadians. The
                    overarching message is that recovery from mental illness is
                    possible.
                  </p>
                  <p className="mt-4 leading-relaxed italic">
                    By Mood Disorders Society of Canada
                  </p>

                  <a
                    href={workplaceHealth}
                    className="mt-5 inline-flex items-center rounded-lg bg-purple-700 px-5 py-2.5 font-semibold text-white shadow-sm transition-colors hover:bg-purple-800"
                  >
                    Download Guide
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={guideToWorkplaceBullying}
                  alt="A Guide To Workplace Bullying"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                />
                <div className="flex-1">
                  <a
                    href="https://www.smartpension.co.uk/news"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                  >
                    A Guide To Workplace Bullying
                  </a>
                  <p className="mt-3 leading-relaxed">
                    Bullying is a problem across ages and environments - by no
                    means is it restricted to school. In fact, bullying in the
                    workplace is more commonplace than you&apos;d think. This
                    guide explores what steps both employees and employers can
                    take to overcome and stamp out a bullying culture in the
                    workplace.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    While not every individual will love their job, everyone
                    deserves to feel comfortable and at ease in the workplace.
                    Your working environment should be a supportive one, where
                    everyone can work towards their goals without undue pressure
                    or attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResourcesWorkplace;
