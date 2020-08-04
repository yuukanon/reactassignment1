import React, { useState } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';


const App = () => {

  const [state, setState] = useState({
    list: [
      {username: 'Yuuka', Nationality: 'Hungary'},
      {username: 'Maple', Nationality: 'US'},
      {username: 'Momo', Nationality: 'Japan'},
    ] 
  });

  const updateNameHandler = (event) => {
    setState({
      list: [
        {username: 'Yuuka', Nationality: 'Hungary'},
        {username:  event.target.value, Nationality: 'US'},
        {username: 'Momo', Nationality: 'Japan'},
      ] 
    })
    
  }

  return (
    <>
      <UserInput />
      <UserOutput username={state.list[0].username} Nationality={state.list[0].Nationality} />
      <UserOutput username="Maple" Nationality="US" changed={updateNameHandler} />
      <UserOutput username={state.list[2].username} Nationality={state.list[2].Nationality} />
    </>
  )
}

export default App;
