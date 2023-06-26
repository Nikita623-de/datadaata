import React from 'react';
import { createDiametrDisk, deleteDiametrDisk } from '../../http/productAPI';
import { Context } from '../..';

const DiametrDiskModal = ({ show, onHide }) => {
  const [diametrDiskVisible, setDiametrDiskVisible] = React.useState(false);
  const { disk } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addDiametrDisk = () => {
    createDiametrDisk({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeDiametrDisk = (id) => {
    deleteDiametrDisk(id).then((data) => {
      onHide();
    });
  };
  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">Диаметр диска</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите диаметр диска
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setDiametrDiskVisible((prevState) => !prevState)}>
          Удалить диаметр диска
        </button>
        <div
          id="menu"
          className={diametrDiskVisible ? 'admin__width--open' : 'admin__width--close'}>
          {disk.diametrDisks.map((diametrDisk) => (
            <button
              onClick={() => removeDiametrDisk(diametrDisk.id)}
              className="admin__btns--add"
              key={diametrDisk.id}>
              {diametrDisk.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addDiametrDisk}>
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

export default DiametrDiskModal;
