import React from 'react';

function Interet({ interet }) {
  return (
    <div className='interets'>
      <h1 className='title'>Hobbies</h1>
      <ul>
        {interet.map((one) => (
          <li className='interet'>{one}</li>
        ))}
      </ul>
    </div>
  );
}

export default Interet;
