import React from 'react';
import adminImage from '../../assets/Administrative-Assistant-600x334.jpg';

const AdministrationAssistantSection: React.FC = () => {
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
            <h2 className="text-5xl md:text-4xl lg:text-5xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600">
                Administration
              </span>
              <br />
              <span className="text-gray-800 relative">
                Assistant
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
                    src={adminImage}
                    alt="Administration team working"
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
                  Become part of our small and mighty Administrative Team
                  supporting the exciting and growing programs and activities of
                  TLC.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This team's purpose is to provide on-line/remote
                  administrative support to the employees, contractors, and
                  'field' volunteers who support our many initiatives. Each
                  member tailors their workload to their specific skills,
                  abilities, and interests.
                </p>
                <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full">
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    ⏰ We seek those who can commit to at least 4 hours per week
                  </span>
                </div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Key Responsibilities
                </span>
              </h3>

              <ul className="space-y-4">
                {[
                  'Help schedule Therapy Dog assessment events',
                  'Arrange for Visiting Teams to support community organizations',
                  'Help organize transport of foster dogs to their forever homes',
                  'Answer e-mail questions from potential and existing clients',
                  'Conduct on-line research into relevant topics',
                  'Help manage our various information systems, including editing our websites',
                  'Help build new programs through research, development of materials, or setting up information for access by our clients',
                  'Compose and/or edit correspondence, reports, forms, and other key documents',
                  'Data entry and analysis',
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Skills & Experience
                </span>
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed border-l-4 border-purple-200 pl-4 italic">
                To thrive in this role, you have excellent customer support
                skills (for internal and external customers), including
                embracing the values of courtesy, responsiveness, and quality
                communications.
              </p>

              <ul className="space-y-2">
                {[
                  'Experience and comfort with computer applications (e.g., e-mail, Word, Excel, Outlook, and Google apps)',
                  'A comfort with Google Drive, Docs and Sheets (or a willingness to learn)',
                  'Experience in general administrative support functions',
                  'Enjoy working on a computer from home, with an attention to detail',
                  'Strong social skills and enjoy working with others in a remote capacity (primarily over e-mail)',
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

            {/* Equipment & Time Commitment */}
            <div className="space-y-6 pt-4">
              {/* Equipment */}
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></span>
                  Do I need access to special equipment?
                </h4>
                <p className="text-gray-600 leading-relaxed bg-blue-50/30 p-4 rounded-xl border border-blue-100">
                  You will need a computer with strong internet connection, and
                  (ideally) access to Microsoft Office programs is important.
                  While we mostly work off e-mail, access to a phone and the
                  willingness to call anywhere in Canada is also important.
                </p>
              </div>

              {/* Time Commitment */}
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></span>
                  What is the time commitment?
                </h4>
                <p className="text-gray-600 leading-relaxed bg-purple-50/30 p-4 rounded-xl border border-purple-100">
                  Generally, you set your own hours – working any time of day
                  that works with your schedule and in any Canadian time zone.
                  Depending on your assignment, ideally you can check in daily,
                  if only for a few minutes to ensure continued responsiveness
                  to our client's needs.
                </p>
              </div>
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

export default AdministrationAssistantSection;
