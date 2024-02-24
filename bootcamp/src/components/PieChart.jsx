import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function PieChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const labels = data.map(item => item.label);
    const values = data.map(item => item.value);
    const colors = data.map(item => item.color);

    const myChartRef = chartRef.current.getContext("2d");
    new Chart(myChartRef, {
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
  }, [data]);

  return (
    <div className="flex justify-center items-center">
      <canvas ref={chartRef} />
    </div>
  );
}

export default PieChart;
