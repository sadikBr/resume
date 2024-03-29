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
} from './brahim-informatique';

function Resume() {
  return (
    <div className='resume'>
      <Top {...top} />
      <div className='rest'>
        <div className='left'>
          <Formation formation={formation} />
          <Experiences experiences={experiences} />
          <Projets projets={projets} />
          {/* <Interet interet={interet} /> */}
        </div>
        <div className='right'>
          <Competences competences={competences} />
          <Langue langues={langues} />
        </div>
      </div>
    </div>
  );
}

export default Resume;
