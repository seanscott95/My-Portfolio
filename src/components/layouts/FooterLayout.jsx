import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

export default function FooterLayout() {

    const footerLinks = [
        {
            icon: faGithub,
            link: "https://github.com/seanscott95"
        },
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/sean-scott-18ba07225/"
        },
        {
            icon: faStackOverflow,
            link: "https://stackoverflow.com/users/17353361/sean-scott"
        },
        {
            icon: faEnvelope,
            link: "mailto:seanms418@gmail.com"
        },
    ];

    return (
        <div className="">
            <ul>
                {footerLinks.map((item) => (
                    <li>
                        {/* <Link to={item.link}> */}
                            <FontAwesomeIcon icon={item.icon} />
                        {/* </Link> */}
                    </li>
                ))}
            </ul>
            <p className="">Powered by Sean Scott</p>
        </div>
    );
}
