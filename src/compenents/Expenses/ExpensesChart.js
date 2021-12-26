import React from "react";
import Chart from "../Chart/Chart";

const ExpesesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: "0" },
    { label: "Feb", value: "0" },
    { label: "Mar", value: "0" },
    { label: "APR", value: "0" },
    { label: "MAY", value: "0" },
    { label: "JUN", value: "0" },
    { label: "JUL", value: "0" },
    { label: "SEP", value: "0" },
    { label: "OCT", value: "0" },
    { label: "NOV", value: "0" },
    { label: "DEC", value: "0" },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpesesChart;
