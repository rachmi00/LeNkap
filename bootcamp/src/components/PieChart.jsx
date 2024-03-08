import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function PieChart({ data }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Keep track of the chart instance

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy existing chart instance
    }

    const labels = data.map(item => item.label);
    const values = data.map(item => item.value);
    const colors = data.map(item => item.color);

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: colors,
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'right'
          }
        }
      }
    });

    // Clean up the chart instance when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="flex justify-center items-center">
      <canvas ref={chartRef} />
    </div>
  );
}

export default PieChart;
