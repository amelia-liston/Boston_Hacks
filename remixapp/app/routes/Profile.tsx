


import React, { useState } from 'react';
import { useNavigate, useNavigation } from "@remix-run/react";
import { Button } from '~/components/button';
import { TextBox } from '~/components/textBox';


export const Profile: React.FC = () => {
  const navigate = useNavigate();
  
  

    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission with the input value
        console.log('Form submitted with value:', inputValue);
    }; 
  return (

    
    <div className='white-background center-container'>


      <h1 className='welcome'>Create your profile</h1>

      <form onSubmit={handleSubmit}>
       <TextBox type="text" placeholder="First name" onChange={handleInputChange} />
      
    </form>

    <form onSubmit={handleSubmit}>
       <TextBox type="text" placeholder="Last name" onChange={handleInputChange} />
    </form>
     
    <form onSubmit={handleSubmit}>
       <TextBox type="text" placeholder="Username" onChange={handleInputChange} />
    </form>
     
      <Button color="light-green" size="large" onClick={() =>navigate("/Profile")}>Continue</Button>
        <h3 className='little-text'>Already have an account?</h3> <Button color="light-green" size="tiny" onClick={() =>navigate("/Login")}>Log in here</Button>
   
    <h3>What is your major?</h3>
    <form onSubmit={handleSubmit}>
       <TextBox type="text" placeholder="Start Typing..." onChange={handleInputChange} />
    </form>

    </div>
  );
}

export default Profile;