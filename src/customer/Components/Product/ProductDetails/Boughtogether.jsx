// BoughtTogether.jsx
import React from 'react';
import './styles2.css'

function BoughtTogether({ product }) {
  return (
    <div className="bought-together-card">
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name} className="w-full object-cover object-center" />
      </div>
      <div className="product-info">
        <div className="product-title">
          <h3>
            {product?.brand || product?.title}
          </h3>
          <p className="text-sm text-gray-500">{product?.title && product?.brand && `${product.brand} -`}{product?.title}</p>
        </div>
        <div className="price">
          ${product.price}
        </div>
      </div>
    </div>
  );
}

export default BoughtTogether;
