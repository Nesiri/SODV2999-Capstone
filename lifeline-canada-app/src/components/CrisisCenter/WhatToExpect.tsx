// components/WhatToExpect.tsx
import { useState } from 'react';

const WhatToExpect: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: 'who-will-i-talk-to',
      title: 'Who will I talk to?',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Usually, there are three options for who you might talk to on a
            helpline or hotline:
          </p>
          <div className="grid gap-3">
            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#f5f0ff] to-transparent rounded-lg">
              <div className="w-2 h-2 bg-[#5f2d85] rounded-full mt-2"></div>
              <div>
                <strong className="!text-[#5f2d85]">Volunteers</strong> - People
                who have some training in how to listen and help. They are not
                paid.
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#f5f0ff] to-transparent rounded-lg">
              <div className="w-2 h-2 bg-[#5f2d85] rounded-full mt-2"></div>
              <div>
                <strong className="!text-[#5f2d85]">Counselors</strong> - People
                whose job it is to provide counselling or support. They may have
                received formal training.
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#f5f0ff] to-transparent rounded-lg">
              <div className="w-2 h-2 bg-[#5f2d85] rounded-full mt-2"></div>
              <div>
                <strong className="!text-[#5f2d85]">Peers</strong> - People who
                have been through similar things as you. They may or may not
                have training. They are usually not paid.
              </div>
            </div>
          </div>
          <p className="italic !text-[#5f2d85] bg-[#f5f0ff] p-3 rounded-lg">
            ✨ No matter who you speak with, everyone who works at a helpline is
            trained to listen and provide support.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            When you're searching for a helpline, you can filter by the type of
            support you want.
          </p>
        </div>
      ),
    },
    {
      id: 'what-do-i-say',
      title: 'What do I say?',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            A lot of people don't know what to say when they reach out for help.
            It can be tough to know where to start when you're already
            overwhelmed.
          </p>
          <div className="bg-gradient-to-r from-[#f5f0ff] to-[#faf5ff] p-4 rounded-xl">
            <p>
              <strong className="!text-[#5f2d85]">
                💡 Starting the conversation:
              </strong>{' '}
              Try practicing what you want to say first or write down a few
              points to talk about.
            </p>
          </div>
          <p>Here's some sentence starters that might help:</p>
          <div className="space-y-2 pl-4">
            {[
              '"Things are hard at the moment, because..."',
              '"Lately I\'ve been feeling..."',
              '"I\'m dealing with [feeling or situation] at the moment, and..."',
            ].map((starter, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-700">
                <span className="!text-[#5f2d85]">→</span>
                <span className="italic">{starter}</span>
              </div>
            ))}
          </div>
          <p className="italic !text-[#5f2d85] bg-[#f5f0ff] p-3 rounded-lg">
            💬 There's no wrong way to say it. The supportive person on the
            other end is there for you. You can tell them as much or as little
            as you feel comfortable with.
          </p>
        </div>
      ),
    },
    {
      id: 'how-will-they-help',
      title: 'How will they help me?',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Helplines provide a safe, judgment-free space and immediate
            emotional support and information.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-[#f5f0ff] to-white rounded-xl border border-[#d9c9ff]/30">
              <div className="text-2xl mb-2">💬</div>
              <h4 className="font-bold !text-[#5f2d85] mb-2">
                You can talk about anything
              </h4>
              <p className="text-sm text-gray-600">
                No matter how big or small your issue feels. You don't have to
                be in crisis to deserve support.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-[#f5f0ff] to-white rounded-xl border border-[#d9c9ff]/30">
              <div className="text-2xl mb-2">🛡️</div>
              <h4 className="font-bold !text-[#5f2d85] mb-2">
                They'll help you stay safe
              </h4>
              <p className="text-sm text-gray-600">
                If you're in crisis, they'll help you calm down, understand your
                situation, and make a plan to stay safe.
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Some helplines provide specific support for certain groups (like
            LGBTQ+ community). Helplines are organized by topic and specialty,
            so you can find the right help for you.
          </p>
        </div>
      ),
    },
    {
      id: 'can-i-just-chat',
      title: 'Can I just chat?',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#f5f0ff] to-transparent rounded-xl">
            <span className="text-3xl">💬</span>
            <div>
              <p className="text-gray-700 leading-relaxed">
                Many people feel this way. Most helplines aren't just for big
                problems. They're available for anyone who needs support.
              </p>
              <p className="mt-3 text-gray-700">
                There's also a type of helpline called a{' '}
                <strong className="!text-[#5f2d85]">"warmline"</strong> that
                exists just for talking. These are run by people who've been
                through tough times themselves.
              </p>
              <p className="mt-3 !text-[#5f2d85] font-medium">
                You can find warmlines by filtering your helpline search by
                specialty.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'do-i-need-a-phone',
      title: 'Do I need a phone?',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#f5f0ff] to-transparent rounded-xl">
            <span className="text-3xl">📱</span>
            <div>
              <p className="text-gray-700 leading-relaxed">
                Many helplines offer services over text, WhatsApp, or online
                chat. When you're searching for a helpline you can see the type
                of help each one offers.
              </p>
              <p className="mt-3 text-gray-700">
                Some people find messaging less formal and more private, making
                it easier to talk about tough topics.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'will-they-call-police',
      title: 'Will they call the police?',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
            <p className="text-gray-700">
              Some people worry the police will be called if they reach out for
              help. This can cause a lot of stress. Helplines have an obligation
              to keep your information private unless they think that you, or
              somebody else, is in immediate danger.
            </p>
          </div>
          <p>
            If you're having thoughts of taking your own life, they'll help you
            stay safe in the moment and won't call the police unless they
            believe you're about to carry out a plan to hurt yourself or someone
            else and are unable to work on a plan to stay safe.
          </p>
          <p className="italic !text-[#5f2d85] bg-[#f5f0ff] p-3 rounded-lg">
            🔒 You can ask them what their policies are before sharing what
            you're going through.
          </p>
        </div>
      ),
    },
    {
      id: 'thoughts-too-intense',
      title: 'What if my thoughts are too intense?',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            When you're having really intense thoughts, you might think it's too
            hard to talk about it with someone else. You might worry about how
            they'll react.
          </p>
          <div className="bg-gradient-to-r from-[#f5f0ff] to-[#faf5ff] p-4 rounded-xl text-center">
            <p className="text-gray-700">
              People at helplines are trained to listen. They know how to help
              people who feel just like you do now.
            </p>
            <p className="!text-[#5f2d85] font-normal mt-3">
              They won't judge you, and they will help you figure out what to do
              next, in a way that's helpful to you.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'dont-trust-professionals',
      title: "What if I don't trust professionals?",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            While professional support can be helpful, we understand it might
            not be for everyone. Other options are available:
          </p>
          <div className="grid gap-3">
            {[
              {
                title: 'Volunteers',
                desc: 'Most helplines are run by volunteers. They volunteer because they want to help people, like you, who might be feeling down.',
              },
              {
                title: 'Peers',
                desc: 'On some helplines, you can talk to people who have been through difficult times themselves.',
              },
              {
                title: 'Warmlines',
                desc: 'Helplines where everyone helping has faced similar mental health struggles.',
              },
            ].map((option, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 !bg-white rounded-lg shadow-sm border border-[#d9c9ff]/30"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#5f2d85] to-[#C77DDF] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <strong className="!text-[#5f2d85]">{option.title}</strong>
                  <p className="text-sm text-gray-600">{option.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-3">
            When you search for a helpline you can filter by these options so
            you can get the support you're most comfortable with.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-20 px-4">
      {/* Header Section with animated gradient */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <div className="bg-gradient-to-r from-[#5f2d85]/10 to-[#C77DDF]/10 rounded-full px-4 py-1">
            <span className="text-xs font-normal !text-[#5f2d85] tracking-wide">
              KNOW WHAT TO EXPECT
            </span>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#5f2d85] to-[#C77DDF] bg-clip-text text-transparent mb-4">
          What to Expect When Contacting a Helpline
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Reaching out for help is one of the bravest - and hardest - things to
          do when you're struggling.
        </p>
      </div>

      {/* Hero Quote Card */}
      <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-[#5f2d85] to-[#C77DDF] p-8 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-32 h-32 !bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 !bg-white/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <p className="text-white/90 leading-relaxed mb-3">
            Helplines - also known as hotlines, crisis lines, or crisis call
            centres - provide immediate, emotional support to people like you,
            all over the world.
          </p>
          <p className="text-white/90 leading-relaxed mb-3">
            If you're used to keeping everything to yourself, or you've never
            reached out to a helpline before, you may not know what to expect.
            This can add extra stress to an already tough time.
          </p>
          <p className="text-white font-normal text-lg mt-4">
            ✨ For some, knowing what to expect can ease this stress and make it
            easier to reach out.
          </p>
        </div>
      </div>

      {/* FAQ Accordion Section - Modern Cards */}
      <div className="space-y-4">
        {sections.map((section, idx) => (
          <div
            key={section.id}
            className="group !bg-white rounded-xl border border-[#d9c9ff]/40 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#d9c9ff]/80"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[#f5f0ff] hover:to-transparent transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#5f2d85]/10 to-[#C77DDF]/10 rounded-xl flex items-center justify-center !text-[#5f2d85] group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <span className="font-normal text-[#2A3B3C] text-lg group-hover:!text-[#5f2d85] transition-colors duration-300">
                  {section.title}
                </span>
              </div>
              <svg
                className={`w-5 h-5 !text-[#5f2d85] transition-all duration-300 ${
                  openSection === section.id
                    ? 'rotate-180'
                    : 'group-hover:translate-y-0.5'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openSection === section.id && (
              <div className="px-6 pb-6 pt-2 border-t border-[#d9c9ff]/30 bg-gradient-to-b from-white to-[#faf5ff]/30 animate-fadeIn">
                {section.content}
              </div>
            )}
          </div>
        ))}
        <div className="h-2 " />
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WhatToExpect;
