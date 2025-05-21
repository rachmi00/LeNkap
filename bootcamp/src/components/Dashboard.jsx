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
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-b-2xl md:rounded-2xl shadow-lg p-6 mb-6 mt-0 md:mt-6">
          <section className="flex items-center space-x-2 text-blue-100">
            <CalendarIcon className="h-5 w-5" />
            <DateComponent />
          </section>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-3">
            <h1 className="text-2xl font-bold text-white">Hello, Le Nkap User</h1>
            
            {isVisible && (
              <button
                className="mt-4 md:mt-0 bg-white text-blue-700 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition duration-200 shadow-md flex items-center justify-center"
                onClick={hideButton}
              >
                Get Started
              </button>
            )}
          </div>
          
          {/* Summary Cards */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <p className="text-blue-100 text-sm font-medium mb-1">Total Expense</p>
              <div className="flex items-center">
                <div className="p-2 bg-red-500/20 rounded-lg mr-3">
                  <ChartBarIcon className="h-5 w-5 text-red-200" />
                </div>
                <Expense className="text-xl md:text-2xl font-bold text-white" />
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <p className="text-blue-100 text-sm font-medium mb-1">Total Income</p>
              <div className="flex items-center">
                <div className="p-2 bg-green-500/20 rounded-lg mr-3">
                  <ChartBarIcon className="h-5 w-5 text-green-200" />
                </div>
                <Income className="text-xl md:text-2xl font-bold text-white" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Transactions Section */}
        <section className="bg-white rounded-xl shadow-md mb-20">
          <TransactionList />
        </section>
      </div>
      
      <BottomNavBar />
    </main>
  );
}

export default Home;
