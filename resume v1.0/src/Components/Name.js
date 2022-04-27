function Name({ firstName, lastName, title }) {
  return (
    <div className='name'>
      <h1>{lastName}</h1>
      <h3>{firstName}</h3>
      <p>{title}</p>
    </div>
  );
}

export default Name;
