import React, { useState, useEffect } from "react";
// No useRouter or useNavigate here, as Dashboard is assumed to be a display route
// and not directly handling navigation to signup in this specific component.
// Navigation will be handled by a higher-level routing component (e.g., App.jsx).

import { motion } from "framer-motion";

// Your custom components for financial data - IMPORTED AS-IS
import Balance from "./Balance";       // No modification to Balance.jsx
import Expense from "./Expense";       // No modification to Expense.jsx
import Income from "./Income";         // No modification to Income.jsx

// Other common components
import DateComponent from "./date-component";    // Date formatting
import TransactionList from "./transaction-list"; // List of transactions
import BottomNavBar from "./bottom-nav-bar";    // Fixed bottom navigation

// --- INLINE SVG ICON COMPONENTS ---
// These replace lucide-react icons to remove external dependency

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


export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false); // For initial animation

  useEffect(() => {
    // Trigger initial animation on component mount
    setIsLoaded(true);
  }, []);

  // Framer Motion animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col font-sans antialiased text-gray-800">
      <div className="max-w-6xl mx-auto w-full flex-grow px-4 sm:px-6 lg:px-8 py-6 md:py-8">

        {/* Dashboard Header & Balance */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-b-3xl md:rounded-3xl shadow-xl p-6 sm:p-8 mb-8 md:mb-10 mt-0 md:mt-8 overflow-hidden text-white"
        >
          <section className="flex items-center space-x-2 text-blue-100 mb-4">
            <CalendarIcon className="h-5 w-5" />
            <DateComponent />
          </section>

          <div className="mb-6">
            <h1 className="text-xl sm:text-2xl font-semibold text-blue-100 leading-tight mb-2">
              Current Balance
            </h1>
            {/* Display the total balance using your Balance component. */}
            {/* Styling for Balance is applied to a wrapper div here,
                        as Balance.jsx itself is not modified to accept className. */}
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              <Balance />
            </div>
          </div>

          {/* Summary Cards for Total Expense and Total Income */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Total Expense Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="bg-white/15 backdrop-blur-md rounded-2xl p-5 shadow-lg flex flex-col"
            >
              <p className="text-blue-100 text-sm font-medium mb-2">Total Expense</p>
              <div className="flex items-center">
                <div className="p-3 bg-red-500/30 rounded-lg mr-4">
                  <ArrowDownIcon className="h-6 w-6 text-red-200" />
                </div>
                {/* Styling for Expense is applied to a wrapper div here. */}
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  <Expense />
                </div>
              </div>
            </motion.div>

            {/* Total Income Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="bg-white/15 backdrop-blur-md rounded-2xl p-5 shadow-lg flex flex-col"
            >
              <p className="text-blue-100 text-sm font-medium mb-2">Total Income</p>
              <div className="flex items-center">
                <div className="p-3 bg-green-500/30 rounded-lg mr-4">
                  <ArrowUpIcon className="h-6 w-6 text-green-200" />
                </div>
                {/* Styling for Income is applied to a wrapper div here. */}
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  <Income />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Financial Overview Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Financial Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Savings Rate */}
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

            {/* Card 2: Monthly Budget */}
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

            {/* Card 3: Top Category */}
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
        </motion.section>

        {/* Recent Transactions Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
            <button className="text-blue-600 hover:text-blue-800 font-medium px-3 py-2 rounded-md transition-colors duration-200">
              View All
            </button>
          </div>
          <TransactionList />
        </motion.section>
      </div>

      <BottomNavBar />
    </main>
  );
}
