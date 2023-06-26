import React from 'react';
import { createType, deleteType } from '../../http/productAPI';
import { Context } from '../..';

const TypeModal = ({ show, onHide }) => {
  const [typeVisible, setTypeVisible] = React.useState(false);
  const { disk } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addType = () => {
    createType({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeType = (id) => {
    deleteType(id).then((data) => {
      onHide();
    });
  };
  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">Тип шины</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите Тип шины
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setTypeVisible((prevState) => !prevState)}>
          Удалить Тип шины
        </button>
        <div
          id="menu"
          className={typeVisible ? 'admin__krep_quan--open' : 'admin__krep_quan--close'}>
          {disk.types.map((type) => (
            <button onClick={() => removeType(type.id)} className="admin__btns--add" key={type.id}>
              {type.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addType}>
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

export default TypeModal;
