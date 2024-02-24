import React, { useContext, useEffect, useRef } from "react";
import Chart from "chart.js";
import { GlobalContext } from "../context/GlobalState";

function IncomePieChart() {
  const { transactions } = useContext(GlobalContext);
  const chartRef = useRef(null);

  useEffect(() => {
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item > 0)
                           .reduce((acc, item) => acc + item, 0).toFixed(2);

    const data = {
      labels: ['Income'],
      datasets: [{
        label: 'Income',
        data: [income],
        backgroundColor: ['rgba(54, 162, 235, 0.5)'], // Income color
        borderWidth: 1
      }]
    };

    const options = {
      plugins: {
        legend: {
          display: true,
          position: 'right'
        }
      },
      aspectRatio: 1, // Make the chart round
      cutout: '80%', // Adjust the cutout percentage for the hole in the center
    };

    const myChartRef = chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: 'pie',
      data: data,
      options: options
    });
  }, [transactions]);

  return (
    <div className="flex justify-center items-center h-full">
      <canvas ref={chartRef} className=" rounded shadow-lg" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
}

export default IncomePieChart;
