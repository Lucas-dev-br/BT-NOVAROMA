import React from 'react';
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

const TopReferralsPagesCharts = ({ dataColors }) => {
    const chartHeatMapColors = getChartColorsArray(dataColors);
    function generateData(count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = 'w' + (i + 1).toString();
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
    }

    const dataChart = {
        series: [{
            name: 'Jan',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Feb',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Mar',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Apr',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'May',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Jun',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Jul',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Aug',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Sep',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        }
        ],
        options: {
            chart: {
                height: 350,
                type: 'heatmap',
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false,
            },
            stroke: {
                width: 1
            },
            title: {
                text: 'HeatMap Chart with Color Range',
                style: {
                    fontWeight: 500,
                },
            },
            plotOptions: {
                heatmap: {
                    shadeIntensity: 0.5,
                    radius: 0,
                    useFillColorAsStroke: true,
                    dataLabels: {
                        enabled: false
                    },
                    colorScale: {
                        ranges: [{
                            from: -30,
                            to: 5,
                            name: 'Low',
                            color: chartHeatMapColors[0]
                        },
                        {
                            from: 6,
                            to: 20,
                            name: 'Medium',
                            color: chartHeatMapColors[1]
                        },
                        {
                            from: 21,
                            to: 45,
                            name: 'High',
                            color: chartHeatMapColors[2]
                        },
                        {
                            from: 46,
                            to: 55,
                            name: 'Extreme',
                            color: chartHeatMapColors[3]
                        }
                        ],
                    }
                }
            },

        },
    };

    return (
        <React.Fragment>
            <ReactApexChart options={dataChart.options} series={dataChart.series} type="heatmap" height={350} className="apex-charts" />
        </React.Fragment>
    );
};

export default TopReferralsPagesCharts;