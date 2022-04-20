import React from 'react';
// import '../../styles/Resume.css';

export default function Resume() {

    const style = {
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/images/hills.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '77.6vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    return (
        <div style={style}>
            <p>Yo</p>
        </div>
    );
}