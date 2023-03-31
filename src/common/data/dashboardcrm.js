// Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";

const crmWidgets = [
    {
        id: 1,
        label: "Campaign Sent",
        badge: "ri-arrow-up-circle-line text-success",
        icon: "ri-space-ship-line",
        counter: "197",
        decimals: 0,
        suffix: "",
        prefix: ""
    },
    {
        id: 2,
        label: "Annual Profit",
        badge: "ri-arrow-up-circle-line text-success",
        icon: "ri-exchange-dollar-line",
        counter: "489.4",
        decimals: 1,
        suffix: "K",
        prefix: "$"
    },
    {
        id: 3,
        label: "Lead Coversation",
        badge: "ri-arrow-down-circle-line text-danger",
        icon: "ri-pulse-line",
        counter: "32.89",
        decimals: 2,
        suffix: "%",
        prefix: ""
    },
    {
        id: 4,
        label: "Daily Average Income",
        badge: "ri-arrow-up-circle-line text-success",
        icon: "ri-trophy-line",
        counter: "1596.5",
        decimals: 1,
        prefix: "$",
        separator: ",",
        suffix: ""
    },
    {
        id: 5,
        label: "Annual Deals",
        badge: "ri-arrow-down-circle-line text-danger",
        icon: "ri-service-line",
        counter: "2659",
        decimals: 0,
        separator: ",",
        suffix: "",
        prefix: ""
    },
];

const dealsStatus = [
    {
        id: 1,
        name: "Absternet LLC",
        date: "Sep 20, 2021",
        img: avatar1,
        representativeName: "Donald Risher",
        badgeClass: "success",
        status: "Deal Won",
        statusValue: "$100.1K",
    },
    {
        id: 2,
        name: "Raitech Soft",
        date: "Sep 23, 2021",
        img: avatar2,
        representativeName: "Sofia Cunha",
        badgeClass: "warning",
        status: "Intro Call",
        statusValue: "$150K",
    },
    {
        id: 3,
        name: "William PVT",
        date: "Sep 27, 2021",
        img: avatar3,
        representativeName: "Luis Rocha",
        badgeClass: "danger",
        status: "Stuck",
        statusValue: "$78.18K",
    },
    {
        id: 4,
        name: "Loiusee LLP",
        date: "Sep 30, 2021",
        img: avatar4,
        representativeName: "Vitoria Rodrigues",
        badgeClass: "success",
        status: "Deal Won",
        statusValue: "$180K",
    },
    {
        id: 5,
        name: "Apple Inc.",
        date: "Sep 30, 2021",
        img: avatar6,
        representativeName: "Vitoria Rodrigues",
        badgeClass: "info",
        status: "New Lead",
        statusValue: "$78.9K",
    },
];

const tasks = [
    {
        id: 1,
        forId: "task_one",
        text: "Review and make sure nothing slips through cracks",
        date: "15 Sep, 2021",
    },
    {
        id: 2,
        forId: "task_two",
        text: "Send meeting invites for sales upcampaign",
        date: "20 Sep, 2021",
    },
    {
        id: 3,
        forId: "task_three",
        text: "Weekly closed sales won checking with sales team",
        date: "24 Sep, 2021",
    },
    {
        id: 4,
        forId: "task_four",
        text: "Add notes that can be viewed from the individual view",
        date: "27 Sep, 2021",
    },
    {
        id: 5,
        forId: "task_five",
        text: "Move stuff to another page",
        date: "27 Sep, 2021",
    },
    {
        id: 6,
        forId: "task_six",
        text: "Styling wireframe design and documentation for velzon admin",
        date: "27 Sep, 2021",
    },
];

const activities = [
    {
        id: 1,
        date: "25",
        weekDay: "Tue",
        time: "12:00am - 03:30pm",
        caption: "Meeting for campaign with sales team",
        subItem: [
            { id: 1, img: avatar1 },
            { id: 2, img: avatar2 },
            { id: 3, img: avatar3 }],
        imgNumber: "5",
        bgcolor: "bg-info"
    },
    {
        id: 2,
        date: "20",
        weekDay: "Wed",
        time: "02:00pm - 03:45pm",
        caption: "Adding a new event with attachments",
        subItem: [
            { id: 1, img: avatar4 },
            { id: 2, img: avatar5 },
            { id: 3, img: avatar6 },
            { id: 4, img: avatar7 }],
        imgNumber: "3",
        bgcolor: "bg-success"
    },
    {
        id: 3,
        date: "17",
        weekDay: "Wed",
        time: "04:30pm - 07:15pm",
        caption: "Create new project Bundling Product",
        subItem: [
            { id: 1, img: avatar8 },
            { id: 2, img: avatar1 },
            { id: 3, img: avatar2 }],
        imgNumber: "4",
        bgcolor: "bg-primary"
    },
    {
        id: 4,
        date: "12",
        weekDay: "Tue",
        time: "10:30am - 01:15pm",
        caption: "Weekly closed sales won checking with sales team",
        subItem: [
            { id: 1, img: avatar1 },
            { id: 2, img: avatar5 },
            { id: 3, img: avatar2 }],
        imgNumber: "9",
        bgcolor: "bg-warning"
    },
];

const closingDeals = [
    {
        id: 1,
        dealName: "Acme Inc Install",
        img: avatar1,
        salesRep: "Donald Risher",
        amount: "96",
        closeDate: "Today",
    },
    {
        id: 2,
        dealName: "Save lots Stores",
        img: avatar2,
        salesRep: "Jansh Brown",
        amount: "55.7",
        closeDate: "30 Dec 2021",
    },
    {
        id: 3,
        dealName: "William PVT",
        img: avatar7,
        salesRep: "Ayaan Hudda",
        amount: "102",
        closeDate: "25 Nov 2021",
    },
    {
        id: 4,
        dealName: "Raitech Soft",
        img: avatar4,
        salesRep: "Julia William",
        amount: "89.5",
        closeDate: "20 Sep 2021",
    },
    {
        id: 5,
        dealName: "Absternet LLC",
        img: avatar4,
        salesRep: "Vitoria Rodrigues",
        amount: "89.5",
        closeDate: "20 Sep 2021",
    },
];

export { crmWidgets, dealsStatus, tasks, activities , closingDeals};