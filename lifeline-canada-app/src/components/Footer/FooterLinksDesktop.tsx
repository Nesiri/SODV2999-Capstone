import { Link } from 'react-router-dom';
import { AlertCircle, Zap } from 'lucide-react';

// Import your navigation data
import {
  resourceCategories,
  patternInterrupts,
  dropdownNavLinks,
} from '../../navigation/nav';

export default function FooterLinksDesktop() {
  // Split resourceCategories into two halves for two columns
  const midIndex = Math.floor(resourceCategories.length / 2);
  const resourcesColumn1 = resourceCategories.slice(0, midIndex);
  const resourcesColumn2 = resourceCategories.slice(midIndex);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* First Column - Emergency, More, App */}
      <div className="flex flex-col space-y-6">
        {/* Emergency Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-white mb-3">Emergency</h3>
          <Link
            to="/in-crisis"
            className="flex items-center gap-2 px-4 py-2 bg-red-600/20 
                     text-red-300 rounded-lg font-medium hover:bg-red-600/30 
                     transition-colors w-fit"
          >
            <AlertCircle className="w-4 h-4" />
            <span>In Crisis?</span>
          </Link>
        </div>

        {/* More Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-white mb-3">More</h3>
          <div className="flex flex-col space-y-2">
            {dropdownNavLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-2 text-gray-300 hover:text-white 
                         font-medium transition-colors"
              >
                {typeof item.icon === 'string' ? (
                  <span className="text-lg">{item.icon}</span>
                ) : (
                  item.icon
                )}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* App Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-white mb-3">App</h3>
          <Link
            to="/app"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 
                     text-blue-300 rounded-lg font-medium hover:bg-blue-600/30 
                     transition-colors w-fit"
          >
            <Zap className="w-4 h-4" />
            <span>LifeLine App</span>
          </Link>
        </div>
      </div>

      {/* Second Column - Resources Part 1 */}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
        <div className="flex flex-col space-y-4">
          {resourcesColumn1.map((category) => (
            <div key={category.category} className="flex flex-col">
              <span className="text-gray-300 font-medium mb-1">
                {category.category}
              </span>
              <div className="ml-2 flex flex-col space-y-1">
                {category.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Column - Resources Part 2 */}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-white mb-4 opacity-0 pointer-events-none">
          Resources
        </h3>
        <div className="flex flex-col space-y-4">
          {resourcesColumn2.map((category) => (
            <div key={category.category} className="flex flex-col">
              <span className="text-gray-300 font-medium mb-1">
                {category.category}
              </span>
              <div className="ml-2 flex flex-col space-y-1">
                {category.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fourth Column - Pattern Interrupts */}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-white mb-4">
          Pattern Interrupts
        </h3>
        <div className="flex flex-col space-y-4">
          {patternInterrupts.map((category) => (
            <div key={category.category} className="flex flex-col">
              <span className="text-gray-300 font-medium mb-1">
                {category.category}
              </span>
              <div className="ml-2 flex flex-col space-y-1">
                {category.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
