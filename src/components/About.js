import React from 'react';
import '../css/About.css';

const About = () => {
    const about_logo='https://cdn.discordapp.com/attachments/550834824663924736/1066909397260959854/Artboard_2.png';

    return(
        <div className="about">
            <div className='about--content'>
                <div className='about--name'>Chanyu Choung</div>
                <div className='about--title'>Associate Cloud Engineer</div>

                <div className='about--text-1'>Hello,</div>
                <div className='about--text-2'>Thank you for visiting my site.</div>
                
                <div className='about--text-1'>My name is Chanyu.</div>
                <div className='about--text-1'>A student at Lehman College, CUNY</div>
                <div className='about--text-1'>I live in a beautiful seaside suburban</div>
                <div className='about--text-2'>North of NYC called Mamaroneck</div>
                
                <div className='about--text-1'>My current goal is to become a</div>
                <div className='about--text-1'>Professional Cloud Engineer</div>
                <div className='about--text-2'>Working on GCP Cloud Architect Certificate</div>
            </div>
            <img className="about--logo" src={about_logo} alt="about--logo" />
        </div>
    )
}

export default About;