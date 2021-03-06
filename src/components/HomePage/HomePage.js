import React from 'react';
import About from '../layout/about/About';
import Appoinment from '../layout/appoinment/Appoinment';
import Banner from '../layout/Banner/Banner';
import Blog from '../layout/Blog/Blog';
import CopyRight from '../layout/copyRight/CopyRight';
import Depertment from '../layout/Depertment/Depertment';
import Doctors from '../layout/doctor/Doctors';
import Features from '../layout/features/Features';
import Footer from '../layout/Footer/Footer';
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
           <Blog/>
           <Footer />
           <CopyRight />
        </div>
    );
};

export default HomePage;