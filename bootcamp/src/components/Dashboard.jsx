import React, { useContext } from "react";
import PieChart from "./PieChart";
import { GlobalContext } from "../context/GlobalState";

function Dashboard() {
  const { transactions } = useContext(GlobalContext);

  // Calculate total expense and income
  const amounts = transactions.map(transaction => transaction.amount);
  const expense = amounts.filter(item => item < 0)
                         .reduce((acc, item) => acc + item, 0);
  const income = amounts.filter(item => item > 0)
                        .reduce((acc, item) => acc + item, 0);

  // Prepare data for the pie chart
  const data = [
    { label: 'Expense', value: Math.abs(expense), color: 'rgba(255, 99, 132, 0.5)' },
    { label: 'Income', value: income, color: 'rgba(54, 162, 235, 0.5)' }
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Expense and Income Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Expense and Income Overview</h3>
              <div className="flex justify-between mb-4">
                <div className="bg-red-500 text-white p-4 rounded-lg flex-1 mr-4">
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
              <h3 className="text-xl font-semibold mb-4">Expense and Income Distribution</h3>
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
