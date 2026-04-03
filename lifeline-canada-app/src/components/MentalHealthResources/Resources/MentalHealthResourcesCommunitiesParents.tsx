import React from "react";
const youthAtRisk = "/pdfs/Youth-at-Risk-Parents.pdf";
const childMentalHealth = "/pdfs/Coping-When-Your-Child-Has-Mental-Health-Challenges-A-Guide-for-Parents.pdf";
const navigatingCyberbullying = "/pdfs/helping-kids-navigate-cyberbullying-parents-guide-en.pdf";

const coverImage = "/assets/AdditionalResourceImages/pexels-antoni-shkraba-5571731-1-600x423.png";

const communicatingWithATeenager = '/assets/AdditionalResourceImages/Mother-and-daughter-talking-seriously.jpg';
const beforeBeginningTheConversation = '/assets/AdditionalResourceImages/suicide-talking-teen-600x308.jpg';
const skills = '/assets/AdditionalResourceImages/Talk-to-Teen_Blog-600x400.png';
const affirmingYourChild = '/assets/AdditionalResourceImages/SuicideRisk600.jpg';

const childHasMentalHealthChallenges = '/assets/AdditionalResourceImages/pleo.png';
const helpingKidsNavigateCyberbullying = '/assets/AdditionalResourceImages/mediaSmarts.png';
const teenBodyImage = '/assets/AdditionalResourceImages/freeDerm.png';

