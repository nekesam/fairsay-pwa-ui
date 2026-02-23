// Course Progress Management Utility

const PROGRESS_KEY = 'fairsay_course_progress';

// Course order (must match courses array)
export const courseOrder = [
  'workplace-harassment',
  'discrimination-laws',
  'complaint-procedures',
  'wage-hour',
  'retaliation-protection',
];

/**
 * Get course progress from localStorage
 * @returns {Object} Progress object with courseId as keys
 */
export const getProgress = () => {
  try {
    const stored = localStorage.getItem(PROGRESS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    // Initialize with first course unlocked
    return {
      'workplace-harassment': { unlocked: true, completed: false, score: 0 }
    };
  } catch (error) {
    console.error('Error reading progress:', error);
    return {
      'workplace-harassment': { unlocked: true, completed: false, score: 0 }
    };
  }
};

/**
 * Save course progress to localStorage
 * @param {Object} progress - Progress object
 */
export const saveProgress = (progress) => {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

/**
 * Mark a course as completed and unlock the next one
 * @param {string} courseId - The completed course ID
 * @param {number} score - Quiz score (0-100)
 */
export const completeCourse = (courseId, score) => {
  const progress = getProgress();
  
  // Mark current course as completed
  progress[courseId] = {
    unlocked: true,
    completed: true,
    score: score,
    completedAt: new Date().toISOString()
  };
  
  // Unlock next course if it exists
  const currentIndex = courseOrder.indexOf(courseId);
  if (currentIndex !== -1 && currentIndex < courseOrder.length - 1) {
    const nextCourseId = courseOrder[currentIndex + 1];
    if (!progress[nextCourseId]) {
      progress[nextCourseId] = { unlocked: true, completed: false, score: 0 };
    } else {
      progress[nextCourseId].unlocked = true;
    }
  }
  
  saveProgress(progress);
  return progress;
};

/**
 * Check if a course is unlocked
 * @param {string} courseId - The course ID to check
 * @returns {boolean}
 */
export const isCourseUnlocked = (courseId) => {
  const progress = getProgress();
  return progress[courseId]?.unlocked === true;
};

/**
 * Check if a course is completed
 * @param {string} courseId - The course ID to check
 * @returns {boolean}
 */
export const isCourseCompleted = (courseId) => {
  const progress = getProgress();
  return progress[courseId]?.completed === true;
};

/**
 * Get the next course in sequence
 * @param {string} currentCourseId - Current course ID
 * @returns {string|null} Next course ID or null if last course
 */
export const getNextCourse = (currentCourseId) => {
  const currentIndex = courseOrder.indexOf(currentCourseId);
  if (currentIndex !== -1 && currentIndex < courseOrder.length - 1) {
    return courseOrder[currentIndex + 1];
  }
  return null;
};

/**
 * Get progress statistics
 * @returns {Object} Stats with completed count and total
 */
export const getProgressStats = () => {
  const progress = getProgress();
  const completed = courseOrder.filter(id => progress[id]?.completed === true).length;
  const unlocked = courseOrder.filter(id => progress[id]?.unlocked === true).length;
  
  return {
    completed,
    unlocked,
    total: courseOrder.length,
    completionPercentage: Math.round((completed / courseOrder.length) * 100)
  };
};

/**
 * Reset all progress (for testing/admin purposes)
 */
export const resetProgress = () => {
  const initialProgress = {
    'workplace-harassment': { unlocked: true, completed: false, score: 0 }
  };
  saveProgress(initialProgress);
  return initialProgress;
};
