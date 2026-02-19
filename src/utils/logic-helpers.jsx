import book from '../images/Book.svg';
import report from '../images/Report.svg';
import chatbubble from '../images/Chatbubble.svg';
import danger from '../images/Danger.svg';

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
  let result = 'FS-';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result; //Example: FS-K7R2PW
};

//Added - function to extract user initials for display in the UI, such as in the user avatar. This provides a simple way to personalize the user experience while maintaining a clean and consistent design.
export const getInitials = (user) => {
  if (!user) return "";
  const first = user.firstName?.[0] || "";
  const last = user.lastName?.[0] || "";
  return (first + last).toUpperCase();
};

//Added- function to map recent activity types to corresponding icons, simulating a visual representation of user actions in the activity feed. This enhances the user experience by providing intuitive visual cues for different types of activities within the app.
export const getActivityIcon = (action = "") => {
  if (action.includes("Complaint")) return <img src={report} alt="Report" className="w-5 h-5" />;
  if (action.includes("Module") || action.includes('Lesson')) return <img src={book} alt="Education" className="w-5 h-5" />;
  if (action.includes('Verification')) return <img src={danger} alt="Warning" className="w-5 h-5" />;
  if (action.includes('AI Consultation')) return <img src={chatbubble} alt="Chat" className="w-5 h-5" />;
  
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" />
    </svg>
  );
};

//Added - function to calculate education progress percentage, simulating the logic that determines how much of the educational content a user has completed. This allows the app to provide feedback on user progress and encourage completion of educational modules.

export const calculateProgress = (user, totalModulesCount) => {
if (!user?.completedModules) return 0; 
  const completedCount = user.completedModules.length;
  return Math.round((completedCount / totalModulesCount) * 100);
};

export const isModuleCompleted = (user, moduleId) => {
  return user?.completedModules?.includes(moduleId) ? 100 : 0;
};