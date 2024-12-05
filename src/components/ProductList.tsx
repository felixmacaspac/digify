import React from 'react';
import ProductCard from './ProductCard';
import data from "../../dummy_data.json";

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      {data.map((product) => (
        <ProductCard
          key={product.uid}
          uid={product.uid}
          brand={product.brand}
          specs={product.specs}
          date={product.date}
          img_url={product.img_url}
        />
      ))}
    </div>
  );
};

export default ProductList;