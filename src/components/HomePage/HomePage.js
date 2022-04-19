import React from 'react';
import About from '../layout/about/About';
import Banner from '../layout/Banner/Banner';
import Navbar from '../layout/navbar/Navbar';
const HomePage = () => {
    return (
        <div>
           <Navbar />
           <Banner />
           <About />
        </div>
    );
};

export default HomePage;