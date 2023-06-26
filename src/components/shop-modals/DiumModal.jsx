import React from 'react';
import { createDium, deleteDium } from '../../http/productAPI';
import { Context } from '../..';

const DiumModal = ({ show, onHide }) => {
  const [diumVisible, setDiumVisible] = React.useState(false);
  const { disk } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addDium = () => {
    createDium({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeDium = (id) => {
    deleteDium(id).then((data) => {
      onHide();
    });
  };
  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">DIA</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите Dia
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setDiumVisible((prevState) => !prevState)}>
          Удалить DIA
        </button>
        <div id="menu" className={diumVisible ? 'admin__dium--open' : 'admin__dium--close'}>
          {disk.diums.map((dium) => (
            <button onClick={() => removeDium(dium.id)} className="admin__btns--add" key={dium.id}>
              {dium.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addDium}>
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

export default DiumModal;
