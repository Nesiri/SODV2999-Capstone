import React from 'react';
const studentCopingGuide = '/pdfs/StudentGuidetoCopingwithEmotionalCrisis.pdf';

const coverPhoto = '/assets/AdditionalResourceImages/college-600x400.webp';

const emotionalResponse = '/assets/AdditionalResourceImages/Emotional.png';
const cognitiveResponse =
  '/assets/AdditionalResourceImages/Responses-400x359.png';
const physicalResponse =
  '/assets/AdditionalResourceImages/stress-response-1024x1024-1-400x400.webp';
const behavioralResponse =
  '/assets/AdditionalResourceImages/taming-your-reactions-to-stress-with-cognitive-behavioral-therapy-and-the-cvi-400x286.jpg';

const howSchoolStaffCanHelp =
  '/assets/AdditionalResourceImages/Preventing-Suicide-in-Schools_A-Systemwide-Approach-600x385.jpg';
const returningToSchool =
  '/assets/AdditionalResourceImages/schoolsuicides-600x400.png';
const discussMissedWork =
  '/assets/AdditionalResourceImages/suicideschools-ORIG.jpg';

const suicidePreventionForStudents =
  '/assets/AdditionalResourceImages/psychologyOrg.png';

const here2talk = '/assets/AdditionalResourceImages/here2Talk.png';
const activeMinds = '/assets/AdditionalResourceImages/activeMinds.png';
const jackOrg = '/assets/AdditionalResourceImages/jackOrg.png';
const uLifeLine = '/assets/AdditionalResourceImages/uLifeLine.png';
const centreForOnlineEducation =
  '/assets/AdditionalResourceImages/centerForOnlineEducation.png';
const centreForInnovation =
  '/assets/AdditionalResourceImages/centreForInnovation.png';
const americanCollegeHealthAssociation =
  '/assets/AdditionalResourceImages/americanCollegeHealthAssocation.png';
const beyondOCD = '/assets/AdditionalResourceImages/beyondOCD.png';
const kognito = '/assets/AdditionalResourceImages/kognito.png';

