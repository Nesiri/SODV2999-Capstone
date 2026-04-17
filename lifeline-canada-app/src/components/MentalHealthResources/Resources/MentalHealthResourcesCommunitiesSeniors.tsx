import React from 'react';
const seniorDepressionGuide = '/pdfs/ccsmh_depressionBooklet.pdf';

const coverPhoto = '/assets/AdditionalResourceImages/Seniors-600x503.jpg';

const depressionInOlderAdults = '/assets/AdditionalResourceImages/CCSMH.png';
const agingAndSleep = '/assets/AdditionalResourceImages/optimumSleep.png';

const MentalHealthResourcesCommunitiesSeniors: React.FC = () => {
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
            <span className="!text-[#5f2d85]">Seniors</span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <main className="mt-6 !bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row-reverse sm:items-start gap-6">
            <img
              src={coverPhoto}
              alt="Seniors Mental Health"
              className="w-full h-40 sm:w-[30vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
            />
            <div className="flex-1">
              <p className="leading-relaxed">
                People are not only living longer, but also staying healthy and
                independent longer than ever before. We want all older adults -
                and their family members - to have high-quality information
                about health issues that might affect them. We believe that with
                this information, older adults will be empowered to make
                informed decisions about their health care and build effective
                relationships with their health care providers.
              </p>

              <p className="mt-4 leading-relaxed">
                Mental health problems are NOT a normal part of aging.
                Difficulties with mood, thinking and behaviour are not an
                inevitable part of aging. Nor are they signs of personal
                weakness. They are usually signs that something is wrong that
                requires attention from a health care professional.
              </p>
            </div>
          </main>

          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Seniors Mental Health Resources
            </h2>

            <div className="mt-6 grid gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={depressionInOlderAdults}
                  alt="Depression In Older Adults"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-normal !text-[#5f2d85]">
                    Depression In Older Adults: A Guide for Seniors and Their
                    Families
                  </h3>

                  <p className="mt-2 leading-relaxed">
                    The Canadian Coalition for Seniors' Mental Health (CCSMH)
                    works to ensure that seniors' mental health is recognized as
                    a key Canadian health and wellness issue. Working with
                    partners across the country, the CCSMH is busy facilitating
                    initiatives to enhance and promote seniors' mental health.
                  </p>

                  <p className="mt-4 leading-relaxed">
                    This guide is intended for information purposes only and is
                    not intended to be interpreted or used as a standard of
                    medical practice. Production of this guide has been made
                    possible through a financial contribution from the Public
                    Health Agencey of Canada.
                  </p>

                  <a
                    href={seniorDepressionGuide}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center rounded-lg bg-[#5f2d85] px-4 py-2 text-sm font-normal !text-white transition-colors hover:bg-[#5f2d85] hover:!text-white"
                  >
                    Download Guide
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={agingAndSleep}
                  alt="Aging and Sleep"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-normal !text-[#5f2d85]">
                    Aging and Sleep: Safe Sleeping Guide for Seniors &amp;
                    Caregivers
                  </h3>

                  <p className="mt-2 leading-relaxed">
                    A lot of things change for us as we age. And that includes
                    our sleep. Unfortunately, there are a lot of factors that
                    can affect the sleep of seniors negatively. Some are just a
                    natural consequence of aging as our sleep cycle changes.
                    Contrary to popular belief, the amount of sleep we need does
                    not change; it is our ability to get as much restorative
                    deep sleep as younger people that does. Fragmented sleep,
                    insomnia, and other sleep disorders are common in seniors.
                  </p>

                  <a
                    href="https://optimumsleep.com/aging-and-sleep"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center text-sm font-normal !text-[#5f2d85] underline underline-offset-4 hover:!text-[#5f2d85]"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResourcesCommunitiesSeniors;
