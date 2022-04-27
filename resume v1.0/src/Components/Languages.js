import Language from './Language';

function Languages({ languages }) {
  return (
    <div className='languages'>
      <h1 className='title'>Langues</h1>
      {languages.map((language) => (
        <Language key={language.name} {...language} />
      ))}
    </div>
  );
}

export default Languages;
