import React, { useContext } from "react";
import PieChart from "./PieChart";
import { GlobalContext } from "../context/GlobalState";

function Dashboard() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => acc + item, 0);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => acc + item, 0);

  const data = [
    { label: 'Expense', value: Math.abs(expense), color: 'rgba(255, 99, 132, 0.5)' },
    { label: 'Income', value: income, color: 'rgba(54, 162, 235, 0.5)' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Expense and Income Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Expense and Income Overview</h3>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="bg-red-500 text-white p-4 rounded-lg flex-1">
                  <h4 className="text-lg font-semibold mb-2">Total Expenses</h4>
                  <p className="text-2xl font-bold">${Math.abs(expense).toFixed(2)}</p>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-lg flex-1">
                  <h4 className="text-lg font-semibold mb-2">Total Income</h4>
                  <p className="text-2xl font-bold">${income.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Expense and Income Distribution</h3>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <PieChart data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
