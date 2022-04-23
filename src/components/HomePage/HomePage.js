import React from 'react';
import About from '../layout/about/About';
import Appoinment from '../layout/appoinment/Appoinment';
import Banner from '../layout/Banner/Banner';
import Depertment from '../layout/Depertment/Depertment';
import Doctors from '../layout/doctor/Doctors';
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
           <Doctors />
           <Appoinment />
        </div>
    );
};

export default HomePage;