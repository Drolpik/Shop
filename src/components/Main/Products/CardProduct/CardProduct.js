import { Link } from 'react-router-dom';
import classes from './CardProduct.module.scss';

const CardProduct = (props) => {
  const { item } = props;

  return (
    <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
      <div className={classes.Container}>
        <img src={item.photo} alt="smartwatch" />
        <h2>{item.name}</h2>
        <p>
          $
          {item.price}
        </p>
      </div>
    </Link>
  );
};

export default CardProduct;
