import React from 'react';

const coverPhoto =
  '/assets/AdditionalResourceImages/DepressionHurts-e1686713557588.jpg';
const EmotionalSymptoms =
  '/assets/AdditionalResourceImages/Group-246-800x695.png';
const PhysicalSymptoms =
  '/assets/AdditionalResourceImages/Value-img-600x600.png';
const biological = '/assets/AdditionalResourceImages/biological-200x200.png';
const psychological =
  '/assets/AdditionalResourceImages/Physcological-e1686865357454-200x231.png';
const environmental = '/assets/AdditionalResourceImages/globe-200x201.png';
const selfTest =
  '/assets/AdditionalResourceImages/SelfTest-e1686708611260-600x400.jpg';
const workouts =
  '/assets/AdditionalResourceImages/If-Youre-Depressed-These-Workouts-Can-Help_header-200x107.jpg';
const happinessAndDepression =
  '/assets/AdditionalResourceImages/depression-happiness-e1686705314881-200x110.jpg';
const loveLearnings =
  '/assets/AdditionalResourceImages/LoveLearnings-e1686707571846-200x218.jpg';
const alcoholAwareness =
  '/assets/AdditionalResourceImages/Alcohol-Suicide-200x126.jpg';
const beyondBlue = '/assets/AdditionalResourceImages/BeyondBlue-200x113.jpg';
const depressionHurts =
  '/assets/AdditionalResourceImages/DepressionHurts-e1686713557588.jpg';
const headsUpGuys = '/assets/AdditionalResourceImages/HeadsUpGuys-200x106.jpg';
const depressionAndYoungPeople =
  '/assets/AdditionalResourceImages/YoungPeopleDepression.png';
const interpretScore = '/assets/AdditionalResourceImages/Image-2-600x370.png';
const insertNumberScore = '/assets/AdditionalResourceImages/frequency.webp';
const takeCareOfThingsAtHomeOrPerformAtSchool =
  '/assets/AdditionalResourceImages/frequency.webp';

