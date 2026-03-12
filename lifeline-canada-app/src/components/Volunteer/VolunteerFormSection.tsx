import React, { useState } from 'react';

// Volunteer skills constant
const VOLUNTEER_SKILLS = [
  'Mental Health Professional (Must have minimum of Masters Degree)',
  'Short Term Dog Foster for Companion Paws',
  'Flight Volunteer',
  'Volunteer Coordinator',
  'Marketing Manager',
  'Online Marketing',
  'Social Media Management',
  'Facebook',
  'Instagram',
  'LinkedIn',
  'Graphic Design',
  'Pinterest',
  'Twitter',
  'YouTube',
  'Executive Assistant',
  'Administration Manager',
  'Administration',
  'Online Research',
  'French Translation',
  'Grant and Proposal Writing',
  'Product Sourcing (for any TLC needs)',
  'Online Adoption Dog Search (for CPC Adoptions)',
  'Website and App Updating',
  'Companion Paws Manager',
  'Adoption Facilitation',
  'Transport Coordinator - Companion Paws Adoption Program',
  'Dog Rescues Facilitator',
  'Veterinarian Facilitator',
  'Visiting Therapy Dog Facilitation',
  'Adoption Dog Assessor (Minimum 10 years experience)',
  'Volunteer at Temperament Assessments and Final Evaluations',
  'Media and Communications',
  'Professional Newsletter Writing',
  'Project Management',
  'Professional Bookkeeping/Accounting',
  'Public Relations',
  'Tech Support',
  'Special Events',
  'Fundraising',
] as const;

// Time commitment constant
const TIME_COMMITMENTS = [
  'Less than 6 months',
  '6 months to a year',
  'On a project by project basis',
  'Ongoing',
  'Other',
] as const;

// Pronouns constant
const PRONOUNS = ['He/Him', 'She/Her', 'They/Them'] as const;

// Provinces constant
const PROVINCES = [
  'Ontario',
  'Quebec',
  'British Columbia',
  'Alberta',
  'Manitoba',
  'Saskatchewan',
  'Nova Scotia',
  'New Brunswick',
  'Newfoundland',
  'PEI',
] as const;

const VolunteerFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    pronouns: '',
    address: '',
    city: '',
    province: 'Ontario',
    postalCode: '',
    email: '',
    phone: '',
    preferredContact: '',
    driversLicense: '',

    // Skills and interests
    volunteerAreas: [] as string[],
    experience: '',
    training: '',
    timeCommitment: '',
    otherCommitment: '',
    hoursPerWeek: '',
    additionalInfo: '',
  });

  const [file, setFile] = useState<File | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      volunteerAreas: checked
        ? [...prev.volunteerAreas, value]
        : prev.volunteerAreas.filter((area) => area !== value),
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData, file);
    // Handle form submission here
  };

  return (
    <section
      className="relative w-full bg-gradient-to-br from-[#f8f5ff] via-white to-[#f0f4fe] py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      id="volunteer-form"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Form Header */}
        <div className="text-center mb-12 animate-fadeInDown">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200/50 shadow-lg mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              ✦ JOIN OUR TEAM ✦
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-blue-700">
              Volunteer Form
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take the first step to make a difference. We're excited to meet you!
          </p>
        </div>

        {/* Form - Single flowing layout without cards */}
        <form onSubmit={handleSubmit} className="space-y-8 animate-fadeInUp">
          {/* Volunteer Confirmation */}
          <div className="bg-white/30 backdrop-blur-sm p-6 rounded-2xl border border-white/30">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="volunteerConfirmation"
                required
                className="mt-1 w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Please check Volunteer to confirm you are applying for a
                  Volunteer position *
                </span>
              </span>
            </label>
          </div>

          {/* Personal Information - No card, just flowing sections */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 border-b border-gray-200/60 pb-2">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                  placeholder="John"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                  placeholder="Doe"
                />
              </div>

              {/* Age */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                  placeholder="25"
                />
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Gender *
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non Binary</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Pronouns */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-gray-700">
                  Pronouns *
                </label>
                <div className="flex flex-wrap gap-6">
                  {PRONOUNS.map((pronoun) => (
                    <label key={pronoun} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="pronouns"
                        value={pronoun}
                        checked={formData.pronouns === pronoun}
                        onChange={handleInputChange}
                        required
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-gray-700">{pronoun}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-gray-700">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                  placeholder="123 Main St"
                />
              </div>

              {/* City */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                  placeholder="Toronto"
                />
              </div>

              {/* Province */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Province *
                </label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                >
                  {PROVINCES.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>

              {/* Postal Code */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                  placeholder="A1B 2C3"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                  placeholder="(555) 555-5555"
                />
              </div>

              {/* Preferred Contact Method */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Preferred Contact Method *
                </label>
                <select
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                >
                  <option value="">Select method</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="text">Text</option>
                </select>
              </div>

              {/* Driver's License */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-gray-700">
                  Do you have a valid driver's licence? *
                </label>
                <div className="flex gap-6">
                  {['Yes', 'No'].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="driversLicense"
                        value={option}
                        checked={formData.driversLicense === option}
                        onChange={handleInputChange}
                        required
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills and Interests - Flowing section */}
          <div className="space-y-6 pt-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 border-b border-gray-200/60 pb-2">
              Skills & Interests
            </h2>

            <div className="space-y-4">
              <label className="text-sm font-semibold text-gray-700 block">
                Please check all areas of Volunteering you would like to
                perform. Please check boxes for skills and interests *
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto p-4 border border-gray-200 rounded-xl bg-white/40 backdrop-blur-sm">
                {VOLUNTEER_SKILLS.map((skill) => (
                  <label
                    key={skill}
                    className="flex items-start gap-2 p-2 hover:bg-purple-50/50 rounded-lg transition-colors"
                  >
                    <input
                      type="checkbox"
                      value={skill}
                      checked={formData.volunteerAreas.includes(skill)}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 flex-shrink-0"
                    />
                    <span className="text-sm text-gray-700">{skill}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Details */}
            <div className="space-y-4 pt-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  Please give details of your interests and experience using
                  said skills:
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                  placeholder="Tell us about your experience..."
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  Please let us know any specialized area of training or
                  expertise:
                </label>
                <textarea
                  name="training"
                  value={formData.training}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                  placeholder="Any specialized training or certifications..."
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  Upload a Resume if available:
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-purple-400 transition-colors bg-white/40 backdrop-blur-sm">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <div className="text-4xl mb-2">📄</div>
                    <p className="text-purple-600 font-semibold">
                      Drag & Drop Files, or Click to Upload
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Time Commitment - Flowing section */}
          <div className="space-y-6 pt-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 border-b border-gray-200/60 pb-2">
              Time Commitment
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-3">
                  Time Commitment *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {TIME_COMMITMENTS.map((commitment) => (
                    <label
                      key={commitment}
                      className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl hover:border-purple-400 transition-colors bg-white/40 backdrop-blur-sm"
                    >
                      <input
                        type="radio"
                        name="timeCommitment"
                        value={commitment}
                        checked={formData.timeCommitment === commitment}
                        onChange={handleInputChange}
                        required
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-gray-700">{commitment}</span>
                    </label>
                  ))}
                </div>
              </div>

              {formData.timeCommitment === 'Other' && (
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">
                    If other, please explain...
                  </label>
                  <input
                    type="text"
                    name="otherCommitment"
                    value={formData.otherCommitment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                    placeholder="Please specify..."
                  />
                </div>
              )}

              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  How many hours per week are you available to volunteer? *
                </label>
                <input
                  type="text"
                  name="hoursPerWeek"
                  value={formData.hoursPerWeek}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                  placeholder="e.g., 5-10 hours"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  Is there anything else you would like to share with us?
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/70 backdrop-blur-sm"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Submit Application</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                →
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </form>
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
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default VolunteerFormSection;
