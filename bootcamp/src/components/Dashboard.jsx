"use client"

import { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../context/GlobalState"
import { NavLink } from "react-router-dom"

// Modern icon components with consistent styling
const HomeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a1.5 1.5 0 0 1 .43 1.06V20.25a2.25 2.25 0 0 1-2.25 2.25h-5.377a.75.75 0 0 1-.75-.75V16.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v4.5c0 .414-.336.75-.75.75H3.375A2.25 2.25 0 0 1 1.125 20.25V13.59a1.5 1.5 0 0 1 .43-1.06l8.69-8.69Z" />
  </svg>
)

const ChartBarIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 9a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V15Zm6-.75a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 .75.75h.75a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.75Zm3.75-3.75a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 .75.75h.75a.75.75 0 0 0 .75-.75V11.25a.75.75 0 0 0-.75-.75h-.75Z"
      clipRule="evenodd"
    />
  </svg>
)

const TrendingUpIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L14.25 6.06V20.25a.75.75 0 0 1-1.5 0V6.06L5.53 12.53a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
      clipRule="evenodd"
    />
  </svg>
)

const TrendingDownIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M11.03 20.03a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06L9.75 17.94V3.75a.75.75 0 0 1 1.5 0v14.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
      clipRule="evenodd"
    />
  </svg>
)

const CircleStackIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
      clipRule="evenodd"
    />
  </svg>
)

const TagIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M5.25 2.25a3 3 0 0 1 3 3v4.5a.75.75 0 0 1-1.5 0v-4.5a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h4.5a.75.75 0 0 1 0 1.5h-4.5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h3Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M6 10.5a.75.75 0 0 1 .75.75v1.5a1.5 1.5 0 0 0 1.5 1.5h1.5a.75.75 0 0 1 0 1.5h-1.5a3 3 0 0 1-3-3v-1.5a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M12.971 1.816A.75.75 0 0 1 13.5 1.5h4.5a3 3 0 0 1 3 3v4.5a.75.75 0 0 1-1.5 0v-4.5a1.5 1.5 0 0 0-1.5-1.5h-4.5a.75.75 0 0 1-.529-.216Z"
      clipRule="evenodd"
    />
    <path d="M8.25 6a.75.75 0 0 0-.75.75v.75a.75.75 0 0 0 1.5 0v-.75A.75.75 0 0 0 8.25 6Z" />
    <path
      fillRule="evenodd"
      d="M12.971 13.334a.75.75 0 0 1 .529-.216h4.5a.75.75 0 0 1 0 1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5v4.5a.75.75 0 0 1-1.5 0v-4.5a3 3 0 0 1 3-3Z"
      clipRule="evenodd"
    />
    <path d="M15.75 10.5a.75.75 0 0 0 .75-.75v-.75a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 .75.75ZM16.5 18.75a.75.75 0 0 0-.75.75v.75a.75.75 0 0 0 1.5 0v-.75a.75.75 0 0 0-.75-.75Z" />
  </svg>
)

const CalendarIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
      clipRule="evenodd"
    />
  </svg>
)

