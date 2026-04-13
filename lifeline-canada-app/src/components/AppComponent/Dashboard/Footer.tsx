// components/dashboard/Footer.tsx (Centered Modern)

const Footer = () => {
  return (
    <footer className="mt-16 sm:mt-20 md:mt-24 py-8 sm:py-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-3">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} The LifeLine Canada Foundation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
