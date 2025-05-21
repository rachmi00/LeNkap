import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DateComponent from "./DateComponent";
import { CalendarIcon, ChartBarIcon } from '@heroicons/react/solid'; // Using solid icons for clarity
import BottomNavBar from "./BottomNavBar";
import Expense from "./Expense";
import Income from "./Income";
import TransactionList from "./TransactionList";

function Home() {
  const navigate = useNavigate();
  const isVisibleStored = localStorage.getItem("isButtonVisible");
  const [isVisible, setIsVisible] = useState(isVisibleStored ? JSON.parse(isVisibleStored) : true);

  useEffect(() => {
    if (!isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem("isButtonVisible", "true");
      }, 600000);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  const hideButton = () => {
    setIsVisible(false);
    localStorage.setItem("isButtonVisible", "false");
    navigate('/signup');
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-gray-800">
      <div className="max-w-xl mx-auto w-full flex-grow px-4 sm:px-6 py-6 md:py-8"> {/* Reduced max-width for a more mobile-first, app-like feel */}

        {/* Header Section */}
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 mb-8"> {/* Changed to white background, rounded corners, softer shadow */}
          <section className="flex items-center space-x-2 text-gray-500 font-medium text-sm mb-4">
            <CalendarIcon className="h-5 w-5" />
            <DateComponent />
          </section>

          <div className="flex items-center justify-between mb-6"> {/* Simplified flexbox for consistent spacing */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight"> {/* Darker, bolder text for primary emphasis */}
              Hello, Le Nkap User
            </h1>

            {isVisible && (
              <button
                className="bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold py-2 px-5 rounded-full transition duration-200 ease-in-out shadow-md text-base md:text-lg whitespace-nowrap flex-shrink-0" /* Adjusted button style for app-like CTA */
                onClick={hideButton}
              >
                Get Started
              </button>
            )}
          </div>
        </div>

        {/* Summary Cards - Moved outside header for clearer separation, like many app designs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"> {/* Consistent gap */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"> {/* White background, subtle shadow and border for distinct cards */}
            <p className="text-sm font-medium text-gray-600 mb-2">Total Expense</p>
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg mr-3 flex-shrink-0"> {/* Lighter, square background for icons */}
                <ChartBarIcon className="h-5 w-5 text-red-500" /> {/* Red icon for expense */}
              </div>
              <Expense className="text-2xl font-bold text-gray-900" /> {/* Dark, bold text for figures */}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"> {/* White background, subtle shadow and border */}
            <p className="text-sm font-medium text-gray-600 mb-2">Total Income</p>
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg mr-3 flex-shrink-0"> {/* Lighter, square background for icons */}
                <ChartBarIcon className="h-5 w-5 text-green-500" /> {/* Green icon for income */}
              </div>
              <Income className="text-2xl font-bold text-gray-900" /> {/* Dark, bold text for figures */}
            </div>
          </div>
        </div>

        {/* Transactions Section */}
        <section className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 mb-20 md:mb-8"> {/* White background, consistent rounding, strong shadow */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Recent Transactions</h2> {/* Darker, bolder heading */}
          <TransactionList />
        </section>
      </div>

      <BottomNavBar />
    </main>
  );
}

export default Home;