function Dashboard() {
  const { transactions } = useContext(GlobalContext)
  const [timeFilter, setTimeFilter] = useState("all")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Add animation on component mount
    setIsLoaded(true)
  }, [])

  const getFilteredTransactions = () => {
    if (timeFilter === "all") return transactions

    const now = new Date()
    let startDate

    switch (timeFilter) {
      case "month":
        startDate = new Date(now.getFullYear(), now.getMonth(), 1)
        break
      case "week":
        const day = now.getDay()
        startDate = new Date(now.setDate(now.getDate() - day))
        break
      case "day":
        startDate = new Date(now.setHours(0, 0, 0, 0))
        break
      default:
        return transactions
    }

    return transactions.filter((t) => new Date(t.date) >= startDate)
  }

  const filteredTransactions = getFilteredTransactions()

  const amounts = filteredTransactions.map((transaction) => transaction.amount)
  const totalBalance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const totalIncome = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)
  const totalExpenses = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2)

  const categorySummary = {}
  filteredTransactions.forEach((transaction) => {
    if (transaction.amount < 0) {
      const categoryName = transaction.category
        ? transaction.category.name
        : "Uncategorized"
      if (!categorySummary[categoryName]) {
        categorySummary[categoryName] = 0
      }
      categorySummary[categoryName] += Math.abs(transaction.amount)
    }
  })

  // Enhanced color palette with more vibrant colors
  const COLORS = [
    "#6366F1", // Indigo-500
    "#3B82F6", // Blue-500
    "#10B981", // Emerald-500
    "#F59E0B", // Amber-500
    "#EF4444", // Red-500
    "#8B5CF6", // Violet-500
    "#EC4899", // Pink-500
    "#06B6D4", // Cyan-500
  ]

  const formatCurrency = (amount) => {
    return `FCFA ${Number(amount).toLocaleString()}`
  }

  // Calculate percentage for each category
  const totalExpenseAmount = Object.values(categorySummary).reduce(
    (acc, val) => acc + val,
    0
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pb-20 pt-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Dashboard Title and Home Link */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 flex items-center">
            <ChartBarIcon className="h-8 w-8 mr-3 text-indigo-600" />
            Financial Dashboard
          </h1>
          <NavLink
            to="/"
            className="p-3 rounded-full bg-white text-indigo-600 hover:bg-indigo-50 transition-colors duration-200 shadow-sm hover:shadow border border-indigo-100"
            aria-label="Home"
          >
            <HomeIcon className="h-5 w-5" />
          </NavLink>
        </div>

        {/* Time Filter Section with enhanced styling */}
        <div
          className={`px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white shadow-lg rounded-2xl mb-8 border border-indigo-50 transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            boxShadow:
              "0 10px 25px -5px rgba(99, 102, 241, 0.1), 0 8px 10px -6px rgba(99, 102, 241, 0.05)",
          }}
        >
          <h2 className="text-lg font-semibold text-slate-800 flex items-center">
            <CalendarIcon className="h-5 w-5 mr-2 text-indigo-600" />
            Filter by Period:
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["day", "week", "month", "all"].map((period) => (
              <button
                key={period}
                onClick={() => setTimeFilter(period)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                ${
                  timeFilter === period
                    ? "bg-indigo-600 text-white shadow-md transform scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105"
                }`}
                style={{
                  boxShadow:
                    timeFilter === period
                      ? "0 4px 14px rgba(99, 102, 241, 0.3)"
                      : "none",
                }}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Summary Cards with enhanced styling and animations */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          {/* Balance Card */}
          <div
            className="bg-white rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative"
            style={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
            <div className="p-7">
              <div className="flex items-center mb-5">
                <div className="p-3 bg-indigo-100 rounded-xl mr-4 shadow-sm">
                  <CircleStackIcon className="h-7 w-7 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Total Balance
                  </h3>
                  <p className="text-sm text-slate-500">
                    Overall financial standing
                  </p>
                </div>
              </div>
              <p
                className={`text-4xl font-bold mt-3 ${
                  Number(totalBalance) >= 0
                    ? "text-indigo-700"
                    : "text-red-600"
                }`}
              >
                {formatCurrency(totalBalance)}
              </p>
            </div>
          </div>

          {/* Income Card */}
          <div
            className="bg-white rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative"
            style={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 to-emerald-500"></div>
            <div className="p-7">
              <div className="flex items-center mb-5">
                <div className="p-3 bg-emerald-100 rounded-xl mr-4 shadow-sm">
                  <TrendingUpIcon className="h-7 w-7 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Total Income
                  </h3>
                  <p className="text-sm text-slate-500">Money received</p>
                </div>
              </div>
              <p className="text-4xl font-bold mt-3 text-emerald-600">
                {formatCurrency(totalIncome)}
              </p>
            </div>
          </div>

          {/* Expenses Card */}
          <div
            className="bg-white rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative"
            style={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-400 to-rose-500"></div>
            <div className="p-7">
              <div className="flex items-center mb-5">
                <div className="p-3 bg-rose-100 rounded-xl mr-4 shadow-sm">
                  <TrendingDownIcon className="h-7 w-7 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Total Expenses
                  </h3>
                  <p className="text-sm text-slate-500">Money spent</p>
                </div>
              </div>
              <p className="text-4xl font-bold mt-3 text-rose-600">
                {formatCurrency(totalExpenses)}
              </p>
            </div>
          </div>
        </div>

        {/* Data Visualization Section */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Category Breakdown */}
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100"
            style={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
            }}
          >
            <div className="px-7 py-5 bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-50 border-b border-indigo-200 flex items-center">
              <ChartBarIcon className="h-6 w-6 mr-3 text-indigo-600" />
              <h3 className="font-semibold text-slate-800 text-lg">
                Expense Breakdown by Category
              </h3>
            </div>
            <div className="p-7 min-h-[300px] flex flex-col justify-center">
              {Object.keys(categorySummary).length > 0 ? (
                <ul className="space-y-5">
                  {Object.entries(categorySummary)
                    .sort(([, a], [, b]) => b - a)
                    .map(([name, value], idx) => {
                      const percentage = totalExpenseAmount
                        ? Math.round((value / totalExpenseAmount) * 100)
                        : 0
                      return (
                        <li key={name} className="space-y-2">
                          <div className="flex justify-between items-center text-slate-800">
                            <span className="flex items-center text-base font-medium">
                              <div
                                className="w-4 h-4 rounded-full mr-3 shadow-sm"
                                style={{
                                  backgroundColor: COLORS[idx % COLORS.length],
                                }}
                              ></div>
                              {name}
                            </span>
                            <span className="text-lg font-semibold">
                              {formatCurrency(value)}
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
                            <div
                              className="h-3 rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: `${percentage}%`,
                                backgroundColor: COLORS[idx % COLORS.length],
                                transition: "width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1) inset",
                              }}
                            ></div>
                          </div>
                          <p className="text-xs text-slate-500 text-right font-medium">
                            {percentage}% of total expenses
                          </p>
                        </li>
                      )
                    })}
                </ul>
              ) : (
                <div className="text-center py-10 text-slate-500 bg-slate-50 rounded-xl p-8 border border-slate-100">
                  <TagIcon className="h-12 w-12 mx-auto mb-4 text-slate-400" />
                  <p className="font-medium text-lg">
                    No expense data available for this period.
                  </p>
                  <p className="text-sm mt-2">
                    Add some expenses to see insights here!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Recent Transactions */}
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100"
            style={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
            }}
          >
            <div className="px-7 py-5 bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-50 border-b border-indigo-200 flex justify-between items-center">
              <h3 className="font-semibold text-slate-800 flex items-center text-lg">
                <CalendarIcon className="h-6 w-6 mr-3 text-indigo-600" />
                Recent Transactions
              </h3>
              <NavLink
                to="/transactions"
                className="text-sm text-indigo-600 hover:text-indigo-800 font-medium px-4 py-1.5 rounded-full hover:bg-indigo-100 transition-colors duration-200 border border-indigo-200 shadow-sm"
              >
                View All
              </NavLink>
            </div>
            <div className="overflow-x-auto">
              {filteredTransactions.length > 0 ? (
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-7 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-7 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-7 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-7 py-4 text-right text-xs font-medium text-slate-500 uppercase tracking-wider"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100">
                    {filteredTransactions.slice(0, 5).map((transaction, index) => (
                      <tr
                        key={transaction.id}
                        className="hover:bg-slate-50 transition-colors duration-150"
                        style={{
                          animation: `fadeIn 0.5s ease-out ${
                            index * 0.1
                          }s both`,
                          animationFillMode: "backwards",
                        }}
                      >
                        <td className="px-7 py-4 whitespace-nowrap text-sm text-slate-600">
                          {new Date(transaction.date).toLocaleDateString()}
                        </td>
                        <td className="px-7 py-4 whitespace-nowrap text-sm font-medium text-slate-800 truncate max-w-[150px] sm:max-w-none">
                          {transaction.text}
                        </td>
                        <td className="px-7 py-4 whitespace-nowrap text-sm">
                          <span
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium shadow-sm"
                            style={{
                              backgroundColor:
                                transaction.amount < 0
                                  ? "rgba(239, 68, 68, 0.1)"
                                  : "rgba(16, 185, 129, 0.1)",
                              color:
                                transaction.amount < 0
                                  ? "rgb(185, 28, 28)"
                                  : "rgb(4, 120, 87)",
                              border:
                                transaction.amount < 0
                                  ? "1px solid rgba(239, 68, 68, 0.2)"
                                  : "1px solid rgba(16, 185, 129, 0.2)",
                            }}
                          >
                            {transaction.category
                              ? transaction.category.name
                              : "Uncategorized"}
                          </span>
                        </td>
                        <td
                          className={`px-7 py-4 whitespace-nowrap text-sm font-semibold text-right ${
                            transaction.amount < 0
                              ? "text-rose-600"
                              : "text-emerald-600"
                          }`}
                        >
                          <span className="inline-flex items-center">
                            {transaction.amount < 0 ? (
                              <TrendingDownIcon className="h-4 w-4 mr-1.5" />
                            ) : (
                              <TrendingUpIcon className="h-4 w-4 mr-1.5" />
                            )}
                            {transaction.amount < 0 ? "-" : "+"}{" "}
                            {formatCurrency(Math.abs(transaction.amount))}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center py-10 text-slate-500 bg-slate-50 m-5 rounded-xl p-8 border border-slate-100">
                  <CalendarIcon className="h-12 w-12 mx-auto mb-4 text-slate-400" />
                  <p className="font-medium text-lg">
                    No recent transactions for this period.
                  </p>
                  <p className="text-sm mt-2">
                    Your recent activity will show up here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Dashboard
