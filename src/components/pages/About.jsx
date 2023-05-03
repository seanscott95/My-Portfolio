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
                    I am a Full Stack Web Developer with varied experience in web development projects, healthcare,
                    customer service and the Australian Defence Force. I hold a Coding Boot Camp Certificate from
                    Monash University and I am proficient in the use of MERN stack, GraphQL, MySQL,Bootstrap, JQuery
                    and Redux.  I am passionate about continuous professional development and I am open to varied
                    opportunities within web development to assist in advancing further projects.
                </p>
            </div>
        </div>
    );
};