const MentalHealthResourcesCommunitiesCollegeStudents: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12 overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>
      <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full lg:w-4/5 mx-auto">
          <h1 className="!text-[#5f2d85] mt-4 !text-3xl sm:!text-4xl lg:!text-5xl font-black tracking-tight">
            <span className="!text-[#5f2d85]">College Students</span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <main className="mt-6 !bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-1">
                <p className="leading-relaxed">
                  Mental health problems can affect many areas of students'
                  lives, reducing their quality of life, academic achievement,
                  physical health, and satisfaction with the college experience,
                  and negatively impacting relationships with friends and family
                  members.
                </p>

                <p className="mt-4 leading-relaxed">
                  Being a student can be stressful enough, but trying to juggle
                  schoolwork and other responsibilities while experiencing
                  mental illness can make it that much harder. But students can
                  work through many challenges and still perform well in school.
                </p>
              </div>
              <img
                src={coverPhoto}
                alt="College Students"
                className="w-full h-40 sm:w-[30vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
              />
            </div>
          </main>

          {/* Student Guide To Coping With Emotional Crisis */}
          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Student Guide To Coping With Emotional Crisis
            </h2>
            <p className="mt-2 text-sm text-gray-500 italic">
              By: Kim Maertz, Ph.D., R. Psych. UHC-Student Counselling Services
              University of Alberta
            </p>
            <p className="mt-4 leading-relaxed">
              This guide was specifically designed to help you, as a University
              student, cope with an emotional crisis which may occur as part of
              your university experience or as a part of the unpredictability of
              life. A crisis may be precipitated by any number of potential
              unforeseen events including a death in the family, a violent
              crime, an accident, a sexual assault, sexual abuse, a natural
              disaster, a suicide, or violence on campus, just to mention a few.
              Other less obvious situations may also be perceived as a crisis,
              depending on how they are interpreted by each person. Some
              examples here include the ending of an intimate relationship,
              receiving a very poor grade, losing a friendship, being asked to
              withdraw from university, parents divorcing, or the loss of a job.
            </p>
            <p className="mt-4 leading-relaxed">
              Many circumstances and events can precipitate a crisis and it is
              one's reaction, rather than the event itself, that defines it as a
              crisis. A crisis is created by an event which temporarily
              overwhelms our coping resources. During a crisis people tend to
              react in a number of ways. Some of the more typical responses to
              crisis include:
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Emotional Responses */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col">
                <h3 className="text-lg font-normal !text-[#5f2d85]">
                  Emotional Responses
                </h3>
                <ul className="mt-3 space-y-1 list-disc list-inside text-sm leading-relaxed">
                  <li>Shock, denial or disbelief</li>
                  <li>Depression</li>
                  <li>Fear (for yourself or others)</li>
                  <li>Anxiety and worry</li>
                  <li>Anger or irritability</li>
                  <li>Hopelessness or helplessness</li>
                  <li>Guilt and shame</li>
                  <li>Loss of motivation</li>
                  <li>Grief</li>
                  <li>Numbness</li>
                </ul>
                <img
                  src={emotionalResponse}
                  alt="Emotional Responses"
                  className="mt-4 w-40 sm:w-48 mx-auto rounded-lg shadow-sm object-contain bg-gray-50"
                />
              </div>

              {/* Cognitive Responses */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col">
                <h3 className="text-lg font-normal !text-[#5f2d85]">
                  Cognitive Responses
                </h3>
                <ul className="mt-3 space-y-1 list-disc list-inside text-sm leading-relaxed">
                  <li>Difficulties concentrating</li>
                  <li>Memory problems</li>
                  <li>Problems making decisions</li>
                  <li>Confusion</li>
                  <li>Self-doubt</li>
                  <li>Intrusive thoughts</li>
                  <li>Nightmares about the precipitating event</li>
                  <li>Flashbacks about the event</li>
                </ul>
                <img
                  src={cognitiveResponse}
                  alt="Cognitive Responses"
                  className="mt-4 w-40 sm:w-48 mx-auto rounded-lg shadow-sm object-contain bg-gray-50"
                />
              </div>

              {/* Physical Responses */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col">
                <h3 className="text-lg font-normal !text-[#5f2d85]">
                  Physical Responses
                </h3>
                <ul className="mt-3 space-y-1 list-disc list-inside text-sm leading-relaxed">
                  <li>Stomach problems (i.e. nausea)</li>
                  <li>Headaches</li>
                  <li>Muscle tension</li>
                  <li>Rapid heart beat</li>
                  <li>Fatigue</li>
                  <li>Dizziness</li>
                  <li>Sweating or chills</li>
                  <li>Exaggerated startle response</li>
                  <li>Chest pain</li>
                </ul>
                <img
                  src={physicalResponse}
                  alt="Physical Responses"
                  className="mt-4 w-40 sm:w-48 mx-auto rounded-lg shadow-sm object-contain bg-gray-50"
                />
              </div>

              {/* Behavioral Responses */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col">
                <h3 className="text-lg font-normal !text-[#5f2d85]">
                  Behavioral Responses
                </h3>
                <ul className="mt-3 space-y-1 list-disc list-inside text-sm leading-relaxed">
                  <li>Social withdrawal or isolation</li>
                  <li>Sleep disturbance</li>
                  <li>Increased use of alcohol or drugs</li>
                  <li>Aggressive or disruptive behavior</li>
                  <li>Rapid weight gain or loss</li>
                  <li>Deterioration of personal hygiene or dress</li>
                  <li>Inability to relax</li>
                  <li>Reduced sexual interest</li>
                  <li>Emotional outbursts (i.e., crying, giggling)</li>
                </ul>
                <img
                  src={behavioralResponse}
                  alt="Behavioral Responses"
                  className="mt-4 w-40 sm:w-48 mx-auto rounded-lg shadow-sm object-contain bg-gray-50"
                />
              </div>
            </div>

            <p className="mt-6 leading-relaxed">
              You do not need to have all of these indicators to be considered
              in crisis, but some of these from each category are anticipated.
              Being able to identify yourself as being in crisis is important so
              that you can make a good decision on how to best manage your
              response.
            </p>

            <p className="mt-4">
              <a
                href={studentCopingGuide}
                target="_blank"
                rel="noreferrer"
                className="!text-[#5f2d85] underline underline-offset-4 hover:!text-[#5f2d85] font-medium"
              >
                Continue Reading: Student Guide to Coping with Emotional Crisis
              </a>
            </p>
          </div>

          {/* Students Returning to School After a Suicide Attempt */}
          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Students Returning to School After a Suicide Attempt
            </h2>
            <p className="mt-4 leading-relaxed">
              Students who have felt so helpless and hopeless to have made a
              suicide attempt have many challenges to face. The problems that
              led to their suicide attempt are still there, and now on top of
              that they have to deal with having been hospitalized for the
              attempt. Peers are not often kind to those who return to school
              following a psychiatric hospitalization. Although we are trying
              hard to reduce the stigma around mental illness, it is still a
              stigma for many who get admitted into a psychiatric hospital as
              opposed to a drug or alcohol rehab.
            </p>

            <div className="mt-6 space-y-4">
              {/* Sub-div 1: School faculty and staff */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={howSchoolStaffCanHelp}
                  alt="How school staff can help"
                  className="float-right ml-6 mb-4 w-48 sm:w-64 rounded-xl shadow-md object-cover"
                />
                <p className="leading-relaxed">
                  The school faculty and staff may also not know how to be
                  supportive to the returning student. Many staff can be
                  insensitive and say thoughtless things that other students may
                  overhear in the office or hallways. Many staff hold outdated
                  beliefs about mental health treatment which may not lead to
                  the most positive climate for the student. Still other staff,
                  who are knowledgeable about mental health issues and who
                  themselves may have or know others in their own life with
                  mental illness, may be the most compassionate.
                </p>
                <p className="mt-4 leading-relaxed">
                  <span className="font-normal !text-[#5f2d85]">
                    How school staff can help:
                  </span>{' '}
                  Coming back to school after a traumatic absence is difficult
                  for students, but returning after a suicide attempt is quiet
                  challenging, especially if everyone knows. Try to give the
                  student as much control as possible over the situation. Meet
                  with the student before her return to school, plan together
                  what she does and doesn't want you to say and to whom.
                  Practicing role playing so that she can try out different
                  responses to different situations that may arise will help
                  lower her anxiety. Teaching her to say, "I don't want to talk
                  about it" gives the student permission to be as private as she
                  would like to be about the circumstances regarding her absence
                  as needed.
                </p>
                <div className="clear-both" />
              </div>

              {/* Sub-div 2: Consent and safety net */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={returningToSchool}
                  alt="Returning to school"
                  className="float-right ml-6 mb-4 w-48 sm:w-64 rounded-xl shadow-md object-cover"
                />
                <p className="leading-relaxed">
                  You may want to ask the student (and parents) for permission
                  to let some of her teachers and some students (that may be in
                  clubs or sports) with her, to know how she wants to be
                  treated. It is also important that the student's counselor
                  gets consent to read the student's discharge plan and
                  recommendations as well as to speak with the outside
                  therapist. This helps the student by building a safety net for
                  her.
                </p>
                <p className="mt-4 leading-relaxed">
                  The return to school requires individualized attention and
                  regular follow up. If the attempt isn't public knowledge, not
                  everyone in the school needs to know the details around the
                  student's absence. Faculty and staff who have direct contact
                  with the student, should be part of her safety net that
                  monitors continuing risk. Giving instructions to those members
                  of the staff about how they can be most helpful to the student
                  will benefit both the student and staff.
                </p>
                <div className="clear-both" />
              </div>

              {/* Sub-div 3: Ideas for staff */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={discussMissedWork}
                  alt="Discuss missed work"
                  className="float-right ml-6 mb-4 w-48 sm:w-64 rounded-xl shadow-md object-cover"
                />
                <p className="font-normal !text-[#5f2d85] mb-3">
                  Here are some ideas:
                </p>
                <ul className="space-y-2 list-disc list-inside leading-relaxed">
                  <li>
                    Treat the student's return to school as you would had the
                    student been out sick for a few days.
                  </li>
                  <li>
                    Let the student know you are glad they are back, "Good to
                    see you".
                  </li>
                  <li>
                    Please respect the student's wishes for the way in which his
                    absence is discussed. If the attempt is common knowledge,
                    help the student prepare by role-playing comments and
                    questions from peers or faculty or staff. If no one is
                    really aware, help the student create a short response to
                    explain her absence. Being prepared helps greatly reduce
                    anxiety and helps the student feel more in control.
                  </li>
                  <li>
                    Discuss missed classwork and homework and make arrangements
                    for completion. Adjust expectations for the first days and
                    weeks. Let her know that she can come to you for help with
                    the work or assign a student to help her catch up. Some
                    teachers will give a project or a take home assignment for
                    the student to do instead of trying to make up all of the
                    missed homework.
                  </li>
                  <li>
                    Keep an eye on the student's academic performance as well as
                    her social interactions. If you see that she is isolating or
                    being shunned by peers or is falling further behind in
                    assignments you can follow up with the students and other
                    teachers as well.
                  </li>
                  <li>
                    Pay close attention to further absences, lateness and
                    requests to be excused during classes. If you are concerned
                    please alert the appropriate staff resource at your school.
                  </li>
                  <li>
                    Encourage the student to use the school resources for
                    additional support (school counselor).
                  </li>
                  <li>
                    Always provide regular feedback to school resource staff.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guides for College & University Students */}
          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Guides for College &amp; University Students
            </h2>

            <div className="mt-6">
              {/* Suicide Prevention for Students */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={suicidePreventionForStudents}
                  alt="Suicide Prevention for Students"
                  className="float-left mr-6 mb-4 w-48 sm:w-64 rounded-xl shadow-md object-cover"
                />
                <div className="overflow-hidden">
                  <a
                    href="https://www.psychology.org/resources/"
                    className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                  >
                    Suicide Prevention for Students
                  </a>
                  <p className="mt-3 text-sm leading-relaxed">
                    This guide is dedicated to helping those who are suffering
                    or have suffered from depression, suicidal thoughts or
                    suicide attempts. It is also designed for concerned friends
                    and family members who might be worried that someone they
                    love will experience death by suicide. Finally, it is meant
                    for students, so that they might spot the warning signs of
                    suicide in others – or in themselves – and find the proper
                    resources.
                  </p>
                </div>
                <div className="clear-both" />
              </div>
            </div>
          </div>

          {/* Additional Resources for College & University Students */}
          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Additional Resources for College &amp; University Students
            </h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Here2Talk */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={here2talk}
                  alt="Here2Talk"
                  className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50"
                />
                <a
                  href="https://here2talk.ca/main"
                  className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                >
                  Here2Talk
                </a>
                <p className="mt-3 text-sm leading-relaxed">
                  Mental-health counselling and referral service for
                  post-secondary students. Available in English, Chinese and
                  Punjabi. Free, confidential counselling by app, phone or
                  online chat, 24 hours a day, seven days a week. Toll-free:
                  1-877-857-3397
                </p>
              </div>

              {/* Active Minds on Campus */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={activeMinds}
                  alt="Active Minds on Campus"
                  className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50"
                />
                <a
                  href="https://activeminds.org"
                  className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                >
                  Active Minds on Campus
                </a>
                <p className="mt-3 text-sm leading-relaxed">
                  Dedicated to the mental health of college students, this
                  organization serves as the young adult voice in mental health
                  advocacy on more than fifty college campuses.
                </p>
              </div>

              {/* Jack.org */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={jackOrg}
                  alt="Jack.org"
                  className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50"
                />
                <a
                  href="https://www.jack.org"
                  className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                >
                  Jack.org
                </a>
                <p className="mt-3 text-sm leading-relaxed">
                  The national network of young leaders transforming the way we
                  think about mental health. With initiatives and programs
                  designed with the input of young people at every step, we will
                  end stigma in our generation.
                </p>
              </div>

              {/* ULifeLine */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={uLifeLine}
                  alt="ULifeLine"
                  className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50"
                />
                <a
                  href="https://jedfoundation.org/ulifeline-transition/"
                  className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                >
                  ULifeLine
                </a>
                <p className="mt-3 text-sm leading-relaxed">
                  ULifeline is an anonymous, confidential, online resource
                  center, where college students can be comfortable searching
                  for the information they need and want regarding emotional
                  health.
                </p>
              </div>

              {/* Centre for Online Education */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={centreForOnlineEducation}
                  alt="Centre for Online Education"
                  className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50"
                />
                <a
                  href="https://www.onlinecolleges.net/for-students/mental-health-resources/"
                  className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                >
                  Centre for Online Education
                </a>
                <p className="mt-3 text-sm leading-relaxed">
                  Critical Mental Health Resources for College Students. This
                  resource is meant to provide college students and young people
                  with quality information on maintaining good mental health and
                  identifying mental health issues.
                </p>
              </div>

              {/* Centre for Innovation in Campus Mental Health */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={centreForInnovation}
                  alt="Centre for Innovation in Campus Mental Health"
                  className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50"
                />
                <a
                  href="https://campusmentalhealth.ca/external-resources/"
                  className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                >
                  Centre for Innovation in Campus Mental Health
                </a>
                <p className="mt-3 text-sm leading-relaxed">
                  Helping colleges and universities enhance capacity to support
                  student mental health and well-being.
                </p>
              </div>

              {/* American College Health Association */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={americanCollegeHealthAssociation}
                  alt="American College Health Association"
                  className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50"
                />
                <a
                  href="https://www.acha.org"
                  className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                >
                  American College Health Association
                </a>
                <p className="mt-3 text-sm leading-relaxed">
                  Since 1920, the American College Health Association (ACHA) has
                  served as the voice for student health and wellness. Through
                  advocacy, research and education, ACHA stands at the forefront
                  of issues that impact the health and wellness of our college
                  students.
                </p>
              </div>

              {/* Beyond OCD */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={beyondOCD}
                  alt="Beyond OCD"
                  className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50"
                />
                <a
                  href="http://beyondocd.org/information-for-college-students"
                  className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                >
                  Beyond OCD: Overcoming OCD – The College Student's Guide
                </a>
                <p className="mt-3 text-sm leading-relaxed">
                  You're not alone. Approximately 1 in 40 U.S. adults has OCD.
                  With Cognitive Behavior Therapy, relief can be just a couple
                  of months away.
                </p>
              </div>

              {/* Kognito's At-Risk on Campus */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm">
                <img
                  src={kognito}
                  alt="Kognito's At-Risk on Campus"
                  className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50"
                />
                <a
                  href="https://kognito.com/?markets=Higher%20Ed"
                  className="text-lg font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-4"
                >
                  Kognito's At-Risk on Campus
                </a>
                <p className="mt-3 text-sm leading-relaxed">
                  Practice-based digital learning to improve mental health and
                  well-being in schools, campuses, and communities. Kognito
                  role-play simulations enable organizations to rapidly build
                  the capacity of educators and students to lead real-life
                  conversations that change lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResourcesCommunitiesCollegeStudents;
