/*
Component: NewExpense
Parent: App.jsx
Children: NewExpenseForm

Info: Container holding NewExpenseForm and is responsible for lifiting the newExpense state up to the App to be passed down to be rendered.  

*/
import { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [formDisplayed, setformDisplayed] = useState(false);

  const receiveNewExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random(),
    };

    console.log(newExpense);

    props.addExpense(newExpense);
    clickCloseFormHandler();
  };

  const clickOpenFormHandler = () => {
    setformDisplayed(true);
  };

  const clickCloseFormHandler = () => {
    setformDisplayed(false);
  };

  return (
    <div className="newExpense">
      {!formDisplayed && (
        <div className="open-btn">
          <button className="btn btn-open" onClick={clickOpenFormHandler}>
            Add New Expense
          </button>
        </div>
      )}
      {formDisplayed && (
        <NewExpenseForm
          saveNewExpense={receiveNewExpense}
          cancelForm={clickCloseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
