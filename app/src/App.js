import React, { useState } from "react";
// Custom Components
import Header from "./components/UI/Header";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
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
    amount: "145.00",
  },
  {
    id: Math.random(),
    description: "Water Bottle",
    date: new Date(2019, 2, 1),
    amount: "500.50",
  },
  {
    id: Math.random(),
    description: "Record",
    date: new Date(2020, 1, 17),
    amount: "125.99",
  },
];

console.log(DUMMY_EXPENSES);

function App() {
  const [allExpenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpense = (expense) => {
    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  };

  console.log(allExpenses);

  const deleteExpense = (key) => {
    setExpenses((prevState) => {
      return prevState.filter((el) => el.id.toString() !== key);
    });
  };

  return (
    <div>
      <Header />
      <NewExpense addExpense={addNewExpense} />
      <Expenses expenses={allExpenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
