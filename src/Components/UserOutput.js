import React from 'react';

const UserOutput = (props) => {
  return (
    <div className="name">
      <p>My username is {props.name}.</p>
      <p>I am from {props.Nationality}.</p>
    </div>

  )
}

export default UserOutput;