import React from 'react'
import "./Component.css";



function Services() {
  return (
    
    <div className='servicemain'>
      
      <h1 className='serviceheading'>Our Services</h1>
      <div className='services'>
        
          <div className='event'>
              
              <h2>Event Management</h2>
              <h3>End-to-End planning and flawless execution for corporate and socaial events</h3>
          </div>

          <div className='exhibition'>
              <h2>Exhibitions & Activations</h2>
              <h3>Designing immersive brand activations and exhibition experiences</h3>
          </div>

          <div className='marketing'>
              <h2>Digital & Creative Marketing</h2>
              <h3>Social media campaigns,direct campaigns,creative content & branding</h3>
          </div>
      </div>
    </div>  
  )
}

export default Services