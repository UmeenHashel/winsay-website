import React from 'react'
import team01 from '../../assets/team-01.png'
import '../../styles/team.css'

const Team = () => {
  return ( 
    <section className='our_team'>
        <div className="container">
            <div className="team_content">
                <h6 className="subtitle">Our Team</h6>
                <h2>
                    Meet with <span className="highlight">our team</span>
                </h2>
            </div>

            <div className="team_wrapper">
                <div className="team_item">
                    <div className="team_img">
                        <img src={team01} alt="team 01" />
                    </div>
                    <div className="team_details">
                        <h4>Courtny Hurry</h4>
                        <p className="description">Product Development</p>

                        <div className="team_member_social">
                            <span>
                                < i class="ri-linkedin-line"></i>
                            </span>
                            <span>
                                <i class="ri-facebook-line"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
}

export default Team