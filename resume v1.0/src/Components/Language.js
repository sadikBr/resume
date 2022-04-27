import React from 'react';
import ProgressBar from './ProgressBar';

function Language({ name, level }) {
  return (
    <div className='language'>
      <h3>{name}</h3>
      <ProgressBar progress={level} />
    </div>
  );
}

export default Language;
