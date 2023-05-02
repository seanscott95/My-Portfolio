import React from 'react';
import resume from '../../assets/resume/Resume - Sean Scott.pdf'
import '../../styles/Resume.css';

export default function Resume() {
    return (
        <div className='resumeContainer'>
            <div className='infoContainer'>
                <p>To save you some time here is a list of my proficiencies:</p>

                <span>Click here for my resume: </span>
                <button>
                    <a href={resume} target='_blank' rel='noreferrer'>Resume</a>
                </button>

                <p>
                    <span>Languages: </span>
                    JavaScript (AJAX, JSON), HTML, CSS, SQL.
                </p>
                <p>
                    <span>Tools: </span>
                    VSCode, Git, GitHub, Command Line, Heroku, MySQL, MongoDB, Jest, RTK.
                </p>
                <p>
                    <span>Frameworks and Libraries: </span>
                    React (Hooks), jQuery, Bootstrap, Handlebars.js, GraphQL/Apollo, Node.js (Express,
                    Inquirer, File System, Sequelize, Mongoose, Dotenv).
                </p>
            </div>
        </div>
    );
}