import React from 'react';
import profile from '../assets/profile.jpg';

function Top({ name, description, contacts }) {
  return (
    <div className='top'>
      <div className='top-left'>
        <h1>{name}</h1>
        <p>{description}</p>
        {contacts.map((contact) => (
          <div className='contact'>
            {contact.map((one) => (
              <div className='part'>
                <img src={one.image} alt='this is an icon' />
                <p>{one.value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='top-right'>
        <img src={profile} alt='this is a profile' />
      </div>
    </div>
  );
}

export default Top;
