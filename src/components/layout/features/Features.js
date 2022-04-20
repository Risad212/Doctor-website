import React from 'react';
import './Features.scss';
import featureOne from '../../Media/feature_1.svg';
import featureTow from '../../Media/feature_2.svg';
import singleFeateImage from '../../Media/xservice.png.pagespeed.ic.eApuqSmIa_.webp'

const Features = () => {
    const featureData = [
     {
       icon: featureOne,
       title: 'Better Future',
       disc: 'Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.'
    },
    {
      icon: featureTow,
      title: 'Better Future',
      disc: 'Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.'
   },
 ]
    return (
        <div id="features">
          <div className="container">
             <h2>Our services</h2>
              <div className="row d-flex justify-content-center align-items-center">
                 <div className="col-lg-3 col-sm-12 gx-5">
                    {featureData.map(elem => {
                       return (
                         <div className="single_feature">
                            <span><img src={elem.icon} alt="" /></span>
                             <h4>{elem.title}</h4>
                              <p>{elem.disc}</p> 
                           </div>
                           )
                       })}
                 </div>
                 <div className="col-lg-4 col-sm-12 gx-5 text-center">
                    <div className="single_feature_img">
                       <img src={singleFeateImage} alt="" />
                    </div>
                 </div>
                 <div className="col-lg-3 col-sm-12 gx-5">
                    {featureData.map(elem => {
                       return (
                         <div className="single_feature">
                            <span><img src={elem.icon} alt="" /></span>
                             <h4>{elem.title}</h4>
                              <p>{elem.disc}</p> 
                           </div>
                           )
                       })}
                 </div>
              </div>
           </div>
        </div>
    );
};

export default Features;


                       


