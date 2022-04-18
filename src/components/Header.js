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
    }
    return (
        <div style={style} className="header-container">
            <div>
                <h1 className="initials">SS</h1>
            </div>
            <header className="header">
                <h1>SEAN SCOTT</h1>
                <p>FULL-STACK WEB DEVELOPER</p>
            </header>
        </div>
    )
}