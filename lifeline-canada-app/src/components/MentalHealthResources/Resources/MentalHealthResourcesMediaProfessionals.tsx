import React from 'react';
const PreventingSuicide = '/pdfs/WHO-guide-for-media.pdf';

const coverPhoto = '/assets/AdditionalResourceImages/mediaPros-600x337.webp';

const preventingSuicideImage = '/assets/AdditionalResourceImages/WHO.png';

const MentalHealthResourcesMediaProfessionals: React.FC = () => {
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
            <span className="!text-[#5f2d85]">Media Professionals</span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <main className="mt-6 !bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row-reverse sm:items-start gap-6">
            <img
              src={coverPhoto}
              alt="Media Professionals"
              className="w-full h-40 sm:w-[30vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
            />
            <p className="leading-relaxed">
              The factors contributing to suicide and its prevention are complex
              and not fully understood, but there is evidence that the media
              plays a significant role. On the one hand, vulnerable individuals
              may be influenced to engage in imitative behaviours by reports of
              suicide, particularly if the coverage is extensive, prominent,
              sensationalist and/or explicitly describes the method of suicide.
              On the other hand, responsible reporting may serve to educate the
              public about suicide, and may encourage those at risk of suicide
              to seek help.
            </p>
          </main>

          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Resources &amp; Guides for Media Professionals
            </h2>

            <div className="mt-6 grid gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={preventingSuicideImage}
                  alt="Preventing Suicide - A Resource for Media Professionals"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                />
                <div className="flex-1">
                  <a
                    href={PreventingSuicide}
                    className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                  >
                    Preventing Suicide - A Resource for Media Professionals
                  </a>
                  <p className="mt-2 leading-relaxed">
                    Suicide is a serious public health problem that demands our
                    attention, but its prevention and control, unfortunately,
                    are no easy task. State-of-the-art research indicates that
                    the prevention of suicide, while feasible, involves a whole
                    series of activities, ranging from the provision of the best
                    possible conditions for bringing up our children and youth,
                    through the effective treatment of mental disorders, to the
                    environmental control of risk factors. Appropriate
                    dissemination of information and awareness-raising are
                    essential elements in the success of suicide prevention
                    programmes.
                  </p>

                  <p className="mt-4 leading-relaxed">
                    In 1999 WHO launched SUPRE, its worldwide initiative for the
                    prevention of suicide. This booklet is the revised version
                    of one of a series of resources prepared as part of SUPRE
                    which are addressed to specific social and professional
                    groups that are particularly relevant to the prevention of
                    suicide. The revised booklet is the product of a continuing
                    collaboration between WHO and the International Association
                    for Suicide Prevention (IASP). It represents a link in a
                    long and diversified chain involving a wide range of people
                    and groups, including health professionals, educators,
                    social agencies, governments, legislators, social
                    communicators, law enforcers, families and communities.
                  </p>

                  <p className="mt-4 leading-relaxed">
                    By World Health Organization and International Association
                    for Suicide Prevention
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

export default MentalHealthResourcesMediaProfessionals;
