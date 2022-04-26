import React from 'react';
import rockBackground from '../../assets/images/rock.png';
import avatar from '../../assets/images/avatar.png';
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