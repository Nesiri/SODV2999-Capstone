import { useState } from 'react';
import { Link } from 'react-router-dom';

// Constants data
const crisisCenters = [
  {
    country: 'Canada',
    name: 'ConnecTeen',
    description:
      'ConnecTeen is a confidential peer support service for youth in Calgary and area. If you ever have a question, a problem or just need someone to talk to, give us a call, drop us an email, send us a text or chat with us online.',
    link: 'https://calgaryconnecteen.com/',
    image: '/assets/call-chat/online-chat/connect-teen.png',
  },
  {
    country: 'USA',
    name: 'Teen Line',
    description:
      'Text “TEEN” to 839863 Peer counselors are available from 6pm to 9pm PST',
    link: 'https://didihirsch.org/teenline/',
    image: '/assets/call-chat/online-chat/teen-line.png',
  },
  {
    country: 'Australia',
    name: 'Kids Helpline',
    description:
      'Email counselling is perfect for you if you can’t get to a phone or prefer to write things down. One of our counsellors will read your email carefully and reply with info, questions and suggestions for you.',
    link: 'https://kidshelpline.com.au/get-help/email-counselling',
    image: '/assets/call-chat/online-chat/kids-helpline.png',
  },
  {
    country: 'United Kingdom',
    name: 'Childline',
    description:
      'Writing can be a great way of getting things out. And emailing our counsellors gives you the space to say exactly what you want, in the way you want. You can share as much detail about yourself as you like. And you can double check what you’ve written before you send it to us.',
    link: 'https://www.childline.org.uk/get-support/contacting-childline/',
    image: '/assets/call-chat/online-chat/child-line.png',
  },
  {
    country: 'United Kingdom',
    name: 'Samaritans',
    description:
      "We’re here round the clock, 24 hours a day, 365 days a year. If you need a response immediately, it's best to call us on the phone. This number is FREE to call. You don’t have to be suicidal to call us. Email Jo@samaritans.org",
    link: 'https://www.samaritans.org/how-we-can-help/contact-samaritan/',
    image: '/assets/call-chat/online-chat/samaritans.png',
  },
  {
    country: 'Ireland',
    name: 'Pieta House',
    description:
      'Pieta House provides a free, therapeutic approach to people who are in suicidal distress and those who engage in self-harm.',
    link: 'https://www.pieta.ie/',
    image: '/assets/call-chat/online-chat/pieta.png',
  },
  {
    country: 'Asia',
    name: 'Befrienders (Malaysia)',
    description:
      'If you are feeling like you have no one else to turn to, or if you just need a safe place to talk, please contact them. They are always there to listen, you are not alone.',
    link: 'https://befrienders.org/',
    image: '/assets/call-chat/online-chat/befrienders.png',
  },
  {
    country: 'Asia',
    name: 'Sneha (India)',
    description:
      'Email help@snehaindia.org. SNEHA is open 24 hours a day for telephone calls and from 8am to 10pm for visits daily.',
    link: 'https://snehaindia.org/new/',
    image: '/assets/call-chat/online-chat/sneha.png',
  },
  {
    country: 'Asia',
    name: 'Samaritans of Singapore',
    description:
      'SOS is the only suicide prevention centre in Singapore. It is a secular non-profit organisation which provides 24-hour confidential emotional support to people who have difficulty coping during a crisis, who are thinking of suicide or affected by suicide.',
    link: 'https://www.samaritans.org/',
    image: '/assets/call-chat/online-chat/singapore-samaritans.png',
  },
];

// Main Component
const ChatCrisisSupportHub = () => {
  const [selectedCountry, setSelectedCountry] = useState('All');

  // Get unique countries for filter
  const countries = [
    'All',
    ...new Set(crisisCenters.map((center) => center.country)),
  ];

  // Filter centers based on selected country
  const filteredCenters =
    selectedCountry === 'All'
      ? crisisCenters
      : crisisCenters.filter((center) => center.country === selectedCountry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5f2d85]/10 to-blue-500/10 text-black">
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h5 className="!text-3xl sm:!text-5xl font-normal mb-4">
            Crisis Support & Helplines
          </h5>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Country Filter */}
        <div className="mb-10 flex flex-wrap gap-3 justify-center">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                selectedCountry === country
                  ? '!bg-[#5f2d85] text-white shadow-lg shadow-purple-200'
                  : '!bg-white text-gray-700 hover:!bg-purple-50 border border-gray-200'
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6">
          {filteredCenters.map((center, index) => {
            return (
              <div
                key={index}
                className="!bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200"
              >
                <div className="flex flex-row">
                  {/* Image Section - Clickable */}
                  <Link
                    to={center.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/3 bg-gradient-to-br from-purple-500 to-blue-400 p-6 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    <div className="relative w-full h-40">
                      <span className="absolute top-0 left-0 px-3 py-1 !bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/30 z-10">
                        {center.country}
                      </span>
                      <img
                        src={center.image}
                        alt={center.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </Link>

                  {/* Content Section - Name is clickable, description is not */}
                  <div className="w-2/3 p-6">
                    <Link
                      to={center.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block group"
                    >
                      <h3 className="!text-xl font-bold text-gray-800 mb-3 transition-colors group-hover:!text-[#5f2d85] group-hover:underline">
                        {center.name}
                      </h3>
                    </Link>

                    <p className="text-gray-600 text-md leading-relaxed">
                      {center.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredCenters.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No support centers found for this country.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatCrisisSupportHub;
