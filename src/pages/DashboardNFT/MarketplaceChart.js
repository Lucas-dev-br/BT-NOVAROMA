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

const MarketplaceChart = ({ dataColors }) => {
    var MarketplaceChartColors = getChartColorsArray(dataColors);
    const series = [{
        name: "Artwork",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    },
    {
        name: "Auction",
        data: [40, 120, 83, 45, 31, 74, 35, 34, 78]
    },
    {
        name: "Creators",
        data: [95, 35, 20, 130, 64, 22, 43, 45, 31]
    }];
    var options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        // markers: {
        //     size: 4,
        // },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        colors: MarketplaceChartColors,
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height="350"
                className="apex-charts"
            />
        </React.Fragment>
    );
};
export default MarketplaceChart;