import React from "react";
import { Link } from "react-router-dom";

const CrisisCentres: React.FC = () => {
  const crisisCentres = [
  {
    title: "KUU-US Crisis Line Society",
    image: "/assets/CanadaCenter_image/BC/KUU-600x183.webp",
    path: "https://www.kuu-uscrisisline.com/",
    lines: [
      "Aboriginal Crisis Line",
      "Crisis: 250-723-4050 24 hrs",
      "Teen line: 250-723-2040",
      "Crisis: 1-800-588-8717 24 hrs",
    ],
  },
  {
    title: "Crisis Intervention & Suicide Prevention Centre of BC",
    image:
      "/assets/CanadaCenter_image/BC/Crisis_Intervention_Suicide_Prevention_Centre.png",
    path: "https://www.crisiscentre.bc.ca/",
    lines: [
      "Crisis 24 hrs: 1-866-661-3311",
      "Crisis 24 hrs TTY: 1-866-872-0113",
    ],
  },
  {
    title: "Crisis Line Assoc. of BC.",
    image:
      "/assets/CanadaCenter_image/BC/Crisis_Line_Assoc.png",
    path: "https://www.crisislines.bc.ca/",
    lines: [
      "Crisis: 1-800-784-2433 24 hrs",
      "Referral Hotline: 211 24/7",
      "Mental Health Support: 310-6789",
    ],
  },
  {
    title: "VictimLink BC",
    image: "/assets/CanadaCenter_image/BC/BCgov-400x154.png",
    path: "https://www2.gov.bc.ca/gov/content/justice/criminal-justice/victims-of-crime/victimlinkbc",
    lines: [
      "Call/Text: 1-888-563-0808 24/7",
      "Email: VictimlinkBC@bc211.ca",
    ],
  },
  {
    title: "Help Lines",
    image: "/assets/CanadaCenter_image/BC/Help_Lines.png",
    path: "https://successbc.ca/counselling-crisis-support/services/help-lines/",
    lines: [
      "Mandarin: 1-888-721-0596 Ext.17 (7 days/week 10am–10pm)",
      "Cantonese: 1-888-721-0596 Ext.2 (7 days/week 10am–10pm)",
      "Korean: 1-888-721-0596 Ext.3 (Mon–Fri 10am–8pm | Sat–Sun 10am–5pm)",
      "Farsi-Dari: 1-888-721-0596 Ext.4 (Mon–Fri 10am–8pm | Sat–Sun 10am–5pm)",
      "Ukrainian: 1-888-721-0596 Ext.5 (Mon–Fri 10am–8pm | Sat–Sun 10am–5pm)",
    ],
  },
];

  return (
    <section className="relative bg-gradient-to-br from-[#c9c2cf] via-[#d6cfdd] to-[#bcb4c4] py-16 px-4 sm:py-20 sm:px-6 lg:py-24 lg:px-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-serif bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent px-4">
            British Columbia
            <span className="block text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-2">
              Province Wide Crisis Centres
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600/50 via-pink-600/50 to-purple-600/50 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Cards Grid - Only Images as Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {crisisCentres.map((centre, index) => (
            <div key={index} className="flex flex-col">
              {/* Image Link Card */}
              <Link
                to={centre.path}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/50 cursor-pointer"
              >
                {/* Gradient top bar */}
                <div className="h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>
                
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <img
                    src={centre.image}
                    alt={centre.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/400x200/4a6fa5/ffffff?text=Crisis+Centre";
                    }}
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent"></div>
                  
                  {/* Title overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <h3 className="text-white font-bold text-lg group-hover:translate-x-1 transition-transform">
                      {centre.title}
                    </h3>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-transparent to-pink-400/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                
                {/* Hover shine effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
              </Link>

              {/* Lines Section - Outside Link, Below Card */}
              <div className="mt-4 p-5 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                <div className="space-y-2">
                  {centre.lines.map((line, i) => {
                    const isMainNumber = line.toLowerCase().includes('crisis') && line.includes(':');
                    const isEmail = line.includes('@');
                    
                    return (
                      <div
                        key={i}
                        className={`text-sm p-2.5 rounded-lg transition-all duration-300 ${
                          isMainNumber 
                            ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 font-medium' 
                            : isEmail
                            ? 'bg-blue-50/50 border border-blue-100'
                            : 'hover:bg-white/60'
                        }`}
                      >
                        <p className="text-gray-700 leading-relaxed">
                          {line}
                        </p>
                      </div>
                    );
                  })}
                </div>
                
               
              </div>
            </div>
          ))}
        </div>

        {/* Decorative bottom pattern */}
        <div className="flex justify-center gap-3 mt-12 lg:mt-16">
          <div className="w-2 h-2 rounded-full bg-purple-400/50 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-pink-400/50 animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-purple-400/50 animate-pulse delay-150"></div>
        </div>
      </div>
    </section>
  );
};

export default CrisisCentres;