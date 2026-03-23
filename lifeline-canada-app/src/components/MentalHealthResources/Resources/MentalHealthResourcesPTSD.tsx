import React from "react";
const coverPhoto = "/assets/AdditionalResourceImages/ptsd.png";

const MentalHealthResourcesPTSD: React.FC = () => {
    const sectionClassName = "rounded-xl border border-slate-200 bg-white p-5 sm:p-6 text-slate-700";

    return (
        <section className="w-full bg-slate-50">
            <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-600 sm:text-sm">
                    Mental Health Support
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        Post Traumatic Stress Disorder
                    </span>
                </h1>

                <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
                    This page is organized to support calm, step-by-step reading. Start with immediate safety, then review symptoms, coping, and treatment options.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr] items-stretch">
                    <div className={sectionClassName}>
                        <h2 className="text-xl font-semibold text-purple-700">Start Here</h2>
                        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                            <li>If you or someone else may be in immediate danger, call 911 now.</li>
                            <li>PTSD can happen after events that involve fear, danger, or loss of control.</li>
                            <li>Symptoms are treatable, and recovery is possible with support.</li>
                        </ul>
                        <p className="mt-4 leading-relaxed">
                            PTSD has been recognized for a long time under different names (such as shell shock and combat fatigue), but modern care offers effective pathways for recovery.
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
                        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 lg:col-span-3">
                                <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Main points</p>
                                <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                    <li>PTSD can develop after traumatic experiences.</li>
                                    <li>Symptoms can affect sleep, mood, concentration, and relationships.</li>
                                    <li>Treatment works, and support can reduce distress over time.</li>
                                </ul>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <h3 className="text-lg font-semibold text-slate-900">Possible triggers</h3>
                                <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                    <li>Natural disasters</li>
                                    <li>Car crashes</li>
                                    <li>Sexual or physical assaults</li>
                                    <li>Terrorist attacks</li>
                                    <li>Combat during wartime</li>
                                </ul>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <h3 className="text-lg font-semibold text-slate-900">Common symptoms</h3>
                                <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                    <li>Nightmares and flashbacks</li>
                                    <li>Physical reactivity to reminders</li>
                                    <li>Sleep problems and irritability</li>
                                    <li>Feeling constantly on guard</li>
                                    <li>Avoiding trauma-related thoughts</li>
                                </ul>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <h3 className="text-lg font-semibold text-slate-900">Helpful coping</h3>
                                <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                    <li>Find a therapist</li>
                                    <li>Join support groups</li>
                                    <li>Connect with peer support</li>
                                    <li>Use grounding or meditation</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-4 leading-relaxed">
                            Sometimes PTSD can lead to unhealthy behaviors like substance misuse or unnecessary risk-taking. Sharing your experiences with trusted people can reduce isolation and improve safety.
                        </p>
                        <p className="mt-3">
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
                    </details>

                    <details className={sectionClassName}>
                        <summary className="cursor-pointer text-lg font-semibold text-purple-700">Resources for PTSD</summary>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <a href="https://www.ptsdassociation.com/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 underline underline-offset-4">PTSD Association of Canada</a>
                                <p className="mt-2 leading-relaxed">Non-profit dedicated to those who suffer from and those at risk for PTSD as well as those who care for traumatized individuals.</p>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <a href="https://www.ptsd.va.gov/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 underline underline-offset-4">US National Centre for PTSD</a>
                                <p className="mt-2 leading-relaxed">Dedicated to research and education on trauma and PTSD.</p>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <a href="https://www.ptsd.va.gov/understand/related/suicide_ptsd.asp" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 underline underline-offset-4">PTSD and Suicide</a>
                                <p className="mt-2 leading-relaxed">Connections between traumatic events, PTSD, and suicide risk.</p>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <a href="https://lop.parl.ca/staticfiles/PublicWebsite/Home/ResearchPublications/BackgroundPapers/PDF/2011-97-e.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 underline underline-offset-4">PTSD and Mental Health of Military</a>
                                <p className="mt-2 leading-relaxed">Canadian Parliamentary Information and Research Service paper (PDF).</p>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <a href="https://ptsdresolution.org/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 underline underline-offset-4">PTSD Resolution</a>
                                <p className="mt-2 leading-relaxed">UK outreach programme helping veterans reintegrate into work and family life.</p>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <a href="https://www.youtube.com/watch?v=EqDs-2qvd_Y" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 underline underline-offset-4">Hope for Recovery</a>
                                <p className="mt-2 leading-relaxed">Video resource that helps explain PTSD and recovery.</p>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
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
                        <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-amber-800">Main points</p>
                        <ul className="mt-2 list-disc space-y-2 pl-5 leading-relaxed">
                            <li>The best treatment plan is individual and may take time to adjust.</li>
                            <li>Cognitive-behavioral therapy and SSRIs are common, effective options.</li>
                            <li>Many people improve most with a combination of therapy and medication.</li>
                        </ul>
                        <p className="mt-4 leading-relaxed">
                            Treatment can help people with PTSD feel more in control of their emotions and reduce symptoms. Some symptoms, such as distressing memories or sensitivity to sounds and lights, may linger, but consistent care can still lead to meaningful improvement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthResourcesPTSD;