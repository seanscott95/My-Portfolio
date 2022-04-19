import React from 'react';
// import avatar from '../../assets/images/avatar.png';

export default function About() {

    const style = {
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/images/rock.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
    };

    return (
        <div style={style}>
            <h1 className='about-title'>About</h1>
            {/* <image className="avatar" src={avatar} alt="My Avatar"></image> */}
            <p>
                I am an aspiring Full Stack Web Developer. My background in Web Development is in the infant
                stages but I have learnt many relatable and transferable skills through various fields of my
                career. I learnt Full Stack Web Development through a Monash University Bootcamp and am slowly
                but surely making my way through this new and crazy world. I am looking to make this my career
                and am very excited and intrigued to see what comes next.
            </p>
        </div>
    );
}