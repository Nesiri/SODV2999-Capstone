import React from 'react';
const menGetDepression = '/pdfs/men_get_depression.pdf';

const coverPhoto = '/assets/AdditionalResourceImages/men-600x338.jpg';

const waysToLookAfterMentalHealth =
  '/assets/AdditionalResourceImages/mental-health-men-600x300.png';
const emotionallyDistressed =
  '/assets/AdditionalResourceImages/triangle-sign-600x534.jpg';

const notASignOfWeakness =
  '/assets/AdditionalResourceImages/Alcohol-Suicide-600x379.jpg';
const manyMisconceptions =
  '/assets/AdditionalResourceImages/Men-mental-health-600x338.jpg';
const moreAndMoreMen = '/assets/AdditionalResourceImages/forMenAboutMen.png';

const manTherapy = '/assets/AdditionalResourceImages/manTherapy.png';
const menGetDepressionImg =
  '/assets/AdditionalResourceImages/menGetDepression.png';

const manDistress = '/assets/AdditionalResourceImages/menDistress.webp';
const manFactors = '/assets/AdditionalResourceImages/manFactors.webp';

const MentalHealthResourcesCommunitiesMen: React.FC = () => {
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
            <span className="!text-[#5f2d85]">Men</span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <main className="mt-6 !bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row-reverse sm:items-start gap-6">
            <img
              src={coverPhoto}
              alt="Men's Mental Health"
              className="w-full h-40 sm:w-[30vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
            />
            <div className="flex-1">
              <p className="leading-relaxed">
                Things happen in life, like difficulties with work or finances,
                the breakdown of a relationship, overwhelming family
                responsibilities, or a significant setback. These challenges can
                take a serious toll on your mental health, if left unchecked.
                Many men tough it out and struggle alone.
              </p>

              <p className="mt-4 leading-relaxed">
                Establishing and maintaining relationships, talking about the
                hard stuff in life and taking action when times are tough are
                proven ways for men stay mentally healthy and cope with the
                stress of everyday life. Good overall health and wellbeing is
                linked to not only to better mental health but also reduces the
                likelihood of suicide.
              </p>

              <p className="mt-4 leading-relaxed">
                Some signs of poor mental health include feeling irritable,
                hopeless or worthless and behaviors such as aggression, drinking
                more than usual and isolating yourself from friends and family.
              </p>
            </div>
          </main>

          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              For Men. About Men. Health Strategies for Managing and Preventing
              Depression
            </h2>

            <div className="mt-6 grid gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row-reverse sm:items-start gap-4">
                <img
                  src={waysToLookAfterMentalHealth}
                  alt="Ways to look after your mental health"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-normal !text-[#5f2d85]">
                    Some Ways to Look After Your Mental Health
                  </h3>

                  <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
                    <li>
                      Do more of the things that make you feel great and help
                      you to de-stress.
                    </li>
                    <li>Spend time with friends.</li>
                    <li>
                      Share what&apos;s going on, especially if you&apos;re
                      feeling overwhelmed.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row-reverse sm:items-start gap-4">
                <img
                  src={manDistress}
                  alt="Distress in men"
                  className="w-full h-32 sm:w-[18vw] sm:max-w-[14rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                />
                <div className="flex-1">
                  <p className="leading-relaxed">
                    Untreated mental health conditions can carry a high risk for
                    suicide among men. The distress a man experiences at these
                    times can distort his thinking so it becomes harder for him
                    to see possible solutions to problems, or to connect with
                    those who can offer support.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row-reverse sm:items-start gap-4">
                <img
                  src={manFactors}
                  alt="Risk factors for men"
                  className="w-full h-32 sm:w-[18vw] sm:max-w-[14rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                />
                <div className="flex-1">
                  <p className="leading-relaxed">
                    There are a number of factors that have been linked to an
                    increased risk of suicide, including:
                  </p>

                  <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
                    <li>
                      Previous family or personal history of mental illness.
                    </li>
                    <li>Harmful drug and alcohol use.</li>
                    <li>Isolation or loneliness.</li>
                    <li>
                      Ongoing stressful life situations such as unemployment,
                      relationship difficulties or chronic health issues.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row-reverse sm:items-start gap-4">
                <img
                  src={emotionallyDistressed}
                  alt="Emotionally distressed"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                />
                <div className="flex-1">
                  <p className="leading-relaxed">
                    If you or someone you know are emotionally distressed or in
                    crisis, the most important first step is to talk. Begin a
                    conversation with a friend, family member, health
                    professional or support service. Advice and effective tools
                    are available.
                  </p>

                  <p className="mt-4 leading-relaxed">
                    Talking, listening and being there for someone doing it
                    tough can be lifesaving. Check in if you know someone is
                    going through a difficult time. Ask if they are doing okay
                    and be prepared to listen.
                  </p>

                  <p className="mt-4 text-sm font-medium text-gray-600">
                    Source:{' '}
                    <a
                      href="https://ca.movember.com/mens-health/mental-health"
                      target="_blank"
                      rel="noreferrer"
                      className="!text-[#5f2d85] underline underline-offset-4 hover:!text-[#5f2d85]"
                    >
                      Movember Canada
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Depression is a Thief
            </h2>

            <div className="mt-6 grid gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row-reverse sm:items-start gap-4">
                <img
                  src={notASignOfWeakness}
                  alt="Not a sign of weakness"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                />
                <div className="flex-1">
                  <p className="leading-relaxed">
                    It&apos;s an illness that can rob you of your will to live.
                    It can also steal:
                  </p>

                  <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
                    <li>The pleasure from things that used to give you joy.</li>
                    <li>Your physical energy and strength.</li>
                    <li>Your connections to friends and family.</li>
                    <li>Your ability to handle stress.</li>
                  </ul>

                  <p className="mt-4 leading-relaxed">
                    It&apos;s not a sign of weakness, it&apos;s a fact. Guys get
                    depressed. Depression affects millions of men every year,
                    and is the leading cause of disability worldwide.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row-reverse sm:items-start gap-4">
                <img
                  src={manyMisconceptions}
                  alt="Many misconceptions about depression"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                />
                <div className="flex-1">
                  <p className="leading-relaxed">
                    There are many misconceptions about depression that make it
                    difficult for men to talk to others and take charge of their
                    health.
                  </p>

                  <p className="mt-4 leading-relaxed">
                    Because of these myths, men will often talk about feeling
                    angry or irritable rather than sad or down. These myths can
                    also feel like handcuffs for men, preventing them from
                    reaching out to others for even a little support. This
                    contributes to many men not seeking support until their
                    depression is very severe, if at all. This can place men at
                    an increased risk of taking their own lives - the greatest
                    risk factor for suicide is untreated depression.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row-reverse sm:items-start gap-4">
                <img
                  src={moreAndMoreMen}
                  alt="More and more men"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                />
                <div className="flex-1">
                  <p className="leading-relaxed">
                    Fortunately, more and more men, including professional
                    athletes, musicians, actors, lawyers, businessmen, writers,
                    tradesmen, teachers, men in the military, and everyone in
                    between, are &apos;going public&apos; about depression and
                    taking control of their health.
                  </p>

                  <p className="mt-4 leading-relaxed">
                    The myths are breaking down, freeing guys to talk about and
                    tackle their depression.
                  </p>

                  <p className="mt-4 leading-relaxed">
                    Ignoring or hiding the pain of depression only makes things
                    worse. This site will provide you with tips and tools,
                    information about professional services, and stories of
                    success that show you how depression can be overcome.
                  </p>

                  <p className="mt-4 leading-relaxed">
                    It starts with you recognizing depression and then making
                    important changes in your life to overcome it. It takes
                    courage. It takes strength. It takes work. But know that it
                    can be done.
                  </p>

                  <p className="mt-4 text-sm font-medium text-gray-600">
                    Source:{' '}
                    <a
                      href="https://headsupguys.org"
                      target="_blank"
                      rel="noreferrer"
                      className="!text-[#5f2d85] underline underline-offset-4 hover:!text-[#5f2d85]"
                    >
                      Heads Up Guys
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Additional Resources for Men
            </h2>

            <div className="mt-6 grid gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={manTherapy}
                  alt="Man Therapy"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                />
                <div className="flex-1">
                  <a
                    href="https://mantherapy.org"
                    className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                  >
                    Man Therapy
                  </a>

                  <p className="mt-2 leading-relaxed">
                    Suicide is a complex issue with many unique, contributing
                    variables. While there is no magic solution when it comes to
                    suicide prevention, we believe the best defense is a good
                    offense. After years of research, Man Therapy(R) was created
                    as an upstream approach to preventing suicide for the
                    highest-risk men, who often don&apos;t receive support. The
                    innovative campaign and 24/7 digital platform gets
                    working-aged men to think differently about their mental
                    health and take action before they ever reach a point of
                    crisis. Man Therapy(R) has spent over ten years breaking
                    down barriers to help-seeking behavior and smashing the
                    notion that men can&apos;t talk about their feelings.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={menGetDepressionImg}
                  alt="Men Get Depression"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                />
                <div className="flex-1">
                  <a
                    href={menGetDepression}
                    className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                  >
                    Men Get Depression
                  </a>

                  <p className="mt-2 leading-relaxed">
                    You may have depression and not know it. This booklet will
                    help you find out. Maybe you know that you are depressed but
                    don&apos;t know where to get help. We&apos;ll show you some
                    safe places to start looking. Maybe you know a man who seems
                    depressed. We&apos;ll show you how to help. Getting help for
                    your depression can make a big difference in your life and
                    in the lives of those you love and those who love you.
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

export default MentalHealthResourcesCommunitiesMen;
