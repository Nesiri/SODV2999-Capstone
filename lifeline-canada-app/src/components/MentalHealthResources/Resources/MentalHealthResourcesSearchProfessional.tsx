import React from "react";
import { Sparkles } from "lucide-react";

const MentalHealthResourcesSearchProfessional: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-xs sm:text-sm font-medium text-purple-700">Mental Health Support</span>
        </div>

        <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
            Search for a Professional
          </span>
        </h1>

        <div className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
          <p className="leading-relaxed">
            If you’re having suicidal thoughts — which can range from despair,
            hopelessness, and a sense that life’s not worth living to having a
            concrete plan for ending your life — now’s the time to get help.
          </p>

          <p className="mt-4 leading-relaxed">
            If it’s an emergency or you feel that you’re in immediate danger,
            call a suicide prevention hotline. If you feel that it’s not an
            emergency, talking with a trusted physician or getting mental
            health counseling from a trained therapist, psychologist, or
            psychiatrist can be a lifesaving step that can help you feel good
            again.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg">eMentalHealth.ca</h3>
              <p className="mt-2 text-gray-600">eMentalHealth.ca provides anonymous, confidential and trustworthy information, 24 hours a day, 365 days a year.</p>
              <a href="https://www.ementalhealth.ca" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-purple-700 font-medium underline">Visit Site</a>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg">BC Psychological Association</h3>
              <p className="mt-2 text-gray-600">Search for a Registered Psychologist by city, client type, area of practice, therapy method, and language.</p>
              <a href="https://psychologists.bc.ca" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-purple-700 font-medium underline">Visit Site</a>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg">Theravive</h3>
              <p className="mt-2 text-gray-600">A network of licensed clinical counsellors, therapists, and psychologists who uphold compassionate therapy for effective change.</p>
              <a href="https://www.theravive.com" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-purple-700 font-medium underline">Visit Site</a>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg">Center for Mental Health Services</h3>
              <p className="mt-2 text-gray-600">Maintains a mental health services locator to help find services, facilities and resources in your state.</p>
              <a href="https://www.samhsa.gov/find-help" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-purple-700 font-medium underline">Visit Site</a>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg">HelpPRO Therapist Finder</h3>
              <p className="mt-2 text-gray-600">Developed in partnership with major suicide prevention organizations.</p>
              <a href="https://www.onlinetherapy.com/therapists/suicidal-thoughts/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-purple-700 font-medium underline">Visit Site</a>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg">American Addiction Centers</h3>
              <p className="mt-2 text-gray-600">Combining mind, nutrition & exercise for integrated mental health care.</p>
              <a href="https://americanaddictioncenters.org/virtual-meetings" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-purple-700 font-medium underline">Visit Site</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResourcesSearchProfessional;