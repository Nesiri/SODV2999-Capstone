import React from 'react';
const coverPhoto = '/assets/AdditionalResourceImages/How-to-Help-600x400.jpg';
const letThemTalk = '/assets/AdditionalResourceImages/talk-to-200x133.webp';
const survivorKit = '/assets/AdditionalResourceImages/hope-box-200x151.webp';
const therapy = '/assets/AdditionalResourceImages/counselling2-200x133.jpg';
const notToDo = '/assets/AdditionalResourceImages/not-to-do-200x151.png';
const lifestyleChanges = '/assets/AdditionalResourceImages/Lifestyle-changes-with-partner-200x110.jpg';
const shortTermPlans = '/assets/AdditionalResourceImages/short-term-plan-200x133.jpg';
const beAlert = '/assets/AdditionalResourceImages/know-the-signs-200x114.webp';
const shouldYouWorry = '/assets/AdditionalResourceImages/should-you-worry-200x113.webp';
const whatToDo = '/assets/AdditionalResourceImages/whatShouldIDo.webp';
const hopeCards = '/assets/AdditionalResourceImages/hope-cards-200x150.webp';
const resourcesHelp = '/assets/AdditionalResourceImages/help-sign-200x158.jpg';
const warning = '/assets/AdditionalResourceImages/warning.jpg';
const talkingToSomeone = '/assets/AdditionalResourceImages/talking-to-someone-about-suicidal-feelings-600x600.jpg';
const phone = '/assets/AdditionalResourceImages/phone-600x338.jpg';
const understandingSuicide = '/assets/AdditionalResourceImages/understandingSuicide.webp';
const ifYouReceieveSuicidalPhoneCall = '/assets/AdditionalResourceImages/ifYouReceiveASuicidalPhoneCall.webp';

