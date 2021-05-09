import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const products = JSON.parse(localStorage.getItem('product') || '[]');
  const [numOfProducts, setNumOfProducts] = useState(products.length);

  const changeNumber = (num) => {
    setNumOfProducts(num === null ? 0 : numOfProducts + num);
  };

  return (
    <CartContext.Provider value={{ numOfProducts, changeNumber }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
