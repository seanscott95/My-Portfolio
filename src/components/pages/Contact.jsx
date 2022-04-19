import React from 'react';

export default function Contact() {

  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/header-img.png"})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#1e2327',
    
  }

  const formStyle = {
    background: 'rgb(255, 255, 255, 0.6)',
    width: '50%',
    height: '30%',
    borderRadius: '5px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '30px',
    lineHeight: '2',
    position: 'absolute',
    top: '400px'
  }

  const h1Style = {
    position: 'absolute',
    top: '300px',
    color: 'white'
  }

  const btnStyle = {
    width: '100px',
    background: '#1e2327',
    color: 'white',
    fontWeight: 'bold',
    margin: '20px',
    padding: '5px',
    fontSize: '20px',
    borderRadius: '10px',
    
  }

  return (
    <div style={style}>

      <h1 style={h1Style}>Contact Page</h1>

      <form style={formStyle}>
        <label for='name'>Name</label>
        <input type='text' id='name' name='name' placeholder='Your name...' />
        
        <label for='email'>Email</label>
        <input type='text' id='email' name='email' placeholder='Your email...' />

        <label for='message'>Message</label>
        <textarea type='text' id='message' name='message' rows='5' placeholder='Your message...'></textarea>

        <input style={btnStyle} type="submit" value="Send" />
      </form>
    </div>
  );
}
