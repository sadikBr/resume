import './App.css';

import {
  Top,
  Formation,
  Projets,
  Competences,
  // Interet,
  Langue,
  Experiences,
} from './Components';
import {
  top,
  formation,
  projets,
  competences,
  // interet,
  langues,
  experiences,
} from './informations8.js';

function Resume() {
  return (
    <div className='resume'>
      <Top {...top} />
      <div className='rest'>
        <div className='left'>
          <Formation formation={formation} />
          <Experiences experiences={experiences} />
          <Projets projets={projets} />
          <Langue langues={langues} />
        </div>
        <div className='right'>
          <Competences competences={competences} />
          {/* <Interet interet={interet} /> */}
        </div>
      </div>
    </div>
  );
}

export default Resume;
