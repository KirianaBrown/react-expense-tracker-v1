/*
Component: CHart
Parent: Expenses.jsx
Children: ChartBar

Info: Calc the amount out of 100 that the value represents and pass to set the height of the chartBars 

*/

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const chartBars = [
    { label: "Jan", amount: 0 },
    { label: "Feb", amount: 0 },
    { label: "Mar", amount: 0 },
    { label: "Apr", amount: 0 },
    { label: "May", amount: 0 },
    { label: "Jun", amount: 0 },
    { label: "Jul", amount: 0 },
    { label: "Aug", amount: 0 },
    { label: "Sep", amount: 0 },
    { label: "Oct", amount: 0 },
    { label: "Nov", amount: 0 },
    { label: "Dec", amount: 0 },
  ];

  const amountValuesArray = props.expenses.map((el) => el.amount);
  const maxAmountValue = Math.max(...amountValuesArray);

  props.expenses.forEach((el) => {
    const month = el.date.getMonth();
    const elAmount = Math.round((+el.amount / maxAmountValue) * 100);
    chartBars[month].amount += elAmount;
  });

  return (
    <div className="chart">
      {chartBars.map((el) => (
        <ChartBar key={el.label} label={el.label} amount={el.amount} />
      ))}
    </div>
  );
};

export default Chart;
