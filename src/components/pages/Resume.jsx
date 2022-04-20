import React from 'react';
import '../../styles/Resume.css';

export default function Resume() {

    const style = {
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/images/hills.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '77.6vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    };

    return (
        <div style={style}>
            <div className='resumeContainer'>
                <p className='resumeInner bold'>To save you some time here is a list of my proficiencies:</p>
                <span className="resumeBtnText">Click here for my resume: </span><button className='resumeBtn'>Resume</button>
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