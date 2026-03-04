import  { useState } from 'react';
import { Heart, Mail, MapPin, Send } from 'lucide-react';
type MyType = {
  title: string;
  subtitle: string;
};
const TLCEmailContactForm= ({title,subtitle}:MyType) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#f8f5ff] via-white to-[#f0f4fe] py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-blue-200/10 rounded-full blur-3xl animate-pulse [animation-delay:3s]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeInDown">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-200/50 shadow-lg mb-4">
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              ✦ WE'D LOVE TO HEAR FROM YOU ✦
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-600 to-blue-700">
              {title?.substring(0,13)}
            </span> 
            <br />
            <span className="text-gray-800 relative">
                {title?.substring(13,title?.length)}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></span>
            </span>
          </h1>
        </div>

        {/* Form Section - Full Width */}
        <div className="animate-fadeInLeft mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 border border-white/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields - First & Last */}
              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full"></span>
                  Name *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="First"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all bg-white/70 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Last"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></span>
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all bg-white/70 backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Questions or Comments */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full"></span>
                {subtitle}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl shadow-pink-500/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span className="relative z-10">Submit</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Address Section - Full Width Below, No Card */}
        <div className="animate-fadeInUp">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl">
                <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                The LifeLine Canada Foundation
              </h3>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 font-medium">P.O. Box 21040</p>
                <p className="text-gray-600">Orchard Park Post Office</p>
                <p className="text-gray-600">Kelowna, B.C. V1Y 9N8</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default TLCEmailContactForm;