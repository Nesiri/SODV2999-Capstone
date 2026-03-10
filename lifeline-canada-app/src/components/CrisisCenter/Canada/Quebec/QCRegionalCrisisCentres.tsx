import React from 'react';
import { Link } from 'react-router-dom';

const centres = [
  {
    title: 'Suicide Prevention Centre and Crisis Intervention – Bas-Laurent',
    image: '/assets/CanadaCenter_image/QC/bas_laurent.png',
    path: '#',
    lines: [
      'Rimouski (Quebec)',
      'Line of intervention: (418) 724-2463',
    ],
  },
  {
    title: 'Rivière-du-Loup Crisis Line',
    image: '/assets/CanadaCenter_image/QC/du_loup.png',
    path: '#',
    lines: [
      '(418) 862-9658',
      '1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'Centre de Prévention Suicide Arthabaska-Érable',
    image: '/assets/CanadaCenter_image/QC/erable.png',
    path: '#',
    lines: [
      'MRC d’Arthabaska: (819) 751-2205',
      'MRC de l’Érable: (819) 362-8581',
    ],
  },
  {
    title: 'Suicide Prevention Committee Lebel-sur-Quévillon',
    image: '/assets/CanadaCenter_image/QC/lebel.png',
    path: '#',
    lines: [
      'Line of intervention: 1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'Saguenay / Lac-Saint-Jean',
    image: '/assets/CanadaCenter_image/QC/lac_saint_jean.png',
    path: '#',
    lines: [
      'Line of intervention: (418) 545-1919',
    ],
  },
  {
    title: 'Capitale-National – Baie-St-Paul',
    image: '/assets/CanadaCenter_image/QC/capitale.jpg',
    path: '#',
    lines: [
      'Line of intervention: (418) 435-2212',
    ],
  },
  {
    title: 'Suicide Prevention Centre (Quebec)',
    image: '/assets/CanadaCenter_image/QC/ciel.png',
    path: '#',
    lines: [
      'Line of intervention: 1-844-285-3283',
    ],
  },
  {
    title: 'Suicide Prevention Centre of Upper St-Mauricie',
    image: '/assets/CanadaCenter_image/QC/mauricie.png',
    path: '#',
    lines: [
      'Line of intervention: 1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'Suicide Prevention Centre of Accalmie',
    image: '/assets/CanadaCenter_image/QC/accalmie.png',
    path: '#',
    lines: [
      'Line of intervention: 1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'JEVI Suicide Prevention Centre – Estrie',
    image: '/assets/CanadaCenter_image/QC/estrie.png',
    path: '#',
    lines: [
      '819-564-1354',
    ],
  },
  {
    title: 'Outaouis Help Centre 24/7',
    image: '/assets/CanadaCenter_image/QC/oitaouis.png',
    path: '#',
    lines: [
      'Line of intervention: (819) 595-9999',
    ],
  },
  {
    title: 'Amos Suicide Prevention Centre',
    image: '/assets/CanadaCenter_image/QC/amos.png',
    path: '#',
    lines: [
      'Line of intervention: 1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'Suicide Prevention in Abitibi-Témiscamingue – Malartic',
    image: '/assets/CanadaCenter_image/QC/abitibi.png',
    path: '#',
    lines: [
      'Line of intervention: 1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'Chaudiere-Appalaches – Service Urgence-Distress Crisis',
    image: '/assets/CanadaCenter_image/QC/chaudiere.png',
    path: '#',
    lines: [
      'Line of intervention: 1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'Suicide Prevention Committee Senneterre',
    image: '/assets/CanadaCenter_image/QC/senneterre.png',
    path: '#',
    lines: [
      'Line of intervention: 1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'Suicide Prevention Centre-de-Golden Valley – Val-d’Or',
    image: '/assets/CanadaCenter_image/QC/de_golden.png',
    path: '#',
    lines: [
      'Line of intervention: 1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'North Shore Suicide Prevention Centre – Baie-Comeau',
    image: '/assets/CanadaCenter_image/QC/baie_comeau.png',
    path: '#',
    lines: [
      'Line of action: 1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'Listening Centre and Suicide Prevention – Beauce-Etchemin',
    image: '/assets/CanadaCenter_image/QC/beauce-etchemin.png',
    path: '#',
    lines: [
      'Line of intervention: (418) 228-0001',
    ],
  },
  {
    title: 'Ilot-Laval Crisis Regional Service',
    image: '/assets/CanadaCenter_image/QC/ilot-laval.png',
    path: '#',
    lines: [
      'Line of intervention: 1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'Lanaudière Suicide Prevention Centre',
    image: '/assets/CanadaCenter_image/QC/lanaudiere.png',
    path: '#',
    lines: [
      'Line of intervention: 1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'Faubourg Suicide Prevention Centre – St-Jérôme',
    image: '/assets/CanadaCenter_image/QC/faubourg.png',
    path: '#',
    lines: [
      'Line of intervention: (450) 569-0101',
    ],
  },
  {
    title: 'The House Under the Trees',
    image: '/assets/CanadaCenter_image/QC/thehouse_undertree.png',
    path: '#',
    lines: [
      'Crisis intervention line: (450) 699-5935',
      '1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'The Access Crisis Intervention Centre in Longueuil',
    image: '/assets/CanadaCenter_image/QC/quebec_nationalcenter.png',
    path: '#',
    lines: [
      'Line of intervention: (450) 679-8689',
      '1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'Suicide Prevention Centre Pierre-de-Saurel – Sorel-Tracy',
    image: '/assets/CanadaCenter_image/QC/ciel.png',
    path: '#',
    lines: [
      'Line of intervention: (450) 746-0303',
    ],
  },
  {
    title: 'Haut-Richelieu Suicide Prevention Centre – St-Jean-Sur-Richelieu',
    image: '/assets/CanadaCenter_image/QC/haut-richelieu.png',
    path: '#',
    lines: [
      'Line of intervention: (450) 348-6300',
      '1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'The Turn, Crisis Centre and Suicide Prevention – Suroit Region',
    image: '/assets/CanadaCenter_image/QC/suroit.png',
    path: '#',
    lines: [
      'Line of intervention: (450) 371-4090',
      '1-866-CALLS (277-3553)',
    ],
  },
  {
    title: 'Listening Centre and Preventing Suicide – Drummondville',
    image: '/assets/CanadaCenter_image/QC/drummondville.png',
    path: '#',
    lines: [
      'Line of intervention: 1-866-CALLS (277-3553)',
    ],
  },
];

const QCRegionalCrisisCentres: React.FC = () => {
  // Helper function to check if a line contains a phone number
  const containsPhoneNumber = (text: string): boolean => {
    // Check for patterns like (XXX) XXX-XXXX, XXX-XXX-XXXX, or X-XXX-XXX-XXXX
    const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}|\d{1}[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/;
    // Check for patterns like 1-866-CALLS or any text with digits
    const hasDigits = /\d/.test(text);
    const hasPhoneFormat = phoneRegex.test(text) || text.includes('CALLS') || text.includes('1-866');
    
    return hasDigits && (hasPhoneFormat || text.includes('-') || text.includes('('));
  };

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
            Quebec Regional
            <span className="block text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-2">
              Crisis Support Centres
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-600/50 via-pink-600/50 to-purple-600/50 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {centres.map((centre, index) => (
            <div key={index} className="flex flex-col h-full">
              {/* Image Card - Clickable Link */}
              <Link
                to={centre.path}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/50 cursor-pointer"
              >
                {/* Gradient top bar */}
                <div className="h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <img
                    src={centre.image}
                    alt={centre.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        'https://via.placeholder.com/400x200/4a6fa5/ffffff?text=Crisis+Centre';
                    }}
                  />

                  {/* Arrow indicator */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 z-20">
                    <svg
                      className="w-4 h-4 text-purple-600"
                      fill="none"
                      stroke="currentColor"
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
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
              </Link>

              {/* Lines Section - Beautiful Card Below */}
              <div className="mt-1 p-5 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 flex-1">
                <div className="space-y-2.5">
                  <h4 className="text-2xl font-normal text-gray-800 border-b-2 border-purple-500 pb-2 inline-block">
                    {centre.title}
                  </h4>
                  {centre.lines.map((line, i) => {
                    const isPhoneNumber = containsPhoneNumber(line);
                    const isMainNumber = isPhoneNumber && (
                      line.toLowerCase().includes('crisis') ||
                      line.toLowerCase().includes('intervention') ||
                      line.toLowerCase().includes('call') ||
                      line.toLowerCase().includes('line')
                    );
                    const isHours =
                      line.toLowerCase().includes('am') ||
                      line.toLowerCase().includes('pm') ||
                      line.toLowerCase().includes('24') ||
                      line.toLowerCase().includes('hour');
                    const isLocation = line.includes('Quebec') || 
                                      line.includes('MRC') ||
                                      line.toLowerCase().includes('region');

                    let bgColor = 'bg-gray-50/50';
                    if (isMainNumber)
                      bgColor =
                        'bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500';
                    else if (isPhoneNumber)
                      bgColor = 'bg-purple-50/30 border border-purple-200';
                    else if (isHours)
                      bgColor = 'bg-blue-50/50 border border-blue-100';
                    else if (isLocation)
                      bgColor = 'bg-emerald-50/50 border border-emerald-100';

                    return (
                      <div
                        key={i}
                        className={`${bgColor} text-sm p-3 rounded-lg transition-all duration-300 hover:shadow-md`}
                      >
                        <p
                          className={`${isMainNumber ? 'font-semibold text-purple-800' : 'text-gray-700'} leading-relaxed flex items-start gap-2`}
                        >
                          {isMainNumber && (
                            <span className="text-purple-500 mt-0.5">📞</span>
                          )}
                          {isPhoneNumber && !isMainNumber && (
                            <span className="text-purple-400 mt-0.5">📱</span>
                          )}
                          {isHours && !isPhoneNumber && (
                            <span className="text-blue-500 mt-0.5">⏰</span>
                          )}
                          {isLocation && !isPhoneNumber && !isHours && (
                            <span className="text-emerald-500 mt-0.5">📍</span>
                          )}
                          <span>{line}</span>
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
        <div className="flex justify-center gap-3 mt-16 lg:mt-20">
          <div className="w-2 h-2 rounded-full bg-purple-400/50 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-pink-400/50 animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-purple-400/50 animate-pulse delay-150"></div>
          <div className="w-2 h-2 rounded-full bg-pink-400/50 animate-pulse delay-200"></div>
          <div className="w-2 h-2 rounded-full bg-purple-400/50 animate-pulse delay-300"></div>
        </div>
      </div>
    </section>
  );
};

export default QCRegionalCrisisCentres;