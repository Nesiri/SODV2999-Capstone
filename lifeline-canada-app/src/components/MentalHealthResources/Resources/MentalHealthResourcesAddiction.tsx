import React from "react";
import { Sparkles } from "lucide-react";

const MentalHealthResourcesAddiction: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-xs sm:text-sm font-medium text-purple-700">Mental Health Support</span>
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        Addiction
                    </span>
                </h1>

                <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
                    <p className="leading-relaxed">
                        Although addiction is not technically considered a mental illness, it is a medical disorder that often co-occurs with mental illnesses. Some illnesses like depression and anxiety can be the root causes of substance abuse. One of the main characteristics of addiction is that people are compelled to use rather than doing so through choice.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        The symptoms of depression can drive some people toward substance use to cope with their condition. However, consuming drugs or alcohol to self-medicate can increase the risk for addiction. Depression can raise the risk of substance abuse, as chemical intoxicants can be a way to self-medicate by numbing feelings of despair. This chemical intoxication can make depressive episodes more severe, thereby exacerbating self-destructive behavior and pessimistic thoughts.
                    </p>
                </main>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Canadian Addiction Helplines
                    </h2>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.albertahealthservices.ca/findhealth/service.aspx?Id=1008399" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Alberta</a>
                            <p className="mt-2 leading-relaxed">1-866-332-2322<br />780-427-7164</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.healthlinkbc.ca/mental-health-and-substance-use/substance-use" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">British Columbia</a>
                            <p className="mt-2 leading-relaxed">1-800-663-1441<br />604-660-9382</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://sharedhealthmb.ca/services/mental-health/" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Manitoba</a>
                            <p className="mt-2 leading-relaxed">Adult: 1-855-662-6605<br />Youth: 1-877-710-3999<br />204-944-6200</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.gnb.ca/en/topic/health-wellness/mental-health.html" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">New Brunswick</a>
                            <p className="mt-2 leading-relaxed">1-866-355-5550</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.gov.nl.ca/hcs/mentalhealth-committee/mentalhealth/" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Newfoundland &amp; Labrador</a>
                            <p className="mt-2 leading-relaxed">1-888-737-4668<br />709-729-3658</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.hss.gov.nt.ca/en/contact/community-counsellor" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Northwest Territories</a>
                            <p className="mt-2 leading-relaxed">1-800-661-0844<br />867-873-7037</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://novascotia.ca/dhw/addictions/addiction-services-offices.asp" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Nova Scotia</a>
                            <p className="mt-2 leading-relaxed">1-866-340-6700<br />902-424-8866</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://nunavuthelpline.ca" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Nunavut</a>
                            <p className="mt-2 leading-relaxed">1-800-265-3333<br />867-979-3333</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://connexontario.ca" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Ontario</a>
                            <p className="mt-2 leading-relaxed">1-866-531-2600</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.princeedwardisland.ca/en/information/health-pei/help-for-addiction-and-substance-use?utm_source=redirect&utm_medium=url&utm_campaign=addiction-services" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Prince Edward Island</a>
                            <p className="mt-2 leading-relaxed">1-888-299-8399<br />902-368-4120</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Quebec</a>
                            <p className="mt-2 leading-relaxed">1-800-265-2626<br />514-527-2626</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.saskatchewan.ca/residents/health/accessing-health-care-services/healthline" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Saskatchewan</a>
                            <p className="mt-2 leading-relaxed">811 or 1-877-800-0002<br />306-766-6600</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://yukon.ca/en/mental-wellness" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Yukon</a>
                            <p className="mt-2 leading-relaxed">1-800-661-0408 Ext 5777<br />After hours:<br />1-800-661-0408 Ext. 8473<br />867-667-5777</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a
                                href="https://canadiancentreforaddictions.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                Canadian Centre for Addictions
                            </a>
                            <p className="mt-2 leading-relaxed">Going beyond 12 steps and providing unlimited one-on-one sessions to help you get better with a program that is fully tailored to you and your situation.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        US Addiction Centres
                    </h2>

                    <div className="mt-6 grid gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.addictioncenter.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Drug Rehab – Addiction Center</a>
                            <p className="mt-2 leading-relaxed">No matter where you live in the U.S., there is a drug rehab center that can help you overcome your addiction. We can help you find a treatment center based on your location, budget and specific needs and get you started immediately.</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.therecoveryvillage.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">The Recovery Village</a>
                            <p className="mt-2 leading-relaxed">Our advanced approach to addiction treatment and drug treatment empowers individuals on the path to recovery. The Recovery Village offers comprehensive treatment for dual diagnosis based drug and alcohol rehab, eating disorder and mental health treatments tailored to the patient’s specific needs.</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.alcoholhelp.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Alcohol Rehab Guide</a>
                            <p className="mt-2 leading-relaxed">It’s going to be okay. We’re here to help guide you or your loved one through alcohol rehab and recovery. Get Started Now. Advanced Treatment. Confidentiality. Free Hotline. Human Support. Call to Find an Alcohol Rehab Facility Today.</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.alternativetomeds.com/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Alternative to Meds Center</a>
                            <p className="mt-2 leading-relaxed">Holistic Mental Health and Addiction Treatment Center. A world-class licensed residential holistic behavioral mental health and addiction treatment center, providing our residents with outstanding compassionate care. We have many years of experience helping thousands of people overcome withdrawal from antidepressants, antipsychotics, benzodiazepines, alcohol, opiates, and prescription drug medications.</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.rehabspot.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Rehab Spot</a>
                            <p className="mt-2 leading-relaxed">Addiction takes so much away from you: your goals, your dreams, your family, your life, and even the person who you truly are. Luckily, you can take it all back. Contact a dedicated treatment expert today to find a rehab center that will get you back to the right spot.</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://monarchshores.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Monarch Shores</a>
                            <p className="mt-2 leading-relaxed">Monarch Shores is a licensed and certified luxury rehab center in California, located right off the Pacific Coastal Highway in Orange County. Specializing in providing individualized treatment programs for every unique patient who comes through our doors. The physician-led multidisciplinary treatment team provides an integrated, holistic approach to treatment that creates long-term effective sobriety. These addiction treatment services include personalized therapy that incorporates cognitive behavioral therapy (CBT), 12-step addiction treatment, non 12-step treatment, dual diagnosis, SMART Recovery, and holistic modalities such as acupuncture, yoga, meditation, fitness training, recreational outings and much more.</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://rehabnet.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Drug Rehab Connections</a>
                            <p className="mt-2 leading-relaxed">The Drug Rehab Connections community is made up of those who want to help and give back. We are here to share our stories of recovery and hope as we begin the steps together towards rehab and recovery.</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://sunshinebehavioralhealth.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Sunshine Behavioural Health</a>
                            <p className="mt-2 leading-relaxed">At Sunshine Behavioral Health our goal is to help as many people as possible in their struggles with substance abuse. We aim to show people that not only is sobriety possible, but repairing the damages of addiction can also be obtained.</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://asanarecovery.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Asana Recovery</a>
                            <p className="mt-2 leading-relaxed">Making the decision to get better or become sober is the first big step in recovery. When you are ready, give us a call. One of our caring admissions counselors will explain the addiction treatment options available. They will also answer your questions, address your concerns, and walk you through the admissions process. If you are taking action on behalf of a family member, friend, or loved one who you think needs our help, call us and we will help you through the process of getting them admitted for treatment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthResourcesAddiction;