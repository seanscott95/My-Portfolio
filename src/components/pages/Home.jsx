import React from 'react';
import rocks from '../../assets/images/rocks.png';
import '../../styles/Home.css';

export default function Home() {
    const style = {
        backgroundImage:`url(${rocks})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        fontSize: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        height: 'calc(100vh - 10.93rem)',
    };

    return (
        <div style={style}>
            <div className="outerContainer">
                <div className='initialsContainer'>
                    <h1 className="initials">SS</h1>
                </div>
                <div className="singleLine"></div>
                <div className="header">
                    <h1>SEAN SCOTT</h1>
                    <p>FULL-STACK WEB DEVELOPER</p>
                </div>
            </div>
        </div>
    );
};