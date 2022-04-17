import React from 'react';
import './Banner.scss';
import HeroImage from '../../Media/hero.png'
const Banner = () => {
    return (
        <div id="banner">
          <div className="container">
             <div className="row">
                <div className="col-lg-5 banner-content">
                   <span>We Are Here For Your Care</span>
                   <h1>Best Care & Better Doctor</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor 
                       incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices 
                       gravida.Risus cmodo viverra</p>
                       <button><a href="/">Make an appointment</a></button>
                </div>
                <div className="col-lg-7 heroImg">
                   <img src={HeroImage} alt="" />
                </div>
             </div>
          </div>
        </div>
    );
};

export default Banner;