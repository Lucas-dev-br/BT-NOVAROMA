import React from "react";
import ReactApexChart from "react-apexcharts";

function getChartColorsArray(colors) {
    colors = JSON.parse(colors);
    return colors.map(function (value) {
        var newValue = value.replace(" ", "");
        if (newValue.indexOf(",") === -1) {
            var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
            if (color.indexOf("#") !== -1)
                color = color.replace(" ", "");
            if (color) return color;
            else return newValue;
        } else {
            var val = value.split(',');
            if (val.length === 2) {
                var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
                rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                return rgbaColor;
            } else {
                return newValue;
            }
        }
    });
}

const TopArtworkChart = ({ seriesData, chartsColor }) => {
    const topartworkColors = [chartsColor];
    var options = {
        chart: {
            width: 80,
            height: 30,
            type: "line",
            sparkline: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: "smooth",
            width: 2.3,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return '';
                    }
                }
            },
            marker: {
                show: false
            }
        },
        colors: topartworkColors
    };
    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={[...seriesData]}
                type="line"
                height="30"
                width="80"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

export default TopArtworkChart;