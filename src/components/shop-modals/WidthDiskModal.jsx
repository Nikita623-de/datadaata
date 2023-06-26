import React from 'react';
import { createWidthDisk, deleteWidthDisk } from '../../http/productAPI';
import { Context } from '../..';

const WidthDiskModal = ({ show, onHide }) => {
  const [widthDiskVisible, setWidthDiskVisible] = React.useState(false);
  const { disk } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addWidthDisk = () => {
    createWidthDisk({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeWidthDisk = (id) => {
    deleteWidthDisk(id).then((data) => {
      onHide();
    });
  };
  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">ширина диска</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите ширину диска
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setWidthDiskVisible((prevState) => !prevState)}>
          Удалить ширину диска
        </button>
        <div
          id="menu"
          className={widthDiskVisible ? 'admin__width_disk--open' : 'admin__width_disk--close'}>
          {disk.widthDisks.map((widthDisk) => (
            <button
              onClick={() => removeWidthDisk(widthDisk.id)}
              className="admin__btns--add"
              key={widthDisk.id}>
              {widthDisk.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addWidthDisk}>
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

export default WidthDiskModal;
