import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li className="expenseItem">
      <div className="expenseItem-date">{props.date}</div>
      <h3 className="expenseItem-description">{props.description}</h3>
      <h4 className="expenseItem-amount">${props.amount}</h4>
    </li>
  );
};

export default ExpenseItem;
