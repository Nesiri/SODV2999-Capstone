import React from 'react';

const coverPhoto = '/assets/AdditionalResourceImages/Teacher-600x400.webp';

const supportingMinds = '/assets/AdditionalResourceImages/ontario.png';
const howToMakeADifference = '/assets/AdditionalResourceImages/telus.png';

const MentalHealthResourcesEducators: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12 overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>
      <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full lg:w-4/5 mx-auto">
          <h1 className="!text-[#5f2d85] mt-4 !text-3xl sm:!text-4xl lg:text-5xl font-black tracking-tight">
            <span className="!text-[#5f2d85]">Educators</span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <main className="mt-6 !bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row-reverse sm:items-start gap-6">
            <img
              src={coverPhoto}
              alt="Educators"
              className="w-full h-40 sm:w-[30vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
            />
            <div className="flex-1">
              <p className="leading-relaxed">
                The best approach to school-based suicide prevention activities
                is teamwork that includes teachers, school doctors, school
                nurses, school psychologists and school social workers, working
                in close cooperation with community agencies.
              </p>

              <p className="mt-4 leading-relaxed">
                Having suicidal thoughts now and then is not abnormal. They are
                part of the normal development process in childhood and
                adolescence, as are working on existential problems and trying
                to understand life, death, and the meaning of life.
                Questionnaire surveys show that more than half of
                upper-secondary students report that they have entertained
                thoughts of suicide. Young people need to discuss these topics
                with adults. Suicidal thoughts become abnormal in children and
                adolescents when the realization of those thoughts seems to be
                the only way out of their difficulties. There is then a serious
                risk of attempted suicide or suicide.
              </p>
            </div>
          </main>

          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Resources &amp; Guides for Educators
            </h2>

            <div className="mt-6 grid gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={supportingMinds}
                  alt="Supporting Minds"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                />
                <div className="flex-1">
                  <a
                    href={'#'}
                    className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                  >
                    Supporting Minds: An Educator&apos;s Guide to Promoting
                    Students&apos; Mental Health &amp; Well-Being
                  </a>
                  <p className="mt-2 leading-relaxed">
                    This resource guide is designed to help educators understand
                    more about mental health in order to promote the mental
                    health of all students. It provides information to help
                    educators recognize students who may be experiencing
                    distress and support them in their pathway to care. The
                    guide discusses the role of educators in recognizing
                    students who may be at risk of developing mental health
                    problems and outlines ways in which educators can promote
                    the mental health and well-being of all students. It offers
                    suggestions for talking about mental health with parents and
                    students. It also provides information about the types of
                    mental health problems children and youth may experience,
                    including the signs, symptoms, causes, and frequency of
                    different types of problems and their potential impact on
                    student learning. Most importantly, it offers strategies for
                    enhancing students&apos; ability to function at school both
                    academically and socially.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    By the Hamilton-Wentworth Student Support Leadership
                    Initiative, in collaboration with the Child and Youth Mental
                    Health Information Network.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={howToMakeADifference}
                  alt="How to Make a Difference When You Witness Bullying Online"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                />
                <div className="flex-1">
                  <a
                    href="https://impact.mediasmarts.ca/en/teachers"
                    className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                  >
                    How to Make a Difference When You Witness Bullying Online
                    (Grades: 7 to 9)
                  </a>
                  <p className="mt-2 leading-relaxed">
                    Lots of times kids will say they&apos;re not bullying,
                    they&apos;re &apos;just joking&apos; - in fact, it&apos;s
                    the number one reason for being mean online. Other times,
                    people will play down how serious the situation really is.
                    It can be hard speaking out when cyber bullying happens for
                    a whole pile of reasons, but what you say and do is really
                    important.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    In this lesson students discuss reasons why they might be
                    reluctant to intervene when they witness cyber bullying and
                    identify ways that they can help without making things
                    worse. They then use this interactive tool to help them
                    decide how to navigate scenarios relating to being a witness
                    to bullying, and share their experiences to help them
                    understand how important it is to think carefully before you
                    act. Finally, students learn about “decision trees” and
                    other info-graphics and create an original info-graphic to
                    communicate what they&apos;ve learned about how to intervene
                    when they witness cyber bullying. You can make an impact:
                    How witnesses react can make a BIG difference in stopping
                    cyber bullying and making it hurt less.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    By Telus / Media Smarts
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

export default MentalHealthResourcesEducators;
