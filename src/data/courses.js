export const courses = [
  {
    id: "wage-hour",
    title: "Wage & Hour Rights",
    description:
      "Learn about minimum wage, overtime pay, pay stub requirements, and how to protect your earnings.",
    icon: "dollar",
    color: "#1E3A8A",
    progress: 75,
    lessons: [
      { id: 1, title: "Introduction to Wage & Hour Laws", duration: "3 min" },
      { id: 2, title: "Minimum Wage Requirements", duration: "5 min" },
      { id: 3, title: "Overtime Pay Rules", duration: "6 min" },
      { id: 4, title: "Pay Stub Rights & Recordkeeping", duration: "4 min" },
    ],
  },
  {
    id: "workplace-safety",
    title: "Workplace Safety Rights",
    description:
      "Understand OSHA standards, your right to a safe workplace, and how to report hazards.",
    icon: "shield",
    color: "#0F766E",
    progress: 0,
    lessons: [
      { id: 1, title: "OSHA and Your Rights", duration: "4 min" },
      { id: 2, title: "Reporting Workplace Hazards", duration: "5 min" },
      { id: 3, title: "Workers' Compensation Basics", duration: "6 min" },
      { id: 4, title: "Retaliation Protections", duration: "4 min" },
    ],
  },
  {
    id: "anti-discrimination",
    title: "Anti-Discrimination Rights",
    description:
      "Know your rights against discrimination, harassment, and how to file an EEOC complaint.",
    icon: "balance",
    color: "#7C3AED",
    progress: 0,
    lessons: [
      { id: 1, title: "Types of Workplace Discrimination", duration: "4 min" },
      { id: 2, title: "Sexual Harassment Laws", duration: "5 min" },
      { id: 3, title: "Filing an EEOC Complaint", duration: "6 min" },
      { id: 4, title: "Retaliation and Your Protections", duration: "3 min" },
    ],
  },
  {
    id: "family-leave",
    title: "Family & Medical Leave",
    description:
      "Understand FMLA, parental leave, and how to request medical leave without losing your job.",
    icon: "heart",
    color: "#DC2626",
    progress: 0,
    lessons: [
      { id: 1, title: "FMLA Eligibility and Coverage", duration: "4 min" },
      { id: 2, title: "How to Request Leave", duration: "3 min" },
      { id: 3, title: "Employer Obligations", duration: "5 min" },
      { id: 4, title: "Returning from Leave", duration: "3 min" },
    ],
  },
];

