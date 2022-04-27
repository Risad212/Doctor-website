import React from 'react';
import './CopyRight.scss';

const CopyRight = () => {
    return (
        <div id="copyRight">
          <div className="container">
             <div className="row text-md-center">
                <div className="col-xl-8 col-md-12">
                   <p>
                      Copyright ©<script>document.write(new Date().getFullYear());</script>2022 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    </p>
                 </div>
                 <div className="col-xl-4 col-md-12">
                   <ul>
                       <li><a href='/'><i class="fa-brands fa-facebook-f"></i></a></li>
                       <li><a href='/'><i class="fa-brands fa-twitter"></i></a></li>
                       <li><a href='/'><i class="fa-brands fa-instagram"></i></a></li>
                       <li><a href='/'><i class="fa-brands fa-skype"></i></a></li>
                   </ul>
                 </div>
             </div>
          </div>
     </div>
    );
};

export default CopyRight;