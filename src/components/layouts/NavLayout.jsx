import React from 'react';
import '../../styles/NavLayout.css';

export default function NavLayout({ currentPage, handlePageChange }) {

    const navbarPages = [
        {
            title: 'Home',
            link: '#home'
        },
        {
            title: 'About',
            link: '#about'
        },
        {
            title: 'Projects',
            link: '#projects'
        },
        {
            title: 'Contact',
            link: '#contact'
        },
        {
            title: 'Resume',
            link: '../../../assets/Sean Scott Resume.pdf'
        },
    ];

    const navbarStyle = {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '25px',
        listStyle: 'none',
        textDecoration: 'none',
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/images/header-img.png"})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        margin: '0px',
        padding: '30px',

    }

    return (
        <ul style={navbarStyle}>
            {navbarPages.map((page) => (
                <li className={currentPage === page.title ? 'navbarLinkActive' : 'navbarLink'}>
                    <a className="anchor" href={page.link} onClick={() => handlePageChange(page.title)}>
                        {page.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}
