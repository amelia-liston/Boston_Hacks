// routes/Home.tsx
import React from 'react';
import { Button } from '~/components/button';
import { useNavigate, useNavigation } from "@remix-run/react";


function Home() {
  const navigate = useNavigate();
  
  return (
    <div  className="center-container">
      <h1>Welcome to Remix!</h1>
      <p>This is your home page.</p>
      <Button onClick={() =>navigate("/Profile")}>Sign Up</Button>
    </div>
  );
}

export default Home;
