/*
Expenses Component
Parent: App.jsx
Children: ExpenseItem, ExpensesFilter, Chart

Info: Expenses Component is the main display container for rendering the array of expenses. It receives the data from the App.jsx component and renders each item individually. Containing a date component, title and amount. 

*/
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Chart from "../Chart/Chart";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const getItemToBeDeleted = (key) => {
    props.deleteExpense(key);
  };

  const selectedFilterYear = (year) => {
    setFilteredYear(year);
  };

  let filteredArray = [];
  if (filteredYear === "All") {
    filteredArray = props.expenses;
  } else {
    filteredArray = props.expenses.filter(
      (el) => el.date.getFullYear().toString() === filteredYear
    );
  }

  return (
    <div className="expenses">
      <ExpensesFilter selectedYearPassed={selectedFilterYear} />
      <Chart expenses={filteredArray} />
      <ul className="expenses-list">
        {filteredArray.length === 0 && (
          <h6 className="no-expenses">No Expenses</h6>
        )}

        {filteredArray.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            description={expense.description}
            date={expense.date}
            amount={expense.amount}
            deleteKey={getItemToBeDeleted}
          />
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
