import React from 'react';
import FooterLogo from '../../Media/footerLogo.webp';
import './Footer.scss';

const Footer = () => {
    return (
        <div id='footer'>
           <div className="container">
               <div className="row">
                   <div className="col-xl-2 col-md-4 col-sm-6 footer-single-weight">
                      <a href='/' className='footer-logo'><img src={FooterLogo} alt="" /></a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                       <ul>
                          <li><a href='/'><i class="fa-brands fa-facebook-f"></i></a></li>
                          <li><a href='/'><i class="fa-brands fa-twitter"></i></a></li>
                          <li><a href='/'><i class="fa-brands fa-instagram"></i></a></li>
                          <li><a href='/'><i class="fa-brands fa-skype"></i></a></li>
                       </ul>
                   </div>
                    <div className="col-xl-2 col-md-4 col-sm-6 footer-single-weight weight-style">
                        <h3>Quick Links</h3>
                         <ul>
                             <li><a href="#">About Us</a></li>
                             <li><a href="#">Department</a></li>
                             <li><a href="#">Online payment</a></li>
                             <li><a href="#">Careers</a></li>
                             <li><a href="#">Department</a></li>
                         </ul>
                    </div>
                    <div className="col-xl-2 col-md-4 col-sm-6 footer-single-weight weight-style">
                        <h3>Explore</h3>
                         <ul>
                             <li><a href="#">In the community</a></li>
                             <li><a href="#">IU health foundation</a></li>
                             <li><a href="#">Business solution</a></li>
                             <li><a href="#">Family support</a></li>
                             <li><a href="#">Community clinic</a></li>
                         </ul>
                    </div>
                    <div className="col-xl-2 col-md-6 col-sm-6 footer-single-weight weight-style">
                        <h3>Resources</h3>
                         <ul>
                             <li><a href="#">Lights were season</a></li>
                             <li><a href="#">Their is let wherein</a></li>
                             <li><a href="#">which given over</a></li>
                             <li><a href="#">Without given She</a></li>
                             <li><a href="#">Isn two signs think</a></li>
                         </ul>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 footer-single-weight">
                        <h3>Newsletter</h3>
                        <p>Seed good winged wherein which night multiply midst does not fruitful</p>
                         <div className="form-box">
                            <input type="text" placeholder='Your Email Address'/>
                            <button><i class="fa-solid fa-angle-right"></i></button>
                         </div>
                    </div>
               </div>
           </div>
        </div>
    );
};

export default Footer;