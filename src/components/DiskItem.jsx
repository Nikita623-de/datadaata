import React from 'react';
import { useNavigate } from 'react-router-dom';

const DiskItem = ({ disk }) => {
  const navigate = useNavigate();
  return (
    <div className="auto-shop__card">
      <img
        className="auto-shop__card-img"
        src={process.env.REACT_APP_API_URL + disk.img}
        alt="product"
      />
      <p className="auto-shop__card-text">{disk.name}</p>
      <span className="auto-shop__card-price">{disk.price}р</span>
      <button
        className="auto-shop__btn btn btn--gray"
        onClick={() => navigate('/disk-info/' + disk.id)}>
        Подробнее
      </button>
    </div>
  );
};

export default DiskItem;
