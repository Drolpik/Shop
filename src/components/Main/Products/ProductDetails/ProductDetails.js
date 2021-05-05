import { useParams } from 'react-router-dom';
import data from '../../../../data/data';
import classes from './ProductDetails.module.scss';

const ProductDetails = () => {
  const { _id } = useParams();
  const product = data.products.find((p) => p.id === Number(_id));

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
          <button type="button">Add to cart</button>
        </div>
      </div>

      <div className={classes.Description}>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
