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
      <div className="max-w-md w-full px-6">
        <h2 className="text-lg font-semibold mb-4">Expense and Income Dashboard</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Expense and Income Pie Chart</h3>
          <PieChart data={data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
