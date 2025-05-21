import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// No axios needed anymore
import { GlobalContext } from "../context/GlobalState"; // Ensure this path is correct

// --- INLINE SVG ICON COMPONENTS ---
// These replace @heroicons/react icons to remove external dependency

const HomeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a1.5 1.5 0 0 1 .43 1.06V20.25a2.25 2.25 0 0 1-2.25 2.25h-5.377a.75.75 0 0 1-.75-.75V16.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v4.5c0 .414-.336.75-.75.75H3.375A2.25 2.25 0 0 1 1.125 20.25V13.59a1.5 1.5 0 0 1 .43-1.06l8.69-8.69Z" />
  </svg>
);

const PlusIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fillRule="evenodd" d="M12 5.25a.75.75 0 0 1 .75.75v5.25H18a.75.75 0 0 1 0 1.5h-5.25V18a.75.75 0 0 1-1.5 0v-5.25H6a.75.75 0 0 1 0-1.5h5.25V6a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
  </svg>
);

const CashIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fillRule="evenodd" d="M2.25 8.25a3 3 0 0 1 3-3h15.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-9Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M6.177 9.574a.75.75 0 0 1-.097 1.054l-2.25 2.25a.75.75 0 0 1-1.054-.098l-1.5-1.5a.75.75 0 1 1 1.06-1.06l1.22 1.22 1.976-1.976a.75.75 0 0 1 1.054.098Z" clipRule="evenodd" />
  </svg>
);

const TagIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 11.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 13l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 14.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 13L5.47 7.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
);

// --- END INLINE SVG ICON COMPONENTS ---

function AddTransaction() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const [type, setType] = useState("expense");
  const [isLoading, setIsLoading] = useState(false); // Still useful for UX feedback
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
      alert("Category name cannot be empty."); // User feedback
      return;
    }

    const newCategory = {
      id: Math.floor(Math.random() * 100000000),
      name: categoryName.trim(),
    };

    setCategories([...categories, newCategory]);
    setCategoryName("");
  };

  const onSubmitTransaction = (e) => { // Made async unnecessary
    e.preventDefault();

    if (!name.trim() || !amount || !categoryId || !type) {
      alert("Please fill in all transaction fields.");
      return;
    }

    setIsLoading(true); // Indicate loading for user feedback

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000), // Generate local ID
      name: name.trim(),
      amount: type === "expense" ? -Math.abs(Number(amount)) : Math.abs(Number(amount)),
      category: categories.find((cat) => cat.id === parseInt(categoryId)),
      type,
    };

    // Add the transaction to the local state
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

    setIsLoading(false); // Reset loading state
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Top Header/Navigation Bar */}
      <div className="w-full bg-blue-700 px-4 py-3 flex justify-between items-center shadow-md">
        <h1 className="text-white text-xl font-semibold">Add Transaction</h1>
        <NavLink
          to="/"
          className="text-white hover:text-blue-200 transition-colors duration-200 p-2 rounded-full hover:bg-blue-600"
          aria-label="Home"
        >
          <HomeIcon className="h-6 w-6" />
        </NavLink>
      </div>

      {/* Main Content Area - Centered and max-width constrained */}
      <div className="container mx-auto px-4 py-8 max-w-2xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-blue-600 text-white p-4 flex items-center">
              <TagIcon className="h-6 w-6 mr-3" />
              <h3 className="font-semibold text-lg">Add New Category</h3>
            </div>
            <div className="p-6">
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
                    placeholder="e.g., Groceries, Rent"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center text-base"
                >
                  <PlusIcon className="h-5 w-5 mr-2" />
                  Add Category
                </button>
              </form>

              {/* Category List */}
              <div className="mt-6">
                <h4 className="text-base font-semibold text-gray-800 mb-3">Available Categories:</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span key={category.id} className="inline-block bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full font-medium shadow-sm">
                      {category.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-blue-600 text-white p-4 flex items-center">
              <CashIcon className="h-6 w-6 mr-3" />
              <h3 className="font-semibold text-lg">Add New Transaction</h3>
            </div>
            <div className="p-6">
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
                    placeholder="e.g., Coffee, Salary"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    Transaction Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className={`px-4 py-2.5 rounded-lg border text-base font-medium ${
                        type === "expense"
                          ? "bg-red-500 border-red-500 text-white shadow-md"
                          : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
                      } transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${type === "expense" ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
                      onClick={() => setType("expense")}
                    >
                      Expense
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2.5 rounded-lg border text-base font-medium ${
                        type === "income"
                          ? "bg-green-500 border-green-500 text-white shadow-md"
                          : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
                      } transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${type === "income" ? "focus:ring-green-500" : "focus:ring-blue-500"}`}
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
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 pr-2 border-r border-gray-300">
                      FCFA
                    </span>
                    <input
                      type="number"
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      className="w-full pl-20 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
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
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none cursor-pointer"
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
                  className="w-full py-2.5 px-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center text-base"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Adding...
                    </span>
                  ) : (
                    <>
                      <PlusIcon className="h-5 w-5 mr-2" />
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
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm mx-4 transform transition-all duration-300 ease-out scale-100 opacity-100">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Success!</h3>
              <p className="text-gray-600 text-lg mb-4">Transaction recorded locally.</p>
              <p className="text-gray-500 text-sm">Redirecting to home page...</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default AddTransaction;
