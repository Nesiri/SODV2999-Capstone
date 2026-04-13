import React from 'react';
import communicationImage from '../../assets/communicationSpecialist.jpg';

const CommunicationsSpecialistSection: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#f8faff] via-white to-[#f5f0ff] py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-pink-200/10 rounded-full blur-3xl animate-pulse [animation-delay:3s]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeInDown">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50 shadow-lg mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              ✦ Presently Seeking: ✦
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-8 animate-fadeInLeft">
            <h2 className="!text-2xl md:text-4xl lg:text-5xl font-black mb-4">
              <span className="text-black">Communications</span>
              <br />
              <span className="text-gray-800 relative">
                Specialist
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
                    src={communicationImage}
                    alt="Communications team meeting"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* Description with enhanced typography */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 text-3xl text-blue-400 opacity-30">
                "
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic font-light">
                We are looking for an enthusiastic Communications Specialist,
                managing our external communications. You will promote a
                positive public image and control the dissemination of
                information on TLC.
              </p>
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
                <span className="text-black">Key Responsibilities</span>
              </h3>

              <ul className="space-y-4">
                {[
                  'Develop effective communication strategies for TLC programs',
                  'Manage stakeholder communications (memos, newsletters etc.)',
                  "Draft content (e.g., press releases) for mass media or TLC's website",
                  'Organize initiatives and plan events or press conferences',
                  'Liaise with media and handle requests for interviews, statements etc.',
                  'Foster relationships with advocates, influencers, and other persons',
                  'Collaborate with marketing professionals to produce copy for advertisements or articles',
                  'Assist in communication of strategies or messages from senior leadership',
                  'Support fundraising, communications and special events; may handle public speaking appearances, work at fundraising events or attend activities as a Foundation representative',
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

            {/* Requirements - flowing list */}
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></span>
                <span className="text-black">Skills & Experience</span>
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed border-l-4 border-purple-200 pl-4 italic">
                To thrive in this role, you have excellent communication skills
                (presentation, oral, and written), and some of or all the
                following:
              </p>

              <ul className="space-y-2">
                {[
                  'Experience as communications specialist',
                  'Experience in web design and content production',
                  'Experience in copywriting and editing',
                  'Organizational and planning abilities',
                  'Proficient command of English',
                  'BSc/BA in public relations, communications or relevant field would be an asset',
                  'Working knowledge of MS Office; photo and video-editing software is an asset',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 group">
                    <span className="text-purple-500 mt-1 group-hover:scale-110 transition-transform">
                      •
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900">
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

export default CommunicationsSpecialistSection;
