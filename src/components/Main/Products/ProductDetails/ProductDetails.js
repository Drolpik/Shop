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
