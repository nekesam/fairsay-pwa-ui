import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { APP_NAME } from "../utils/constants";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/check-email");
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center px-4 py-7"
      style={{
        background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
      }}
    >
      <div className="w-full max-w-[504px] flex flex-col items-center gap-7">
        {/* Logo */}
         <div className="flex items-center gap-2">
                    <div className="w-10 h-10"><Logo /></div>
                    <span className="text-[36px] font-bold font-poppins text-[#1e3a8a]">{APP_NAME}</span>
                  </div>
        {/* Main Card */}
        <div className="w-full rounded-2xl bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] p-7">
          <div className="mb-7 text-center">
            <h1 className="font-poppins font-bold text-[27px] leading-[32px] text-[#333] mb-2">
              Forgot Password?
            </h1>
            <p className="text-[#4A5565] text-sm">
              No worries! Enter your email and we'll send you reset instructions.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Address */}
            <div>
              <label className="block text-[#333] text-sm font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
                >
                  <path
                    d="M3 3H17C18.1 3 19 3.9 19 5V15C19 16.1 18.1 17 17 17H3C1.9 17 1 16.1 1 15V5C1 3.9 1.9 3 3 3Z"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 5L10 11L1 5"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-11 pr-4 py-[11px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-[#333] placeholder:text-[#9CA3AF]"
                  required
                />
              </div>
            </div>

            {/* Send Reset Link Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg"
              style={{
                background: "linear-gradient(90deg, #1E3A8A 0%, #0F766E 100%)",
              }}
            >
              Send reset link
            </button>

            {/* Back to Sign In */}
            <div className="text-center">
              <Link
                to="/sign-in"
                className="text-xs text-[#1E3A8A] hover:text-[#0F766E] font-medium inline-flex items-center gap-1.5"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6663 8H3.33301"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12.6673L3.33333 8.00065L8 3.33398"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to Sign In
              </Link>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E5E7EB]"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-4 bg-white text-[#9CA3AF]">OR</span>
              </div>
            </div>

            {/* Help Text */}
            <div className="rounded border-2 border-[#F0B100] bg-[#FEFCE8] p-3.5">
              <p className="text-xs leading-5 text-[#92400E]">
                If you don't have access to your email, please contact your organization's
                administrator for assistance.
              </p>
            </div>

            {/* Sign Up Link */}
            <div className="text-center pt-2">
              <p className="text-xs text-[#4A5565]">
                Don't have an account?{" "}
                <Link
                  to="/sign-up"
                  className="text-[#1E3A8A] font-semibold hover:text-[#0F766E]"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
