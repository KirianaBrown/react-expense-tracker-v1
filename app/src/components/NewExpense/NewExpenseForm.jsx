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
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);
  const [isAmountValid, setIsAmountValid] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);

  /*
  Change handlers - triggered onChange
  Receive e which provides element value
  */
  const enterDescriptionHandler = (e) => {
    if (e.target.value.trim().length === 0) {
      setIsDescriptionValid(false);
    } else {
      setEnteredDescription(e.target.value);
      setIsDescriptionValid(true);
    }
  };

  const enterAmountHandler = (e) => {
    if (e.target.value.trim().length === 0) {
      setIsAmountValid(false);
    } else {
      setEnteredAmount(e.target.value);
      setIsAmountValid(true);
    }
  };

  const enterDateHandler = (e) => {
    if (e.target.value.trim().length === 0) {
      setIsDateValid(false);
    } else {
      setEnteredDate(e.target.value);
      setIsDateValid(true);
    }
  };

  const cancelButtonHandler = () => {
    props.cancelForm();
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("the form has been submitted");

    if (!isDescriptionValid && !isAmountValid && !isDateValid) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
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
    }
  };

  return (
    <form className="newExpenseForm" onSubmit={formSubmitHandler}>
      {!isFormValid && (
        <h6 className="newExpenseForm-invalid">
          It looks' like you are missing data
        </h6>
      )}
      <div className="newExpenseGroup">
        <div className="newExpenseFormGroup form--description">
          <label>Description</label>
          <input
            className={isDescriptionValid && "good"}
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
