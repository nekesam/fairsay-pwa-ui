import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { wageHourLessons, wageHourQuiz } from "../data/courses";

export default function Quiz() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [quizState, setQuizState] = useState("taking");

  const courseId_ = courseId || "wage-hour";

  const completedCount = wageHourLessons.filter((l) => l.completed).length;
  const progress = 100;

  const handleSelect = (questionId, optionIdx) => {
    if (quizState === "submitted") return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < wageHourQuiz.length) return;
    setQuizState("submitted");
  };

  const handleTryAgain = () => {
    setAnswers({});
    setQuizState("taking");
  };

  const score = quizState === "submitted"
    ? wageHourQuiz.filter((q) => answers[q.id] === q.correctIndex).length
    : 0;
  const scorePct = quizState === "submitted"
    ? Math.round((score / wageHourQuiz.length) * 100)
    : 0;
  const passed = scorePct >= 80;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-[95%] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <Link to="/learning" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Education Hub
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {/* Home */}
            <Link to="/dashboard" className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Go to Dashboard">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>

            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-semibold">JD</div>
              <div className="hidden md:block">
                <div className="font-semibold text-sm text-[#333]">John Divine</div>
                <div className="text-xs text-[#9CA3AF]">Software Engineer</div>
              </div>
            </div>
            <Link to="/sign-in" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.3333 14.1667L17.5 10L13.3333 5.83334" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 10H7.5" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-[95%] mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-56 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sticky top-24">
              <h2 className="font-bold text-gray-900 text-base mb-4">Wage & Hour Rights</h2>
              <nav className="space-y-2">
                {wageHourLessons.map((l) => (
                  <Link
                    key={l.id}
                    to={`/learning/lesson/${courseId_}/${l.id}`}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-green-50 text-gray-700 transition-all text-sm"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium leading-snug">{l.title}</div>
                      <div className="flex items-center gap-1 mt-0.5 text-xs text-gray-400">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {l.duration}
                      </div>
                    </div>
                  </Link>
                ))}

                {/* Final Quiz - active */}
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-red-600 text-white text-sm">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium leading-snug">Final Quiz</div>
                    <div className="flex items-center gap-1 mt-0.5 text-xs text-red-200">
                      4 questions
                    </div>
                  </div>
                </div>
              </nav>

              {/* Progress */}
              <div className="mt-5 pt-4 border-t border-gray-100">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-500 font-medium">Progress</span>
                  <span className="font-bold text-[#1E3A8A]">{progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="h-2 rounded-full bg-[#1E3A8A] w-full" />
                </div>
              </div>
            </div>
          </aside>

          {/* Quiz Content */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
              {/* Quiz Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Final Quiz</h1>
                  <p className="text-gray-500 text-sm">Test your knowledge - 80% required to pass</p>
                </div>
              </div>

              {/* Result Banner (after submit) */}
              {quizState === "submitted" && (
                <div className={`rounded-xl p-4 mb-6 ${passed ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
                  <div className="flex items-center gap-2 mb-1">
                    {passed ? (
                      <>
                        <span className="text-green-600 text-lg">✓</span>
                        <span className="font-bold text-green-700 text-base">Congratulations! You Passed!</span>
                      </>
                    ) : (
                      <>
                        <span className="text-red-600 text-lg">✗</span>
                        <span className="font-bold text-red-700 text-base">Not Quite There</span>
                      </>
                    )}
                  </div>
                  <p className={`text-sm ${passed ? "text-green-600" : "text-red-600"}`}>
                    You scored {score} out of {wageHourQuiz.length} ({scorePct}%)
                  </p>
                  {!passed && (
                    <p className="text-sm text-red-500 mt-0.5">Review the material and try again.</p>
                  )}
                </div>
              )}

              {/* Questions */}
              <div className="space-y-6">
                {wageHourQuiz.map((q) => {
                  const selected = answers[q.id];
                  const isSubmitted = quizState === "submitted";

                  return (
                    <div key={q.id} className="border border-gray-100 rounded-xl p-5">
                      <p className="font-semibold text-gray-900 mb-4">{q.question}</p>
                      <div className="space-y-2.5">
                        {q.options.map((option, idx) => {
                          let optionStyle = "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50";
                          let rightIcon = null;

                          if (isSubmitted) {
                            if (idx === q.correctIndex) {
                              optionStyle = "border-green-400 bg-green-50 text-gray-800";
                              rightIcon = (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                  <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                              );
                            } else if (idx === selected && selected !== q.correctIndex) {
                              optionStyle = "border-red-400 bg-red-50 text-gray-800";
                            }
                          } else if (selected === idx) {
                            optionStyle = "border-[#1E3A8A] bg-blue-50 text-gray-800";
                          }

                          return (
                            <button
                              key={idx}
                              onClick={() => handleSelect(q.id, idx)}
                              className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm font-medium flex items-center justify-between gap-3 ${optionStyle} ${quizState === "submitted" ? "cursor-default" : "cursor-pointer"}`}
                            >
                              <span>{option}</span>
                              {rightIcon}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                {quizState === "taking" ? (
                  <>
                    <Link
                      to={`/learning/lesson/${courseId_}/${wageHourLessons.length}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-all"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                      </svg>
                      Previous
                    </Link>
                    <button
                      onClick={handleSubmit}
                      disabled={Object.keys(answers).length < wageHourQuiz.length}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1E3A8A] text-white font-semibold text-sm hover:bg-[#1a3278] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Submit Quiz
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to={`/learning/lesson/${courseId_}/1`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-all"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                      </svg>
                      Back to Lessons
                    </Link>
                    {!passed ? (
                      <button
                        onClick={handleTryAgain}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-all"
                      >
                        Try Again
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        to="/learning"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0F766E] text-white font-semibold text-sm hover:bg-[#0d6460] transition-all"
                      >
                        Back to Education Hub
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
