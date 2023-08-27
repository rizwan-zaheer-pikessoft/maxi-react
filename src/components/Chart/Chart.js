import './Chart.css'
import ChatBar from "./ChatBar";

export const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => {
        return dataPoint.value
    });
    console.log(dataPointValues);
    const maxValue = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChatBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxValue}
                    label={dataPoint.label}
                />
            )}
        </div>
    )
}
export default Chart;
