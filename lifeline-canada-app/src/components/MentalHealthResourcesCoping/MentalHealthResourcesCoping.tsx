import React from 'react';
import copingMain from '../../assets/copingMain.webp';
import copingPdf from '../../assets/Coping-With-Suicidal-Thoughts.pdf';
<<<<<<< Derek-resources-pages
import copingThinking from '../../assets/Value-img-600x600.png';
import safetyPlanImg from '../../assets/crisisplan-400x343.png';
import problemSolve from '../../assets/solving-wicked-problems-200x131.jpg';
import reasonsLiving from '../../assets/reason-to-live-family-healthyplace-1-200x205.jpg';
import pastThings from '../../assets/remember-things-that-have-helped-200x131.jpg';
import getTreatment from '../../assets/Get-treatment-200x137.jpg';
import oppositeEmotion from '../../assets/Opposite-emotions-e1697413827804-200x112.jpg';
import talkToSomeone from '../../assets/talk-to-200x133.webp';
import professionalSupport from '../../assets/get-Help-200x92.png';
import selfCare from '../../assets/mindfulness-image-e1697585721845-200x158.jpg';
import prescriptions from '../../assets/follow-thru-with-prescribed-medication-200x133.webp';
import structureRoutine from '../../assets/routine-e1697585679528-200x136.webp';
import doThingsEnjoy from '../../assets/do-things-you-enjoy-mental-health-200x133.jpg';
import personalGoals from '../../assets/personal_goal_setting_full_9267662-200x149.png';
=======
>>>>>>> main

