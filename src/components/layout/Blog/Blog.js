import React from 'react';
import './Blog.scss';
import BlogOneImg from '../../Media/xblog_2.png';
import BlogTowImg from '../../Media/xblog_1.png';

const Blog = () => {
    const blogContent = [
        {
          img: BlogOneImg,
          title: 'First cattle which earth unto let health for can get and see what you',
          doctorName: 'Jhone Mike',
          doctorPosition: 'CLINIC, DOCTORS',
        },
        {
            img: BlogTowImg,
            title: 'First cattle which earth unto let health for can get and see what you',
            doctorName: 'Jhone Mike',
            doctorPosition: 'CLINIC, DOCTORS',
          },
    ]
    return (
        <div id="blog">
           <div className="container">
              <h2>Our Blog</h2>
                <div className="container">
                  <div className="row pt-5 container">
                    {blogContent.map(elem => {
                      return (
                          <>
                           <div className="col-md-6 col-sm-12 mb-5">
                             <div className="single-blog">
                               <div class="card">
                                 <img class="card-img-top" src={elem.img} alt="Blog" />
                                    <div class="card-body">
                                       <a href="/">
                                          <h5>{elem.title}</h5>
                                         </a>
                                          <ul className='d-flex'>
                                            <li><i class="fa-solid fa-user pe-2"></i>{elem.doctorName}</li>
                                            <li><i class="fa-solid fa-bookmark pe-2"></i>{elem.doctorPosition}</li>
                                          </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </>
                      )
                  })}
               </div>
               </div>
           </div>
        </div>
    );
};

export default Blog;

