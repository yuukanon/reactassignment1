import React, { useState } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';


const App = () => {

  const [state, setState] = useState({username: 'Yuuka'});

  const updateNameHandler = (event) => {
    setState({username: event.target.value});
  }

  return (
    <>
      <UserInput changed={updateNameHandler} originalusername={state.username}/>
      <UserOutput username={state.username} Nationality="Japan"/>
      <UserOutput username="Maple" Nationality="US" />
    </>
  )
}

export default App;
