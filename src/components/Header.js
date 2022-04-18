import React from 'react';
import '../styles/Header.css';

export default function Header() {
    const style = {
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/header-img.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: 'white',
        fontSize: '30px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
    }
    return (
        <div style={style} className="header-container">
            <div>
                <h1 className="initials">SS</h1>
            </div>
            <div className="single-line"></div>
            <header className="header">
                <h1>SEAN SCOTT</h1>
                <p>FULL-STACK WEB DEVELOPER</p>
            </header>
            <div className="single-line"></div>
        </div>
    )
}