//FAIRSAY: Global Constants
//Centralized file for all constant values used across the app, such as complaint categories, status options, and app steps. Ensures consistency and makes it easier to manage any changes in the future.
//To edit as needed
//Waiting for api integration

//Added - icons for the landing page features
import shield from '../images/FS_Logo.svg';
import book from '../images/Book.svg';
import report from '../images/Report.svg';
import lock from '../images/Lock.svg';
import social from '../images/Social.svg';
import analytics from '../images/Analytics.svg';

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
  REVIEW: 'Under Review',
  PROGRESS: 'Investigation',
  RESOLVED: 'Resolved',
  ARCHIVED: 'Closed'
};

//Added - complaint categories, simulating the different types of complaints that users can select when submitting a complaint. This helps categorize complaints for better organization and allows for more targeted handling of different issues within the app.

export const COMPLAINT_CATEGORIES = [
  { id: 'WAGE', label: 'Wage & Hour Violations' },
  { id: 'HARASSMENT', label: 'Harassment' },
  { id: 'SAFETY', label: 'Safety Violations' },
  { id: 'DISCRIMINATION', label: 'Discrimination' },
  { id: 'RETALIATION', label: 'Retaliation' },
  { id: 'WRONGFUL TERMINATION', label: 'Wrongful Termination' }
];

//Added- search categories for the complaint search feature, simulating the different criteria that users can use to filter and search through their complaints. This allows for a more efficient and user-friendly way to find specific complaints based on various attributes.
export const SEARCH_CATEGORIES = [
  { id: 'WAGE', label: 'Wage & Hour' },
  { id: 'HARASSMENT', label: 'Harassment' },
  { id: 'SAFETY', label: 'Safety' },
  { id: 'DISCRIMINATION', label: 'Discrimination' }
];

//Added - profile privacy options, simulating the different levels of privacy that users can choose for their profiles. This allows users to control who can see their information and complaints within the app, enhancing user privacy and security.
export const PROFILE_PRIVACY_OPTIONS = [
  { id: 'CONFIDENTIAL', label: 'Private - Only visible to you' },
  { id: 'SHARED', label: 'Public - Visible to all users' },
  { id: 'ORGANIZATION', label: 'Organization - Visible to your organization' }
];

//Added - app steps, simulating the different stages of the user journey within the app. This allows for better tracking of user progress and helps guide users through the various features and educational content in a structured way.

export const APP_STEPS = {
    REGISTRATION: 'isRegistered',
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

//Added - landing page features list, which will make my life easier (wish I had done this sooner). This simulates the key features that will be highlighted on the landing page to attract and inform potential users about the benefits of using the app. This allows for easy updates to the landing page content without having to dig through the component code.

export const LANDING_FEATURES = [
  {
    id: 'edu',
    title: "Rights Education Hub",
    desc: "Comprehensive educational materials covering workplace rights, reporting procedures, and legal protections. Mandatory completion ensures informed decisions.",
    icon: book,
    color: "blue"
  },
  {
    id: 'report',
    title: "Complaint Submission",
    desc: "Easy-to-use complaint forms with evidence upload capabilities. Internal escalation verification ensures proper channels are followed.",
    icon: report,
    color: "blue"
  },
  {
    id: 'whistle',
    title: "Secure Whistleblowing",
    desc: "Anonymous drop-and-go submission option for those who wish to report without revealing their identity. Full encryption and protection guaranteed.",
    icon: shield,
    color: "red"
  },
  {
    id: 'track',
    title: "Real-Time Tracking",
    desc: "Monitor your complaint status from submission to resolution. Receive updates and notifications throughout the process.",
    icon: analytics,
    color: "blue"
  },
  {
    id: 'ai',
    title: "AI-Powered Guidance",
    desc: "RAG system provides personalized recommendations, answers FAQs, and suggests tailored next steps based on your situation.",
    icon: social,
    color: "blue"
  },
  {
    id: 'privacy',
    title: "Data Privacy & Security",
    desc: "Enterprise-grade security with role-based access control. Your data is encrypted and protected at all times.",
    icon: lock,
    color: "red"
  }
];