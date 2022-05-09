import React from 'react';

function Interet({ interet }) {
  return (
    <div className='interets'>
      <h1 className='title'>Centres d'interets</h1>
      <ul>
        {interet.map((one) => (
          <li className='interet'>{one}</li>
        ))}
      </ul>
    </div>
  );
}

export default Interet;
