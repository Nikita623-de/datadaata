import React from 'react';
import { createSpeed, deleteSpeed } from '../../http/productAPI';
import { Context } from '../..';

const SpeedModal = ({ show, onHide }) => {
  const [speedVisible, setSpeedVisible] = React.useState(false);
  const { product } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addSpeed = () => {
    createSpeed({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeSpeed = (id) => {
    deleteSpeed(id).then((data) => {
      onHide();
    });
  };
  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">Индекс скорости</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите индекс скорости
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setSpeedVisible((prevState) => !prevState)}>
          Удалить индекс скорости
        </button>
        <div id="menu" className={speedVisible ? 'admin__speed--open' : 'admin__speed--close'}>
          {product.speeds.map((speed) => (
            <button
              onClick={() => removeSpeed(speed.id)}
              className="admin__btns--add"
              key={speed.id}>
              {speed.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addSpeed}>
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

export default SpeedModal;
