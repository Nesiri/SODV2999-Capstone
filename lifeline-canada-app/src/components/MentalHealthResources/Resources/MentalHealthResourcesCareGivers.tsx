import React from 'react';

const TheWayForward = '/pdfs/The-Way-Forward-Final-2014-07-01.pdf';
const MentalHealthCaregiverGuide = '/pdfs/mental_health_caregiver_guide_en.pdf';

const coverPhoto = '/assets/AdditionalResourceImages/Caregivers-600x315.png';

const mentalHealthCaregiverGuideImage =
  '/assets/AdditionalResourceImages/CMHA-1.png';
const theWayForwardImage =
  '/assets/AdditionalResourceImages/ActionAlliance-1.png';

const thrirtyResourcesToHelpCaregivers =
  '/assets/AdditionalResourceImages/seniorAdvisor.png';
const acknowledgeAcceptHelp = '/assets/AdditionalResourceImages/caregiver.png';

const MentalHealthResourcesCareGivers: React.FC = () => {
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
            <span className="!text-[#5f2d85]">Care Givers</span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <main className="mt-6 !bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-1">
                <p className="leading-relaxed">
                  Many caregivers suffer from depression and anxiety. They may
                  delay or neglect treatment of their own health conditions.
                  Self-care is vitally important for preventing future health
                  problems. By taking better care of themselves, caregivers may
                  find they are able to provide better care for their loved one.
                </p>

                <p className="mt-4 leading-relaxed">
                  Research shows that caregiver mental health is becoming
                  increasingly worse year over year. Supporting your own mental
                  health and well-being can be overwhelming but you can learn
                  how to recognize the warning signs and take charge on
                  prioritizing and maintaining your own mental health and
                  well-being needs.
                </p>
              </div>
              <img
                src={coverPhoto}
                alt="Care Givers"
                className="w-full h-40 sm:w-[30vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
              />
            </div>
          </main>

          <div className="mt-6 sm:mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-4 sm:p-6 md:p-8 text-gray-700">
            <h2 className="!text-xl sm:text-2xl md:text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Guides &amp; Toolkits for Care Givers
            </h2>

            <div className="mt-4 sm:mt-6 grid gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:gap-6">
                  <img
                    src={mentalHealthCaregiverGuideImage}
                    alt="Mental Health Caregiver Guide"
                    className="w-full h-40 sm:w-40 md:w-48 sm:h-auto rounded-xl shadow-md object-contain bg-gray-50 mb-3 sm:mb-0 sm:float-left sm:mr-6"
                  />
                  <div className="flex-1">
                    <a
                      href={MentalHealthCaregiverGuide}
                      className="text-base sm:text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4 inline-block"
                    >
                      Mental Health Caregiver Guide
                    </a>
                    <p className="mt-2 leading-relaxed text-sm sm:text-base">
                      A Guide for Caregivers of Persons Living with Mental
                      Illness or Experiencing Mental Health Challenges. This
                      guide is divided into two main sections: Caring for YOU
                      and Caring for the Individual. The guide is further
                      divided into Child, Youth, Adult, and Older Adult sections
                      to reflect caring for individuals across the lifespan and
                      the responsibilities associated with caregiving.
                    </p>

                    <p className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                      This guide is intended to provide you, the caregiver, with
                      helpful tips, tools, and information. We encourage you to
                      "build your own toolbox" using the various Activities in
                      this guide. These activities are designed to help you
                      think about what you are learning in greater depth and to
                      put some tools in place to help with your learning. The
                      information is based on things you can control, and things
                      that you can do to complement a treatment plan, promote
                      recovery, or while waiting for services.
                    </p>

                    <p className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base italic">
                      By Ottawa Public Health, Military Family Services, the
                      Canadian Public Health Association, the Canadian Mental
                      Health Association &amp; the Mental Illness Caregivers
                      Association
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:gap-6">
                  <img
                    src={theWayForwardImage}
                    alt="The Way Forward: Pathways to Hope, Recovery and Wellness"
                    className="w-full h-40 sm:w-40 md:w-48 sm:h-auto rounded-xl shadow-md object-contain bg-gray-50 mb-3 sm:mb-0 sm:float-left sm:mr-6"
                  />
                  <div className="flex-1">
                    <a
                      href={TheWayForward}
                      className="text-base sm:text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4 inline-block"
                    >
                      The Way Forward: Pathways to Hope, Recovery and Wellness
                    </a>
                    <p className="mt-2 leading-relaxed text-sm sm:text-base">
                      The Way Forward: Pathways to hope, recovery and wellness
                      brings insights from lived experience&apos; as an
                      important tool for better serving individuals struggling
                      with suicidal thoughts, feelings and action in the system
                      of care.
                    </p>

                    <p className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                      The Way Forward was developed in 2014 by the Suicide
                      Attempt Survivors Task Force of the National Action
                      Alliance for Suicide Prevention. It is a comprehensive
                      resource for policy makers, service providers and invested
                      community members alike.
                    </p>

                    <p className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base italic">
                      National Action Alliance for Suicide Prevention
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-4 sm:p-6 md:p-8 text-gray-700">
            <h2 className="!text-xl sm:text-2xl md:text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Resources &amp; Links for Care Givers
            </h2>

            <div className="mt-4 sm:mt-6 grid gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:gap-6">
                  <img
                    src={thrirtyResourcesToHelpCaregivers}
                    alt="30 Resources to Help Caregivers"
                    className="w-full h-40 sm:w-40 md:w-48 sm:h-auto rounded-xl shadow-md object-contain bg-gray-50 mb-3 sm:mb-0 sm:float-left sm:mr-6"
                  />
                  <div className="flex-1">
                    <a
                      href="https://www.senioradvisor.com/blog/2017/04/30-resources-to-help-caregivers/"
                      className="text-base sm:text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4 inline-block"
                    >
                      30 Resources to Help Caregivers
                    </a>
                    <p className="mt-2 leading-relaxed text-sm sm:text-base">
                      Senior caregiving is time consuming, resource intensive,
                      and something 34.2 million people in the United States are
                      trying to balance with everything else going on in their
                      lives. Being the primary caregiver for an aging loved one
                      is hard work, and a lot of caregivers are struggling with
                      the burden without knowing where to turn for help.
                      Luckily, you do have options. We&apos;ve compiled a list
                      of 30 resources for caregivers that can help ease your
                      burden and provide helpful information on how to handle
                      caregiving more effectively.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:gap-6">
                  <img
                    src={acknowledgeAcceptHelp}
                    alt="Acknowledge and Accept Help"
                    className="w-full h-40 sm:w-40 md:w-48 sm:h-auto rounded-xl shadow-md object-contain bg-gray-50 mb-3 sm:mb-0 sm:float-left sm:mr-6"
                  />
                  <div className="flex-1">
                    <a
                      href="https://www.youtube.com/watch?v=n7HkQT1CKxQ"
                      className="text-base sm:text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4 inline-block"
                    >
                      Acknowledge &amp; Accept Help
                    </a>
                    <p className="mt-2 leading-relaxed text-sm sm:text-base">
                      YouTube Video about overcoming self stigma. 4:20 Minutes
                      long. By the Ontario Caregivers Organization who "exist to
                      support Ontario&apos;s 4 million caregivers; ordinary
                      people who provide physical and emotional support to a
                      family member, partner, friend or neighbour. We support
                      caregivers by being their one point of access to
                      information, so they have what they need to be successful
                      in their role."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResourcesCareGivers;
