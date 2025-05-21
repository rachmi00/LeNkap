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
      <div className="max-w-7xl mx-auto w-full flex-grow px-4 sm:px-6 lg:px-8 py-6 md:py-8">

        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl md:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 mb-8 md:mb-12 overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-[1.005]">
          <div className="absolute inset-0 bg-pattern-light opacity-5 pointer-events-none z-0"></div>

          <section className="relative z-10 flex items-center space-x-2 text-blue-100 font-medium text-sm mb-4">
            <CalendarIcon className="h-5 w-5" />
            <DateComponent />
          </section>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 md:mb-0">
              Hello, Le Nkap User
            </h1>

            {isVisible && (
              <button
                className="w-full md:w-auto bg-white text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-md text-lg"
                onClick={hideButton}
              >
                Get Started
              </button>
            )}
          </div>

          {/* Summary Cards */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-5 sm:p-6 shadow-md border border-white/30 transform transition-all duration-300 ease-in-out hover:scale-[1.02]">
              <p className="text-blue-100 text-sm font-medium mb-3">Total Expense</p>
              <div className="flex items-center">
                <div className="p-3 bg-red-400/40 rounded-full mr-4 flex-shrink-0">
                  <ChartBarIcon className="h-6 w-6 text-red-100" />
                </div>
                <Expense className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-none" />
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-5 sm:p-6 shadow-md border border-white/30 transform transition-all duration-300 ease-in-out hover:scale-[1.02]">
              <p className="text-blue-100 text-sm font-medium mb-3">Total Income</p>
              <div className="flex items-center">
                <div className="p-3 bg-green-400/40 rounded-full mr-4 flex-shrink-0">
                  <ChartBarIcon className="h-6 w-6 text-green-100" />
                </div>
                <Income className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Transactions Section */}
        <section className="bg-white rounded-3xl shadow-xl p-5 sm:p-8 md:p-10 mb-8 transform transition-all duration-300 ease-in-out hover:scale-[1.005]">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Recent Transactions</h2>
          <TransactionList />
        </section>
      </div>

      <BottomNavBar />
    </main>
  );
}

export default Home;
