// import React, { useEffect } from 'react';
import React from 'react'
import '../../styles/NavLayout.css';

export default function NavLayout({ currentPage, handlePageChange }) {

    // useEffect(() => {
    //     // checking if localStorage has a "hasVisited" key
    //     if (localStorage.getItem("hasVisited")){
    //         // setting the state of welcomeMessage to "Welcome back!" if it does
    //         return handlePageChange('#home');
    //     } else {
    //         // creating the "hasVisited" key value pair in localStorage if it doesnt exist
    //         localStorage.setItem("hasVisited", "true");
    //         return handlePageChange('#about');
    //     }
    // },[]);

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
