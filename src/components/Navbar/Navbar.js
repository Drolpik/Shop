import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.scss';
import cart from '../../assets/cart.svg';
import Backdrop from './Backdrop/Backdrop';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
  const [burger, switchBurger] = useState(false);

  const toggleBurger = () => switchBurger(!burger);

  const toggleBurgerClass = burger ? classes.Toggle : null;
  const navActive = burger ? classes.NavActive : null;

  const cartContext = useContext(CartContext);
  const { numOfProducts } = cartContext;

  return (
    <div className={classes.Container}>
      <Backdrop show={burger} clicked={toggleBurger} />
      <nav>
        <div
          role="button"
          className={[classes.Burger, toggleBurgerClass].join(' ')}
          onClick={toggleBurger}
        >
          <div className={classes.Line1} />
          <div className={classes.Line2} />
          <div className={classes.Line3} />
        </div>
        <Link to="/" className={[classes.Link, classes.LogoLink].join(' ')}>
          <h1>Logo</h1>
        </Link>
        <ul className={[classes.NavLinks, navActive].join(' ')}>
          <Link to="/" className={classes.Link}>
            <li>Home</li>
          </Link>
          <Link to="/products" className={classes.Link}>
            <li>Products</li>
          </Link>
          <Link to="/about" className={classes.Link}>
            <li>About</li>
          </Link>
        </ul>

        <div className={classes.NavCart}>
          <span>{numOfProducts}</span>
          <Link to="/cart" className={[classes.Link, classes.CartLink].join(' ')}>
            <img src={cart} alt="cart" width="20" />
          </Link>

          <div className={classes.NavLogIn}>
            <Link to="login" className={[classes.Link, classes.LogInLink].join(' ')}>
              <li>Login</li>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
