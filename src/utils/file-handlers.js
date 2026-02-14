//To ensure that that uploaded files are in the correct format and within size limits. This will help prevent issues with file handling and ensure a smoother user experience when attaching evidence to complaints
//Waiting for api integration

export const validateFileUpload = (file) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/doc', 'application/docx'];
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: 'Unsupported file type. Please upload a PDF or image (JPEG/PNG).' };
    }
    if (file.size > maxSize) {
      return { valid: false, error: 'File size exceeds 10MB limit. Please upload a smaller file.' };
    }
    return { valid: true };
    };
