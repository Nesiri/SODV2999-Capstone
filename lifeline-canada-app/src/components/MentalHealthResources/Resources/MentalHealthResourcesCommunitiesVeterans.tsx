import React from 'react';

const coverPhoto = '/assets/AdditionalResourceImages/soldier-600x400.webp';

const veteransAffairsCanada =
  '/assets/AdditionalResourceImages/governmentOfCanada-1.png';
const canadianForces = '/assets/AdditionalResourceImages/CFMWS.png';
const woundedWarriors = '/assets/AdditionalResourceImages/woundedWarriors.png';
const militaryMentalHealth =
  '/assets/AdditionalResourceImages/governmentOfCanada-1.png';

const militaryCrisisLine =
  '/assets/AdditionalResourceImages/militaryCrisisLine.png';
const virtualSupport = '/assets/AdditionalResourceImages/ACC.png';
const resurrectingLives =
  '/assets/AdditionalResourceImages/resurrectingLives.png';
const marineCorpsCounselling = '/assets/AdditionalResourceImages/MCCS.png';
const realWarriors = '/assets/AdditionalResourceImages/realWarriors.png';

const hopeForRecovery =
  '/assets/AdditionalResourceImages/hopeForRecovery-1.png';
const financialAid = '/assets/AdditionalResourceImages/bestColleges.png';
const veteransJobs = '/assets/AdditionalResourceImages/debtOrg.png';
const funeralPlanning = '/assets/AdditionalResourceImages/lincolnHeritage.png';
const longTermCare = '/assets/AdditionalResourceImages/elderLawAnswers.png';
const tipsForPTSD = '/assets/AdditionalResourceImages/bradleyUniversity.png';
const startYourRecovery =
  '/assets/AdditionalResourceImages/startYourRecovery.png';
const nationalCenterForPTSD =
  '/assets/AdditionalResourceImages/USDepartmentofVeteransAffairs.png';
const suicidePostventionPlan =
  '/assets/AdditionalResourceImages/suicidePostventionPlan.png';
const musicHealingVeterans =
  '/assets/AdditionalResourceImages/musicHealingVeterans.png';

const canadianVeteranResources = [
  {
    title: 'Veterans Affairs Canada',
    href: 'https://www.veterans.gc.ca/en',
    image: veteransAffairsCanada,
    content:
      'There is a wide range of mental health services, support and information for Veterans and their families.',
  },
  {
    title: 'Canadian Veterans, Military and Family',
    href: 'https://cfmws.ca',
    image: canadianForces,
    content:
      'Canadian Forces provide military families with information, resources and services in Canadian Armed Forces communities.',
  },
  {
    title: 'Wounded Warriors',
    href: 'https://woundedwarriors.ca/home/',
    image: woundedWarriors,
    content:
      'Whether it is through our mental health challenges, the pioneering initiatives we fund through third party partnerships, or our individual support management Hand Up program, we are committed to ensuring we provide a diverse set of programs and services for our wounded soldiers and their families.',
  },
  {
    title: 'Military Mental Health',
    href: 'https://www.canada.ca/en/department-national-defence/services/benefits-military/military-mental-health.html',
    image: militaryMentalHealth,
    content:
      'Mental health issues can come in many forms. Get the help and advice you need. The Canadian Armed Forces offers exceptional medical and mental health care, support for families, and return-to-work programs.',
  },
];

const usaVeteranResources = [
  {
    title: 'Military Crisis Line',
    href: 'https://www.veteranscrisisline.net/get-help-now/military-crisis-line/',
    image: militaryCrisisLine,
    content:
      'The Military Crisis Line, online chat, and text-messaging service are free to all Service members, including members of the National Guard and Reserve, and Veterans, even if you are not registered with the U.S. Department of Veterans Affairs (VA) or enrolled in VA health care.',
  },
  {
    title: 'Virtual Support & Online Addiction Meetings',
    href: 'https://americanaddictioncenters.org/virtual-meetings',
    image: virtualSupport,
    content:
      'American Addiction Centers is offering virtual support meetings online. Learn how you can join one today. AAC is an industry leader in addiction treatment. Our team of top medical experts specialize in dual diagnosis treatment and are committed to ensuring that each patient is treated as an individual. Call 24/7.',
  },
  {
    title: 'Resurrecting Lives Foundation',
    href: 'https://resurrectinglives.org',
    image: resurrectingLives,
    content:
      'Advocates for veterans with Traumatic Brain Inquiries (TBI) within their local communities, assisting their local hospitals and clinics to provide services and support to families and friends who are helping these young men and women move forward.',
  },
  {
    title: 'Marine Corps Counselling & Assistance',
    href: 'https://hawaii.usmc-mccs.org/marine-family-support/prevention-and-counseling/military-onesource',
    image: marineCorpsCounselling,
    content:
      "Using an integrated community health approach, the Community Counseling Program (CCP) equips Marines, Sailors, and their families with the skills to address life's challenges before they significantly impact performance in their duties and relationships.",
  },
  {
    title: 'Real Warriors',
    href: 'https://www.health.mil/Military-Health-Topics/Centers-of-Excellence/Psychological-Health-Center-of-Excellence/Real-Warriors-Campaign',
    image: realWarriors,
    content:
      'Confidential 24/7 call line along with information on Post-Traumatic Stress. The Real Warriors Campaign encourages members of the military community to seek help for psychological health concerns by promoting a culture of support and emphasizing that mental health care IS health care.',
  },
];

