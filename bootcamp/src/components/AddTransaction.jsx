import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, PlusIcon, CashIcon, TagIcon } from "@heroicons/react/solid";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddTransaction() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const [type, setType] = useState("expense");
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const { addTransaction } = useContext(GlobalContext);

  useEffect(() => {
    // Initialize categories with default values
    setCategories([
      { id: 1, name: "Food" },
      { id: 2, name: "Transportation" },
      { id: 3, name: "Utilities" },
      { id: 4, name: "Clothes" },
      { id: 5, name: "Entertainment" },
      { id: 6, name: "Health" },
    ]);
  }, []);

  const onSubmitCategory = (e) => {
    e.preventDefault();
    
    if (!categoryName.trim()) {
      return;
    }

    const newCategory = {
      id: Math.floor(Math.random() * 100000000),
      name: categoryName.trim(),
    };

    setCategories([...categories, newCategory]);
    setCategoryName("");
  };

  const onSubmitTransaction = async (e) => {
    e.preventDefault();
    
    if (!name.trim() || !amount || !categoryId || !type) {
      return;
    }
    
    setIsLoading(true);

    const formData = { 
      name: name.trim(), 
      amount: type === "expense" ? -Math.abs(Number(amount)) : Math.abs(Number(amount)), 
      categoryId, 
      type 
    };
    
    try {
      const authToken = localStorage.getItem("token");
      
      await axios.post(
        "https://le-nkap-v1.onrender.com/transactions",
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        name: formData.name,
        amount: formData.amount,
        category: categories.find((cat) => cat.id === parseInt(categoryId)),
        type
      };

      addTransaction(newTransaction);
      setShowPopup(true);

      // Clear form fields
      setName("");
      setAmount("");
      setCategoryId("");
      setType("expense");

      // Navigate back to the home screen after a delay
      setTimeout(() => {
        setShowPopup(false);
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error("Error adding transaction:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">
{/*       {/* Fixed header with proper responsive design */}
      <header className="sticky top-0 z-50 bg-blue-700 shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-white text-xl font-bold">Financial Tracker</h1>
          <NavLink
            to="/"
            className="flex items-center text-white hover:text-blue-200 transition-colors"
          >
            <HomeIcon className="h-6 w-6" />
            <span className="ml-2 hidden sm:inline">Home</span>
          </NavLink>
        </div>
      </header> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Your Finances</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Category Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-700 text-white p-4 flex items-center">
              <TagIcon className="h-5 w-5 mr-2" />
              <h3 className="text-lg font-semibold">Add New Category</h3>
            </div>
            <div className="p-5">
              <form onSubmit={onSubmitCategory} className="space-y-4">
                <div>
                  <label
                    htmlFor="categoryName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    id="categoryName"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="Enter category name..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
                >
                  <PlusIcon className="h-5 w-5 mr-1" />
                  Add Category
                </button>
              </form>
              
              {/* Category List */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Available Categories:</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span key={category.id} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {category.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-700 text-white p-4 flex items-center">
              <CashIcon className="h-5 w-5 mr-2" />
              <h3 className="text-lg font-semibold">Add New Transaction</h3>
            </div>
            <div className="p-5">
              <form onSubmit={onSubmitTransaction} className="space-y-4">
                <div>
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Transaction Name
                  </label>
                  <input
                    type="text"
                    id="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="What's this transaction for?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                    Transaction Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg border ${
                        type === "expense"
                          ? "bg-red-100 border-red-400 text-red-700"
                          : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
                      } transition-colors focus:outline-none`}
                      onClick={() => setType("expense")}
                    >
                      Expense
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg border ${
                        type === "income"
                          ? "bg-green-100 border-green-400 text-green-700"
                          : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
                      } transition-colors focus:outline-none`}
                      onClick={() => setType("income")}
                    >
                      Income
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Amount
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                    <input
                      type="number"
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a category...</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
                >
                  {isLoading ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <PlusIcon className="h-5 w-5 mr-1" />
                      Add Transaction
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-4 animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Transaction Added</h3>
              <p className="text-gray-600 mt-2">Your transaction has been successfully recorded.</p>
              <p className="text-gray-500 text-sm mt-4">Redirecting to home page...</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default AddTransaction;
