// routes/Home.tsx
import React from 'react';
import { Button } from '~/components/button';
import { useNavigate, useNavigation } from "@remix-run/react";


function Home() {
  const navigate = useNavigate();
  
  return ( <div className='white-background'>
    <div  className="center-container">
      <h1 className='welcome'>Anne Lauve</h1>
      <h3 className='little-text'>computer science, class of 2027</h3> 

    
      <Button onClick={() =>navigate("/Profile")}>Sign Up</Button>
    </div></div>
  );
}

export default Home;
