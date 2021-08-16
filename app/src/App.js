import React from "react";
// Custom Components
import ExpenseItem from "./components/ExpenseItem";

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

  return (
    <div>
      <h1>Hello World!</h1>
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
      <ExpenseItem expense={expenses[3]} />
    </div>
  );
}

export default App;
