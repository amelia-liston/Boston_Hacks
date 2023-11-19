// routes/Home.tsx
import React from 'react';
import { Button } from '~/components/button';
import { useNavigate, useNavigation } from "@remix-run/react";


function YourProfile() {
  const navigate = useNavigate();
  
  return ( <div className='white-background'>
    <div  className="center-container">
      <h1 className='welcome'>Anne Lauve</h1>
      <h3 className='little-text'>computer science, class of 2027</h3> 
      <h3 className='sectiion'>Active Tables</h3>

      <Button onClick={() =>navigate("/Profile")}></Button>
    
    
      <Button color="light-green" size="small" onClick={() =>navigate("/Profile")}>Home</Button>
    </div></div>
  );
}

export default YourProfile;
