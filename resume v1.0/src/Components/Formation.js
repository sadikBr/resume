import React from 'react';

function Formation({ formation }) {
  return (
    <>
      {formation.map((formation) => (
        <div className="formation" key={formation.name}>
          <div className='formation-title'>{formation.name}</div>
          <p className='formation-period'>{formation.year}</p>
          <p className='formation-description'>{formation.description}</p>
        </div>
      ))}
    </>
  );
}

export default Formation;
