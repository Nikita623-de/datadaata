import React from 'react';
import { createBrandDisk, deleteBrandDisk } from '../../http/productAPI';
import { Context } from '../..';

const BrandDiskModal = ({ show, onHide }) => {
  const [brandDiskVisible, setBrandDiskVisible] = React.useState(false);
  const { disk } = React.useContext(Context);
  const [value, setValue] = React.useState('');

  const addBrandDisk = () => {
    createBrandDisk({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  const removeBrandDisk = (id) => {
    deleteBrandDisk(id).then((data) => {
      onHide();
    });
  };

  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin-modal__title">брэнд</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            onChange={(e) => setValue(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите брэнд
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setBrandDiskVisible((prevState) => !prevState)}>
          Удалить брэнд
        </button>
        <div
          id="menu"
          className={brandDiskVisible ? 'admin__brand_disk--open' : 'admin__brand_disk--close'}>
          {disk.brandDisks.map((brand) => (
            <button
              onClick={() => removeBrandDisk(brand.id)}
              className="admin__btns--add"
              key={brand.id}>
              {brand.name}
            </button>
          ))}
        </div>
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addBrandDisk}>
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

export default BrandDiskModal;
