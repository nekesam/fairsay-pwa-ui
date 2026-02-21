import api from '../services/api';
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
    'pending': { color: '#1e3a8a', percent: 20, label: 'Under Review' },   //Blue
    'in_progress': { color: '#ea1f33', percent: 60, label: 'Investigation' }, //Red
    'resolved': { color: '#0f6b52', percent: 100, label: 'Resolved' }  //Green
  };
  return config[status] || { color: '#CBD5E1', percent: 0, label: status };
};


//Added - function to extract user initials for display in the UI, such as in the user avatar. This provides a simple way to personalize the user experience while maintaining a clean and consistent design.
export const getInitials = (user) => {
  if (!user) return "";
  const first = (user.firstName)?.[0] || "";
  const last = (user.lastName)?.[0] || "";
  return (first + last).toUpperCase();
};

//Added- function to map recent activity types to corresponding icons, simulating a visual representation of user actions in the activity feed. This enhances the user experience by providing intuitive visual cues for different types of activities within the app.
export const getActivityIcon = (action = "") => {
  if (action.includes("Complaint") || action.includes("Report")) return <img src={report} alt="Report" className="w-5 h-5" />;
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


 //Added - function to update lesson progress, simulating user interaction with the educational content. This allows the app to track which lessons have been completed and unlock subsequent modules accordingly.

export const updateLessonProgress = (userId, moduleId, lessonId) => {
  const users = JSON.parse(localStorage.getItem('fs_users') || '[]');
  const index = users.findIndex(u => u.id === userId);

  if (index !== -1) {
    if (!users[index].progress) users[index].progress = {};
    if (!users[index].progress[moduleId]) users[index].progress[moduleId] = [];

    if (!users[index].progress[moduleId].includes(lessonId)) {
      users[index].progress[moduleId].push(lessonId);
    }
    
    localStorage.setItem('fs_users', JSON.stringify(users));
    return users[index];
  }
};


export const completeModuleQuiz = (userId, moduleId, score) => {
  const users = JSON.parse(localStorage.getItem('fs_users') || '[]');
  const index = users.findIndex(u => u.id === userId);

  //The requirement: 80% to pass
  if (index !== -1 && score >= 80) {
    if (!users[index].completedModules) users[index].completedModules = [];
    if (!users[index].completedModules.includes(moduleId)) {
      users[index].completedModules.push(moduleId);
    }

   



    
    //Checks if all required modules from the Hub are done
    const required = ['harassment', 'discrimination', 'wage-hour', 'retaliation', 'procedures'];
    users[index].hasCompletedEducation = required.every(m => 
      users[index].completedModules.includes(m)
    );
    
    localStorage.setItem('fs_users', JSON.stringify(users));
    return users[index];
  }
};

//Added - function to retrieve complaints, simulating fetching data from a backend. This allows the app to display existing complaints and their statuses.

export const submitComplaint = async (data) => {
  try {
    const payload = {
      complaint_type: data.type,
      title: data.title, 
      description: data.description,
      is_anonymous: data.isAnonymous || false
    };
    const res = await api.post('/complaints', payload);
    return { success: true, trackingId: res.data.tracking_id };
  } catch (err) {
    console.error("Failed to submit complaint", err);
    return { success: false, message: err.response?.data?.message || "Submission failed" };
  }
}


//Added - dashboard activity logs, simulating a feature that allows users to see a history of their interactions with the app, such as submitted complaints and completed educational modules. This enhances user engagement and provides a sense of progress within the app.

export const logActivity = (userId, action, details) => {
  const logs = JSON.parse(localStorage.getItem('fs_logs') || '[]');
  const newLog = { userId, action, details, timestamp: new Date().toISOString() };
  
  localStorage.setItem('fs_logs', JSON.stringify([newLog, ...logs].slice(0, 10)));
};