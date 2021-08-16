import React from "react";
// Custom Components
import Expenses from "./components/Expenses";

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
      <h1>Expense Tracker</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
