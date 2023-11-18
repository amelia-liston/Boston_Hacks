import React from 'react';
import { Button, ButtonLightPurple } from '~/components/button';
import { useNavigate, useNavigation } from "@remix-run/react";

const Landing = () => {
    const navigate = useNavigate();
    return <div>
    <h1>Welcome to Fuddy!</h1>
    <Button onClick={() =>navigate("/LogIn")}>Log In</Button>
    <ButtonLightPurple onClick={() =>navigate("/SignUp")}>Sign Up</ButtonLightPurple>
    
  </div>
}

export default Landing;