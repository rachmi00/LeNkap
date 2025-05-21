import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { NavLink } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

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
  const [pieData, setPieData] = useState([]);
  const [trendData, setTrendData] = useState([]);

  // Calculate totals
  const amounts = transactions.map((transaction) => transaction.amount);
  const totalBalance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const totalIncome = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalExpenses = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  // Calculate filtered transactions based on time period
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

  // Calculate category breakdown for expenses
  useEffect(() => {
    const filteredTransactions = getFilteredTransactions();
    
    // Prepare category data for pie chart
    const categorySummary = {};
    filteredTransactions.forEach(transaction => {
      if (transaction.amount < 0) { // Only expenses for the pie chart
        const categoryName = transaction.category ? transaction.category.name : "Uncategorized";
        if (!categorySummary[categoryName]) {
          categorySummary[categoryName] = 0;
        }
        categorySummary[categoryName] += Math.abs(transaction.amount);
      }
    });
    
    // Convert to array format for recharts
    const pieChartData = Object.entries(categorySummary).map(([name, value]) => ({
      name,
      value
    }));
    
    setPieData(pieChartData);
  }, [transactions, timeFilter]);

  // Colors for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#8dd1e1'];

  // Format currency
  const formatCurrency = (amount) => {
    return `FCFA ${Number(amount).toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl font-bold flex items-center">
            <ChartBarIcon className="h-6 w-6 mr-2" /> Financial Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <NavLink
              to="/"
              className="text-white hover:text-indigo-100 transition-colors p-2 rounded-full hover:bg-indigo-500"
              aria-label="Home"
            >
              <HomeIcon className="h-6 w-6" />
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Filter Controls */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between flex-wrap bg-white shadow-sm rounded-lg mt-4 max-w-6xl">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <CalendarIcon className="h-5 w-5 mr-2 text-indigo-600" /> 
          Time Period
        </h2>
        <div className="flex space-x-2 mt-2 sm:mt-0">
          {['day', 'week', 'month', 'all'].map((period) => (
            <button
              key={period}
              onClick={() => setTimeFilter(period)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                timeFilter === period
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Balance Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg">
            <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">Total Balance</h3>
              <CircleStackIcon className="h-8 w-8 text-white/80" />
            </div>
            <div className="px-6 py-6 flex flex-col items-center">
              <p className={`text-3xl font-bold ${
                Number(totalBalance) >= 0 ? "text-blue-600" : "text-red-600"
              }`}>
                {formatCurrency(totalBalance)}
              </p>
              <p className="text-sm text-gray-500 mt-2">Current balance</p>
            </div>
          </div>

          {/* Income Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg">
            <div className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">Total Income</h3>
              <TrendingUpIcon className="h-8 w-8 text-white/80" />
            </div>
            <div className="px-6 py-6 flex flex-col items-center">
              <p className="text-3xl font-bold text-green-600">
                {formatCurrency(totalIncome)}
              </p>
              <p className="text-sm text-gray-500 mt-2">Money in</p>
            </div>
          </div>

          {/* Expenses Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg">
            <div className="px-6 py-4 bg-gradient-to-r from-red-500 to-rose-600 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">Total Expenses</h3>
              <TrendingDownIcon className="h-8 w-8 text-white/80" />
            </div>
            <div className="px-6 py-6 flex flex-col items-center">
              <p className="text-3xl font-bold text-red-600">
                {formatCurrency(totalExpenses)}
              </p>
              <p className="text-sm text-gray-500 mt-2">Money out</p>
            </div>
          </div>
        </div>

        {/* Charts & Breakdown Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
          {/* Expense Breakdown Pie Chart */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden md:col-span-5">
            <div className="px-6 py-4 bg-gray-50 border-b flex items-center">
              <ChartBarIcon className="h-5 w-5 mr-2 text-indigo-600" />
              <h3 className="font-semibold text-gray-700">Expense Breakdown</h3>
            </div>
            <div className="p-4 h-80">
              {pieData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => 
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [formatCurrency(value), "Amount"]}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-gray-500">No expense data available</p>
                </div>
              )}
            </div>
          </div>

          {/* Category Breakdown List */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden md:col-span-7">
            <div className="px-6 py-4 bg-gray-50 border-b flex items-center">
              <TagIcon className="h-5 w-5 mr-2 text-indigo-600" />
              <h3 className="font-semibold text-gray-700">Detailed Category Breakdown</h3>
            </div>
            <div className="p-4 overflow-auto max-h-80">
              {pieData.length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {pieData.map((category, index) => (
                    <div key={category.name} className="grid grid-cols-2 py-3 px-2 hover:bg-gray-50 rounded-lg">
                      <div>
                        <span className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                          <span className="font-medium text-gray-800">{category.name}</span>
                        </span>
                      </div>
                      <div className="text-right font-semibold text-gray-700">
                        {formatCurrency(category.value)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No categories to display</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8">
          <div className="px-6 py-4 bg-gray-50 border-b flex justify-between items-center">
            <h3 className="font-semibold text-gray-700 flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2 text-indigo-600" />
              Recent Transactions
            </h3>
            <NavLink 
              to="/transactions"
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
            >
              View All
            </NavLink>
          </div>
          <div className="overflow-x-auto">
            {transactions.length > 0 ? (
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
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactions.slice(0, 5).map((transaction, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(transaction.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {transaction.text}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.category ? transaction.category.name : "Uncategorized"}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${
                        transaction.amount < 0 ? "text-red-600" : "text-green-600"
                      }`}>
                        {transaction.amount < 0 ? "-" : "+"} {formatCurrency(Math.abs(transaction.amount))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No transactions to display</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
