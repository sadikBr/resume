function Projets({ projets }) {
  return (
    <div className='projets'>
      <h1 className='title'>Projects</h1>
      <ul>
        {Object.keys(projets).map((key) => (
          <>
            <li className='projet'>{key}</li>
            <div className='tags'>
              {projets[key].map((tag) => (
                <div className='tag'>{tag}</div>
              ))}
            </div>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Projets;
