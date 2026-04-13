import React from 'react';
const copingMain = '/assets/AdditionalResourceImages/copingMain.webp';
const copingThinking = '/assets/AdditionalResourceImages/Value-img-600x600.png';
const safetyPlanImg = '/assets/AdditionalResourceImages/crisisplan-400x343.png';
const problemSolve =
  '/assets/AdditionalResourceImages/solving-wicked-problems-200x131.jpg';
const reasonsLiving =
  '/assets/AdditionalResourceImages/reason-to-live-family-healthyplace-1-200x205.jpg';
const pastThings =
  '/assets/AdditionalResourceImages/remember-things-that-have-helped-200x131.jpg';
const getTreatment =
  '/assets/AdditionalResourceImages/Get-treatment-200x137.jpg';
const oppositeEmotion =
  '/assets/AdditionalResourceImages/Opposite-emotions-e1697413827804-200x112.jpg';
const talkToSomeone = '/assets/AdditionalResourceImages/talk-to-200x133.webp';
const professionalSupport =
  '/assets/AdditionalResourceImages/get-Help-200x92.png';
const selfCare =
  '/assets/AdditionalResourceImages/mindfulness-image-e1697585721845-200x158.jpg';
const prescriptions =
  '/assets/AdditionalResourceImages/follow-thru-with-prescribed-medication-200x133.webp';
const structureRoutine =
  '/assets/AdditionalResourceImages/routine-e1697585679528-200x136.webp';
const doThingsEnjoy =
  '/assets/AdditionalResourceImages/do-things-you-enjoy-mental-health-200x133.jpg';
const personalGoals =
  '/assets/AdditionalResourceImages/personal_goal_setting_full_9267662-200x149.png';
const highRiskTriggers = '/assets/AdditionalResourceImages/highRisk.webp';

const copingPdf = '/pdfs/Coping-With-Suicidal-Thoughts.pdf';

