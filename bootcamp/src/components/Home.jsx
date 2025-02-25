import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DateComponent from "./DateComponent";
import { CalendarIcon } from '@heroicons/react/solid';
import BottomNavBar from "./BottomNavBar";
import Expense from "./Expense";
import Income from "./Income";
import TransactionList from "./TransactionList";

function Home() {
  const navigate = useNavigate();
  const isVisibleStored = localStorage.getItem("isButtonVisible");
  const [isVisible, setIsVisible] = useState(isVisibleStored ? JSON.parse(isVisibleStored) : true);
  
  useEffect(() => {
    // If the button is hidden, set it to visible after 10 minutes (600000ms)
    if (!isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem("isButtonVisible", "true");
      }, 600000);
      // Clean up the timeout when the component unmounts
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);
  
  const hideButton = () => {
    setIsVisible(false);
    localStorage.setItem("isButtonVisible", "false");
    navigate('/signup');
  }
  
  return (
    <main className="min-h-screen bg-gray-50 pb-20 md:pb-0">
    
      <div className="bg-blue-700 text-white rounded-b-3xl shadow-lg px-4 py-6 mb-6">
        <div className="container mx-auto">
          {/* Date Section */}
          <div className="flex items-center mb-3">
            <CalendarIcon className="h-5 w-5 mr-2" />
            <DateComponent />
          </div>
          
      
          <h1 className="text-2xl font-bold mb-4">Hello Le Nkap User</h1>
          
          {/* Financial Summary */}
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div className="bg-white/20 rounded-xl p-4">
              <p className="text-sm font-medium mb-1 opacity-90">Expense</p>
              <div className="text-xl font-bold"><Expense /></div>
            </div>
            <div className="bg-white/20 rounded-xl p-4">
              <p className="text-sm font-medium mb-1 opacity-90">Income</p>
              <div className="text-xl font-bold"><Income /></div>
            </div>
          </div>
        </div>
      </div>
      
     
      <div className="container mx-auto px-4">
        <TransactionList />
        
        {/* Get Started Button */}
        {isVisible && (
          <div className="flex justify-center mt-8 mb-16 md:mb-8">
            <button 
              onClick={hideButton}
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Click here to get started!
            </button>
          </div>
        )}
      </div>
      
      {/* Bottom Navigation (mobile only) */}
      <div className="md:hidden">
        <BottomNavBar />
      </div>
    </main>
  );
}

export default Home;