const MentalHealthResourcesDepression: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12 overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>
      <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full lg:w-4/5 mx-auto">
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 bg-clip-text text-transparent">
              Depression
            </span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="flex-1">
              <p className="leading-relaxed">
                Depression is a mental state of low mood and aversion to
                activity. It affects more than 3.5% of the global population.
                Depression affects a person’s thoughts, behavior, feelings, and
                sense of well-being.
              </p>

              <p className="mt-4 leading-relaxed">
                Feelings of deep depression may be caused by one factor alone or
                a combination of several factors including biological,
                psychological and environmental factors. Depression affects all
                age groups, races, sexes and creeds. 20% of adults will have
                suffered from depression at some point in their lifetimes.
              </p>

              <p className="mt-4 leading-relaxed">
                Although it may feel like a never ending, self-sustaining, big,
                dark hole sometimes, have faith that you can break free from
                depression.
              </p>
            </div>
            <img
              src={coverPhoto}
              alt="Depression support"
              className="w-full h-40 sm:w-[30vw] sm:max-w-[18rem] sm:h-auto object-cover rounded-lg sm:shrink-0 order-first sm:order-last"
            />
          </main>

          <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              What Are Some Symptoms of Depression?
            </h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={EmotionalSymptoms}
                  alt="Emotional Symptoms"
                  className="w-full h-40 object-contain rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-purple-700">
                  Emotional Symptoms
                </h3>
                <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
                  <li>Feeling sad, empty, hopeless, or numb</li>
                  <li>Restlessness, irritability, or anxiety</li>
                  <li>Difficulty concentrating or making decisions</li>
                  <li>
                    Less interest or participation in activities normally
                    enjoyed
                  </li>
                  <li>Feelings of guilt or worthlessness</li>
                  <li>Repeated thoughts of death or suicide</li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={PhysicalSymptoms}
                  alt="Physical Symptoms"
                  className="w-full h-40 object-contain rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-purple-700">
                  Physical Symptoms
                </h3>
                <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
                  <li>Low energy and feeling tired all the time</li>
                  <li>Changes in appetite or weight (eating more / less)</li>
                  <li>Change in sleep pattern (sleeping more / less)</li>
                  <li>Increased use of drugs or alcohol</li>
                  <li>
                    Self destructive behavior, loss of control, or uncontrolled
                    rage
                  </li>
                  <li>
                    May include headaches, aches, pains, digestive problems,
                    dizziness
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Affecting Factors
            </h2>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={biological}
                  alt="Biological"
                  className="w-full h-24 object-contain rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-purple-700">
                  Biological
                </h3>
                <p className="mt-3 leading-relaxed">
                  There are many possible causes of depression, including:
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
                  <li>Faulty mood regulation by the brain</li>
                  <li>Genetic vulnerability</li>
                  <li>Stressful life events</li>
                </ul>
                <p className="mt-3 leading-relaxed">
                  Several of these forces can interact to bring on depression.
                  The onset of depression is more complex than a brain chemical
                  imbalance. It’s not a simple matter of one chemical being too
                  low and another too high. Rather, many chemicals are involved,
                  working both inside and outside nerve cells.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={psychological}
                  alt="Psychological"
                  className="w-full h-24 object-contain rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-purple-700">
                  Psychological
                </h3>
                <p className="mt-3 leading-relaxed">
                  Individuals are affected by outside events differently. One’s
                  thoughts determine how they will experience life, and can
                  affect whether or not they become depressed. Some
                  Psychological Factors include:
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
                  <li>Thinking Patterns</li>
                  <li>Sense of Failure</li>
                  <li>Stress</li>
                  <li>Loss</li>
                </ul>
                <p className="mt-3 leading-relaxed">
                  <a
                    href="https://www.health.harvard.edu/mind-and-mood/what-causes-depression"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-700 font-medium underline"
                  >
                    More about what causes depression from Harvard Health
                  </a>
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={environmental}
                  alt="Environmental"
                  className="w-full h-24 object-contain rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-purple-700">
                  Environmental
                </h3>
                <p className="mt-3 leading-relaxed">
                  Depression can often be triggered by very stressful life
                  situations such as:
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
                  <li>A move</li>
                  <li>Divorce</li>
                  <li>Social isolation</li>
                  <li>Relationship conflict</li>
                  <li>The death of a loved one</li>
                  <li>Financial difficulties / Job loss</li>
                  <li>Demanding work / Stressful workplace</li>
                  <li>Health issues, especially a chronic health problem</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Additional Resources
            </h2>

            <div className="mt-6 grid gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={selfTest}
                  alt="Depression Self Test"
                  className="w-full h-36 sm:w-[18vw] sm:max-w-[14rem] sm:h-auto object-contain rounded-lg sm:shrink-0"
                />
                <div className="flex-1">
                  <a
                    href="https://www.cnvdetox.com/depression-self-test/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                  >
                    Depression Self Test
                  </a>
                  <p className="mt-2 leading-relaxed">
                    Take the free Self Test for Depression using CNV Detox a LA
                    based Medically Supervised Drug and Alcohol Detox &amp;
                    Residential Rehab
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={workouts}
                  alt="Depressed? These Workouts Can Help"
                  className="w-full h-36 sm:w-[18vw] sm:max-w-[14rem] sm:h-auto object-contain rounded-lg sm:shrink-0"
                />
                <div className="flex-1">
                  <a
                    href="https://daveasprey.com/benefits-exercise-depression/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                  >
                    Depressed? These Workouts Can Help
                  </a>
                  <p className="mt-2 leading-relaxed">
                    Exercise supports brain health, hormonal function,
                    self-esteem and improves mood which is why it's an important
                    part of any positive mental health self-care routine.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={happinessAndDepression}
                  alt="Happiness and Depression"
                  className="w-full h-36 sm:w-[18vw] sm:max-w-[14rem] sm:h-auto object-contain rounded-lg sm:shrink-0"
                />
                <div className="flex-1">
                  <a
                    href="https://www.healthyplace.com/blogs/survivingmentalhealthstigma/2016/06/happiness-and-depression-its-possible-to-feel-both"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                  >
                    Happiness and Depression: It's Possible to Feel Both
                  </a>
                  <p className="mt-2 leading-relaxed">
                    Canadian Author Laura A. Barton's blog on healthyplace.com.
                    A good article on the contradiction.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={loveLearnings}
                  alt="Love Learnings"
                  className="w-full h-36 sm:w-[18vw] sm:max-w-[14rem] sm:h-auto object-contain rounded-lg sm:shrink-0"
                />
                <div className="flex-1">
                  <a
                    href="https://www.lovelearnings.com/health/depression-suicide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                  >
                    Love Learnings
                  </a>
                  <p className="mt-2 leading-relaxed">
                    "What to do if You're Depressed or Have Suicidal Thoughts"
                    By Love Learnings contributor and Clinical Psychologist
                    Carolina Estevez Psy.D.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={alcoholAwareness}
                  alt="Alcohol and Suicide"
                  className="w-full h-36 sm:w-[18vw] sm:max-w-[14rem] sm:h-auto object-contain rounded-lg sm:shrink-0"
                />
                <div className="flex-1">
                  <a
                    href="https://alcoholawareness.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                  >
                    Alcohol and Suicide
                  </a>
                  <p className="mt-2 leading-relaxed">
                    When things get tough and when it's hard to cope, it can be
                    easy to turn to alcohol and drugs to soothe or numb the
                    pain.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={beyondBlue}
                  alt="Beyond Blue"
                  className="w-full h-36 sm:w-[18vw] sm:max-w-[14rem] sm:h-auto object-contain rounded-lg sm:shrink-0"
                />
                <div className="flex-1">
                  <a
                    href="https://www.beyondblue.org.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                  >
                    Beyond Blue
                  </a>
                  <p className="mt-2 leading-relaxed">
                    Discover this Australian resource for people who are
                    suffering from depression, bipolar and postpartum
                    depression, and anxiety-related illness.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={depressionHurts}
                  alt="Depression Hurts"
                  className="w-full h-36 sm:w-[18vw] sm:max-w-[14rem] sm:h-auto object-contain rounded-lg sm:shrink-0"
                />
                <div className="flex-1">
                  <a
                    href="https://depressionhurts.ca/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                  >
                    Depression Hurts
                  </a>
                  <p className="mt-2 leading-relaxed">
                    Discover this resource that offers guides relating to
                    depression. See the Symptom Checklist our Journey to
                    Improvement and more.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={headsUpGuys}
                  alt="HeadsUpGuys"
                  className="w-full h-36 sm:w-[18vw] sm:max-w-[14rem] sm:h-auto object-contain rounded-lg sm:shrink-0"
                />
                <div className="flex-1">
                  <a
                    href="https://headsupguys.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                  >
                    HeadsUpGuys
                  </a>
                  <p className="mt-2 leading-relaxed">
                    UBC initiative with resources, services, and programs to
                    improve the mental health and well-being of Men. Info on
                    symptoms, triggers, risk factors and more.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={depressionAndYoungPeople}
                  alt="Depression &amp; Young People"
                  className="w-full h-36 sm:w-[18vw] sm:max-w-[14rem] sm:h-auto object-contain rounded-lg sm:shrink-0"
                />
                <div className="flex-1">
                  <a
                    href="https://pymhws.org.au/young-people/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                  >
                    Depression &amp; Young People
                  </a>
                  <p className="mt-2 leading-relaxed">
                    Australian published quick read by Orygen Youth Health with
                    information regarding the differences between Major
                    Depression, Dysthymia and Bipolar disorder. 2 Page PDF
                    download.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Diagnostic Questionnaire for Depression
            </h2>

            <p className="mt-4 leading-relaxed">
              Published by the Depression Center at the University of Michigan
            </p>

            <div className="mt-6 grid gap-4 sm:gap-5">
              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-purple-700">
                    For each statement below, insert a number score:
                  </h3>
                  <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
                    <li>0 = Never</li>
                    <li>1 = Several days</li>
                    <li>2 = More than half the days</li>
                    <li>3 = Nearly every day</li>
                  </ul>
                </div>
                <img
                  src={insertNumberScore}
                  alt="Insert number score frequency guide"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[16rem] sm:h-auto object-contain rounded-lg sm:shrink-0 order-first sm:order-last"
                />
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-purple-700">
                    Over the past 2 weeks, how often have you experienced or
                    been bothered by any of the following:
                  </h3>
                  <ol className="list-decimal ml-6 mt-3 space-y-2 text-base text-gray-700">
                    <li>Little interest or pleasure in doing things</li>
                    <li>Feeling down, depressed or hopeless</li>
                    <li>
                      Trouble falling asleep, staying asleep, or sleeping too
                      much
                    </li>
                    <li>Feeling tired or having little energy</li>
                    <li>Poor appetite or overeating</li>
                    <li>
                      Feeling bad about yourself, feeling that you are a
                      failure, or feeling that you have let yourself or a loved
                      one down
                    </li>
                    <li>
                      Trouble concentrating on things such as reading or
                      watching television
                    </li>
                    <li>
                      Moving or speaking so slowly that other people notice, or
                      being more fidgety or restless than usual
                    </li>
                    <li>
                      Thinking that you would be better off dead or that you
                      want to hurt yourself in some way
                    </li>
                  </ol>
                </div>
                <img
                  src={selfTest}
                  alt="Depression Self Test"
                  className="w-full h-48 sm:w-[28vw] sm:max-w-[20rem] sm:h-auto object-contain rounded-lg sm:shrink-0 order-first sm:order-last"
                />
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-purple-700">
                    If you scored 1 or more for any of the statements, how
                    difficult have these problems made if for you to do your
                    work, take care of things at home or perform at school?
                  </h3>
                  <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
                    <li>0 = Not difficult at all</li>
                    <li>1 = Somewhat difficult</li>
                    <li>2 = Very difficult</li>
                    <li>3 = Extremely difficult</li>
                  </ul>
                </div>
                <img
                  src={takeCareOfThingsAtHomeOrPerformAtSchool}
                  alt="Difficulty scale for work home or school"
                  className="w-full h-40 sm:w-[22vw] sm:max-w-[16rem] sm:h-auto object-contain rounded-lg sm:shrink-0 order-first sm:order-last"
                />
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-purple-700">
                    Interpreting Scores
                  </h3>
                  <h4 className="mt-3 text-lg font-semibold text-gray-900">
                    How to know if you may need help:
                  </h4>
                  <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
                    <li>
                      4 or Less: May be experiencing tough times but may not
                      need professional treatment.
                    </li>
                    <li>
                      5 to 14: Should consider speaking with a professional,
                      your doctor, a counselor at school or work, therapist, or
                      other mental health specialist.
                    </li>
                    <li>
                      15 or More: May be experiencing clinical depression and
                      likely would benefit from a thorough check up and possibly
                      antidepressant medication and therapy.
                    </li>
                  </ul>
                </div>
                <img
                  src={interpretScore}
                  alt="Interpreting Scores"
                  className="w-full h-48 sm:w-[28vw] sm:max-w-[20rem] sm:h-auto object-contain rounded-lg sm:shrink-0 order-first sm:order-last"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResourcesDepression;
