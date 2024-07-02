import React from 'react';
import "./header.css";
import logoLight from '../../assets/logo_light.png';

const nav_links = [
  {
    path:'#home',
    display:'Home'
  },

  {
    path:'#about',
    display:'About'
  },

  {
    path:'#services',
    display:'Services'
  },

  {
    path:'#projects',
    display:'Projects'
  },

  {
    path:'#blog',
    display:'Blog'
  },
]

const header = () => {
  return (
   <header className='header'>
    <div className="container">
        <div className="nav_wrapper">
            <div className="logo">
              <img src={logoLight} alt="Winsay Logo" className="logo_image" /> 
            </div>

            <div className="navigation">
              <ul className="menu">
                {
                  nav_links.map((item,index)=>(
                    <li className="menu_item"><a href="{item.path}" className="menu_link">{item.display}</a></li>
                  ))
                }
              </ul>
            </div>
            <div className="light_mode">
              <span><i class="ri-sun-line"></i> Light Mode</span>
            </div>      
        </div>
    </div>
   </header>
  )
}

export default header