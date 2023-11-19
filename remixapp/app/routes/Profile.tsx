


import React, { useState } from 'react';
import { useNavigate, useNavigation } from "@remix-run/react";
import { Button } from '~/components/button';
import { TextBox } from '~/components/textBox';
import { Dropdown } from '~/components/dropdown';

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


  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
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
     
    <h3 className='h3'>What is your major?</h3>
    <form onSubmit={handleSubmit}>
       <TextBox type="text" placeholder="Start Typing..." onChange={handleInputChange} />
    </form>

    <h3 className='h3'>What is your expected graduation date?</h3>
    <form>
    <p className='h3'>Month: </p> <Dropdown options={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} onChange={handleDropdownChange} />
      
    </form>

    <form>
    <p className='h3'>Year: </p> <Dropdown options={['2024', '2025', '2026', '2027']} onChange={handleDropdownChange} />
      
    </form>

    <h3 className='h3'>List any allergies/dietary restrictions</h3>
    <form onSubmit={handleSubmit}>
       <TextBox type="text" placeholder="" onChange={handleInputChange} />
    </form>
    <Button color="light-green" size="large" onClick={() =>navigate("/Interests")}>Continue</Button>

    </div>
  );
}

export default Profile;