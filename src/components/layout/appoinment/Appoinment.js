import React, { useState } from 'react';
import './Appoinment.scss';

const Appoinment = () => {
     const [isOpen, seIstOpen] = useState(false)
    const handleDropdown = () => {
       seIstOpen(!isOpen)
    }

    const handleDateToggle = () => {
     
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
                         <div className="date-select">
                            <span>Time</span>
                              <ul className="list" style={{opacity: `${isOpen? 1 : 0}`, transform: `${isOpen?  'scale(1)' : 'scale(0.75)'}`}}>
                                  <li>Name Of Service</li>
                                  <li>Name Of Service</li>
                                  <li>Name Of Service</li>
                                  <li>Name Of Service</li>
                                  <li>Name Of Service</li>
                              </ul>
                         </div>
                      </div>
                    </form>
                 </div>
              </div>
          </div>
      </div>
    );
};

export default Appoinment;


{/* <option selected>Select Service</option>
                           <option value="2">Name Of Service</option>
                           <option value="3">Name Of Service</option>
                           <option value="4">Name Of Service</option>
                           <option value="5">Name Of Service</option> */}