
import "./App.css";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Client from "./Components/Client";
import Contact from "./Components/Contact";
import { useRef } from "react";



const scrollTo=(ref)=>{
  ref.current?.scrollIntoView({behavior:'smooth'})
}


function App(){
 
 
 
 
  const serviceref=useRef(null);
  const workref=useRef(null);
  const clientref=useRef(null);
  const contactref=useRef(null);
  return(
    <div>
      <div className="navmain">
          <img src="/nexuslogo.jpg" className="logo"/>
        <div className="navcomp">
          <h4 onClick={()=>scrollTo(serviceref)}>SERVICES</h4>
          <h4 onClick={()=>scrollTo(workref)}>WORK</h4>
          <h4 onClick={()=>scrollTo(clientref)}>CLIENT</h4>
          
          <h4 onClick={()=>scrollTo(contactref)}>CONTACT</h4>
        </div>
      </div>
      <div className="start">
        <img src="/banner.png" alt="event banner"/>
        <h2 >CRAFITING IMMERSIVE EVENTS EXHIBITIONS, ACTIVATION & DIGITAL CAMPAIGNS</h2>
        
        
      </div>
      
      
      
      
      <div ref={serviceref}>
      
        <Services/>
      </div>
      <div ref={workref}>
      
        <Work/>

      </div>
      <div ref={clientref}>
        <Client/>
      </div>
    
      <div ref={contactref}>
        <Contact/>
      </div>
    </div>



  )

};



export default App;