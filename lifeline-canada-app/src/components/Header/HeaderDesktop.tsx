import NavLink from './NavLink';
import ResourcesDropdown from './ResourcesDropdown';
import MoreDropdown from './MoreDropdown';

import {
  mainNavLinks,
  dropdownNavLinks,
  getAllResourceLinks,
  getAllPatternInterruptLinks,
} from '../../navigation/nav';


export default function HeaderDesktop() {
  const resourceLinks = getAllResourceLinks();
  const patternInterruptLinks = getAllPatternInterruptLinks();

  return (
    <nav className="hidden lg:flex items-center w-full relative xl:mr-10">
      {/* Main nav items on left */}
      <div className={`flex items-center flex-1
                      lg:space-x-2 xl:space-x-8 2xl:space-x-10
                     [@media(min-width:1024px)_and_(max-width:1280px)]:space-x-0">
                   
                  `}>
        {mainNavLinks.map((link) => {
          if (link.hasMegaMenu) {
            if (link.name === 'Resources') {
              return (
                <ResourcesDropdown
                  key={link.path}
                  resourceLinks={resourceLinks}
                  triggerText={link.name}
                  triggerPath={link.path} // Pass the path for navigation
                  icon={link.icon}
                />
              );
            } else if (link.name === 'Pattern Interrupts') {
              return (
                <ResourcesDropdown
                  key={link.path}
                  resourceLinks={patternInterruptLinks}
                  triggerText={link.name}
                  triggerPath={link.path} // Pass the path for navigation
            
                  icon={link.icon}
                />
              );
            }
          }
          return <NavLink key={link.path} link={link} />;
        })}

        <MoreDropdown
          key="more"
          dropdownLinks={dropdownNavLinks}
          triggerText="More"
        />

      </div>
    </nav>
  );
}
