import React from 'react';
import portrait from '../../assets/images/portrait.png';
import '../../styles/About.css';

export default function About() {
    return (
        <div className='aboutContainer'>
            <img src={portrait} alt='portrait' />
            <div className='infoContainer'>
                <h1>About</h1>
                <p>
                    Full Stack Web Developer leveraging background in Military and Nursing. Effective at
                    collaboration and communication within many environments. Completed a certificate in
                    Full Stack Web Development from Monash University. Passionate about continuous
                    development and improving skills to further advance projects. Looking forward to and are
                    very excited and intrigued to see what comes next in this line of work.
                </p>
            </div>
        </div>
    );
};