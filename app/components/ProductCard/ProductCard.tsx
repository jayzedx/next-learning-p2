import React from 'react';
import styles from './ProductCard.module.css';
import AddToCart from '../AddToCart';

const ProductCard = () => {
  return (
    <div
      className={`${styles.card} p-5 my-5  cursor-pointer text-center text-white text-xl rounded-full bg-cyan-600 hover:bg-cyan-800`}
    >
      <AddToCart />
    </div>
  );
};

export default ProductCard;
