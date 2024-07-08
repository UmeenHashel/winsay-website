import React from 'react'
import '../../styles/about.css';
import aboutImg from '../../assets/about-us.jpg';

const chooseData = [
  {
    icon: 'ri-wifi-line',
    title: 'First working process',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint aspernatur ratione ipsam vel facilis earum similique.'
  },

  {
    icon: 'ri-customer-service-line',
    title: '24/7 Hours Support',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint aspernatur ratione ipsam vel facilis earum similique.'
  },

  {
    icon: 'ri-team-line',
    title: 'Dedicated team',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint aspernatur ratione ipsam vel facilis earum similique.'
  },
]

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about_wrapper">
          <div className="about_content">
            <h6 className="subtitle">Why choose Us</h6>
            <h2>Specialist in aiding clients on</h2>
            <h2 className="highlight"> financial challenges</h2>
            <p className="description about_content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto labore 
              reiciendis aliquid a omnis dolor consequatur commodi natus eius iusto, neque doloremque veritatis maxime 
              magni eaque, debitis aut ducimus exercitationem!
            </p>
            <div className='choose_item-wrapper'>
              {chooseData.map((item, index) => (
                <div className="choose_us-item" key={index}>
                  <span className="choose_us-icon">
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose_us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about_img">
            <img src={aboutImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
