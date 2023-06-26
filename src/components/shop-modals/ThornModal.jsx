import React from 'react';
import { createThorn, deleteThorn } from '../../http/productAPI';
import { Context } from '../..';

const ThornModal = ({ show, onHide }) => {
  const [thornVisible, setThornVisible] = React.useState(false);
  const { product } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addThorn = () => {
    createThorn({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeThorn = (id) => {
    deleteThorn(id).then((data) => {
      onHide();
    });
  };
  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">Шипы</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите Шипы
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setThornVisible((prevState) => !prevState)}>
          Удалить Шипы
        </button>
        <div id="menu" className={thornVisible ? 'admin__thorn--open' : 'admin__thorn--close'}>
          {product.thorns.map((thorn) => (
            <button
              onClick={() => removeThorn(thorn.id)}
              className="admin__btns--add"
              key={thorn.id}>
              {thorn.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addThorn}>
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

export default ThornModal;
