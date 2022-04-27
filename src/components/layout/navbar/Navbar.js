import React, { useState } from 'react';
import './Navbar.css'
import Logo from '../../Media/logo.png';



const Navbar = () => {
       const [fixedMenu, setFixedMenu] = useState(false)
   // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {scrollFunction()};
     
      function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
         setFixedMenu(true)
      } else {
         setFixedMenu(false)
      }
   }

    return (
        <div id='navbar' className={fixedMenu? 'fixed_menu animate__animated animate__fadeInDown': ''}>
          <div className="container">
           <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="/"><img src={Logo} alt="" /></a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                 <div class="collapse navbar-collapse" id="navbarNav">
                   <ul class="navbar-nav">
                     <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/">About</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/">Doctors</a>
                     </li>
                     <li class="nav-item dropdown">
                       <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Pages
                       </a>
                       {/* ---- dropdown menu ----*/}
                       <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                         <li><a class="dropdown-item" href="/">Services</a></li>
                         <li><a class="dropdown-item" href="/">Depertment</a></li>
                         <li><a class="dropdown-item" href="/">Elements</a></li>
                       </ul>
                     </li>
                     <li class="nav-item dropdown">
                       <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Blog
                       </a>
                       {/* ---- dropdown menu ----*/}
                       <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                         <li><a class="dropdown-item" href="/">Blog</a></li>
                         <li><a class="dropdown-item" href="/">Single Blog</a></li>
                       </ul>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/">Contact</a>
                     </li>
                    </ul>
                 </div>
                 <a class="nav-link button" aria-current="page" href="/">HOT LINE- 09856</a>
              </div>
            </nav>
        </div>
     </div>
    );
};

export default Navbar;