import Hobby from './Hobby';

function Hobbies({ hobbies }) {
  return (
    <div className='hobbies'>
      <h1 className='title'>Centres d'interet</h1>
      <div className='hobbies-container'>
        {hobbies.map((hobby) => (
          <Hobby key={hobby.name} {...hobby} />
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
