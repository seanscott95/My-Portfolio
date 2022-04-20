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
            link: '#resume'
        },
    ];

    return (
        <ul className='navbar'>
            {navbarPages.map((page) => (
                <li className={currentPage === page.title ? 'navbarLinkActive' : 'navbarLink'}>
                    <a href={page.link} onClick={() => handlePageChange(page.title)}>
                        {page.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}
