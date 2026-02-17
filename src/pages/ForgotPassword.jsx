import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Send reset link to:', email);
    setSuccess(true);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center px-4 py-7"
      style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
      }}
    >
      <div className="w-full max-w-[504px] flex flex-col items-center gap-7">
        {/* Logo */}
        <Logo />

        {/* Main Card */}
        <div className="w-full rounded-2xl bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] p-7">
          {!success ? (
            <>
              <div className="mb-7 text-center">
                <h1 className="font-poppins font-bold text-[27px] leading-[32px] text-[#333] mb-2">
                  Forgot Password?
                </h1>
                <p className="text-[#4A5565] text-sm">
                  No worries! Enter your email and we'll send you reset instructions
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-[18px]">
                {/* Email Address */}
                <div>
                  <label className="block text-[#333] text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
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
                      placeholder="you@example.com"
                      className="w-full pl-11 pr-4 py-[11px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-[#333] placeholder:text-[#9CA3AF]"
                      required
                    />
                  </div>
                </div>

                {/* Send Reset Link Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-[10px] font-semibold text-base text-white mt-6"
                  style={{
                    background: 'linear-gradient(180deg, #1E3A8A 0%, #0F766E 100%)',
                  }}
                >
                  Send Reset Link
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.16699 10H15.8337"
                      stroke="white"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 4.16602L15.8333 9.99935L10 15.8327"
                      stroke="white"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Back to Sign In */}
                <div className="text-center pt-4">
                  <Link
                    to="/sign-in"
                    className="text-sm text-[#4A5565] hover:text-[#1E3A8A] transition-colors inline-flex items-center gap-1"
                  >
                    <svg
                      width="16"
                      height="16"
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
              </form>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center space-y-5">
                {/* Success Icon */}
                <div className="flex justify-center">
                  <div className="w-18 h-18 rounded-full bg-[#0F766E] flex items-center justify-center">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M43.6022 20.001C44.5156 24.4836 43.8646 29.1438 41.7579 33.2045C39.6512 37.2653 36.216 40.4811 32.0252 42.3156C27.8345 44.1501 23.1415 44.4925 18.7288 43.2857C14.3161 42.0789 10.4506 39.3958 7.77675 35.6838C5.10292 31.9718 3.78244 27.4554 4.03553 22.8877C4.28861 18.32 6.09996 13.9771 9.1675 10.5833C12.235 7.18946 16.3734 4.94982 20.8923 4.23786C25.4113 3.52591 30.0378 4.38468 34.0002 6.67096"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 22L24 28L44 8"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <h1 className="font-poppins font-bold text-[27px] leading-[32px] text-[#333] mb-2">
                    Check Your Email
                  </h1>
                  <p className="text-[#4A5565] text-sm leading-7">
                    We've sent password reset instructions to
                    <br />
                    <span className="font-semibold text-[#333]">{email}</span>
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-[#4A5565]">
                    Didn't receive the email?{' '}
                    <button
                      onClick={() => setSuccess(false)}
                      className="font-semibold text-[#1E3A8A] underline hover:text-[#0F766E]"
                    >
                      Try again
                    </button>
                  </p>

                  <Link
                    to="/sign-in"
                    className="block w-full py-3.5 rounded-[10px] border-2 border-[#1E3A8A] font-semibold text-base text-[#1E3A8A] hover:bg-[#EFF6FF] transition-colors"
                  >
                    Back to Sign In
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Back to Home */}
        <Link
          to="/"
          className="text-sm text-[#4A5565] hover:text-[#1E3A8A] transition-colors inline-flex items-center gap-1"
        >
          <svg
            width="16"
            height="16"
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
          Back to Home
        </Link>
      </div>
    </div>
  );
}
