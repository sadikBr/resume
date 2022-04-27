import React from 'react';

function Informatique({ informatique }) {
  return (
    <ul className='informatique-list'>
      {Object.keys(informatique).map((key) => (
        <div className='key' key={key}>
          <li className="category">{key}</li>
          <ul className='informatique-sudo-list'>
            {informatique[key].map((one) => (
              <li className="category-item" key={one}>{one}</li>
            ))}
          </ul>
        </div>
      ))}
    </ul>
  );
}

export default Informatique;
