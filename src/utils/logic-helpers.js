//For logic such as validating escalation eligibility, calculating days remaining for escalation, and mapping complaint status to progress percentage for the progress bar.

export const validateEscalation = (dateString, hasProof) => {
    if (!dateString) return { isValid: false, daysRemaining: 14 };
    
  const diffInDays = Math.floor((new Date() - new Date(dateString)) / (1000 * 3600 * 24));

    const remaining = 14 - diffInDays;

  return {
    isValid: diffInDays >= 14 && hasProof,
    daysRemaining: remaining > 0 ? remaining : 0
  };
};

export const getStatusProgress = (status) => {
  const mapping = { 'Submitted': 20, 'Under Review': 40, 'Escalated to PCC': 60, 'In Progress': 80, 'Resolved': 100 };
  return mapping[status] || 0;
};