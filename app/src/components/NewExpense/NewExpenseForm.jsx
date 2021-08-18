/*
Component: NewExpenseForm
Parent: NewExpense.jsx

Info: Form to receive and handle user response. Lift state up to New Expense from props function passed down. 

*/
import "./NewExpenseForm.css";

const NewExpenseForm = () => {
  return (
    <form className="newExpenseForm">
      <div className="newExpenseGroup">
        <div className="newExpenseFormGroup form--description">
          <label>Description</label>
          <input type="text" />
        </div>
        <div className="newExpenseFormGroup form--amount">
          <label>Amount</label>
          <input type="number" />
        </div>
      </div>
      <div className="newExpenseGroup">
        <div className="newExpenseFormGroup form--amount">
          <label>Date</label>
          <input type="date" />
        </div>
        <div className="newExpenseForm-actions">
          <button className="btn-cancel btn" type="button">
            Cancel
          </button>
          <button className="btn-add btn" type="submit">
            Add New Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
