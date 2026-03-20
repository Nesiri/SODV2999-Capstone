import React from "react";
import { Sparkles } from "lucide-react";

// PDFs (change to const)
const GuideForEarlyResponders = "/pdfs/guide-for-early-responders.pdf";
const ManualForFirstResponders = "/pdfs/Manual-for-First-Responders.pdf";
const FirstResponders = "/pdfs/First-Responders-Toolkit-WEB.pdf";

const MentalHealthResourcesFirstResponders: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-xs sm:text-sm font-medium text-purple-700">Mental Health Support</span>
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        First Responders
                    </span>
                </h1>

                <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
                    <p className="leading-relaxed">
                        First responders, such as police officers, firefighters and ambulance and paramedics are increasingly called upon in situations involving mental health emergencies, such as suicidal crises. Consequently, they occupy an important role in community-based suicide prevention: by ensuring that persons with mental disorders receive appropriate mental health treatment, by removing access to lethal means from people at high risk of suicide, and by recognizing the suicide potential in situations involving domestic disputes or where potentially deadly force is exercised. First responders are in a unique position to determine the course and outcome of suicidal crises.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        Additionally, First responders are at least twice as likely to suffer from PTSD caused by witnessing or experiencing actual or threatened death, serious injury or violence.
                    </p>
                </main>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Guides &amp; Toolkits for First Responders
                    </h2>

                    <div className="mt-6 grid gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a
                                href={GuideForEarlyResponders}
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                A Guide for Early Responders Supporting Survivors Bereaved by Suicide
                            </a>
                            <p className="mt-2 leading-relaxed">
                                This resource is intended primarily for Early Responders such as: Police, Ambulance, Firefighters, Emergency Personnel, Health Care Providers, Spiritual Care Providers, Medical Investigators, and Funeral Directors who all have close and often immediate contact with survivors bereaved by a suicide loss. However, other service providers may also find this information helpful in the work they do.
                            </p>
                            <p className="mt-4 leading-relaxed">
                                This guide offers information about suicide loss and will likely validate and enhance the many helpful things early responders already do. The guide may also offer new insights and guidance on suicide alertness highlighting prevention and intervention resources available, since we know that survivors may be at greater risk of suicide as well.
                            </p>
                            <p className="mt-4 leading-relaxed">Developed by the Winnipeg Suicide Prevention Network in partnership with the Canadian Association for Suicide Prevention</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a
                                href={ManualForFirstResponders}
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                Information For First Responders in Mental Health or Addictions Crises
                            </a>
                            <p className="mt-2 leading-relaxed">
                                This document is intended for use by first responders to a mental health crisis, who may include the following:
                            </p>
                            <p className="mt-4 leading-relaxed">
                                I Emergency Services: RCMP - Ambulance - Fire
                                <br />
                                II School Faculty
                                <br />
                                III Religious Leaders
                                <br />
                                IV Workplace Administration
                                <br />
                                V Private Individuals
                            </p>
                            <p className="mt-4 leading-relaxed">
                                <a href="https://www.forwardhouse.com" className="text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                    By Forward House Community Society
                                </a>
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a
                                href={FirstResponders}
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                First Responders, Trauma &amp; Suicide
                            </a>
                            <p className="mt-2 leading-relaxed">
                                First responders-paramedics, firefighters, police-are considered to be at greater risk for Acute Stress Disorder and Post Traumatic Stress Disorder than most other occupations. This is because their everyday duties routinely encounter "traumatic stressors"
                            </p>
                            <p className="mt-4 leading-relaxed">
                                Some researchers believe that experiencing PTSD is also a high-risk factor for subsequent suicidal behaviours.
                            </p>
                            <p className="mt-4 leading-relaxed">Centre for Suicide Prevention</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Resources &amp; Links for First Responders
                    </h2>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a
                                href="https://www.cdc.gov/niosh/bulletin/index.html"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                Suicides Among First Responders: A Call to Action
                            </a>
                            <p className="mt-2 leading-relaxed">
                                In 2019, there were 47,500 suicide fatalities in the U.S. and an estimated 1.4 million suicide attempts. The causes of suicide are complex, with many personal, socio-demographic, medical, and economic factors playing a role. One potential risk factor is occupation and several occupations appear to be at higher risk for suicide, including first responders
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a
                                href="https://www.youtube.com/watch?v=ECarCNxgM-4"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                Preventing Suicide: Information for Emergency Responders
                            </a>
                            <p className="mt-2 leading-relaxed">
                                Emergency workers are often the first on the scene to a mental health crisis or suicide attempt. They have a pivotal role to play in what happens from there on.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a
                                href="https://www.youtube.com/watch?v=UGKHx6dX1EY"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                I Don&apos;t Want to Lose Any More Friends: First Responders are Not Alone
                            </a>
                            <p className="mt-2 leading-relaxed">
                                Officer Victor Machese has spent more than 15 years working in law enforcement. In the past few years, he has lost five of his close friends on the force due to suicide. It was these losses that moved Victor to do more to stem the tide of first responder deaths by suicide. This is his story and a message to others that there is help and a path to wellness and recovery.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a
                                href="https://www.firstrespondersfirst.ca"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                PTSD Resource Toolkit
                            </a>
                            <p className="mt-2 leading-relaxed">
                                First responders are at least twice as likely to suffer from PTSD. There&apos;s no need to suffer in silence. The help you need is here. This website offers resources and services for the First Responder community to understand the various steps of a PTSD program from managing a crisis through to implementing best practices into an existing program.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthResourcesFirstResponders;