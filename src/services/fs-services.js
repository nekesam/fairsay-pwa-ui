//For feedback on reports, such as ensuring that the matter has actually been resolved 
//Using the likert scale for feedback, and allowing users to provide comments on their experience with the resolution process. This will help us understand the effectiveness of the resolution and identify areas for improvement in the process.
//Waiting for api integration

export const askFairSayAI = async (query) => {
    // Simulate an API call to FairSay AI for feedback analysis
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          answer: `Regarding your question about "${query}": Under the Nigerian Labour Act, employers are required to provide a safe working environment and fair wages. If your complaint falls under these categories, you have a strong case for escalation. However, it's important to ensure that you have documented evidence of your internal reporting and the employer's response (or lack thereof) over the 14-day period. This will strengthen your case when presenting it to the PCC.`,
          links: [
            { label: "Nigerian Labour Act - Section on Workplace Safety", url: "https://www.lawyard.ng/laws/LFN-2004-Cap-L1.pdf" },
            { label: "PCC Complaint Guidelines", url: "https://pcc.gov.ng/complaint-guidelines" }]
        });
      }, 2000);
    });
  };


export const submitFeedback = (complaintId, feedbackData) => {
  const allFeedback = JSON.parse(localStorage.getItem('fs_feedback') || '[]');

  const newReport = {
    complaintId,
    ...feedbackData,
    submittedAt: new Date().toISOString(),
  }
  
localStorage.setItem('fs_feedback', JSON.stringify([newReport, ...allFeedback]));

return { success: true };

};