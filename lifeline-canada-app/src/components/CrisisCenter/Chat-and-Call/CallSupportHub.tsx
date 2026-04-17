import React from 'react';
import { Phone, MapPin, Globe } from 'lucide-react';

type CrisisEntry = {
  name: string;
  phone: string;
};

type CountryCrisis = {
  country: string;
  services: CrisisEntry[];
};

type CrisisGroup = {
  group: string;
  image: string;
  countries: CountryCrisis[];
};

const groupedCrisisCenters: CrisisGroup[] = [
  {
    group: 'Canada',
    image: '/assets/CrisisCenter/canadaHeart-300x272.webp',
    countries: [
      {
        country: 'Canada',
        services: [
          {
            name: '988 Suicide & Crisis Lifeline',
            phone: '988',
          },
          {
            name: 'KidsHelpPhone Ages 20 Years and Under in Canada',
            phone: '1-800-668-6868',
          },
          {
            name: 'First Nations and Inuit Hope for Wellness 24/7 Help Line',
            phone: '1-855-242-3310',
          },
          {
            name: 'Canadian Indian Residential Schools Crisis Line',
            phone: '1-866-925-4419',
          },
          { name: 'Trans LifeLine – All Ages', phone: '1-877-330-6366' },
          { name: 'Alberta Crisis Line – All Ages', phone: '403-266-4357' },
          {
            name: 'British Columbia Crisis Line – All Ages',
            phone: '1-800-SUICIDE',
          },
          { name: 'British Columbia Mental Health Support', phone: '310-6789' },
          { name: 'BC211 – Referral Hotline 24/7', phone: 'Dial 211' },
          { name: 'Manitoba Crisis Line – All Ages', phone: '1-877-435-7170' },
          {
            name: 'New Brunswick Crisis Line – All Ages',
            phone: '1-800-667-5005',
          },
          {
            name: 'Newfoundland and Labrador Line All Ages',
            phone: '1-888-737-4668',
          },
          { name: 'NWT All Ages 24/7', phone: '1-800-661-0844' },
          {
            name: 'Nova Scotia Crisis Line – All Ages',
            phone: '1-888-429-8167',
          },
          {
            name: 'Nunavut Line – All Ages 7 pm-11 pm (EST)',
            phone: '1-800-265-3333',
          },
          { name: 'Ontario Crisis Line – All Ages', phone: '1-866-531-2600' },
          {
            name: 'Ontario College and University Students',
            phone: '1-866-925-5454',
          },
          {
            name: 'Ontario York and Simcoe Support Services Network',
            phone: '1-855-310-COPE (2673)',
          },
          {
            name: 'Ontario – Kenora, Dryden, Fort Frances, Rainy River and everywhere in between',
            phone: '1-866-888-8988',
          },
          {
            name: 'Prince Edward Island Crisis Line – All Ages',
            phone: '1-800-218-2885',
          },
          {
            name: 'Quebec National Crisis Line – All Ages',
            phone: '1-866-277-3553',
          },
          {
            name: 'Saskatchewan Crisis Line – All Ages',
            phone: '1-306-525-5333',
          },
          {
            name: 'Yukon Crisis Line – All Ages 7 pm-12 am (PST)',
            phone: '1-844-533-3030',
          },
        ],
      },
    ],
  },
  {
    group: 'USA',
    image: '/assets/CrisisCenter/usaHeart-400x231.jpg',
    countries: [
      {
        country: 'United States',
        services: [
          {
            name: '988 Suicide & Crisis Lifeline',
            phone: '988',
          },
          { name: 'Trans LifeLine – U.S.A.', phone: '1-877-565-8860' },
          { name: 'The Trevor Project Lifeline', phone: '866-488-7386' },
          {
            name: 'U.S. National Suicide Prevention LifeLine',
            phone: '1-800-273-TALK',
          },
          {
            name: 'Military Veterans Canada and U.S.A.',
            phone: '1-800-273-8255 Press 2 for Spanish',
          },
        ],
      },
    ],
  },
  {
    group: 'International',
    image: '/assets/CrisisCenter/heart-earth-globe-e1686616467774-400x319.jpg',
    countries: [
      {
        country: 'United Kingdom',
        services: [
          { name: 'CHILDLINE', phone: '0800-1111' },
          { name: 'Family Line', phone: '0808-800-5678' },
          { name: 'Papyrus Hopeline', phone: '0870-1704000' },
          { name: 'The Samaritans', phone: '116123' },
        ],
      },
      {
        country: 'France',
        services: [{ name: 'National crisis line', phone: '01-45-39-40-00' }],
      },
      {
        country: 'Netherlands',
        services: [{ name: 'National crisis line', phone: '0900-1450' }],
      },
      {
        country: 'India',
        services: [
          { name: 'SNEHA A Link With Life', phone: '91-44-2464-0050' },
        ],
      },
      {
        country: 'Ireland',
        services: [
          { name: '1life', phone: '1-800-247-100 or text HELP to 51444' },
          { name: 'The Samaritans', phone: '18-50-60-90-90' },
        ],
      },
      {
        country: 'Japan',
        services: [
          { name: 'Befrienders Osaka', phone: '81-066-260-4343' },
          { name: 'Children & Families', phone: '03-4550-1146' },
          { name: 'Counseling Center', phone: '03-4550-1146' },
          { name: 'Life Line Tokyo', phone: '03-5774-0992' },
        ],
      },
      {
        country: 'China',
        services: [
          { name: 'Beijing – Befrienders', phone: '03-5286-9090' },
          { name: 'Hong Kong – The Samaritans', phone: '2896-0000' },
          { name: 'Shanghai – Life Line', phone: '021-6279-8990' },
        ],
      },
      {
        country: 'Sri Lanka',
        services: [
          { name: 'Panadura', phone: '038-2235291' },
          { name: 'Panduwasnuwara', phone: '0372291718' },
          { name: 'Panduwasnuwera', phone: '0375715815' },
          {
            name: 'Sumithrayo – Colombo',
            phone: '2692909 / 2696666 / 2683555',
          },
          { name: 'Bandarawela', phone: '0572222662' },
          { name: 'Kandy', phone: '081-2234806' },
          { name: 'Katunayake', phone: '011311020' },
          { name: 'Kohuwela', phone: '5780153' },
          { name: 'Kurunegala', phone: '0374931731' },
          { name: 'Lunugamvehera', phone: '0475781200' },
          { name: 'Matale', phone: '0662223521' },
          { name: 'Mawanelle', phone: '035-5788330' },
        ],
      },
      {
        country: 'New Zealand',
        services: [
          { name: 'LifeLine NZ within Auckland', phone: '09-5222-999' },
          { name: 'LifeLine NZ outside Auckland', phone: '0800-543-354' },
        ],
      },
      {
        country: 'Northern Ireland',
        services: [
          { name: 'Childline', phone: '0800-1111' },
          { name: 'Contact Youth', phone: '028-90457848' },
          { name: 'Samaritans', phone: '1-850-60-90-90' },
          { name: 'Young Persons Advice line', phone: '0808-808 5678' },
          { name: 'Youthline', phone: '0808-808 8000' },
          {
            name: 'Zest for the prevention of suicide Londonderry',
            phone: '028-71266999',
          },
        ],
      },
      {
        country: 'Scotland',
        services: [
          { name: 'Age Scotland', phone: '0845-125-9732' },
          { name: 'Breathing Space Scotland', phone: '0800-83-85-87' },
          { name: 'Edinburgh Crisis Centre', phone: '0808-801-0414' },
          {
            name: 'Interactions Counseling & Support Services',
            phone: '01592-262869',
          },
          { name: 'Lothian LGBT Helpline', phone: '0131-556-4049' },
          { name: 'NHS 24 HR Helpline', phone: '08454-24-24-24' },
          { name: 'NHS INFORM Scotland Helpline', phone: '0800-22-44-88' },
          { name: 'The Samaritans', phone: '116123' },
        ],
      },
    ],
  },
];

