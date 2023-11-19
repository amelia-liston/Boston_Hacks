


import React, { useState } from 'react';
import { useNavigate, useNavigation } from "@remix-run/react";
import { Button } from '~/components/button';
import { TextBox } from '~/components/textBox';
import { Dropdown } from '~/components/dropdown';

export const Preferences: React.FC = () => {
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


      <h1 className='welcome'>Preferences</h1>

      
    

    <h3 className='h3'>Do you prefer to meet people within or outside of your major?</h3>
    <form>
    <p className='h3'>(Select) </p> <Dropdown options={['Within my major', 'I want to meet anybody']} onChange={handleDropdownChange} />
      
    </form>

    
    <Button color="light-green" size="large" onClick={() =>navigate("/Home")}>Continue</Button>

    </div>
  );
}

export default Preferences;