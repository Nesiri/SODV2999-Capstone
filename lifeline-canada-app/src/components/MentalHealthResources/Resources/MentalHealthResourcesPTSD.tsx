import React from "react";
const coverPhoto = "/assets/AdditionalResourceImages/about-image.jpg";
const soldierPTSD = "/assets/AdditionalResourceImages/ptsd.png";
const firstResponderPTSD = "/assets/AdditionalResourceImages/firstResponders-600x314.jpg";
const PTSDSupport = "/assets/AdditionalResourceImages/supportGroup-600x400.jpg";
const PTSDAssociationCanada = "/assets/AdditionalResourceImages/PTSDAssocationCanada.png";
const USNationalCenterPTSD = "/assets/AdditionalResourceImages/USNationalCenterPTSD.png";
const Verywell = "/assets/AdditionalResourceImages/Verywell.png";
const LibraryOfParliament = "/assets/AdditionalResourceImages/LibraryOfParliament.png";
const PTSDResolution = "/assets/AdditionalResourceImages/PTSDResolution.png";
const HopeForRecovery = "/assets/AdditionalResourceImages/HopeForRecovery.jpg";
const HomecomingVets = "/assets/AdditionalResourceImages/HomecomingVets.png";

const MentalHealthResourcesPTSD: React.FC = () => {
    const sectionClassName = "rounded-xl border border-slate-200 bg-white p-5 sm:p-6 text-slate-700";

    return (
        <section className="w-full bg-slate-50">
            <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        Post Traumatic Stress Disorder
                    </span>
                </h1>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr] items-stretch">
                    <div className={sectionClassName}>
                        <p className="leading-relaxed">
                            During a traumatic event, people think that their life or the lives of others are in danger. They may feel afraid or feel that they have no control over what is happening. These feelings of lack of control and fear can balloon into confusion, challenges with memory, or intense emotion.
                        </p>
                        <p className="mt-4 leading-relaxed">
                            Combat-related PTSD has existed as long as war itself. The condition was called "soldier's heart" in the Civil War, "shell shock" in World War I, and "Combat fatigue" in World War II. Despite the fact that the condition has been around for thousands of years, it is sometimes still difficult, or controversial, to diagnose.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                        <img
                            src={coverPhoto}
                            alt="Post traumatic stress disorder support"
                            className="h-full w-full object-cover"
                            loading="eager"
                        />
                    </div>
                </div>

                <div className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-900">
                    <p className="font-semibold">Emergency:</p>
                    <p className="mt-1">If you feel at risk of harming yourself, call 911 immediately and stay with a trusted person.</p>
                </div>

                <div className="mt-6 space-y-4">
                    <details className={sectionClassName} open>
                        <summary className="cursor-pointer text-lg font-semibold text-purple-700">What is PTSD?</summary>
                        <div className="mt-4 space-y-4">
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 flex flex-col sm:flex-row sm:items-start gap-4">
                                <div className="flex-1">
                                    <p className="leading-relaxed">
                                        Post-Traumatic Stress Disorder (PTSD) is an anxiety disorder that can occur after a person has been through a traumatic event. These events can include:
                                    </p>
                                    <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed">
                                        <li>Natural disasters</li>
                                        <li>Car crashes</li>
                                        <li>Sexual or physical assaults</li>
                                        <li>Terrorist attacks</li>
                                        <li>Combat during wartime</li>
                                    </ul>
                                </div>
                                <img
                                    src={soldierPTSD}
                                    alt="Soldier with PTSD"
                                    className="w-full h-40 sm:w-40 sm:h-32 object-cover rounded-lg sm:shrink-0 order-first sm:order-last"
                                />
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 flex flex-col sm:flex-row sm:items-start gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-slate-900">PTSD Signs &amp; Symptoms</h3>
                                    <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed">
                                        <li>Having recurrent nightmares</li>
                                        <li>Acting or feeling as though the traumatic event were happening again, sometimes called a "flashback"</li>
                                        <li>Being physically responsive, such as experiencing a surge in your heart rate or sweating, to reminders of the traumatic event</li>
                                        <li>Having a difficult time falling or staying asleep</li>
                                        <li>Feeling more irritable or having outbursts of anger</li>
                                        <li>Feeling constantly "on guard" or like danger is lurking around every corner</li>
                                        <li>Making an effort to avoid thoughts, feelings, or conversations about the traumatic event</li>
                                        <li>A loss of interest in important, once positive, activities</li>
                                        <li>Experiencing difficulties having positive feelings, such as happiness or love</li>
                                    </ul>
                                </div>
                                <img
                                    src={firstResponderPTSD}
                                    alt="First responder with PTSD"
                                    className="w-full h-40 sm:w-40 sm:h-32 object-cover rounded-lg sm:shrink-0 order-first sm:order-last"
                                />
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 flex flex-col sm:flex-row sm:items-start gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-slate-900">Here are some strategies to help with PTSD</h3>
                                    <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed">
                                        <li>Find a therapist.</li>
                                        <li>Join a support group or other support services.</li>
                                        <li>Find a peer mentor.</li>
                                        <li>Meditate.</li>
                                    </ul>
                                    <p className="mt-4 leading-relaxed">
                                        Sometimes PTSD can lead to unhealthy behavior like substance abuse or taking unnecessary risks. Sharing your experiences, feelings, and fears with others, whether with friends, family, or a professional, can lessen the burden.
                                    </p>
                                    <p className="mt-4">
                                        Source:{" "}
                                        <a
                                            href="https://www.brainline.org/topic/post-traumatic-stress-disorder-ptsd"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-medium text-blue-700 underline underline-offset-2"
                                        >
                                            Brainline.org
                                        </a>
                                    </p>
                                </div>
                                <img
                                    src={PTSDSupport}
                                    alt="PTSD support"
                                    className="w-full h-40 sm:w-40 sm:h-32 object-cover rounded-lg sm:shrink-0 order-first sm:order-last"
                                />
                            </div>
                        </div>
                    </details>

                    <details className={sectionClassName}>
                        <summary className="cursor-pointer text-lg font-semibold text-purple-700">Resources for PTSD</summary>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 flex flex-col items-center text-center">
                                <img src={PTSDAssociationCanada} alt="PTSD Association of Canada" className="w-full h-32 object-cover rounded-lg mb-3" />
                                <a href="https://www.ptsdassociation.com/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 underline underline-offset-4">PTSD Association of Canada</a>
                                <p className="mt-2 leading-relaxed">Non-profit dedicated to those who suffer from and those at risk for PTSD as well as those who care for traumatized individuals.</p>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 flex flex-col items-center text-center">
                                <img src={USNationalCenterPTSD} alt="US National Centre for PTSD" className="w-full h-32 object-cover rounded-lg mb-3" />
                                <a href="https://www.ptsd.va.gov/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 underline underline-offset-4">US National Centre for PTSD</a>
                                <p className="mt-2 leading-relaxed">Dedicated to research and education on trauma and PTSD.</p>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 flex flex-col items-center text-center">
                                <img src={Verywell} alt="PTSD and Suicide" className="w-full h-32 object-cover rounded-lg mb-3" />
                                <a href="https://www.ptsd.va.gov/understand/related/suicide_ptsd.asp" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 underline underline-offset-4">PTSD and Suicide</a>
                                <p className="mt-2 leading-relaxed">Connections between traumatic events, PTSD, and suicide risk.</p>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 flex flex-col items-center text-center">
                                <img src={LibraryOfParliament} alt="PTSD and Mental Health of Military" className="w-full h-32 object-cover rounded-lg mb-3" />
                                <a href="https://lop.parl.ca/staticfiles/PublicWebsite/Home/ResearchPublications/BackgroundPapers/PDF/2011-97-e.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 underline underline-offset-4">PTSD and Mental Health of Military</a>
                                <p className="mt-2 leading-relaxed">Canadian Parliamentary Information and Research Service paper (PDF).</p>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 flex flex-col items-center text-center">
                                <img src={PTSDResolution} alt="PTSD Resolution" className="w-full h-32 object-cover rounded-lg mb-3" />
                                <a href="https://ptsdresolution.org/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 underline underline-offset-4">PTSD Resolution</a>
                                <p className="mt-2 leading-relaxed">UK outreach programme helping veterans reintegrate into work and family life.</p>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 flex flex-col items-center text-center">
                                <img src={HopeForRecovery} alt="Hope for Recovery" className="w-full h-32 object-cover rounded-lg mb-3" />
                                <a href="https://www.youtube.com/watch?v=EqDs-2qvd_Y" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 underline underline-offset-4">Hope for Recovery</a>
                                <p className="mt-2 leading-relaxed">Video resource that helps explain PTSD and recovery.</p>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 sm:col-span-2 flex flex-col items-center text-center">
                                <img src={HomecomingVets} alt="Homecoming Vets and the Crossroads of Humanity" className="w-full h-32 object-cover rounded-lg mb-3" />
                                <a href="https://homecomingvets.wordpress.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 underline underline-offset-4">Homecoming Vets and the Crossroads of Humanity</a>
                                <p className="mt-2 leading-relaxed">A reintegration site for veterans and their families.</p>
                            </div>
                        </div>
                    </details>

                    <div
                        role="alert"
                        className="p-6 rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 shadow-md text-amber-900"
                    >
                        <h2 className="text-2xl font-bold">Getting Treatment</h2>
                        <p className="mt-4 leading-relaxed">
                            As with depression or anxiety, getting the right treatment for PTSD depends a great deal on the individual. Sometimes counseling called cognitive-behavioral therapy is effective. Additionally, medicines known as SSRIs can help, too. Sometimes a combination of both therapies proves successful. Treatment can help people with PTSD feel more in control of their emotions and result in fewer symptoms, but some symptoms like bad memories or super-sensitivity to sounds and lights may linger.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthResourcesPTSD;