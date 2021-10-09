import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dpoint) => dpoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dpoint) => (
        <ChartBar
          key={dpoint.label}
          value={dpoint.value}
          maxValue={totalMaximum}
          label={dpoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
