import { Link, useNavigate } from 'react-router-dom';

const SiteMapPage = () => {
   const navigate = useNavigate();
  // Link constants (keeping your existing constants - no changes)
  const mainLinks = [
    { name: 'Depression', path: '/resources/depression' },
    { name: 'Anxiety', path: '/resources/anxiety' },
    { name: 'Grief Support', path: '/resources/grief' },
    { name: 'Crisis Centres', path: '/incrisisneedhelp' },
    { name: 'E-Counselling', path: '/resources/e-counselling' },
    { name: 'Resources for Parents', path: '/resources/parents' },
    { name: 'View More Resources', path: '/resources' },
    { name: 'Support Services', path: '/incrisisneedhelp' },
  ];

  const aboutLinks = [
    { name: 'The LifeLine Canada Foundation Website', path: '/' },
    { name: 'Companion Paws Canada Therapy Dogs', path: 'https://companionpaws.ca/' },
    { name: 'The LifeLine App', path: '/app?mode=login' },
    { name: 'Join Our Newsletter', path: '/',id :"news-letter" },
    { name: 'Make A Contribution', path: '/contribute' },
    { name: 'Get Involved', path: '/volunteers' },
  ];

  const crisisProvinceLinks = [
    { name: 'BC', path: '/british-columbia-crisis-centres' },
    { name: 'Alberta', path: '/alberta-crisis-centres' },
    { name: 'Saskatchewan', path: '/saskatchewan-crisis-centres' },
    { name: 'Manitoba', path: '/manitoba-crisis-centres' },
    { name: 'Ontario', path: '/ontario-crisis-centres' },
    { name: 'Quebec', path: '/quebec-crisis-centres' },
    { name: 'New Brunswick', path: '/newbrunswick-crisis-centres' },
    { name: 'Newfoundland/Labrador', path: '/newfoundland-crisis-centres' },
    { name: 'Nova Scotia', path: '/nova-scotia-crisis-centres' },
    { name: 'PEI', path: '/pei-crisis-centres' },
    { name: 'Yukon', path: '/yukon-crisis-centres' },
    { name: 'Nunavut', path: '/nunavut-crisis-centres' },
    { name: 'NWT', path: '/nwterritories-crisis-centres' },
  ];

  const crisisMainLinks = [
    { name: 'Canada', path: '/canadian-crisis-centres' },
    { name: 'USA', path: '/usa-crisis-centres' },
    { name: 'International', path: '/international-crisis-centres' },
    { name: 'Online Chat', path: '/in-crisis-help/email-chat' },
    { name: 'Call Lines', path: '/in-crisis-help/support-and-call-lines' },
    { name: 'Text Chat', path: '/in-crisis-help/textchat' },
  ];

const resourceLinks = [
  { name: 'Canadian Crisis Centres', path: '/canadian-crisis-centres' },
  { name: 'USA crisis Centres', path: '/usa-crisis-centres' },
  { name: 'International Crisis Centres', path: '/international-crisis-centres' },
  { name: 'Pattern Interrupts', path: '/pattern-interrupts' },
  { name: 'Coping with Suicidal Thoughts', path: '/resources/suicidal-thoughts' },
  { name: 'Search for a Professional', path: '/resources/search-professional' },
  { name: 'E Councelling', path: '/resources/e-counselling' },
  { name: 'Self Management', path: '/resources/self-management' },
  { name: 'How Can I Help Someone', path: '/resources/how-to-help' },
  { name: 'Warning Signs', path: '/resources/warning-signs' },
  { name: 'Depression', path: '/resources/depression' },
  { name: 'Myths & Facts', path: '/resources/myths-facts' },
  { name: 'Addiction', path: '/resources/addiction' },
  { name: 'Anxiety', path: '/resources/anxiety' },
  { name: 'Post Traumatic Stress Disorder', path: '/resources/ptsd' },
  { name: 'Grief', path: '/resources/grief' },
  { name: 'Teens & Youth', path: '/resources/teens-youth' },
  { name: 'Parents', path: '/resources/parents' },
  { name: 'College Students', path: '/resources/college-students' },
  { name: 'LGBTQ2S', path: '/resources/lgbtq2s' },
  { name: 'Indigenous Issues', path: '/resources/indigenous' },
  { name: 'Seniors', path: '/resources/seniors' },
  { name: 'Men', path: '/resources/men' },
  { name: 'Veterans & Military', path: '/resources/veterans' },
  { name: 'Refugees', path: '/resources/refugees' },
  { name: 'Attempt Survivors', path: '/resources/attempt-survivors' },
  { name: 'Survivors of Suicide Loss', path: '/resources/suicide-loss' },
  { name: 'Bereaved Support', path: '/resources/bereaved-support' },
  { name: 'After a Suicide Loss', path: '/resources/after-suicide-loss' },
  { name: 'Educators', path: '/resources/educators' },
  { name: 'Health Professionals', path: '/resources/health-professionals' },
  { name: 'First Responders', path: '/resources/first-responders' },
  { name: 'Care Givers', path: '/resources/care-givers' },
  { name: 'Media Professionals', path: '/resources/media-professionals' },
  { name: 'Workplace Employers', path: '#' },
  { name: 'Resource Organizations', path: '/resources/organizations' },
 
];

const patternInterruptsMainLinks = [
  { name: 'Acts of Kindness', path: '/pattern-interrupt/kindness' },
  { name: 'Comedy', path: '/pattern-interrupt/comedy' },
  { name: 'Coping Mechanisms', path: '/pattern-interrupt/coping' },
  { name: 'Emotional Support Videos', path: '/pattern-interrupt/emotional-support' },
  { name: 'Helpful Movies', path: '/pattern-interrupt/helpful-movies' },
  { name: 'Image Gallery', path: '/pattern-interrupt/gallery' },
  { name: 'Improve Your Mood', path: '/pattern-interrupt/improve-mood' },
  { name: 'Inspiring Videos', path: '/pattern-interrupt/inspiring-videos' },
  { name: 'Interactive Mind', path: '/pattern-interrupt/interactive-mind' },
  { name: 'Life Changing Books', path: '/pattern-interrupt/books' }
];

const mentalHealthAppLinks = [
  { name: 'Suicide Prevention', path: '/pattern-interrupt/apps', id: 'suicide-prevention' },
  { name: 'Mood Tracking', path: '/pattern-interrupt/apps', id: 'mood-tracking' },
  { name: 'Depression & Anxiety', path: '/pattern-interrupt/apps', id: 'depression-anxiety' },
  { name: 'Sleep', path: '/pattern-interrupt/apps', id: 'sleep-relax' },
  { name: 'Sleep/Relax/Meditate', path: '/pattern-interrupt/apps', id: 'sleep-relax' }
];

const patternInterruptsMoreLinks = [
  { name: 'Movies of Inspiration', path: '/pattern-interrupt/movies-inspiration' },
  { name: 'Self Management', path: '/pattern-interrupt/self-management' },
  { name: 'Uplifting Music Videos', path: '/pattern-interrupt/music' },
  { name: 'Transform Negative Thoughts', path: '/pattern-interrupt/transform-thoughts' },
  { name: 'Words of Wisdom', path: '/pattern-interrupt/wisdom' }
];

  const finalLinks = [
    { name: 'The LifeLine App', path: '/app' },
    { name: 'Companion Paws', path: 'https://companionpaws.ca/' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Email Support', path: '/support' },
    { name: 'En Francais', path: '#' },
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

  const handleClick = (link: (typeof aboutLinks)[0]) => (e: React.MouseEvent) => {
        if (link.id) {
          e.preventDefault();
  
          if (location.pathname !== '/') {
            // If not on home page, navigate first, then scroll
            navigate('/', { replace: false });
            // Wait a tick so the new page renders
            setTimeout(() => {
              const section = document.getElementById(link.id!);
              if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 100); // 100ms delay is usually enough
          } else {
            // Already on home page
            const section = document.getElementById(link.id!);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }
      };


const handleScrollToSection = (path: string, id?: string) => (e: React.MouseEvent) => {
  if (id) {
    e.preventDefault();
      // Different page - navigate then scroll
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  
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
            to="/about-us" 
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
                onClick={handleClick(link)}
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
            to="/incrisisneedhelp" 
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
            
            return (
              <li
                key={idx}
                className="mb-2 md:mb-3 cursor-pointer transition-all duration-300 font-medium"
              >
                <Link
                  to={item.path}
                  className={linkClassName}
                  style={{ fontSize: fontSizes.mainLink }}
                >
                  {item.name}
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
            return (
              <li
                key={idx}
                className="mb-2 md:mb-3 cursor-pointer transition-all duration-300 font-medium"
              >
                <Link
                  to={item.path}
                  className={linkClassName}
                  style={{ fontSize: fontSizes.mainLink }}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
          <li className="mb-2 md:mb-3 cursor-pointer transition-all duration-300 font-medium">
            <Link
              to="/pattern-interrupt/apps"
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
                   onClick={handleScrollToSection(app.path,app.id)}
                  className={linkClassName}
                  style={{ fontSize: fontSizes.subLink }}
                >
                  {app.name}
                </Link>
              </li>
            ))}
          </ul>
          {patternInterruptsMoreLinks.map((item, idx) => {
       
            return (
              <li
                key={idx}
                className="mb-2 md:mb-3 cursor-pointer transition-all duration-300 font-medium"
              >
                <Link
                  to={item.path}
                  className={linkClassName}
                  style={{ fontSize: fontSizes.mainLink }}
                >
                  {item.name}
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
