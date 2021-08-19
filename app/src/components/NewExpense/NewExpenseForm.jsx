/*
Component: NewExpenseForm
Parent: NewExpense.jsx

Info: Form to receive and handle user response. Lift state up to New Expense from props function passed down. 

*/
import { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /*
  Change handlers - triggered onChange
  Receive e which provides element value
  */
  const enterDescriptionHandler = (e) => {
    setEnteredDescription(e.target.value);
  };

  const enterAmountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const enterDateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const cancelButtonHandler = () => {
    props.cancelForm();
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("the form has been submitted");

    const newExpense = {
      description: enteredDescription,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // Pass data upto Parent Expense component
    props.saveNewExpense(newExpense);

    // Reset Values
    setEnteredDescription("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form className="newExpenseForm" onSubmit={formSubmitHandler}>
      <div className="newExpenseGroup">
        <div className="newExpenseFormGroup form--description">
          <label>Description</label>
          <input
            type="text"
            onChange={enterDescriptionHandler}
            value={enteredDescription}
          />
        </div>
        <div className="newExpenseFormGroup form--amount">
          <label>Amount</label>
          <input
            type="number"
            onChange={enterAmountHandler}
            value={enteredAmount}
          />
        </div>
      </div>
      <div className="newExpenseGroup">
        <div className="newExpenseFormGroup form--amount">
          <label>Date</label>
          <input type="date" onChange={enterDateHandler} value={enteredDate} />
        </div>
        <div className="newExpenseForm-actions">
          <button
            className="btn-cancel btn"
            type="button"
            onClick={cancelButtonHandler}
          >
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
