import React from 'react';
import { Button} from '~/components/button';
import { useNavigate, useNavigation } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Fuddy" },
    { name: "description", content: "Welcome to Remix!" },
  ];
}; 
const Landing = () => {
    const navigate = useNavigate();
    return <div className="home-background">
      <div className="center-container">
    <h1 className='fuddy'>Fuddy!</h1>
    <Button color="dark-green" size="small" onClick={() =>navigate("/LogIn")}>Log In</Button>
    <Button color="white" size="small" onClick={() =>navigate("/SignUp")}>Sign Up</Button>
    
  </div>
  </div>
}

export default Landing;