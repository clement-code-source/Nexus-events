import React from 'react';
import './Component.css';


function Client() {
  return (
    <div className='client'>
      <h1 className='clientheading'>What Clients Say</h1>

      <div className='client1'>
        <div className='flip-card-inner'>
          <div className='client1front'>
            <img className='clientimage1' src="/Profile-Image-AI.jpg" alt='client image' />
            <h5 className='clientname1'>Pradeep, CEO Nexus</h5>
          </div>
          <div className='client1back'>
            <h3>They transformed our product launch into an unforgettable brand experience</h3>
          </div>
        </div>
      </div>

      <div className='client2'>
        <div className='flip-card-inner'>
          <div className='client2front'>
            <img className='clientimage2'  src='/Profile-Image-AI(2).jpg' alt='client2 image' />
            <h5 className='clientname1'>Rahul, CfO Nexus</h5>
          </div>
          <div className='client2back'>
            <h3>Made my event into an unforgettable night</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
