import React from 'react';

const coverPhoto = '/assets/AdditionalResourceImages/addict2-600x494.jpg';
const alberta = '/assets/AdditionalResourceImages/AlbertaHealthServices.png';
const britishColumbia = '/assets/AdditionalResourceImages/BritishColumbia.jpg';
const manitoba =
  '/assets/AdditionalResourceImages/AddictionsFoundationsOfManitoba.png';
const newBrunswick = '/assets/AdditionalResourceImages/NewBrunswick.png';
const newfoundland = '/assets/AdditionalResourceImages/Newfoundland.png';
const northwestTerritories =
  '/assets/AdditionalResourceImages/NorthwestTerritories.png';
const novaScotia = '/assets/AdditionalResourceImages/NovaScotia.png';
const nunavut = '/assets/AdditionalResourceImages/Nunavut.png';
const ontario = '/assets/AdditionalResourceImages/ConnexOntario.png';
const princeEdwardIsland = '/assets/AdditionalResourceImages/PEI.png';
const quebec = '/assets/AdditionalResourceImages/Quebec.webp';
const saskatchewan = '/assets/AdditionalResourceImages/Saskatchewan.png';
const yukon = '/assets/AdditionalResourceImages/Yukon.png';
const canadianCentreForAddictions =
  '/assets/AdditionalResourceImages/CanadianCentreForAddictions.png';

