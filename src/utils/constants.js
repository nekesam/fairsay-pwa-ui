//FAIRSAY: Global Constants
//Centralized file for all constant values used across the app, such as complaint categories, status options, and app steps. Ensures consistency and makes it easier to manage any changes in the future.
//To edit as needed
//Waiting for api integration

//Added - the web app name
export const APP_NAME = "FairSay";

//Added - the required educational modules for the employee education hub, simulating the core content that users need to complete to unlock certain features or progress through the app. This allows for a structured learning path and ensures that users are informed about their rights and responsibilities in the workplace.

export const REQUIRED_MODULES = [
  { id: 'placeholder1', title: 'Understanding placeholder1', lessonCount: 1 },
  { id: 'plceholder2', title: 'Understanding placeholder2', lessonCount: 2 },
  { id: 'placeholder3', title: 'Understanding placeholder3', lessonCount: 3 },
  { id: 'placeholder4', title: 'Understanding placeholder4', lessonCount: 4 },
  { id: 'placeholder5', title: 'Understanding placeholder5', lessonCount: 5 }
];

//Added - the final educational module quiz questions, simulating an assessment that users must complete to demonstrate their understanding of the educational content. This helps ensure that users have absorbed the necessary information before progressing to the next stage of the app. 
//On second thought, I'll make this a quiz master key



export const FINAL_QUIZ_KEY = {
  placeholder1: { question: 'What is placeholder1?', answer: 'Answer1' },
  placeholder2: { question: 'What is placeholder2?', answer: 'Answer2' },
  placeholder3: { question: 'What is placeholder3?', answer: 'Answer3' },
  placeholder4: { question: 'What is placeholder4?', answer: 'Answer4' },
  placeholder5: { question: 'What is placeholder5?', answer: 'Answer5' }
}

//Added - complaint status options, simulating the different stages a complaint can go through in the system. This allows for better tracking and management of complaints within the app.
export const COMPLAINT_STATUS = {
  SUBMITTED: 'Submitted',
  REVIEW: 'Under review',
  ESCALATED: 'Escalated to PCC',
  PROGRESS: 'In progress',
  RESOLVED: 'Resolved',
  ARCHIVED: 'Resolved-closed'
};

//Added - complaint categories, simulating the different types of complaints that users can select when submitting a complaint. This helps categorize complaints for better organization and allows for more targeted handling of different issues within the app.

export const COMPLAINT_CATEGORIES = [
  { id: 'WAGE', label: 'Wage & Benefits Violations' },
  { id: 'HARASSMENT', label: 'Workplace Harassment' },
  { id: 'SAFETY', label: 'Health & Safety Concerns' },
  { id: 'DISCRIMINATION', label: 'Discrimination' },
  { id: 'OTHER', label: 'Other/General Grievance' }
];

//Added - app steps, simulating the different stages of the user journey within the app. This allows for better tracking of user progress and helps guide users through the various features and educational content in a structured way.

export const APP_STEPS = {
  EMAIL_VERIFICATION: 'emailVerified',
  PROFILE_COMPLETION: 'isVerified',
  EDUCATION: 'educated',
};

//Added - file upload validation rules, simulating the logic that ensures users can only upload files that meet certain criteria (such as file type and size limits). This helps prevent issues with file handling and ensures a smoother user experience when attaching evidence to complaints.

export const FILE_UPLOAD_RULES = {
  allowedTypes: ['application/pdf', 'image/jpeg', 'image/png', 'application/doc', 'application/docx'],
  maxSize: 10 * 1024 * 1024 // 10MB
};

//Added - privacy disclaimers, simulating the important information that users need to be aware of when submitting complaints or sharing their information with the Public Complaints Commission (PCC). This ensures transparency and helps users make informed decisions about their privacy and data sharing preferences within the app.

export const PRIVACY_DISCLAIMERS = {
  PCC_SHARING: "By toggling this, you agree to share your employee ID and name with the Public Complaints Commission (PCC).",
  INTERNAL_ESCALATION: "I confirm I reported this internally and waited at least 14 days for a resolution before escalating to the PCC.",
  CONFIDENTIAL_MODE: "Your identity will be masked. The PCC will see you as 'Confidential Employee'.",
  HONESTY_DECLARATION: "I declare that the information provided is true and follows the Nigerian Labour Act."
};