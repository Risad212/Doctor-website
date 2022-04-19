import React from 'react';
import './About.scss';
import aboutImage from '../../Media/about-single.jpg';
import iconOne from '../../Media/banner_1.svg';
import iconTow from '../../Media/banner_2.svg';
import iconThree from '../../Media/banner_3.svg';

const About = () => {
    const aboutSingle = [
       {
          icon: iconOne,
          name: 'Emergency'
       },
       {
         icon: iconTow,
         name: 'Appointment'
      },
      {
         icon: iconThree,
         name: 'Qualfied'
      },
    ]
    return (
        <div id='about'>
           <div className="container">
              <div className="row">
                 <div className="col-md-6 col-lg-6 gx-5">
                    <img src={aboutImage} alt="" />
                 </div>
                 <div className="col-md-6 col-lg-5 gx-5">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida. 
                        Risus cmodo viverra maecenas accumsan lacus velLEARN MORE</p>
                       <button><a href="/">learn more</a></button>
                       <div className="aboutIconlist">
                          {
                           aboutSingle.map(elem => {
                              return (
                                 <div className="singleItem">
                                    <img src={elem.icon} alt="" />
                                     <h4>{elem.name}</h4>
                                 </div>
                              )
                           })
                          }   
                     </div>
                 </div>
              </div>
           </div>
        </div>
    );
};

export default About;