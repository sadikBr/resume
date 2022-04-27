import React from 'react';

function Hobby({ imageUrl, name }) {
  return (
    <div className='hobby'>
      <img src={imageUrl} alt='this is an icon' />
      <h3>{name}</h3>
    </div>
  );
}

export default Hobby;
