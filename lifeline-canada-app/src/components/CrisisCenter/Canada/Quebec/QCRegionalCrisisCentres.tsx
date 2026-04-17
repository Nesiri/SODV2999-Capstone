import React from 'react';
import { Link } from 'react-router-dom';

const centres = [
  {
    title: 'Suicide Prevention Centre and Crisis Intervention – Bas-Laurent',
    image: '/assets/CanadaCenter_image/QC/bas_laurent.png',
    path: 'https://www.cpse.ca/',
    lines: ['Rimouski (Quebec)', 'Line of intervention: (418) 724-2463'],
  },
  {
    title: 'Rivière-du-Loup Crisis Line',
    image: '/assets/CanadaCenter_image/QC/du_loup.png',
    path: 'https://cpsdukrtb.org/',
    lines: ['(418) 862-9658', '1-866-CALLS (277-3553)'],
  },
  {
    title: 'Centre de Prévention Suicide Arthabaska-Érable',
    image: '/assets/CanadaCenter_image/QC/erable.png',
    path: 'https://www.cpsae.ca/',
    lines: [
      'MRC d’Arthabaska: (819) 751-2205',
      'MRC de l’Érable: (819) 362-8581',
    ],
  },
  {
    title: 'Suicide Prevention Committee Lebel-sur-Quévillon',
    image: '/assets/CanadaCenter_image/QC/lebel.png',
    path: '#',
    lines: ['Line of intervention: 1-866-CALLS (277-3553)'],
  },
  {
    title: 'Saguenay / Lac-Saint-Jean',
    image: '/assets/CanadaCenter_image/QC/lac_saint_jean.png',
    path: 'https://cps02.org/',
    lines: ['Line of intervention: (418) 545-1919'],
  },
  {
    title: 'Capitale-National – Baie-St-Paul',
    image: '/assets/CanadaCenter_image/QC/capitale.jpg',
    path: '#',
    lines: ['Line of intervention: (418) 435-2212'],
  },
  {
    title: 'Suicide Prevention Centre (Quebec)',
    image: '/assets/CanadaCenter_image/QC/ciel.png',
    path: 'https://larcencielportneuf.org/',
    lines: ['Line of intervention: 1-844-285-3283'],
  },
  {
    title: 'Suicide Prevention Centre of Upper St-Mauricie',
    image: '/assets/CanadaCenter_image/QC/mauricie.png',
    path: 'https://www.suicidedetour.org/#',
    lines: ['Line of intervention: 1-866-CALLS (277-3553)'],
  },
  {
    title: 'Suicide Prevention Centre of Accalmie',
    image: '/assets/CanadaCenter_image/QC/accalmie.png',
    path: 'https://preventiondusuicide.com/',
    lines: ['Line of intervention: 1-866-CALLS (277-3553)'],
  },
  {
    title: 'JEVI Suicide Prevention Centre – Estrie',
    image: '/assets/CanadaCenter_image/QC/estrie.png',
    path: 'https://jevi.qc.ca/',
    lines: ['819-564-1354'],
  },
  {
    title: 'Outaouis Help Centre 24/7',
    image: '/assets/CanadaCenter_image/QC/oitaouis.png',
    path: 'https://centredaide247.com/',
    lines: ['Line of intervention: (819) 595-9999'],
  },
  {
    title: 'Amos Suicide Prevention Centre',
    image: '/assets/CanadaCenter_image/QC/amos.png',
    path: 'https://preventionsuicideamos.org/',
    lines: ['Line of intervention: 1-866-CALLS (277-3553)'],
  },
  {
    title: 'Suicide Prevention in Abitibi-Témiscamingue – Malartic',
    image: '/assets/CanadaCenter_image/QC/abitibi.png',
    path: 'https://cpstemis.org/',
    lines: ['Line of intervention: 1-866-CALLS (277-3553)'],
  },
  {
    title: 'Chaudiere-Appalaches – Service Urgence-Distress Crisis',
    image: '/assets/CanadaCenter_image/QC/chaudiere.png',
    path: 'https://www.cisssca.com/soins-et-services/prevention-et-conseils-sante/prevenir-le-suicide',
    lines: ['Line of intervention: 1-866-CALLS (277-3553)'],
  },
  {
    title: 'Suicide Prevention Committee Senneterre',
    image: '/assets/CanadaCenter_image/QC/senneterre.png',
    path: 'https://cps-senneterre.org/',
    lines: ['Line of intervention: 1-866-CALLS (277-3553)'],
  },
  {
    title: 'Suicide Prevention Centre-de-Golden Valley – Val-d’Or',
    image: '/assets/CanadaCenter_image/QC/de_golden.png',
    path: 'https://www.preventionsuicidecotenord.ca/',
    lines: ['Line of intervention: 1-866-CALLS (277-3553)'],
  },
  {
    title: 'North Shore Suicide Prevention Centre – Baie-Comeau',
    image: '/assets/CanadaCenter_image/QC/baie_comeau.png',
    path: 'https://www.preventionsuicidecotenord.ca/',
    lines: ['Line of action: 1-866-CALLS (277-3553)'],
  },
  {
    title: 'Listening Centre and Suicide Prevention – Beauce-Etchemin',
    image: '/assets/CanadaCenter_image/QC/beauce-etchemin.png',
    path: 'https://www.cepsbeauceetchemins.com/',
    lines: ['Line of intervention: (418) 228-0001'],
  },
  {
    title: 'Ilot-Laval Crisis Regional Service',
    image: '/assets/CanadaCenter_image/QC/ilot-laval.png',
    path: 'https://lilotcrise.ca/',
    lines: ['Line of intervention: 1-866-CALLS (277-3553)'],
  },
  {
    title: 'Lanaudière Suicide Prevention Centre',
    image: '/assets/CanadaCenter_image/QC/lanaudiere.png',
    path: 'https://cps-lanaudiere.org/',
    lines: ['Line of intervention: 1-866-CALLS (277-3553)'],
  },
  {
    title: 'Faubourg Suicide Prevention Centre – St-Jérôme',
    image: '/assets/CanadaCenter_image/QC/faubourg.png',
    path: 'https://cps-le-faubourg.org/#',
    lines: ['Line of intervention: (450) 569-0101'],
  },
  {
    title: 'The House Under the Trees',
    image: '/assets/CanadaCenter_image/QC/thehouse_undertree.png',
    path: 'https://www.la-msla.com/fr/services/intervention-crise',
    lines: [
      'Crisis intervention line: (450) 699-5935',
      '1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'The Access Crisis Intervention Centre in Longueuil',
    image: '/assets/CanadaCenter_image/QC/quebec_nationalcenter.png',
    path: 'https://www.santemonteregie.qc.ca/en/crisis-intervention-and-suicide-prevention-cisss-de-la-monteregie-centre',
    lines: ['Line of intervention: (450) 679-8689', '1-866-CALLS (277-3553)'],
  },
  {
    title: 'Suicide Prevention Centre Pierre-de-Saurel – Sorel-Tracy',
    image: '/assets/CanadaCenter_image/QC/ciel.png',
    path: 'https://cpslatraversee.ca/',
    lines: ['Line of intervention: (450) 746-0303'],
  },
  {
    title: 'Haut-Richelieu Suicide Prevention Centre – St-Jean-Sur-Richelieu',
    image: '/assets/CanadaCenter_image/QC/haut-richelieu.png',
    path: 'https://www.ccpshrr.ca/',
    lines: ['Line of intervention: (450) 348-6300', '1-866-CALLS (277-3553)'],
  },
  {
    title: 'The Turn, Crisis Centre and Suicide Prevention – Suroit Region',
    image: '/assets/CanadaCenter_image/QC/suroit.png',
    path: 'https://letournant.org/en/',
    lines: ['Line of intervention: (450) 371-4090', '1-866-CALLS (277-3553)'],
  },
  {
    title: 'Listening Centre and Preventing Suicide – Drummondville',
    image: '/assets/CanadaCenter_image/QC/drummondville.png',
    path: 'https://cepsd.ca/',
    lines: ['Line of intervention: 1-866-CALLS (277-3553)'],
  },
];

const QCRegionalCrisisCentres: React.FC = () => {
  // Helper function to check if a line contains a phone number
  const containsPhoneNumber = (text: string): boolean => {
    const phoneRegex =
      /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}|\d{1}[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/;
    const hasDigits = /\d/.test(text);
    const hasPhoneFormat =
      phoneRegex.test(text) || text.includes('CALLS') || text.includes('1-866');

    return (
      hasDigits && (hasPhoneFormat || text.includes('-') || text.includes('('))
    );
  };

  return (
    <section className="relative bg-gradient-to-br from-[#c9c2cf] via-[#d6cfdd] to-[#bcb4c4] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background elements - responsive */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white/20 rounded-full blur-2xl sm:blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-300/20 rounded-full blur-2xl sm:blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - responsive typography */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h1 className="!text-3xl md:!text-4xl lg:!text-5xl font-bold font-serif !text-[#5f2d85] px-4">
            Quebec Regional
            <span className="block text-transparent bg-gradient-to-r from-[#5f2d85] to-[#8b3d9e] bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2">
              Crisis Support Centres
            </span>
          </h1>
        </div>

        {/* Cards Grid - Responsive with equal heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {centres.map((centre, index) => (
            <div key={index} className="flex flex-col h-full">
              {/* Image Card - Clickable Link with NO CUTOFF */}
              <Link
                to={centre.path}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-t-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/50 cursor-pointer"
              >
                {/* Gradient top bar - responsive */}
                <div className="h-1 sm:h-2 bg-gradient-to-r from-[#5f2d85] via-pink-600 to-[#5f2d85]"></div>

                {/* Image Container - FULL VISIBILITY with object-contain */}
                <div 
                  className="relative w-full bg-gray-100 flex items-center justify-center p-4 sm:p-5 md:p-6"
                  style={{ minHeight: '140px', height: 'auto' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <img
                    src={centre.image}
                    alt={centre.title}
                    className="w-full h-auto max-h-28 sm:max-h-32 md:max-h-36 object-contain transform group-hover:scale-105 transition duration-700"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        'https://via.placeholder.com/400x120/4a6fa5/ffffff?text=Crisis+Centre';
                    }}
                  />

                  {/* Arrow indicator - responsive */}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 z-20">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-[#5f2d85]"
                      fill="none"
                      stroke="#5f2d85"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 pointer-events-none"></div>
              </Link>

              {/* Lines Section - Equal height with flex */}
              <div className="mt-1 p-4 sm:p-5 bg-white/95 backdrop-blur-sm rounded-b-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 flex-1 flex flex-col">
                <div className="space-y-2 sm:space-y-2.5 flex-1">
                  <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-800 border-b-2 border-purple-500 pb-2 inline-block break-words">
                    {centre.title}
                  </h4>
                  <div className="space-y-1.5 sm:space-y-2">
                    {centre.lines.map((line, i) => {
                      const isPhoneNumber = containsPhoneNumber(line);
                      const isMainNumber =
                        isPhoneNumber &&
                        (line.toLowerCase().includes('crisis') ||
                          line.toLowerCase().includes('intervention') ||
                          line.toLowerCase().includes('call') ||
                          line.toLowerCase().includes('line'));
                      const isHours =
                        line.toLowerCase().includes('am') ||
                        line.toLowerCase().includes('pm') ||
                        line.toLowerCase().includes('24') ||
                        line.toLowerCase().includes('hour');
                      const isLocation =
                        line.includes('Quebec') ||
                        line.includes('MRC') ||
                        line.toLowerCase().includes('region');

                      let bgColor = 'bg-gray-50/50';
                      let textColor = 'text-gray-700';
                      
                      if (isMainNumber) {
                        bgColor = 'bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500';
                        textColor = 'text-[#5f2d85] font-medium';
                      } else if (isPhoneNumber) {
                        bgColor = 'bg-purple-50/30 border border-purple-200';
                      } else if (isHours) {
                        bgColor = 'bg-blue-50/50 border border-blue-100';
                      } else if (isLocation) {
                        bgColor = 'bg-emerald-50/50 border border-emerald-100';
                      }

                      let icon = null;
                      if (isMainNumber) icon = '📞';
                      else if (isPhoneNumber && !isMainNumber) icon = '📱';
                      else if (isHours && !isPhoneNumber) icon = '⏰';
                      else if (isLocation && !isPhoneNumber && !isHours) icon = '📍';

                      return (
                        <div
                          key={i}
                          className={`${bgColor} text-xs sm:text-sm p-2 sm:p-3 rounded-lg transition-all duration-300 hover:shadow-md`}
                        >
                          <p
                            className={`${textColor} leading-relaxed flex items-start gap-1.5 sm:gap-2`}
                          >
                            {icon && (
                              <span className="text-base sm:text-lg flex-shrink-0">{icon}</span>
                            )}
                            <span className="break-words flex-1">{line}</span>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative bottom pattern - responsive */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-12 sm:mt-14 md:mt-16 lg:mt-20">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400/50 animate-pulse"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink-400/50 animate-pulse delay-75"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400/50 animate-pulse delay-150"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink-400/50 animate-pulse delay-200"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400/50 animate-pulse delay-300"></div>
        </div>
      </div>
    </section>
  );
};

export default QCRegionalCrisisCentres;