import React from "react";

const coverPhoto = '/assets/AdditionalResourceImages/refugees-600x338.webp';

const igVitalHealth = '/assets/AdditionalResourceImages/igVitalHealth.png';
const resettlementAssistanceProgram = '/assets/AdditionalResourceImages/RSTP.png';
const refugeeServicesInCanada = '/assets/AdditionalResourceImages/governmentOfCanada.png';
const informationNewcomersCanTrust = '/assets/AdditionalResourceImages/settlementOrg.png';
const refugeeResettlementInCanada = '/assets/AdditionalResourceImages/UNHCR.png';

const refugeeResources = [
    {
        title: "IG Vital Health",
        href: "https://www.igvitalhealth.com",
        image: igVitalHealth,
        content:
            "Offers free psychotherapy assessment and treatment services for refugees. We then produce a detailed report by a licensed psychotherapist that gets added to refugee claimants' cases, making their cases stronger and increasing their chances of successfully passing the court hearing. We offer our services to all individuals (not only refugees) including children and youth.",
    },
    {
        title: "Resettlement Assistance Program",
        href: "https://www.rstp.ca/en/bvor/rap-rates/",
        image: resettlementAssistanceProgram,
        content:
            "The Resettlement Assistance Program (RAP) is a contribution program through which the Government of Canada provides assistance for resettled refugees to establish themselves in their new home. The program has two main components: income support and a range of immediate essential services.",
    },
    {
        title: "Refugee Services in Canada",
        href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada.html",
        image: refugeeServicesInCanada,
        content:
            "Canada has several programs to help refugees resettle in Canada: Health Care, Financial help, Rights as Refugees, Fraud Protection, Help Adjusting, Government Assistance and more.",
    },
    {
        title: "Information Newcomers Can Trust",
        href: "https://settlement.org",
        image: informationNewcomersCanTrust,
        content:
            "Moving to a new country can be exciting and challenging. Find information about what to expect when you arrive, residency and immigration status, and your rights and responsibilities in Canada. If you are new to Canada, you can find answers to common questions about your new home.",
    },
    {
        title: "Refugee Resettlement in Canada",
        href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada.html",
        image: refugeeResettlementInCanada,
        content:
            "The Office of the United Nations High Commissioner for Refugees (UNHCR), also known as the UN Refugee Agency, is a global organization dedicated to saving lives, protecting rights and building a better future for refugees, forcibly displaced communities and stateless people.",
    },
];

const MentalHealthResourcesCommunitiesRefugees: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        Refugees
                    </span>
                </h1>

                <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row-reverse sm:items-start gap-6">
                    <img
                        src={coverPhoto}
                        alt="Refugees"
                        className="w-full h-52 sm:w-64 sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                    />
                    <div className="flex-1">
                        <p className="leading-relaxed">
                            A refugee is a person who has fled their own country because they are at risk of serious human rights violations and persecution there, are unable to return, and need protection.
                        </p>

                        <p className="mt-4 leading-relaxed">
                            Canada has two refugee protection programs to help meet this need:
                        </p>

                        <ul className="mt-4 list-disc pl-6 space-y-2 leading-relaxed">
                            <li>
                                In-Canada Asylum Program - for people making refugee protection claims from within Canada
                            </li>
                            <li>
                                Refugee and Humanitarian Resettlement Program - for people who need protection from outside Canada
                            </li>
                        </ul>
                    </div>
                </main>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-purple-700">
                        Canadian Refugee Resources
                    </h2>

                    <div className="mt-6 grid gap-4 sm:gap-5">
                        {refugeeResources.map((resource) => (
                            <div key={resource.title} className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                                <img
                                    src={resource.image}
                                    alt={resource.title}
                                    className="w-full h-36 sm:w-48 sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
                                />
                                <div>
                                    <a
                                        href={resource.href}
                                        target="_blank"
                                        rel="noreferrer"
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

export default MentalHealthResourcesCommunitiesRefugees;