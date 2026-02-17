//For logic such as validating escalation eligibility, calculating days remaining for escalation, and mapping complaint status to progress percentage for the progress bar.

//Added - function to evaluate quiz answers, simulating the logic that checks user responses against correct answers and calculates a score. This allows the app to determine if users have passed the quiz and can unlock the reporting feature based on their performance.
export const evaluateQuiz = (userAnswers, correctAnswers) => {
  const score = userAnswers.filter((ans, i) => ans === correctAnswers[i]).length;
  const percentage = (score / correctAnswers.length) * 100;
  
  return {
    passed: percentage >= 80,
    score: percentage,
   
    message: percentage >= 80 ? "Placeholder message" : "Placeholder message"
  };
};


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
  const config = {
    'Submitted': { color: '#64748B', percent: 20 },      // Slate
    'Under Review': { color: '#1e3a8a', percent: 40 },   //Blue
    'Escalated to PCC': { color: '#7a20e9', percent: 60 }, // Indigo
    'Investigation': { color: '#ea1f33', percent: 80 }, //Red
    'Resolved': { color: '#0f6b52', percent: 100 }  //Green
  };
  return config[status] || { color: '#CBD5E1', percent: 0 };
};


//Added - function to generate anonymous IDs for users who choose to submit complaints anonymously. This helps maintain user privacy while still allowing them to track their complaints if they choose to do so. (note: ai suggested)
export const generateAnonymousID = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed confusing chars like O/0/I/1
  let result = 'FS-'; // Branding prefix
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result; // Example: FS-K7R2PW
};