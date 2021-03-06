import { Link } from 'react-router-dom';
import classes from './Home.module.scss';
import homeIntro from '../../../assets/homeIntro.svg';

const Home = () => (
  <div className={classes.Intro}>
    <div className={classes.IntroLeft}>
      <h1>Each purchase will be made with pleasure!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, adipisci ex.</p>

      <Link to="/products">
        <button type="button">Check products</button>
      </Link>
    </div>
    <div className={classes.IntroRight}>
      <img src={homeIntro} alt="img" />
    </div>
  </div>
);

export default Home;
