import React from 'react';
import projectManagerImage from '../../assets/project_manager-400x225.webp'; // You'll need to add this image

const ProjectManagerSection: React.FC = () => {
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
            <h2 className="!text-2xl md:!text-4xl lg:text-5xl font-black mb-4">
              <span className="text-black">Project</span>
              <br />
              <span className="text-gray-800 relative">
                Managers
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
              </span>
            </h2>

            {/* Image with modern styling */}
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500" />

              {/* Image container */}
              <div className="relative !bg-white/80 backdrop-blur-sm p-2 rounded-2xl overflow-hidden">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={projectManagerImage}
                    alt="Project management team"
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
                <p className="text-lg md:!text-xl text-gray-700 leading-relaxed italic font-light">
                  As we expand and enhance our programs, we seek one or more
                  project managers who will be responsible for providing project
                  planning and management support to our project teams.
                </p>
                <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50/50 to-purple-50/50 p-4 rounded-xl border border-blue-100">
                  <span className="font-normal text-blue-600">
                    Current priority:
                  </span>{' '}
                  Our current first priority is planning for development of our
                  on-line 'Human Approach' Mental Health Support program.
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
                <span className="text-black">Key Responsibilities</span>
              </h3>

              <ul className="space-y-4">
                <li className="flex gap-3 group border-b border-gray-100 pb-3">
                  <span className="text-blue-500 mt-1 text-lg group-hover:text-purple-500 transition-colors">
                    ✦
                  </span>
                  <span className="text-gray-700 leading-relaxed group-hover:!text-[#5f2d85] transition-colors">
                    Work with TLC management and volunteer team members, and
                    closely with the designated Team Lead (if applicable) to
                    guide a key project
                  </span>
                </li>

                <li className="flex gap-3 group border-b border-gray-100 pb-3">
                  <span className="text-blue-500 mt-1 text-lg group-hover:text-purple-500 transition-colors">
                    ✦
                  </span>
                  <span className="text-gray-700 leading-relaxed group-hover:!text-[#5f2d85] transition-colors">
                    Oversee the process of the project from planning to
                    implementation. This includes:
                    <ul className="mt-2 space-y-1 ml-6">
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-purple-400">•</span>
                        developing the project charter
                      </li>
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-purple-400">•</span>
                        creating and maintaining the project plan (e.g.,
                        schedule, timelines, milestones, tracking activities)
                      </li>
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-purple-400">•</span>
                        tracking project milestones
                      </li>
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-purple-400">•</span>
                        planning and guiding project activities such as meetings
                        and delegated tasks
                      </li>
                    </ul>
                  </span>
                </li>

                {[
                  'Helping define project scope, goals, and deliverables',
                  'Helping define tasks and required resources',
                  'Managing communications within the project team',
                  'Regularly reporting on progress as well as problems and solutions',
                  'Evaluating and assess the result of the project post-implementation',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 group border-b border-gray-100 pb-3 last:border-0"
                  >
                    <span className="text-blue-500 mt-1 text-lg group-hover:text-purple-500 transition-colors">
                      ✦
                    </span>
                    <span className="text-gray-700 leading-relaxed group-hover:!text-[#5f2d85] transition-colors">
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
                <span className="text-black">Skills & Experience</span>
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed border-l-4 border-purple-200 pl-4 italic">
                To thrive in this role, you have experience in project
                management combined with excellent communication and
                problem-solving skills, and some of or all the following skills
                and training:
              </p>

              <ul className="space-y-2">
                {[
                  'Training in project management, time management, and other project management skills',
                  'Proficiency in using basic project-management tools (software-based)',
                  'Conflict resolution experience',
                  'Training and/or experience in strategic planning an asset',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 group">
                    <span className="text-purple-500 mt-1 group-hover:scale-110 transition-transform">
                      •
                    </span>
                    <span className="text-gray-700 group-hover:!text-[#5f2d85]">
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

export default ProjectManagerSection;
