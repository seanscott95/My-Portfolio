import React from 'react';

export default function FooterLayout() {

    const footerLinks = [
        {
            title: 'LinkedIn',
            link: "https://www.linkedin.com/in/sean-scott-18ba07225/",
            fa: "contact-icon fa-brands fa-linkedin fa-2xl"
        },
        {
            title: 'Email',
            link: "mailto:seanms418@gmail.com",
            fa: 'contact-icon fa-solid fa-envelope fa-2xl'
        },
        {
            title: 'GitHub',
            link: "https://github.com/seanscott95",
            fa: 'contact-icon fa-brands fa-github fa-2xl'
        },
    ];

    return (
        <div className="">
            <ul>
                {footerLinks.map((item) => (
                    <li>
                        <a href={item.link}>
                            <i className={item.fa}></i>
                        </a>
                    </li>
                ))}
            </ul>
            <p className="">Powered by Sean Scott</p>
        </div>
    );
}
