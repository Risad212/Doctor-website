import React from 'react';
import About from '../layout/about/About';
import Banner from '../layout/Banner/Banner';
import Depertment from '../layout/Depertment/Depertment';
import Features from '../layout/features/Features';
import Navbar from '../layout/navbar/Navbar';
const HomePage = () => {
    return (
        <div>
           <Navbar />
           <Banner />
           <About />
           <Features />
           <Depertment />
        </div>
    );
};

export default HomePage;