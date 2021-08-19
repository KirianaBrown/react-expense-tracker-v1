import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const selectedFilterHandler = (e) => {
    const year = e.target.value;
    console.log(year);
    props.selectedYearPassed(year);
  };

  return (
    <div className="expensesFilter">
      <select className="expensesFilterSelect" onChange={selectedFilterHandler}>
        <option>All</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
