import "./ChartBar.css";

const ChartBar = (props) => {
  const fill = props.amount;
  const fillPercentage = fill + "%";

  return (
    <div className="chartBar-outer">
      <div className="chartBar">
        <div
          className="chartBar--fill"
          style={{ height: fillPercentage }}
        ></div>
      </div>
      <div className="chartBarLabel">{props.label}</div>
    </div>
  );
};

export default ChartBar;
