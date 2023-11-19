


import React, { useState } from 'react';
import { useNavigate, useNavigation } from "@remix-run/react";
import { Button } from '~/components/button';
import { TextBox } from '~/components/textBox';
import { Dropdown } from '~/components/dropdown';

export const Interests: React.FC = () => {
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


      <h1 className='welcome'>Choose your interests</h1>

      <div className='same-line'>
      <Button color="white" size="small" onClick={() =>navigate("/Interests")}>sports</Button>  <Button color="white" size="small" onClick={() =>navigate("/Interests")}>music</Button>
  
        <Button color="white" size="small" onClick={() =>navigate("/Interests")}>science</Button>
        <Button color="white" size="small" onClick={() =>navigate("/Interests")}>fashion</Button>
      </div>
      
      <div>
      <Button color="white" size="small" onClick={() =>navigate("/Interests")}>rocks</Button>
    <Button color="light-green" size="large" onClick={() =>navigate("/Interests")}>fitness</Button>

      </div>
    
    </div>
  );
}

export default Interests;