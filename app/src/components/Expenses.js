import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  // Render the individual expense items
  return (
    <div className="Expenses">
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </div>
  );
}

export default Expenses;
