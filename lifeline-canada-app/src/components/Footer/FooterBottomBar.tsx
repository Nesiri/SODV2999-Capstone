import { Link } from 'react-router-dom';

export default function FooterBottomBar() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-blue-800/30 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 backdrop-blur-sm">
      <div className="container mx-auto px-3 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Copyright Section */}
          <div className="text-center sm:text-left">
            <p className="text-blue-300 text-xs sm:text-sm">
              © {currentYear} The LifeLine Canada Foundation.
            </p>
            <p className="text-blue-400/70 text-[10px] sm:text-xs mt-0.5 sm:mt-1">
              Charity #12345-6789 RR0001
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-[11px] sm:text-sm">
            <Link
              to="/privacy-policy"
              className="text-blue-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Privacy
            </Link>
            <span className="text-blue-700/50 hidden sm:inline">|</span>
            <Link
              to="/terms"
              className="text-blue-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Terms
            </Link>
            <span className="text-blue-700/50 hidden sm:inline">|</span>
            <Link
              to="/accessibility"
              className="text-blue-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
