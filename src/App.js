import React, { useState } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';


const App = () => {

  const [state, setState] = useState({username: 'Yuuka'});

  const updateNameHandler = (event) => {
    setState({name: event.target.value});
  }

  return (
    <>
      <UserInput changed={updateNameHandler} originalname={state.name}/>
      <UserOutput name={state.username} Nationality="Japan"/>
      <UserOutput name="Maple" Nationality="US" />
    </>
  )
}

export default App;
