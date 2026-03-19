import React from 'react';
import marketingManagerImage from '../../assets/Marketing-Manager-400x200.jpg';

const MarketingManagerSection: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#f8faff] via-white to-[#f5f0ff] py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-pink-200/10 rounded-full blur-3xl animate-pulse [animation-delay:3s]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-8 animate-fadeInLeft">
            <h2 className="!text-2xl md:text-4xl lg:text-5xl font-black mb-4">
              <span className="text-black">
                Marketing
              </span>
              <br />
              <span className="text-gray-800 relative">
                Manager
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
              </span>
            </h2>

            {/* Image with modern styling */}
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500" />

              {/* Image container */}
              <div className="relative bg-white/80 backdrop-blur-sm p-2 rounded-2xl overflow-hidden">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={marketingManagerImage}
                    alt="Marketing team collaboration"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* Role Description with enhanced typography */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 text-3xl text-blue-400 opacity-30">
                "
              </div>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic font-light">
                  Our Marketing Manager will focus on promoting TLC's and
                  Companion Paws' brand and services to new clients, volunteers
                  and partners.
                </p>
                <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50/50 to-purple-50/50 p-4 rounded-xl border border-blue-100">
                  <span className="font-semibold text-blue-600">
                    Role focus:
                  </span>{' '}
                  This manager would be a member of the marketing and
                  fundraising team who is responsible for managing the
                  Foundation's digital and non-digital marketing programs.
                </p>
              </div>
              <div className="absolute -bottom-3 -right-3 text-3xl text-purple-400 opacity-30">
                "
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8 animate-fadeInRight">
            {/* Responsibilities - flowing list */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></span>
                <span className="text-black">
                  Key Responsibilities
                </span>
              </h3>

              <ul className="space-y-4">
                {[
                  'Work with internal teams and outside vendors to develop, implement, manage, and evaluate multi‐channel marketing, promotional and fundraising activities; using analytics and trends to inform decision making',
                  'Assists in ensuring that the Foundation has the right mix of assets, channels, and tactics to build awareness and support among target audiences',
                  "Works in collaboration with our Communications Manager to create marketing and other promotional material to maximize reach and engagement; manages the production and scheduling to ensure timely distribution and the Foundation's ability to test the effectiveness of each communication activity",
                  'Proposes and implements initiatives and solutions to achieve identified fundraising and brand-awareness objectives; identifies and tracks key performance indicators',
                  'Serves as team lead for standard and special digital marketing campaigns and cause-marketing arrangements',
                  'Uses a data-driven strategic approach to update website content to encourage audience engagement',
                  'Manages relationships with partners',
                  'Serves as brand ambassador to ensure compliance and integration of messaging with all other Foundation communication channels and across the organization',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 group border-b border-gray-100 pb-3 last:border-0"
                  >
                    <span className="text-blue-500 mt-1 text-lg group-hover:text-purple-500 transition-colors">
                      ✦
                    </span>
                    <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills & Experience */}
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></span>
                <span className="text-black">
                  Skills & Experience
                </span>
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed border-l-4 border-purple-200 pl-4 italic">
                To thrive in this role, you have experience in marketing
                management combined with excellent communication and
                interpersonal skills, and some of or all the following skills
                and training:
              </p>

              <ul className="space-y-3">
                {[
                  'Digital marketing/marketing communications: experience in digital marketing, including content creation for messaging and promotion',
                  'Considerable knowledge of digital marketing analytics and search engine optimization',
                  'Skill in tracking key performance indicators and making data-driven recommendations',
                  'Skill in managing a website, developing and implementing e-mail fundraising campaigns, and using social media platforms. Skill in leveraging publicity to drive fundraising results; proven skill in promoting fundraising events',
                  'Writing: Excellent command of the English language',
                  'Demonstrated ability to develop and execute marketing plans on schedule and write concisely and efficiently to promote the mission of the Foundation',
                  'Computer: Excellent knowledge and skill in using Microsoft Office Suite, Adobe Design Suite, and Google analytics',
                  'Time management/Organizational skills: Skill in working on multiple projects at a time under tight deadlines and in project management overall',
                  'Excellent attention to detail and efficient time management who understands and can execute complex instructions',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 group">
                    <span className="text-purple-500 mt-1 group-hover:scale-110 transition-transform">
                      •
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default MarketingManagerSection;
