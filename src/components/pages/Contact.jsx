import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import contactBackground from '../../assets/images/header-img.png';
import '../../styles/Contact.css';

export default function Contact() {

  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL + contactBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '78.4vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#1e2327',

  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [mouseOutErrorMessage, setMouseOutErrorMessage] = useState('');

  const handleMouseOut = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (!inputValue) {
      setMouseOutErrorMessage('This field is required.');
      return;
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setEmailErrorMessage('Email is invalid.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    setEmailErrorMessage('');
    setMouseOutErrorMessage('');
  };

  return (
    <div style={style}>
      <div className='contactContainer'>
        <h1 className="white" >Contact Page</h1>

        <form className='contactForm'>
          <label for='name'>Name</label>
          <input type='text' id='name' name='name' placeholder='Your name...' value={name}
            onMouseOut={handleMouseOut} onChange={(e) => setName(e.target.value)}/>

          <label for='email'>Email</label>
          <input type='email' id='email' name='email' placeholder='Your email...'
            value={email} onMouseOut={handleMouseOut} onChange={(e) => setEmail(e.target.value)}/>

          <label for='message'>Message</label>
          <textarea type='text' id='message' name='message' rows='5'
            placeholder='Your message...' value={message} onMouseOut={handleMouseOut}
            onChange={(e) => setMessage(e.target.value)} ></textarea>

          <input type="submit" value="Send" className="sendButton" onClick={handleFormSubmit} />
        </form>
        {setEmailErrorMessage && (
          <div>
            <p className="white">{emailErrorMessage}</p>
          </div>
        )}
        {setMouseOutErrorMessage && (
          <div>
            <p className="white">{mouseOutErrorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
