import Detail from './Detail';

function Details({ details }) {
  return (
    <div className='details'>
      <h1 className='title'>Details personnels</h1>
      {details.map((detail) => (
        <Detail key={detail.info} {...detail} />
      ))}
    </div>
  );
}

export default Details;
