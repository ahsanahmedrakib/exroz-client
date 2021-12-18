import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Service from '../Service/Service';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <AboutUs />
            <Service />
            <Work />
            <Features />
            <Footer />
        </div>
    );
};

export default Home;