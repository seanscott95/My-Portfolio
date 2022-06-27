import React from 'react';
import rockBackground from '../../assets/images/rock.png';
import portrait from '../../assets/images/portrait.png';
import '../../styles/About.css';

export default function About() {

    const style = {
        backgroundImage: `url(${rockBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100% - 292px)',
    };

    return (
        <div style={style}>
            <div className='containerInfo'>
                <img src={portrait} alt='avatar' className="avatar" />
                <div className='containerBackground'>
                    <h1 className='about-title'>About</h1>
                    <p className='aboutInfo'>
                    Full Stack Web Developer leveraging background in Military and Nursing. Effective at 
                    collaboration and communication within many environments. Completed a certificate in 
                    Full Stack Web Development from Monash University. Passionate about continuous 
                    development and improving skills to further advance projects. Looking forward to and are 
                    very excited and intrigued to see what comes next in this line of work.
                    </p>
                </div>
            </div>
        </div>
    );
}