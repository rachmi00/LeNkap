import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { NavLink } from "react-router-dom";

// Modern icon components with consistent styling
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

const TrendingUpIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L14.25 6.06V20.25a.75.75 0 0 1-1.5 0V6.06L5.53 12.53a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
  </svg>
);

const TrendingDownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fillRule="evenodd" d="M11.03 20.03a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06L9.75 17.94V3.75a.75.75 0 0 1 1.5 0v14.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
  </svg>
);

const CircleStackIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
  </svg>
);

const TagIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 1 3 3v4.5a.75.75 0 0 1-1.5 0v-4.5a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h4.5a.75.75 0 0 1 0 1.5h-4.5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h3Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M6 10.5a.75.75 0 0 1 .75.75v1.5a1.5 1.5 0 0 0 1.5 1.5h1.5a.75.75 0 0 1 0 1.5h-1.5a3 3 0 0 1-3-3v-1.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12.971 1.816A.75.75 0 0 1 13.5 1.5h4.5a3 3 0 0 1 3 3v4.5a.75.75 0 0 1-1.5 0v-4.5a1.5 1.5 0 0 0-1.5-1.5h-4.5a.75.75 0 0 1-.529-.216Z" clipRule="evenodd" />
    <path d="M8.25 6a.75.75 0 0 0-.75.75v.75a.75.75 0 0 0 1.5 0v-.75A.75.75 0 0 0 8.25 6Z" />
    <path fillRule="evenodd" d="M12.971 13.334a.75.75 0 0 1 .529-.216h4.5a.75.75 0 0 1 0 1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5v4.5a.75.75 0 0 1-1.5 0v-4.5a3 3 0 0 1 3-3Z" clipRule="evenodd" />
    <path d="M15.75 10.5a.75.75 0 0 0 .75-.75v-.75a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 .75.75ZM16.5 18.75a.75.75 0 0 0-.75.75v.75a.75.75 0 0 0 1.5 0v-.75a.75.75 0 0 0-.75-.75Z" />
  </svg>
);

const CalendarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
  </svg>
);

