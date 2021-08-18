/*
ExpenseDate Component
Parent: ExpenseItem.jsx
Children: 

Info: Formats and renders the date  

*/

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const date = props.date;
  const month = date.toLocaleString("en-NZ", { month: "short" });
  const day = date.toLocaleString("en-NZ", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expenseDate">
      <h5 className="expenseDate-day">{day}</h5>
      <h5 className="expenseDate-month">{month}</h5>
      <h5 className="expenseDate-year">{year}</h5>
    </div>
  );
};

export default ExpenseDate;
