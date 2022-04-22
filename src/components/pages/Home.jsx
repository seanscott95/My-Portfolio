import React from 'react';
import '../../styles/Home.css';

export default function Home() {
    const style = {
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/images/rocks.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '78.4vh',
        fontSize: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
    }
    return (
        <div style={style}>
            <div className="outerContainer">
                <div className='initialsContainer'>
                    <h1 className="initials">SS</h1>
                </div>
                <div className="single-line"></div>
                <div className="header">
                    <h1>SEAN SCOTT</h1>
                    <p>FULL-STACK WEB DEVELOPER</p>
                </div>
            </div>
        </div>
    );
}
