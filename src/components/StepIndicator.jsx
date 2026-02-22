export default function StepIndicator({ steps }) {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-3.5 w-full max-w-md mx-auto mb-7">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center gap-2 md:gap-3.5">
          <div className="flex items-center gap-2">
            <div
              className={`w-7 h-7 md:w-7 md:h-7 rounded-full flex items-center justify-center font-semibold text-xs ${
                step.status === 'completed'
                  ? 'bg-[#0F766E] text-white'
                  : step.status === 'current'
                  ? 'bg-[#1E3A8A] text-white'
                  : 'bg-[#E5E7EB] text-[#9CA3AF]'
              }`}
            >
              {step.status === 'completed' ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3333 4L6 11.3333L2.66667 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                step.number
              )}
            </div>
            <span
              className={`hidden md:inline text-sm font-medium ${
                step.status === 'completed' || step.status === 'current'
                  ? 'text-[#333]'
                  : 'text-[#9CA3AF]'
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="w-6 md:w-12 h-0.5 bg-[#E5E7EB]"></div>
          )}
        </div>
      ))}
    </div>
  );
}