const CrisisCenterDirectory: React.FC = () => {
  const getGroupIcon = (group: string) => {
    switch (group) {
      case 'Canada':
        return '🍁';
      case 'USA':
        return '🗽';
      default:
        return '🌍';
    }
  };

  const getGradientColors = (group: string) => {
    switch (group) {
      case 'Canada':
        return 'from-red-500 to-white via-red-400';
      case 'USA':
        return 'from-blue-600 to-red-500 via-white';
      default:
        return 'from-emerald-500 to-teal-400 via-emerald-400';
    }
  };

  // Calculate total services across all countries
  const getTotalServices = (countries: CountryCrisis[]) => {
    return countries.reduce(
      (total, country) => total + country.services.length,
      0
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-8">
      {/* Header - Elegant minimal design */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-300" />
          <svg
            className="w-10 h-10 text-rose-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5f2d85"
            strokeWidth="1.5"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-300" />
        </div>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groupedCrisisCenters.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="group relative transform transition-all duration-500 hover:-translate-y-2"
          >
            {/* Card */}
            <div className="relative h-full !bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50">
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${getGradientColors(group.group)} opacity-20`}
                />
                <img
                  src={group.image}
                  alt={group.group}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Group Badge */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="text-3xl filter drop-shadow-lg">
                    {getGroupIcon(group.group)}
                  </span>
                  <span className="px-4 py-2 !bg-white/90 backdrop-blur-sm rounded-full text-lg font-bold text-gray-800 shadow-lg">
                    {group.group}
                  </span>
                </div>

                {/* Total Service Count */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
                  {getTotalServices(group.countries)} Total Services
                </div>
              </div>

              {/* Countries and Services List */}
              <div className="p-6">
                <div className="space-y-6 max-h-[500px] overflow-y-auto custom-scrollbar pr-2">
                  {group.countries.map((country, countryIndex) => (
                    <div key={countryIndex} className="space-y-3">
                      {/* Country Header */}
                      <div className="flex items-center space-x-2 sticky top-0 !bg-white/90 backdrop-blur-sm py-2 z-10">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <h2 className="font-bold !text-gray-700 text-md uppercase tracking-wide">
                          {country.country}
                        </h2>
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                          {country.services.length}
                        </span>
                      </div>

                      {/* Services for this country */}
                      {country.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="group/item p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-lg"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-normal text-gray-800 text-sm mb-2 line-clamp-2 pr-2">
                                {service.name}
                              </h3>
                              <div className="inline-flex items-center space-x-2 text-blue-600">
                                <Phone className="w-4 h-4 !text-[#5f2d85]" />
                                <span className="text-sm !text-[#5f2d85] font-mono bg-blue-50 px-3 py-1 rounded-full">
                                  {service.phone}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {group.countries.length}{' '}
                    {group.countries.length === 1 ? 'Country' : 'Countries'}
                  </span>
                  <span className="flex items-center">
                    <Globe className="w-4 h-4 mr-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Footer */}
      <div className="max-w-7xl mx-auto mt-12 text-center"></div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ec4899, #8b5cf6);
          border-radius: 10px;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default CrisisCenterDirectory;
