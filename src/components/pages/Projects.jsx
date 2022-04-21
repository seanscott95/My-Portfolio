import React from 'react';

export default function Projects() {

  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/sky.png"})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '77.6vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  };

  const projectStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/sky.png"})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    height: '500px',
    width: '750px',
  }

  const projects = [
    {
        title: '',
        collaborators: '',
        description: '',
        githubLink: '',
        deployedLink: '',
        projectBackground: '',
    },
  ];
  
  return (
    <div style={style}>
      <div className='containerProjectsPage'>
        <h1 className='containerTitle'>Projects</h1>
        <div className='containerProjects'>
          <div className='containerProjectInfo'>
            {projects.map((projects) => (
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
            ))}
          </div>
          <div style={projectStyle} className='projectBackground'></div>
        </div>
      </div>
    </div>
  );
}
