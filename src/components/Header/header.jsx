import React from 'react';
import "../../styles/header.css";
import logoLight from '../../assets/logo_light.png';
import logoDark from '../../assets/logo_dark.png';

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

const header = ({theme, toggleTheme}) => {
  return (
   <header className='header'>
    <div className="container">
        <div className="nav_wrapper">
            <div className="logo">
              <img src={theme==='light-theme' ? logoDark : logoLight} alt="Winsay Logo" className="logo_image" />
            </div>

            <div className="navigation">
              <ul className="menu">
                {
                  nav_links.map((item,index)=>(
                    <li className="menu_item" key={index}><a href="{item.path}" className="menu_link">{item.display}</a></li>
                  ))
                }
              </ul>
            </div>
            <div className="light_mode">
              <span onClick={toggleTheme}>
              {theme==='light-theme' ? (
                <span>
                  <i class="ri-moon-line"></i>Dark
                </span>
                ) : (
                <span>
                  <i class="ri-sun-line"></i>Light
                </span>
              )}
              </span>
            </div>
        </div>
    </div>
   </header>
  )
}

export default header