const MentalHealthResourcesCoping: React.FC = () => {
  const sectionClassName =
    'rounded-xl border border-slate-200 bg-white p-5 sm:p-6';

  return (
    <section className="relative w-full bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 relative z-10">
        <div className="w-full lg:w-4/5 mx-auto">
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 bg-clip-text text-transparent">
              Coping with Suicidal Thoughts
            </span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <div className="mt-8">
            <div className={sectionClassName}>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px] lg:items-start">
                <div>
                  <p className="leading-relaxed text-slate-700">
                    Suicidal thoughts can happen when feelings of hopelessness,
                    isolation and despair become too heavy to bear. You might
                    feel so overwhelmed with pain that suicide seems like the
                    only way to release yourself from the burden you've been
                    carrying. You should know that there is help available to
                    deal with your feelings. Contacting a mental health
                    professional can help you heal and experience joy and
                    happiness again, no matter how impossible it seems right
                    now.
                  </p>

                  <hr className="my-4 border-slate-200" />

                  <a
                    href={copingPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-medium text-blue-700 underline underline-offset-2"
                  >
                    Download Coping With Suicidal Thoughts PDF
                  </a>

                  <p className="mt-4 leading-relaxed text-slate-700">
                    Written by Dr. Joti Samra, R.Psych. and Dr. Dan Bilsker,
                    R.Psych. (Lead Authors), Consortium for Organizational
                    Mental Health (COMH; www.comh.ca), Faculty of Health
                    Sciences, Simon Fraser University, Vancouver, BC.
                  </p>
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white max-h-52 lg:max-h-64">
                  <img
                    src={copingMain}
                    alt="Coping support illustration"
                    className="h-full w-full min-h-[240px] object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className={sectionClassName}>
              <h2 className="text-lg font-semibold text-purple-700">
                I'm seriously thinking about suicide. What should I do?
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_220px] lg:items-start text-slate-700">
                <div className="space-y-3">
                  <p className="font-medium text-purple-700">
                    What to do right now
                  </p>
                  <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                    <li>
                      <strong>Tell someone immediately:</strong> Ask a trusted
                      person to stay with you.
                    </li>
                    <li>
                      <strong>Make your space safer:</strong> Remove pills,
                      blades, weapons, or other harmful items.
                    </li>
                    <li>
                      <strong>Follow a written safety plan:</strong> If you
                      don’t have one, use the Safety Plan section below.
                    </li>
                    <li>
                      <strong>If still unsafe:</strong> Call a crisis line such
                      as 988, go to emergency, or call 911.
                    </li>
                  </ul>
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <img
                    src={copingThinking}
                    alt="Person thinking with support"
                    className="h-full w-full min-h-[120px] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className={sectionClassName}>
              <h2 className="text-lg font-semibold text-purple-700">
                Safety Plan
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_220px] lg:items-start text-slate-700">
                <div className="space-y-3">
                  <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
                    <li>Remind myself of my reasons for living</li>
                    <li>Call a friend or family member</li>
                    <li>
                      Call a backup person if person above is not available
                    </li>
                    <li>
                      Call a care provider (psychologist, psychiatrist,
                      therapist)
                    </li>
                    <li>Call my local crisis line</li>
                    <li>Go somewhere I am safe</li>
                    <li>Go to the Emergency Room at the nearest hospital</li>
                    <li>
                      If I feel that I can't get to the hospital safely, call
                      911 and request transportation to the hospital. They will
                      send someone to transport me safely.
                    </li>
                  </ol>
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <img
                    src={safetyPlanImg}
                    alt="Safety plan illustration"
                    className="h-full w-full min-h-[120px] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className={sectionClassName}>
              <h2 className="text-lg font-semibold text-purple-700">
                What else can I do to decrease thoughts of suicide?
              </h2>
              <div className="mt-4 space-y-4 text-slate-700">
                <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-stretch">
                  <div>
                    <h3 className="font-semibold text-purple-700">
                      Problem Solve
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      Write down your top problems and possible solutions. Start
                      with one small, manageable step.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white h-32">
                    <img
                      src={problemSolve}
                      alt="Problem solving"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-stretch">
                  <div>
                    <h3 className="font-semibold text-purple-700">
                      Think of Reasons for Living
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      Create a short list of personal reasons to keep going and
                      read it when distress rises.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white h-32">
                    <img
                      src={reasonsLiving}
                      alt="Reasons for living"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-stretch">
                  <div>
                    <h3 className="font-semibold text-purple-700">
                      Remember Things That Have Helped in the Past
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      Use coping skills that worked before, like talking to
                      someone, journaling, or following your safety plan.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white h-32">
                    <img
                      src={pastThings}
                      alt="Helpful things from the past"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-stretch">
                  <div>
                    <h3 className="font-semibold text-purple-700">
                      Get Treatment for Mental Health Problems
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      Ask for mental health treatment and tell your provider if
                      current care is not helping enough.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white h-32">
                    <img
                      src={getTreatment}
                      alt="Get treatment support"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-stretch">
                  <div>
                    <h3 className="font-semibold text-purple-700">
                      Do The Opposite of How You Feel
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      If you want to isolate, try one opposite action such as
                      texting someone or stepping outside.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white h-32">
                    <img
                      src={oppositeEmotion}
                      alt="Opposite emotion strategy"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-stretch">
                  <div>
                    <h3 className="font-semibold text-purple-700">
                      Talk To Someone
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      Tell a trusted person exactly how you feel, including any
                      plan to hurt yourself.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white h-32">
                    <img
                      src={talkToSomeone}
                      alt="Talk to someone"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={sectionClassName}>
              <h2 className="text-lg font-semibold text-purple-700">
                Some common problems and solution ideas
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-purple-700">
                    Problem: Depressed Mood
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-700">
                    Possible Solution
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                    <li>
                      Call a crisis line for emotional support short-term
                      problem-solving and referrals for longer term help.
                    </li>
                    <li>
                      See your doctor to discuss options for treatment
                      (medications, changes in medications, undiagnosed
                      illnesses).
                    </li>
                    <li>
                      Take care of yourself by resting, exercising regularly,
                      eating regularly and spending time with friends.
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-purple-700">
                    Problem: End of Relationship
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-700">
                    Possible Solution
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                    <li>Talk to friends about the pain you feel.</li>
                    <li>Get help from a crisis line or counselor.</li>
                    <li>Join a social group.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={sectionClassName}>
              <h2 className="text-lg font-semibold text-purple-700">
                How can I decrease chances that I will feel suicidal in the
                future?
              </h2>
              <div className="mt-4 space-y-4 text-slate-700">
                <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                  <div>
                    <h3 className="font-semibold text-purple-700">
                      Get Professional Support
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      You can get help and referrals from your doctor or from
                      referral lines listed on the following page. If the first
                      referral doesn't work for you, ask for another.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                    <img
                      src={professionalSupport}
                      alt="Professional support"
                      className="h-full w-full min-h-[120px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                  <div>
                    <h3 className="font-semibold text-purple-700">
                      Identify high-risk triggers or situations
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      Think about the situations or factors that increase your
                      feelings of despair and thoughts of suicide. Work to avoid
                      those situations. For example, going to a bar and drinking
                      with friends may increase feelings of depression. If this
                      is a trigger for you, avoid going to a bar or seeing
                      friends who drink.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                    <img
                      src={highRiskTriggers}
                      alt="High-risk triggers"
                      className="h-full w-full min-h-[120px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                  <div>
                    <h3 className="font-semibold text-purple-700">Self Care</h3>
                    <p className="mt-1 leading-relaxed">
                      Taking good care of yourself is important to feel better.
                      It is important to do the following:
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                      <li>Eat a healthy diet</li>
                      <li>Get some exercise every day</li>
                      <li>Get a good night's sleep</li>
                      <li>
                        Decrease or stop using alcohol or drugs, as these can
                        make feelings of depression and suicide worse.
                      </li>
                    </ul>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                    <img
                      src={selfCare}
                      alt="Self care"
                      className="h-full w-full min-h-[120px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                  <div>
                    <h3 className="font-semibold text-purple-700">
                      Follow Through with Prescribed Medications
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      If you take prescription medications, it is important to
                      make sure you take them as your doctor directed. Speak to
                      your doctor if medications aren't working or if side
                      effects are causing you problems. If you have just begun
                      taking antidepressants, it is important to know that
                      symptoms of depression resolve at different rates.
                      Physical symptoms such as energy or sleep may improve
                      first. Improvement in mood may be delayed. Speak to your
                      doctor if you are feeling worse.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                    <img
                      src={prescriptions}
                      alt="Prescribed medications"
                      className="h-full w-full min-h-[120px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                  <div>
                    <h3 className="font-semibold text-purple-700">
                      Structure & Routine
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      Keep a regular routine as much as possible, even when your
                      feelings seem out of control. Here are some tips for
                      creating structure in your life:
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                      <li>Wake up at a regular time</li>
                      <li>Have a regular bed time</li>
                      <li>
                        Have planned activities in your day, such as going for a
                        walk or going to the gym
                      </li>
                      <li>Continue to go to work or school</li>
                    </ul>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                    <img
                      src={structureRoutine}
                      alt="Structure and routine"
                      className="h-full w-full min-h-[120px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                  <div>
                    <h3 className="font-semibold text-purple-700">
                      Do Things You Enjoy
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      When you are feeling very low, do an activity you enjoy.
                      You may find that very few things bring you pleasure.
                      Think of things you used to enjoy doing at times you
                      didn't feel so depressed or suicidal. Do these things,
                      even if they don't bring you enjoyment right now. Giving
                      yourself a break from suicide thoughts can help, even if
                      it's for a short time.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                    <img
                      src={doThingsEnjoy}
                      alt="Do things you enjoy"
                      className="h-full w-full min-h-[120px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                  <div>
                    <h3 className="font-semibold text-purple-700">
                      Think of Personal Goals
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      Think of personal goals you have for yourself, or that
                      you've had in the past. Some examples are:
                    </p>
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
                    <img
                      src={personalGoals}
                      alt="Personal goals"
                      className="h-full w-full min-h-[120px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResourcesCoping;
