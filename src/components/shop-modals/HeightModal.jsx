import React from 'react';
import { createHeight, deleteHeight } from '../../http/productAPI';
import { Context } from '../..';

const HeightModal = ({ show, onHide }) => {
  const [heightVisible, setHeightVisible] = React.useState(false);
  const { product } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addHeight = () => {
    createHeight({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeHeight = (id) => {
    deleteHeight(id).then((data) => {
      onHide();
    });
  };
  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">Высота</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите высоту
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setHeightVisible((prevState) => !prevState)}>
          Удалить диаметр
        </button>
        <div id="menu" className={heightVisible ? 'admin__height--open' : 'admin__height--close'}>
          {product.heights.map((height) => (
            <button
              onClick={() => removeHeight(height.id)}
              className="admin__btns--add"
              key={height.id}>
              {height.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addHeight}>
            Добавить
          </button>
          <button className="admin__btns--hide" onClick={onHide}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeightModal;
