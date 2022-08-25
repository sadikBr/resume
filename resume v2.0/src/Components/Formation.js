function Formation({ formation }) {
  return (
    <div className='formation'>
      <h1 className='title'>Formation</h1>
      {formation.map((one, index) => (
        <div className='one'>
          <h2>{one.niveau}</h2>
          <h3>{one.ecole}</h3>
          <p>{one.periode}</p>
          {one.description && <p className='description'>{one.description}</p>}
          {index !== formation.length - 1 && (
            <div className='sep'>
              ---------------------------------------------------------------------------------------------------------------------------
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Formation;
