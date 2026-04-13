import React from 'react';

const coverPhoto = '/assets/AdditionalResourceImages/Image-2-600x370.png';
const eMentalHealth = '/assets/AdditionalResourceImages/eMentalHealth.png';
const bcPsychologicalAssociation = '/assets/AdditionalResourceImages/BCPA.png';
const theravive = '/assets/AdditionalResourceImages/Theravive.png';
const centerForMentalHealthServices =
  '/assets/AdditionalResourceImages/SAMHSA.png';
const helpPROTherapistFinder = '/assets/AdditionalResourceImages/HelpPRO.png';
const americanAddictionCenters =
  '/assets/AdditionalResourceImages/FitcyHealth.png';

const MentalHealthResourcesSearchProfessional: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>
      <div className="w-full px-6 sm:px-8 relative z-10">
        <div className="w-full lg:w-4/5 mx-auto">
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 bg-clip-text text-transparent">
              Search for a Professional
            </span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          <div className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-1">
                <p className="leading-relaxed">
                  If you’re having suicidal thoughts — which can range from
                  despair, hopelessness, and a sense that life’s not worth
                  living to having a concrete plan for ending your life — now’s
                  the time to get help.
                </p>

                <p className="mt-4 leading-relaxed">
                  If it’s an emergency or you feel that you’re in immediate
                  danger, call a suicide prevention hotline. If you feel that
                  it’s not an emergency, talking with a trusted physician or
                  getting mental health counseling from a trained therapist,
                  psychologist, or psychiatrist can be a lifesaving step that
                  can help you feel good again.
                </p>
              </div>
              <img
                src={coverPhoto}
                alt="Search for a Professional"
                className="w-full h-40 sm:w-[30vw] sm:max-w-[18rem] sm:h-auto sm:shrink-0 rounded-xl shadow-md object-cover"
              />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                <img
                  src={eMentalHealth}
                  alt="eMentalHealth.ca"
                  className="w-20 sm:w-24 flex-shrink-0 rounded-lg object-contain"
                />
                <div>
                  <h3 className="font-semibold text-lg">eMentalHealth.ca</h3>
                  <p className="mt-2 text-gray-600">
                    eMentalHealth.ca provides anonymous, confidential and
                    trustworthy information, 24 hours a day, 365 days a year.
                  </p>
                  <a
                    href="https://www.ementalhealth.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-purple-700 font-medium underline"
                  >
                    Visit Site
                  </a>
                </div>
              </div>

              <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                <img
                  src={bcPsychologicalAssociation}
                  alt="BC Psychological Association"
                  className="w-20 sm:w-24 flex-shrink-0 rounded-lg object-contain"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    BC Psychological Association
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Search for a Registered Psychologist by city, client type,
                    area of practice, therapy method, and language.
                  </p>
                  <a
                    href="https://psychologists.bc.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-purple-700 font-medium underline"
                  >
                    Visit Site
                  </a>
                </div>
              </div>

              <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                <img
                  src={theravive}
                  alt="Theravive"
                  className="w-20 sm:w-24 flex-shrink-0 rounded-lg object-contain"
                />
                <div>
                  <h3 className="font-semibold text-lg">Theravive</h3>
                  <p className="mt-2 text-gray-600">
                    A network of licensed clinical counsellors, therapists, and
                    psychologists who uphold compassionate therapy for effective
                    change.
                  </p>
                  <a
                    href="https://www.theravive.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-purple-700 font-medium underline"
                  >
                    Visit Site
                  </a>
                </div>
              </div>

              <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                <img
                  src={centerForMentalHealthServices}
                  alt="Center for Mental Health Services"
                  className="w-20 sm:w-24 flex-shrink-0 rounded-lg object-contain"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    Center for Mental Health Services
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Maintains a mental health services locator to help find
                    services, facilities and resources in your state.
                  </p>
                  <a
                    href="https://www.samhsa.gov/find-help"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-purple-700 font-medium underline"
                  >
                    Visit Site
                  </a>
                </div>
              </div>

              <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                <img
                  src={helpPROTherapistFinder}
                  alt="HelpPRO Therapist Finder"
                  className="w-20 sm:w-24 flex-shrink-0 rounded-lg object-contain"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    HelpPRO Therapist Finder
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Developed in partnership with major suicide prevention
                    organizations.
                  </p>
                  <a
                    href="https://www.onlinetherapy.com/therapists/suicidal-thoughts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-purple-700 font-medium underline"
                  >
                    Visit Site
                  </a>
                </div>
              </div>

              <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                <img
                  src={americanAddictionCenters}
                  alt="American Addiction Centers"
                  className="w-20 sm:w-24 flex-shrink-0 rounded-lg object-contain"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    American Addiction Centers
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Combining mind, nutrition & exercise for integrated mental
                    health care.
                  </p>
                  <a
                    href="https://americanaddictioncenters.org/virtual-meetings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-purple-700 font-medium underline"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResourcesSearchProfessional;
