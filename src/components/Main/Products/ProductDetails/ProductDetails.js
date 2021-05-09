import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import data from '../../../../data/data';
import classes from './ProductDetails.module.scss';
import { CartContext } from '../../../../context/CartContext';

const ProductDetails = () => {
  const { _id } = useParams();
  const product = data.products.find((p) => p.id === Number(_id));

  const cartContext = useContext(CartContext);
  const { changeNumber } = cartContext;

  const addToCart = () => {
    const items = JSON.parse(localStorage.getItem('product') || '[]');
    let inCart = false;

    for (let i = 0; i < items.length; i++) {
      if (items[i].id === Number(_id)) {
        inCart = true;
        break;
      }
    }
    if (!inCart) {
      const item = {
        id: Number(_id),
        quantity: 1,
      };

      items.push(item);
      changeNumber(1);
    }

    localStorage.setItem('product', JSON.stringify(items));
    NotificationManager.success('Added to cart', '', 2500);
  };

  return (
    <div className={classes.Container}>
      <h1>Details</h1>
      <div className={classes.Intro}>
        <img src={product.photo} alt="smartwatch" />

        <div className={classes.NameAndPrice}>
          <div>
            <h2>{product.name}</h2>
          </div>
          <p>
            $
            {product.price}
          </p>
          <button type="button" onClick={addToCart}>Add to cart</button>
        </div>
      </div>

      <div className={classes.Description}>
        <div>
          <h3>Description</h3>
        </div>
        <p>{product.description}</p>
      </div>

      <div className={classes.Specifications}>
        <div>
          <h3>Specifications</h3>
        </div>
        <table>
          <tbody>
            <tr>
              <td>Memory</td>
              <td>{product.memory}</td>
            </tr>
            <tr className={classes.EvenRow}>
              <td>Battery</td>
              <td>{product.battery}</td>
            </tr>
            <tr>
              <td>Connectivity</td>
              <td>{product.connectivity}</td>
            </tr>
            <tr className={classes.EvenRow}>
              <td>Case size</td>
              <td>{product.caseSize}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
