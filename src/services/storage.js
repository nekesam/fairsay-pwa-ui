//Logic for handling storage of complaints in localStorage, simulating backend interactions for the purpose of this PWA prototype. This includes functions to retrieve existing complaints and submit new ones, with support for anonymous reporting and identity sharing preferences.

//Waiting for api integration

//Added - profile completion logic to unlock next feature, simulating a user verification process.
export const completeEmployeeVerification = (userId, verificationData) => {
  const users = JSON.parse(localStorage.getItem('fs_users') || '[]');
  const index = users.findIndex(u => u.id === userId);
  
  if (index !== -1) {
    users[index] = { 
      ...users[index], 
      ...verificationData, 
      emailVerified: true,
      isVerified: true,
      updatedAt: new Date().toISOString() // Unlocks the next feature
    };
    localStorage.setItem('fs_users', JSON.stringify(users));
    
    return users[index];
  }
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

export const submitComplaint = (data, isAnonymous = false) => {
  const storageKey = isAnonymous ? 'fs_anon_reports' : 'fs_verified_reports';
  const reports = JSON.parse(localStorage.getItem(storageKey) || '[]');
  
  const newReport = {
    id: `CPL-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    ...data,
    status: 'Under Review',
    submittedAt: new Date().toISOString(),
    
    userId: isAnonymous ? null : data.userId,
    ipAddress: isAnonymous ? 'REDACTED' : data.ipAddress
  };

  localStorage.setItem(storageKey, JSON.stringify([newReport, ...reports]));
  return { success: true, trackingId: newReport.id };
};

//Added - dashboard activity logs, simulating a feature that allows users to see a history of their interactions with the app, such as submitted complaints and completed educational modules. This enhances user engagement and provides a sense of progress within the app.

export const logActivity = (userId, action, details) => {
  const logs = JSON.parse(localStorage.getItem('fs_logs') || '[]');
  const newLog = { userId, action, details, timestamp: new Date().toISOString() };
  
  localStorage.setItem('fs_logs', JSON.stringify([newLog, ...logs].slice(0, 10)));
};