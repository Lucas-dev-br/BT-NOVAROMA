import React from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import Connect from './Connect';
import Products from "./Products";
import Features from './Features';
import Trending from "./Trending ";
import DiscoverItems from "./DiscoverItems";
import TopCreator from "./TopCreator ";
import CTA from './CTA';
import Footer from "./footer";

const index = () => {
    document.title = " Landing | Velzon - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="layout-wrapper landing">
                <Navbar />
                <Home />
                <Connect />
                <Products />
                <Features />
                <Trending />
                <DiscoverItems />
                <TopCreator />
                <CTA />
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default index;