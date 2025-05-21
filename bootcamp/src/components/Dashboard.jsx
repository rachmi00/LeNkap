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
    <main className="min-h-screen bg-gray-100 flex flex-col font-sans antialiased text-gray-800">
      <div className="max-w-lg mx-auto w-full flex-grow px-4 py-6">
        
        {/* Header Section - With gradient background inspired by the screenshots */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-lg p-6 mb-6 text-white">
          <section className="flex items-center space-x-2 text-white text-sm mb-2 opacity-90">
            <CalendarIcon className="h-4 w-4" />
            <DateComponent />
          </section>

          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold leading-tight">
              Hello 
            </h1>

            {isVisible && (
              <button
                className="bg-white text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 font-semibold py-2 px-4 rounded-full transition duration-200 ease-in-out shadow-md text-sm"
                onClick={hideButton}
              >
                Get Started
              </button>
            )}
          </div>
        </div>

        {/* Summary Cards - Horizontal scrollable layout with colorful borders */}
        <div className="flex space-x-4 mb-6 overflow-x-auto py-2">
          <div className="bg-white rounded-2xl p-5 shadow-md min-w-[160px] flex-1 border-l-4 border-red-500">
            <p className="text-xs font-medium text-gray-500 mb-2">Total Expense</p>
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-full mr-3">
                <ChartBarIcon className="h-4 w-4 text-red-500" />
              </div>
              <Expense className="text-xl font-bold text-gray-900" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-md min-w-[160px] flex-1 border-l-4 border-green-500">
            <p className="text-xs font-medium text-gray-500 mb-2">Total Income</p>
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-full mr-3">
                <ChartBarIcon className="h-4 w-4 text-green-500" />
              </div>
              <Income className="text-xl font-bold text-gray-900" />
            </div>
          </div>
        </div>

        {/* Analytics Snapshot - New feature inspired by the screenshots */}
        <div className="bg-white rounded-3xl shadow-md p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Monthly Overview</h2>
            <button className="text-blue-500 text-sm font-medium">See All</button>
          </div>
          
          {/* Simple Chart Placeholder */}
          <div className="h-32 bg-gray-50 rounded-xl flex items-end justify-between p-2 mb-2">
            <div className="w-8 bg-blue-500 rounded-t-md h-16"></div>
            <div className="w-8 bg-blue-500 rounded-t-md h-24"></div>
            <div className="w-8 bg-blue-500 rounded-t-md h-12"></div>
            <div className="w-8 bg-blue-500 rounded-t-md h-20"></div>
            <div className="w-8 bg-purple-500 rounded-t-md h-8"></div>
            <div className="w-8 bg-purple-500 rounded-t-md h-16"></div>
            <div className="w-8 bg-purple-500 rounded-t-md h-12"></div>
          </div>
          
          {/* Legend */}
          <div className="flex justify-center space-x-6 text-xs text-gray-600">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
              <span>Income</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
              <span>Expenses</span>
            </div>
          </div>
        </div>

        {/* Transactions Section */}
        <section className="bg-white rounded-3xl shadow-md p-5 mb-20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Recent Transactions</h2>
            <button className="text-blue-500 text-sm font-medium">View All</button>
          </div>
          <TransactionList />
        </section>
      </div>

      <BottomNavBar />
    </main>
  );
}

export default Home;
