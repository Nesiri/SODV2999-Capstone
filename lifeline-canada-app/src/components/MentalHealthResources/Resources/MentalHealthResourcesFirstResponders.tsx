import React from 'react';

const GuideForEarlyResponders = '/pdfs/guide-for-early-responders.pdf';
const ManualForFirstResponders = '/pdfs/Manual-for-First-Responders.pdf';
const FirstResponders = '/pdfs/First-Responders-Toolkit-WEB.pdf';

const coverPhoto =
  '/assets/AdditionalResourceImages/firstResponders-600x314.jpg';

const earlyRespondersSupportingSurvivors =
  '/assets/AdditionalResourceImages/WSPN.png';
const informationForFirstResponders =
  '/assets/AdditionalResourceImages/compassion.png';
const firstRespondersTraumaSuicide =
  '/assets/AdditionalResourceImages/CentreForSuicidePrevention.png';

const suicidesAmongFirstResponders = '/assets/AdditionalResourceImages/CDC.png';
const preventingSuicide = '/assets/AdditionalResourceImages/WHO.png';
const iDontWantToLoseMoreFriends =
  '/assets/AdditionalResourceImages/iDontWantToLoseMoreFriends.png';
const ptsdResourceToolkit = '/assets/AdditionalResourceImages/PTSDToolkit.png';

