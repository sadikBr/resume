import React from 'react';

function Experiences({ experiences }) {
  return (
    <div className='experiences'>
      <h1 className='title'>Professionnal Experiences</h1>
      {experiences.map((exp) => (
        <div className='experience'>
          <h1>{exp.type}</h1>
          <p>{exp.periode}</p>
          {exp.sujet && <h4>{exp.sujet}</h4>}
          {exp.description && (
            <ul className='tache'>
              {exp.description.map((tach) => (
                <li>{tach}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Experiences;