const additionalVeteranResources = [
  {
    title: 'Hope for Recovery: Understanding PTSD',
    href: 'https://www.youtube.com/watch?v=EqDs-2qvd_Y',
    image: hopeForRecovery,
    content:
      'A PTSD Alliance produced You-Tube video link. Involves dramatizations of individuals briefly describing interpersonal traumas, which may be upsetting for some individuals.',
  },
  {
    title: 'Financial Aid for Military Service Members and Student Veterans',
    href: 'https://www.bestcolleges.com/resources/military-financial-aid/',
    image: financialAid,
    content:
      "Military service members can use veteran education benefits to pay for college. Learn how to make the most of the benefits you've earned.",
  },
  {
    title: 'Veterans, Jobs and Unemployment',
    href: 'https://www.debt.org/veterans/jobs-and-unemployment/',
    image: veteransJobs,
    content:
      'Prospects for U.S. veterans returning to the civilian workforce have improved dramatically since the Great Recession of 2008, when unemployment spiked and newly discharged service members struggled to find any work in a contracting economy.',
  },
  {
    title: 'The Funeral Planning Guide for Veterans',
    href: 'https://funeraladvantage.com/consumer-resources/funeral-assist-complete-guide-to-planning-a-funeral/',
    image: funeralPlanning,
    content:
      "Whether veterans pass away in combat or in old age, family and friends often want to plan a burial that's as dignified as they were. Creating a memorial that commemorates their life, while also celebrating their service, is a distinguished way to honor a veteran.",
  },
  {
    title: 'Long-Term Care Benefits for Veterans and Surviving Spouses',
    href: 'https://www.elderlawanswers.com/long-term-care-benefits-for-veterans-and-surviving-spouses-6158',
    image: longTermCare,
    content:
      'Long-term care costs can add up quickly. For veterans and the surviving spouses of veterans who need in-home care or are in a nursing home, help may be available.',
  },
  {
    title: 'Tips & Resources for Helping Veterans with PTSD',
    href: 'https://onlinedegrees.bradley.edu/counseling/veterans-with-ptsd',
    image: tipsForPTSD,
    content:
      'During their time serving our country, military personnel can encounter many kinds of traumatic events. Millions of veterans will carry that trauma with them, resulting in a condition known as post-traumatic stress disorder, or PTSD.',
  },
  {
    title: 'StartYourRecovery.org',
    href: 'https://startyourrecovery.org',
    image: startYourRecovery,
    content:
      'A free, confidential tool that helps individuals take steps toward a healthy relationship with drugs and alcohol.',
  },
  {
    title: 'National Center for PTSD',
    href: 'https://www.ptsd.va.gov',
    image: nationalCenterForPTSD,
    content:
      "We are the world's leading research and educational center of excellence on PTSD and traumatic stress. The good news is that there are effective treatments.",
  },
  {
    title: 'US Reserve Affairs; Suicide Postvention Plan',
    href: 'https://dmna.ny.gov/r3sp/',
    image: suicidePostventionPlan,
    content:
      'We must not only proactively conduct effective communication and intercept programs, but be prepared to appropriately respond to each tragedy as they occur. As leaders, we are responsible for comforting survivors, assisting families, maintaining unit readiness and setting the response tone.',
  },
  {
    title: 'Music Healing Veterans Canada',
    href: 'https://musichealingveteranscanada.com',
    image: musicHealingVeterans,
    content:
      'Bringing FREE music instruction, loaner equipment and companionship to our local: Military Veterans (Regular or Reserve; All Branches), First Responders (Fire, Police, EMT), Medical (Doctors, Nurses, etc.), Corrections Canada, and Canada Border Services personnel.',
  },
];

const MentalHealthResourcesCommunitiesVeterans: React.FC = () => {
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
            <span className="!text-[#5f2d85]">Veterans &amp; Military</span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <main className="mt-6 !bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row-reverse sm:items-start gap-6">
            <img
              src={coverPhoto}
              alt="Veterans"
              className="w-full h-40 sm:w-[30vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
            />
            <div className="flex-1">
              <p className="leading-relaxed">
                Military personnel can be exposed to an array of potentially
                traumatizing experiences. PTSD symptoms can significantly
                disrupt interpersonal and occupational functioning and manifest
                in various ways, affecting psychological, emotional, physical,
                behavioral, and cognitive aspects.
              </p>

              <p className="mt-4 leading-relaxed">
                Active duty and retired veterans deserve the best when it comes
                to their benefits. Serving the country is not an easy task, and
                coming home can be a very difficult transition.
              </p>

              <p className="mt-4 leading-relaxed">
                Assembled here are some of the top resources available to both
                active duty and retired veterans to help ensure that they are
                getting the best in return for the sacrifices that they have
                patriotically made.
              </p>
            </div>
          </main>

          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Canadian Resources
            </h2>

            <div className="mt-6 grid gap-4 sm:gap-5">
              {canadianVeteranResources.map((resource) => (
                <div
                  key={resource.title}
                  className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4"
                >
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-36 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                  />
                  <div>
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                    >
                      {resource.title}
                    </a>

                    <p className="mt-2 leading-relaxed">{resource.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              USA Resources
            </h2>

            <div className="mt-6 grid gap-4 sm:gap-5">
              {usaVeteranResources.map((resource) => (
                <div
                  key={resource.title}
                  className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4"
                >
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-36 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                  />
                  <div>
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                    >
                      {resource.title}
                    </a>

                    <p className="mt-2 leading-relaxed">{resource.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Additional Resources, Links and Guides for Veterans &amp; Military
            </h2>

            <div className="mt-6 grid gap-4 sm:gap-5">
              {additionalVeteranResources.map((resource) => (
                <div
                  key={resource.title}
                  className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4"
                >
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-36 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                  />
                  <div>
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                    >
                      {resource.title}
                    </a>

                    <p className="mt-2 leading-relaxed">{resource.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResourcesCommunitiesVeterans;
