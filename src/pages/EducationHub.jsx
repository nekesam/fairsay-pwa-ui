import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const requiredModules = [
  {
    id: "workplace-harassment",
    title: "Understanding Workplace Harassment",
    duration: "25 min",
    lessons: 5,
    status: "completed",
    progress: 100,
    description: "Learn to identify different forms of harassment and your legal protections",
  },
  {
    id: "discrimination-laws",
    title: "Discrimination Laws & Protected Classes",
    duration: "30 min",
    lessons: 6,
    status: "completed",
    progress: 100,
    description: "Know your rights under federal and state anti-discrimination laws",
  },
  {
    id: "wage-hour-rights",
    title: "Wage & Hour Rights",
    duration: "20 min",
    lessons: 4,
    status: "in-progress",
    progress: 80,
    description: "Understand overtime, minimum wage, and pay stub requirements",
  },
  {
    id: "retaliation-protection",
    title: "Retaliation Protection",
    duration: "15 min",
    lessons: 3,
    status: "locked",
    progress: 0,
    description: "What to do if you face retaliation for reporting violations",
  },
  {
    id: "complaint-filing",
    title: "Proper Complaint Filing Procedures",
    duration: "35 min",
    lessons: 7,
    status: "locked",
    progress: 0,
    description: "Step-by-step guide to documenting and submitting workplace complaints",
    fullWidth: true,
  },
];

const optionalModules = [
  {
    id: "whistleblower-protections",
    title: "Whistleblower Protections",
    duration: "18 min",
    lessons: 3,
    description: "Legal protections for reporting illegal activities",
  },
  {
    id: "workplace-safety",
    title: "Workplace Safety (OSHA)",
    duration: "25 min",
    lessons: 5,
    description: "Your rights to a safe working environment",
  },
];

const completedCount = requiredModules.filter((m) => m.status === "completed").length;
const totalRequired = requiredModules.length;
const overallProgress = Math.round((completedCount / totalRequired) * 100);
const remaining = totalRequired - completedCount;

function ModuleIcon({ status }) {
  if (status === "completed") {
    return (
      <div className="w-10 h-10 rounded-lg bg-[#0F766E] flex items-center justify-center shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (status === "in-progress") {
    return (
      <div className="w-10 h-10 rounded-lg bg-[#1E3A8A] flex items-center justify-center shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <polygon points="5,3 19,12 5,21" fill="white" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center shrink-0">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="#9CA3AF" strokeWidth="2" />
        <path d="M7 11V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V11" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function StatusBadge({ status }) {
  if (status === "completed") {
    return <span className="text-xs font-semibold text-[#0F766E]">Completed</span>;
  }
  if (status === "in-progress") {
    return <span className="text-xs font-semibold text-[#1E3A8A]">In Progress</span>;
  }
  return <span className="text-xs font-semibold text-gray-400">Locked</span>;
}

function RequiredModuleCard({ module }) {
  const isLocked = module.status === "locked";
  const isCompleted = module.status === "completed";
  const isInProgress = module.status === "in-progress";

  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3 ${isLocked ? "opacity-70" : ""}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-3">
          <ModuleIcon status={module.status} />
          <div>
            <h3 className={`font-semibold text-sm leading-snug mb-1 ${isLocked ? "text-gray-400" : "text-gray-800"}`}>
              {module.title}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>{module.duration}</span>
              <span>·</span>
              <span>{module.lessons} lessons</span>
              <span>·</span>
              <StatusBadge status={module.status} />
            </div>
          </div>
        </div>
        <span className="shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-600 border border-red-200">
          Required
        </span>
      </div>
      <p className={`text-xs leading-relaxed ${isLocked ? "text-gray-400" : "text-gray-500"}`}>
        {module.description}
      </p>
      {!isLocked && (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500 font-medium">Progress</span>
            <span className="text-gray-500 font-medium">{module.progress}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-[#0F766E]"
              style={{ width: `${module.progress}%` }}
            />
          </div>
        </div>
      )}
      {isCompleted && (
        <Link
          to={`/learning/lesson/${module.id}/1`}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-gray-200 text-[#0F766E] text-sm font-semibold hover:bg-teal-50 transition-colors"
        >
          Review module
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      )}
      {isInProgress && (
        <Link
          to={`/learning/lesson/${module.id}/1`}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#1E3A8A] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Continue Learning
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      )}
      {isLocked && (
        <button
          disabled
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gray-100 text-gray-400 text-sm font-semibold cursor-not-allowed"
        >
          Complete Previous Modules
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M7 11V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default function EducationHub() {
  const completedCount = requiredModules.filter(m => m.status === "completed").length;
  const totalRequired = requiredModules.length;
  const overallProgress = Math.round((completedCount / totalRequired) * 100);
  const remaining = totalRequired - completedCount;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#1a3461] to-[#0d5f5a] px-4 sm:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            {/* Left: Title + stats */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h1 className="font-poppins text-2xl sm:text-3xl font-bold text-white">Rights Education Hub</h1>
              </div>
              <p className="text-blue-100 text-sm sm:text-base mb-6 max-w-md">
                Learn about your workplace rights through interactive modules
              </p>
              <div className="flex items-center gap-10">
                <div>
                  <p className="text-white text-2xl sm:text-3xl font-bold font-poppins leading-none">{completedCount}/{totalRequired}</p>
                  <p className="text-blue-200 text-xs mt-1">Required Modules Completed</p>
                </div>
                <div>
                  <p className="text-white text-2xl sm:text-3xl font-bold font-poppins leading-none">{overallProgress}%</p>
                  <p className="text-blue-200 text-xs mt-1">Overall Progress</p>
                </div>
              </div>
            </div>

            {/* Right: Educational Status card */}
            <div className="bg-white/10 border border-white/20 rounded-xl p-5 w-full lg:w-64 shrink-0">
              <div className="flex items-center gap-3 mb-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 14C5.79086 14 4 15.7909 4 18V20H20V18C20 15.7909 18.2091 14 16 14H8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16L13.5 18L16 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-white font-semibold text-sm">Educational Status</p>
              </div>
              <p className="text-blue-100 text-xs mb-3 leading-relaxed">
                Complete all required modules to unlock complaint submission
              </p>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-white rounded-full transition-all"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
              <p className="text-blue-200 text-xs">{remaining} modules remaining</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
        {/* Why Education is Required */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 border-l-4 border-l-[#1E3A8A] flex gap-4">
          <div className="shrink-0 mt-0.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 2V8H20" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 13H8" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 17H8" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm mb-1">Why Education is Required</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Understanding your workplace rights is essential for effective complaint filing. These modules ensure you can identify violations, document incidents properly, and navigate the complaint process successfully. This education also strengthens your legal position should disputes arise.
            </p>
          </div>
        </div>

        {/* Additional Learning */}
        <section>
          <div className="mb-4">
            <h2 className="font-poppins text-xl font-bold text-gray-800">Additional Learning</h2>
            <p className="text-gray-500 text-sm mt-0.5">Expand your knowledge with optional modules</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {optionalModules.map((mod) => (
              <div key={mod.id} className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{mod.title}</p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-0.5">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <span>{mod.duration}</span>
                      <span>·</span>
                      <span>{mod.lessons} lessons</span>
                      <span>·</span>
                      <span className="text-[#0F766E] font-semibold">Available</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{mod.description}</p>
                <Link
                  to={`/learning/lesson/${mod.id}/1`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#1E3A8A] text-white text-sm font-semibold hover:opacity-90 transition-opacity mt-auto"
                >
                  Start Module
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Required Modules */}
        <section>
          <div className="flex items-start justify-between mb-1">
            <h2 className="font-poppins text-xl font-bold text-gray-800">Required Modules</h2>
            <span className="text-xs text-gray-400 font-medium mt-1">Must Complete All</span>
          </div>
          <p className="text-gray-500 text-sm mb-4">Complete these to unlock complaint submission</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {requiredModules.map((mod) =>
              mod.fullWidth ? (
                <div key={mod.id} className="sm:col-span-2">
                  <RequiredModuleCard module={mod} />
                </div>
              ) : (
                <RequiredModuleCard key={mod.id} module={mod} />
              )
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
