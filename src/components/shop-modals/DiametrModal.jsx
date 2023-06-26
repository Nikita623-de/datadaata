import React from 'react';
import { createDiametr, deleteDiametr } from '../../http/productAPI';
import { Context } from '../..';

const DiametrModal = ({ show, onHide }) => {
  const [diametrVisible, setDiametrVisible] = React.useState(false);
  const { product } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addDiametr = () => {
    createDiametr({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeDiametr = (id) => {
    deleteDiametr(id).then((data) => {
      onHide();
    });
  };
  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">Диаметр шины</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите диаметр
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setDiametrVisible((prevState) => !prevState)}>
          Удалить диаметр
        </button>
        <div id="menu" className={diametrVisible ? 'admin__width--open' : 'admin__width--close'}>
          {product.diametrs.map((diametr) => (
            <button
              onClick={() => removeDiametr(diametr.id)}
              className="admin__btns--add"
              key={diametr.id}>
              {diametr.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addDiametr}>
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

export default DiametrModal;