function Dashboard() {
  const { transactions } = useContext(GlobalContext);
  const [timeFilter, setTimeFilter] = useState("all");

  const getFilteredTransactions = () => {
    if (timeFilter === "all") return transactions;

    const now = new Date();
    let startDate;

    switch(timeFilter) {
      case "month":
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        break;
      case "week":
        const day = now.getDay();
        startDate = new Date(now.setDate(now.getDate() - day));
        break;
      case "day":
        startDate = new Date(now.setHours(0, 0, 0, 0));
        break;
      default:
        return transactions;
    }

    return transactions.filter(t => new Date(t.date) >= startDate);
  };

  const filteredTransactions = getFilteredTransactions();

  const amounts = filteredTransactions.map((transaction) => transaction.amount);
  const totalBalance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const totalIncome = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalExpenses = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  const categorySummary = {};
  filteredTransactions.forEach(transaction => {
    if (transaction.amount < 0) {
      const categoryName = transaction.category ? transaction.category.name : "Uncategorized";
      if (!categorySummary[categoryName]) {
        categorySummary[categoryName] = 0;
      }
      categorySummary[categoryName] += Math.abs(transaction.amount);
    }
  });

  const COLORS = ['#6366F1', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#3B82F6', '#D946EF']; // More vibrant Tailwind-like colors

  const formatCurrency = (amount) => {
    return `FCFA ${Number(amount).toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20"> {/* Added pb-20 for bottom nav padding */}
      {/* Top Navigation Bar - Smaller and more refined */}
      <nav className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3 shadow-md">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <h1 className="text-white text-lg font-semibold flex items-center">
            <ChartBarIcon className="h-5 w-5 mr-2 text-blue-200" /> Dashboard
          </h1>
          <NavLink
            to="/"
            className="text-white hover:text-blue-200 transition-colors duration-200 p-1.5 rounded-full hover:bg-blue-700/50"
            aria-label="Home"
          >
            <HomeIcon className="h-5 w-5" />
          </NavLink>
        </div>
      </nav>

      {/* Filter Controls - Clean and aligned */}
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white shadow-sm rounded-lg mt-4 max-w-7xl">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <CalendarIcon className="h-5 w-5 mr-2 text-indigo-600" />
          Filter by Period:
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {['day', 'week', 'month', 'all'].map((period) => (
            <button
              key={period}
              onClick={() => setTimeFilter(period)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                ${timeFilter === period
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Main Dashboard Grid - More balanced and spaced */}
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Balance Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <div className="p-5">
              <div className="flex items-center mb-3">
                <CircleStackIcon className="h-7 w-7 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-700">Total Balance</h3>
              </div>
              <p className={`text-4xl font-bold ${
                Number(totalBalance) >= 0 ? "text-blue-700" : "text-red-600"
              }`}>
                {formatCurrency(totalBalance)}
              </p>
              <p className="text-sm text-gray-500 mt-1">Overall financial standing</p>
            </div>
          </div>

          {/* Income Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <div className="p-5">
              <div className="flex items-center mb-3">
                <TrendingUpIcon className="h-7 w-7 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-700">Total Income</h3>
              </div>
              <p className="text-4xl font-bold text-green-700">
                {formatCurrency(totalIncome)}
              </p>
              <p className="text-sm text-gray-500 mt-1">Money received</p>
            </div>
          </div>

          {/* Expenses Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform transition-all hover:scale-[1.01] hover:shadow-xl">
            <div className="p-5">
              <div className="flex items-center mb-3">
                <TrendingDownIcon className="h-7 w-7 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-700">Total Expenses</h3>
              </div>
              <p className="text-4xl font-bold text-red-700">
                {formatCurrency(totalExpenses)}
              </p>
              <p className="text-sm text-gray-500 mt-1">Money spent</p>
            </div>
          </div>
        </div>

        {/* Charts & Breakdown Section - Improved visual separation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Expense Breakdown (Non-Chart) */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex items-center">
              <ChartBarIcon className="h-5 w-5 mr-2 text-indigo-600" />
              <h3 className="font-semibold text-gray-700">Expense Breakdown by Category</h3>
            </div>
            <div className="p-6 min-h-[250px] flex flex-col justify-center">
              {Object.keys(categorySummary).length > 0 ? (
                <ul className="space-y-3">
                  {Object.entries(categorySummary).sort(([, a], [, b]) => b - a).map(([name, value], index) => (
                    <li key={name} className="flex justify-between items-center text-gray-800">
                      <span className="flex items-center text-base font-medium">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                        {name}
                      </span>
                      <span className="text-lg font-semibold">{formatCurrency(value)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>No expense data available for this period to show category breakdown.</p>
                  <p className="text-sm mt-2">Add some expenses to see insights here!</p>
                </div>
              )}
            </div>
          </div>

          {/* Recent Transactions List */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-semibold text-gray-700 flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2 text-indigo-600" />
                Recent Transactions
              </h3>
              <NavLink
                to="/transactions" {/* Assuming a full transactions page exists */}
                className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
              >
                View All
              </NavLink>
            </div>
            <div className="overflow-x-auto">
              {filteredTransactions.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {filteredTransactions.slice(0, 5).map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-600">
                          {new Date(transaction.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900 truncate max-w-[150px] sm:max-w-none">
                          {transaction.text}
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                          {transaction.category ? transaction.category.name : "Uncategorized"}
                        </td>
                        <td className={`px-6 py-3 whitespace-nowrap text-sm font-semibold text-right ${
                          transaction.amount < 0 ? "text-red-600" : "text-green-600"
                        }`}>
                          {transaction.amount < 0 ? "-" : "+"} {formatCurrency(Math.abs(transaction.amount))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>No recent transactions for this period.</p>
                  <p className="text-sm mt-2">Your recent activity will show up here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
