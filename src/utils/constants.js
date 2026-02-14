//FAIRSAY: Global Constants
//Centralized file for all constant values used across the app, such as complaint categories, status options, and app steps. Ensures consistency and makes it easier to manage any changes in the future.
//To edit as needed
//Waiting for api integration

export const COMPLAINT_STATUS = {
  SUBMITTED: 'Submitted',
  REVIEW: 'Under review',
  ESCALATED: 'Escalated to PCC',
  PROGRESS: 'In progress',
  RESOLVED: 'Resolved',
  ARCHIVED: 'Resolved-closed'
};

export const COMPLAINT_CATEGORIES = [
  { id: 'WAGE', label: 'Wage & Benefits Violations' },
  { id: 'HARASSMENT', label: 'Workplace Harassment' },
  { id: 'SAFETY', label: 'Health & Safety Concerns' },
  { id: 'DISCRIMINATION', label: 'Discrimination' },
  { id: 'OTHER', label: 'Other/General Grievance' }
];

export const APP_STEPS = {
  EMAIL_VERIFICATION: 'emailVerified',
  PROFILE_COMPLETION: 'isVerified',
  EDUCATION: 'educated',
};

export const PRIVACY_DISCLAIMERS = {
  PCC_SHARING: "By toggling this, you agree to share your employee ID and name with the Public Complaints Commission (PCC).",
  INTERNAL_ESCALATION: "I confirm I reported this internally and waited at least 14 days for a resolution before escalating to the PCC.",
  CONFIDENTIAL_MODE: "Your identity will be masked. The PCC will see you as 'Confidential Employee'.",
  HONESTY_DECLARATION: "I declare that the information provided is true and follows the Nigerian Labour Act."
};