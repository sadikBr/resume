import React from 'react';

function Skills({ skills }) {
  return (
    <ul className='skills-list'>
      {skills.map((skill) => (
        <li className='skill' key={skill}>
          {skill}
        </li>
      ))}
    </ul>
  );
}

export default Skills;
