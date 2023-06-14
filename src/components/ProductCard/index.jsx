import React from 'react';
import Link from 'next/link';
import styles from "../../pages/productlist/ProductCard.module.css";

const ProductCard = ({ product }) => {

  return (
      <a>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 container ${styles.productCard}`}>
          <div className="flex flex-col items-center">
            <img className={`w-1/2 h-auto object-contain mb-4 ${styles.productImage}`} src={product.image} alt={product.title} />
            <h2 className={`text-lg text-black ${styles.textcustom}`}>{product.name}</h2>
            <p className="text-black-600">Price: £{product.price}</p>
          </div>
        </div>
      </a>
  );
};

export default ProductCard;
