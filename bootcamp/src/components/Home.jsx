import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DateComponent from "./DateComponent";
import { CalendarIcon } from '@heroicons/react/solid';
import BottomNavBar from "./BottomNavBar";
import Expense from "./Expense";
import Income from "./Income";
import TransactionList from "./TransactionList";
import axios from "axios";

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
    <main className="min-h-screen bg-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-700 rounded-lg p-6 mb-6 shadow-lg">
          <section className="flex items-center space-x-2">
            <CalendarIcon className="h-6 w-6 text-white" />
            <DateComponent className="text-white" />
          </section>
          <h1 className="text-2xl font-bold text-white mt-2">Hello Le Nkap User</h1>
          <section className="mt-4">
            <p className="text-white font-medium">Expense: <Expense /></p>
            <p className="text-white font-medium">Income: <Income /></p>
          </section>
        </div>

        <section className="bg-white rounded-lg p-6 shadow-lg">
          <TransactionList />
          {isVisible && (
            <div className="flex justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                onClick={hideButton}
              >
                Click here to get started!
              </button>
            </div>
          )}
        </section>

        <BottomNavBar />
      </div>
    </main>
  );
}

export default Home;
