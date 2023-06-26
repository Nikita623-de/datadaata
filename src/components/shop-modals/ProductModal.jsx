import React, { useState } from 'react';
import { Context } from '../..';
import {
  createProduct,
  deleteProduct,
  fetchBrands,
  fetchDiametrs,
  fetchHeights,
  fetchIndexs,
  fetchSpeeds,
  fetchWidths,
  fetchThorns,
  fetchSeasonalitys,
  productsDelete,
} from '../../http/productAPI';
import { observer } from 'mobx-react-lite';
const ProductModal = observer(({ show, onHide }) => {
  React.useEffect(() => {
    productsDelete().then((data) => product.setProducts(data.rows));
    fetchWidths().then((data) => product.setWidths(data));
    fetchHeights().then((data) => product.setHeights(data));
    fetchBrands().then((data) => product.setBrands(data));
    fetchSpeeds().then((data) => product.setSpeeds(data));
    fetchIndexs().then((data) => product.setIndexs(data));
    fetchDiametrs().then((data) => product.setDiametrs(data));
    fetchThorns().then((data) => product.setThorns(data));
    fetchSeasonalitys().then((data) => product.setSeasonalitys(data));
  }, []);
  const [brandVisible, setBrandVisible] = useState(false);
  const [widthVisible, setWidthVisible] = useState(false);
  const [heightVisible, setHeightVisible] = useState(false);
  const [indexVisible, setIndexVisible] = useState(false);
  const [speedVisible, setSpeedVisible] = useState(false);
  const [diametrVisible, setDiametrVisible] = useState(false);
  const [thornVisible, setThornVisible] = useState(false);
  const [seasonalityVisible, setSeasonalityVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);
  const { product } = React.useContext(Context);
  const [info, setInfo] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);

  const removeProduct = (id) => {
    deleteProduct(id).then((data) => {
      onHide();
    });
  };

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addProduct = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('widthId', product.selectedWidth.id);
    formData.append('heightId', product.selectedHeight.id);
    formData.append('diametrId', product.selectedDiametr.id);
    formData.append('speedId', product.selectedSpeed.id);
    formData.append('indexId', product.selectedIndex.id);
    formData.append('brandId', product.selectedBrand.id);
    formData.append('thornId', product.selectedThorn.id);
    formData.append('seasonalityId', product.selectedSeasonality.id);
    formData.append('info', JSON.stringify(info));
    createProduct(formData).then((data) => {
      onHide();
    });
  };

  return (
    <div className={show ? 'request-modal active' : 'request-modal'} onClick={onHide}>
      <div className="request-modal__content admin__modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="admin__modal-title">Товар</h3>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            value={name}
            onChange={(e) => setName(e.target.value)}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите название товара
          </label>
        </div>
        <div className="form__group">
          <input
            className="form__input auto-shop__input--admin modal__input-admin"
            type="text"
            placeholder=" "
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}></input>
          <label className="form__lable auto-shop__label--admin modal__input-label">
            Введите стоимость товара
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setProductVisible((prevState) => !prevState)}>
          Удалить товар
        </button>
        <div
          id="menu"
          className={productVisible ? 'admin__product--open' : 'admin__product--close'}>
          {product.products.map((product) => (
            <button
              onClick={() => removeProduct(product.id)}
              className="admin__btns--add"
              key={product.id}>
              {product.name}
            </button>
          ))}
        </div>
        <div className="form__group">
          <input
            className="admin__btns--add admin__input-file"
            type="file"
            onChange={selectFile}></input>
        </div>
        <div className="admin__menu-list">
          <div className="admin__menu">
            <button
              className="admin__btns--add"
              onClick={() => {
                setWidthVisible((prevState) => !prevState);
              }}>
              {product.selectedWidth.name || 'Выберите ширину'}
            </button>
            <div id="menu" className={widthVisible ? 'admin__width--open' : 'admin__width--close'}>
              {product.widths.map((width) => (
                <button
                  className="admin__btns--add"
                  key={width.id}
                  onClick={() => {
                    product.setSelectedWidth(width);
                    setWidthVisible((prevState) => !prevState);
                  }}>
                  {width.name}
                </button>
              ))}
            </div>
          </div>
          <div className="admin__menu-list">
            <div className="admin__menu">
              <button
                className="admin__btns--add"
                onClick={() => {
                  setThornVisible((prevState) => !prevState);
                }}>
                {product.selectedThorn.name || 'Выберите шипы'}
              </button>
              <div
                id="menu"
                className={thornVisible ? 'admin__thorn--open' : 'admin__thorn--close'}>
                {product.thorns.map((thorn) => (
                  <button
                    className="admin__btns--add"
                    key={thorn.id}
                    onClick={() => {
                      product.setSelectedThorn(thorn);
                      setThornVisible((prevState) => !prevState);
                    }}>
                    {thorn.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="admin__menu-list">
            <div className="admin__menu">
              <button
                className="admin__btns--add"
                onClick={() => {
                  setSeasonalityVisible((prevState) => !prevState);
                }}>
                {product.selectedSeasonality.name || 'Выберите сезонность'}
              </button>
              <div
                id="menu"
                className={
                  seasonalityVisible ? 'admin__seasonality--open' : 'admin__seasonality--close'
                }>
                {product.seasonalitys.map((seasonality) => (
                  <button
                    className="admin__btns--add"
                    key={seasonality.id}
                    onClick={() => {
                      product.setSelectedSeasonality(seasonality);
                      setSeasonalityVisible((prevState) => !prevState);
                    }}>
                    {seasonality.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="admin__menu">
            <button
              className="admin__btns--add"
              onClick={() => {
                setHeightVisible((prevState) => !prevState);
              }}>
              {product.selectedHeight.name || 'Выберите высоту'}
            </button>
            <div
              id="menu"
              className={heightVisible ? 'admin__height--open' : 'admin__height--close'}>
              {product.heights.map((height) => (
                <button
                  className="admin__btns--add"
                  key={height.id}
                  onClick={() => {
                    product.setSelectedHeight(height);
                    setHeightVisible((prevState) => !prevState);
                  }}>
                  {height.name}
                </button>
              ))}
            </div>
          </div>
          <div className="admin__menu">
            <button
              className="admin__btns--add"
              onClick={() => setBrandVisible((prevState) => !prevState)}>
              {product.selectedBrand.name || 'Выберите брэнд'}
            </button>
            <div id="menu" className={brandVisible ? 'admin__brand--open' : 'admin__brand--close'}>
              {product.brands.map((brand) => (
                <button
                  className="admin__btns--add"
                  key={brand.id}
                  onClick={() => {
                    product.setSelectedBrand(brand);
                    setBrandVisible((prevState) => !prevState);
                  }}>
                  {brand.name}
                </button>
              ))}
            </div>
          </div>
          <div className="admin__menu">
            <button
              className="admin__btns--add"
              onClick={() => setDiametrVisible((prevState) => !prevState)}>
              {product.selectedDiametr.name || 'Выберите диаметр'}
            </button>
            <div
              id="menu"
              className={diametrVisible ? 'admin__diametr--open' : 'admin__diametr--close'}>
              {product.diametrs.map((diametr) => (
                <button
                  className="admin__btns--add"
                  key={diametr.id}
                  onClick={() => {
                    product.setSelectedDiametr(diametr);
                    setDiametrVisible((prevState) => !prevState);
                  }}>
                  {diametr.name}
                </button>
              ))}
            </div>
          </div>
          <div className="admin__menu">
            <button
              className="admin__btns--add"
              onClick={() => setIndexVisible((prevState) => !prevState)}>
              {product.selectedIndex.name || 'Выберите индекс нагрузки'}
            </button>
            <div id="menu" className={indexVisible ? 'admin__index--open' : 'admin__index--close'}>
              {product.indexs.map((index) => (
                <button
                  className="admin__btns--add"
                  key={index.id}
                  onClick={() => {
                    product.setSelectedIndex(index);
                    setIndexVisible((prevState) => !prevState);
                  }}>
                  {index.name}
                </button>
              ))}
            </div>
          </div>
          <div className="admin__menu">
            <button
              className="admin__btns--add"
              onClick={() => setSpeedVisible((prevState) => !prevState)}>
              {product.selectedSpeed.name || 'Выберите индекс скорости'}
            </button>
            <div id="menu" className={speedVisible ? 'admin__speed--open' : 'admin__speed--close'}>
              {product.speeds.map((speed) => (
                <button
                  className="admin__btns--add"
                  key={speed.id}
                  onClick={() => {
                    product.setSelectedSpeed(speed);
                    setSpeedVisible((prevState) => !prevState);
                  }}>
                  {speed.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <button className="admin__btns--add" onClick={addInfo}>
          Добавить новое свойство
        </button>
        {info.map((i) => (
          <div className="admin__info" key={i.number}>
            <div className="form__group">
              <input
                className="form__input auto-shop__input--admin modal__input-admin"
                type="text"
                placeholder=" "
                value={i.title}
                onChange={(e) => changeInfo('title', e.target.value, i.number)}></input>
              <label className="form__lable auto-shop__label--admin modal__input-label">
                Введите название характеристики
              </label>
            </div>
            <div className="form__group">
              <input
                className="form__input auto-shop__input--admin modal__input-admin"
                type="text"
                placeholder=" "
                value={i.description}
                onChange={(e) => changeInfo('description', e.target.value, i.number)}></input>
              <label className="form__lable auto-shop__label--admin modal__input-label">
                Введите описание характеристики
              </label>
            </div>
            <button className="admin__btns--delete" onClick={() => removeInfo(i.number)}>
              Удалить
            </button>
          </div>
        ))}
        <div className="admin__btns">
          <button className="admin__btns--add" onClick={addProduct}>
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

export default ProductModal;
