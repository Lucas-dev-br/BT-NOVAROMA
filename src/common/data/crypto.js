// Import Images
import btcCoin from "../../assets/images/svg/crypto-icons/btc.svg";
import ltcCoin from "../../assets/images/svg/crypto-icons/ltc.svg";
import ethCoin from "../../assets/images/svg/crypto-icons/eth.svg";
import etcCoin from "../../assets/images/svg/crypto-icons/etc.svg";
import bnbCoin from "../../assets/images/svg/crypto-icons/bnb.svg";
import usdtCoin from "../../assets/images/svg/crypto-icons/usdt.svg";
import dashCoin from "../../assets/images/svg/crypto-icons/dash.svg";
import neoCoin from "../../assets/images/svg/crypto-icons/neo.svg";
import dogeCoin from "../../assets/images/svg/crypto-icons/doge.svg";
import aaveCoin from "../../assets/images/svg/crypto-icons/aave.svg";

import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img6 from "../../assets/images/small/img-6.jpg";

const cyptoWidgets = [
    {
        id: 1,
        icon: "ri-money-dollar-circle-fill",
        label: "Total Invested",
        counter: "2390.68",
        badge: "ri-arrow-up-s-fill",
        badgeColor: "success",
        percentage: "6.24",
        decimal: "2",
        prefix: "$",
        separator: ","
    },
    {
        id: 2,
        icon: "ri-arrow-up-circle-fill",
        label: "Total Change",
        counter: "19523.25",
        badge: "ri-arrow-up-s-fill",
        badgeColor: "success",
        percentage: "3.67",
        decimal: "2",
        prefix: "$",
        separator: ","
    },
    {
        id: 3,
        icon: "ri-arrow-down-circle-fill",
        label: "Day Change",
        counter: "14799.44",
        badge: "ri-arrow-down-s-fill",
        badgeColor: "danger",
        percentage: "4.80",
        decimal: "2",
        prefix: "$",
        separator: ","
    },
];

const cryptoSlider = [
    {
        id: 1,
        img: btcCoin,
        label: "Bitcoin",
        price: "$1,523,647",
        change: "+13.11%",
        changeClass: "success",
        coinName: "btc",
        chartsColor: "#13c56b",
        series: [{
            name: "Bitcoin",
            data: [85, 68, 35, 90, 8, 11, 26, 54]
        }],
    },
    {
        id: 2,
        img: ltcCoin,
        label: "Litecoin",
        price: "$2,145,687",
        change: "+15.08%",
        changeClass: "success",
        coinName: "ltc",
        chartsColor: "#13c56b",
        series: [{
            name: "Litecoin",
            data: [25, 50, 41, 87, 12, 36, 9, 54]
        }]
    },
    {
        id: 3,
        img: etcCoin,
        label: "Eathereum",
        price: "$3,312,870",
        change: "+08.57%",
        changeClass: "success",
        coinName: "etc",
        chartsColor: "#13c56b",
        series: [{
            name: "Eathereum",
            data: [36, 21, 65, 22, 35, 50, 29, 44]
        }],
    },
    {
        id: 4,
        img: bnbCoin,
        label: "Binance",
        price: "$1,820,045",
        change: "-09.21%",
        changeClass: "danger",
        coinName: "bnb",
        chartsColor: "#ed5e5e",
        series: [{
            name: "Binance",
            data: [30, 58, 29, 89, 12, 36, 9, 54]
        }],
    },
    {
        id: 5,
        img: dashCoin,
        label: "Dash",
        price: "$9,458,153",
        change: "+12.07%",
        changeClass: "success",
        coinName: "dash",
        chartsColor: "#13c56b",
        series: [{
            name: "Dash",
            data: [24, 68, 39, 86, 29, 42, 11, 58]
        }],
    },
    {
        id: 6,
        img: usdtCoin,
        label: "Tether",
        price: "$5,201,458",
        change: "+14.99%",
        changeClass: "success",
        coinName: "usdt",
        chartsColor: "#13c56b",
        series: [{
            name: "Dash",
            data: [13, 76, 12, 85, 25, 60, 9, 54]
        }],
    },
    {
        id: 7,
        img: neoCoin,
        label: "NEO",
        price: "$6,147,957",
        change: "-05.07%",
        changeClass: "danger",
        coinName: "neo",
        chartsColor: "#ed5e5e",
        series: [{
            name: "Neo",
            data: [9, 66, 41, 89, 12, 36, 25, 54]
        }],
    },
];

