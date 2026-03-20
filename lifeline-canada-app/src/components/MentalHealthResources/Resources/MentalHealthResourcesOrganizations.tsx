import React from "react";
import { Sparkles } from "lucide-react";

const MentalHealthResourcesOrganizations: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-xs sm:text-sm font-medium text-purple-700">Mental Health Support</span>
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        Resource Organizations
                    </span>
                </h1>

                <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
                    <p className="leading-relaxed">
                        There is plenty of help out there for those looking for Mental Health support. We have scoured the
                        web for some of the top providers of Suicide prevention resources and information. Below are links
                        to their websites and blogs.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        The guides, toolkits and resources on this page and throughout this site represent a compilation
                        of suicide prevention resources from various sources across the Globe as noted. When clicking 3rd
                        party links, you will be redirected to websites not affiliated but has our underlying support at
                        The LifeLine Canada Foundation.
                    </p>
                </main>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <details>
                        <summary className="cursor-pointer text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                            Canadian Resource Organizations
                        </summary>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://kidshelpphone.ca" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Kids Help Phone
                            </a>
                            <p className="mt-3 leading-relaxed">
                                Kids Help Phone offers anonymous, confidential, non judgemental, free 24/7 phone counselling and web counselling for ages 20 and under throughout Canada.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://cmha.ca" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                CMHA Canadian Mental Health
                            </a>
                            <p className="mt-3 leading-relaxed">
                                Canadian Mental Health Association promotes the mental health of all and supports the resilience and recovery of people experiencing mental illness.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://suicideprevention.ca" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Canadian Association for Suicide Prevention
                            </a>
                            <p className="mt-3 leading-relaxed">
                                CASP is an informational association to reduce the suicide rate in Canada and to minimize the consequences of suicidal behaviour.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.suicideinfo.ca/resources/" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Centre For Suicide Prevention Canada
                            </a>
                            <p className="mt-3 leading-relaxed">
                                Offer many different types of resources, from infographics to in-depth editorial articles.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://keltymentalhealth.ca" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Kelty Mental Health Resource Centre
                            </a>
                            <p className="mt-3 leading-relaxed">
                                BC’s Information Source for Children, Youth &amp; Families
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.sp-rc.ca" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Suicide Prevention Resource Centre Canada
                            </a>
                            <p className="mt-3 leading-relaxed">
                                SPRC's goals are to reduce suicide, suicidal behaviour, and their effects, by promoting positive alternatives and healthy coping skills.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://klinic.mb.ca" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Klinic Community Health
                            </a>
                            <p className="mt-3 leading-relaxed">
                                Klinic is an accredited crisis centre in Manitoba with the American Association of Suicidology and a member of the Canadian Association for Suicide Prevention and the Canadian Distress Line Network.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://mentalhealthcommission.ca" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Mental Health Commission of Canada
                            </a>
                            <p className="mt-3 leading-relaxed">
                                Mental health problems and illnesses affect more people in Canada than some of the major physical disorders. Together, we accelerate change to transform Canada&apos;s mental health system.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://wrspc.ca/about-us/ontario-suicide-prevention-roundtable/" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Ontario Suicide Prevention Roundtable
                            </a>
                            <p className="mt-3 leading-relaxed">
                                The Ontario Association for Suicide Prevention has amalgamated with the Waterloo Region Suicide Prevention Council to support a new Ontario Suicide Prevention Roundtable. They will continue to provide a touchstone for individuals, families and communities supporting suicide prevention.
                            </p>
                        </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <details>
                        <summary className="cursor-pointer text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                            Resource Organizations in the USA
                        </summary>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                    The National Suicide Prevention Lifeline
                                </a>
                                <p className="mt-3 leading-relaxed">
                                    The National Suicide Prevention Lifeline is a national network of local crisis centers that provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week. We&apos;re committed to improving crisis services and advancing suicide prevention by empowering individuals, advancing professional best practices, and building awareness.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://afsp.org" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                    American Foundation for Suicide Prevention
                                </a>
                                <p className="mt-3 leading-relaxed">
                                    AFSP is the leading national not-for-profit organization exclusively dedicated to understanding and preventing suicide through research, education, and advocacy, and to reaching out to people with mental disorders and those impacted by suicide. www.afsp.org
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://www.samhsa.gov/about/offices-centers/cmhs" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                    Center for Mental Health Services
                                </a>
                                <p className="mt-3 leading-relaxed">
                                    CMHS, of the Substance Abuse and Mental Health Services Administration maintains a mental health services locator, which you can use to help find services, facilities and resources in your state.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://info.sossignsofsuicide.org/bh-beat" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                    Help Yourself. Help Others
                                </a>
                                <p className="mt-3 leading-relaxed">
                                    Everyone experiences stress, sadness and anxiety from time to time—it&apos;s part of life. But if you are feeling overwhelmed, depressed, or unable to do the things you once enjoyed, it may be time to assess your emotional health. If you are concerned about yourself or someone you love, take a few minutes to complete an anonymous self-assessment. For college students, military and their families and the public.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://www.dbsalliance.org" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                    Depression and Bipolar Support Alliance
                                </a>
                                <p className="mt-3 leading-relaxed">
                                    DBSA is the leading patient-directed organization in the United States focusing on depression and bipolar disorder. They operate a toll-free referral line 1-800-826-3632 and have a grassroots network of more than 1,000 patient-run support groups across the country.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://www.accreditedschoolsonline.org/resources/student-mental-health-resources/" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                    Student Mental Health Resources
                                </a>
                                <p className="mt-3 leading-relaxed">
                                    Promoting student mental health. Expert advice and school resources for understanding disorders and getting help.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                    National Alliance for the Mentally Ill
                                </a>
                                <p className="mt-3 leading-relaxed">
                                    NAMI, a nonprofit, grassroots, self-help, support and advocacy organization of consumers, family and friends of people with mental illnesses, has information on mental illnesses, programs, support groups, medication and treatment, and more. There are more than a thousand local affiliates in 50 states.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://www.sprc.org" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                    Suicide Prevention Resource Center
                                </a>
                                <p className="mt-3 leading-relaxed">
                                    SPRC promotes the implementation of the National Strategy for Suicide Prevention and enhances the nation&apos;s mental health infrastructure by providing states, government agencies, private organizations, colleges and universities, and suicide survivor and mental health consumer groups with access to the science and experience that can support their efforts to develop programs, implement interventions, and promote policies to prevent suicide.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <details>
                        <summary className="cursor-pointer text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                            Worldwide Resource Organizations
                        </summary>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://www.iasp.info" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                    International Association for Suicide Prevention
                                </a>
                                <p className="mt-3 leading-relaxed">
                                    The International Association for Suicide Prevention (IASP) is dedicated to: preventing suicidal behaviour, alleviating its effects, and providing a forum for academics, mental health professionals, crisis workers, volunteers and suicide survivors.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                    World Health Organization
                                </a>
                                <p className="mt-3 leading-relaxed">
                                    Our goal is to build a better, healthier future for people all over the world. Working through offices in more than 150 countries, WHO staff work side by side with governments and other partners to ensure the highest attainable level of health for all people.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 text-center">
                        Additional Links of Interest on this Site
                    </h2>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm text-center">
                            <a href="/resources/bereaved-support" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Bereaved Support
                            </a>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm text-center">
                            <a href="/resources/after-suicide-loss" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                After A Suicide Loss
                            </a>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm text-center">
                            <a href="/resources/suicide-loss" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Survivors of Suicide Loss
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthResourcesOrganizations;