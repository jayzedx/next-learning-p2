import React from 'react';
import styles from './ProductCard.module.css';
import AddToCart from '../AddToCart';

const ProductCard = () => {
  return (
    <div
      className={`${styles.card} p-5 my-5 text-center text-white text-xl rounded-lg`}
    >
      <AddToCart />
    </div>
  );
};

export default ProductCard;
