import React from 'react';
import { createSeasonality, deleteSeasonality } from '../../http/productAPI';
import { Context } from '../..';

const SeasonalityModal = ({ show, onHide }) => {
  const [seasonalityVisible, setSeasonalityVisible] = React.useState(false);
  const { product } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addSeasonality = () => {
    createSeasonality({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeSeasonality = (id) => {
    deleteSeasonality(id).then((data) => {
      onHide();
    });
  };
  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">Сезонность</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите Сезонность
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setSeasonalityVisible((prevState) => !prevState)}>
          Удалить Сезонность
        </button>
        <div
          id="menu"
          className={seasonalityVisible ? 'admin__seasonality--open' : 'admin__seasonality--close'}>
          {product.seasonalitys.map((seasonality) => (
            <button
              onClick={() => removeSeasonality(seasonality.id)}
              className="admin__btns--add"
              key={seasonality.id}>
              {seasonality.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addSeasonality}>
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

export default SeasonalityModal;
