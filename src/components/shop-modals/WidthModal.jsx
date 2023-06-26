import React from 'react';
import { createWidth, deleteWidth, fetchWidths } from '../../http/productAPI';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const WidthModal = observer(({ show, onHide }) => {
  const [widthVisible, setWidthVisible] = React.useState(false);
  const { product } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addWidth = () => {
    createWidth({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeWidth = (id) => {
    deleteWidth(id).then((data) => {
      onHide();
    });
  };

  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">Ширина</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            value={value}
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите ширину
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setWidthVisible((prevState) => !prevState)}>
          Удалить ширину
        </button>
        <div id="menu" className={widthVisible ? 'admin__width--open' : 'admin__width--close'}>
          {product.widths.map((width) => (
            <button
              onClick={() => removeWidth(width.id)}
              className="admin__btns--add"
              key={width.id}>
              {width.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addWidth}>
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
});

export default WidthModal;
