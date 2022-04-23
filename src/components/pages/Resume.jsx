import React from 'react';
import resumeBackground from '../../assets/images/hills.png';
import resume from '../../assets/resume/Sean Scott Resume.pdf'
import '../../styles/Resume.css';

export default function Resume() {

    const style = {
        backgroundImage:`url(${process.env.PUBLIC_URL + resumeBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '78.4vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        
    };

    return (
        <div style={style}>
            <div className='resumeContainer'>
                <p className='resumeInner bold'>To save you some time here is a list of my proficiencies:</p>
                <span className="resumeText">Click here for my resume: </span>
                <a className='resume' href={resume} target='_blank' rel='noreferrer' >Resume</a>
            </div>
            <div className='resumeContainer'>
                <p className='resumeInner'>
                    <span className='bold'>Languages: </span> 
                    JavaScript (AJAX, JSON), HTML, CSS, SQL.
                </p>
                <p className='resumeInner'>
                    <span className='bold'>Tools: </span>
                    VSCode, Git, GitHub, Command Line, Heroku, MySQL, MongoDB, Jest.
                </p>
                <p className='resumeInner'>
                    <span className='bold'>Frameworks and Libraries: </span>
                    React (Hooks), jQuery, Bootstrap, Node.js (Express.js, 
                    Inquirer.js, File System, Sequelize), Handlebars.js, GraphQL/Apollo.
                </p>
            </div>
        </div>
    );
}