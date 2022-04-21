import React from 'react';
import '../../styles/Projects.css'

export default function Projects() {

  const style = {
    // backgroundImage: `url(${process.env.PUBLIC_URL + "/images/sky.png"})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // height: '77.6vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const projectStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/sky.png"})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',

    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '350px',
    width: '550px',
    padding: '20px',
    margin: '50px',
    transition: 'transform .2s',
  }

  const projects = [
    {
      title: 'Pet Animal Welfare System (PAWS)',
      collaborators: 'Sean Scott, Ayako Woollan and Alan Cherian.',
      description: 'Pet Booking system for a pet daycare centre. This booking system would be used by the staff of the pet daycare centre.',
      githubLink: 'https://github.com/Black-Mandarin/Pet-Advocate-Welfare-System-PAWS-',
      deployedLink: 'https://pet-advocate-welfare-system.herokuapp.com/',
    },
    {
      title: 'Pet Animal Welfare System (PAWS)',
      collaborators: 'Sean Scott, Ayako Woollan and Alan Cherian.',
      description: 'Pet Booking system for a pet daycare centre. This booking system would be used by the staff of the pet daycare centre.',
      githubLink: 'https://github.com/Black-Mandarin/Pet-Advocate-Welfare-System-PAWS-',
      deployedLink: 'https://pet-advocate-welfare-system.herokuapp.com/',
    },
    {
      title: 'Pet Animal Welfare System (PAWS)',
      collaborators: 'Sean Scott, Ayako Woollan and Alan Cherian.',
      description: 'Pet Booking system for a pet daycare centre. This booking system would be used by the staff of the pet daycare centre.',
      githubLink: 'https://github.com/Black-Mandarin/Pet-Advocate-Welfare-System-PAWS-',
      deployedLink: 'https://pet-advocate-welfare-system.herokuapp.com/',
    },
    {
      title: 'Pet Animal Welfare System (PAWS)',
      collaborators: 'Sean Scott, Ayako Woollan and Alan Cherian.',
      description: 'Pet Booking system for a pet daycare centre. This booking system would be used by the staff of the pet daycare centre.',
      githubLink: 'https://github.com/Black-Mandarin/Pet-Advocate-Welfare-System-PAWS-',
      deployedLink: 'https://pet-advocate-welfare-system.herokuapp.com/',
    },
    {
      title: 'Pet Animal Welfare System (PAWS)',
      collaborators: 'Sean Scott, Ayako Woollan and Alan Cherian.',
      description: 'Pet Booking system for a pet daycare centre. This booking system would be used by the staff of the pet daycare centre.',
      githubLink: 'https://github.com/Black-Mandarin/Pet-Advocate-Welfare-System-PAWS-',
      deployedLink: 'https://pet-advocate-welfare-system.herokuapp.com/',
    },
    {
      title: 'Pet Animal Welfare System (PAWS)',
      collaborators: 'Sean Scott, Ayako Woollan and Alan Cherian.',
      description: 'Pet Booking system for a pet daycare centre. This booking system would be used by the staff of the pet daycare centre.',
      githubLink: 'https://github.com/Black-Mandarin/Pet-Advocate-Welfare-System-PAWS-',
      deployedLink: 'https://pet-advocate-welfare-system.herokuapp.com/',
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
                  <p className='note'>Note: App hosted on a free heroku server. Please allow 15-30 seconds to load the page.</p>
                  <a className="projectLinks" href={projects.githubLink}>
                    GitHub Link</a>
                  <a className="projectLinks" href={projects.deployedLink}>
                    Deployed Link</a>
                </div>
              </div>
              <div style={projectStyle} className='projectBackground'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
