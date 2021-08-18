import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  // Render the individual expense items
  const saveSelectedFilterDate = (selectedDate) => {
    console.log(`Selected date: ${selectedDate}`);
    setFilteredYear(selectedDate);
  };

  const filteredArray = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        onSelectedDate={saveSelectedFilterDate}
        selectedYear={filteredYear}
      />
      <ExpensesChart expenses={filteredArray} />
      <ExpensesList items={filteredArray} />
    </Card>
  );
}

export default Expenses;
