import React from 'react';

import Navbar from './navbar';
import Home from './home';
import Client from './client';
import Services from './services';
import Features from './features';
import Plans from './plans';
import Faqs from './faq';
import Reviews from './reviews';
import Counter from './counter';
import WorkProcess from './workProcess';
import Team from './team';
import Contact from './contact';
import Cta from './cta';
import Footer from './footer';

const Index = () => {
document.title =" Landing | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>            
            <div className="layout-wrapper landing">
                <Navbar />
                <Home />
                <Client />
                <Services />
                <Features />
                <Plans />
                <Faqs />
                <Reviews />
                <Counter />
                <WorkProcess />
                <Team />
                <Contact />
                <Cta />
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default Index;