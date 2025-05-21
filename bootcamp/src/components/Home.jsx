import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Correct import for react-router-dom navigation


import DateComponent from "./DateComponent"; // Corrected casing based on file name DateComponent.jsx
import BottomNavBar from "./BottomNavBar";   
import Expense from "./Expense";             
import Income from "./Income";               
import TransactionList from "./TransactionList"; 

// --- INLINE SVG ICON COMPONENTS (Copied from Dashboard.jsx) ---


const CalendarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const BarChart3Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 20V10"></path>
    <path d="M18 20V4"></path>
    <path d="M6 20v-4"></path>
  </svg>
);

const TrendingUpIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
    <polyline points="16 7 22 7 22 13"></polyline>
  </svg>
);

const ArrowUpIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

const ArrowDownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);

// --- END INLINE SVG ICON COMPONENTS ---

export default function Home() {
  const navigate = useNavigate(); // Hook from react-router-dom for navigation

  // State to manage the visibility of the "Get Started" button for new users
  // Access localStorage only on the client side to prevent SSR issues with Vite
  const isVisibleStored = typeof window !== "undefined" ? localStorage.getItem("isButtonVisible") : null;
  const [isVisible, setIsVisible] = useState(isVisibleStored ? JSON.parse(isVisibleStored) : true);

  // Removed: State to control the initial fade-in animation of the main content (isLoaded)
  // Removed: useEffect for isLoaded

  useEffect(() => {
    // If the button is currently hidden, set a timeout to make it visible again after 10 minutes
    if (!isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem("isButtonVisible", "true"); // Persist visibility state
      }, 600000); // 10 minutes (600,000 milliseconds)
      return () => clearTimeout(timeout); // Cleanup the timeout if the component unmounts or isVisible changes
    }
  }, [isVisible]); // Re-run effect if isVisible changes

  // Function to hide the "Get Started" button and navigate to the signup page
  const hideButton = () => {
    setIsVisible(false);
    localStorage.setItem("isButtonVisible", "false"); // Persist hidden state
    navigate("/signup"); // Navigate using react-router-dom's navigate function
  };

  // Removed: Framer Motion animation variants (fadeIn)

  return (
    // Main container for the entire page, setting min-height, background gradient, and font styles
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col font-sans antialiased text-gray-800">
      {/* Content wrapper with max-width, auto margins for centering, and responsive padding */}
      <div className="max-w-6xl mx-auto w-full flex-grow px-4 sm:px-6 lg:px-8 py-6 md:py-8">

        {/* Header Section - Replaced motion.div with div */}
        <div // Removed: initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeIn}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-b-3xl md:rounded-3xl shadow-xl p-6 sm:p-8 mb-8 md:mb-10 mt-0 md:mt-8 overflow-hidden"
        >
          {/* Date Component Section */}
          <section className="flex items-center space-x-2 text-blue-100 mb-4">
            <CalendarIcon className="h-5 w-5" />
            <DateComponent />
          </section>

          {/* Welcome Message and Get Started Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            {/* Welcome Title - Replaced motion.h1 with h1 */}
            <h1 // Removed: initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4 md:mb-0"
            >
              Welcome to Le Nkap
              {/* Subtitle for the finance tracker */}
              <span className="block text-lg sm:text-xl font-normal text-blue-100 mt-1 opacity-90">
                Your personal finance tracker
              </span>
            </h1>

            {/* Get Started Button - Conditionally rendered and replaced motion.div with div */}
            {isVisible && (
              <div // Removed: initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.3 }}
              >
                {/* Custom styled button (no shadcn) */}
                <button
                  className="w-full md:w-auto bg-white text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md flex items-center justify-center text-lg"
                  onClick={hideButton}
                >
                  Get Started
                </button>
              </div>
            )}
          </div>

          {/* Summary Cards for Total Expense and Total Income */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Total Expense Card - Replaced motion.div with div */}
            <div // Removed: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.4 }}
              className="bg-white/15 backdrop-blur-md rounded-2xl p-5 shadow-lg flex flex-col"
            >
              <p className="text-blue-100 text-sm font-medium mb-2">Total Expense</p>
              <div className="flex items-center">
                <div className="p-3 bg-red-500/30 rounded-lg mr-4">
                  <ArrowDownIcon className="h-6 w-6 text-red-200" /> {/* Down arrow for expense */}
                </div>
                {/* Note: Expense component expects 'className' but is not modified. */}
                {/* If you want styling on this number, wrap it in a div or modify Expense.jsx */}
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    <Expense />
                </span>
              </div>
            </div>

            {/* Total Income Card - Replaced motion.div with div */}
            <div // Removed: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.4 }}
              className="bg-white/15 backdrop-blur-md rounded-2xl p-5 shadow-lg flex flex-col"
            >
              <p className="text-blue-100 text-sm font-medium mb-2">Total Income</p>
              <div className="flex items-center">
                <div className="p-3 bg-green-500/30 rounded-lg mr-4">
                  <ArrowUpIcon className="h-6 w-6 text-green-200" /> {/* Up arrow for income */}
                </div>
                {/* Note: Income component expects 'className' but is not modified. */}
                {/* If you want styling on this number, wrap it in a div or modify Income.jsx */}
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    <Income />
                </span>
              </div>
            </div>
          </div>
        </div> {/* Correctly closing the main Header Section div */}

        {/* Financial Overview Section - Replaced motion.section with section */}
        <section // Removed: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Financial Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Savings Rate - Custom styled div (no shadcn Card) */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">Savings Rate</h3>
                <div className="p-2 bg-blue-100 rounded-full">
                  <TrendingUpIcon className="h-4 w-4 text-blue-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">24%</p>
              <p className="text-sm text-green-600 flex items-center mt-2">
                <ArrowUpIcon className="h-3 w-3 mr-1" /> 3% from last month
              </p>
            </div>

            {/* Card 2: Monthly Budget - Custom styled div (no shadcn Card) */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">Monthly Budget</h3>
                <div className="p-2 bg-purple-100 rounded-full">
                  <BarChart3Icon className="h-4 w-4 text-purple-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">75% Used</p>
              <p className="text-sm text-gray-600 mt-2">5 days remaining</p>
            </div>

            {/* Card 3: Top Category - Custom styled div (no shadcn Card) */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">Top Category</h3>
                <div className="p-2 bg-amber-100 rounded-full">
                  <BarChart3Icon className="h-4 w-4 text-amber-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">Groceries</p>
              <p className="text-sm text-gray-600 mt-2">32% of total expenses</p>
            </div>
          </div>
        </section>

        {/* Transactions Section - Replaced motion.section with section */}
        <section // Removed: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.4 }}
          className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
            {/* Custom styled button (no shadcn) */}
            <button className="text-blue-600 hover:text-blue-800 font-medium px-3 py-2 rounded-md transition-colors duration-200">
              View All
            </button>
          </div>
          <TransactionList />
        </section>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </main>
  );
}
