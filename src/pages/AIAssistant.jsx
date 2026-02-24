import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getInitials } from "../utils/logic-helpers";
import { useAppContext } from "../context/AppContext";
import { askFairSayAI } from "../services/fs-services";
import Logo from "../components/Logo";

export default function AIAssistant() {
  const {user, logout} = useAppContext();
  const navigate= useNavigate();
  const messagesEndRef = useRef();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Welcome to FairSay",
      desc: "Complete your profile to get the most out of our AI Assistant.",
      time: "Just now",
      unread: true,
    }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
    setShowNotifications(false);
  };
  const [messages, setMessages] = useState([
    {
      type: "assistant",
      text: "Hello! I'm your AI Rights Assistant. I can help you understand your workplace rights and answer questions about labor laws, discrimination, harassment, and more. How can I assist you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "What are my overtime rights?",
    "How do I report harassment?",
    "Can my employer fire me for complaining?",
    "What is constructive dismissal?",
  ];

  const faqs = [
    {
      question: "What is the federal minimum wage?",
      answer: "The federal minimum wage is $7.25 per hour, though many states have higher minimum wages that take precedence.",
    },
    {
      question: "Am I entitled to overtime pay?",
      answer: "Non-exempt employees must receive overtime pay at 1.5x their regular rate for hours worked over 40 in a workweek.",
    },
    {
      question: "What is workplace discrimination?",
      answer: "Workplace discrimination occurs when an employee is treated unfavorably because of race, color, religion, sex, national origin, age (40+), disability, or genetic information.",
    },
    {
      question: "How do I file a complaint?",
      answer: "You can file a complaint through our platform by clicking 'File Complaint' on your dashboard after completing the educational modules.",
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]); 

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { type: "user", text }]);
    setInputValue("");
    setIsTyping(true);

   try {
      //To call the backend AI service
      const aiResponse = await askFairSayAI(text);

      setMessages((prev) => [
        ...prev,
        {
          type: "assistant",
          text: aiResponse.answer,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "assistant",
          text: "I'm having trouble connecting to my knowledge base right now. Please try asking again in a moment.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickQuestion = (question) => {
    handleSendMessage(question);
  };

  //To handle user logout, clearing session and redirecting to sign-in page.
  const handleLogout = () => {
    logout();
    navigate('/sign-in');
  };


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

 <div className="flex items-center gap-4">
                  {/* Notification */}
                  <button onClick={() => setShowNotifications(!showNotifications)} className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                        stroke="#4A5565"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                        stroke="#4A5565"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                
      {unreadCount > 0 && (
        <span className="absolute top-1.5 right-1.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
        </span>
      )}
                  </button>

                                   {showNotifications && (
        <div className="
          /* Position & Vertical Gap */
          absolute top-[75px] z-[100] right-[10px] md:right-20  max-w-[60vw] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden 
        animate-in fade-in zoom-in-95 slide-in-from-top-4 duration-200 ease-out
        ">
          {/* Header Section */}
          <div className="p-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/50 gap-5">
            <h4 className="font-bold text-gray-800 font-poppins">Notifications</h4>
            <button 
              onClick={markAllAsRead} 
              className="text-xs text-[#1E3A8A] font-bold hover:text-[#0F766E] transition-colors"
            >
              Mark all as read
            </button>
          </div>
      
          {/* List Section */}
          <div className="max-h-[400px] overflow-y-auto scrollbar-hide">
            {notifications.length > 0 ? (
              notifications.map(n => (
                <div 
                  key={n.id} 
                  className={`
                    p-4 border-b border-gray-50 flex gap-3 transition-all cursor-pointer
                    hover:bg-gray-50 active:bg-gray-100
                    ${n.unread ? 'bg-blue-50/30' : 'bg-white'}
                  `}
                >
                  {/* Status Indicator */}
                  <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${n.unread ? 'bg-[#1E3A8A]' : 'bg-transparent'}`} />
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h5 className={`text-sm font-inter ${n.unread ? 'font-bold text-gray-900' : 'font-medium text-gray-600'}`}>
                        {n.title}
                      </h5>
                      <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">{n.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed font-inter">
                      {n.desc}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center text-gray-400 text-sm font-inter">
                No notifications yet
              </div>
                )}
          </div>
          
      
        </div>
      )}



            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-semibold">{user ? getInitials(user): "U"}</div>
              <div className="hidden md:block">
                <div className="font-semibold text-sm text-[#333]">{user?.firstName}{user?.lastName}</div>
                <div className="text-xs text-[#9CA3AF]">{user?.job_title || 'Add Job Title'}</div>
              </div>
            </div>

            <button onClick={handleLogout} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.3333 14.1667L17.5 10L13.3333 5.83334" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 10H7.5" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        </div>
      </header>

      <main className="max-w-[95%] mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] rounded-2xl p-6 lg:p-8 mb-6 text-white">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1">AI Rights Assistant</h1>
              <p className="text-white/90 text-sm">Get instant answers about your workplace rights</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Area */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col" style={{ height: "calc(100vh - 280px)", minHeight: "500px" }}>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-5 py-4 ${
                      msg.type === "user"
                        ? "bg-[#1E3A8A] text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.type === "assistant" && (
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        <span className="text-xs font-semibold text-gray-600">AI Assistant</span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl px-5 py-4">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-6 pb-3.6">
                <p className="text-xs font-semibold text-gray-500 mb-3">QUICK QUESTIONS</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {quickQuestions.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 text-[#1E3A8A] text-sm rounded-xl border border-blue-200 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="border-t border-gray-100 p-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                  placeholder="Ask about your workplace rights..."
                  className="flex-1 px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-sm"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="px-6 py-3 bg-[#1E3A8A] text-white rounded-xl hover:bg-[#1a3278] transition-colors flex items-center gap-2 font-semibold text-sm"
                >
                  Send
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* FAQs Sidebar */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6" style={{ maxHeight: "calc(100vh - 280px)", overflowY: "auto" }}>
            <h2 className="font-bold text-xl text-gray-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group">
                  <summary className="cursor-pointer list-none">
                    <div className="flex items-start justify-between gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <span className="font-semibold text-sm text-gray-900 flex-1">{faq.question}</span>
                      <svg 
                        className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-4 pt-3 pb-1.8 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <div>
                    <p className="text-xs font-semibold text-[#1E3A8A] mb-1">Need More Help?</p>
                    <p className="text-xs text-gray-600 mb-3">If you need detailed assistance, consider filing a formal complaint.</p>
                    <Link to="/file-complaint" className="text-xs font-semibold text-[#1E3A8A] hover:underline">
                      File a Complaint →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
