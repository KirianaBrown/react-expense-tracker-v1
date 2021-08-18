/*
Expenses Component
Parent: App.jsx
Children: 

Info: Expenses Component is the main display container for rendering the array of expenses. It receives the data from the App.jsx component and renders each item individually. Containing a date component, title and amount. 

*/

import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = () => {
  return (
    <div className="expenses">
      <ul className="expenses-list">
        <ExpenseItem
          description={"New Book"}
          date={"March 28th 2021"}
          amount="200.00"
        />
        <ExpenseItem
          description={"Computer"}
          date={"Jun 28th 2021"}
          amount="2899.00"
        />
        <ExpenseItem
          description={"Water Bottle"}
          date={"August 28th 2021"}
          amount="14.00"
        />
      </ul>
    </div>
  );
};

export default Expenses;
