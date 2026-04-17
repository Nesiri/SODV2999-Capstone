import React from 'react';

type CrisisEntry = {
  name: string;
  phone: string;
};

type CountryCrisisData = {
  country: string;
  services: CrisisEntry[];
};

const crisisData: CountryCrisisData[] = [
  {
    country: 'ENGLAND',
    services: [{ name: 'The Samaritans', phone: '08457-90-90-90' }],
  },
  {
    country: 'FRANCE',
    services: [{ name: 'National crisis line', phone: '01-45-39-40-00' }],
  },
  {
    country: 'NETHERLANDS',
    services: [{ name: 'National crisis line', phone: '0900-1450' }],
  },
  {
    country: 'BEIJING',
    services: [{ name: 'Befrienders', phone: '03-5286-9090' }],
  },
  {
    country: 'HONG KONG',
    services: [{ name: 'The Samaritans HK', phone: '2896-0000' }],
  },
  {
    country: 'SHANGHAI',
    services: [{ name: 'Life Line', phone: '021-6279-8990' }],
  },
  {
    country: 'OSAKA',
    services: [
      { name: 'Befrienders Osaka', phone: '81-066-260-4343' },
      { name: 'Children & Families', phone: '03-4550-1146' },
      { name: 'Counseling Center', phone: '03-4550-1146' },
    ],
  },
  {
    country: 'TOKYO',
    services: [{ name: 'Life Line Tokyo', phone: '03-5774-0992' }],
  },
  {
    country: 'NORTHERN IRELAND',
    services: [
      { name: '1life', phone: '1-800-247-100 / text HELP to 51444' },
      { name: 'Bodywhys (Anorexia & Bulimia)', phone: '01-283-5126' },
      { name: 'Childline', phone: '1-800-666-666 / 0800-1111' },
      { name: 'Contact Youth', phone: '028-90457848' },
      {
        name: 'Eating Disorders Assessment (NI)',
        phone: '90618299 / 90621627',
      },
      { name: 'Nexus Belfast Centre', phone: '028-9032-6803' },
      { name: 'Nexus Londonderry Centre', phone: '028-7126-0566' },
      { name: 'Nexus Enniskillen', phone: '028-6632-0046' },
      { name: 'Nexus Portadown', phone: '028-3835-0588' },
      {
        name: 'Community Addiction Service',
        phone: '028 90664434 / 90330499 / 90731602',
      },
      { name: 'Child Protection Helpline', phone: '0800-800500' },
      { name: 'Rape Crisis & Sexual Abuse Centre', phone: '028-9024-9696' },
      { name: 'Victim Support Belfast', phone: '028-9024-4039' },
      { name: 'Samaritans', phone: '1-850-60-90-90' },
      { name: 'Young Persons Advice Line', phone: '0808-808-5678' },
      { name: 'Youthline', phone: '0808-808-8000' },
      { name: 'Zest Suicide Prevention Londonderry', phone: '028-71266999' },
    ],
  },
  {
    country: 'SRI LANKA',
    services: [
      { name: 'Bandarawela', phone: '0572222662' },
      { name: 'Kandy', phone: '081-2234806' },
      { name: 'Katunayake', phone: '011311020' },
      { name: 'Kohuwela', phone: '5780153' },
      { name: 'Kurunegala', phone: '0374931731' },
      { name: 'Lunugamvehera', phone: '0475781200' },
      { name: 'Matale', phone: '0662223521' },
      { name: 'Mawanelle', phone: '035-5788330' },
      { name: 'Panadura', phone: '038-2235291' },
      { name: 'Panduwasnuwara', phone: '0372291718' },
      { name: 'Panduwasnuwera', phone: '0375715815' },
      { name: 'Sumithrayo – Colombo', phone: '2692909 / 2696666 / 2683555' },
    ],
  },
  {
    country: 'UNITED KINGDOM',
    services: [
      { name: 'Alcoholics Anonymous', phone: '0845-769-7555' },
      { name: 'Childline', phone: '0800-1111' },
      { name: 'Cruse Bereavement Care', phone: '0870-1671677' },
      { name: 'Family Line', phone: '0808-800-5678' },
      { name: 'Farmers in Difficulty', phone: '07002-326326' },
      { name: 'National Debt Helpline', phone: '0808-084000' },
      { name: 'National Drugs Helpline', phone: '0800-77-66-00' },
      { name: 'Papyrus Hopeline', phone: '0870-1704000' },
      { name: 'Sexuality', phone: '020-7837-7324' },
      { name: 'The Samaritans', phone: '08457-90-90-90' },
      { name: 'Violence & Crime', phone: '0845-30-30-900' },
      { name: 'Woman’s Aid Domestic Helpline', phone: '08457-023468' },
    ],
  },
  {
    country: 'SCOTLAND',
    services: [
      { name: 'Age Scotland', phone: '0845-125-9732' },
      { name: 'Alternatives Crisis Pregnancy Trust', phone: '01382-221112' },
      { name: 'Angus Women’s Aid Supportline', phone: '01241-439457' },
      { name: 'Anti-Social Behaviour Helpline', phone: '0800-1691283' },
      { name: 'Breathing Space Scotland', phone: '0800-83-85-87' },
      { name: 'Caithness & Sutherland Women’s Aid', phone: '01955-606971' },
      { name: 'Central Scotland Rape Crisis Centre', phone: '01786-471771' },
      { name: 'Chest, Heart & Stroke', phone: '0845-077-6000' },
      { name: 'Child Protection Line', phone: '0800-0223222' },
      { name: 'Debt Line Scotland', phone: '020-7553-7640' },
      { name: 'Dementia Helpline', phone: '0808-808-3000' },
      { name: 'Drugs Action', phone: '01224-594700' },
      { name: 'Edinburgh Crisis Centre', phone: '0808-801-0414' },
      { name: 'Epilepsy Scotland', phone: '0808-8002200' },
      { name: 'Families Anonymous', phone: '0845-1200660' },
      { name: 'Fife Independent Disability Helpline', phone: '01592-203993' },
      { name: 'Glasgow Battered Women’s Aid', phone: '0141-553-2022' },
      {
        name: 'Interactions Counseling & Support Services',
        phone: '01592-262869',
      },
      { name: 'Inverclyde Women’s Aid', phone: '01475-888505' },
      { name: 'Lothian LGBT Helpline', phone: '0131-556-4049' },
      { name: 'NHS 24 HR Helpline', phone: '08454-24-24-24' },
      { name: 'NHS INFORM Scotland Helpline', phone: '0800-22-44-8' },
      { name: 'One Parent Families Scotland', phone: '0808-8010323' },
      { name: 'Parentline Scotland', phone: '0800-028-2233' },
      { name: 'Perth & Kinross Drug & Alcohol Team', phone: '01738-474455' },
      { name: 'Rape Crisis Scotland', phone: '08088-01-03-02' },
      { name: 'Scottish Domestic Abuse Helpline', phone: '0800-027-1234' },
      { name: 'Scottish Women’s Aid', phone: '0800-027-1234' },
      { name: 'Shelter Scotland', phone: '0808-800-4444' },
      { name: 'The Samaritans', phone: '08457-90-90-90' },
      { name: 'Scottish Prisoners Family Helpline', phone: '0500-839383' },
      { name: 'Women’s Aid Edinburgh', phone: '0131-315-8110' },
      { name: 'Your Call', phone: '0808-801-03-62' },
    ],
  },
];

