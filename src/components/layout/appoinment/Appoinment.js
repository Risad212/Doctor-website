import React from 'react';
import './Appoinment.scss';

const Appoinment = () => {
    return (
        <div id="appoinment">
          <div className="container">
             <div className="row">
                 <div className="col-lg-7">
                    <h3>Make an Appointment</h3>
                     <div>
                         <input type="text" placeholder='Name'/>
                         <input type="text" placeholder='Email address'/>
                     </div>
                     <textarea name="" id="" cols="30" rows="10"></textarea>
                     <input type="submit" value="Submit" />
                 </div>
             </div>
          </div>
        </div>
    );
};

export default Appoinment;