const MentalHealthResourcesCoping: React.FC = () => {
    const sectionClassName = 'rounded-xl border border-slate-200 bg-white p-5 sm:p-6';

    return (
        <section className="w-full bg-slate-50">
            <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-600 sm:text-sm">
                    Coping Resources
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        Coping with Suicidal Thoughts
                    </span>
                </h1>

                <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
                    This page is organized to help you move one step at a time. Start with immediate safety, then continue through practical coping tools and longer-term support options.
                </p>

<<<<<<< Derek-resources-pages
                <div className="mt-8">
                    <div className={sectionClassName}>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[3fr_2fr] lg:items-stretch">
                            <div>
                                <h2 className="text-xl font-semibold text-purple-700">Start Here</h2>
                                <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
                                    <li>If you are in immediate danger, call 911 or go to the nearest emergency room.</li>
                                    <li>If you can, reach out to someone you trust and stay connected.</li>
                                    <li>Use the Safety Plan section below for clear next steps.</li>
                                    <li>Review one section at a time at your own pace.</li>
                                </ol>

                                <a
                                    href={copingPdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block font-medium text-blue-700 underline underline-offset-2"
                                >
                                    Download Coping With Suicidal Thoughts PDF
                                </a>

                                <p className="mt-4 leading-relaxed text-slate-700">
                                    Written by Dr. Joti Samra, R.Psych. and Dr. Dan Bilsker, R.Psych. (Lead Authors), Consortium for Organizational Mental Health (COMH; www.comh.ca), Faculty of Health Sciences, Simon Fraser University, Vancouver, BC.
                                </p>
                            </div>

                            <div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white">
                                <img
                                    src={copingMain}
                                    alt="Coping support illustration"
                                    className="h-full w-full min-h-[240px] object-cover"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>

=======
                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
                    <div className={sectionClassName}>
                        <h2 className="text-xl font-semibold text-purple-700">Start Here</h2>
                        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
                            <li>If you are in immediate danger, call 911 or go to the nearest emergency room.</li>
                            <li>If you can, reach out to someone you trust and stay connected.</li>
                            <li>Use the Safety Plan section below for clear next steps.</li>
                            <li>Review one section at a time at your own pace.</li>
                        </ol>
                        <a
                            href={copingPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block font-medium text-blue-700 underline underline-offset-2"
                        >
                            Download the full coping PDF
                        </a>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                        <img
                            src={copingMain}
                            alt="Coping support illustration"
                            className="h-full w-full object-cover"
                            loading="eager"
                        />
                    </div>
>>>>>>> main
                </div>

                <div className="mt-8 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-900">
                    <p className="text-sm sm:text-base">
                        If you feel you might act on suicidal thoughts, seek emergency help now by calling 911.
                    </p>
                </div>

                <div className="mt-8 space-y-4">
                    <details className={sectionClassName} open>
                        <summary className="cursor-pointer text-lg font-semibold text-purple-700">
                            I’m seriously thinking about suicide. What should I do?
                        </summary>
<<<<<<< Derek-resources-pages
                        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[3fr_2fr] lg:items-stretch text-slate-700">
                            <div className="space-y-3">
                                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Main points</p>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                        <li>You are not alone, and these thoughts can pass.</li>
                                        <li>Having suicidal thoughts does not mean you are weak or out of control.</li>
                                        <li>Immediate help is available right now.</li>
                                    </ul>
                                </div>
                                <p className="font-medium text-purple-700">What to do right now</p>
                                <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                                    <li><strong>Tell someone immediately:</strong> Ask a trusted person to stay with you.</li>
                                    <li><strong>Make your space safer:</strong> Remove pills, blades, weapons, or other harmful items.</li>
                                    <li><strong>Follow a written safety plan:</strong> If you don’t have one, use the Safety Plan section below.</li>
                                    <li><strong>If still unsafe:</strong> Call a crisis line such as 988, go to emergency, or call 911.</li>
                                </ul>
                            </div>

                            <div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white">
                                <img
                                    src={copingThinking}
                                    alt="Person thinking with support"
                                    className="h-full w-full min-h-[260px] object-cover"
                                    loading="lazy"
                                />
                            </div>
=======
                        <div className="mt-4 space-y-3 text-slate-700">
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Main points</p>
                                <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                    <li>You are not alone, and these thoughts can pass.</li>
                                    <li>Having suicidal thoughts does not mean you are weak or out of control.</li>
                                    <li>Immediate help is available right now.</li>
                                </ul>
                            </div>
                            <p className="font-medium text-purple-700">What to do right now</p>
                            <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                                <li><strong>Tell someone immediately:</strong> Ask a trusted person to stay with you.</li>
                                <li><strong>Make your space safer:</strong> Remove pills, blades, weapons, or other harmful items.</li>
                                <li><strong>Follow a written safety plan:</strong> If you don’t have one, use the Safety Plan section below.</li>
                                <li><strong>If still unsafe:</strong> Call a crisis line such as 988, go to emergency, or call 911.</li>
                            </ul>
>>>>>>> main
                        </div>
                    </details>

                    <details className={sectionClassName}>
                        <summary className="cursor-pointer text-lg font-semibold text-purple-700">Safety Plan</summary>
<<<<<<< Derek-resources-pages
                        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[3fr_2fr] lg:items-stretch text-slate-700">
                            <div className="space-y-3">
                                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Main points</p>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                        <li>Start at step 1 and continue until you feel safe.</li>
                                        <li>Keep this plan where you can find it quickly.</li>
                                        <li>If steps do not help, call 911 or go to emergency.</li>
                                    </ul>
                                </div>
                                <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
                                    <li>Remind myself of my reasons for living</li>
                                    <li>Call a friend or family member</li>
                                    <li>Call a backup person if person above is not available</li>
                                    <li>Call a care provider (psychologist, psychiatrist, therapist)</li>
                                    <li>Call my local crisis line</li>
                                    <li>Go somewhere I am safe</li>
                                    <li>Go to the Emergency Room at the nearest hospital</li>
                                    <li>If I feel that I can't get to the hospital safely, call 911 and request transportation to the hospital. They will send someone to transport me safely.</li>
                                </ol>
                            </div>

                            <div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white">
                                <img
                                    src={safetyPlanImg}
                                    alt="Safety plan illustration"
                                    className="h-full w-full min-h-[260px] object-cover"
                                    loading="lazy"
                                />
                            </div>
=======
                        <div className="mt-4 space-y-3 text-slate-700">
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Main points</p>
                                <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                    <li>Start at step 1 and continue until you feel safe.</li>
                                    <li>Keep this plan where you can find it quickly.</li>
                                    <li>If steps do not help, call 911 or go to emergency.</li>
                                </ul>
                            </div>
                            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
                                <li>Remind myself of my reasons for living</li>
                                <li>Call a friend or family member</li>
                                <li>Call a backup person if person above is not available</li>
                                <li>Call a care provider (psychologist, psychiatrist, therapist)</li>
                                <li>Call my local crisis line</li>
                                <li>Go somewhere I am safe</li>
                                <li>Go to the Emergency Room at the nearest hospital</li>
                                <li>If I feel that I can't get to the hospital safely, call 911 and request transportation to the hospital. They will send someone to transport me safely.</li>
                            </ol>
>>>>>>> main
                        </div>
                    </details>

                    <details className={sectionClassName}>
                        <summary className="cursor-pointer text-lg font-semibold text-purple-700">What else can I do to decrease thoughts of suicide?</summary>
                        <div className="mt-4 space-y-4 text-slate-700">
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Main points</p>
                                <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                    <li>Solve one small problem at a time.</li>
                                    <li>Reconnect with reasons to live and people who help.</li>
                                    <li>Use support: professional care, routines, and safe coping habits.</li>
                                </ul>
                            </div>
<<<<<<< Derek-resources-pages
                            <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                                <div>
                                    <h3 className="font-semibold text-purple-700">Problem Solve</h3>
                                    <p className="mt-1 leading-relaxed">Write down your top problems and possible solutions. Start with one small, manageable step.</p>
                                </div>
                                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                                    <img src={problemSolve} alt="Problem solving" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                                <div>
                                    <h3 className="font-semibold text-purple-700">Think of Reasons for Living</h3>
                                    <p className="mt-1 leading-relaxed">Create a short list of personal reasons to keep going and read it when distress rises.</p>
                                </div>
                                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                                    <img src={reasonsLiving} alt="Reasons for living" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                                <div>
                                    <h3 className="font-semibold text-purple-700">Remember Things That Have Helped in the Past</h3>
                                    <p className="mt-1 leading-relaxed">Use coping skills that worked before, like talking to someone, journaling, or following your safety plan.</p>
                                </div>
                                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                                    <img src={pastThings} alt="Helpful things from the past" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                                <div>
                                    <h3 className="font-semibold text-purple-700">Get Treatment for Mental Health Problems</h3>
                                    <p className="mt-1 leading-relaxed">Ask for mental health treatment and tell your provider if current care is not helping enough.</p>
                                </div>
                                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                                    <img src={getTreatment} alt="Get treatment support" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                                <div>
                                    <h3 className="font-semibold text-purple-700">Do The Opposite of How You Feel</h3>
                                    <p className="mt-1 leading-relaxed">If you want to isolate, try one opposite action such as texting someone or stepping outside.</p>
                                </div>
                                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                                    <img src={oppositeEmotion} alt="Opposite emotion strategy" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                                <div>
                                    <h3 className="font-semibold text-purple-700">Talk To Someone</h3>
                                    <p className="mt-1 leading-relaxed">Tell a trusted person exactly how you feel, including any plan to hurt yourself.</p>
                                </div>
                                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                                    <img src={talkToSomeone} alt="Talk to someone" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                                </div>
=======
                            <div>
                                <h3 className="font-semibold text-purple-700">Problem Solve</h3>
                                <p className="mt-1 leading-relaxed">Write down your top problems and possible solutions. Start with one small, manageable step.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-700">Think of Reasons for Living</h3>
                                <p className="mt-1 leading-relaxed">Create a short list of personal reasons to keep going and read it when distress rises.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-700">Remember Things That Have Helped in the Past</h3>
                                <p className="mt-1 leading-relaxed">Use coping skills that worked before, like talking to someone, journaling, or following your safety plan.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-700">Get Treatment for Mental Health Problems</h3>
                                <p className="mt-1 leading-relaxed">Ask for mental health treatment and tell your provider if current care is not helping enough.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-700">Do The Opposite of How You Feel</h3>
                                <p className="mt-1 leading-relaxed">If you want to isolate, try one opposite action such as texting someone or stepping outside.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-700">Talk To Someone</h3>
                                <p className="mt-1 leading-relaxed">Tell a trusted person exactly how you feel, including any plan to hurt yourself.</p>
>>>>>>> main
                            </div>
                        </div>
                    </details>

                    <details className={sectionClassName}>
                        <summary className="cursor-pointer text-lg font-semibold text-purple-700">Some common problems and solution ideas</summary>
                        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-700">
                            <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Main points</p>
                            <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                <li>Ask for support early when a major stressor starts.</li>
                                <li>Use both emotional support and practical care (sleep, meals, movement).</li>
                            </ul>
                        </div>
                        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <h3 className="font-semibold text-purple-700">Problem: Depressed Mood</h3>
                                <p className="mt-2 text-sm font-medium text-slate-700">Possible Solution</p>
                                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                                    <li>Call a crisis line for emotional support short-term problem-solving and referrals for longer term help.</li>
                                    <li>See your doctor to discuss options for treatment (medications, changes in medications, undiagnosed illnesses).</li>
                                    <li>Take care of yourself by resting, exercising regularly, eating regularly and spending time with friends.</li>
                                </ul>
                            </div>
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <h3 className="font-semibold text-purple-700">Problem: End of Relationship</h3>
                                <p className="mt-2 text-sm font-medium text-slate-700">Possible Solution</p>
                                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                                    <li>Talk to friends about the pain you feel.</li>
                                    <li>Get help from a crisis line or counselor.</li>
                                    <li>Join a social group.</li>
                                </ul>
                            </div>
                        </div>
                    </details>

                    <details className={sectionClassName}>
                        <summary className="cursor-pointer text-lg font-semibold text-purple-700">How can I decrease chances that I will feel suicidal in the future?</summary>
                        <div className="mt-4 space-y-4 text-slate-700">
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Main points</p>
                                <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                    <li>Build regular support from professionals and trusted people.</li>
                                    <li>Reduce triggers and keep daily structure.</li>
                                    <li>Protect sleep, nutrition, activity, and medication routines.</li>
                                </ul>
                            </div>
<<<<<<< Derek-resources-pages
                            <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                                <div>
                                    <h3 className="font-semibold text-purple-700">Get Professional Support</h3>
                                    <p className="mt-1 leading-relaxed">You can get help and referrals from your doctor or from referral lines listed on the following page. If the first referral doesn't work for you, ask for another.</p>
                                </div>
                                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                                    <img src={professionalSupport} alt="Professional support" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                                </div>
                            </div>
                            <div className="pb-3 border-b border-purple-200">
                                <h3 className="font-semibold text-purple-700">Identify high-risk triggers or situations</h3>
                                <p className="mt-1 leading-relaxed">Think about the situations or factors that increase your feelings of despair and thoughts of suicide. Work to avoid those situations. For example, going to a bar and drinking with friends may increase feelings of depression. If this is a trigger for you, avoid going to a bar or seeing friends who drink.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                                <div>
                                    <h3 className="font-semibold text-purple-700">Self Care</h3>
                                    <p className="mt-1 leading-relaxed">Taking good care of yourself is important to feel better. It is important to do the following:</p>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                        <li>Eat a healthy diet</li>
                                        <li>Get some exercise every day</li>
                                        <li>Get a good night's sleep</li>
                                        <li>Decrease or stop using alcohol or drugs, as these can make feelings of depression and suicide worse.</li>
                                    </ul>
                                </div>
                                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                                    <img src={selfCare} alt="Self care" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                                <div>
                                    <h3 className="font-semibold text-purple-700">Follow Through with Prescribed Medications</h3>
                                    <p className="mt-1 leading-relaxed">If you take prescription medications, it is important to make sure you take them as your doctor directed. Speak to your doctor if medications aren't working or if side effects are causing you problems. If you have just begun taking antidepressants, it is important to know that symptoms of depression resolve at different rates. Physical symptoms such as energy or sleep may improve first. Improvement in mood may be delayed. Speak to your doctor if you are feeling worse.</p>
                                </div>
                                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                                    <img src={prescriptions} alt="Prescribed medications" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                                <div>
                                    <h3 className="font-semibold text-purple-700">Structure & Routine</h3>
                                    <p className="mt-1 leading-relaxed">Keep a regular routine as much as possible, even when your feelings seem out of control. Here are some tips for creating structure in your life:</p>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                        <li>Wake up at a regular time</li>
                                        <li>Have a regular bed time</li>
                                        <li>Have planned activities in your day, such as going for a walk or going to the gym</li>
                                        <li>Continue to go to work or school</li>
                                    </ul>
                                </div>
                                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                                    <img src={structureRoutine} alt="Structure and routine" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                                <div>
                                    <h3 className="font-semibold text-purple-700">Do Things You Enjoy</h3>
                                    <p className="mt-1 leading-relaxed">When you are feeling very low, do an activity you enjoy. You may find that very few things bring you pleasure. Think of things you used to enjoy doing at times you didn't feel so depressed or suicidal. Do these things, even if they don't bring you enjoyment right now. Giving yourself a break from suicide thoughts can help, even if it's for a short time.</p>
                                </div>
                                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                                    <img src={doThingsEnjoy} alt="Do things you enjoy" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                                <div>
                                    <h3 className="font-semibold text-purple-700">Think of Personal Goals</h3>
                                    <p className="mt-1 leading-relaxed">Think of personal goals you have for yourself, or that you've had in the past. Some examples are:</p>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                        <li>Read a particular book</li>
                                        <li>Travel</li>
                                        <li>Get a pet</li>
                                        <li>Move to another place</li>
                                        <li>Learn a new hobby</li>
                                        <li>Volunteer</li>
                                        <li>Go back to school</li>
                                        <li>Start a family</li>
                                    </ul>
                                </div>
                                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                                    <img src={personalGoals} alt="Personal goals" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                                </div>
=======
                            <div>
                                <h3 className="font-semibold text-purple-700">Get Professional Support</h3>
                                <p className="mt-1 leading-relaxed">You can get help and referrals from your doctor or from referral lines listed on the following page. If the first referral doesn't work for you, ask for another.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-700">Identify high-risk triggers or situations</h3>
                                <p className="mt-1 leading-relaxed">Think about the situations or factors that increase your feelings of despair and thoughts of suicide. Work to avoid those situations. For example, going to a bar and drinking with friends may increase feelings of depression. If this is a trigger for you, avoid going to a bar or seeing friends who drink.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-700">Self Care</h3>
                                <p className="mt-1 leading-relaxed">Taking good care of yourself is important to feel better. It is important to do the following:</p>
                                <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                    <li>Eat a healthy diet</li>
                                    <li>Get some exercise every day</li>
                                    <li>Get a good night's sleep</li>
                                    <li>Decrease or stop using alcohol or drugs, as these can make feelings of depression and suicide worse.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-700">Follow Through with Prescribed Medications</h3>
                                <p className="mt-1 leading-relaxed">If you take prescription medications, it is important to make sure you take them as your doctor directed. Speak to your doctor if medications aren't working or if side effects are causing you problems. If you have just begun taking antidepressants, it is important to know that symptoms of depression resolve at different rates. Physical symptoms such as energy or sleep may improve first. Improvement in mood may be delayed. Speak to your doctor if you are feeling worse.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-700">Structure & Routine</h3>
                                <p className="mt-1 leading-relaxed">Keep a regular routine as much as possible, even when your feelings seem out of control. Here are some tips for creating structure in your life:</p>
                                <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                    <li>Wake up at a regular time</li>
                                    <li>Have a regular bed time</li>
                                    <li>Have planned activities in your day, such as going for a walk or going to the gym</li>
                                    <li>Continue to go to work or school</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-700">Do Things You Enjoy</h3>
                                <p className="mt-1 leading-relaxed">When you are feeling very low, do an activity you enjoy. You may find that very few things bring you pleasure. Think of things you used to enjoy doing at times you didn't feel so depressed or suicidal. Do these things, even if they don't bring you enjoyment right now. Giving yourself a break from suicide thoughts can help, even if it's for a short time.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-700">Think of Personal Goals</h3>
                                <p className="mt-1 leading-relaxed">Think of personal goals you have for yourself, or that you've had in the past. Some examples are:</p>
                                <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                                    <li>Read a particular book</li>
                                    <li>Travel</li>
                                    <li>Get a pet</li>
                                    <li>Move to another place</li>
                                    <li>Learn a new hobby</li>
                                    <li>Volunteer</li>
                                    <li>Go back to school</li>
                                    <li>Start a family</li>
                                </ul>
>>>>>>> main
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthResourcesCoping;
