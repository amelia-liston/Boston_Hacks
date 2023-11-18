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
    return <div>
    <h1>Welcome to Fuddy!</h1>
    <Button color="light-purple" size="small" onClick={() =>navigate("/LogIn")}>Log In</Button>
    <Button color="dark-purple" size="large" onClick={() =>navigate("/SignUp")}>Sign Up</Button>
    
  </div>
}

export default Landing;