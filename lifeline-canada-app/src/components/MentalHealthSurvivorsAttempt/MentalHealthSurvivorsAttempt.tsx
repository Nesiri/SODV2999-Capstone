import React from "react";
import { Sparkles } from "lucide-react";
import CASPpdf from "../../assets/CASP-After-Suicide-Attempt-12-1575.pdf";
import SAMHSApdf from "../../assets/HandbookForRecoveryAfterAttemptSAMHSA.pdf";
import ActionAlliancepdf from "../../assets/The-Way-Forward-Final-2014-07-01.pdf";

const MentalHealthSurvivorsAttempt: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-xs sm:text-sm font-medium text-purple-700">Mental Health Support</span>
        </div>

        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
            Attempt Survivors
          </span>
        </h1>

        <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
          <p className="leading-relaxed">
            Suicidal behaviour can be very distressing for both the person at risk and those who care about them. It is
            important to remember that people not only get through these experiences, but that there can also be positive
            changes. Crises often lead to growth, increased self-understanding and awareness, and the discovery of new and
            more effective ways of coping.
          </p>
          <p className="mt-4 leading-relaxed">
            Remember that there is help and you will get through this. You are not alone. We all have reasons to live –
            but for all kinds of reasons we can lose contact with our reasons. The good news is there&rsquo;s always hope and
            there&apos;s always an opportunity to reconnect with our reasons to live. Find encouragement &amp; inspiration with
            the resources below.
          </p>
        </main>

        <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            After a Suicide Attempt: What Now?
          </h2>

          <p className="mt-4 leading-relaxed">
            If you are suffering about the suicide attempt of your loved one, no doubt you&apos;re confused as to the best
            course of action to take. What should you expect? What should you do? In fact, this is the most critical
            time – immediately after an attempted suicide. But, what, exactly should you do now?
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-5">
            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-purple-700">Short-Term Planning</h3>
              <p className="mt-3 leading-relaxed">
                The first thing to do is to ensure the person is stable. This will most likely require hospitalization,
                depending on the method of the attempted suicide and how life-threatening the situation is at the
                present. The suicidal person cannot be left alone during the days immediately following the attempt.
                They are not rational, and, contrary to popular belief that once they&apos;ve tried to commit suicide and
                failed, they won&apos;t attempt it again, the truth is that many times they are likely to try it again at
                some time in the future.
              </p>
              <p className="mt-3 leading-relaxed">
                For some persons admitted to the hospital following a suicide attempt, the greatest risk is the first
                few hours after admission. If possible, stay with the person as long as possible during visiting hours
                while he or she is in the hospital. If you can&apos;t be there for the duration, ask others to help spell
                you. The idea is to monitor what&apos;s going on with your loved one. This means asking lots of questions
                of the doctors and nurses, helping to comfort your loved one, and getting help for him or her if
                needed.
              </p>
              <p className="mt-3 leading-relaxed">
                Suicide prevention experts caution that the person who has already attempted suicide may try death by
                suicide while they&apos;re in the hospital. For others, this risk is greatest when they return home from
                the hospital.
              </p>
              <p className="mt-3 leading-relaxed">
                Again, make sure that the individual is not left alone nor has access to any means of making good on
                their intention to do themselves in. This means sweeping the house for any prescription and
                over-the-counter drugs, poisons, knives and sharp objects, ropes and cords and, especially, firearms.
                If your loved one has been living alone, it&apos;s best if you take him or her into your own home – or move
                in with them – to ensure their immediate safety.
              </p>
              <p className="mt-3 leading-relaxed">
                If medications are prescribed, make sure that the individual takes them as directed. Many of the
                medications will help to stabilize mood, especially depression.
              </p>
              <p className="mt-3 leading-relaxed">
                Pay attention to your loved one&apos;s diet. Make it a point that he or she takes vitamins and supplements
                as recommended by the doctor in order to build up strength that&apos;s probably been depleted. Often times,
                the suicidal person has neglected themselves to the extent that they are seriously malnourished.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-purple-700">Let Them Talk</h3>
              <p className="mt-3 leading-relaxed">
                During the time after the suicide attempt is when you want to engage the person in conversation as much
                as possible. Let him or her talk – as long and as often as they wish. In your comments, it&apos;s important
                not to be judgmental or critical of the person. That is counter-productive and will discourage any
                opening up. It&apos;s also very important to show how much you love the person. He or she is most likely
                devastated, feeling incredibly lost, ashamed, guilty, fearful of the future, and afraid, most of all,
                that you will withdraw your love.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-purple-700">Therapy Should Be First on the List</h3>
              <p className="mt-3 leading-relaxed">
                Your loved one needs professional counseling by a licensed and certified therapist. This must be
                primary on the list of short- and long-term priorities. In addition to individual counseling, group
                therapy may be recommended. Make sure the person attends every counseling session. Don&apos;t allow them to
                slack off, since therapy takes time to work – and it&apos;s often difficult and painful for the individual.
                The tendency is to minimize the risk, saying “I&apos;m okay now. I don&apos;t need any more therapy.” Don&apos;t buy
                into this. Push, gently, for continued therapy.
              </p>
              <p className="mt-3 leading-relaxed">
                Regular medical checkups are also a good idea. Following the suicide attempt, physical and/or mental
                changes occur, and healing takes time. If drugs and alcohol were also part of the individual&apos;s
                lifestyle, these conditions need treatment as well.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-purple-700">Make Important Lifestyle Changes</h3>
              <p className="mt-3 leading-relaxed">
                Obviously, things can&apos;t go back to the way they were before. This often means a severe change of
                lifestyle, but not always. In any case, some things have to change. Where there was no counseling,
                there now has to be. The suicidal person will not “get better” on their own. The reason they got to
                the point of despair, enough to want to end their life, won&apos;t just go away. The underlying causes may
                not even be known or acknowledged by your loved one. All this has to be dealt with, and the best person
                to help in the recovery is a professional therapist.
              </p>
              <p className="mt-3 leading-relaxed">
                Through therapy, your loved one will begin to discover the reasons that led him or her to attempt
                suicide. Depression, anxiety, fear, shame, disgust and other emotions will surface that are very
                powerful and very difficult and painful to deal with. The therapist will suggest short- and long-term
                behavioral changes that will help your loved one to better adjust to life.
              </p>
              <p className="mt-3 leading-relaxed">
                There is no miraculous pill that will quell suicidal thoughts. There isn&apos;t any set time period during
                which the person will be healed. Every person heals on their own timetable. Healing can&apos;t be forced,
                no matter how much you or your loved one wants it.
              </p>
              <p className="mt-3 leading-relaxed">
                Exercise plays an important part in rebuilding a healthy physical body. You, and other family members
                and friends, can help by encouraging your loved one to engage in sports, running, hiking, swimming,
                working out, or any strenuous physical activity. Be sure that this vigorous exercise takes place a
                minimum of four days a week, and for 30 minutes to an hour each day. Exercise produces endorphins, the
                body&apos;s natural feel-good chemicals, which help to reduce feelings of depression.
              </p>
              <p className="mt-3 leading-relaxed">
                Be aware that many persons who attempted suicide become withdrawn. They don&apos;t want to talk. They don&apos;t
                want any contact with others, including anyone from the outside world. Respect that feeling, but do
                encourage your loved one to go out and participate in activities again as he or she is ready to. Make
                sure you&apos;re not too pushy on this point, however, as that can be misconstrued and backfire. When they
                are ready, take them out to activities and events – but don&apos;t go anywhere that&apos;s too stressful. Your
                loved one won&apos;t be ready for that for quite a while.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-purple-700">Be Alert for Suicide Warning Signs</h3>
              <p className="mt-3 leading-relaxed">
                After the suicide attempt, it doesn&apos;t mean you&apos;re home free – no matter how much your loved one tells
                you not to worry. Although some individuals do not exhibit any warning signs prior to an attempted
                suicide, about 75 percent do show one or more signs. You do need to be alert for any of the following
                warning signs of suicide – as they can occur anytime during the days and weeks after the initial
                attempt:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
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
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          <div className="rounded-xl border border-green-200 bg-green-50/70 p-4 sm:p-5 shadow-sm">
            <h3 className="text-xl font-semibold text-green-800">Things To Do:</h3>
            <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-green-900">
              <li>Remove all guns from the house and restrict access to lethal means as much as possible.</li>
              <li>Suggest a session with the therapist for them and for the family/caretakers before leaving the hospital.</li>
              <li>Get individual and family therapy.</li>
              <li>Create scales for 3-5 emotions or thoughts such as loneliness, depression, or suicidal thoughts that can help gauge how he or she is doing and whether or not he or she needs your help.</li>
              <li>Family members need to be supported to deal with their own feelings/reactions. Reach out to trusted friends for help and encourage the rest of the family to do the same.</li>
              <li>Ask your mental health professional for information on suicide and mental illness.</li>
              <li>Be gentle with yourself and remember to take care of yourself also.</li>
              <li>Try to make statements such as, “I&apos;m sorry you felt that way and I wish I could have helped you,” or “I&apos;m sorry I didn&apos;t realize you were in such pain,” or “I can&apos;t imagine how bad you must have felt,” or finally, “I want to help you, tell me what I can do to help you now.”</li>
            </ul>
          </div>

          <div className="rounded-xl border border-red-200 bg-red-50/70 p-4 sm:p-5 shadow-sm">
            <h3 className="text-xl font-semibold text-red-800">Things Not To Do:</h3>
            <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-red-900">
              <li>Let the person, especially adolescents, be in control of their medication upon release from the hospital. Dispense the medication(s) yourself.</li>
              <li>Ignore it and hope things just get better.</li>
              <li>Tell everyone this is a family business and keep it a shameful secret.</li>
              <li>Focus all your attention on the suicidal child to the exclusion of the other children.</li>
              <li>Hover and monitor every action of the loved one, never allowing him or her a minute to themselves.</li>
              <li>Blame the family member who made the attempt.</li>
              <li>Blame yourself.</li>
              <li>Think it will never happen again.</li>
              <li>Try not to make statements such as “How could you do this to me?” or “What on earth were you thinking?” or “Whatever made you do it?”</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-purple-700">Making a Survivor Kit or Box:</h3>
              <p className="mt-3 leading-relaxed">
                Consider having your loved one make a survival kit or box, where they can put music, pictures, poetry,
                anything that will help comfort them and represent safety. If the attempt survivor believes it would be
                helpful, letters and objects to remind them of their value and the negative impact it would have if they
                killed themselves can be included. Then, whenever they are upset, they can go to the box and begin to
                focus on the moment and not the future.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-purple-700">Hope Cards:</h3>
              <p className="mt-3 leading-relaxed">
                Consider making hope cards, which are simply index cards. The attempt survivor and a supportive person
                sit down and write what causes them to feel suicidal on one side of the card and on the other side,
                they work together to create a list of things that can challenge or change these thoughts. For example,
                perhaps someone feels suicidal when they believe nobody cares for or loves them. On one side they may
                write, “unloved” and on the other side, they can list all the people in their life who do care about
                them and/or love them, such as parents, spouse, siblings, partner, friends, children, etc. The cards
                can be carried at all times and when these feelings come up the person can pull them out the stack of
                cards, read them and manage his or her feelings.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Resources &amp; Guides for Suicide Attempt Survivors &amp; their Families
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-5">
            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
              <a href="https://hughumanity.org" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                For Survivors Of An Attempt
              </a>
              <p className="mt-3 leading-relaxed">
                “I know what it feels like to feel as if all hope has gone. If it were not for my wife I would not be
                here. My reasons to live were my family. Without those reasons to live I know I would not have made it
                through. I was not wrestling with mental illness. Simply my circumstances were so overwhelming that I
                felt my family would be better off without me. How wrong I was!
              </p>
              <p className="mt-3 leading-relaxed">
                If you are a suicide attempt survivor then you will understand…we all have reasons to live and once we
                have wrapped our arms around that fact then there is no going back to the darker feelings no matter
                what the future holds. There is always hope. Hope never lets go of us so we must not let go of hope.
              </p>
              <p className="mt-3 leading-relaxed">
                Because of our experiences as survivors of an attempt some of us can be at an increased risk of suicide
                just as survivors of suicide loss can also be at increased risk. It&apos;s something to be watchful for and
                something that is good to discuss with our loved ones so that the layers of protection and
                accountability around you can be all that they need to be, if need be.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
              <a href={CASPpdf} className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                After A Suicide Attempt: A Guide For Family and Friends
              </a>
              <p className="mt-3 leading-relaxed">
                This guide is to help you when someone you care about has made a suicide attempt or demonstrated other
                suicidal behaviours.
              </p>
              <p className="mt-3 leading-relaxed">It provides:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-base text-gray-700">
                <li>Information on what will happen at the hospital, your loved one&apos;s rights, and your rights.</li>
                <li>An understanding of what is happening for someone struggling with thoughts of suicide.</li>
                <li>Tips on how you can help and support someone who is struggling.</li>
                <li>Ways to take care of yourself during this difficult time.</li>
                <li>A list of resources and references.</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                Suicidal behaviour can be very distressing for both the person at risk and those who care about them.
                It is important to remember that people not only get through these experiences, but that there can also
                be positive changes. Crises often lead to growth, increased self-understanding and awareness, and the
                discovery of new and more effective ways of coping. In the midst of the chaos, fear and upheaval,
                compassion toward ourselves and those in distress gives us hope and builds resilience. Remember that
                there is help and you will get through this. You are not alone.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
              <a href={SAMHSApdf} className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                A Journey Towards Health and Hope
              </a>
              <p className="mt-3 leading-relaxed">
                This booklet is a guide to help you take the first steps toward recovery after your suicide attempt. The
                tools and stories it contains come from the experiences of others, some named, some anonymous, who have
                survived a suicide attempt. It is our hope that their experiences can help you keep yourself safe,
                develop hope, and, most importantly, remind you that you are not alone.
              </p>
              <p className="mt-3 leading-relaxed">
                By U.S. Department of Health and Human Services Substance Abuse and Mental Health Services
                Administration Center for Mental Health Services Division of Prevention, Traumatic Stress, and Special
                Programs Suicide Prevention Branch.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
              <a href={ActionAlliancepdf} className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                The Way Forward: Pathways to Hope, Recovery &amp; Wellness
              </a>
              <p className="mt-3 leading-relaxed">
                The Way Forward: Pathways to hope, recovery and wellness brings insights from lived experience&apos; as an
                important tool for better serving individuals struggling with suicidal thoughts, feelings and action in
                the system of care. Developed in 2014 by the Suicide Attempt Survivors Task Force of the National
                Action Alliance for Suicide Prevention. It is a comprehensive resource for policy makers, service
                providers and invested community members alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthSurvivorsAttempt;