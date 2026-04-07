import React from "react";
const thinkBeforeYouShare = "/pdfs/TipSheet_Think_Before_You_Share.pdf";

const coverPhoto = '/assets/AdditionalResourceImages/indigenousMentalHealth-600x400.jpg';

const ifYouAreInCrisis = '/assets/AdditionalResourceImages/christina-wocintechchat-com-UTw3j_aoIKM-unsplash-2-600x476.png';

const nationalAboriginalYouthSuicidePreventionStrategy = '/assets/AdditionalResourceImages/governmentOfCanada.png';
const nationalCollaboratingCentreForIndigenousHealth = '/assets/AdditionalResourceImages/nationalCollaboratingCentre.png';
const firstNationsMentalWellnessContinuumFramework = '/assets/AdditionalResourceImages/governmentOfCanada.png';
const aboriginalYouthNetwork = '/assets/AdditionalResourceImages/AMN.png';
const stopFamilyViolence = '/assets/AdditionalResourceImages/governmentOfCanada.png';
const centreForSuicidePrevention = '/assets/AdditionalResourceImages/CentreForSuicidePrevention-1.png';
const thinkBeforeYouShareImg = '/assets/AdditionalResourceImages/thinkBeforeYouShare.png';

const indigenousResources = [
    {
        title: "National Aboriginal Youth Suicide Prevention Strategy",
        href: "https://www.sac-isc.gc.ca/eng/1576089685593/1576089741803",
        image: nationalAboriginalYouthSuicidePreventionStrategy,
        content:
            "Health Canada is committed to assisting First Nations and Inuit communities to achieve better health with several mental health-related programs and services:",
    },
    {
        title: "The National Collaborating Centre for Indigenous Health",
        href: "https://www.nccih.ca/en/",
        image: nationalCollaboratingCentreForIndigenousHealth,
        content:
            "A national Indigenous organization established in 2005 by the Government of Canada and funded through the Public Health Agency of Canada to support First Nations, Inuit, and Metis public health renewal and health equity through knowledge translation and exchange.",
    },
    {
        title: "First Nations Mental Wellness Continuum Framework - Summary Report",
        href: "https://www.sac-isc.gc.ca/eng/1576093687903/1576093725971",
        image: firstNationsMentalWellnessContinuumFramework,
        content:
            "A coordinated, comprehensive approach to mental health and addictions programming, which respects the model of whole health - physical, mental, emotional, spiritual, social, and economic well-being.",
    },
    {
        title: "Aboriginal Youth Network",
        href: "http://nativemaps.org/node/1550/",
        image: aboriginalYouthNetwork,
        content:
            "Check out their Health Centre for information covering a variety of health topics, including mental health, depression, suicide, eating disorders and addictions.",
    },
    {
        title: "Stop Family Violence",
        href: "https://www.canada.ca/en/public-health/services/health-promotion/stop-family-violence.html",
        image: stopFamilyViolence,
        content:
            "Family violence affects us all. It has negative social, financial and health impacts on those directly involved, as well as on their friends and family, colleagues, community and society at large.",
    },
    {
        title: "Centre for Suicide Prevention",
        href: "https://www.suicideinfo.ca",
        image: centreForSuicidePrevention,
        content:
            "Check out this link for more information on suicide prevention, and to learn about training opportunities.",
    },
    {
        title: "Think Before You Share PDF Guide",
        href: thinkBeforeYouShare,
        image: thinkBeforeYouShareImg,
        content:
            "To help Aboriginal teens make smart decisions when sharing online, Facebook, MediaSmarts and APTN partnered to translate the Think Before You Share guide into three common Aboriginal languages: Ojibwe, Cree and Inuktitut.",
    },
];

const MentalHealthResourcesCommunitiesIndigenous: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12 overflow-hidden">
            {/* Decorative background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
            </div>
            <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                    <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 bg-clip-text text-transparent">
                        Indigenous
                    </span>
                </h1>

                <div className="flex items-center gap-4 mt-3 mb-1">
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                </div>

                <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row-reverse sm:items-start gap-6">
                    <img
                        src={coverPhoto}
                        alt="Indigenous Mental Health"
                        className="w-full h-40 sm:w-[30vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                    />
                    <div className="flex-1">
                        <p className="leading-relaxed">
                            So many factors can influence your health, including your mental health. These factors are commonly known as the determinants of health and include such things as how much money you make, how much education you have and your relationships with family and friends. For instance, supportive relationships with family and friends can make you feel cared for, loved, esteemed and valued, and as a result, have a protective effect on your health.
                        </p>

                        <p className="mt-4 leading-relaxed">
                            Historical determinants, such as the legacy of residential schools, are believed to have shaped the mental health of Aboriginal people. A research project commissioned by the Aboriginal Healing Foundation found that 75 percent of the case files for a sample of Aboriginal residential school survivors contained mental health information with the most common mental health diagnoses being post-traumatic stress disorder, substance abuse disorder and major depression.
                        </p>
                    </div>
                </main>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-purple-700">If You Are In Crisis</h2>

                    <div className="mt-6 grid gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                                <img
                                src={ifYouAreInCrisis}
                                alt="If You Are In Crisis"
                                className="w-full h-40 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                            />
                            <div className="overflow-hidden">
                                <p className="leading-relaxed">
                                    If you&apos;re experiencing emotional distress and want to talk, call the First Nations and Inuit Hope for Wellness Help Line at 1-855-242-3310. It&apos;s toll-free and open 24 hours a day, 7 days a week.
                                </p>

                                <p className="mt-4 leading-relaxed">
                                    This is a National toll-free number that provides immediate, culturally competent, telephone crisis intervention counselling support for First Nations and Inuit, 24 hours a day, seven days a week. Counsellors can also work with callers to identify follow-up services they can access. Counselling is available in English and French and, upon request, in Cree, Ojibway, and Inuktut.
                                </p>

                                <p className="mt-4 leading-relaxed">
                                    Mental health and wellness encompass both the mental and emotional aspects of being - how you think and feel. Some signs of good mental health include:
                                </p>

                                <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
                                    <li>Knowing and taking pride in who you are.</li>
                                    <li>Enjoying life.</li>
                                    <li>Being able to form and maintain satisfying relationships.</li>
                                    <li>Coping with stress in a positive way.</li>
                                    <li>Striving to realize your potential.</li>
                                    <li>Having a sense of personal control.</li>
                                </ul>

                                <p className="mt-4 leading-relaxed">
                                    For more long term care, contact a{" "}
                                    <a href="https://www.sac-isc.gc.ca/eng/1584735005944/1585147200057" className="text-purple-700 underline underline-offset-4 hover:text-purple-800">
                                        First Nations and Inuit Health Regional Office.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-purple-700">
                        Indigenous Mental Health Resources
                    </h2>

                    <div className="mt-6 grid gap-4 sm:gap-5">
                        {indigenousResources.map((resource) => (
                            <div key={resource.title} className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                                <img
                                    src={resource.image}
                                    alt={resource.title}
                                    className="w-full h-36 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                                />
                                <div>
                                    <a
                                        href={resource.href}
                                        className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
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
        </section>
    );
};

export default MentalHealthResourcesCommunitiesIndigenous;