const currencies = [
    {
        id: 1,
        img: btcCoin,
        coinName: "Bitcoin",
        price: "48,568.025",
        iconClass: "success",
        icon: "mdi mdi-trending-up",
        change: "5.26",
        balance: "53,914.025",
        totalCoin: "1.25634801",
    },
    {
        id: 2,
        img: ltcCoin,
        coinName: "Litecoin",
        price: "87,142.027",
        iconClass: "danger",
        icon: "mdi mdi-trending-down",
        change: "3.07",
        balance: "75,854.127",
        totalCoin: "2.85472161",
    },
    {
        id: 3,
        img: ethCoin,
        coinName: "Eathereum",
        price: "33,847.961",
        iconClass: "success",
        icon: "mdi mdi-trending-up",
        change: "7.13",
        balance: "44,152.185",
        totalCoin: "1.45612347",
    },
    {
        id: 4,
        img: bnbCoin,
        coinName: "Binance",
        price: "73,654.421",
        iconClass: "success",
        icon: "mdi mdi-trending-up",
        change: "0.97",
        balance: "48,367.125",
        totalCoin: "0.35734601",
    },
    {
        id: 5,
        img: usdtCoin,
        coinName: "Tether",
        price: "66,742.077",
        iconClass: "danger",
        icon: "mdi mdi-trending-down",
        change: "1.08",
        balance: "53,487.083",
        totalCoin: "3.62912570",
    },
    {
        id: 6,
        img: dashCoin,
        coinName: "Dash",
        price: "34,736.209",
        iconClass: "success",
        icon: "mdi mdi-trending-up",
        change: "4.52",
        balance: "15,203.347",
        totalCoin: "1.85412740",
    },
    {
        id: 7,
        img: neoCoin,
        coinName: "Neo",
        price: "56,357.313",
        iconClass: "danger",
        icon: "mdi mdi-trending-down",
        change: "2.87",
        balance: "61,843.173",
        totalCoin: "1.87732061",
    },
    {
        id: 8,
        img: dogeCoin,
        coinName: "Dogecoin",
        price: "62,357.649",
        iconClass: "success",
        icon: "mdi mdi-trending-up",
        change: "3.45",
        balance: "54,843.173",
        totalCoin: "0.95632087",
    },
];

