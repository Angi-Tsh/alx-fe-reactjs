import React, { useState } from 'react';

const Contact = () => {
    // Define state variables for each form field using useState
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
     const [message, setMessage] = useState('');
    // Handler for input changes
    const handleNameChange = (event) => {
       setName(event.target.value);
     };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handleMessageChange = (event) => {
      (event.target.value);
    };

      // Handler for form submission
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior (page reload)
      alert('Form submitted! (Check console for data)'); // Simple alert for user

    // Log the current state to the console to demonstrate state management
    console.log('Form Data Submitted:', {
      name: name,
      email: email,
      message: message,
    });

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Where and how to reach us.</p>
       <h2>Send Us a Message</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', gap: '10px' }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name} // Value is controlled by state
          onChange={handleNameChange} // State is updated on change
          required
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email} // Value is controlled by state
          onChange={handleEmailChange} // State is updated on change
          required
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message} // Value is controlled by state
          onChange={handleMessageChange} // State is updated on change
          rows="5"
          required
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical' }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Submit
        </button>
      </form>
    </div>
    );
  };

export default Contact;