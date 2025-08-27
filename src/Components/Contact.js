import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [details, setDetails] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setDetails((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.post('http://localhost:5000/contact', details)

      alert(res.data.message);
      setDetails({ firstname: '', lastname: '', phone: '', message: '' }); 
    } catch (error) {
      console.error(error); 
      alert("Submission failed");
    }
  };

  return (
    <div className='containerform'>
      <div className='completeform'>
        <h1>Reach us</h1>
        <div className='formnew'>
          <form onSubmit={handleSubmit}>
            <input
              placeholder='First Name'
              type='text'
              name='firstname'
              value={details.firstname}
              onChange={handleChange}
            />

            <input
              placeholder='Last Name'
              type='text'
              name='lastname'
              value={details.lastname}
              onChange={handleChange}
            />

            <input
              placeholder='Phone Number'
              type="number"
              name='phone'
              value={details.phone}
              onChange={handleChange}
            />

            <input
              placeholder='Message'
              type='text'
              name='message'
              value={details.message}
              onChange={handleChange}
            />

            <button className="submit"type="submit">Send Message</button> 
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
