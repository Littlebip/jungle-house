import '../styles/Banner.css';
import logo from '../assets/logo.png';
import Recommendation from './Recommendation';

function Banner() {

  return (<div className="jh-banner">
    <div className="jh-title">
      <img src={logo} alt='Jungle House' className='jh-logo' />
      <h1>Jungle House</h1>
    </div>
    <Recommendation />
  </div>)
}

export default Banner
