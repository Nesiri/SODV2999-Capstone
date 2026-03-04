import { Link } from 'react-router-dom';
import { AlertCircle, Zap } from 'lucide-react';

// Import your navigation data
import {
  resourceCategories,
  patternInterrupts,
  dropdownNavLinks,
} from '../../navigation/nav';

export default function FooterLinksMobile() {
  // Split resourceCategories into two halves
  const midIndex = Math.ceil(resourceCategories.length / 2);
  const resourcesColumn1 = resourceCategories.slice(0, midIndex);
  const resourcesColumn2 = resourceCategories.slice(midIndex);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center">
        {/* Column 1: Emergency & More */}
        <div className="w-full max-w-xs text-center md:text-left">
          <div className="space-y-8">
            {/* Emergency */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Emergency
              </h3>
              <div className="flex justify-center md:justify-start">
                <Link
                  to="/in-crisis"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600/20 
                           text-red-300 rounded-lg hover:bg-red-600/30 transition-colors"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span className="font-medium">In Crisis?</span>
                </Link>
              </div>
            </div>

            {/* More */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">More</h3>
              <div className="flex flex-col items-center md:items-start space-y-2">
                {dropdownNavLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-2 text-gray-300 hover:text-white 
                             transition-colors"
                  >
                    {typeof item.icon === 'string' ? (
                      <span className="text-base w-5">{item.icon}</span>
                    ) : (
                      <span className="w-4 h-4">{item.icon}</span>
                    )}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* App */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">App</h3>
              <div className="flex justify-center md:justify-start">
                <Link
                  to="/app"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600/20 
                           text-blue-300 rounded-lg hover:bg-blue-600/30 transition-colors"
                >
                  <Zap className="w-4 h-4" />
                  <span className="font-medium">LifeLine App</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Resources (Part 1) */}
        <div className="w-full max-w-xs text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <div className="space-y-5">
            {resourcesColumn1.map((category) => (
              <div key={category.category}>
                <h4 className="text-sm font-medium text-gray-300 mb-2">
                  {category.category}
                </h4>
                <ul className="space-y-1.5">
                  {category.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Resources (Part 2) */}
        <div className="hidden md:block w-full max-w-xs text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4 opacity-0 pointer-events-none">
            Resources
          </h3>
          <div className="space-y-5">
            {resourcesColumn2.map((category) => (
              <div key={category.category}>
                <h4 className="text-sm font-medium text-gray-300 mb-2">
                  {category.category}
                </h4>
                <ul className="space-y-1.5">
                  {category.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Column 4: Pattern Interrupts */}
        <div className="w-full max-w-xs text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">
            Pattern Interrupts
          </h3>
          <div className="space-y-5">
            {patternInterrupts.map((category) => (
              <div key={category.category}>
                <h4 className="text-sm font-medium text-gray-300 mb-2">
                  {category.category}
                </h4>
                <ul className="space-y-1.5">
                  {category.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
