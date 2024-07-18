import React from 'react'
import "../../styles/hero.css";
import heroDarkImg from "../../assets/hero-img.png";
import heroLightImg from "../../assets/light-hero-bg.jpg"

const Hero = ({theme}) => {
  return (
    <section id="home" className='hero_section'>
        <div className="container">
            <div className="hero_wrapper">
                <div className="hero_content">
                  <div>
                    <h2>We're Creating Perfect</h2>
                    <h2>Digital Products To</h2>
                    <h2 className="highlight">Promote Your Brand</h2>
                  </div>
                  <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, itaque.
                    Cum modi temporibus facere corporis, necessitatibus amet sint laborum recusandae.
                  </p>

                  <div className="hero_btns">
                    <button className="primary_btn">Get Started Now</button>
                    <button className="secondary_btn">Discover More</button>
                  </div>
                </div>

                <div className="hero_img">
                  <img src={ theme==='light-theme' ? heroLightImg : heroDarkImg} alt="hero-img"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero