import React from 'react';

export default function Card(props) {
  return (
    <>
      <div className='Card'>
        <h2 className='name'>{props.smurf.name}</h2>
        <ul>
          <li>Age: {props.smurf.age}</li>
          <li>Height: {props.smurf.height}</li>
        </ul>
      </div>
    </>
  );
}
