import React from "react";
import { Sparkles } from "lucide-react";

const MentalHealthResourcesAnxiety: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-xs sm:text-sm font-medium text-purple-700">Mental Health Support</span>
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        Anxiety
                    </span>
                </h1>

                <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
                    <p className="leading-relaxed">
                        It’s normal to feel anxious when facing a challenging situation, such as a job interview, a tough exam, or a blind date. But if your worries and fears seem overwhelming and interfere with your daily life, you may be suffering from an anxiety disorder.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        There are many different types of anxiety disorders and many effective treatments and self-help strategies. Once you understand your anxiety disorder, there are steps you can take to reduce your symptoms and regain control of your life.
                    </p>
                </main>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        What you can do:
                    </h2>

                    <div className="mt-6 grid gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <h3 className="text-xl font-semibold text-purple-700">Emotional Symptoms</h3>
                            <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
                                <li>Learn to recognize the signs, symptoms, and types of anxiety</li>
                                <li>Recognize that anxiety affects the whole body with a wide range of physical symptoms</li>
                                <li>Make it a priority to connect face-to-face with supportive people</li>
                                <li>Move your body frequently—don’t sit for more than an hour</li>
                                <li>Get the full amount of restful sleep that you require</li>
                                <li>Learn about and practice relaxation techniques</li>
                            </ul>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <h3 className="text-xl font-semibold text-purple-700">What’s the difference between normal stress and anxiety?</h3>
                            <p className="mt-3 leading-relaxed">
                                Anxiety is the body’s natural response to danger, an automatic alarm that goes off when you feel threatened, under pressure, or are facing a stressful situation.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                In moderation, anxiety isn’t always a bad thing. In fact, anxiety can help you stay alert and focused, spur you to action, and motivate you to solve problems. But when anxiety is constant or overwhelming, when it interferes with your relationships and activities, it stops being functional—that’s when you’ve crossed the line from normal, productive anxiety into the territory of anxiety disorders.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                <a
                                    href="https://www.helpguide.org/mental-health/anxiety"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-700 font-medium underline"
                                >
                                    HelpGuide.org
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Support Organizations for Anxiety Disorders
                    </h2>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        <div className="flex flex-col rounded-lg bg-slate-100/70 p-4">
                            <a
                                href="https://bouncebackbc.ca/what-is-bounceback/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-medium text-purple-700 hover:text-purple-800 underline underline-offset-4 text-center leading-tight"
                            >
                                BounceBack
                            </a>
                            <p className="mt-4 leading-relaxed">Access to workbooks, activities, videos or a trained coach who can provide up to 6 phone sessions.</p>
                        </div>

                        <div className="flex flex-col rounded-lg bg-slate-100/70 p-4">
                            <a
                                href="https://www.nami.org/nami-helpline/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-medium text-purple-700 hover:text-purple-800 underline underline-offset-4 text-center leading-tight"
                            >
                                National Alliance on Mental Illness
                            </a>
                            <p className="mt-4 leading-relaxed">U.S. Call: 1 (800) 950-NAMI (6264), Mon-Fri, 10am – 6pm, Eastern</p>
                        </div>

                        <div className="flex flex-col rounded-lg bg-slate-100/70 p-4">
                            <a
                                href="https://findyourtherapist.adaa.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-medium text-purple-700 hover:text-purple-800 underline underline-offset-4 text-center leading-tight"
                            >
                                Find a Therapist
                            </a>
                            <p className="mt-4 leading-relaxed">Anxiety disorder treatment providers in the U.S. Advice on selecting the right doctor/therapist.</p>
                        </div>

                        <div className="flex flex-col rounded-lg bg-slate-100/70 p-4">
                            <a
                                href="https://adaa.org/educational-resources"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-medium text-purple-700 hover:text-purple-800 underline underline-offset-4 text-center leading-tight"
                            >
                                Support Groups
                            </a>
                            <p className="mt-4 leading-relaxed">Support groups in the U.S., Canada &amp; Worldwide.</p>
                        </div>

                        <div className="flex flex-col rounded-lg bg-slate-100/70 p-4">
                            <a
                                href="https://www.nimh.nih.gov/health/topics/anxiety-disorders"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-medium text-purple-700 hover:text-purple-800 underline underline-offset-4 text-center leading-tight"
                            >
                                Anxiety Disorders
                            </a>
                            <p className="mt-4 leading-relaxed">Guide to the different types of anxiety disorders, their symptoms, and how to get help.</p>
                        </div>

                        <div className="flex flex-col rounded-lg bg-slate-100/70 p-4">
                            <a
                                href="https://www.betterhealth.vic.gov.au/conditionsandtreatments/anxiety"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-medium text-purple-700 hover:text-purple-800 underline underline-offset-4 text-center leading-tight"
                            >
                                Anxiety Treatment Options
                            </a>
                            <p className="mt-4 leading-relaxed">Many treatment options for anxiety, including exercise and breathing techniques.</p>
                        </div>

                        <div className="flex flex-col rounded-lg bg-slate-100/70 p-4">
                            <a
                                href="https://www.lundbeck.com/global/our-science/medical-education/lundbeck-institute"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-medium text-purple-700 hover:text-purple-800 underline underline-offset-4 text-center leading-tight"
                            >
                                Anxiety Disorders: Comorbidity
                            </a>
                            <p className="mt-4 leading-relaxed">Severe anxiety may be a risk factor for suicide. A significant number of people who committed suicide were diagnosed as having an anxiety disorder.</p>
                        </div>

                        <div className="flex flex-col rounded-lg bg-slate-100/70 p-4">
                            <a
                                href="https://pubmed.ncbi.nlm.nih.gov/12063146/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-medium text-purple-700 hover:text-purple-800 underline underline-offset-4 text-center leading-tight"
                            >
                                Suicide risk in patients with anxiety disorders
                            </a>
                            <p className="mt-4 leading-relaxed">Suicide risk in patients with anxiety disorders is higher than previously thought. Patients with anxiety disorders warrant explicit evaluation for suicide risk.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthResourcesAnxiety;