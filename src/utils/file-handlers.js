//To ensure that that uploaded files are in the correct format and within size limits. This will help prevent issues with file handling and ensure a smoother user experience when attaching evidence to complaints
//Waiting for api integration

export const validateFileUpload = (file) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: 'Unsupported file type. Please upload a PDF or image (JPEG/PNG).' };
    }
    if (file.size > maxSize) {
      return { valid: false, error: 'File size exceeds 5MB limit. Please upload a smaller file.' };
    }
    return { valid: true };
    };
