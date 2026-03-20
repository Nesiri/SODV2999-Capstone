import React from "react";
import { Sparkles } from "lucide-react";

const selfManagementLinks = [
    {
        title: "Suicide…Read This First",
        href: "https://metanoia.org/suicide/",
        content:
            "The original web page written by Martha Ainsworth. A suicide prevention classic, this simple essay has been saving lives on the internet since 1995. As powerful today as when it was first created.",
    },
    {
        title: "Coping & Self-Care",
        href: "https://www.crisiscentre.bc.ca/training/self-care-for-mental-health/",
        content:
            "There are many things you can do to help reduce your feelings of stress and emotional pain. This section on coping strategies and dealing with stress will be helpful to you.",
    },
    {
        title: "Coping With Suicidal Thoughts",
        href: "/resources/suicidal-thoughts",
        content:
            "Coping with Suicidal Thoughts is intended for individuals who are currently experiencing suicidal ideation and/or have had a plan or made an attempt to hurt themselves.",
    },
    {
        title: "Get Self-Help – Coping with Suicidal Thoughts",
        href: "https://getselfhelp.co.uk/suicidal-thoughts-a-guide/",
        content:
            "This website provides CBT self help and therapy resources, including worksheets and information sheets and self help audios.",
    },
    {
        title: "NowMattersNow",
        href: "https://nowmattersnow.org/",
        content:
            "Here we offer strategies to survive and build more manageable and meaningful lives",
    },
    {
        title: "Reasons to go on Living",
        href: "https://www.thereasons.ca",
        content:
            "Canadian research project archiving suicide attempt stories along with why the survivor is now glad to be alive",
    },
    {
        title: "Reasons for Staying Alive",
        href: "http://blog.prevent-suicide.org.uk/2013/04/reasons-for-staying-alive-when-you-are.html",
        content:
            "Grassroots reasons for staying alive when you are considering suicide.",
    },
    {
        title: "Wellness Workshop",
        href: "https://wellnessworkshop.ie",
        content:
            "The Wellness Workshop online is a resource to help you on your personal journey to Mental health Wellness. The workshop is for everyone and is designed to give you tools to both improve your mental wellness and to maintain your wellness.",
    },
    {
        title: "Self-help Resources",
        href: "https://www.heretohelp.bc.ca/resource-library",
        content: "Mental Health Info in 11 Languages",
    },
];

const MentalHealthResourcesSelfManagement: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-xs sm:text-sm font-medium text-purple-700">Mental Health Support</span>
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        Self Management
                    </span>
                </h1>

                <div className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
                    <p className="leading-relaxed">
                        Self-management is intended to empower individuals in their recovery by providing the skills and confidence they need to take active steps in recognizing and managing their own health problems. When it comes to your mental health, self-care can help you manage stress, lower your risk of illness, and increase your energy. Even small acts of self-care in your daily life can have a big impact.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        Below are some strategies, research, information and resources for self managing stress, emotional pain, depression, anxiety & suicidal thoughts.
                    </p>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Some Great Self Management Links
                    </h2>

                    <div className="mt-6 grid gap-4 sm:gap-5">
                        {selfManagementLinks.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm"
                            >
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                                >
                                    {item.title}
                                </a>
                                <p className="mt-2 text-gray-700 leading-relaxed">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthResourcesSelfManagement;