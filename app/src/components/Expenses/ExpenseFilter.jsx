import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  // OnChange update state value and pass this state value upto the Expense component

  const selectChangeHandler = (e) => {
    const selectedYear = e.target.value;

    // Pass the value to the Expense parent
    props.onSelectedDate(selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectChangeHandler} value={props.selectedYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
