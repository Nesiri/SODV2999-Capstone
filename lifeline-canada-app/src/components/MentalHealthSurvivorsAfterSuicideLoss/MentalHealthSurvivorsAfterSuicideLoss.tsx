import React from "react";
import { Sparkles } from "lucide-react";
import HopeAndHealing from "../../assets/HopeandHealing.pdf";
import Klinic from "../../assets/After-a-Suicide-A-Practical-and-Personal-Guide-for-Survivors.pdf";
import SPRC from "../../assets/AfteraSuicideToolkitforSchools.pdf";
import Winnipeg from "../../assets/guide-for-early-responders.pdf";
import CanadianVer from "../../assets/Canada-Funeral-Directors.pdf";
import USAVer from "../../assets/SMA09-4375.pdf";

const MentalHealthSurvivorsAfterSuicideLoss: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-xs sm:text-sm font-medium text-purple-700">Mental Health Support</span>
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        After a Suicide Loss
                    </span>
                </h1>

                <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
                    <p className="leading-relaxed">
                        Immediately after a death by suicide, there are many practical matters that families will need
                        to attend to and questions they might have about what to do. Grief associated with a death by
                        suicide can be complicated, and also very different to what people experience following death by
                        other causes.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        Immediately after a death by suicide, people are often in shock and unable to describe or explain
                        their feelings or make meaning of what has happened. You may need time before you feel ready to
                        examine what has happened, how it has affected you, what it all means, and what you need in
                        order to begin healing.
                    </p>
                </main>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Guides &amp; Toolkits for After a Suicide Loss
                    </h2>

                    <div className="mt-6 space-y-4 sm:space-y-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href={HopeAndHealing} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Hope &amp; Healing: A Practical Guide for Survivors of Suicide, Family &amp; Friends
                            </a>
                            <p className="mt-3 leading-relaxed">
                                This is a practical guide to help you through… the first few moments, then the first few
                                hours, then the first few days, then the first few years…after the suicide of someone you
                                love.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                This guide has been written with the help of many suicide survivors and the health
                                professionals who work with them. We hope it will help you through this difficult time.
                                Please share it with others who may benefit from the information. The guide focuses on
                                the practical matters that survivors need to deal with after a suicide.
                            </p>
                            <p className="mt-3 leading-relaxed text-sm text-gray-600">
                                By the Suicide Response Initiative of the Calgary Health Region, with support from the
                                Alberta Mental Health Board. Adapted by the Centre for Applied Research in Mental Health
                                and Addiction, Faculty of Health Sciences, Simon Fraser University.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href={Klinic} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                After a Suicide: A Practical &amp; Personal Guide for Survivors of Suicide Loss
                            </a>
                            <p className="mt-3 leading-relaxed">
                                This handbook was written to help you through the death by suicide of your loved one. It
                                contains both practical and personal information, as well as a list of books, websites
                                and support groups, that we hope will help you through your grief. Different parts of
                                this resource may be of help to you at different times.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                Immediately after a death by suicide, there are many practical matters that families will
                                need to attend to and questions they might have about what to do. This resource starts
                                with addressing these practical matters. Grief associated with a death by suicide can be
                                complicated, and also very different to what people experience following death by other
                                causes. Immediately after a suicide death, people are often in shock and unable to
                                describe or explain their feelings or make meaning of what has happened. You may need
                                time before you feel ready to examine what has happened, how it has affected you, what it
                                all means, and what you need in order to begin healing.
                            </p>
                            <p className="mt-3 leading-relaxed text-sm text-gray-600">
                                Klinic Community Health Centre and the “After a Suicide” Handbook Advisory Committee is
                                indebted to the Alberta Health Services, Calgary Health Region, for sharing their
                                resource guide “Survivor of Suicide Handbook”, which helped inform this document.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href={SPRC} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                After a Suicide: A Toolkit for Schools
                            </a>
                            <p className="mt-3 leading-relaxed">
                                Suicide in a school community is tremendously sad, often unexpected, and can leave a
                                school with many uncertainties about what to do next. Faced with students struggling to
                                cope and a community struggling to respond, schools need reliable information, practical
                                tools, and pragmatic guidance.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                This toolkit was created to help schools determine what to do in the aftermath of a
                                suicide death, and how and when to do it. It is a highly practical resource for schools
                                facing real-time crises. While designed specifically to address the aftermath of suicide,
                                schools will find it useful following other deaths as well.
                            </p>
                            <p className="mt-3 leading-relaxed text-sm text-gray-600">
                                By The American Foundation for Suicide Prevention and the Suicide Prevention Resource
                                Center
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href={Winnipeg} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                A Guide for Early Responders Supporting Survivors Bereaved by Suicide
                            </a>
                            <p className="mt-3 leading-relaxed">
                                This resource is intended primarily for Early Responders such as: Police, Ambulance,
                                Fireﬁghters, Emergency Personnel, Health Care Providers, Spiritual Care Providers,
                                Medical Investigators, and Funeral Directors who all have close and often immediate
                                contact with survivors bereaved by a suicide loss. However, other service providers may
                                also ﬁnd this information helpful in the work they do.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                This guide offers information about suicide loss and will likely validate and enhance the
                                many helpful things early responders already do. The guide may also offer new insights
                                and guidance on suicide alertness highlighting prevention and intervention resources
                                available, since we know that survivors may be at greater risk of suicide as well.
                            </p>
                            <p className="mt-3 leading-relaxed text-sm text-gray-600">
                                Developed by the Winnipeg Suicide Prevention Network in partnership with the Canadian
                                Association for Suicide Prevention. This guide was adapted from “Supporting Survivors of
                                Suicide Loss, A Guide for Funeral Directors”
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <span className="text-xl font-semibold text-indigo-500">
                                For Funeral Directors: Supporting Survivors of Suicide Loss
                            </span>
                            <p className="mt-3 leading-relaxed">
                                Funeral directors and the funeral services industry serve as a vital line of first
                                response to those impacted by the profound and crippling effects of suicide loss. That’s
                                because suicide claims 80 percent more lives each year in our country than homicide.
                                These 32,000 self-inflicted deaths leave behind much more. Research shows that those
                                closest to someone who dies by suicide are themselves vulnerable to self-harm through
                                substance use disorders and violence that can be self-inflicted—and culminate in suicide.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                Because of its profound impact on our nation and its citizens, suicide has recently been
                                identified as a major public health threat, much like diabetes or heart disease. In your
                                close role with survivors of suicide loss in the immediate aftermath, you play a vital
                                and powerful role. And in partnership with other early responders, including clergy and
                                law enforcement, you can lessen the leveling blow that families are dealt when they lose
                                a loved one to suicide. It’s in this role that we applaud you and the vital work that
                                you do in helping prevent suicide in our country and communities.
                            </p>
                            <p className="mt-3 leading-relaxed text-sm text-gray-600">
                                By Center for Mental Health Services, Substance Abuse and Mental Health Services
                                Administration. U.S. Department of Health and Human Services, the Suicide Prevention
                                Resource Center.
                            </p>

                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <a
                                    href={CanadianVer}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center text-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold !text-white hover:bg-indigo-600 transition-colors"
                                >
                                    CANADIAN GUIDE
                                </a>
                                <a
                                    href={USAVer}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center text-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold !text-white hover:bg-indigo-600 transition-colors"
                                >
                                    AMERICAN GUIDE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">
                        Additional Links of Interest on this Site
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm text-center">
                            <a href="/resources/bereaved-support" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Bereaved Support
                            </a>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm text-center">
                            <a href="/resources/suicide-loss" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Survivors of Suicide Loss
                            </a>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm text-center">
                            <a href="/resources/organizations" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Resource Organizations
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthSurvivorsAfterSuicideLoss;