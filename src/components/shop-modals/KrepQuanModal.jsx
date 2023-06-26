import React from 'react';
import { createKrepQuan, deleteKrepQuan } from '../../http/productAPI';
import { Context } from '../..';

const KrepQuanModal = ({ show, onHide }) => {
  const [krepQuanVisible, setKrepQuanVisible] = React.useState(false);
  const { disk } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addKrepQuan = () => {
    createKrepQuan({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeKrepQuan = (id) => {
    deleteKrepQuan(id).then((data) => {
      onHide();
    });
  };
  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">КОЛ-ВО КРЕПЕЖНЫХ ОТВЕРСТИЙ</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите КОЛ-ВО КРЕПЕЖНЫХ ОТВЕРСТИЙ
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setKrepQuanVisible((prevState) => !prevState)}>
          Удалить КОЛ-ВО КРЕПЕЖНЫХ ОТВЕРСТИЙ
        </button>
        <div id="menu" className={krepQuanVisible ? 'admin__type--open' : 'admin__type--close'}>
          {disk.krepQuans.map((krepQuan) => (
            <button
              onClick={() => removeKrepQuan(krepQuan.id)}
              className="admin__btns--add"
              key={krepQuan.id}>
              {krepQuan.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addKrepQuan}>
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

export default KrepQuanModal;
