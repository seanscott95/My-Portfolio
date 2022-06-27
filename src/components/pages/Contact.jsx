import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import contactBackground from '../../assets/images/header-img.png';
import '../../styles/Contact.css';

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
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [mouseOutErrorMessage, setMouseOutErrorMessage] = useState('');
  const [status, setStatus] = useState("Submit");

  const handleMouseOut = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (!inputValue) {
      setMouseOutErrorMessage('This field is required.');
      return;
    } else {
      setMouseOutErrorMessage('');
      return
    }
  };

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    setStatus("Sending...");

    const { name, email, message } = e.target.elements;

    if (!validateEmail(email)) {
      setEmailErrorMessage('Email is invalid.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");

    let result = await response.json();
    alert(result.status);

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
            onMouseOut={handleMouseOut} onKeyPress= {handleMouseOut} 
            onChange={(e) => setName(e.target.value)} />

          <label for='email'>Email</label>
          <input type='email' id='email' name='email' placeholder='Your email...'
            value={email} onMouseOut={handleMouseOut} onKeyPress= {handleMouseOut}
            onChange={(e) => setEmail(e.target.value)} />

          <label for='message'>Message</label>
          <textarea type='text' id='message' name='message' rows='5'
            placeholder='Your message...' value={message} onMouseOut={handleMouseOut}
            onKeyPress= {handleMouseOut} onChange={(e) => setMessage(e.target.value)} ></textarea>

          <button type="submit" className="sendButton" onClick={handleFormSubmit}>{status}</button>
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
