import React, { useState, useRef } from 'react';
import contactBackground from '../../assets/images/header-img.png';
import '../../styles/Contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const style = {
    backgroundImage: `url(${contactBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#1e2327',
    minHeight: 'calc(100% - 292px)',
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState("Send");

  const form = useRef();

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    setStatus("Sending...");

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setStatus("Sent");

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={style}>
      <div className='contactContainer'>
        <h1 className="white" >Contact Page</h1>

        <form ref={form} onSubmit={handleFormSubmit} className='contactForm'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='user_name' value={name} placeholder='Your name...'
            onChange={(e) => setName(e.target.value)} required/>

          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='user_email' value={email} placeholder='Your email...'
            onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor='message'>Message</label>
          <textarea type='text' id='message' name='message' value={message} rows='5'
            placeholder='Your message...' onChange={(e) => setMessage(e.target.value)} required
          ></textarea>
          
          <button type="submit" className="sendButton">{status}</button>
        </form>
      </div>
    </div>
  );
}
