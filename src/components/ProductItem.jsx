import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="auto-shop__card">
      <img
        className="auto-shop__card-img"
        src={process.env.REACT_APP_API_URL + product.img}
        alt="product"
      />
      <p className="auto-shop__card-text">{product.name}</p>
      <span className="auto-shop__card-price">{product.price}р</span>
      <button
        className="auto-shop__btn btn btn--gray"
        onClick={() => navigate('/product-info/' + product.id)}>
        Подробнее
      </button>
    </div>
  );
};

export default ProductItem;