const MentalHealthResourcesAddiction: React.FC = () => {
  const resourceLinkClassName =
    'text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] focus:!text-[#5f2d85] active:!text-[#5f2d85] visited:!text-[#5f2d85] underline underline-offset-4';

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
            <span className="">Addiction</span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <main className="mt-6 !bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-1">
                <p className="leading-relaxed">
                  Although addiction is not technically considered a mental
                  illness, it is a medical disorder that often co-occurs with
                  mental illnesses. Some illnesses like depression and anxiety
                  can be the root causes of substance abuse. One of the main
                  characteristics of addiction is that people are compelled to
                  use rather than doing so through choice.
                </p>

                <p className="mt-4 leading-relaxed">
                  The symptoms of depression can drive some people toward
                  substance use to cope with their condition. However, consuming
                  drugs or alcohol to self-medicate can increase the risk for
                  addiction. Depression can raise the risk of substance abuse,
                  as chemical intoxicants can be a way to self-medicate by
                  numbing feelings of despair. This chemical intoxication can
                  make depressive episodes more severe, thereby exacerbating
                  self-destructive behavior and pessimistic thoughts.
                </p>
              </div>
              <img
                src={coverPhoto}
                alt="Addiction awareness"
                className="w-full h-40 sm:w-[30vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
              />
            </div>
          </main>

          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Canadian Addiction Helplines
            </h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={alberta}
                  alt="Alberta Health Services"
                  className="w-full h-24 object-contain mb-3"
                />
                <a
                  href="https://www.albertahealthservices.ca/findhealth/service.aspx?Id=1008399"
                  className={resourceLinkClassName}
                >
                  Alberta
                </a>
                <p className="mt-2 leading-relaxed">
                  1-866-332-2322
                  <br />
                  780-427-7164
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={britishColumbia}
                  alt="British Columbia"
                  className="w-full h-24 object-contain mb-3"
                />
                <a
                  href="https://www.healthlinkbc.ca/mental-health-and-substance-use/substance-use"
                  className={resourceLinkClassName}
                >
                  British Columbia
                </a>
                <p className="mt-2 leading-relaxed">
                  1-800-663-1441
                  <br />
                  604-660-9382
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={manitoba}
                  alt="Manitoba"
                  className="w-full h-24 object-contain mb-3"
                />
                <a
                  href="https://sharedhealthmb.ca/services/mental-health/"
                  className={resourceLinkClassName}
                >
                  Manitoba
                </a>
                <p className="mt-2 leading-relaxed">
                  Adult: 1-855-662-6605
                  <br />
                  Youth: 1-877-710-3999
                  <br />
                  204-944-6200
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={newBrunswick}
                  alt="New Brunswick"
                  className="w-full h-24 object-contain mb-3"
                />
                <a
                  href="https://www.gnb.ca/en/topic/health-wellness/mental-health.html"
                  className={resourceLinkClassName}
                >
                  New Brunswick
                </a>
                <p className="mt-2 leading-relaxed">1-866-355-5550</p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={newfoundland}
                  alt="Newfoundland & Labrador"
                  className="w-full h-24 object-contain mb-3"
                />
                <a
                  href="https://www.gov.nl.ca/hcs/mentalhealth-committee/mentalhealth/"
                  className={resourceLinkClassName}
                >
                  Newfoundland &amp; Labrador
                </a>
                <p className="mt-2 leading-relaxed">
                  1-888-737-4668
                  <br />
                  709-729-3658
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={northwestTerritories}
                  alt="Northwest Territories"
                  className="w-full h-24 object-contain mb-3"
                />
                <a
                  href="https://www.hss.gov.nt.ca/en/contact/community-counsellor"
                  className={resourceLinkClassName}
                >
                  Northwest Territories
                </a>
                <p className="mt-2 leading-relaxed">
                  1-800-661-0844
                  <br />
                  867-873-7037
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={novaScotia}
                  alt="Nova Scotia"
                  className="w-full h-24 object-contain mb-3"
                />
                <a
                  href="https://novascotia.ca/dhw/addictions/addiction-services-offices.asp"
                  className={resourceLinkClassName}
                >
                  Nova Scotia
                </a>
                <p className="mt-2 leading-relaxed">
                  1-866-340-6700
                  <br />
                  902-424-8866
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={nunavut}
                  alt="Nunavut"
                  className="w-full h-24 object-contain mb-3"
                />
                <a
                  href="https://nunavuthelpline.ca"
                  className={resourceLinkClassName}
                >
                  Nunavut
                </a>
                <p className="mt-2 leading-relaxed">
                  1-800-265-3333
                  <br />
                  867-979-3333
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={ontario}
                  alt="Ontario"
                  className="w-full h-24 object-contain mb-3"
                />
                <a
                  href="https://connexontario.ca"
                  className={resourceLinkClassName}
                >
                  Ontario
                </a>
                <p className="mt-2 leading-relaxed">1-866-531-2600</p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={princeEdwardIsland}
                  alt="Prince Edward Island"
                  className="w-full h-24 object-contain mb-3"
                />
                <a
                  href="https://www.princeedwardisland.ca/en/information/health-pei/help-for-addiction-and-substance-use?utm_source=redirect&utm_medium=url&utm_campaign=addiction-services"
                  className={resourceLinkClassName}
                >
                  Prince Edward Island
                </a>
                <p className="mt-2 leading-relaxed">
                  1-888-299-8399
                  <br />
                  902-368-4120
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={quebec}
                  alt="Quebec"
                  className="w-full h-24 object-contain mb-3"
                />
                <a href="" className={resourceLinkClassName}>
                  Quebec
                </a>
                <p className="mt-2 leading-relaxed">
                  1-800-265-2626
                  <br />
                  514-527-2626
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={saskatchewan}
                  alt="Saskatchewan"
                  className="w-full h-24 object-contain mb-3"
                />
                <a
                  href="https://www.saskatchewan.ca/residents/health/accessing-health-care-services/healthline"
                  className={resourceLinkClassName}
                >
                  Saskatchewan
                </a>
                <p className="mt-2 leading-relaxed">
                  811 or 1-877-800-0002
                  <br />
                  306-766-6600
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={yukon}
                  alt="Yukon"
                  className="w-full h-24 object-contain mb-3"
                />
                <a
                  href="https://yukon.ca/en/mental-wellness"
                  className={resourceLinkClassName}
                >
                  Yukon
                </a>
                <p className="mt-2 leading-relaxed">
                  1-800-661-0408 Ext 5777
                  <br />
                  After hours:
                  <br />
                  1-800-661-0408 Ext. 8473
                  <br />
                  867-667-5777
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={canadianCentreForAddictions}
                  alt="Canadian Centre for Addictions"
                  className="w-full h-24 object-contain mb-3"
                />
                <a
                  href="https://canadiancentreforaddictions.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={resourceLinkClassName}
                >
                  Canadian Centre for Addictions
                </a>
                <p className="mt-2 leading-relaxed">
                  Going beyond 12 steps and providing unlimited one-on-one
                  sessions to help you get better with a program that is fully
                  tailored to you and your situation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              US Addiction Centres
            </h2>

            <div className="mt-6 grid gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <a
                  href="https://www.addictioncenter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={resourceLinkClassName}
                >
                  Drug Rehab – Addiction Center
                </a>
                <p className="mt-2 leading-relaxed">
                  No matter where you live in the U.S., there is a drug rehab
                  center that can help you overcome your addiction. We can help
                  you find a treatment center based on your location, budget and
                  specific needs and get you started immediately.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <a
                  href="https://www.therecoveryvillage.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={resourceLinkClassName}
                >
                  The Recovery Village
                </a>
                <p className="mt-2 leading-relaxed">
                  Our advanced approach to addiction treatment and drug
                  treatment empowers individuals on the path to recovery. The
                  Recovery Village offers comprehensive treatment for dual
                  diagnosis based drug and alcohol rehab, eating disorder and
                  mental health treatments tailored to the patient’s specific
                  needs.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <a
                  href="https://www.alcoholhelp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={resourceLinkClassName}
                >
                  Alcohol Rehab Guide
                </a>
                <p className="mt-2 leading-relaxed">
                  It’s going to be okay. We’re here to help guide you or your
                  loved one through alcohol rehab and recovery. Get Started Now.
                  Advanced Treatment. Confidentiality. Free Hotline. Human
                  Support. Call to Find an Alcohol Rehab Facility Today.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <a
                  href="https://www.alternativetomeds.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={resourceLinkClassName}
                >
                  Alternative to Meds Center
                </a>
                <p className="mt-2 leading-relaxed">
                  Holistic Mental Health and Addiction Treatment Center. A
                  world-class licensed residential holistic behavioral mental
                  health and addiction treatment center, providing our residents
                  with outstanding compassionate care. We have many years of
                  experience helping thousands of people overcome withdrawal
                  from antidepressants, antipsychotics, benzodiazepines,
                  alcohol, opiates, and prescription drug medications.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <a
                  href="https://www.rehabspot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={resourceLinkClassName}
                >
                  Rehab Spot
                </a>
                <p className="mt-2 leading-relaxed">
                  Addiction takes so much away from you: your goals, your
                  dreams, your family, your life, and even the person who you
                  truly are. Luckily, you can take it all back. Contact a
                  dedicated treatment expert today to find a rehab center that
                  will get you back to the right spot.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <a
                  href="https://monarchshores.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={resourceLinkClassName}
                >
                  Monarch Shores
                </a>
                <p className="mt-2 leading-relaxed">
                  Monarch Shores is a licensed and certified luxury rehab center
                  in California, located right off the Pacific Coastal Highway
                  in Orange County. Specializing in providing individualized
                  treatment programs for every unique patient who comes through
                  our doors. The physician-led multidisciplinary treatment team
                  provides an integrated, holistic approach to treatment that
                  creates long-term effective sobriety. These addiction
                  treatment services include personalized therapy that
                  incorporates cognitive behavioral therapy (CBT), 12-step
                  addiction treatment, non 12-step treatment, dual diagnosis,
                  SMART Recovery, and holistic modalities such as acupuncture,
                  yoga, meditation, fitness training, recreational outings and
                  much more.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <a
                  href="https://rehabnet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={resourceLinkClassName}
                >
                  Drug Rehab Connections
                </a>
                <p className="mt-2 leading-relaxed">
                  The Drug Rehab Connections community is made up of those who
                  want to help and give back. We are here to share our stories
                  of recovery and hope as we begin the steps together towards
                  rehab and recovery.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <a
                  href="https://sunshinebehavioralhealth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={resourceLinkClassName}
                >
                  Sunshine Behavioural Health
                </a>
                <p className="mt-2 leading-relaxed">
                  At Sunshine Behavioral Health our goal is to help as many
                  people as possible in their struggles with substance abuse. We
                  aim to show people that not only is sobriety possible, but
                  repairing the damages of addiction can also be obtained.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <a
                  href="https://asanarecovery.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={resourceLinkClassName}
                >
                  Asana Recovery
                </a>
                <p className="mt-2 leading-relaxed">
                  Making the decision to get better or become sober is the first
                  big step in recovery. When you are ready, give us a call. One
                  of our caring admissions counselors will explain the addiction
                  treatment options available. They will also answer your
                  questions, address your concerns, and walk you through the
                  admissions process. If you are taking action on behalf of a
                  family member, friend, or loved one who you think needs our
                  help, call us and we will help you through the process of
                  getting them admitted for treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResourcesAddiction;
