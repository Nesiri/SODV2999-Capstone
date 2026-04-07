import React from "react";

const coverPhoto = '/assets/AdditionalResourceImages/lbgtqHeart.jpg';

const genderCreativeKids = '/assets/AdditionalResourceImages/genderCreativeKids.png';   
const afterEllen = '/assets/AdditionalResourceImages/afterEllen.png';
const dailyStrength = '/assets/AdditionalResourceImages/dailyStrength.png';
const itGetsBetter = '/assets/AdditionalResourceImages/itGetsBetter.png';
const emptyClosets = '/assets/AdditionalResourceImages/emptyClosets.png';
const susansPlace = '/assets/AdditionalResourceImages/susansPlace.png';
const trevorSpace = '/assets/AdditionalResourceImages/trevorSpace.png';
const youthline = '/assets/AdditionalResourceImages/youthline.png';
const activeMinds = '/assets/AdditionalResourceImages/activeMinds.png';
const algtbic = '/assets/AdditionalResourceImages/algtbic.png';
const lesbianGayBisexual = '/assets/AdditionalResourceImages/healthyPeople.png';
const lgbtqStudentResource = '/assets/AdditionalResourceImages/Accredited.png';
const transLifeline = '/assets/AdditionalResourceImages/transLifeline.png';
const lgbtqAddictionGuide = '/assets/AdditionalResourceImages/drugRehab.png';

const lgbtqResources = [
    {
        title: "Gender Creative Kids",
        href: "https://gendercreativekids.com",
        image: genderCreativeKids,
        content:
            "(French/English) offers a variety of resources to support and educate creative children and their families. We work in various circles with young people who are questioning, non-binary or transgender. Support, information and networking opportunities for parents, students, teachers, educators, health professionals, researchers, activists and young people.",
    },
    {
        title: "After Ellen",
        href: "https://afterellen.com",
        image: afterEllen,
        content:
            "Works the lesbian/bi pop culture beat with a fun, feminist perspective on film, television, music, books, and sports. We also cover lifestyle issues like lesbian sex and dating, coming out, and our take on the current political climate as it affects our community.",
    },
    {
        title: "Daily Strength LGBT Online Support Groups",
        href: "https://www.dailystrength.org/categories/Lesbian_Gay",
        image: dailyStrength,
        content:
            "This community is dedicated to the challenges that gay men and lesbian women face, both between the partners in a relationship and from other.",
    },
    {
        title: "It Gets Better",
        href: "https://itgetsbetter.org",
        image: itGetsBetter,
        content:
            "Mission: To communicate to lesbian, gay, bisexual and transgender youth around the world that it gets better, and to create and inspire the changes needed to make it better for them.",
    },
    {
        title: "Empty Closets",
        href: "https://forum.emptyclosets.com/index.php",
        image: emptyClosets,
        content:
            "Offers a forum where you can join in with a wide range of discussions or start your own, a chat room, useful articles and links. Members can also create their own galleries and blogs.",
    },
    {
        title: "Susan's Place",
        href: "https://www.susans.org",
        image: susansPlace,
        content:
            "Transgender Resources. \"We stand at the crossroads of gender, balanced on the sharp edge of a knife.\"",
    },
    {
        title: "TrevorSpace",
        href: "https://www.trevorspace.org",
        image: trevorSpace,
        content:
            "Join a supportive lesbian, gay, bisexual, transgender, and questioning (LGBTQ) youth community on TrevorSpace",
    },
    {
        title: "Youthline",
        href: "https://www.youthline.ca",
        image: youthline,
        content:
            "Offers confidential and non-judgemental peer support through our telephone, text and chat services. Get in touch with a peer support volunteer from Sunday to Friday, 4:00PM to 9:30 PM.",
    },
    {
        title: "Active Minds",
        href: "https://activeminds.org",
        image: activeMinds,
        content:
            "Active Minds empowers students to change the perception about mental health on college campuses.",
    },
    {
        title: "ALGTBIC",
        href: "https://www.nationaleatingdisorders.org/resource-center/",
        image: algtbic,
        content:
            "Association for Lesbian, Gay, Bisexual & Transgender Issues in Counseling",
    },
    {
        title: "Lesbian, Gay, Bisexual, and Transgender Health",
        href: "https://health.gov",
        image: lesbianGayBisexual,
        content:
            "Improve the health, safety, and well-being of lesbian, gay, bisexual, and transgender (LGBT) individuals.",
    },
    {
        title: "LGBTQ Student Resource",
        href: "https://www.accreditedschoolsonline.org/resources/lgbtq-student-support/",
        image: lgbtqStudentResource,
        content:
            "Within this guide, LGBTQ students can learn about the resources and support systems available to them to assist in navigating both high school and college environments, which can often be the toughest of times.",
    },
    {
        title: "Trans Lifeline",
        href: "https://translifeline.org",
        image: transLifeline,
        content:
            "For transgender people experiencing a crisis. This includes people who may be struggling with their gender identity and are not sure that they are transgender. While our goal is to prevent self harm, we welcome the call of any transgender person in need.",
    },
    {
        title: "LGBTQ Addiction Guide",
        href: "https://www.drugrehab.com",
        image: lgbtqAddictionGuide,
        content:
            "A comprehensive, research-based awareness guide on a niche that is often overlooked - addiction in the LGBTQ community. Finding help with substance abuse is often more difficult for LGBTQ people, as many other obstacles are prevalent along with the fight with addiction.",
    },
];

const MentalHealthResourcesCommunitiesLGBTQ: React.FC = () => {
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
                        LGBTQ2S
                    </span>
                </h1>

                <div className="flex items-center gap-4 mt-3 mb-1">
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                </div>

                <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row-reverse sm:items-start gap-6">
                    <img
                        src={coverPhoto}
                        alt="LGBTQ2S Mental Health"
                        className="w-full h-40 sm:w-[30vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
                    />
                    <div className="flex-1">
                        <p className="leading-relaxed">
                            Despite the wide spectrum of experiences regarding mental health and overall well-being among lesbian, gay, bisexual, trans, queer-identified, and two-spirited individuals, mirroring the diversity seen within the broader Canadian population, they encounter elevated susceptibilities to specific mental health issues owing to the impact of discrimination and the underlying social determinants of health.
                        </p>

                        <p className="mt-4 leading-relaxed">
                            Socioeconomic elements hold significant sway over the mental health and general well-being of each individual, with their importance magnified for marginalized groups. Among the pivotal components contributing to the nurturing of positive mental health and well-being, three fundamental determinants come to the forefront: the fostering of social inclusiveness, the eradication of discrimination and violence, and ensuring access to financial resources. The echoes of these three factors resonate prominently across LGBTQ2S individuals and communities in Canada.
                        </p>
                    </div>
                </main>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-purple-700">Resources for LGBTQ2S</h2>

                    <div className="mt-6 grid gap-4 sm:gap-5">
                        {lgbtqResources.map((resource) => (
                            <div key={resource.title} className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                                <img
                                    src={resource.image}
                                    alt={resource.title}
                                    className="w-full h-36 sm:w-[22vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-contain bg-gray-50"
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

export default MentalHealthResourcesCommunitiesLGBTQ;