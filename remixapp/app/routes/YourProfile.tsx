// routes/Home.tsx
import React from 'react';
import { Button } from '~/components/button';
import { useNavigate, useNavigation } from "@remix-run/react";


function YourProfile() {
  const navigate = useNavigate();
  
  return ( <div className='white-background'>
    <h1 className='welcome'>Anne Lauve</h1>
    <div  className="center-container">
      
      <h3 className='.higher-text little-text'>computer science, class of 2027</h3> 
     </div>

     <h3 className='section'>Active Tables</h3>
      <div className='dark-green-box'>
        
          <Button color="white" size='large' onClick={() =>navigate("/Profile")}>Warren Dining Hall (table for 4)</Button>
    
        {/* <div className='center-container'> */}
          {/* </div> */}
      </div>

        


     <h3 className='section'>Interests</h3>
      <div className='dark-green-box'>
        
          <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>art</Button>
          <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>hackathons</Button>
          <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>comic books</Button>
          <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>kpop</Button>
          {/* <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>makeup</Button>
          <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>computer science</Button>
          <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>skincare</Button>
          <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>acapella</Button> */}
    
    
        {/* <div className='center-container'> */}
          {/* </div> */}
      </div>

      <h3 className='section'>Top Spendings</h3>
      <div className='dark-green-box'>
        <div className='higher-text'><h5>1. Popmart</h5>
          <h5>2. Basho Express</h5>
          <h5>3. Ticketmaster</h5></div>
          
    
        {/* <div className='center-container'> */}
          {/* </div> */}
      </div>
        <div className='center-container'>
        <Button color="light-green" size="small" onClick={() =>navigate("/Home")}>Home</Button>
      
        </div>
      
    
      
    </div>

  );
}

export default YourProfile;
