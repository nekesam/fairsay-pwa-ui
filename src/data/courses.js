// src/data/courses.js

export const courses = [
  {
    id: "workplace-harassment",
    title: "Workplace Harassment",
    description: "Learn to identify and respond to workplace harassment, ensuring a safe and respectful environment under Nigerian law.",
    icon: "shield",
    color: "#DC2626", 
    progress: 0,
    lessons: [
      { id: 1, duration: "5 min" }
    ]
  },
  {
    id: "discrimination-laws",
    title: "Discrimination Laws",
    description: "Understand Section 42 of the 1999 Constitution and how it protects you from unfair treatment.",
    icon: "balance",
    color: "#0F766E", 
    progress: 0,
    lessons: [
      { id: 1, duration: "6 min" },
      { id: 2, duration: "7 min" }
    ]
  },
  {
    id: "complaint-procedures",
    title: "Complaint Procedures",
    description: "Master the correct internal procedures and how to escalate to the Ministry of Labour or the NICN.",
    icon: "dollar", 
    color: "#B45309", 
    progress: 0,
    lessons: [
      { id: 1, duration: "5 min" },
      { id: 2, duration: "4 min" },
      { id: 3, duration: "6 min" }
    ]
  },
  {
    id: "wage-hour",
    title: "Wage & Hour Rights",
    description: "Learn about the National Minimum Wage, overtime pay, and how to protect your earnings in Nigeria.",
    icon: "dollar",
    color: "#1E3A8A", 
    progress: 0, 
    lessons: [
      { id: 1, title: "Introduction to the Labour Act", duration: "3 min" },
      { id: 2, title: "National Minimum Wage", duration: "5 min" },
      { id: 3, title: "Working Hours & Overtime", duration: "6 min" },
      { id: 4, title: "Pay Rights & Deductions", duration: "4 min" },
    ]
  },
  {
    id: "retaliation-protection",
    title: "Retaliation Protection",
    description: "Learn about the legal protections you have against employer retaliation when speaking up or joining a trade union.",
    icon: "heart",
    color: "#6D28D9", 
    progress: 0,
    lessons: [
      { id: 1, duration: "5 min" },
      { id: 2, duration: "4 min" },
      { id: 3, duration: "5 min" },
      { id: 4, duration: "4 min" },
      { id: 5, duration: "6 min" }
    ]
  }
];

export const wageHourLessons = [
  {
    id: 1,
    title: "Introduction to the Labour Act",
    duration: "3 min",
    heading: "Welcome to Nigerian Wage Rights",
    body: "Understanding your wage rights is crucial for ensuring fair compensation. The Nigerian Labour Act (Chapter L1, LFN 2004) is the primary legislation that protects workers' rights, standardizes contracts, and regulates wages.",
    learnItems: [
      "Overview of the Nigerian Labour Act",
      "Protection of wages and how they must be paid",
      "Your right to a written contract within 3 months",
      "Common violations and how to report them",
    ],
    callout: {
      type: "info",
      text: "Did You Know? Under Section 1 of the Labour Act, wages must be paid in legal tender (Naira). Paying workers with goods or accommodations instead of actual money is illegal.",
    },
    sections: [],
  },
  {
    id: 2,
    title: "National Minimum Wage",
    duration: "5 min",
    heading: "Understanding the Minimum Wage",
    body: "The National Minimum Wage Act legally binds employers (with 50 or more workers) to pay their employees a baseline salary. As of recent legislation, the minimum wage in Nigeria is ₦70,000 per month.",
    learnItems: [],
    callout: {
      type: "info",
      text: "Note: The minimum wage applies to full-time workers. Part-time or piece-rate workers have their wages calculated proportionally.",
    },
    sections: [
      {
        heading: "Key Points:",
        items: [
          { label: "Current Minimum:", text: "₦70,000 per month" },
          { label: "Coverage:", text: "Establishments employing 50 or more persons" },
          { label: "Exemptions:", text: "Establishments with fewer than 50 workers, or workers employed on a part-time basis." },
        ],
      },
      {
        heading: "What to Check:",
        items: [
          { label: "", text: "Does your basic salary meet the ₦70,000 threshold?" },
          { label: "", text: "Are allowances being unfairly grouped to mimic the minimum wage?" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Working Hours & Overtime",
    duration: "6 min",
    heading: "Time and Compensation",
    body: "According to Section 13 of the Labour Act, normal hours of work can be fixed by mutual agreement, by a collective bargaining agreement, or by an industrial wages board. Typically, normal working hours are 8 hours a day or 40 hours a week.",
    learnItems: [],
    callout: {
      type: "warning",
      text: 'Common Violation: Forcing employees to work beyond standard hours without overtime compensation or time off in lieu is a breach of labor rights.',
    },
    sections: [
      {
        heading: "Overtime Basics:",
        items: [
          { label: "Threshold:", text: "Any time worked beyond the agreed normal hours." },
          { label: "Rate:", text: "Must be paid at an overtime rate (often 1.5x on weekdays, 2x on public holidays) as stipulated in your contract or collective agreement." },
          { label: "Rest Periods:", text: "If you work 6 or more hours a day, you are entitled to at least a 1-hour rest interval." },
        ],
      },
      {
        heading: "Leave Entitlements:",
        intro: "Nigerian law guarantees paid time off to rest:",
        items: [
          { label: "Annual Leave:", text: "At least 6 working days of paid leave after 12 months of continuous service." },
          { label: "Sick Leave:", text: "Up to 12 working days of paid sick leave per year (with a medical certificate)." },
          { label: "Maternity Leave:", text: "12 weeks of maternity leave (at least 50% pay if employed for 6+ months)." },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Pay Rights & Deductions",
    duration: "4 min",
    heading: "Protecting Your Take-Home Pay",
    body: "Employers cannot arbitrarily deduct money from your salary. The Labour Act strictly regulates what can and cannot be removed from your wages.",
    learnItems: [],
    callout: {
      type: "info",
      text: "Pro Tip: Always review your payslip. Ensure statutory deductions (PAYE tax, Pension, NHF) are actually being remitted to the government and not just pocketed by your employer.",
    },
    sections: [
      {
        heading: "Lawful vs. Unlawful Deductions:",
        intro: "What can your employer deduct?",
        items: [
          { label: "Lawful:", text: "Statutory taxes (PAYE), Pension contributions (8%), National Housing Fund (NHF), or approved trade union dues." },
          { label: "Lawful (with consent):", text: "Repayment of salary advances or loans." },
          { label: "Unlawful:", text: "Fines for breakages, damages, or mistakes (unless explicitly agreed upon and proven willful negligence), or deducting wages as punishment." },
        ],
      },
      {
        heading: "Escalation:",
        items: [
          { label: "", text: "Report wage theft to your HR or Union representative." },
          { label: "", text: "Escalate to the Federal Ministry of Labour and Employment." },
          { label: "", text: "Legal action can be taken at the National Industrial Court of Nigeria (NICN)." },
        ],
      },
    ],
  },
];

export const wageHourQuiz = [
  {
    id: 1,
    question: "1. What is the current National Minimum Wage in Nigeria?",
    options: ["₦30,000/month", "₦50,000/month", "₦70,000/month", "₦100,000/month"],
    correctIndex: 2,
  },
  {
    id: 2,
    question: "2. Under the Nigerian Labour Act, can your employer pay your wages with goods instead of Naira?",
    options: [
      "Yes, if it's equal to the minimum wage",
      "Yes, if the goods are food items",
      "No, wages must be paid in legal tender",
      "Only for part-time workers",
    ],
    correctIndex: 2,
  },
  {
    id: 3,
    question:
      "3. How many weeks of maternity leave is the minimum standard under the Labour Act?",
    options: ["6 weeks", "8 weeks", "12 weeks", "16 weeks"],
    correctIndex: 2,
  },
  {
    id: 4,
    question: "4. Which of these is considered an UNLAWFUL deduction from your salary?",
    options: [
      "PAYE Tax",
      "Pension Contribution",
      "Trade Union Dues",
      "Arbitrary fines for making a mistake",
    ],
    correctIndex: 3,
  },
];