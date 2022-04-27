import './App.css';

import {
  Name,
  About,
  Details,
  Languages,
  Hobbies,
  Separator,
  Formation,
  Projects,
  Experiences,
  Skills,
  Informatique,
} from './Components';
import {
  name,
  about,
  details,
  languages,
  hobbies,
  formation,
  experiences,
  projects,
  skills,
  informatique,
} from './informations';

function Resume() {
  return (
    <div className='resume'>
      <div className='left-side'>
        <Name {...name} />
        <About {...about} />
        <Details details={details} />
        <Languages languages={languages} />
        <Hobbies hobbies={hobbies} />
      </div>
      <div className='right-side'>
        <Separator
          name='Formation'
          image='https://upload.wikimedia.org/wikipedia/commons/d/dd/Gray_book.png'
        />
        <Formation formation={formation} />
        <Separator
          name='Experiences'
          image='https://cdn-icons-png.flaticon.com/512/1465/1465444.png'
        />
        <Experiences experiences={experiences} />
        <Separator
          name='Projets'
          image='https://cdn-icons-png.flaticon.com/512/1087/1087927.png'
        />
        <Projects projects={projects} />
        <Separator
          name='Competences'
          image='https://e7.pngegg.com/pngimages/354/857/png-clipart-skill-computer-icons-encapsulated-postscript-mental-health-face-logo.png'
        />
        <Skills skills={skills} />
        <Separator
          name='Informatique'
          image='https://e7.pngegg.com/pngimages/568/379/png-clipart-technology-computer-icons-technology-electronics-text.png'
        />
        <Informatique informatique={informatique} />
      </div>
    </div>
  );
}

export default Resume;
