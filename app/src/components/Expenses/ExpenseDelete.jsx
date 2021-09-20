import "./ExpenseDelete.css";

const ExpenseDelete = (props) => {
  const clickDeleteExpenseHandler = (e) => {
    const target = e.target.closest("li");
    const key = target.getAttribute("data-key");
    props.getExpenseKeyToDelete(key);
  };

  return (
    <div type="delete" onClick={clickDeleteExpenseHandler}>
      <div className="btn-delete-item">x</div>
    </div>
  );
};

export default ExpenseDelete;
