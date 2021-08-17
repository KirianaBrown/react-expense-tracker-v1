import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
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
      {filteredArray.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
