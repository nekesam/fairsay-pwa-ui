import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

export default function Whistleblowing() {
  const navigate = useNavigate();
  const [showEducation, setShowEducation] = useState(true);
  const [formData, setFormData] = useState({
    violationType: "",
    description: "",
    location: "",
    dateOccurred: "",
    evidenceFiles: [],
  });

  const violationTypes = [
    { value: "safety", label: "Safety Violations", icon: "⚠️" },
    { value: "discrimination", label: "Discrimination", icon: "⚖️" },
    { value: "harassment", label: "Harassment", icon: "🚫" },
    { value: "wage-theft", label: "Wage Theft", icon: "💰" },
    { value: "retaliation", label: "Retaliation", icon: "🛡️" },
    { value: "other", label: "Other Violation", icon: "📋" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    navigate("/complaint-success");
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, evidenceFiles: [...prev.evidenceFiles, ...files] }));
  };

  const removeFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      evidenceFiles: prev.evidenceFiles.filter((_, i) => i !== index),
    }));
  };

  if (showEducation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-50">
          <div className="max-w-[95%] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Logo />
              <Link to="/learning" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Back to Education Hub
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-semibold">JD</div>
                <div className="hidden md:block">
                  <div className="font-semibold text-sm text-[#333]">John Divine</div>
                  <div className="text-xs text-[#9CA3AF]">Software Engineer</div>
                </div>
              </div>
              <Link to="/sign-in" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.3333 14.1667L17.5 10L13.3333 5.83334" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 10H7.5" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </header>

        <main className="max-w-[95%] mx-auto px-4 py-6">
          {/* Warning Banner */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 mb-6">
              <div className="flex flex-col lg:flex-row items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 mb-3">Anonymous Reporting</h1>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    Before submitting your report, it's important to understand your rights and the reporting process. 
                    This helps ensure your report is complete and increases the likelihood of a successful resolution.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
                    <div className="flex items-start gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                      <p className="text-sm text-gray-700">
                        We recommend reviewing our educational materials to understand your rights before filing a report. 
                        This is optional but highly encouraged.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/learning"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1E3A8A] text-white rounded-xl font-semibold text-sm hover:bg-[#1a3278] transition-colors"
                    >
                      Review Education Materials
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                    <button
                      onClick={() => setShowEducation(false)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors"
                    >
                      Continue to Report
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">End-to-End Encryption</h3>
                <p className="text-xs text-gray-600">Your report is encrypted and secure</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">Fully Anonymous</h3>
                <p className="text-xs text-gray-600">No personal information required</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">Protected Identity</h3>
                <p className="text-xs text-gray-600">Your identity stays confidential</p>
              </div>
            </div>
          </main>
        </div>
      );
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-[95%] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <Link to="/learning" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Education Hub
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {/* Home */}
            <Link to="/dashboard" className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Go to Dashboard">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>

            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-semibold">JD</div>
              <div className="hidden md:block">
                <div className="font-semibold text-sm text-[#333]">John Divine</div>
                <div className="text-xs text-[#9CA3AF]">Software Engineer</div>
              </div>
            </div>
            <Link to="/sign-in" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.3333 14.1667L17.5 10L13.3333 5.83334" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 10H7.5" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-[95%] mx-auto px-4 py-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#DC2626] to-[#EF4444] rounded-2xl p-6 lg:p-8 mb-6 text-white">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-1">Anonymous Whistleblowing Report</h1>
                <p className="text-white/90 text-sm">Report workplace violations securely and anonymously</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Violation Type */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <label className="block text-base font-bold text-gray-900 mb-4">
                    Type of Violation *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {violationTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, violationType: type.value }))}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                          formData.violationType === type.value
                            ? "border-[#DC2626] bg-red-50"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-2xl mb-1.5">{type.icon}</span>
                        <span className="text-xs font-semibold text-gray-700 text-center">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <label className="block text-base font-bold text-gray-900 mb-3">
                    Detailed Description *
                  </label>
                  <p className="text-sm text-gray-600 mb-4">
                    Provide as much detail as possible about what happened. Include dates, times, locations, and any witnesses if applicable.
                  </p>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    rows={6}
                    placeholder="Describe the violation in detail..."
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent resize-none text-sm"
                    required
                  />
                </div>

                {/* Location and Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <label className="block text-base font-bold text-gray-900 mb-3">
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                      placeholder="Office, department, or area"
                      className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent text-sm"
                    />
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <label className="block text-base font-bold text-gray-900 mb-3">
                      Date Occurred
                    </label>
                    <input
                      type="date"
                      value={formData.dateOccurred}
                      onChange={(e) => setFormData((prev) => ({ ...prev, dateOccurred: e.target.value }))}
                      className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Evidence Upload */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <label className="block text-base font-bold text-gray-900 mb-3">
                    Evidence (Optional)
                  </label>
                  <p className="text-sm text-gray-600 mb-4">
                    Attach photos, documents, or other evidence. Files will be encrypted.
                  </p>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#DC2626] transition-colors">
                    <input
                      type="file"
                      id="evidence"
                      multiple
                      accept="image/*,.pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="evidence" className="cursor-pointer">
                      <svg className="w-12 h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <span className="text-sm font-semibold text-[#DC2626]">Click to upload</span>
                      <span className="text-sm text-gray-500"> or drag and drop</span>
                    </label>
                  </div>
                  {formData.evidenceFiles.length > 0 && (
                    <div className="mt-4 space-y-2.5">
                      {formData.evidenceFiles.map((file, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-700 truncate flex-1">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(idx)}
                            className="ml-2.7 text-red-600 hover:text-red-800"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Anonymity Notice */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 sticky top-24">
                  <div className="flex items-start gap-3 mb-4">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-sm text-gray-900 mb-1">Your Privacy Protected</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        This report is completely anonymous. We do not collect IP addresses, browser fingerprints, or any identifying information.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      End-to-end encryption
                    </li>
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      No tracking cookies
                    </li>
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      No account required
                    </li>
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Secure file storage
                    </li>
                  </ul>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#DC2626] text-white rounded-xl font-bold text-base hover:bg-[#b91c1c] transition-colors flex items-center justify-center gap-3"
                >
                  Submit Anonymous Report
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                {/* Help Link */}
                <Link
                  to="/ai-assistant"
                  className="block text-center px-6 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  Need Help? Ask AI Assistant
                </Link>
              </div>
            </div>
          </form>
        </main>
      </div>
    );
  }
