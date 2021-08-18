import React from "react";
// Custom Components
import Header from "./components/UI/Header";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const allExpenses = [
    {
      id: Math.random(),
      description: "New Book",
      date: new Date(2021, 5, 12),
      amount: "1200.00",
    },
    {
      id: Math.random(),
      description: "Computer Keyboard",
      date: new Date(2020, 10, 22),
      amount: "45.00",
    },
    {
      id: Math.random(),
      description: "Water Bottle",
      date: new Date(2019, 2, 1),
      amount: "1.50",
    },
    {
      id: Math.random(),
      description: "Record",
      date: new Date(2020, 1, 17),
      amount: "25.99",
    },
  ];

  return (
    <div>
      <Header />
      <Expenses expenses={allExpenses} />
    </div>
  );
}

export default App;
