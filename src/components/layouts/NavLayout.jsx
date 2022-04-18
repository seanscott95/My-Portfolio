import React from 'react';

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
            title: 'Portfolio',
            link: '#portfolio'
        },
        {
            title: 'Contact',
            link: '#contact'
        },
        {
            title: 'Resume',
            link: ''
        },
    ];

    return (
        <ul>
            {navbarPages.map((page) => (
                <li className={currentPage === page.title ? 'navbarLinkActive' : 'navbarLink'}>
                    <a href={page.link} onClick={() => handlePageChange(page.item)}>
                        {page.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}
