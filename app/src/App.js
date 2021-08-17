import React from "react";
// Custom Components
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.76,
      date: new Date(),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 23.55,
      date: new Date(2021, 2, 22),
    },
    { id: "e3", title: "New TV", amount: 1820.99, date: new Date(2021, 1, 8) },
    { id: "e4", title: "Coffee", amount: 3.55, date: new Date(2021, 5, 10) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