const MentalHealthResourcesFirstResponders: React.FC = () => {
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
            <span className="!text-[#5f2d85]">First Responders</span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <main className="mt-6 !bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row-reverse sm:items-start gap-6">
            <img
              src={coverPhoto}
              alt="First Responders"
              className="w-full h-40 sm:w-[30vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
            />
            <div className="flex-1">
              <p className="leading-relaxed">
                First responders, such as police officers, firefighters and
                ambulance and paramedics are increasingly called upon in
                situations involving mental health emergencies, such as suicidal
                crises. Consequently, they occupy an important role in
                community-based suicide prevention: by ensuring that persons
                with mental disorders receive appropriate mental health
                treatment, by removing access to lethal means from people at
                high risk of suicide, and by recognizing the suicide potential
                in situations involving domestic disputes or where potentially
                deadly force is exercised. First responders are in a unique
                position to determine the course and outcome of suicidal crises.
              </p>

              <p className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                Additionally, First responders are at least twice as likely to
                suffer from PTSD caused by witnessing or experiencing actual or
                threatened death, serious injury or violence.
              </p>
            </div>
          </main>

          <div className="mt-6 sm:mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-4 sm:p-6 md:p-8 text-gray-700">
            <h2 className="!text-xl sm:text-2xl md:text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Guides &amp; Toolkits for First Responders
            </h2>

            <div className="mt-6 grid gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={earlyRespondersSupportingSurvivors}
                  alt="A Guide for Early Responders Supporting Survivors Bereaved by Suicide"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                />
                <div className="flex-1">
                  <a
                    href={GuideForEarlyResponders}
                    className="text-base sm:text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4 inline-block"
                  >
                    A Guide for Early Responders Supporting Survivors Bereaved
                    by Suicide
                  </a>
                  <p className="mt-2 leading-relaxed text-sm sm:text-base">
                    This resource is intended primarily for Early Responders
                    such as: Police, Ambulance, Firefighters, Emergency
                    Personnel, Health Care Providers, Spiritual Care Providers,
                    Medical Investigators, and Funeral Directors who all have
                    close and often immediate contact with survivors bereaved by
                    a suicide loss. However, other service providers may also
                    find this information helpful in the work they do.
                  </p>
                  <p className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                    This guide offers information about suicide loss and will
                    likely validate and enhance the many helpful things early
                    responders already do. The guide may also offer new insights
                    and guidance on suicide alertness highlighting prevention
                    and intervention resources available, since we know that
                    survivors may be at greater risk of suicide as well.
                  </p>
                  <p className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base italic">
                    Developed by the Winnipeg Suicide Prevention Network in
                    partnership with the Canadian Association for Suicide
                    Prevention
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={informationForFirstResponders}
                  alt="Information For First Responders in Mental Health or Addictions Crises"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                />
                <div className="flex-1">
                  <a
                    href={ManualForFirstResponders}
                    className="text-base sm:text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4 inline-block"
                  >
                    Information For First Responders in Mental Health or
                    Addictions Crises
                  </a>
                  <p className="mt-2 leading-relaxed text-sm sm:text-base">
                    This document is intended for use by first responders to a
                    mental health crisis, who may include the following:
                  </p>
                  <p className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                    I Emergency Services: RCMP - Ambulance - Fire
                    <br />
                    II School Faculty
                    <br />
                    III Religious Leaders
                    <br />
                    IV Workplace Administration
                    <br />V Private Individuals
                  </p>
                  <p className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                    <a
                      href="https://www.forwardhouse.com"
                      className="!text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                    >
                      By Forward House Community Society
                    </a>
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={firstRespondersTraumaSuicide}
                  alt="First Responders, Trauma and Suicide"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                />
                <div className="flex-1">
                  <a
                    href={FirstResponders}
                    className="text-base sm:text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4 inline-block"
                  >
                    First Responders, Trauma &amp; Suicide
                  </a>
                  <p className="mt-2 leading-relaxed text-sm sm:text-base">
                    First responders-paramedics, firefighters, police-are
                    considered to be at greater risk for Acute Stress Disorder
                    and Post Traumatic Stress Disorder than most other
                    occupations. This is because their everyday duties routinely
                    encounter "traumatic stressors"
                  </p>
                  <p className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                    Some researchers believe that experiencing PTSD is also a
                    high-risk factor for subsequent suicidal behaviours.
                  </p>
                  <p className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base italic">
                    Centre for Suicide Prevention
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-4 sm:p-6 md:p-8 text-gray-700">
            <h2 className="!text-xl sm:text-2xl md:text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Resources &amp; Links for First Responders
            </h2>

            <div className="mt-6 grid gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={suicidesAmongFirstResponders}
                  alt="Suicides Among First Responders: A Call to Action"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                />
                <div className="flex-1">
                  <a
                    href="https://www.cdc.gov/niosh/bulletin/index.html"
                    className="text-base sm:text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4 inline-block"
                  >
                    Suicides Among First Responders: A Call to Action
                  </a>
                  <p className="mt-2 leading-relaxed text-sm sm:text-base">
                    In 2019, there were 47,500 suicide fatalities in the U.S.
                    and an estimated 1.4 million suicide attempts. The causes of
                    suicide are complex, with many personal, socio-demographic,
                    medical, and economic factors playing a role. One potential
                    risk factor is occupation and several occupations appear to
                    be at higher risk for suicide, including first responders
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={preventingSuicide}
                  alt="Preventing Suicide: Information for Emergency Responders"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                />
                <div className="flex-1">
                  <a
                    href="https://www.youtube.com/watch?v=ECarCNxgM-4"
                    className="text-base sm:text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4 inline-block"
                  >
                    Preventing Suicide: Information for Emergency Responders
                  </a>
                  <p className="mt-2 leading-relaxed text-sm sm:text-base">
                    Emergency workers are often the first on the scene to a
                    mental health crisis or suicide attempt. They have a pivotal
                    role to play in what happens from there on.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={iDontWantToLoseMoreFriends}
                  alt="I Don't Want to Lose Any More Friends: First Responders are Not Alone"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                />
                <div className="flex-1">
                  <a
                    href="https://www.youtube.com/watch?v=UGKHx6dX1EY"
                    className="text-base sm:text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4 inline-block"
                  >
                    I Don&apos;t Want to Lose Any More Friends: First Responders
                    are Not Alone
                  </a>
                  <p className="mt-2 leading-relaxed text-sm sm:text-base">
                    Officer Victor Machese has spent more than 15 years working
                    in law enforcement. In the past few years, he has lost five
                    of his close friends on the force due to suicide. It was
                    these losses that moved Victor to do more to stem the tide
                    of first responder deaths by suicide. This is his story and
                    a message to others that there is help and a path to
                    wellness and recovery.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={ptsdResourceToolkit}
                  alt="PTSD Resource Toolkit"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                />
                <div className="flex-1">
                  <a
                    href="https://www.firstrespondersfirst.ca"
                    className="text-base sm:text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4 inline-block"
                  >
                    PTSD Resource Toolkit
                  </a>
                  <p className="mt-2 leading-relaxed text-sm sm:text-base">
                    First responders are at least twice as likely to suffer from
                    PTSD. There&apos;s no need to suffer in silence. The help
                    you need is here. This website offers resources and services
                    for the First Responder community to understand the various
                    steps of a PTSD program from managing a crisis through to
                    implementing best practices into an existing program.
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

export default MentalHealthResourcesFirstResponders;
