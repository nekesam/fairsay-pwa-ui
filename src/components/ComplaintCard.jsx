import { getStatusProgress, validateEscalation } from "../utils/logicServices";

function ComplaintProgressCard({ complaint }) {
  // Use your new logic to get color and percentage
  const { color, percent } = getStatusProgress(complaint.status);
  
  // Logic for the escalation countdown
  const { isValid, daysRemaining } = validateEscalation(
    complaint.internalReportDate, 
    complaint.hasProof
  );

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Case ID</span>
          <h4 className="font-bold text-slate-800">{complaint.id}</h4>
        </div>
        <div 
          className="px-3 py-1 rounded-full text-[10px] font-bold text-white"
          style={{ backgroundColor: color }}
        >
          {complaint.status.toUpperCase()}
        </div>
      </div>

      {/* Progress Bar mapped to getStatusProgress */}
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-2">
        <div 
          className="h-full transition-all duration-700"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
      <p className="text-[10px] text-slate-500 font-medium mb-4">{percent}% of resolution process complete</p>

      {/* Escalation Eligibility Logic */}
      <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
        {isValid ? (
          <div className="flex items-center gap-2 text-teal-600 font-bold text-xs">
            <span>✅ Eligible for PCC Escalation</span>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <span className="text-slate-600 font-bold text-[11px]">Escalation Eligibility:</span>
            <span className="text-slate-400 text-[10px]">
              {daysRemaining} days of internal cooling period remaining.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}