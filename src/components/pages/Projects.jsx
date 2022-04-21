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

  return (
    <div style={style}>
      <div className='containerProjectsPage'>
        <h1 className='containerTitle'>Projects</h1>
        <div className='containerProjects'>
          <div className='containerProjectInfo'>
            <h2>Project Title</h2>
            <p><span className='titleBold'>Collaborators: </span>Sean Scott</p>
            <p>App Description</p>
            <p>Note: App hosted on a free heroku server. Please allow 15-30 seconds to load the page.</p>
            <a className="projectLinks" href="https://github.com/Black-Mandarin/Pet-Advocate-Welfare-System-PAWS-">
              GitHub Link</a>
            <a className="projectLinks" href="https://pet-advocate-welfare-system.herokuapp.com/">
              Deployed Link</a>
          </div>
          <div style={projectStyle} className='projectBackground'></div>
        </div>
      </div>
    </div>
  );
}
