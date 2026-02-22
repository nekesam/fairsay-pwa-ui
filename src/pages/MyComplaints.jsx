import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const complaints = [
  {
    id: "CPL-2024-001234",
    title: "Unpaid Overtime Hours",
    status: "Under Review",
    priority: "High Priority",
    description: "Worked 15 hours of overtime in January that were not compensated...",
    filed: "2024-02-10",
    updated: "2024-02-12",
    category: "Wage & Hour Violation",
    assignedTo: "HR Department",
    statusColor: "bg-orange-100 text-orange-700",
    priorityColor: "border border-orange-400 text-orange-600",
    categoryColor: "bg-blue-100 text-blue-700",
    borderColor: "border-l-orange-400",
  },
  {
    id: "CPL-2024-001189",
    title: "Workplace Harassment",
    status: "Investigation",
    priority: "Critical Priority",
    description: "Repeated inappropriate comments from supervisor...",
    filed: "2024-02-05",
    updated: "2024-02-11",
    category: "Harassment",
    assignedTo: "Legal Team",
    statusColor: "bg-red-100 text-red-700",
    priorityColor: "border border-red-500 text-red-600",
    categoryColor: "bg-purple-100 text-purple-700",
    borderColor: "border-l-red-500",
  },
  {
    id: "CPL-2024-001156",
    title: "Discriminatory Hiring Practice",
    status: "Resolved",
    priority: "Medium Priority",
    description: "Noticed pattern in hiring decisions based on age...",
    filed: "2024-01-28",
    updated: "2024-02-08",
    category: "Discrimination",
    assignedTo: "HR Department",
    statusColor: "bg-green-100 text-green-700",
    priorityColor: "border border-yellow-500 text-yellow-700",
    categoryColor: "bg-orange-100 text-orange-700",
    borderColor: "border-l-green-500",
  },
];

const stats = [
  { 
    label: "Total Complaints", 
    value: "3", 
    iconBg: "bg-[#1E3A8A]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    label: "Under Review", 
    value: "2", 
    iconBg: "bg-[#1E3A8A]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    label: "Resolved", 
    value: "1", 
    iconBg: "bg-[#1E3A8A]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    label: "Avg. Response Time", 
    value: "3 days", 
    iconBg: "bg-[#1E3A8A]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
];

export default function MyComplaints() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9]">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E7EB] px-6 py-4">
        <div className="max-w-[98%] mx-auto flex items-center justify-between">
          <Logo />
          <Link to="/dashboard" className="flex items-center gap-1 text-[#1E3A8A] hover:opacity-80 transition-opacity text-sm">
            ← Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-[98%] mx-auto px-6 py-7">
        {/* Page header */}
        <div className="flex items-start justify-between mb-5 flex-wrap gap-3.5">
          <div>
            <h1 className="text-[27px] font-bold text-gray-900 font-poppins">
              My Complaints
            </h1>
            <p className="text-gray-500 mt-1 text-xs">Track and manage your workplace violation reports</p>
          </div>
          <Link
            to="/file-complaint"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-white font-semibold text-xs transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(180deg, #1E3A8A 0%, #0F766E 100%)' }}
          >
            <span className="text-base">+</span> File New Complaint
          </Link>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-5">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className={`w-9 h-9 rounded-lg ${stat.iconBg} flex items-center justify-center mb-2.5`}>
                {stat.icon}
              </div>
              <div className="text-[22px] font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search & filters */}
        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
          <div className="relative flex-1 min-w-[180px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search complaints..."
              className="w-full pl-9 pr-3.5 py-2 border border-gray-200 rounded-lg text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A]"
            />
          </div>
          <select className="px-3.5 py-2 border border-gray-200 rounded-lg text-xs bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A] min-w-[108px]">
            <option value="">All Status</option>
            <option>Under Review</option>
            <option>Investigation</option>
            <option>Resolved</option>
          </select>
          <select className="px-3.5 py-2 border border-gray-200 rounded-lg text-xs bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A] min-w-[108px]">
            <option value="">All Priority</option>
            <option>High Priority</option>
            <option>Critical Priority</option>
            <option>Medium Priority</option>
          </select>
          <button className="flex items-center gap-1.5 px-3.5 py-2 border border-gray-200 rounded-lg text-xs bg-white text-gray-600 hover:bg-gray-50 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            More Filters
          </button>
        </div>

        {/* Complaints list */}
        <div className="flex flex-col gap-3.5">
          {complaints.map((complaint) => (
            <div
              key={complaint.id}
              className={`bg-white rounded-xl shadow-sm border border-gray-100 border-l-4 ${complaint.borderColor} p-4`}
            >
              <div className="flex items-start justify-between gap-3.5 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap mb-1">
                    <h3 className="text-sm font-bold text-gray-900">{complaint.title}</h3>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${complaint.statusColor}`}>
                      {complaint.status}
                    </span>
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${complaint.priorityColor}`}>
                      {complaint.priority}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2.5">{complaint.description}</p>
                  <div className="flex items-center gap-3.5 text-[11px] text-gray-400 flex-wrap">
                    <span className="flex items-center gap-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {complaint.id}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Filed {complaint.filed}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Updated {complaint.updated}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                  <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${complaint.categoryColor}`}>
                    {complaint.category}
                  </span>
                  <span className="text-[11px] text-gray-400">Assigned: {complaint.assignedTo}</span>
                  <button className="text-gray-400 hover:text-[#1E3A8A] transition-colors mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
