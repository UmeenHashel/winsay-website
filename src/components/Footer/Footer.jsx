import React from 'react'
import "../../styles/footer.css";
import logoLight from '../../assets/logo_light.png';
import logoDark from '../../assets/logo_dark.png';

const quickLinks01 =[
    {
        path: '#',
        display: 'Marketing'
    },
    {
        path: '#',
        display: 'Analytics'
    },
    {
        path: '#',
        display: 'Commerce'
    },
]

const quickLinks02 =[
    {
        path: '#',
        display: 'Pricing'
    },
    {
        path: '#',
        display: 'Documentation'
    },
    {
        path: '#',
        display: 'Guides'
    },
]

const quickLinks03 =[
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#services',
        display: 'Services'
    },
    {
        path: '#',
        display: 'Contact us'
    },
]

const Footer = ({theme}) => {
    const year = new Date().getFullYear();
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_logo">
                    <img src={theme === 'light-theme' ? logoDark : logoLight} alt="Winsay Logo" className="logo_image" />
                    <p className="description">Grow with us</p>

                    <p className="small_text description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus molestias unde quaerat nobis numquam dolor. Voluptatem soluta iure nulla adipisci.</p>
                </div>

                <div className="footer_quick-links">
                    <h3 className="quick_links-title">Solutions</h3>
                    <ul className="quick_links">
                        {
                            quickLinks01.map((item,index)=>(
                                <li className="quick_link-item" key={index}><a href={item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>

                <div className="footer_quick-links">
                    <h3 className="quick_links-title">Support</h3>
                    <ul className="quick_links">
                        {
                            quickLinks02.map((item,index)=>(
                                <li className="quick_link-item" key={index}><a href={item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>

                <div className="footer_quick-links">
                    <h3 className="quick_links-title">Company</h3>
                    <ul className="quick_links">
                        {
                            quickLinks03.map((item,index)=>(
                                <li className="quick_link-item" key={index}><a href={item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <p className="copyright">Copyright {year}, developed by Winsay Solutions. All rights reserved.{" "}</p>
        </div>
    </footer>
  )
}

export default Footer