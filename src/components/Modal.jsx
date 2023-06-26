import React from 'react';
import Form from '../sample/Form';

export const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? 'request-modal active' : 'request-modal'}
      onClick={() => setActive(false)}>
      <div className="request-modal__content" onClick={(e) => e.stopPropagation()}>
        <img
          className="request__close"
          src="./images/close.png"
          alt=""
          onClick={() => setActive(false)}
        />
        <Form />
      </div>
    </div>
  );
};
