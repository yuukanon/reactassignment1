import React from 'react';

const UserOutput = (props) => {
  return (
    <div className="username">
      <p>My username is {props.username}.</p>
     <p>I am from {props.Nationality}.</p>
    </div>

  )
}

export default UserOutput;