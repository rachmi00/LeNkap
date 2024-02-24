import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Pie } from "react-chartjs-2";





function ExpensePieChart() {
    const { transactions } = useContext(GlobalContext);

    // Filter out negative amounts for expenses
    const expenseTransactions = transactions.filter(transaction => transaction.amount < 0);

    // Sum of all expense amounts
    const totalExpense = expenseTransactions.reduce((acc, transaction) => acc + Math.abs(transaction.amount), 0);

    // Labels and data for the chart
    const labels = expenseTransactions.map(transaction => transaction.name);
    const data = expenseTransactions.map(transaction => Math.abs(transaction.amount));

    const chartData =  {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                    // Add more colors if needed
                ]
            }
        ]
    };

    return (
        <div className="expense-pie-chart">
            <h2>Expense Breakdown</h2>
            <Pie data={chartData}   />
        </div>
    );
}

export default ExpensePieChart;
