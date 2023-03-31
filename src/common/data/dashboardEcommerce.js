// Import Images
import product1 from "../../assets/images/products/img-1.png";
import product2 from "../../assets/images/products/img-2.png";
import product3 from "../../assets/images/products/img-3.png";
import product4 from "../../assets/images/products/img-4.png";
import product5 from "../../assets/images/products/img-5.png";

import company1 from "../../assets/images/companies/img-1.png";
import company2 from "../../assets/images/companies/img-2.png";
import company3 from "../../assets/images/companies/img-3.png";
import company5 from "../../assets/images/companies/img-5.png";
import company8 from "../../assets/images/companies/img-8.png";

import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";

const ecomWidgets = [
    {
        id: 1,
        label: "Total Earnings",
        badge: "ri-arrow-right-up-line",
        badgeClass: "success",
        percentage: "+16.24",
        counter: "559.25",
        link: "View net earnings",
        bgcolor: "success",
        icon: "bx bx-dollar-circle",
        decimals: 2,
        prefix: "$",
        suffix: "k"
    },
    {
        id: 2,
        label: "Orders",
        badge: "ri-arrow-right-down-line",
        badgeClass: "danger",
        percentage: "-3.57",
        counter: "36894",
        link: "View all orders",
        bgcolor: "info",
        icon: "bx bx-shopping-bag",
        decimals: 0,
        prefix: "",
        separator: ",",
        suffix: ""
    },
    {
        id: 3,
        label: "Customers",
        badge: "ri-arrow-right-up-line",
        badgeClass: "success",
        percentage: "+29.08",
        counter: "183.35",
        link: "See details",
        bgcolor: "warning",
        icon: "bx bx-user-circle",
        decimals: 2,
        prefix: "",
        suffix: "M"
    },
    {
        id: 4,
        label: "My Balance",
        badgeClass: "muted",
        percentage: "+0.00",
        counter: "165.89",
        link: "Withdraw money",
        bgcolor: "primary",
        icon: "bx bx-wallet",
        decimals: 2,
        prefix: "$",
        suffix: "k"
    },
];

const bestSellingProducts = [
    {
        id: 1,
        img: product1,
        label: "Branded T-Shirts",
        date: "24 Apr 2021",
        price: "29.00",
        orders: 62,
        stock: 510,
        amount: "1,798",
    },
    {
        id: 2,
        img: product2,
        label: "Bentwood Chair",
        date: "19 Mar 2021",
        price: "85.20",
        orders: 35,
        amount: "2982",
    },
    {
        id: 3,
        img: product3,
        label: "Borosil Paper Cup",
        date: "01 Mar 2021",
        price: "14.00",
        orders: 80,
        stock: 749,
        amount: "1120",
    },
    {
        id: 4,
        img: product4,
        label: "One Seater Sofa",
        date: "11 Feb 2021",
        price: "127.50",
        orders: 56,
        amount: "7140",
    },
    {
        id: 5,
        img: product5,
        label: "Stillbird Helmet",
        date: "17 Jan 2021",
        price: "54",
        orders: 74,
        stock: 805,
        amount: 3996,
    },
];

const topSellers = [
    {
        id: 1,
        img: company1,
        label: "iTest Factory",
        name: "Oliver Tyler",
        product: "Bags and Wallets",
        stock: 8547,
        amount: 541200,
        percentage: 32,
    },
    {
        id: 2,
        img: company2,
        label: "Digitech Galaxy",
        name: "John Roberts",
        product: "Watches",
        stock: 895,
        amount: 75030,
        percentage: 79,
    },
    {
        id: 3,
        img: company3,
        label: "Nesta Technologies",
        name: "Harley Fuller",
        product: "Bike Accessories",
        stock: 3470,
        amount: 45600,
        percentage: 90,
    },
    {
        id: 4,
        img: company8,
        label: "Zoetic Fashion",
        name: "James Bowen",
        product: "Clothes",
        stock: 5488,
        amount: 29456,
        percentage: 40,
    },
    {
        id: 5,
        img: company5,
        label: "Meta4Systems",
        name: "Zoe Dennis",
        product: "Furniture",
        stock: 4100,
        amount: 11260,
        percentage: 57,
    },
];

const recentOrders = [
    {
        id: 1,
        orderId: "#VZ2112",
        img: avatar1,
        name: "Alex Smith",
        product: "Clothes",
        amount: "109.00",
        vendor: "Zoetic Fashion",
        status: "Paid",
        statusClass: "success",
        rating: "5.0",
        votes: "61",
    },
    {
        id: 2,
        orderId: "#VZ2111",
        img: avatar2,
        name: "Jansh Brown",
        product: "Kitchen Storage",
        amount: "149.00",
        vendor: "Micro Design",
        status: "Pending",
        statusClass: "warning",
        rating: "4.5",
        votes: "61",
    },
    {
        id: 3,
        orderId: "#VZ2109",
        img: avatar3,
        name: "Ayaan Bowen",
        product: "Bike Accessories",
        amount: "215.00",
        vendor: "Nesta Technologies",
        status: "Paid",
        statusClass: "success",
        rating: "4.9",
        votes: "89",
    },
    {
        id: 4,
        orderId: "#VZ2108",
        img: avatar4,
        name: "Prezy Mark",
        product: "Furniture",
        amount: "199.00",
        vendor: "Syntyce Solutions",
        status: "Unpaid",
        statusClass: "danger",
        rating: "4.3",
        votes: "47",
    },
    {
        id: 5,
        orderId: "#VZ2107",
        img: avatar6,
        name: "Vihan Hudda",
        product: "Bags and Wallets",
        amount: "330.00",
        vendor: "iTest Factory",
        status: "Paid",
        statusClass: "success",
        rating: "4.7",
        votes: "161",
    },
];

const topCategories = [
    {
        id: 1,
        category: "Mobile & Accessories",
        total: "10,294",
    },
    {
        id: 2,
        category: "Desktop",
        total: "6,256",
    },
    {
        id: 3,
        category: "Electronics",
        total: "3,479",
    },
    {
        id: 4,
        category: "Home & Furniture",
        total: "2,275",
    },
    {
        id: 5,
        category: "Grocery",
        total: "1,950",
    },
    {
        id: 6,
        category: "Fashion",
        total: "1,582",
    },
    {
        id: 7,
        category: "Appliances",
        total: "1,037",
    },
    {
        id: 8,
        category: "Beauty, Toys & More",
        total: "924",
    },
    {
        id: 9,
        category: "Food & Drinks",
        total: "701",
    },
    {
        id: 10,
        category: "Toys & Games",
        total: "239",
    },
];

export { ecomWidgets, bestSellingProducts, topSellers, recentOrders, topCategories };