const MentalHealthResourcesHowToHelp: React.FC = () => {
  const sectionClassName = 'rounded-xl border border-slate-200 bg-white p-5 sm:p-6';

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
            How Can I Help Someone?
          </span>
        </h1>

        <div className="flex items-center gap-4 mt-3 mb-1">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
          <div className={sectionClassName}>
            <p className="leading-relaxed text-slate-700">
              A suicidal person may not ask for help, but that doesn't mean that help isn't wanted. People who take their lives don't want to die—they just want to stop hurting. Suicide prevention starts with recognizing the warning signs and taking them seriously. If you think a friend or family member is considering suicide, you might be afraid to bring up the subject. But talking openly about suicidal thoughts and feelings can save a life.
            </p>
            <p className="mt-4 leading-relaxed text-slate-700">
              The World Health Organization estimates that approximately 1 million people die each year from suicide. What drives so many individuals to take their own lives? To those not in the grips of suicidal depression and despair, it's difficult to understand what drives so many individuals to take their own lives. But a suicidal person is in so much pain that he or she can see no other option.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white max-h-52 lg:max-h-64">
            <img
              src={coverPhoto}
              alt="How to help someone in crisis"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-900">
          <p className="font-semibold">Emergency:</p>
          <p className="mt-1 text-sm sm:text-base">
            If the person has a plan, means, and intent, call 911 immediately and stay with them.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div className={sectionClassName}>
            <h2 className="text-lg font-semibold text-purple-700">
              Understanding Suicide
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_220px] lg:items-start text-slate-700">
              <div className="space-y-3">
                <p className="leading-relaxed">
                  Suicide is a desperate attempt to escape suffering that has become unbearable. Blinded by feelings of self-loathing, hopelessness, and isolation, a suicidal person can't see any way of finding relief except through death. But despite their desire for the pain to stop, most suicidal people are deeply conflicted about ending their own lives. They wish there was an alternative to suicide, but they just can't see one.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <img
                  src={understandingSuicide}
                  alt="Understanding suicide"
                  className="h-full w-full min-h-[120px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className={sectionClassName}>
            <h2 className="text-lg font-semibold text-purple-700">
              Warning Signs to Watch For
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_220px] lg:items-start text-slate-700">
              <div className="space-y-3">
                <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                  <li>Talking about death, suicide, or being a burden.</li>
                  <li>Looking for ways to die (weapons, pills, ropes).</li>
                  <li>Hopelessness, feeling trapped, unbearable emotional pain.</li>
                  <li>Withdrawal from others, sleep/appetite changes, major mood swings.</li>
                </ul>
                <p>
                  More information:{' '}
                  <a
                    href="https://www.helpguide.org/mental-health/suicide-self-harm/suicide-prevention-tips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-700 underline underline-offset-2"
                  >
                    Helpguide.org
                  </a>
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <img
                  src={warning}
                  alt="Warning signs illustration"
                  className="h-full w-full min-h-[120px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className={sectionClassName}>
            <h2 className="text-lg font-semibold text-purple-700">
              How to Talk to Someone You're Worried About
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_220px] lg:items-start text-slate-700">
              <div className="space-y-3">
                <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                <li>Say: "I care about you. Are you thinking about suicide?"</li>
                <li>Validate feelings: "I’m glad you told me."</li>
                <li>Avoid arguing, minimizing, or trying to quickly "fix" everything.</li>
                <li>If risk is high, involve emergency or professional support immediately.</li>
              </ul>
              <p>
                Additional guidance:{' '}
                <a
                  href="https://panow.com/2014/09/12/how-to-talk-about-suicide-with-the-person-you-are-worried-about-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 underline underline-offset-2"
                >
                  Parkland Ambulance
                </a>
              </p>
            </div>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <img
                  src={talkingToSomeone}
                  alt="Talking to someone about suicidal feelings"
                  className="h-full w-full min-h-[120px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className={sectionClassName}>
            <h2 className="text-lg font-semibold text-purple-700">
              Quick Risk Questions
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_220px] lg:items-start text-slate-700">
              <div className="space-y-3">
                <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                  <li>Are you thinking of suicide?</li>
                  <li>Have you tried before?</li>
                  <li>How would you do it?</li>
                  <li>Do you have access to what you would use?</li>
                  <li>Have you thought about when?</li>
                  <li>Who can we contact right now for support?</li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <img
                  src={phone}
                  alt="Phone crisis support"
                  className="h-full w-full min-h-[120px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className={sectionClassName}>
            <h2 className="text-lg font-semibold text-purple-700">
              If You Receive a Suicidal Phone Call
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_220px] lg:items-start text-slate-700">
              <div className="space-y-3">
                <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                  <li>Let the person talk and express emotion without judgment.</li>
                  <li>Reflect back what you heard to confirm understanding.</li>
                  <li>If they have plan + means + timing, treat as emergency now.</li>
                  <li>Encourage immediate emergency care or same-day professional support.</li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <img
                  src={ifYouReceieveSuicidalPhoneCall}
                  alt="Receiving a suicidal phone call"
                  className="h-full w-full min-h-[120px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className={sectionClassName}>
            <h2 className="text-lg font-semibold text-purple-700">
              After a Suicide Attempt: What to Do Next
            </h2>
            <div className="mt-4 space-y-4 text-slate-700">

              {/* Let Them Talk */}
              <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                <div>
                  <h3 className="font-semibold text-purple-700">Let Them Talk</h3>
                  <p className="mt-1 leading-relaxed">During the time after the suicide attempt is when you want to engage the person in conversation as much as possible. Let him or her talk – as long and as often as they wish. In your comments, it's important not to be judgmental or critical of the person. That is counterproductive and will discourage any opening up. It's also very important to show how much you love the person. He or she is most likely devastated, feeling incredibly lost, ashamed, guilty, fearful of the future, and afraid, most of all, that you will withdraw your love.</p>
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={letThemTalk} alt="Let them talk" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                </div>
              </div>

              {/* Making a Survivor Kit or Box */}
              <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                <div>
                  <h3 className="font-semibold text-purple-700">Making a Survivor Kit or Box</h3>
                  <p className="mt-1 leading-relaxed">Consider having your loved one make a survival kit or box, where they can put music, pictures, poetry, anything that will help comfort them and represent safety. If the attempt survivor believes it would be helpful, letters and objects to remind them of their value and the negative impact it would have if they killed themselves can be included. Then, whenever they are upset, they can go to the box and begin to focus on the moment and not the future.</p>
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={survivorKit} alt="Survivor kit or box" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                </div>
              </div>

              {/* Therapy Should Be First on the List */}
              <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                <div>
                  <h3 className="font-semibold text-purple-700">Therapy Should Be First on the List</h3>
                  <p className="mt-1 leading-relaxed">Your loved one needs professional counseling by a licensed and certified therapist. This must be primary on the list of short- and long-term priorities. In addition to individual counseling, group therapy may be recommended. Make sure the person attends every counseling session. Don't allow them to slack off, since therapy takes time to work – and it's often difficult and painful for the individual. The tendency is to minimize the risk, saying "I'm okay now. I don't need any more therapy." Don't buy into this. Push, gently, for continued therapy.</p>
                  <p className="mt-2 leading-relaxed">Regular medical checkups are also a good idea. Following the suicide attempt, physical and/or mental changes occur, and healing takes time. If drugs and alcohol were also part of the individual's lifestyle, these conditions need treatment as well.</p>
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={therapy} alt="Therapy and counseling" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                </div>
              </div>

              {/* Things Not To Do */}
              <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                <div>
                  <h3 className="font-semibold text-purple-700">Things Not To Do</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                    <li>Let the person, especially adolescents, be in control of their medication upon release from the hospital. Dispense the medication(s) yourself.</li>
                    <li>Ignore it and hope things just get better.</li>
                    <li>Tell everyone this is a family business and keep it a shameful secret.</li>
                    <li>Focus all your attention on the suicidal child to the exclusion of the other children.</li>
                    <li>Hover and monitor every action of the loved one, never allowing him or her a minute to themselves.</li>
                    <li>Blame the family member who made the attempt.</li>
                    <li>Blame yourself.</li>
                    <li>Think it will never happen again.</li>
                    <li>Try not to make statements such as "How could you do this to me?" or "What on earth were you thinking?" or "Whatever made you do it?"</li>
                  </ul>
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={notToDo} alt="Things not to do" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                </div>
              </div>

              {/* Make Important Lifestyle Changes */}
              <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                <div>
                  <h3 className="font-semibold text-purple-700">Make Important Lifestyle Changes</h3>
                  <p className="mt-1 leading-relaxed">Obviously, things can't go back to the way they were before. This often means a severe change of lifestyle, but not always. In any case, some things have to change. Where there was no counseling, there now has to be. The suicidal person will not "get better" on their own. The reason they got to the point of despair, enough to want to end their life, won't just go away. The underlying causes may not even be known or acknowledged by your loved one. All this has to be dealt with, and the best person to help in the recovery is a professional therapist.</p>
                  <p className="mt-2 leading-relaxed">Through therapy, your loved one will begin to discover the reasons that led him or her to attempt suicide. Depression, anxiety, fear, shame, disgust and other emotions will surface that are very powerful and very difficult and painful to deal with. The therapist will suggest short- and long-term behavioral changes that will help your loved one to better adjust to life.</p>
                  <p className="mt-2 leading-relaxed">There is no miraculous pill that will quell suicidal thoughts. There isn't any set time period during which the person will be healed. Every person heals on their own timetable. Healing can't be forced, no matter how much you or your loved one wants it.</p>
                  <p className="mt-2 leading-relaxed">Exercise plays an important part in rebuilding a healthy physical body. You, and other family members and friends, can help by encouraging your loved one to engage in sports, running, hiking, swimming, working out, or any strenuous physical activity. Be sure that this vigorous exercise takes place a minimum of four days a week, and for 30 minutes to an hour each day. Exercise produces endorphins, the body's natural feel-good chemicals, which help to reduce feelings of depression.</p>
                  <p className="mt-2 leading-relaxed">Be aware that many persons who attempted suicide become withdrawn. They don't want to talk. They don't want any contact with others, including anyone from the outside world. Respect that feeling, but do encourage your loved one to go out and participate in activities again as he or she is ready to. Make sure you're not too pushy on this point, however, as that can be misconstrued and backfire. When they are ready, take them out to activities and events – but don't go anywhere that's too stressful. Your loved one won't be ready for that for quite a while.</p>
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={lifestyleChanges} alt="Lifestyle changes" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                </div>
              </div>

              {/* Short-Term Planning */}
              <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                <div>
                  <h3 className="font-semibold text-purple-700">Short-Term Planning</h3>
                  <p className="mt-1 leading-relaxed">The first thing to do is to ensure the person is stable. This will most likely require hospitalization, depending on the method of the attempted suicide and how life-threatening the situation is at the present. The suicidal person cannot be left alone during the days immediately following the attempt. They are not rational, and, contrary to popular belief that once they've tried to commit suicide and failed, they won't attempt it again, the truth is that many times they are likely to try it again at some time in the future.</p>
                  <p className="mt-2 leading-relaxed">For some persons admitted to the hospital following a suicide attempt, the greatest risk is the first few hours after admission. If possible, stay with the person as long as possible during visiting hours while he or she is in the hospital. If you can't be there for the duration, ask others to help spell you. The idea is to monitor what's going on with your loved one. This means asking lots of questions of the doctors and nurses, helping to comfort your loved one, and getting help for him or her if needed.</p>
                  <p className="mt-2 leading-relaxed">Suicide prevention experts caution that the person who has already attempted suicide may try death by suicide while they're in the hospital. For others, this risk is greatest when they return home from the hospital.</p>
                  <p className="mt-2 leading-relaxed">Again, make sure that the individual is not left alone nor has access to any means of making good on their intention to do themselves in. This means sweeping the house for any prescription and over-the-counter drugs, poisons, knives and sharp objects, ropes and cords and, especially, firearms. If your loved one has been living alone, it's best if you take him or her into your own home – or move in with them – to ensure their immediate safety.</p>
                  <p className="mt-2 leading-relaxed">If medications are prescribed, make sure that the individual takes them as directed. Many of the medications will help to stabilize mood, especially depression.</p>
                  <p className="mt-2 leading-relaxed">Pay attention to your loved one's diet. Make it a point that he or she takes vitamins and supplements as recommended by the doctor in order to build up strength that's probably been depleted. Often times, the suicidal person has neglected themselves to the extent that they are seriously malnourished.</p>
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={shortTermPlans} alt="Short-term planning" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                </div>
              </div>

              {/* Be Alert for Suicide Warning Signs */}
              <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                <div>
                  <h3 className="font-semibold text-purple-700">Be Alert for Suicide Warning Signs</h3>
                  <p className="mt-1 leading-relaxed">After the suicide attempt, it doesn't mean you're home free – no matter how much your loved one tells you not to worry. Although some individuals do not exhibit any warning signs prior to an attempted suicide, about 75 percent do show one or more signs. You do need to be alert for any of the following warning signs of suicide – as they can occur anytime during the days and weeks after the initial attempt:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                    <li>Depression or sadness all the time – Note that suicide prevention experts say untreated depression is the number one cause of suicide.</li>
                    <li>Talking or writing about death or suicide</li>
                    <li>Writing a will</li>
                    <li>Giving away possessions, especially those the person holds most dear</li>
                    <li>Dramatic mood changes</li>
                    <li>Change in eating or sleeping habits</li>
                    <li>Loss of interest in activities – especially those previously enjoyable</li>
                    <li>Poor work or school performance</li>
                    <li>Abuse of drugs or alcohol</li>
                    <li>Change in personality</li>
                    <li>Withdrawal from family members and friends</li>
                    <li>Feelings of hopelessness, being helpless or feeling trapped</li>
                    <li>Demonstrating strong feelings of anger or rage</li>
                    <li>Acting impulsively or recklessly</li>
                    <li>Feeling excessive shame and/or guilt</li>
                  </ul>
                  <p className="mt-2 leading-relaxed">If your loved one is in immediate danger, call 911 without delay. Suicide prevention lifelines are available 24/7 – so make use of them if your loved one needs to talk with someone urgently. <a href="/crisis-help" className="font-medium text-blue-700 underline underline-offset-2">Click here for Crisis Lines</a>.</p>
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={beAlert} alt="Be alert for warning signs" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                </div>
              </div>

              {/* Should You Worry? */}
              <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                <div>
                  <h3 className="font-semibold text-purple-700">Should You Worry?</h3>
                  <p className="mt-1 leading-relaxed">It's natural to worry that your loved one may try another suicide attempt. But you can't let this worry define you or derail your efforts to get professional help for him or her. You may also wish to undergo counseling yourself, to be better able to deal with the situation and feel better about helping your loved one on his or her journey to healing.</p>
                  <p className="mt-2 leading-relaxed">It's important that you have your own support system in place. You can't always be watching over your loved one, fearful that another attempt is imminent. This will just add to your stress level and make it impossible to maintain a serene environment. Get help around the house – whether that entails a friend or other family member coming over to be present while you take some needed away time, or while you work, or to transport your loved one to and from treatment or group meetings, or some other reason.</p>
                  <p className="mt-2 leading-relaxed">Remember that one of the most powerful emotions is love. The more you can show how much you love your family member that you nearly lost to suicide, the better off you both will be. Encourage other family members to be understanding, nonjudgmental and patient as well. It won't be easy, and sometimes it may seem next to impossible. But your love and understanding will go a long way toward helping your loved one on the road to recovery.</p>
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={shouldYouWorry} alt="Should you worry" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                </div>
              </div>

              {/* Things To Do */}
              <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                <div>
                  <h3 className="font-semibold text-purple-700">Things To Do</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                    <li>Remove all guns from the house and restrict access to lethal means as much as possible.</li>
                    <li>Suggest a session with the therapist for them and for the family/caretakers before leaving the hospital.</li>
                    <li>Get individual and family therapy.</li>
                    <li>Create scales for 3–5 emotions or thoughts such as loneliness, depression, or suicidal thoughts that can help gauge how he or she is doing and whether or not he or she needs your help.</li>
                    <li>Family members need to be supported to deal with their own feelings/reactions. Reach out to trusted friends for help and encourage the rest of the family to do the same.</li>
                    <li>Ask your mental health professional for information on suicide and mental illness.</li>
                    <li>Be gentle with yourself and remember to take care of yourself also.</li>
                    <li>Try to make statements such as, "I'm sorry you felt that way and I wish I could have helped you," or "I'm sorry I didn't realize you were in such pain," or "I can't imagine how bad you must have felt," or "I want to help you, tell me what I can do to help you now."</li>
                  </ul>
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={whatToDo} alt="Things to do" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                </div>
              </div>

              {/* Hope Cards */}
              <div className="grid grid-cols-1 gap-3 pb-3 border-b border-purple-200 md:grid-cols-[1fr_180px] md:items-start">
                <div>
                  <h3 className="font-semibold text-purple-700">Hope Cards</h3>
                  <p className="mt-1 leading-relaxed">Consider making hope cards, which are simply index cards. The attempt survivor and a supportive person sit down and write what causes them to feel suicidal on one side of the card and on the other side, they work together to create a list of things that can challenge or change these thoughts. For example, perhaps someone feels suicidal when they believe nobody cares for or loves them. On one side they may write, "unloved" and on the other side, they can list all the people in their life who do care about them and/or love them, such as parents, spouse, siblings, partner, friends, children, etc. The cards can be carried at all times and when these feelings come up the person can pull out the stack of cards, read them and manage his or her feelings.</p>
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={hopeCards} alt="Hope cards" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                </div>
              </div>

              {/* Resources and Help */}
              <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_180px] md:items-start">
                <div>
                  <h3 className="font-semibold text-purple-700">Resources and Help</h3>
                  <p className="mt-1 leading-relaxed">Keep yourself informed about things to do for your loved one. Helpful books and literature are readily available from a number of sources.</p>
                  <p className="mt-2 leading-relaxed">The LifeLine Canada website has links to suicide prevention organizations and peer support organizations where you can find more resources and help throughout Canada, United States and Worldwide. Many of them have online libraries with downloadable publications, booklets and information to help family members following a suicide attempt by their loved one.</p>
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={resourcesHelp} alt="Resources and help" className="h-full w-full min-h-[120px] object-cover" loading="lazy" />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 text-center sm:p-8">
          <p className="mx-auto max-w-3xl text-center text-lg italic text-slate-700 sm:text-2xl">
            The most important pain-coping resource is the help of a trained
            mental health professional. A person who feels suicidal, should get
            help, and do so sooner rather than later.
          </p>

          <div className="mt-8">
            <a
              href="/resources/search-professional"
              className="inline-block rounded-full bg-purple-700 px-6 py-3 font-semibold !text-white transition hover:bg-purple-800 hover:!text-white focus:!text-white visited:!text-white sm:px-8"
            >
              SEARCH FOR A PROFESSIONAL
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResourcesHowToHelp;
