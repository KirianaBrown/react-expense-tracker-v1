/*
Component: NewExpense
Parent: App.jsx
Children: NewExpenseForm

Info: Container holding NewExpenseForm and is responsible for lifiting the newExpense state up to the App to be passed down to be rendered.  

*/
import NewExpenseForm from "./NewExpenseForm";

import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="newExpense">
      <NewExpenseForm />
    </div>
  );
};

export default NewExpense;
