import React from 'react';
import { createVilet, deleteVilet } from '../../http/productAPI';
import { Context } from '../..';

const ViletModal = ({ show, onHide }) => {
  const [viletVisible, setViletVisible] = React.useState(false);
  const { disk } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addVilet = () => {
    createVilet({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeVilet = (id) => {
    deleteVilet(id).then((data) => {
      onHide();
    });
  };
  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">Вылет</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите Вылет
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setViletVisible((prevState) => !prevState)}>
          Удалить Вылет
        </button>
        <div id="menu" className={viletVisible ? 'admin__vilet--open' : 'admin__vilet--close'}>
          {disk.vilets.map((vilet) => (
            <button
              onClick={() => removeVilet(vilet.id)}
              className="admin__btns--add"
              key={vilet.id}>
              {vilet.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addVilet}>
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

export default ViletModal;