const InternationalNationWide: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#F8F2F5] via-[#F0E9F0] to-[#E8DFE8] py-24 overflow-hidden">
      {/* Modern abstract pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='1.5' fill='%23948374' fill-opacity='0.3'/%3E%3Ccircle cx='20' cy='20' r='1' fill='%23948374' fill-opacity='0.2'/%3E%3Ccircle cx='60' cy='60' r='1' fill='%23948374' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        ></div>
      </div>

      {/* Soft luminous gradients */}
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-[#D4C1C1]/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] bg-[#C1B1A1]/20 rounded-full blur-[100px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header with elegant typography */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] text-[#B266C9] uppercase font-light block mb-4">
            — You Are Not Alone —
          </span>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-serif font-medium leading-tight !text-[#89009B] mb-4">
            International
            <span className="block text-transparent bg-[#B266C9] bg-clip-text text-3xl xs:text-5xl sm:text-5xl mt-1 sm:mt-2">
              Crisis Centres
            </span>
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#B266C9] to-transparent mx-auto"></div>
        </div>

        {/* Card grid - Reorganized for better layout and fit */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {crisisData.map((countryData, index) => (
            <div
              key={index}
              className="block group relative transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Card shadow layers */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#5f2d85]/20 to-[#5f2d85]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main card - VERTICAL LAYOUT */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-5 shadow-xl border border-white/60 hover:border-[#5f2d85]/30 transition-all duration-300 h-full flex flex-col">
                {/* Country name as header */}
                <div className="mb-3 pb-2 border-b border-[#E8DFE8]">
                  <h2 className="!text-xl font-serif !text-[#2A3B3C] group-hover:text-[#5f2d85] transition-colors duration-300">
                    {countryData.country}
                  </h2>
                </div>

                {/* Services list */}
                <div className="flex-grow space-y-3 max-h-80 overflow-y-auto pr-1 custom-scrollbar">
                  {countryData.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="group/service">
                      <h3 className="!text-sm font-medium !text-[#4A5A5C] mb-1">
                        {service.name}
                      </h3>
                      <div className="flex items-start gap-2">
                        <span className="!text-[#5f2d85] mt-0.5 flex-shrink-0 !text-base">
                          📞
                        </span>
                        <span className="!text-[#5f2d85] !font-normal !break-all !text-base hover:text-[#5f2d85] transition-colors duration-200">
                          {service.phone}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Service count indicator */}
                <div className="mt-3 pt-2 border-t border-[#E8DFE8] text-xs text-[#5f2d85]">
                  {countryData.services.length}{' '}
                  {countryData.services.length === 1 ? 'service' : 'services'}{' '}
                  available
                </div>

                {/* Subtle decorative element */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#5f2d85]/30 text-3xl font-serif">
                    ✦
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add custom scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #F0E9F0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #5f2d85;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #5f2d85;
        }
      `}</style>
    </section>
  );
};

export default InternationalNationWide;
