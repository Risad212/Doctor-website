import React, { useState } from 'react';
import './Appoinment.scss';
import Doctorimg from '../../Media/doctor.webp';

const Appoinment = () => {
     const [isOpen, seIstOpen] = useState(false)
     const [toggle, setToggle] = useState(false)

    const handleDropdown = () => {
       seIstOpen(!isOpen)
    }

    const handleDateToggle = () => {
     setToggle(!toggle)
    }
    return (
        <div id="appoinment">
          <div className="container">
             <div className="row">
               <div className="col-lg-7">
                  <h3>Make an Appointment</h3>
                   <form class="row g-3">
                    <div class="col-md-6">
                        <input type="email" class="form-control" id="inputEmail4" placeholder='Email'/>
                     </div>
                      <div class="col-md-6">
                        <input type="password" class="form-control" id="inputPassword4" placeholder='Password'/>
                      </div>
                       <div class="col-md-6">
                         <div className={`nice-select ${isOpen? 'show': ''}`} onClick={handleDropdown}>
                            <span>Select Service</span>
                              <ul className="list" style={{opacity: `${isOpen? 1 : 0}`, transform: `${isOpen?  'scale(1)' : 'scale(0.75)'}`}}>
                                  <li>Name Of Service</li>
                                  <li>Name Of Service</li>
                                  <li>Name Of Service</li>
                                  <li>Name Of Service</li>
                                  <li>Name Of Service</li>
                              </ul>
                         </div>
                      </div>
                      <div class="col-md-6">
                         <div className={`date-select ${toggle? 'show': ''}`} onClick={handleDateToggle}>
                            <span>Time</span>
                              <ul className="list" style={{opacity: `${toggle? 1 : 0}`, transform: `${toggle?  'scale(1)' : 'scale(0.75)'}`}}>
                                  <li>8AM To 10PM</li>
                                  <li>8AM To 10PM</li>
                                  <li>8AM To 10PM</li>
                                  <li>8AM To 10PM</li>
                                  <li>8AM To 10PM</li>
                              </ul>
                         </div>
                      </div>
                      <div className="col-12">
                         <textarea placeholder='Your Note'></textarea>
                      </div>
                        <div className="submitBtn">
                           <input type="submit" value="Make an Appointment"/>
                        </div>
                    </form>
                 </div>
                 <div className="col-lg-5">
                     <div className="doctor-img">
                       <img src={Doctorimg} alt="" className='doctorImgInner'/>
                    </div>
                 </div>
              </div>
          </div>
      </div>
    );
};

export default Appoinment;


