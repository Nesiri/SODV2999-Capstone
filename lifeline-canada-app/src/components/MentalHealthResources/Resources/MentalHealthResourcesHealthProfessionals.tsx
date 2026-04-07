import React from "react";

const AResourceForGeneralPhysicians = "/pdfs/AResourceForGeneralPhysicians.pdf";
const SuicidePreventionCoalition = "/pdfs/Suicide_Prevention_Resource_Guidelines_Champlain_East.pdf";

const coverPhoto = '/assets/AdditionalResourceImages/HealthProfessionals.jpg';

const resourceForGeneralPhysiciansImage = '/assets/AdditionalResourceImages/WHO.png';
const organizationsManagementPersonnel = '/assets/AdditionalResourceImages/reachOutNow.png';

const MentalHealthResourcesHealthProfessionals: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

                <h1 className="mt-4 !text-3xl sm:!text-5xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        Health Professionals
                    </span>
                </h1>

                <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row-reverse sm:items-start gap-6">
                    <img
                        src={coverPhoto}
                        alt="Health Professionals"
                        className="w-full h-52 sm:w-64 sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                    />
                    <div className="flex-1">
                        <p className="leading-relaxed">
                            More people commit suicide each year than die in all the world&apos;s combined conflicts. The assistance of counselling professionals in the prevention of suicide, on a world wide scale, is critically and clearly needed.
                        </p>

                        <p className="mt-4 leading-relaxed">
                            Suicide results from a complex interaction of biological, genetic, psychological, sociological, and environmental factors. Improved community detection, referral, and management of suicidal behavior are important steps in suicide prevention. The critical challenge of such prevention is to identify people who are at risk and vulnerable; to understand the cicumstances that influence their self destructive behavior; and to effectively structure interventions. Consequently, counsellors need to develop community based initiatives for preventing as well as managing suicidal behavior.
                        </p>
                    </div>
                </main>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Resources &amp; Guides for Health Professionals
                    </h2>

                    <div className="mt-6 grid gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                            <img
                                src={resourceForGeneralPhysiciansImage}
                                alt="A Resource for General Physicians"
                                className="w-full h-40 sm:w-48 sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                            />
                            <div className="flex-1">
                                <a
                                    href={AResourceForGeneralPhysicians}
                                    className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                                >
                                    A Resource for General Physicians
                                </a>
                                <p className="mt-2 leading-relaxed">
                                    One of the worst things a physician has to face is the suicide of a patient. The common reactions experienced by physicians who have gone through such an event are disbelief, loss of confidence, anger and shame. The suicide of a patient can trigger feelings of professional inadequacy, doubts about one&apos;s competence and fear for one&apos;s reputation.
                                </p>
                                <p className="mt-4 leading-relaxed">
                                    In addition, physicians confront the enormous difficulty of dealing with the family and friends of the deceased. These resources are intended primarily for general physicians. Their objective is to outline the main disorders and other factors associated with suicide, and to provide information on the identification and management of suicidal patients.
                                </p>
                                <p className="mt-4 leading-relaxed">By World Health Organization</p>
                            </div>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                            <img
                                src={organizationsManagementPersonnel}
                                alt="A Resource Guide for Organizations, Management and Personnel"
                                className="w-full h-40 sm:w-48 sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                            />
                            <div className="flex-1">
                                <a
                                    href={SuicidePreventionCoalition}
                                    className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                                >
                                    A Resource Guide for Organizations, Management &amp; Personnel
                                </a>
                                <p className="mt-2 leading-relaxed">
                                    People at risk of suicide are seen in a wide variety of settings. Within the social and health services community, caregivers are likely to come into contact with suicidal clients frequently. This is true whether or not the specific mandate of the organization is the care of those at risk of suicide. In fact, since suicidal feelings are common among many depressed or troubled clients, it is undesirable to have specific services that deal with just suicide. Suicidal feelings are outward manifestations of other problems like abuse, low self-esteem, family violence, mental illness, substance abuse and tragic loss.
                                </p>
                                <p className="mt-4 leading-relaxed">
                                    The goal of this resource guide is to increase education and awareness on the topic of suicide and encourage organizations to implement suicide prevention protocols / guidelines that would assist employees to respond to at risk individuals. With increased knowledge, it is our hope that the incidence of suicide and suicide attempt in Canada will be reduced.
                                </p>
                                <p className="mt-4 leading-relaxed">By: Suicide Prevention Coalition Champlain East</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthResourcesHealthProfessionals;