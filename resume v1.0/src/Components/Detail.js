import React from 'react';

function Detail({ imageUrl, info }) {
  return (
    <div className='detail'>
      <img src={imageUrl} alt='this is an icon' />
      <p>{info}</p>
    </div>
  );
}

export default Detail;
