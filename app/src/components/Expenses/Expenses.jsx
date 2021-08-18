/*
Expenses Component
Parent: App.jsx
Children: 

Info: Expenses Component is the main display container for rendering the array of expenses. It receives the data from the App.jsx component and renders each item individually. Containing a date component, title and amount. 

*/

import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = (props) => {
  if (props.expenses.length === 0) {
    return (
      <div className="expenses">
        <h3>No Expenses</h3>
      </div>
    );
  }

  return (
    <div className="expenses">
      <ul className="expenses-list">
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            description={expense.description}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
