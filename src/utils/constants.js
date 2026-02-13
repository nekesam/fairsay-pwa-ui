/*FAIRSAY: Global Constants*/

export const COMPLAINT_STATUS = {
  SUBMITTED: 'Submitted',
  REVIEW: 'Under review',
  ESCALATED: 'Escalated',
  PROGRESS: 'In progress',
  RESOLVED: 'resolved',
  ARCHIVED: 'resolved-closed'
};

export const COMPLAINT_CATEGORIES = [
  { id: 'WAGE', label: 'Wage & Benefits Violations' },
  { id: 'HARASSMENT', label: 'Workplace Harassment' },
  { id: 'SAFETY', label: 'Health & Safety Concerns' },
  { id: 'DISCRIMINATION', label: 'Discrimination' },
  { id: 'OTHER', label: 'Other/General Grievance' }
];

export const APP_STEPS = {
  VERIFICATION: 'verified',
  EDUCATION: 'educated',
  ESCALATION: 'escalated'
};

export const HUB_CONTENT_IDS = {
  RIGHTS: 'rights_education',
  PROCEDURES: 'reporting_procedures',
  PRIVACY: 'privacy_policy'
};