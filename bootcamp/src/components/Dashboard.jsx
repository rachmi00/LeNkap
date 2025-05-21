import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState"; // Adjust path as needed
import { NavLink } from "react-router-dom"; // Assuming you want a back button or navigation

// --- INLINE SVG ICON COMPONENTS (reused from previous prompts) ---
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

const ChartBarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 9a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V15Zm6-.75a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 .75.75h.75a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.75Zm3.75-3.75a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 .75.75h.75a.75.75 0 0 0 .75-.75V11.25a.75.75 0 0 0-.75-.75h-.75Z" clipRule="evenodd" />
  </svg>
);

const TrendingUpIcon = (props) => ( // Using an icon that implies 'income' or 'positive trend'
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L14.25 6.06V20.25a.75.75 0 0 1-1.5 0V6.06L5.53 12.53a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
  </svg>
);

const TrendingDownIcon = (props) => ( // Using an icon that implies 'expense' or 'negative trend'
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fillRule="evenodd" d="M11.03 20.03a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06L9.75 17.94V3.75a.75.75 0 0 1 1.5 0v14.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
  </svg>
);

const CircleStackIcon = (props) => ( // A generic icon for total balance/summary
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
  </svg>
);

const TagIcon = (props) => ( // For category breakdown
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

function Dashboard() {
  const { transactions } = useContext(GlobalContext);

  // Calculate totals
  const amounts = transactions.map((transaction) => transaction.amount);
  const totalBalance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const totalIncome = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalExpenses = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2); // Convert to positive for display

  // Calculate category breakdown
  const categorySummary = {};
  transactions.forEach(transaction => {
    const categoryName = transaction.category ? transaction.category.name : "Uncategorized";
    if (!categorySummary[categoryName]) {
      categorySummary[categoryName] = { income: 0, expense: 0 };
    }
    if (transaction.amount > 0) {
      categorySummary[categoryName].income += transaction.amount;
    } else {
      categorySummary[categoryName].expense += Math.abs(transaction.amount);
    }
  });

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Top Header/Navigation Bar */}
      <div className="w-full bg-purple-700 px-4 py-3 flex justify-between items-center shadow-md">
        <h1 className="text-white text-xl font-semibold flex items-center">
          <ChartBarIcon className="h-6 w-6 mr-2" /> Reports & Dashboard
        </h1>
        <NavLink
          to="/"
          className="text-white hover:text-purple-200 transition-colors duration-200 p-2 rounded-full hover:bg-purple-600"
          aria-label="Home"
        >
          <HomeIcon className="h-6 w-6" />
        </NavLink>
      </div>

      {/* Main Content Area - Summary Cards */}
      <div className="container mx-auto px-4 py-8 max-w-4xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Financial Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Balance Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center border-l-4 border-blue-500">
            <CircleStackIcon className="h-10 w-10 text-blue-500 mb-3" />
            <h3 className="text-lg font-medium text-gray-600">Total Balance</h3>
            <p className={`text-3xl font-bold ${totalBalance >= 0 ? "text-green-600" : "text-red-600"} mt-2`}>
              FCFA {Number(totalBalance).toLocaleString()}
            </p>
          </div>

          {/* Total Income Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center border-l-4 border-green-500">
            <TrendingUpIcon className="h-10 w-10 text-green-500 mb-3" />
            <h3 className="text-lg font-medium text-gray-600">Total Income</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">
              FCFA {Number(totalIncome).toLocaleString()}
            </p>
          </div>

          {/* Total Expenses Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center border-l-4 border-red-500">
            <TrendingDownIcon className="h-10 w-10 text-red-500 mb-3" />
            <h3 className="text-lg font-medium text-gray-600">Total Expenses</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">
              FCFA {Number(totalExpenses).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Category Breakdown Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mt-8">
          <div className="bg-gray-100 text-gray-800 p-4 flex items-center border-b border-gray-200">
            <TagIcon className="h-6 w-6 mr-3 text-gray-600" />
            <h3 className="font-semibold text-lg">Breakdown by Category</h3>
          </div>
          <div className="p-6">
            {Object.keys(categorySummary).length > 0 ? (
              <div className="space-y-4">
                {Object.entries(categorySummary).map(([category, totals]) => (
                  <div key={category} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                    <span className="text-lg font-medium text-gray-700">{category}</span>
                    <div className="flex flex-col items-end">
                      {totals.income > 0 && (
                        <span className="text-green-600 text-base font-semibold">
                          + FCFA {Number(totals.income).toLocaleString()}
                        </span>
                      )}
                      {totals.expense > 0 && (
                        <span className="text-red-600 text-base font-semibold">
                          - FCFA {Number(totals.expense).toLocaleString()}
                        </span>
                      )}
                      {totals.income === 0 && totals.expense === 0 && (
                        <span className="text-gray-500 text-base">No transactions</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-4">No transactions recorded yet. Add some!</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