const recentActivity = [
    { id: 1, date: "25 Dec 2021", isDate: true },
    {
        id: 2,
        feaIcon: "arrow-down-circle",
        feaIconClass: "success",
        label: "Bought Bitcoin",
        caption: "Visa Debit Card ***6",
        captionColor: "success",
        coinActivity: "+0.04025745",
        coinActivityClass: "success",
        coinName: "Btc",
        price: "+878.52",
    },
    {
        id: 3,
        feaIcon: "send",
        feaIconClass: "warning",
        label: "Sent Eathereum",
        caption: " Sofia Cunha",
        captionColor: "warning",
        coinActivity: "-0.09025182",
        coinActivityClass: "muted",
        coinName: "Eth",
        price: "-659.35",
    },
    { id: 4, date: "24 Dec 2021", isDate: true },
    {
        id: 5,
        feaIcon: "arrow-up-circle",
        feaIconClass: "danger",
        label: "Sell Dash",
        caption: "www.cryptomarket.com",
        captionColor: "danger",
        coinActivity: "-98.6025422",
        coinActivityClass: "danger",
        coinName: "Dash",
        price: "-1508.98",
    },
    {
        id: 6,
        feaIcon: "arrow-up-circle",
        feaIconClass: "danger",
        label: "Sell Dogecoin",
        caption: "www.coinmarket.com",
        captionColor: "success",
        coinActivity: "-1058.08025142",
        coinActivityClass: "danger",
        coinName: "Doge",
        price: "-89.3",
    },
    {
        id: 7,
        feaIcon: "arrow-up-circle",
        feaIconClass: "success",
        label: "Bought Litecoin",
        caption: "Payment via Wallet",
        captionColor: "warning",
        coinActivity: "+0.07225912",
        coinActivityClass: "success",
        coinName: "Ltc",
        price: "+759.45",
    },
    { id: 8, date: "20 Dec 2021", isDate: true },
    {
        id: 9,
        feaIcon: "send",
        feaIconClass: "warning",
        label: "Sent Eathereum",
        caption: " Sofia Cunha",
        captionColor: "warning",
        coinActivity: "-0.09025182",
        coinActivityClass: "muted",
        coinName: "Eth",
        price: "-659.35",
    },
    {
        id: 10,
        feaIcon: "arrow-down-circle",
        feaIconClass: "success",
        label: "Bought Bitcoin",
        caption: "Visa Debit Card ***6",
        captionColor: "success",
        coinActivity: "+0.04025745",
        coinActivityClass: "success",
        coinName: "Btc",
        price: "+878.52",
    },
];

const topPerformers = [
    {
        id: 1,
        img: btcCoin,
        coinName: "Bitcoin",
        marketCap: "18.7",
        price: "12,863.08",
        change: "+$67.21",
        textColor: "success",
        percentage: "+4.33%",
    },
    {
        id: 2,
        img: ethCoin,
        coinName: "Eathereum",
        marketCap: "27.4",
        price: "08,256.04",
        change: "+$51.19",
        textColor: "success",
        percentage: "+5.64%",
    },
    {
        id: 3,
        img: aaveCoin,
        coinName: "Avalanche",
        marketCap: "12.9",
        price: "11,896.13",
        change: "-$59.01",
        textColor: "danger",
        percentage: "-4.08%",
    },
    {
        id: 4,
        img: dogeCoin,
        coinName: "Dogecoin",
        marketCap: "09.5",
        price: "15,999.06",
        change: "+$74.05",
        textColor: "success",
        percentage: "+3.12%",
    },
    {
        id: 5,
        img: bnbCoin,
        coinName: "Binance",
        marketCap: "14.2",
        price: "13,786.18",
        change: "-$61.05",
        textColor: "danger",
        percentage: "-9.22%",
    },
    {
        id: 6,
        img: ltcCoin,
        coinName: "Litecoin",
        marketCap: "09.5",
        price: "10,604.27",
        change: "+$76.12",
        textColor: "success",
        percentage: "+4.92%",
    },
];

const newsFeed = [
    {
        id: 1,
        img: img1,
        caption:
            "One stop shop destination on all the latest news in crypto currencies",
        date: "Dec 12, 2021",
        time: "09:22 AM",
    },
    {
        id: 2,
        img: img2,
        caption:
            "Coin Journal is dedicated to delivering stories on the latest crypto",
        date: "Dec 03, 2021",
        time: "12:09 PM",
    },
    {
        id: 3,
        img: img3,
        caption:
            "The bitcoin-holding U.S. senator is trying to “fully integrate” crypto ",
        date: "Nov 22, 2021",
        time: "11:47 AM",
    },
    {
        id: 4,
        img: img6,
        caption:
            "Cryptocurrency price like Bitcoin, Dash, Dogecoin, Ripple and Litecoin",
        date: "Nov 18, 2021",
        time: "06:13 PM",
    },
];
export { cyptoWidgets, currencies, recentActivity, topPerformers, newsFeed, cryptoSlider };
