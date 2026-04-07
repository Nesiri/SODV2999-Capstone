import React from "react";


const coverPhoto = "/assets/AdditionalResourceImages/griefSupport-600x338.png";
const AfterTalk = "/assets/AdditionalResourceImages/AfterTalk.png";
const WhatsYourGrief = "/assets/AdditionalResourceImages/WhatsYourGrief.png";
const HomeAdvisor = "/assets/AdditionalResourceImages/HomeAdvisor.png";
const GriefRefuge = "/assets/AdditionalResourceImages/GriefRefuge.png";
const GriefWorks = "/assets/AdditionalResourceImages/GriefWorks.png";
const MindfullnessAndGrief = "/assets/AdditionalResourceImages/MindfullnessAndGrief.png";

const MentalHealthResourcesGrief: React.FC = () => {
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
                        Grief
                    </span>
                </h1>

                <div className="flex items-center gap-4 mt-3 mb-1">
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                </div>

                <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="flex-1">
                    <p className="leading-relaxed">
                        Although we all know that death is a part of everyone’s life, the sudden death of a loved one will still be an emotional and difficult experience. It’s important to understand that grief affects everyone differently. During the grieving process, you will likely experience several different emotional responses. Grief can affect both your psychological and physical well-being.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        The length of time it takes to accept the unexpected death of a loved one will be different for everyone. As you begin to heal and move forward along your journey of grief, it is quite common to feel overwhelmed. Although no one can truly understand the pain you may be feeling, there are certain measures you can take to make the bereavement process easier. Here are some helpful tips for dealing with grief and the sudden death of a loved one.
                    </p>
                    </div>
                    <img
                        src={coverPhoto}
                        alt="Grief support"
                        className="w-full h-40 sm:w-[30vw] sm:max-w-[18rem] sm:h-auto object-cover rounded-lg sm:shrink-0 order-first sm:order-last"
                    />
                </main>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Resources for Managing Grief
                    </h2>

                    <div className="mt-6 grid gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                            <div className="flex-1">
                            <a
                                href="https://www.aftertalk.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                After Talk
                            </a>
                            <p className="mt-2 leading-relaxed">
                                Write. Share. Always There. Online Grief Support: When a loved one leaves us, the grief can be overwhelming. Sometimes, the sudden “aloneness” is too much to bear. The conversations throughout the day with a spouse, the phone calls or emails with a friend or child—never again. The silence is almost unendurable. You yearn to continue the conversation.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                If you are coping with grief, you’ve come to the right place. Our online grief support site offers grief blogs, inspirational quotes, and interactive writing tools to help you manage your grief.
                            </p>
                            </div>
                            <img src={AfterTalk} alt="After Talk" className="w-full h-36 sm:w-[20vw] sm:max-w-[16rem] sm:h-auto object-contain rounded-lg sm:shrink-0 order-first sm:order-last" />
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                            <div className="flex-1">
                            <a
                                href="https://whatsyourgrief.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                What’s Your Grief?
                            </a>
                            <p className="mt-2 leading-relaxed">
                                Grief is a complex, heavy, frustrating, scary, enormous…ahem, big topic. It starts with a death and envelopes everyone from family to friends, to friends of family and friends. Not only is grief an emotional, logistical, and existential nightmare, but it is taxing. It requires us to navigate the world without someone important, deal with complex feelings and emotions, and figure out ways to move forward when everything seems kind of bleak. Our mission is to promote grief education, exploration, and expression in both practical and creative ways.
                            </p>
                            </div>
                            <img src={WhatsYourGrief} alt="What's Your Grief" className="w-full h-36 sm:w-[20vw] sm:max-w-[16rem] sm:h-auto object-contain rounded-lg sm:shrink-0 order-first sm:order-last" />
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                            <div className="flex-1">
                            <a
                                href="https://www.homeadvisor.com/cost/cleaning-services/estate-cleanout/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                Decluttering Your Home after the Loss of a Loved One
                            </a>
                            <p className="mt-2 leading-relaxed">
                                Losing someone we love is one of the most difficult life events we’ll ever face. When the loss is someone you share a home with, it can feel even more traumatic. A house full of the possessions that once belonged to your loved one can feel overwhelming, but the idea of letting them go may feel impossible.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                The hard truth is that while it’s a difficult process to declutter and organize your house after a loved one passes away, it’s an important step in moving forward. This guide will help you create a strategy for getting through the process as easily as possible.
                            </p>
                            </div>
                            <img src={HomeAdvisor} alt="Decluttering Your Home" className="w-full h-36 sm:w-[20vw] sm:max-w-[16rem] sm:h-auto object-contain rounded-lg sm:shrink-0 order-first sm:order-last" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Grief Apps
                    </h2>

                    <div className="mt-6 grid gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                            <img src={GriefRefuge} alt="Grief Refuge" className="w-28 h-auto object-contain rounded-lg sm:shrink-0" />
                            <div className="flex-1">
                            <h3 className="text-lg font-semibold text-purple-700">Grief Refuge</h3>
                            <p className="mt-2 leading-relaxed">
                                Grief Refuge is a daily companion to help navigate your grief journey. The app helps create safe and sacred space to explore grief related feelings, learn helpful ways to cope, and find peace and purpose after loss. Features include daily reflections, intention setting, stories from people who have found healing in their grief, and a tool for tracking ‘progress’. Grief Refuge is the source of solace and comfort for the lonely and isolating journey in grief.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.q85fa9ea2552.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-50"
                                >
                                    Google Play
                                </a>
                                <a
                                    href="https://apps.apple.com/us/app/grief-refuge/id1561406623"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-50"
                                >
                                    Apple Store
                                </a>
                            </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                            <img src={GriefWorks} alt="Grief Works" className="w-28 h-auto object-contain rounded-lg sm:shrink-0" />
                            <div className="flex-1">
                            <h3 className="text-lg font-semibold text-purple-700">Grief Works</h3>
                            <p className="mt-2 leading-relaxed">
                                Drawing on Julia Samuel’s 30 years of experience as a leading grief therapist and based off her best-selling book of the same name, the Grief Works app was specifically designed to effectively address the full range of emotions surrounding grief. Just like having the guidance of a therapist, the app pairs Samuel’s advice with actionable practices and exercises, gently nudging users to record and examine their own thoughts and feelings. The app also offers more than 30 interactive tools users can turn to whenever they’re overwhelmed by their emotions, including breathing visualisation exercises, guided meditations, daily gratitude check-ins, prompted evening reflections, and more. Learn more
                                <a
                                    href="https://www.griefworks.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-1 text-purple-700 font-medium underline"
                                >
                                    here
                                </a>
                                .
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">
                                <a
                                    href="https://play.google.com/store/apps/details?id=uk.co.psyt.gw&hl=en_GB&gl=US"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-50"
                                >
                                    Google Play
                                </a>
                                <a
                                    href="https://apps.apple.com/us/app/grief-works-self-care-love/id1558867513"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-50"
                                >
                                    Apple Store
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700 flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Recommended Reading
                    </h2>

                    <p className="mt-4 leading-relaxed">
                        Heather Stang, MA, C-IAYT, is the author of Mindfulness &amp; Grief and the guided journal, From Grief To Peace. She is the founder of the Mindfulness &amp; Grief Institute, where she facilitates Awaken, a mindfulness-based online grief group, offers individual sessions, and hosts the Mindfulness &amp; Grief Podcast.
                    </p>

                    <a
                        href="https://heatherstang.com/heather-stang/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center justify-center rounded-md border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-50"
                    >
                        Read Now
                    </a>
                    </div>
                    <img
                        src={MindfullnessAndGrief}
                        alt="Mindfulness and Grief"
                        className="w-full h-48 sm:w-[28vw] sm:max-w-[20rem] sm:h-auto rounded-lg sm:shrink-0 order-first sm:order-last"
                    />
                </div>
            </div>
        </section>
    );
};

export default MentalHealthResourcesGrief;
