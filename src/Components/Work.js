import React from 'react'
import "./Component.css"
function Work() {
  return (
<div className='ourwork'>
  <h1>Our Work</h1>

  <div className='project1'>
    <img className="mahindra"src="/mahindra.png"alt='projectimage' />
    <h5 className='p1title'>Mahindra showroom launch</h5>
  </div>

  <div className='project2'>
    <img className="kessaku"src="/kessaku.png"alt='projectimage' />
    <h5 className='p2title'>Kessaku Group press meet</h5>
  </div>

  <div className='project3'>
    <img className='lastproject' src="/weddingevent.jpg"alt='projectimage' />
    <h5 className='p3title'>wedding event </h5>    
  </div>
</div>

  )
}

export default Work