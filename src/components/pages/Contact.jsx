import React from 'react';
import '../../styles/Contact.css';

export default function Contact() {

  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/header-img.png"})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '77.6vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#1e2327',
    
  }

  

 

  return (
    <div style={style}>

      <h1 className="title" >Contact Page</h1>

      <form className='contactForm'>
        <label for='name'>Name</label>
        <input type='text' id='name' name='name' placeholder='Your name...' />
        
        <label for='email'>Email</label>
        <input type='text' id='email' name='email' placeholder='Your email...' />

        <label for='message'>Message</label>
        <textarea type='text' id='message' name='message' rows='5' placeholder='Your message...'></textarea>

        <input type="submit" value="Send" className="sendButton" />
      </form>
    </div>
  );
}
