import React from 'react';

function Langue({ langues }) {
  return (
    <div className='langues'>
      <h1 className='title'>Languages</h1>
      <ul>
        {langues.map((one) => (
          <li className='langue'>{one}</li>
        ))}
      </ul>
    </div>
  );
}

export default Langue;
