import React from 'react';
import '../../styles/About.css';
import avatar from '../../assets/images/avatar.png';

export default function About() {

    const style = {
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/images/rock.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '78.4vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    return (
        <div style={style}>
            {/* <image className="avatar" src={avatar} alt="My Avatar"></image> */}
            <div className='containerInfo'>
                <img src={avatar} alt='avatar' className="avatar" />
                <div className='containerBackground'>
                    <h1 className='about-title'>About</h1>
                    <p className='aboutInfo'>
                        I am an aspiring Full Stack Web Developer. My background in Web Development is in the infant
                        stages but I have learnt many relatable and transferable skills through various fields of my
                        career. I learnt Full Stack Web Development through a Monash University Bootcamp and am slowly
                        but surely making my way through this new and crazy world. I am looking to make this my career
                        and am very excited and intrigued to see what comes next.
                    </p>
                </div>
            </div>
        </div>
    );
}