import React from 'react';

interface ProductProps {
  uid: string;
  brand: string;
  specs: string;
  date: string;
  img_url: string;
}

const ProductCard: React.FC<ProductProps> = ({ uid, brand, specs, date, img_url }) => {
  return (
    <div className="product-card">
      <img src={img_url} alt={`${brand} ${uid}`} />
      <h3>{brand} - {uid}</h3>
      <p>{specs}</p>
      <p><strong>Date:</strong> {date}</p>
    </div>
  );
};

export default ProductCard;