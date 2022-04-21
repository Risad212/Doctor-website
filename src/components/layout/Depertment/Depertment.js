import React from 'react';
import './Depertment.scss';
import DepartmentIcon from '../../Media/feature_2.svg'

const Depertment = () => {
    const depertmentData = [
        {
          icon: DepartmentIcon,
          title: 'Better Future',
          disc: 'Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.'
        },
        {
            icon: DepartmentIcon,
            title: 'Better Future',
            disc: 'Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.'
        },
        {
            icon: DepartmentIcon,
            title: 'Better Future',
            disc: 'Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.'
        },
        {
            icon: DepartmentIcon,
            title: 'Better Future',
            disc: 'Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.'
        },
    ]
    return (
        <div id="depertment">
          <div className="container">
             <div className="row justify-content-center text-center">
                <div className="col-xl-12">
                   <div className="deparment_content">
                      <div className="row justify-content-center">
                         <div className="col-xl-8">
                            <h2>Our Depertment</h2>
                             <div className="row">
                               {
                                depertmentData.map(elem => {
                                    return(
                                        <>
                                          <div className="col-lg-6 col-sm-6">
                                            <div className="single-department">
                                            <span className="our-department-icon">
                                                <img src={elem.icon} alt="" />
                                                </span>
                                                <h4>{elem.title}</h4>
                                                <p>{elem.disc}</p>
                                            </div>
                                            </div>
                                        </>
                                    )
                                })
                               }
                             </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
    );
};

export default Depertment;