export const wageHourLessons = [
  {
    id: 1,
    title: "Introduction to Wage & Hour Laws",
    duration: "3 min",
    completed: true,
    heading: "Welcome to Wage & Hour Rights",
    body: "Understanding your wage and hour rights is crucial for ensuring fair compensation. The Fair Labor Standards Act (FLSA) establishes minimum wage, overtime pay, recordkeeping, and youth employment standards.",
    learnItems: [
      "Federal and state minimum wage requirements",
      "Overtime calculation and eligibility",
      "Pay stub requirements and wage theft",
      "Common violations and how to report them",
    ],
    callout: {
      type: "info",
      text: "Did You Know? According to the Economic Policy Institute, wage theft affects millions of workers annually, totaling billions in stolen wages.",
    },
    sections: [],
  },
  {
    id: 2,
    title: "Minimum Wage Requirements",
    duration: "5 min",
    completed: true,
    heading: "Understanding Minimum Wage",
    body: "The federal minimum wage is $7.25 per hour, but many states and cities have higher minimum wages. Employers must pay the highest applicable rate.",
    learnItems: [],
    callout: {
      type: "info",
      text: "Example: If federal minimum is $7.25 but your state requires $15.00, your employer must pay you $15.00 per hour.",
    },
    sections: [
      {
        heading: "Key Points:",
        items: [
          { label: "Federal Minimum:", text: "$7.25/hour (since 2009)" },
          {
            label: "State Minimums:",
            text: "Many states require higher rates",
          },
          {
            label: "Tipped Employees:",
            text: "Different rules apply ($2.13/hour + tips must equal minimum wage)",
          },
          {
            label: "Youth Minimum:",
            text: "Workers under 20 can be paid $4.25/hour for first 90 days",
          },
        ],
      },
      {
        heading: "What to Check:",
        items: [
          { label: "", text: "Your state's current minimum wage" },
          { label: "", text: "Any local/city minimum wage ordinances" },
          { label: "", text: "Industry-specific requirements" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Overtime Pay Rules",
    duration: "6 min",
    completed: true,
    heading: "Overtime Compensation",
    body: "Non-exempt employees must receive overtime pay for hours worked over 40 in a workweek at a rate of at least 1.5 times their regular rate.",
    learnItems: [],
    callout: {
      type: "warning",
      text: 'Common Violation: Employers cannot avoid overtime by calling you a "manager" or paying you a salary. Specific duties tests must be met.',
    },
    sections: [
      {
        heading: "Overtime Basics:",
        items: [
          { label: "Rate:", text: "1.5x regular pay (time and a half)" },
          { label: "Threshold:", text: "After 40 hours in a workweek" },
          {
            label: "Workweek:",
            text: "Any fixed 7-day period (not calendar week)",
          },
          {
            label: "Coverage:",
            text: "Most hourly employees; some salaried workers",
          },
        ],
      },
      {
        heading: "Who is Exempt?",
        intro:
          "Certain employees are exempt from overtime if they meet specific tests:",
        items: [
          { label: "", text: "Executive employees" },
          { label: "", text: "Administrative employees" },
          { label: "", text: "Professional employees" },
          { label: "", text: "Computer employees" },
          { label: "", text: "Outside sales employees" },
        ],
      },
      {
        heading: "Calculating Overtime:",
        callout: {
          type: "success",
          text: "Example:\nRegular Rate: $20/hour\nHours Worked: 50 hours\nRegular Pay: 40 hours × $20 = $800\nOvertime Pay: 10 hours × $30 (1.5 × $20) = $300\nTotal: $1,100",
        },
        items: [],
      },
    ],
  },
  {
    id: 4,
    title: "Pay Stub Rights & Recordkeeping",
    duration: "4 min",
    completed: false,
    heading: "Your Right to Accurate Records",
    body: "Employers must maintain accurate records and provide clear pay statements showing how your wages were calculated.",
    learnItems: [],
    callout: {
      type: "info",
      text: "Pro Tip: Take photos of your time clock or digital time records regularly. This evidence is invaluable if you need to file a complaint.",
    },
    sections: [
      {
        heading: "Pay Stub Requirements:",
        intro:
          "While federal law doesn't require pay stubs, most states do. Your pay stub should include:",
        items: [
          { label: "", text: "Gross wages earned" },
          { label: "", text: "Total hours worked (for hourly employees)" },
          { label: "", text: "Deductions (taxes, insurance, etc.)" },
          { label: "", text: "Net pay (take-home amount)" },
          { label: "", text: "Pay period dates" },
          { label: "", text: "Employer name and address" },
        ],
      },
      {
        heading: "Keep Your Own Records:",
        items: [
          { label: "", text: "Track hours worked daily" },
          { label: "", text: "Save all pay stubs" },
          { label: "", text: "Document overtime hours" },
          { label: "", text: "Note any unpaid time or wage discrepancies" },
        ],
      },
    ],
  },
];

export const wageHourQuiz = [
  {
    id: 1,
    question: "1. What is the federal minimum wage as of 2024?",
    options: ["$7.25/hour", "$10.00/hour", "$15.00/hour", "$12.50/hour"],
    correctIndex: 0,
  },
  {
    id: 2,
    question: "2. At what rate must overtime be paid?",
    options: [
      "Regular rate",
      "1.25x regular rate",
      "1.5x regular rate",
      "2x regular rate",
    ],
    correctIndex: 2,
  },
  {
    id: 3,
    question:
      "3. After how many hours in a workweek does overtime begin?",
    options: ["35 hours", "37.5 hours", "40 hours", "45 hours"],
    correctIndex: 2,
  },
  {
    id: 4,
    question: "4. Which is NOT typically required on a pay stub?",
    options: [
      "Gross wages",
      "Hours worked",
      "Social Security Number",
      "Deductions",
    ],
    correctIndex: 2,
  },
];
