import './Chart.css'
import ChatBar from "./ChatBar";

export const Chart = (props) => {
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChatBar
                    key={dataPoint.label}
                    maxValue={null}
                    label={dataPoint.label}
                />
            )}
        </div>
    )
}
export default Chart;
