


import React, { useState } from 'react';
import { useNavigate, useNavigation } from "@remix-run/react";
import { Button } from '~/components/button';
import { TextBox } from '~/components/textBox';
import { Dropdown } from '~/components/dropdown';

export const Home: React.FC = () => {
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

        <h3 className='h3'>where are you located?</h3>
        <form>
        <Dropdown options={['Warren', 'West', 'Marciano Commons', 'GSU']} onChange={handleDropdownChange} />
        
        </form>

    <h3 className='section'>sort by</h3>
      <div className='thin-green-box'>
        
        <h3 className='higher-text'>interests spending major grade</h3>

          
    
      </div>

      <h3 className='section'>recommended</h3>
      <div className='dark-green-box2'>
        
            <h3 className='welcome highest-text'>James Hart</h3>
            <h5 className='high2-text'>82% interest match</h5>
            <h5 className='high2-text'>33% spendings match</h5>
        <div className='high3'>
          <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>skateboarding</Button>
          <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>computer science</Button>
         </div> <div className='high4'>
          <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>comic books</Button>
          <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>League of Legends</Button>
          </div>
          {/* <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>makeup</Button>
          <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>computer science</Button>
          <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>skincare</Button>
          <Button color="light-green" size='tiny' onClick={() =>navigate("/Profile")}>acapella</Button> */}
    
    
        {/* <div className='center-container'> */}
          {/* </div> */}
      </div>
      


      

      
    <Button color="light-green" size="large" onClick={() =>navigate("/Interests")}>Continue</Button>

    </div>
  );
}

export default Home;