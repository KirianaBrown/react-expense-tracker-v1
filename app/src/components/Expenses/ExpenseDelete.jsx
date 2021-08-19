import "./ExpenseDelete.css";
import deleteIcon from "../../img/icon-delete.svg";

const ExpenseDelete = (props) => {
  const clickDeleteExpenseHandler = (e) => {
    const target = e.target.closest("li");
    const key = target.getAttribute("data-key");
    props.getExpenseKeyToDelete(key);
  };

  return (
    <div type="delete" onClick={clickDeleteExpenseHandler}>
      <img src={deleteIcon} alt="delete" className="btn" />
    </div>
  );
};

export default ExpenseDelete;
