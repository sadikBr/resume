import profile from '../assets/profile.jpg';

function About({ need, aboutMe }) {
  return (
    <div className='about'>
      <img src={profile} alt='profile' />
      <h1>A propos de moi</h1>
      <p>{aboutMe}</p>
      <p>{need}</p>
    </div>
  );
}

export default About;
