import React from 'react';
import { createIndex, deleteIndex, fetchIndexs } from '../../http/productAPI';
import { Context } from '../..';

const IndexModal = ({ show, onHide }) => {
  const [indexVisible, setIndexVisible] = React.useState(false);
  const { product } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addIndex = () => {
    createIndex({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeIndex = (id) => {
    deleteIndex(id).then((data) => {
      onHide();
    });
  };
  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">Индекс нагрузки</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите индекс нагрузки
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setIndexVisible((prevState) => !prevState)}>
          Удалить индекс нагрузки
        </button>
        <div id="menu" className={indexVisible ? 'admin__index--open' : 'admin__index--close'}>
          {product.indexs.map((index) => (
            <button
              onClick={() => removeIndex(index.id)}
              className="admin__btns--add"
              key={index.id}>
              {index.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addIndex}>
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

export default IndexModal;
