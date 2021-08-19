/*
Expenses Component
Parent: App.jsx
Children: ExpenseItem, ExpensesFilter

Info: Expenses Component is the main display container for rendering the array of expenses. It receives the data from the App.jsx component and renders each item individually. Containing a date component, title and amount. 

*/
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [displayArray, setDisplayArray] = useState(props.expenses);

  if (props.expenses.length === 0) {
    return (
      <div className="expenses">
        <h3>No Expenses</h3>
      </div>
    );
  }

  const getItemToBeDeleted = (key) => {
    props.deleteExpense(key);
  };

  const selectedFilterYear = (year) => {
    console.log(year);

    if (year !== "All") {
      const filteredArray = props.expenses.filter(
        (el) => el.date.getFullYear().toString() === year
      );
      setDisplayArray(filteredArray);
    } else {
      setDisplayArray(props.expenses);
    }
  };

  return (
    <div className="expenses">
      <ExpensesFilter selectedYearPassed={selectedFilterYear} />
      <ul className="expenses-list">
        {displayArray.length === 0 && (
          <h6 className="no-expenses">No Expenses</h6>
        )}

        {displayArray.map((expense) => (
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
