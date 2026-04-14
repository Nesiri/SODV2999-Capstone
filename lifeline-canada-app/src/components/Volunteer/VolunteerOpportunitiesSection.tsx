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
      className="relative w-full bg-gradient-to-br from-[#f5edf7] via-white to-[#e8dceb] py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      id="volunteer-form"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#89009B]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#B266C9]/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Form Header */}
        <div className="text-center mb-12 animate-fadeInDown">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#B266C9]/30 shadow-lg mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B266C9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#89009B]"></span>
            </span>
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#89009B] to-[#B266C9]">
              ✦ JOIN OUR TEAM ✦
            </span>
          </div>

          <h1 className="!text-3xl md:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#89009B] via-[#B266C9] to-[#89009B]">
              Volunteer Form
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take the first step to make a difference. We're excited to meet you!
          </p>
        </div>

        {/* Form - Card-based layout */}
        <form onSubmit={handleSubmit} className="space-y-8 animate-fadeInUp">
          {/* Volunteer Confirmation Card */}
          <div className="backdrop-blur-sm bg-white/90 rounded-3xl shadow-2xl shadow-[#89009B]/10 p-8 border border-white/40 transform hover:scale-[1.02] transition-all duration-500">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="volunteerConfirmation"
                required
                className="mt-1 w-5 h-5 rounded border-gray-300 text-[#89009B] focus:ring-[#B266C9]"
              />
              <span className="text-gray-700">
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#89009B] to-[#B266C9]">
                  Please check to confirm you are applying for a Volunteer
                  position *
                </span>
              </span>
            </label>
          </div>

          {/* Personal Information Card */}
          <div className="backdrop-blur-sm bg-white/90 rounded-3xl shadow-2xl shadow-[#89009B]/10 p-8 border border-white/40 transform hover:scale-[1.02] transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#f5edf7] to-[#e8dceb] rounded-2xl">
                <svg
                  className="w-6 h-6 text-[#89009B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="!text-1xl font-bold text-black">
                Personal Information
              </h2>
            </div>

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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
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
                    <label
                      key={pronoun}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="pronouns"
                        value={pronoun}
                        checked={formData.pronouns === pronoun}
                        onChange={handleInputChange}
                        required
                        className="w-4 h-4 text-[#89009B] focus:ring-[#B266C9]"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
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
                    <label
                      key={option}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="driversLicense"
                        value={option}
                        checked={formData.driversLicense === option}
                        onChange={handleInputChange}
                        required
                        className="w-4 h-4 text-[#89009B] focus:ring-[#B266C9]"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Interests Card */}
          <div className="backdrop-blur-sm bg-white/90 rounded-3xl shadow-2xl shadow-[#89009B]/10 p-8 border border-white/40 transform hover:scale-[1.02] transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#f5edf7] to-[#e8dceb] rounded-2xl">
                <svg
                  className="w-6 h-6 text-[#89009B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h2 className="!text-1xl font-bold text-black">
                Skills & Interests
              </h2>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-semibold text-gray-700 block">
                Please check all areas of Volunteering you would like to
                perform. *
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto p-4 border border-gray-200 rounded-xl bg-white/40">
                {VOLUNTEER_SKILLS.map((skill) => (
                  <label
                    key={skill}
                    className="flex items-start gap-2 p-2 hover:bg-[#f5edf7] rounded-lg transition-colors cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={skill}
                      checked={formData.volunteerAreas.includes(skill)}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#89009B] focus:ring-[#B266C9] flex-shrink-0"
                    />
                    <span className="text-sm text-gray-700">{skill}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  Please give details of your interests and experience:
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
                  placeholder="Tell us about your experience..."
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  Any specialized training or expertise:
                </label>
                <textarea
                  name="training"
                  value={formData.training}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
                  placeholder="Any specialized training or certifications..."
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  Upload a Resume if available:
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#89009B] transition-colors bg-white/40">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <div className="text-4xl mb-2">📄</div>
                    <p className="text-[#89009B] font-semibold">
                      Drag & Drop or Click to Upload
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Time Commitment Card */}
          <div className="backdrop-blur-sm bg-white/90 rounded-3xl shadow-2xl shadow-[#89009B]/10 p-8 border border-white/40 transform hover:scale-[1.02] transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#f5edf7] to-[#e8dceb] rounded-2xl">
                <svg
                  className="w-6 h-6 text-[#89009B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="!text-1xl font-bold text-black">
                Time Commitment
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-3">
                  Time Commitment *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {TIME_COMMITMENTS.map((commitment) => (
                    <label
                      key={commitment}
                      className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl hover:border-[#89009B] transition-colors bg-white/40 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="timeCommitment"
                        value={commitment}
                        checked={formData.timeCommitment === commitment}
                        onChange={handleInputChange}
                        required
                        className="w-4 h-4 text-[#89009B] focus:ring-[#B266C9]"
                      />
                      <span className="text-gray-700">{commitment}</span>
                    </label>
                  ))}
                </div>
              </div>

              {formData.timeCommitment === 'Other' && (
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">
                    If other, please explain:
                  </label>
                  <input
                    type="text"
                    name="otherCommitment"
                    value={formData.otherCommitment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
                    placeholder="Please specify..."
                  />
                </div>
              )}

              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  Hours per week available? *
                </label>
                <input
                  type="text"
                  name="hoursPerWeek"
                  value={formData.hoursPerWeek}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
                  placeholder="e.g., 5-10 hours"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  Anything else you'd like to share?
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#89009B] focus:ring-2 focus:ring-[#B266C9]/30 transition-all bg-white/70"
                  placeholder="Any additional information..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#89009B] to-[#B266C9] text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-xl shadow-[#89009B]/30 hover:shadow-2xl hover:shadow-[#B266C9]/40 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 !text-white">Submit Application</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                →
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#B266C9] to-[#C77DDF] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
