import React from 'react';
import { createDiametrDiskKrep, deleteDiametrDiskKrep } from '../../http/productAPI';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const DiametrDiskKrepModal = observer(({ show, onHide }) => {
  const [diametrDiskKrepVisible, setDiametrDiskKrepVisible] = React.useState(false);
  const { disk } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addDiametrDiskKrep = () => {
    createDiametrDiskKrep({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeDiametrDiskKrep = (id) => {
    deleteDiametrDiskKrep(id).then((data) => {
      onHide();
    });
  };

  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">ДИАМЕТР ПОД КРЕПЕЖНЫЕ ОТВЕРСТИЯ</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            value={value}
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите ДИАМЕТР ПОД КРЕПЕЖНЫЕ ОТВЕРСТИЯ
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setDiametrDiskKrepVisible((prevState) => !prevState)}>
          Удалить ДИАМЕТР ПОД КРЕПЕЖНЫЕ ОТВЕРСТИЯ
        </button>
        <div
          id="menu"
          className={
            diametrDiskKrepVisible
              ? 'admin__diametr_disk_krep--open'
              : 'admin__diametr_disk_krep--close'
          }>
          {disk.diametrDiskKreps.map((diametrDiskKrep) => (
            <button
              onClick={() => removeDiametrDiskKrep(diametrDiskKrep.id)}
              className="admin__btns--add"
              key={diametrDiskKrep.id}>
              {diametrDiskKrep.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addDiametrDiskKrep}>
            Добавить
          </button>
          <button className="admin__btns--hide" onClick={onHide}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
});

export default DiametrDiskKrepModal;
