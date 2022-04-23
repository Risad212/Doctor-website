import React from 'react';
import './Doctors.scss';
import singleImgOne from '../../Media/xdoctor1.webp';
import singleImgTow from '../../Media/xdoctor2.webp';
import singleImgThree from '../../Media/xdoctor3.webp';
import singleImgFour from '../../Media/xdoctor4.webp';

const Doctors = () => {

    const doctors = [
        {
          img: singleImgOne,
          name: 'DR Adam Billiard',
          speacility: 'Heart specialist',
          socialIcon: [
            "fa-brands fa-facebook-f",
            "fa-brands fa-twitter",
            "fa-brands fa-instagram",
            "fa-brands fa-skype",
          ]
        },
        {
            img: singleImgTow,
            name: 'DR Adam Billiard',
            speacility: 'Medicine specialist',
            socialIcon: [
                "fa-brands fa-facebook-f",
                "fa-brands fa-twitter",
                "fa-brands fa-instagram",
                "fa-brands fa-skype",
              ]
          },
          {
            img: singleImgThree,
            name: 'DR Fred Macyard',
            speacility: 'CHeart specialist',
            socialIcon: [
                "fa-brands fa-facebook-f",
                "fa-brands fa-twitter",
                "fa-brands fa-instagram",
                "fa-brands fa-skype",
              ]
          },
          {
            img: singleImgFour,
            name: 'DR Justin Stuard',
            speacility: 'Heart specialist',
            socialIcon: [
              "fa-brands fa-facebook-f",
              "fa-brands fa-twitter",
              "fa-brands fa-instagram",
              "fa-brands fa-skype",
            ]
          },
    ]
    return (
        <div id='doctors'>
           <div className="container">
              <h2>Experienced Doctors</h2>
              <p>Face Replenish Sea Good Winged Bearing Years Air Divide WasHave Night Male Also</p>
             <div className="row">
                {
                    doctors.map(elem => {
                        return (
                            <>
                             <div className="col-lg-3 col-sm-6">
                             <div className="single-blog-item">
                                <div className="single-blog-img">
                                <img src={elem.img} alt="" />
                                    <div className="social-icons">
                                     <ul>
                                         {
                                           elem.socialIcon.map(elem => {
                                               return (
                                                   <>
                                                     <li><a href="/"><i class={`${elem}`}></i></a></li>
                                                   </>
                                               )
                                           })
                                         }
                                      </ul>
                                    </div>
                                </div>
                                <div className="single-blog-text">
                                    <h3><a href="/">{elem.name}</a></h3>
                                    <p>{elem.speacility}</p>
                                </div>
                                </div> 
                             </div>
                           </>
                        )
                    })
                }
             </div>
           </div>
        </div>
    );
};

export default Doctors;



