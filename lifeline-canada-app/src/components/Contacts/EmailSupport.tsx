import EmailImage from '../../assets/Email.jpg';
import { Link } from 'react-router-dom';
import AboutUsBackground from '../Background/AboutUsBackground';

const EmailSupport = () => {
  return (
    <AboutUsBackground>
      <div className="relative w-full max-w-7xl mx-auto px-6 py-20 z-10">
        {/* Top Section - Two Column Layout like Contribute */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8 animate-fadeInLeft">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 !bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#5f2d85]/30 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5f2d85] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5f2d85]"></span>
              </span>
              <span className="text-sm font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#5f2d85] to-[#5f2d85]">
                ✦ WE'RE HERE TO HELP ✦
              </span>
            </div>

            {/* Heading - Single line like Contribute */}
            <h1 className="!text-4xl   font-black leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5f2d85] via-[#5f2d85] to-[#5f2d85]">
                Email Support
              </span>
            </h1>

            {/* Description paragraphs like Contribute */}
            <div className="space-y-6 text-gray-700">
              <p className="text-lg md:!text-xl leading-relaxed">
                <span className="text-2xl !text-[#5f2d85] mr-1">📧</span>
                <span className="font-normal !text-[#5f2d85]">
                  The LifeLine Canada Foundation (TLC)
                </span>{' '}
                is a registered non-profit committed to the prevention of
                suicide and positive mental health in Canada and Worldwide and
                has made work in this area a top priority. We envision a country
                where suicide is a rare event, where people are nurtured and
                supported, where individuals and families are aware of the risk
                factors for suicide and actively seek help from accessible,
                effective community resources.
              </p>

              <p className="text-lg md:!text-xl leading-relaxed bg-[#f5edf7]/50 p-6 rounded-2xl border border-[#5f2d85]/20">
                <span className="text-2xl !text-[#5f2d85] mr-1">💬</span>
                <span className="italic !text-[#5f2d85] font-medium">
                  Non-crisis
                </span>{' '}
                questions and comments or to contact The LifeLine Canada
                Foundation about collaborating please{' '}
                <Link
                  to="/contact/contact-us"
                  className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] hover:from-[#5f2d85] hover:to-[#5f2d85] transition-all duration-300 underline decoration-[#5f2d85]/50"
                >
                  click here
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Right Image - Like Contribute */}
          <div className="flex justify-center lg:justify-end animate-fadeInRight">
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5f2d85] via-[#5f2d85] to-[#5f2d85] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500" />

              {/* Image container */}
              <div className="relative !bg-white/80 backdrop-blur-sm p-2 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={EmailImage}
                    alt="Email support"
                    className="w-full max-w-md h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5f2d85]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] text-white px-4 py-2 rounded-full text-sm font-normal shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  We're Here to Help ✦
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </AboutUsBackground>
  );
};

export default EmailSupport;
