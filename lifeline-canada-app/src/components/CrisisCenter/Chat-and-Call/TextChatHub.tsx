import { useState } from 'react';
import { Link } from 'react-router-dom';

// Constants data
// Updated Constants data with new images
const crisisCenters = [
  // Canada
  {
    country: 'Canada',
    name: 'Kids Help Phone Crisis Text Line',
    description:
      'This is a free, 24/7 texting service accessible immediately to youth anywhere in Canada by texting CONNECT to 686868 for English or PARLER to 686868 for French on any text/SMS enabled cell phone.',
    link: 'https://kidshelpphone.ca/need-help-now-text-us/',
    image: '/assets/call-chat/text-chat/khp.png',
  },
  {
    country: 'Canada',
    name: 'ConnecTeen (Youth in Alberta)',
    description:
      'Talk on your terms. If you need support, we’re here for you. If you’re worried about someone overhearing you, or it’s too hard to say out loud, you can write it down in chat, email or text. Text 587-333-2724 (Mon-Fri 3pm–10pm, Sat-Sun 12pm–10pm).',
    link: 'https://calgaryconnecteen.com/',
    image: '/assets/call-chat/text-chat/connect-teen.png',
  },

  // United States
  {
    country: 'USA',
    name: '988 Suicide and Crisis Lifeline',
    description: 'Text 988 (24/7 from anywhere in the USA).',
    link: 'https://988lifeline.org/',
    image: '/assets/call-chat/text-chat/988-suicide.png',
  },
  {
    country: 'USA',
    name: 'Suicide Prevention and Crisis Service (Finger Lakes, NY)',
    description:
      'Free and confidential crisis counseling, Mondays through Fridays from 6pm to 9pm. They listen without judgement and help you find your best solution.',
    link: 'http://ithacacrisis.org/',
    image: '/assets/call-chat/text-chat/suicide-prevention.png',
  },
  {
    country: 'USA',
    name: 'Crisis Text Line',
    description: 'Text MATTERS to 741741. Daily 24 hours a day.',
    link: 'https://www.crisistextline.org/',
    image: '/assets/call-chat/text-chat/text-line.jpg',
  },
  {
    country: 'USA',
    name: 'Now Matters',
    description: 'Text VOICE to 20121 Daily from 4pm to 1am CST.',
    link: 'https://www.yourlifeyourvoice.org/pages/ways-to-get-help.aspx#text-info',
    image: '/assets/call-chat/text-chat/now-matters.png',
  },
  {
    country: 'USA',
    name: 'Teen Line',
    description: 'Text TEEN to 839863 Daily from 6pm-9pm PST.',
    link: 'https://didihirsch.org/teenline/',
    image: '/assets/call-chat/text-chat/teen-line.png',
  },
  {
    country: 'USA',
    name: 'TrevorLine',
    description:
      "Text 'Trevor' to 1-202-304-1200. Available Tue-Fri, 3pm–9pm EST / 12pm–6pm PT.",
    link: 'https://www.thetrevorproject.org/get-help/',
    image: '/assets/call-chat/text-chat/trevor-line.png',
  },

  // United Kingdom
  {
    country: 'United Kingdom',
    name: 'HOPELineUK',
    description:
      'Confidential support for young people under 35 who may be having thoughts of suicide. Text 07786 20 96 97.',
    link: 'https://www.papyrus-uk.org/',
    image: '/assets/call-chat/text-chat/payrus.png',
  },
  {
    country: 'United Kingdom',
    name: 'Samaritans',
    description:
      'Available 24/7 to provide confidential emotional support for people experiencing distress. Text 07725 90 90 90.',
    link: 'https://www.samaritans.org/branches/-north-london/',
    image: '/assets/call-chat/text-chat/samartans.png',
  },

  // New Zealand
  {
    country: 'New Zealand',
    name: 'The Lowdown',
    description:
      'If you’re stuck feeling bad, they help you figure out if it could be anxiety or depression. Text 5626.',
    link: 'https://www.thelowdown.co.nz/',
    image: '/assets/call-chat/text-chat/lowdown.png',
  },
];

// Main Component
const TextChatSupportHub = () => {
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

export default TextChatSupportHub;
