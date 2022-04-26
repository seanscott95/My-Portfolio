import React from 'react';
import '../../styles/Projects.css';
import techBlog from '../../assets/images/tech-blog.png';
import jate from '../../assets/images/jate.png';
import paws from '../../assets/images/paws.png';
import socialNetworkApi from '../../assets/images/social-network-api.png';
import teamProfileGenerator from '../../assets/images/team-profile-generator.png';
import weatherDashboard from '../../assets/images/weather-dashboard.png';
import backgroundImage from '../../assets/images/blue.png';

export default function Projects() {

  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  const projects = [
    {
      title: 'Pet Animal Welfare System (PAWS)',
      collaborators: 'Sean Scott, Ayako Woollan and Alan Cherian.',
      description: 'Pet Booking system for a pet daycare centre. This booking system would be used by the staff of the pet daycare centre.',
      githubLink: 'https://github.com/Black-Mandarin/Pet-Advocate-Welfare-System-PAWS-',
      deployedLink: 'https://pet-advocate-welfare-system.herokuapp.com/',
      image: paws,
      hosted: true,
    },
    {
      title: 'Tech Blog',
      collaborators: 'Sean Scott.',
      description: 'Login in to view or sign-up to post and comment on a tech blog site where the user can publish useful tech facts or their thoughts and opinions.',
      githubLink: 'https://github.com/seanscott95/Tech-Blog',
      deployedLink: 'https://pacific-ravine-00893.herokuapp.com/',
      image: techBlog,
      hosted: true,
    },
    {
      title: 'Text Editor',
      collaborators: 'Sean Scott.',
      description: 'Enjoy the convenience of having a place to take notes on and offline. This application has the ability to be downloaded onto your computer.',
      githubLink: 'https://github.com/seanscott95/Text-Editor',
      deployedLink: 'https://boiling-wave-43662.herokuapp.com/',
      image: jate,
      hosted: true,
    },
    {
      title: 'Social Network API (NoSQL)',
      collaborators: 'Sean Scott.',
      description: ' A social network API where users can share their thoughts, react to friends’ thoughts, and create a friend list.',
      githubLink: 'https://github.com/seanscott95/NoSQL-Social-Network-API',
      deployedLink: 'https://drive.google.com/file/d/1tPBQuYIUq_NJp3XgXrDzNpEoy45Q-6la/view',
      image: socialNetworkApi,
      hosted: false,
    },
    {
      title: 'Team Profile Generator',
      collaborators: 'Sean Scott.',
      description: 'Enter information about employees on a software engineering to generate an HTML webpage which displays summaries for each person.',
      githubLink: 'https://github.com/seanscott95/Team-Profile-Generator',
      deployedLink: 'https://drive.google.com/file/d/1yNBxCo7Cfa1ZD1T4x9U5-uVDR7NTmkKL/view',
      image: teamProfileGenerator,
      hosted: false,
    },
    {
      title: 'Weather Dashboard',
      collaborators: 'Sean Scott.',
      description: 'Search for a city via the form input you will be presented with the current and future temperature, humidity, wind speed, and UV index.',
      githubLink: 'https://github.com/seanscott95/Weather-Dashboard',
      deployedLink: 'https://seanscott95.github.io/Weather-Dashboard/',
      image: weatherDashboard,
      hosted: false,
    },
  ];

  return (
    <div style={style}>
      <div className='containerProjectsPage'>
        <h1 className='pageTitle'>Projects</h1>
        <div className='containerProjects'>
          {projects.map((projects) => (
            <div className='containerInfoImage'>
              <div className='containerProjectInfo'>
                <div className='projectCard'>
                  <h2>{projects.title}</h2>
                  <p><span className='titleBold'>Collaborators: </span>{projects.collaborators}</p>
                  <p>{projects.description}</p>
                  
                  <p className={projects.hosted ? 'note' : 'noteHide'}>Note: App hosted on a free heroku server. Please allow 15-30 seconds to load the page.</p>
                  <a className="projectLinks" href={projects.githubLink}
                    target='_blank' rel='noreferrer'>GitHub Link</a>
                  <a className="projectLinks" href={projects.deployedLink}
                    target='_blank' rel='noreferrer'>Deployed Link</a>
                </div>
              </div>
              <img src={projects.image} alt='project' className='projectBackground' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
