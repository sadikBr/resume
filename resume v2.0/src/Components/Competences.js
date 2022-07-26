function Competences({ competences }) {
  return (
    <div className='projets'>
      <h1 className='title'>Skills</h1>
      <ul>
        {Object.keys(competences).map((key) => (
          <>
            <li className='projet'>{key}</li>
            <div className='tags'>
              {competences[key].map((tag) => (
                <div className='tag'>{tag}</div>
              ))}
            </div>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Competences;
