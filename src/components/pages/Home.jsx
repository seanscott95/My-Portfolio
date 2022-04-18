import React from 'react';
import '../../styles/Home.css';

export default function Home() {
    const style = {
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/images/header-img.png"})`,
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
        <div style={style}>
            <div>
                <h1 className="initials">SS</h1>
            </div>
            <div className="single-line"></div>
            <header className="header">
                <h1>SEAN SCOTT</h1>
                <p>FULL-STACK WEB DEVELOPER</p>
            </header>
        </div>
    );
}
