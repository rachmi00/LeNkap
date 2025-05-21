import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DateComponent from "./DateComponent";
import { CalendarIcon, ChartBarIcon } from '@heroicons/react/solid';
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
      }, 600000); // 10 minutes
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  const hideButton = () => {
    setIsVisible(false);
    localStorage.setItem("isButtonVisible", "false");
    navigate('/signup');
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col"> {/* Changed bg-gray-50 to bg-gray-100 for a slightly softer background */}
      <div className="max-w-6xl mx-auto w-full flex-grow px-4 sm:px-6 lg:px-8 pt-4 pb-20 md:pb-8"> {/* Added padding for different screen sizes, increased max-width */}

        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-b-3xl md:rounded-3xl shadow-xl p-6 sm:p-8 mb-8 md:mb-10 mt-0 md:mt-8"> {/* Larger rounding, increased padding, stronger shadow, more margin */}
          <section className="flex items-center space-x-2 text-blue-100 mb-4"> {/* Added bottom margin */}
            <CalendarIcon className="h-5 w-5" />
            <DateComponent />
          </section>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6"> {/* Added bottom margin */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4 md:mb-0"> {/* Larger, bolder text, tighter leading */}
              Hello, Le Nkap User
            </h1>

            {isVisible && (
              <button
                className="w-full md:w-auto bg-white text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md flex items-center justify-center text-lg"
                onClick={hideButton}
              >
                Get Started
              </button>
            )}
          </div>

          {/* Summary Cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5"> {/* Adjusted gap, responsive grid */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 shadow-lg flex flex-col"> {/* Increased opacity, blur, padding, rounding, stronger shadow */}
              <p className="text-blue-100 text-sm font-medium mb-2">Total Expense</p>
              <div className="flex items-center">
                <div className="p-3 bg-red-500/30 rounded-lg mr-4"> {/* Larger padding, more opacity, more margin */}
                  <ChartBarIcon className="h-6 w-6 text-red-200" /> {/* Larger icon */}
                </div>
                <Expense className="text-2xl sm:text-3xl font-bold text-white tracking-tight" /> {/* Larger text, tighter tracking */}
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 shadow-lg flex flex-col"> {/* Increased opacity, blur, padding, rounding, stronger shadow */}
              <p className="text-blue-100 text-sm font-medium mb-2">Total Income</p>
              <div className="flex items-center">
                <div className="p-3 bg-green-500/30 rounded-lg mr-4"> {/* Larger padding, more opacity, more margin */}
                  <ChartBarIcon className="h-6 w-6 text-green-200" /> {/* Larger icon */}
                </div>
                <Income className="text-2xl sm:text-3xl font-bold text-white tracking-tight" /> {/* Larger text, tighter tracking */}
              </div>
            </div>
          </div>
        </div>

        {/* Transactions Section */}
        <section className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 mb-8"> {/* Larger rounding, stronger shadow, more padding */}
          <TransactionList />
        </section>
      </div>

      <BottomNavBar />
    </main>
  );
}

export default Home;
