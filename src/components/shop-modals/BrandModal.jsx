import React from 'react';
import { createBrand, deleteBrand } from '../../http/productAPI';
import { Context } from '../..';

const BrandModal = ({ show, onHide }) => {
  const [brandVisible, setBrandVisible] = React.useState(false);
  const { product } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addBrand = () => {
    createBrand({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeBrand = (id) => {
    deleteBrand(id).then((data) => {
      onHide();
    });
  };

  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">брэнд</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите брэнд
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setBrandVisible((prevState) => !prevState)}>
          Удалить брэнд
        </button>
        <div id="menu" className={brandVisible ? 'admin__brand--open' : 'admin__brand--close'}>
          {product.brands.map((brand) => (
            <button
              onClick={() => removeBrand(brand.id)}
              className="admin__btns--add"
              key={brand.id}>
              {brand.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addBrand}>
            Добавить
          </button>
          <button className="admin__btns--delete">Удалить</button>
          <button className="admin__btns--hide" onClick={onHide}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandModal;
