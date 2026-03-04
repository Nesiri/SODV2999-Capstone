import FooterNewsletter from './FooterNewsletter';
import FooterContactInfo from './FooterContactInfo';
import FooterLinksDesktop from './FooterLinksDesktop';
import FooterLinksMobile from './FooterLinksMobile';
import FooterBottomBar from './FooterBottomBar';
import FooterLogo from './FooterLogo';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-blue-950 text-white overflow-hidden">
      {/* Newsletter Section */}
      <FooterNewsletter />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-16 relative">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Logo & Contact Info */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12 lg:mb-16">
            {/* Logo Section */}
            <div className="flex-1">
              <FooterLogo />
            </div>

            {/* Contact Info Grid */}
            <FooterContactInfo />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:block">
            <FooterLinksDesktop />
          </div>

          {/* Mobile Links */}
          <div className="lg:hidden">
            <FooterLinksMobile />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <FooterBottomBar />
    </footer>
  );
}