const MentalHealthResourcesCommunitiesParents: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        Parents
                    </span>
                </h1>

                <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
                    <img
                        src={coverImage}
                        alt="Parents"
                        className="float-right ml-6 mb-4 w-64 sm:w-80 rounded-xl shadow-md object-cover"
                    />
                    <p className="leading-relaxed">
                        Communication is the first step in suicide prevention. Perhaps you have noticed your son or daughter seems very down lately, not eating or doing any of the things he enjoys. Maybe she is talking about dying, not wanting to live anymore. You are concerned but not sure whether to take her seriously. You are afraid if you bring up the subject it will be painful or, even worse, you might put ideas about suicide in your child&apos;s head. Your own discomfort with suicide and the stigma associated with it may also be complicating matters. What do you do?
                    </p>

                    <p className="mt-4 leading-relaxed">
                        First of all, accept the possibility that your child may be at risk of suicide. Secondly, ask the questions - Are you thinking about suicide? Are you thinking about killing yourself? Do you have a plan? Do you have the means to do it (a way to do it)? If your child answers yes to these questions, you need to get help immediately. Do not leave your child alone.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        In asking these questions you will not make your child suicidal. By expressing concern you open the door for communicating with your child, giving her permission to talk about her feelings. You show him that there is strength in asking for help.
                    </p>
                    <div className="clear-both" />
                </main>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-purple-700">
                        Communicating With Your Child About Suicide
                    </h2>

                    <div className="mt-6 grid gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img
                                src={communicatingWithATeenager}
                                alt="Communicating with a teenager"
                                className="float-right ml-6 mb-4 w-48 sm:w-64 rounded-xl shadow-md object-cover"
                            />
                            <p className="leading-relaxed">
                                Communicating with a teenager who is in crisis and may be thinking about suicide is difficult, especially if it is your own child. You will need to reassure her that help is available and that you will assist her in finding the right help. Be careful you do not take over and try to "fix" things for your child.
                            </p>

                            <p className="mt-4 leading-relaxed">
                                Making significant changes can be a long process and there will be some bumps along the way. The journey begins with a conversation. It will take courage, time, space, patience and skill to start this conversation.
                            </p>

                            <img
                                src={beforeBeginningTheConversation}
                                alt="Before beginning the conversation"
                                className="float-right ml-6 mb-4 w-48 sm:w-64 rounded-xl shadow-md object-cover"
                            />

                            <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
                                <li>Make a time to have the conversation when you will not be interrupted.</li>
                                <li>Be flexible about the amount of time that you set aside.</li>
                                <li>Choose a place where there will be no distractions.</li>
                                <li>Choose a place that offers comfort and privacy.</li>
                                <li>Before beginning the conversation, clear your mind of other issues and calm yourself.</li>
                                <li>Remember that your child may talk about things that are difficult to hear. Try not to react with anger, shock or frustration. Do not interrupt or provide unwanted advice.</li>
                                <li>Continue to ask questions until you have a clear understanding of what your child is saying. Do not become frustrated if things are not immediately apparent or reasonable to you.</li>
                                <li>Maintain a positive outlook.</li>
                            </ul>
                            <div className="clear-both" />
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img
                                src={skills}
                                alt="Skills"
                                className="float-right ml-6 mb-4 w-48 sm:w-64 rounded-xl shadow-md object-cover"
                            />
                            <h3 className="text-lg font-semibold text-gray-900">Skills</h3>

                            <p className="mt-2 leading-relaxed">
                                Good communication requires both talking and active listening. This is the art of responding to someone in a way that makes them feel heard. Show your child acceptance, that he is worth listening to and that he is being heard.
                            </p>

                            <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
                                <li>Maintain eye contact and don&apos;t be afraid to show affection.</li>
                                <li>Start the conversation with "I" statements. For example, "I heard you say you don&apos;t want to be here or that everyone would be better off without you. I am really concerned and want to talk more about it with you."</li>
                                <li>Use open-ended and direct questions to get your child talking. When necessary, encourage your child to elaborate or clarify by saying things like "Tell me more..." or "I am not sure what you mean..."</li>
                                <li>Ensure your tone of voice matches your words and body language. Crossing your arms, avoiding eye contact or turning away are signals that you are not comfortable and open to having the conversation.</li>
                                <li>Don&apos;t get angry. Anger will not help you make the best decisions and will interfere with problem solving.</li>
                                <li>Remember your child is relaying her feelings from her perspective. What you may consider a minor issue may be much more critical to your child. Even though difficult, try looking at the world from his perspective.</li>
                                <li>Be sincere in affirming your child&apos;s feelings and what they say. Let them know their problems are important.</li>
                                <li>Identify any positive thoughts your child has towards life and use these as stepping stones to exploring other solutions to their problems.</li>
                            </ul>

                            <p className="mt-4 font-semibold text-gray-900">Where your child is coming from...</p>

                            <img
                                src={affirmingYourChild}
                                alt="Affirming your child"
                                className="float-right ml-6 mb-4 w-48 sm:w-64 rounded-xl shadow-md object-cover"
                            />

                            <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
                                <li>Your child may be embarrassed, frightened, or ashamed.</li>
                                <li>The stigma associated with suicide and mental illness is far reaching and may present a barrier to seeking help.</li>
                                <li>Even though your child may look like an adult, he may not have the emotional maturity or literacy to explain or describe his feelings. She may need help in expressing herself.</li>
                                <li>Recognize that your child may not have the life experience or maturity to move beyond the present and cope with what seems like a major life crisis. He may not be able to see that his situation can change for the better.</li>
                                <li>Be alert to your child&apos;s nonverbal cues too. Pay attention to gestures, facial expressions and tone of voice... they may convey doubt about your child&apos;s true thoughts and feelings. Trust your instincts.</li>
                            </ul>
                            <div className="clear-both" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-purple-700 text-center">Safety Tip</h2>

                    <div className="mt-6 rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm text-center">
                        <p className="leading-relaxed">
                            If you feel you cannot have this conversation, please seek help from an outside source - another family member, your family doctor, a member of the clergy from your place of worship, a counsellor or a teacher. You could also call a{" "}
                            <a href="/in-crisis" className="text-purple-700 underline underline-offset-4 hover:text-purple-800">
                                Crisis Line
                            </a>
                            {" "}
                            for third party advice.
                        </p>

                        <p className="mt-4 leading-relaxed">
                            Continue Reading - Download Free Communicating With Your Child About Suicide
                        </p>

                        <p className="mt-2 text-sm font-medium text-gray-600">By Centre for Suicide Prevention</p>

                        <a
                            href={youthAtRisk}
                            className="mt-5 inline-flex items-center rounded-lg bg-purple-700 px-4 py-2 text-sm font-semibold !text-white transition-colors hover:bg-purple-800 hover:!text-white"
                        >
                            Download
                        </a>
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-purple-700">
                        Additional Resources for Parents
                    </h2>

                    <div className="mt-6 grid gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img
                                src={childHasMentalHealthChallenges}
                                alt="Coping When Your Child Has Mental Health Challenges"
                                className="float-left mr-6 mb-4 w-48 sm:w-64 h-48 rounded-xl shadow-md object-contain bg-gray-50"
                            />
                            <div className="overflow-hidden">
                            <a
                                href={childMentalHealth}
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                Coping When Your Child Has Mental Health Challenges A Guide for Parents
                            </a>

                            <p className="mt-2 leading-relaxed">
                                Our greatest wish is to see our children thrive. It can be very stressful time for parents whose kids are struggling with mental health challenges. We worry about their well-being and their safety. We are concerned about their future. We struggle to understand what is happening and because of a general lack of knowledge about mental health issues, our friends and family members sometimes don&apos;t understand the challenges we face. As a result, it can be difficult for them to support us. We may devote so much of our time and energy to our ill child that other family members feel neglected and family dynamics become strained, adding to our own stress levels.
                            </p>
                            </div>
                            <div className="clear-both" />
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img
                                src={helpingKidsNavigateCyberbullying}
                                alt="Helping Our Kids Navigate Cyberbullying"
                                className="float-left mr-6 mb-4 w-48 sm:w-64 h-48 rounded-xl shadow-md object-contain bg-gray-50"
                            />
                            <div className="overflow-hidden">
                            <a
                                href={navigatingCyberbullying}
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                Helping Our Kids Navigate Cyberbullying: A Parent&apos;s Guide
                            </a>

                            <p className="mt-2 leading-relaxed">
                                Parents play an extremely important role in helping their children successfully navigate cyberbullying.
                            </p>

                            <p className="mt-4 leading-relaxed">
                                In fact, according to MediaSmarts&apos; research, parents are the first place kids turn to for help with online meanness, and two thirds of kids say that talking to their parents makes the situation better. In order to support parents so they can help their kids effectively, we&apos;ve created this guide which is chock full of information on cyberbullying and practical tips to recognize and address this issue in their kids&apos; lives.
                            </p>
                            </div>
                            <div className="clear-both" />
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img
                                src={teenBodyImage}
                                alt="Teen Body Image and Self-Esteem"
                                className="float-left mr-6 mb-4 w-48 sm:w-64 h-48 rounded-xl shadow-md object-contain bg-gray-50"
                            />
                            <div className="overflow-hidden">
                            <a
                                href="https://www.freederm.co.uk/body-image-and-self-esteem/"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                Teen Body Image and Self-Esteem - A Practical Guide for Parents
                            </a>

                            <p className="mt-2 leading-relaxed">
                                Having teenagers isn&apos;t easy. They&apos;re going through a lot of changes very quickly, dealing with new pressures, and growing up in a world you might not be able to relate to.
                            </p>

                            <p className="mt-4 leading-relaxed">
                                Body image is just one of the issues they&apos;re likely to deal with. This guide will focus on practical advice for improving their self-esteem and supporting them as they grow up.
                            </p>
                            </div>
                            <div className="clear-both" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthResourcesCommunitiesParents;