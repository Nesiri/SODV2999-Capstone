import NavLink from './NavLink';
import ResourcesDropdown from './ResourcesDropdown';
import MoreDropdown from './MoreDropdown';
import GetInvolvedButton from './GetInvolvedButton';
import {
  mainNavLinks,
  dropdownNavLinks,
  getAllResourceLinks,
  getAllPatternInterruptLinks,
} from '../../navigation/nav';
import MakeContributionButton from './MakeContribution';

export default function HeaderDesktop() {
  const resourceLinks = getAllResourceLinks();
  const patternInterruptLinks = getAllPatternInterruptLinks();

  return (
    <nav className="hidden lg:flex items-center w-full relative right-70">
      {/* Main nav items on left */}
      <div className="flex items-center space-x-10 flex-1">
        {mainNavLinks.map((link) => {
          if (link.hasMegaMenu) {
            if (link.name === 'Resources') {
              return (
                <ResourcesDropdown
                  key={link.path}
                  resourceLinks={resourceLinks}
                  triggerText={link.name}
                  triggerPath={link.path} // Pass the path for navigation
                  emergency={link.emergency}
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
                  emergency={link.emergency}
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
        <MakeContributionButton />
        <GetInvolvedButton />
      </div>
    </nav>
  );
}
