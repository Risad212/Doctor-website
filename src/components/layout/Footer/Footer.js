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
                          <li><a href='/'><i class="fa-brands fa-facebook-f"></i></a></li>
                          <li><a href='/'><i class="fa-brands fa-facebook-f"></i></a></li>
                          <li><a href='/'><i class="fa-brands fa-facebook-f"></i></a></li>
                       </ul>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Footer;