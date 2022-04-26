import React from 'react';
import rocks from '../../assets/images/rocks.png';
import '../../styles/Home.css';

export default function Home() {
    const style = {
        backgroundImage:`url(${rocks})`,
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
            <div className="outerContainerHome">
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
