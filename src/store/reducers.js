import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";

//Calendar
import Calendar from "./calendar/reducer";
//Chat
import chat from "./chat/reducer";
//Ecommerce
import Ecommerce from "./ecommerce/reducer";

//Project
import Projects from "./projects/reducer";

// Tasks
import Tasks from "./tasks/reducer";
//Form advanced
import changeNumber from "./formAdvanced/reducer";

//Crypto
import Crypto from "./crypto/reducer";

//TicketsList
import Tickets from "./tickets/reducer";
//Crm
import Crm from "./crm/reducer";

//Invoice
import Invoice from "./invoice/reducer";

//Mailbox
import Mailbox from "./mailbox/reducer";

const rootReducer = combineReducers({
    // public
    Layout,
    Login,
    Account,
    ForgetPassword,
    Profile,
    Calendar,
    chat,
    Projects,
    Ecommerce,
    Tasks,
    changeNumber,
    Crypto,
    Tickets,
    Crm,
    Invoice,
    Mailbox
});

export default rootReducer;