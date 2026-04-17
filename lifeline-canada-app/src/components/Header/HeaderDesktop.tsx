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
    <nav
      className="hidden lg:flex items-center w-full relative xl:mr-10"
      style={{
        fontSize: '16px', // Fixed base font size
        // color:'#5f2d85 important' // Ensure text color is consistent
      }}
    >
      {/* Main nav items on left */}
      <div
        className="flex items-center flex-1"
        style={{
          gap: '12px', // Fixed gap instead of responsive
        }}
      >
        {mainNavLinks.map((link) => {
          if (link.hasMegaMenu) {
            if (link.name === 'Resources') {
              return (
                <ResourcesDropdown
                  key={link.path}
                  resourceLinks={resourceLinks}
                  triggerText={link.name}
                  triggerPath={link.path}
                  icon={link.icon}
                />
              );
            } else if (link.name === 'Pattern Interrupts') {
              return (
                <ResourcesDropdown
                  key={link.path}
                  resourceLinks={patternInterruptLinks}
                  triggerText={link.name}
                  triggerPath={link.path}
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
