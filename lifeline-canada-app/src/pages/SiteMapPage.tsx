import { Link } from 'react-router-dom';

const SiteMapPage = () => {
  // Link constants (keeping your existing constants - no changes)
  const mainLinks = [
    { name: 'Depression', path: '/depression' },
    { name: 'Anxiety', path: '/anxiety' },
    { name: 'Grief Support', path: '/grief-support' },
    { name: 'Crisis Centres', path: '/crisis-centres' },
    { name: 'E-Counselling', path: '/e-counselling' },
    { name: 'Resources for Parents', path: '/resources-for-parents' },
    { name: 'View More Resources', path: '/view-more-resources' },
    { name: 'Support Services', path: '/support-services' },
  ];

  const aboutLinks = [
    { name: 'The LifeLine Canada Foundation Website', path: '/foundation' },
    { name: 'Companion Paws Canada Therapy Dogs', path: '/companion-paws' },
    { name: 'The LifeLine Mobile App', path: '/mobile-app' },
    { name: 'Join Our Newsletter', path: '/newsletter' },
    { name: 'Make A Contribution', path: '/donate' },
    { name: 'Get Involved', path: '/get-involved' },
  ];

  const crisisProvinceLinks = [
    { name: 'BC', path: '/crisis/bc' },
    { name: 'Alberta', path: '/crisis/alberta' },
    { name: 'Saskatchewan', path: '/crisis/saskatchewan' },
    { name: 'Manitoba', path: '/crisis/manitoba' },
    { name: 'Ontario', path: '/crisis/ontario' },
    { name: 'Quebec', path: '/crisis/quebec' },
    { name: 'New Brunswick', path: '/crisis/new-brunswick' },
    { name: 'Newfoundland/Labrador', path: '/crisis/newfoundland-labrador' },
    { name: 'Nova Scotia', path: '/crisis/nova-scotia' },
    { name: 'PEI', path: '/crisis/pei' },
    { name: 'Yukon', path: '/crisis/yukon' },
    { name: 'Nunavut', path: '/crisis/nunavut' },
    { name: 'NWT', path: '/crisis/nwt' },
  ];

  const crisisMainLinks = [
    { name: 'Canada', path: '/crisis/canada' },
    { name: 'USA', path: '/crisis/usa' },
    { name: 'International', path: '/crisis/international' },
    { name: 'Online Chat', path: '/crisis/online-chat' },
    { name: 'Call Lines', path: '/crisis/call-lines' },
    { name: 'Text Chat', path: '/crisis/text-chat' },
  ];

  const resourceLinks = [
    'Canadian Crisis Centres',
    'USA crisis Centres',
    'International Crisis Centres',
    'Pattern Interrupts',
    'Coping with Suicidal Thoughts',
    'Search for a Professional',
    'E Councelling',
    'Self Management',
    'How Can I Help Someone',
    'Warning Signs',
    'Depression',
    'Myths & Facts',
    'Addiction',
    'Anxiety',
    'Post Traumatic Stress Disorder',
    'Grief',
    'Teens & Youth',
    'Parents',
    'College Students',
    'LGBTQ2S',
    'Indigenous Issues',
    'Seniors',
    'Men',
    'Veterans & Military',
    'Refugees',
    'Attempt Survivors',
    'Survivors of Suicide Loss',
    'Bereaved Support',
    'After a Suicide Loss',
    'Educators',
    'Health Professionals',
    'First Responders',
    'Care Givers',
    'Media Professionals',
    'Workplace Employers',
    'Resource Organizations',
    'Pattern Interrupts',
  ];

  const patternInterruptsMainLinks = [
    'Acts of Kindness',
    'Comedy',
    'Coping Mechanisms',
    'Emotional Support Videos',
    'Helpful Movies',
    'Image Gallery',
    'Improve Your Mood',
    'Inspiring Videos',
    'Interactive Mind',
    'Life Changing Books',
  ];

  const mentalHealthAppLinks = [
    {
      name: 'Suicide Prevention',
      path: '/mental-health-apps/suicide-prevention',
    },
    { name: 'Mood Tracking', path: '/mental-health-apps/mood-tracking' },
    {
      name: 'Depression & Anxiety',
      path: '/mental-health-apps/depression-anxiety',
    },
    { name: 'Sleep', path: '/mental-health-apps/sleep' },
    {
      name: 'Sleep/Relax/Meditate',
      path: '/mental-health-apps/sleep-relax-meditate',
    },
  ];

  const patternInterruptsMoreLinks = [
    'Movies of Inspiration',
    'Self Management',
    'Uplifting Music Videos',
    'Transform Negative Thoughts',
    'Words of Wisdom',
  ];

  const finalLinks = [
    { name: 'The LifeLine App', path: '/app' },
    { name: 'Companion Paws', path: '/companion-paws' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Email Support', path: '/email-support' },
    { name: 'En Francais', path: '/fr' },
  ];

  // Create a reusable link className
  const linkClassName = "bg-gradient-to-r from-[#4A90E2] via-[#6A98C8] to-[#8AA0AE] bg-clip-text text-transparent inline-block transition-all duration-300 hover:!underline hover:!underline-offset-4 hover:!decoration-2 hover:!decoration-pink-400";

  // Font size classes using clamp with halved scaling
  const fontSizes = {
    mainTitle: 'clamp(1rem, 2.5vw, 2.5rem)', // Main site title
    categoryTitle: 'clamp(1.5rem, 2vw, 2rem)', // Category headers
    mainLink: 'clamp(1rem, 1.25vw, 1.5rem)', // Main navigation links
    subLink: 'clamp(0.875rem, 0.9vw, 1.25rem)', // Submenu/child links
  };

  return (
  <div className="w-full min-h-screen bg-gradient-to-br from-amber-200 via-orange-100 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Header with pink/blue/purple gradient */}
        <h1
          className="relative top-10 mb-12 md:mb-16 cursor-pointer transition-all duration-300 tracking-tight border-l-4 border-pink-400 pl-4"
          style={{ fontSize: fontSizes.mainTitle }}
        >
          <Link 
            to="/" 
            className={linkClassName}
          >
            The LifeLine Canada
          </Link>
        </h1>

        {/* Section 1 with gradient links */}
        <ul className="list-none p-0 mb-12 md:mb-16">
          {mainLinks.map((link, idx) => (
            <li
              key={idx}
              className="mb-2 md:mb-3 cursor-pointer transition-all duration-300 font-medium"
            >
              <Link
                to={link.path}
                className={linkClassName}
                style={{ fontSize: fontSizes.mainLink }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Section 2 with gradient */}
        <h2
          className="font-normal mt-10 md:mt-14 mb-4 md:mb-6 cursor-pointer transition-all duration-300 border-l-4 border-pink-400 pl-4"
          style={{ fontSize: fontSizes.categoryTitle }}
        >
          <Link 
            to="/about" 
            className={linkClassName}
          >
            About Us
          </Link>
        </h2>
        <ul className="list-none p-0 mb-12 md:mb-16">
          {aboutLinks.map((link, idx) => (
            <li
              key={idx}
              className="mb-2 md:mb-3 cursor-pointer transition-all duration-300 font-medium"
            >
              <Link
                to={link.path}
                className={linkClassName}
                style={{ fontSize: fontSizes.mainLink }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Section 3 - Crisis with gradient */}
        <h2
          className="font-normal mt-10 md:mt-14 mb-4 md:mb-6 cursor-pointer transition-all duration-300 border-l-4 border-pink-400 pl-4"
          style={{ fontSize: fontSizes.categoryTitle }}
        >
          <Link 
            to="/crisis" 
            className={linkClassName}
          >
            In Crisis?
          </Link>
        </h2>
        <ul className="list-none p-0 mb-12 md:mb-16">
          {crisisMainLinks.map((link, idx) => (
            <li
              key={idx}
              className="mb-2 md:mb-3 cursor-pointer transition-all duration-300 font-medium"
            >
              {link.name === 'Canada' ? (
                <>
                  <Link
                    to={link.path}
                    className={linkClassName.replace('inline-block', 'block')}
                    style={{
                      fontSize: fontSizes.mainLink,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {link.name}
                  </Link>
                  <ul className="list-none pl-4 md:pl-6 mt-2 mb-4">
                    {crisisProvinceLinks.map((province, pIdx) => (
                      <li
                        key={pIdx}
                        className="mb-1.5 md:mb-2 cursor-pointer transition-all duration-300"
                      >
                        <Link
                          to={province.path}
                          className={linkClassName}
                          style={{ fontSize: fontSizes.subLink }}
                        >
                          {province.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  to={link.path}
                  className={linkClassName}
                  style={{ fontSize: fontSizes.mainLink }}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Section 4 - Resources with gradient */}
        <h2
          className="font-normal mt-10 md:mt-14 mb-4 md:mb-6 cursor-pointer transition-all duration-300 border-l-4 border-pink-400 pl-4"
          style={{ fontSize: fontSizes.categoryTitle }}
        >
          <Link 
            to="/resources" 
            className={linkClassName}
          >
            Resources
          </Link>
        </h2>
        <ul className="list-none p-0 mb-12 md:mb-16">
          {resourceLinks.map((item, idx) => {
            const slug = item
              .toLowerCase()
              .replace(/[&\s]+/g, '-')
              .replace(/[^a-z0-9-]/g, '');
            return (
              <li
                key={idx}
                className="mb-2 md:mb-3 cursor-pointer transition-all duration-300 font-medium"
              >
                <Link
                  to={`/resources/${slug}`}
                  className={linkClassName}
                  style={{ fontSize: fontSizes.mainLink }}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Section 5 - Pattern Interrupts with gradient */}
        <h2
          className="font-normal mt-10 md:mt-14 mb-4 md:mb-6 cursor-pointer transition-all duration-300 border-l-4 border-pink-400 pl-4"
          style={{ fontSize: fontSizes.categoryTitle }}
        >
          <Link 
            to="/pattern-interrupts" 
            className={linkClassName}
          >
            Pattern Interrupts
          </Link>
        </h2>
        <ul className="list-none p-0 mb-12 md:mb-16">
          {patternInterruptsMainLinks.map((item, idx) => {
            const slug = item.toLowerCase().replace(/[\s]+/g, '-');
            return (
              <li
                key={idx}
                className="mb-2 md:mb-3 cursor-pointer transition-all duration-300 font-medium"
              >
                <Link
                  to={`/pattern-interrupts/${slug}`}
                  className={linkClassName}
                  style={{ fontSize: fontSizes.mainLink }}
                >
                  {item}
                </Link>
              </li>
            );
          })}
          <li className="mb-2 md:mb-3 cursor-pointer transition-all duration-300 font-medium">
            <Link
              to="/mental-health-apps"
              className={linkClassName}
              style={{ fontSize: fontSizes.mainLink }}
            >
              Mental Health Apps
            </Link>
          </li>
          <ul className="list-none pl-4 md:pl-6 mt-2 mb-4">
            {mentalHealthAppLinks.map((app, idx) => (
              <li
                key={idx}
                className="mb-1.5 md:mb-2 cursor-pointer transition-all duration-300"
              >
                <Link
                  to={app.path}
                  className={linkClassName}
                  style={{ fontSize: fontSizes.subLink }}
                >
                  {app.name}
                </Link>
              </li>
            ))}
          </ul>
          {patternInterruptsMoreLinks.map((item, idx) => {
            const slug = item.toLowerCase().replace(/[\s]+/g, '-');
            return (
              <li
                key={idx}
                className="mb-2 md:mb-3 cursor-pointer transition-all duration-300 font-medium"
              >
                <Link
                  to={`/pattern-interrupts/${slug}`}
                  className={linkClassName}
                  style={{ fontSize: fontSizes.mainLink }}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Section 6 - Final Items with gradient */}
        {finalLinks.map((link, idx) => (
          <h2
            key={idx}
            className="font-normal mt-10 md:mt-14 mb-4 md:mb-6 cursor-pointer transition-all duration-300 border-l-4 border-pink-400 pl-4"
            style={{ fontSize: fontSizes.categoryTitle }}
          >
            <Link 
              to={link.path} 
              className={linkClassName}
            >
              {link.name}
            </Link>
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SiteMapPage;
