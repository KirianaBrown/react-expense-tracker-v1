/*
ExpenseItem Component
Parent: Expenses.jsx
Children: ExpenseDate.jsx

Info: Renders an individual expense item, receives an expense item from parent component. passes the props.date to the expense date to be formatted.  

*/

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li className="expenseItem">
      <div className="expenseItem--inner">
        <ExpenseDate date={props.date} />
        <h3 className="expenseItem-description">{props.description}</h3>
      </div>
      <h4 className="expenseItem-amount">${props.amount}</h4>
    </li>
  );
};

export default ExpenseItem;
