import ChartBar from './ChartBar.js'
import './Chart.css'

const Chart = props => {
    const dataPointValues = props.dataPoints.map(data => data.value)
    const maxChartValue = Math.max(...dataPointValues)
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.key}
                    value={dataPoint.value}
                    maxValue={maxChartValue}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart
