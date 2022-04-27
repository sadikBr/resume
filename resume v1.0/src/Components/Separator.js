import React from 'react';

function Separator({ name, image }) {
  return (
    <div className='separator'>
      <img src={image} alt='this is an icon' />
      {name}
    </div>
  );
}

export default Separator;
