import classes from './Products.module.scss';
import CardProduct from './CardProduct/CardProduct';
import data from '../../../data/data';

const Products = () => {
  const productsData = data.products;

  return (
    <div className={classes.Container}>
      <h1>Products</h1>
      <div className={classes.ProductsContainer}>
        {productsData.map((product) => <CardProduct key={product.id} item={product} />)}
      </div>
    </div>
  );
};

export default Products;
