# FairSay UI Documentation

## Overview

This document provides comprehensive information about the FairSay PWA user interface, including all implemented pages, navigation flows, design system, and responsive behavior.

## Table of Contents

- [Implemented Pages](#implemented-pages)
- [Navigation Flow](#navigation-flow)
- [Design System](#design-system)
- [Responsive Design](#responsive-design)
- [Component Library](#component-library)
- [Form Validation](#form-validation)
- [Development Guide](#development-guide)

---

## Implemented Pages

### Authentication Pages

#### 1. Sign In (`/sign-in`)
**File:** `src/pages/SignIn.jsx`  
**Card Width:** 504px

**Features:**
- Email and password authentication
- "Remember me" checkbox
- Password visibility toggle (eye icon)
- Form validation with error messages
- Forgot password link
- Sign up link for new users

**Fields:**
- Email (required, validated)
- Password (required, with visibility toggle)
- Remember me checkbox

**Actions:**
- Sign In button (gradient blue-to-teal)
- Forgot Password? link → `/forgot-password`
- Create account link → `/sign-up`

---

#### 2. Sign Up (`/sign-up`)
**File:** `src/pages/SignUp.jsx`  
**Card Width:** 576px

**Features:**
- User registration with full validation
- Password confirmation matching
- Terms & conditions agreement
- Responsive grid layout (desktop: side-by-side fields)

**Fields:**
- First Name & Last Name (side-by-side on desktop)
- Email (full-width)
- Password & Confirm Password (side-by-side on desktop)
- Terms & Privacy Policy checkbox (required)

**Responsive Layout:**
- **Desktop (≥768px):** First/Last name side-by-side, Password/Confirm Password side-by-side
- **Mobile (<768px):** All fields stacked vertically

**Actions:**
- Create Account button → `/complete-profile`
- Sign in link → `/sign-in`

---

#### 3. Forgot Password (`/forgot-password`)
**File:** `src/pages/ForgotPassword.jsx`  
**Card Width:** 504px

**Features:**
- Email input for password reset request
- Form validation
- Clear instructions for password reset process
- Help text for users without email access
- Sign up option for new users

**Fields:**
- Email (required, validated, with envelope icon)

**Actions:**
- Reset Password button (navigates to `/check-email`)
- Back to sign in link → `/sign-in`
- Create an account link → `/sign-up`

**Additional Elements:**
- "OR" divider with gray line
- Help box with info about email access issues
- Support email link

---

#### 4. Check Email (`/check-email`)
**File:** `src/pages/CheckEmail.jsx`  
**Card Width:** 504px

**Features:**
- Success confirmation after password reset request
- Email delivery instructions
- Expiration notice (1-hour validity)
- Resend functionality
- Help text for spam folder reminder

**Visual Elements:**
- Success icon (72px envelope with checkmark)
- Heading: "Check your email"
- User's email address displayed
- Information box with clock icon (1-hour expiration notice)

**Actions:**
- Back to Sign In button → `/sign-in`
- Resend email link (shows confirmation after click)
- Support email link

**Info Box:**
- Light blue background with info icon
- Expiration warning (1 hour)
- Spam folder reminder

---

### Onboarding Pages (Multi-Step Flow)

#### 5. Complete Profile (`/complete-profile`)
**File:** `src/pages/CompleteProfile.jsx`  
**Card Width:** 1020px  
**Step:** 2 of 3

**Features:**
- Profile completion with workplace information
- Step indicator showing progress
- Responsive grid layout for efficient space usage
- Information tooltip about profile purpose

**Fields (with responsive grid):**
- Job Title & Department (side-by-side on desktop)
- Company Name & Phone Number (side-by-side on desktop)
- Location (full-width)

**Step Indicator:**
- ✓ Account Created (completed)
- **Profile (current)**
- Verification (pending)

**Actions:**
- Back button → `/sign-up`
- Continue button → `/employee-verification`

---

#### 6. Employee Verification (`/employee-verification`)
**File:** `src/pages/EmployeeVerification.jsx`  
**Card Width:** 1020px  
**Step:** 3 of 3

**Features:**
- Self-declaration textarea
- File upload for employment proof
- Responsive side-by-side layout (desktop)
- Privacy protection notice
- Consent checkboxes with data protection information

**Layout (Desktop):**
- Self-declaration & File upload (side-by-side, equal height ~180px)
- Privacy notice (full-width)
- Consent checkboxes (side-by-side)

**File Upload:**
- Accepted formats: PDF, JPG, PNG, DOC, DOCX
- Max size: 10MB
- Examples: Employee ID, Company badge, Offer letter, Pay stub
- Drag-and-drop or browse functionality
- File preview and remove option

**Consents (Required):**
1. Data Processing Consent
2. Privacy Policy Agreement

**Step Indicator:**
- ✓ Account Created (completed)
- ✓ Profile (completed)
- **Verification (current)**

**Actions:**
- Back button → `/complete-profile`
- Submit button → `/account-success`

---

#### 7. Account Success (`/account-success`)
**File:** `src/pages/AccountSuccess.jsx`  
**Card Width:** 1020px

**Features:**
- Success confirmation with visual feedback
- Account status cards showing completion progress
- "What's Next?" guidance section
- Call-to-action buttons for next steps
- Important notice about verification review

**Status Cards (3-column grid on desktop):**
1. ✓ Account Verified (green checkmark, teal background)
2. ✓ Profile Completed (green checkmark, teal background)
3. ⏱ Verification Under Review (yellow indicator, pending)

**What's Next? (3-column grid on large screens):**
1. **Complete Educational Modules** (book icon, blue)
   - Learn workplace rights and reporting procedures
   - Required before filing complaints
   
2. **Explore the Dashboard** (document icon, teal)
   - Complaint tracking, AI assistance, resources
   
3. **Anonymous Whistleblowing Available** (shield icon, red)
   - Submit anonymous reports immediately
   - No verification wait required

**Actions:**
- Go to Dashboard button → `/dashboard`
- Explore Learning Center button → `/learning`

---

### Main Application Pages

#### 8. Dashboard / Home (`/dashboard`, `/home`)
**File:** `src/pages/Dashboard.jsx`  
**Layout:** Full-width responsive layout

**Features:**
- Main landing page after successful onboarding
- User profile header with avatar and role display
- Notification system with badge indicators
- Verification status banner
- Personalized welcome message
- Statistics overview cards
- Quick action shortcuts
- Activity feed
- Education progress tracker
- Quick links navigation

**Header Section:**
- FairSay logo (clickable)
- Notification bell with red badge count
- User profile avatar ("JD") with initials
- Logout button

**Verification Banner:**
- Yellow background alert
- Status: "Verification in Progress"
- Link to Account Success page for status check

**Stats Cards (Responsive 2x2 grid on desktop, stack on mobile):**
1. **Education Progress** (Teal accent)
   - Percentage: 60% complete
   - Progress indicator: +20%
   - Detail: 3 of 5 modules completed
   
2. **Active Complaints** (Blue accent)  
   - Count: 2 active cases
   - Badge: "Update" notification
   - Detail: 1 under review
   
3. **Resolved Cases** (Green accent)  
   - Count: 1 resolved this month
   - Trend: Positive indicator
   
4. **AI Consultations** (Purple accent)  
   - Count: 8 total sessions
   - Icon: Sparkles/AI indicator

**Quick Actions (3-card grid with gradients):**
1. **Continue Learning** (Teal gradient)
   - Icon: Book
   - Action: Navigate to `/learning`
   
2. **File New Complaint** (Blue gradient)
   - Icon: Document with lock badge
   - Status: LOCKED (requires verification)
   - Disabled state
   
3. **Ask AI Assistant** (Blue gradient)
   - Icon: Sparkles
   - Action: Navigate to `/learning`

**Recent Activity Feed (4 activities with color-coded backgrounds):**
- Complaint #1234 Updated (Gray, 2 hours ago)
- Module "Understanding Your Rights" Completed (Green, Yesterday)
- AI Consultation Saved (Gray, 2 days ago)  
- Verification Document Required - Action Needed (Yellow, 3 days ago)

**Sidebar (Desktop right column, below main content on mobile):**

*Education Progress Widget:*
- 5 modules listed with progress bars
  1. Welcome to FairSay - 100% complete (green)
  2. Your Rights as an Employee - 100% complete (green)
  3. How to Report Issues - 80% complete (teal)
  4. Understanding the Process - 0% (gray, locked)
  5. Using AI Assistant - 0% (gray, locked)

*Quick Links:*
- My Profile
- Settings  
- Help & Support
- Privacy Policy
- Terms of Service
- Contact Us

**Responsive Layout:**
- **Desktop (≥1024px):** 3-column grid (main content spans 2 columns, sidebar 1 column)
- **Tablet (768px-1023px):** 2-column layouts with sidebar below
- **Mobile (<768px):** Single column, all sections stacked

**Actions & Navigation:**
- Logo click → Dashboard home
- Notifications → Shows notification panel
- Profile → User menu/settings
- Logout → Sign out
- Continue Learning → `/learning`
- AI Assistant → `/learning`  
- All quick links → Respective pages

---

## Navigation Flow

```
┌─────────────┐
│      /      │
│   (Root)    │
└──────┬──────┘
       │ Redirects to
       ▼
┌─────────────┐        ┌──────────────┐        ┌──────────────┐
│  /sign-in   │───────►│/forgot-      │───────►│ /check-email │
│  Sign In    │        │ password     │        │ Check Email  │
└──────┬──────┘        └──────────────┘        └──────┬───────┘
       │                                              │
       │ New user                              Back to Sign In
       ▼                                              │
┌─────────────┐                                       │
│  /sign-up   │◄──────────────────────────────────────┘
│  Sign Up    │
└──────┬──────┘
       │ Submit
       ▼
┌─────────────────┐     Step 2 of 3
│ /complete-      │
│  profile        │
└──────┬──────────┘
       │ Continue
       ▼
┌─────────────────┐     Step 3 of 3
│ /employee-      │
│  verification   │
└──────┬──────────┘
       │ Submit
       ▼
┌─────────────────┐
│ /account-       │
│  success        │
└──────┬──────────┘
       │
       ├─────────────────┐
       ▼                 ▼
  /dashboard        /learning
  /home (alias)    (placeholder)
```

---

## Design System

### Color Palette

**Primary Colors:**
- **FairSay Blue:** `#1E3A8A` - Primary actions, headings, links
- **FairSay Teal:** `#0F766E` - Success states, completed indicators

**Gray Scale:**
- `#F8FAFC` - Background gradient (light)
- `#F1F5F9` - Background gradient (medium)
- `#F9FAFB` - Card backgrounds (light)
- `#EFF6FF` - Blue tinted backgrounds
- `#F0FDFA` - Teal tinted backgrounds
- `#E5E7EB` - Borders, disabled states
- `#9CA3AF` - Placeholder text, secondary text
- `#4A5565` - Body text
- `#333` - Headings, primary text

**Semantic Colors:**
- **Success:** `#0F766E` (teal)
- **Warning:** `#F0B100` (yellow/amber)
- **Error:** `#B91C1C` (red)
- **Info:** `#1E3A8A` (blue)

**Gradients:**
- **Background:** `linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)`
- **Buttons:** `linear-gradient(90deg, #1E3A8A 0%, #0F766E 100%)`
- **Status Cards:** `linear-gradient(90deg, #EFF6FF 0%, #F0FDFA 100%)`

### Typography

**Font Families:**
- **Headings:** Poppins (Bold, 700)
- **Body:** Inter (Regular 400, Semibold 600)

**Font Sizes:**
- **Page Headings:** 27px (scaled down 10% from 30px)
- **Section Headings:** 20-21px
- **Body Text:** 14-16px
- **Labels:** 14px (semibold)
- **Small Text:** 12px
- **Extra Small:** 10-11px

**Line Heights:**
- Headings: 1.2-1.3
- Body: 1.5-1.75

### Spacing & Sizing

**Card Dimensions:**
- **Auth Pages:** 504px, 576px
- **Onboarding Pages:** 1020px (30% wider for better desktop layout)

**Border Radius:**
- Inputs: 8px (`rounded-lg`)
- Cards: 18px (`rounded-2xl`)
- Buttons: 8px (`rounded-lg`)
- Info boxes: 10px (`rounded-[10px]`)
- Status cards: 14px (`rounded-[14px]`)
- Circles: 50% (`rounded-full`)

**Input Height:**
- Standard inputs: `py-[11px]` (~44px total)
- Buttons: `py-3.5` (~50px total)

**Shadows:**
- Cards (standard): `shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]`
- Cards (hover): `shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]`

### Icons

**Sizes:**
- Logo SVG: 36px (scaled down 10%)
- Success icon: 72px
- Step indicator circles: 28px
- Status card icons: 28px (desktop), 20px (mobile compact)
- Upload icon: 36px
- Section icons: 20-24px

**Sources:**
- Custom SVG icons inline (email, lock, user, eye, checkmark, etc.)
- No external icon library dependencies

---

## Responsive Design

### Breakpoints

FairSay uses Tailwind CSS default breakpoints:
- **Mobile:** < 768px (base styles)
- **Tablet/Desktop:** ≥ 768px (`md:`)
- **Large Desktop:** ≥ 1024px (`lg:`)

### Responsive Patterns

#### 1. Step Indicator
- **Mobile:** Numbered circles only, compact spacing
- **Desktop:** Circles + text labels ("Account Created", "Profile", "Verification")

#### 2. Form Layouts

**Sign Up Page:**
- **Mobile:** Vertical stack (all fields full-width)
- **Desktop:** 
  - First Name / Last Name side-by-side
  - Email full-width
  - Password / Confirm Password side-by-side

**Complete Profile Page:**
- **Mobile:** Vertical stack
- **Desktop:**
  - Job Title / Department side-by-side
  - Company Name / Phone Number side-by-side
  - Location full-width

**Employee Verification Page:**
- **Mobile:** Vertical stack
- **Desktop:**
  - Self-declaration / File Upload side-by-side (equal height)
  - Consent checkboxes side-by-side

#### 3. Status Cards (Account Success)

- **Mobile:** Single column (vertical stack)
- **Tablet:** 3 columns for status cards
- **Desktop:** 3 columns for status cards, 2-3 columns for "What's Next"

#### 4. Grid Patterns

**Common Pattern:**
```jsx
className="grid grid-cols-1 md:grid-cols-2 gap-4"
```

**Large Screen Variation:**
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
```

### Mobile Optimizations

1. **Scrolling:** Mobile views allow vertical scrolling (no viewport height constraint)
2. **Touch Targets:** All buttons and inputs minimum 44px height
3. **Text Scaling:** Smaller font sizes for labels on mobile where needed
4. **Hidden Labels:** Step indicator text hidden on mobile to prevent overflow
5. **Reduced Padding:** Tighter spacing on mobile (p-4 vs p-7)
6. **Icon Sizing:** Smaller icons in compact layouts

---

## Component Library

### Reusable Components

#### Logo Component
**File:** `src/components/Logo.jsx`

**Features:**
- FairSay SVG logo (36px) + text (27px)
- Blue color scheme
- Clickable, links to home
- Reusable across all pages

**Usage:**
```jsx
import Logo from "../components/Logo";

<Logo />
```

---

#### StepIndicator Component
**File:** `src/components/StepIndicator.jsx`

**Props:**
```javascript
steps: [
  { number: 1, label: "Account Created", status: "completed" },
  { number: 2, label: "Profile", status: "current" },
  { number: 3, label: "Verification", status: "pending" }
]
```

**Status Options:**
- `completed` - Green checkmark, teal background
- `current` - Number, blue background
- `pending` - Number, gray background

**Features:**
- Responsive (hides labels on mobile)
- Connector lines between steps
- Visual progress indication

**Usage:**
```jsx
import StepIndicator from "../components/StepIndicator";

const steps = [
  { number: 1, label: "Account Created", status: "completed" },
  { number: 2, label: "Profile", status: "current" },
  { number: 3, label: "Verification", status: "pending" }
];

<StepIndicator steps={steps} />
```

---

### Common UI Patterns

#### Input Field with Icon
```jsx
<div>
  <label className="block text-[#333] text-sm font-medium mb-2">
    Email <span className="text-red-500">*</span>
  </label>
  <div className="relative">
    <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5" /* ... */>
      {/* Icon SVG */}
    </svg>
    <input
      type="email"
      className="w-full pl-11 pr-4 py-[11px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
      placeholder="your.email@example.com"
      required
    />
  </div>
</div>
```

#### Gradient Button
```jsx
<button
  type="submit"
  className="w-full text-white font-semibold py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg"
  style={{
    background: 'linear-gradient(90deg, #1E3A8A 0%, #0F766E 100%)',
  }}
>
  Button Text
</button>
```

#### Info Box (Blue)
```jsx
<div className="rounded border-l-4 border-[#1E3A8A] bg-[#EFF6FF] p-4">
  <p className="text-sm leading-5 text-[#1E3A8A]">
    <span className="font-semibold">Info:</span> Message content
  </p>
</div>
```

#### Notice Box (Yellow)
```jsx
<div className="rounded border-l-4 border-[#F0B100] bg-[#FEFCE8] p-4">
  <p className="text-sm leading-5 text-[#364153]">
    <span className="font-semibold">Important:</span> Notice content
  </p>
</div>
```

---

## Form Validation

### Client-Side Validation

#### Email Validation
- **Pattern:** Standard email regex
- **Required:** Yes
- **Error:** "Please enter a valid email address"

#### Password Validation
- **Min Length:** 8 characters
- **Required:** Yes
- **Error:** "Password must be at least 8 characters"

#### Password Confirmation
- **Match:** Must match password field
- **Error:** "Passwords do not match"

#### File Upload Validation
- **Accepted Types:** .pdf, .jpg, .jpeg, .png, .doc, .docx
- **Max Size:** 10MB
- **Error:** "File must be less than 10MB" or "Invalid file type"

### Validation States

**Error State:**
- Red border on input: `border-red-500`
- Red error message below field
- Icon changes to error indicator (if applicable)

**Success State:**
- Green border on input: `border-[#0F766E]` (optional)
- Checkmark indicator (for step completion)

**Focus State:**
- Blue ring: `focus:ring-2 focus:ring-[#1E3A8A]`
- Remove default border: `focus:border-transparent`

---

## Development Guide

### Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Access Application:**
   - Open `http://localhost:5173` (default Vite port)
   - Root `/` redirects to `/sign-in`

### File Organization

```
src/
├── components/
│   ├── Logo.jsx                 # Reusable logo component
│   └── StepIndicator.jsx        # Progress indicator
├── pages/
│   ├── SignIn.jsx               # Authentication
│   ├── SignUp.jsx
│   ├── ForgotPassword.jsx
│   ├── CompleteProfile.jsx      # Onboarding
│   ├── EmployeeVerification.jsx
│   └── AccountSuccess.jsx
├── styles/
│   └── index.css                # Global styles + Tailwind
├── App.jsx                      # Router configuration
└── main.jsx                     # Entry point
```

### Adding a New Page

1. **Create Page Component:**
   ```jsx
   // src/pages/NewPage.jsx
   import Logo from "../components/Logo";
   
   export default function NewPage() {
     return (
       <div className="min-h-screen flex justify-center items-center px-4 py-7"
         style={{
           background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
         }}>
         <div className="w-full max-w-[504px]">
           <Logo />
           {/* Page content */}
         </div>
       </div>
     );
   }
   ```

2. **Add Route:**
   ```jsx
   // src/App.jsx
   import NewPage from "./pages/NewPage";
   
   <Route path="/new-page" element={<NewPage />} />
   ```

### Styling Guidelines

1. **Use Tailwind CSS classes** for all styling
2. **Follow existing color constants** from design system
3. **Use inline styles for gradients** (Tailwind limitation)
4. **Maintain responsive patterns** with `md:` and `lg:` prefixes
5. **Keep consistent spacing** (gap-4, p-7, mb-7, etc.)
6. **Test mobile responsiveness** at 375px, 768px, 1024px

### Testing Checklist

- [ ] All form fields validate correctly
- [ ] Error messages display properly
- [ ] Navigation links work
- [ ] Responsive on mobile (375px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1024px+)
- [ ] Buttons have hover states
- [ ] Forms submit correctly
- [ ] Step indicators update status
- [ ] File upload works (validation)
- [ ] Password visibility toggle works

---

## Future Enhancements

### Planned Features (Not Yet Implemented)
- Educational Dashboard / Rights & Awareness Hub
- Email Verification Flow
- Complaint Submission System
- Whistleblowing Feature (anonymous reporting)
- Admin Portal
- AI-RAG System for assistance

### Technical Improvements
- Backend integration for form submissions
- Authentication token management
- Protected routes with auth guards
- Email verification endpoint
- File upload to server
- Form data persistence
- Loading states and spinners
- Toast notifications for success/error
- Accessibility improvements (ARIA labels, keyboard navigation)
- Unit tests and E2E tests
- PWA features (offline mode, service worker)

---

## Support & Contribution

### Need Help?
- Review existing pages in `src/pages/` for examples
- Check design system section for colors, typography, spacing
- Refer to component library for reusable components

### Contributing
1. Follow existing code patterns and naming conventions
2. Maintain responsive design for all new features
3. Test on multiple screen sizes
4. Keep components modular and reusable
5. Document new patterns in this guide

---

**Last Updated:** February 17, 2026  
**Version:** 1.0  
**Status:** Authentication & Onboarding Complete ✅
