//Logic for handling storage of complaints in localStorage, simulating backend interactions for the purpose of this PWA prototype. This includes functions to retrieve existing complaints and submit new ones, with support for anonymous reporting and identity sharing preferences.

//Waiting for api integration

export const submitComplaint = (formData, user = null) => {
    const getComplaints = () => JSON.parse(localStorage.getItem('fs_reports') || '[]');
    const isAnon = !user || formData.isAnonymous;
  const reports = getComplaints();
  
  const newReport = {
    id: isAnon ? `anon-${Math.random().toString(36).substr(2, 9)}` : `fs-${Date.now()}`,
    ...formData,
    status: 'Submitted',
    createdAt: new Date().toISOString(),
     reporterName: isAnon ? "Confidential" : user.fullName,
     reporterId: isAnon ? null : user.id,
     canTrack: !isAnon
  };

  localStorage.setItem('fs_reports', JSON.stringify([newReport, ...reports]));
  return newReport;
};