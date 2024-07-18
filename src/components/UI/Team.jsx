import React from 'react'
import team01 from '../../assets/team-01.png'
import team02 from '../../assets/team-02.png'
import team03 from '../../assets/team-03.png'
import team04 from '../../assets/team-04.png'
import '../../styles/team.css'


const teamMembers = [
    {
        imgUrl: team01,
        name: 'Courtny Hurry',
        position: 'Product Development'
    },
    {
        imgUrl: team02,
        name: 'Lindas Walton',
        position: 'Front-End Developer'
    },
    {
        imgUrl: team03,
        name: 'Harry Martin',
        position: 'Product Designer'
    },
    {
        imgUrl: team04,
        name: 'Jhon Cooper',
        position: 'CEO & Sr. Developer'
    },
]

const Team = () => {
  return (
    <section id="team">
        <div className="container">
            <div className="team_content">
                <h6 className="subtitle">Our Team</h6>
                <h2>
                    Meet with <span className="highlight">our team</span>
                </h2>
            </div>

            <div className="team_wrapper">
                {
                    teamMembers.map((item,index) =>(
                        <div className="team_item" key={index}>
                            <div className="team_img">
                                <img src={item.imgUrl} alt="teamMember" />
                            </div>
                            <div className="team_details">
                                <h4>{item.name}</h4>
                                <p className="description">{item.position}</p>
                                <div className="team_member-social">
                                    <span>
                                        <i class="ri-linkedin-line"></i>
                                    </span>
                                    <span>
                                        <i class="ri-facebook-line"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    </section>
  );
}

export default Team