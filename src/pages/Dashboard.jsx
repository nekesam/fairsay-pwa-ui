import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9]">
      <Navbar />

      {/* Main Content */}
      <main className="max-w-[95%] mx-auto px-6 py-8">
        {/* Verification Banner */}
        <div className="mb-8 rounded-lg border-l-4 border-[#F0B100] bg-[#FEFCE8] p-4 flex items-start justify-between flex-col md:flex-row gap-4">
          <div className="flex items-start gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 mt-0.5"
            >
              <circle cx="12" cy="12" r="10" stroke="#F0B100" strokeWidth="2" />
              <path d="M12 8V12" stroke="#F0B100" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="16" r="1" fill="#F0B100" />
            </svg>
            <div>
              <div className="font-semibold text-sm text-[#333] mb-1">
                Verification In Progress
              </div>
              <div className="text-sm text-[#92400E]">
                Your employment verification is under review. You can access educational
                materials while we verify your documents (usually within 24 hours).
              </div>
            </div>
          </div>
          <Link
            to="/account-success"
            className="text-sm text-[#1E3A8A] font-semibold hover:text-[#0F766E] whitespace-nowrap"
          >
            View Status
          </Link>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="font-poppins font-bold text-3xl text-[#333] mb-2">
            Welcome Back, John
          </h1>
          <p className="text-[#4A5565]">
            Here's what's happening with your workplace rights today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Education Progress */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-[#E5E7EB]">
                <div className="w-12 h-12 rounded-lg bg-[#0F766E] flex items-center justify-center mb-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 7V21M3 18C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7C12 5.93913 12.4214 4.92172 13.1716 4.17157C13.9217 3.42143 14.9391 3 16 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V17C22 17.2652 21.8946 17.5196 21.7071 17.7071C21.5196 17.8946 21.2652 18 21 18H15C14.2044 18 13.4413 18.3161 12.8787 18.8787C12.3161 19.4413 12 20.2044 12 21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H3Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-xs text-[#9CA3AF] mb-1">Education Progress</div>
                <div className="flex items-baseline gap-2">
                  <div className="font-bold text-2xl text-[#333]">60%</div>
                  <div className="text-xs text-[#0F766E] flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 9V3M3 6L6 3L9 6"
                        stroke="#0F766E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    +20%
                  </div>
                </div>
                <div className="text-xs text-[#9CA3AF] mt-1">3 of 5 modules</div>
              </div>

              {/* Active Complaints */}
              <Link 
                to="/my-complaints"
                className="bg-white rounded-xl p-5 shadow-sm border border-[#E5E7EB] hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1E3A8A] flex items-center justify-center mb-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-xs text-[#9CA3AF] mb-1">Active Complaints</div>
                <div className="flex items-baseline gap-2">
                  <div className="font-bold text-2xl text-[#333]">2</div>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">
                    Update
                  </span>
                </div>
                <div className="text-xs text-[#9CA3AF] mt-1">1 under review</div>
              </Link>

              {/* Resolved Cases */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-[#E5E7EB]">
                <div className="w-12 h-12 rounded-lg bg-[#0F766E] flex items-center justify-center mb-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-xs text-[#9CA3AF] mb-1">Resolved Cases</div>
                <div className="font-bold text-2xl text-[#333]">1</div>
                <div className="text-xs text-[#9CA3AF] mt-1">This month</div>
              </div>

              {/* AI Consultations */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-[#E5E7EB]">
                <div className="w-12 h-12 rounded-lg bg-[#1E3A8A] flex items-center justify-center mb-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-xs text-[#9CA3AF] mb-1">AI Consultations</div>
                <div className="font-bold text-2xl text-[#333]">8</div>
                <div className="text-xs text-[#9CA3AF] mt-1">Total sessions</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="font-poppins font-bold text-xl text-[#333] mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Continue Learning */}
                <Link
                  to="/learning"
                  className="bg-gradient-to-br from-[#0F766E] to-[#0D9488] rounded-xl p-6 text-white hover:shadow-lg transition-shadow"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-4"
                  >
                    <path
                      d="M12 7V21M3 18C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7C12 5.93913 12.4214 4.92172 13.1716 4.17157C13.9217 3.42143 14.9391 3 16 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V17C22 17.2652 21.8946 17.5196 21.7071 17.7071C21.5196 17.8946 21.2652 18 21 18H15C14.2044 18 13.4413 18.3161 12.8787 18.8787C12.3161 19.4413 12 20.2044 12 21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H3Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="font-semibold text-lg mb-2">Continue Learning</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Resume your rights education modules
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    Go to Education hub
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3.33301 8H12.6663M12.6663 8L8.66634 4M12.6663 8L8.66634 12"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>

                {/* File New Complaint */}
                <Link
                  to="/file-complaint"
                  className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-xl p-6 text-white hover:shadow-lg transition-shadow"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-4"
                  >
                    <path
                      d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="font-semibold text-lg mb-2">File New Complaint</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Report a workplace rights violation
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    Start Complaint
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3.33301 8H12.6663M12.6663 8L8.66634 4M12.6663 8L8.66634 12"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>

                {/* Ask AI Assistant */}
                <Link
                  to="/ai-assistant"
                  className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-xl p-6 text-white hover:shadow-lg transition-shadow"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-4"
                  >
                    <path
                      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="font-semibold text-lg mb-2">Ask AI Assistant</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Get instant guidance on your rights
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    Start Chat
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3.33301 8H12.6663M12.6663 8L8.66634 4M12.6663 8L8.66634 12"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-poppins font-bold text-xl text-[#333]">
                  Recent Activity
                </h2>
                <button className="text-sm text-[#1E3A8A] font-semibold hover:text-[#0F766E]">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {/* Activity 1 */}
                <div className="flex gap-3 p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="flex-shrink-0 mt-0.5"
                  >
                    <path
                      d="M5 16.6667C4.55797 16.6667 4.13405 16.491 3.82149 16.1785C3.50893 15.8659 3.33333 15.442 3.33333 15V3.33333C3.33333 2.8913 3.50893 2.46738 3.82149 2.15482C4.13405 1.84226 4.55797 1.66667 5 1.66667H11.6667L16.6667 6.66667V15C16.6667 15.442 16.491 15.8659 16.1785 16.1785C15.8659 16.491 15.442 16.6667 15 16.6667H5Z"
                      stroke="#1E3A8A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-[#333] mb-1">
                      Complaint #1234 Updated
                    </div>
                    <div className="text-sm text-[#9CA3AF] mb-1">
                      Your complaint has been reviewed by HR
                    </div>
                    <div className="text-xs text-[#9CA3AF]">2 hours ago</div>
                  </div>
                </div>

                {/* Activity 2 */}
                <div className="flex gap-3 p-4 bg-[#F0FDF4] rounded-lg border border-[#BBF7D0]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="flex-shrink-0 mt-0.5"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="8.33333"
                      stroke="#0F766E"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7.5 10L9.16667 11.6667L12.5 8.33333"
                      stroke="#0F766E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-[#333] mb-1">
                      Module Completed
                    </div>
                    <div className="text-sm text-[#9CA3AF] mb-1">
                      You completed 'Understanding Workplace Harassment'
                    </div>
                    <div className="text-xs text-[#9CA3AF]">1 day ago</div>
                  </div>
                </div>

                {/* Activity 3 */}
                <div className="flex gap-3 p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="flex-shrink-0 mt-0.5"
                  >
                    <path
                      d="M17.5 12.5C17.5 12.942 17.3244 13.3659 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z"
                      stroke="#B91C1C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-[#333] mb-1">
                      AI Consultation Saved
                    </div>
                    <div className="text-sm text-[#9CA3AF] mb-1">
                      Chat transcript saved to your documents
                    </div>
                    <div className="text-xs text-[#9CA3AF]">3 days ago</div>
                  </div>
                </div>

                {/* Activity 4 */}
                <div className="flex gap-3 p-4 bg-[#FEFCE8] rounded-lg border border-[#FDE047]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="flex-shrink-0 mt-0.5"
                  >
                    <path
                      d="M10 6.66667V10M10 13.3333H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z"
                      stroke="#F0B100"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-[#333] mb-1">
                      Action Required
                    </div>
                    <div className="text-sm text-[#9CA3AF] mb-1">
                      Complete verification to unlock complaint submission
                    </div>
                    <div className="text-xs text-[#9CA3AF]">5 days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Education Progress */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-base text-[#333]">
                  Education Progress
                </h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 10.833V4.16634C16.6667 3.94533 16.5789 3.73337 16.4226 3.57709C16.2663 3.42081 16.0544 3.33301 15.8333 3.33301H4.16667C3.94565 3.33301 3.73369 3.42081 3.57741 3.57709C3.42113 3.73337 3.33333 3.94533 3.33333 4.16634V15.833C3.33333 16.054 3.42113 16.266 3.57741 16.4223C3.73369 16.5785 3.94565 16.6663 4.16667 16.6663H10.8333"
                    stroke="#0F766E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3333 15L15.8333 17.5L20.8333 12.5"
                    stroke="#0F766E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="space-y-4">
                {/* Module 1 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#333]">Workplace Harassment</span>
                    <span className="text-xs font-semibold text-[#0F766E]">100%</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#0F766E] to-[#0D9488] h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                {/* Module 2 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#333]">Discrimination Laws</span>
                    <span className="text-xs font-semibold text-[#0F766E]">100%</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#0F766E] to-[#0D9488] h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                {/* Module 3 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#333]">Wage & Hour Rights</span>
                    <span className="text-xs font-semibold text-[#F0B100]">80%</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#0F766E] to-[#0D9488] h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                {/* Module 4 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#333]">Retaliation Protection</span>
                    <span className="text-xs font-semibold text-[#9CA3AF]">0%</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                    <div className="h-2 rounded-full" style={{ width: "0%" }}></div>
                  </div>
                </div>

                {/* Module 5 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#333]">Filing Procedures</span>
                    <span className="text-xs font-semibold text-[#9CA3AF]">0%</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                    <div className="h-2 rounded-full" style={{ width: "0%" }}></div>
                  </div>
                </div>
              </div>

              <button
                className="w-full mt-4 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg"
                style={{
                  background: "linear-gradient(90deg, #1E3A8A 0%, #0F766E 100%)",
                }}
              >
                Continue
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="inline ml-2"
                  fill="none"
                >
                  <path
                    d="M3.33301 8H12.6663M12.6663 8L8.66634 4M12.6663 8L8.66634 12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
              <h3 className="font-semibold text-base text-[#333] mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link
                  to="/learning"
                  className="flex items-center gap-3 text-sm text-[#4A5565] hover:text-[#1E3A8A] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 5.25V15.75M2.25 13.5C2.11739 13.5 1.99021 13.4473 1.89645 13.3536C1.80268 13.2598 1.75 13.1326 1.75 13V3C1.75 2.86739 1.80268 2.74021 1.89645 2.64645C1.99021 2.55268 2.11739 2.5 2.25 2.5H6C6.79565 2.5 7.55871 2.81607 8.12132 3.37868C8.68393 3.94129 9 4.70435 9 5.5C9 4.70435 9.31607 3.94129 9.87868 3.37868C10.4413 2.81607 11.2044 2.5 12 2.5H15.75C15.8826 2.5 16.0098 2.55268 16.1036 2.64645C16.1973 2.74021 16.25 2.86739 16.25 3V13C16.25 13.1326 16.1973 13.2598 16.1036 13.3536C16.0098 13.4473 15.8826 13.5 15.75 13.5H11.25C10.6533 13.5 10.081 13.7371 9.65901 14.159C9.23705 14.581 9 15.1533 9 15.75C9 15.1533 8.76295 14.581 8.34099 14.159C7.91903 13.7371 7.34674 13.5 6.75 13.5H2.25Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Education Hub
                </Link>
                <Link
                  to="/learning"
                  className="flex items-center gap-3 text-sm text-[#4A5565] hover:text-[#1E3A8A] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M4.5 16.5C4.10218 16.5 3.72064 16.342 3.43934 16.0607C3.15804 15.7794 3 15.3978 3 15V3C3 2.60218 3.15804 2.22064 3.43934 1.93934C3.72064 1.65804 4.10218 1.5 4.5 1.5H10.5L15 6V15C15 15.3978 14.842 15.7794 14.5607 16.0607C14.2794 16.342 13.8978 16.5 13.5 16.5H4.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  My Complaints
                </Link>
                <Link
                  to="/learning"
                  className="flex items-center gap-3 text-sm text-[#4A5565] hover:text-[#1E3A8A] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M15 9.75C15 13.5 12.375 15.375 9.255 16.4625C9.09165 16.5121 8.91637 16.5092 8.755 16.4542C6.375 15.375 3 13.5 3 9.75V3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3C5.25 3 7.125 2.4 8.43 1.71C8.52639 1.64966 8.6378 1.61719 8.75151 1.61719C8.86522 1.61719 8.97663 1.64966 9.073 1.71C10.3825 2.4075 12.25 3 13.75 3C13.9489 3 14.1397 3.07902 14.2803 3.21967C14.421 3.36032 14.5 3.55109 14.5 3.75V9.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Anonymous Report
                </Link>
                <Link
                  to="/learning"
                  className="flex items-center gap-3 text-sm text-[#4A5565] hover:text-[#1E3A8A] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M4.5 16.5C4.10218 16.5 3.72064 16.342 3.43934 16.0607C3.15804 15.7794 3 15.3978 3 15V3C3 2.60218 3.15804 2.22064 3.43934 1.93934C3.72064 1.65804 4.10218 1.5 4.5 1.5H10.5L15 6V15C15 15.3978 14.842 15.7794 14.5607 16.0607C14.2794 16.342 13.8978 16.5 13.5 16.5H4.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Documents
                </Link>
                <Link
                  to="/complete-profile"
                  className="flex items-center gap-3 text-sm text-[#4A5565] hover:text-[#1E3A8A] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 9C10.2426 9 11.25 7.99264 11.25 6.75C11.25 5.50736 10.2426 4.5 9 4.5C7.75736 4.5 6.75 5.50736 6.75 6.75C6.75 7.99264 7.75736 9 9 9Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.75 15.75V14.25C3.75 13.6533 3.98705 13.081 4.40901 12.659C4.83097 12.2371 5.40326 12 6 12H12C12.5967 12 13.169 12.2371 13.591 12.659C14.0129 13.081 14.25 13.6533 14.25 14.25V15.75"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Profile Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
