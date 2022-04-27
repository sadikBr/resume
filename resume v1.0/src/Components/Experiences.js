import React from 'react';

function Experiences({ experiences }) {
  return (
    <>
      {experiences.map((experience) => (
        <div className="experience" key={experience.name}>
          <div className='experience-title'>{experience.name}</div>
          <p className='experience-period'>{experience.year}</p>
          <p className='experience-description'>{experience.description}</p>
        </div>
      ))}
    </>
  );
}

export default Experiences;
