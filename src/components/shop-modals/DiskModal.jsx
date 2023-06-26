import React, { useState } from 'react';
import { Context } from '../..';
import {
  createDisk,
  deleteDisk,
  fetchVilets,
  fetchDiums,
  fetchKrepQuans,
  fetchTypes,
  fetchWidthDisks,
  fetchBrandDisks,
  fetchDiametrDisks,
  fetchDiametrDiskKreps,
  disksDelete,
} from '../../http/productAPI';
import { observer } from 'mobx-react-lite';
const ProductModal = observer(({ show, onHide }) => {
  React.useEffect(() => {
    disksDelete().then((data) => disk.setDisks(data.rows));
    fetchVilets().then((data) => disk.setVilets(data));
    fetchDiums().then((data) => disk.setDiums(data));
    fetchTypes().then((data) => disk.setTypes(data));
    fetchKrepQuans().then((data) => disk.setKrepQuans(data));
    fetchWidthDisks().then((data) => disk.setWidthDisks(data));
    fetchDiametrDisks().then((data) => disk.setDiametrDisks(data));
    fetchDiametrDiskKreps().then((data) => disk.setDiametrDiskKreps(data));
    fetchBrandDisks().then((data) => disk.setBrandDisks(data));
  }, []);
  const [viletVisible, setViletVisible] = useState(false);
  const [diumVisible, setDiumVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [krepQuanVisible, setKrepQuanVisible] = useState(false);
  const [widthDiskVisible, setWidthDiskVisible] = useState(false);
  const [brandDiskVisible, setBrandDiskVisible] = useState(false);
  const [diametrDiskKrepVisible, setDiametrDiskKrepVisible] = useState(false);
  const [diametrDiskVisible, setDiametrDiskVisible] = useState(false);
  const [diskVisible, setDiskVisible] = useState(false);
  const { disk } = React.useContext(Context);
  const [info, setInfo] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);

  const removeDisk = (id) => {
    deleteDisk(id).then((data) => {
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

  const addDisk = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('viletId', disk.selectedVilet.id);
    formData.append('diumId', disk.selectedDium.id);
    formData.append('krepQuanId', disk.selectedKrepQuan.id);
    formData.append('typeId', disk.selectedType.id);
    formData.append('widthDiskId', disk.selectedWidthDisk.id);
    formData.append('brandDiskId', disk.selectedBrandDisk.id);
    formData.append('diametrDiskId', disk.selectedDiametrDisk.id);
    formData.append('diametrDiskKrepId', disk.selectedDiametrDiskKrep.id);
    formData.append('info', JSON.stringify(info));
    createDisk(formData).then((data) => {
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
            Введите название диска
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
            Введите стоимость диска
          </label>
        </div>
        <button
          className="admin__btns--add"
          onClick={() => setDiskVisible((prevState) => !prevState)}>
          Удалить диск
        </button>
        <div id="menu" className={diskVisible ? 'admin__disk--open' : 'admin__disk--close'}>
          {disk.disks.map((disk) => (
            <button onClick={() => removeDisk(disk.id)} className="admin__btns--add" key={disk.id}>
              {disk.name}
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
                setWidthDiskVisible((prevState) => !prevState);
              }}>
              {disk.selectedWidthDisk.name || 'Выберите ширину диска'}
            </button>
            <div
              id="menu"
              className={widthDiskVisible ? 'admin__width--open' : 'admin__width--close'}>
              {disk.widthDisks.map((width) => (
                <button
                  className="admin__btns--add"
                  key={width.id}
                  onClick={() => {
                    disk.setSelectedWidthDisk(width);
                    setWidthDiskVisible((prevState) => !prevState);
                  }}>
                  {width.name}
                </button>
              ))}
            </div>
          </div>
          <div className="admin__menu">
            <button
              className="admin__btns--add"
              onClick={() => {
                setDiametrDiskVisible((prevState) => !prevState);
              }}>
              {disk.selectedDiametrDisk.name || 'Выберите диаметр диска'}
            </button>
            <div
              id="menu"
              className={
                diametrDiskVisible ? 'admin__diametr_disk--open' : 'admin__diametr_disk--close'
              }>
              {disk.diametrDisks.map((diametrDisk) => (
                <button
                  className="admin__btns--add"
                  key={diametrDisk.id}
                  onClick={() => {
                    disk.setSelectedDiametrDisk(diametrDisk);
                    setDiametrDiskVisible((prevState) => !prevState);
                  }}>
                  {diametrDisk.name}
                </button>
              ))}
            </div>
          </div>
          <div className="admin__menu">
            <button
              className="admin__btns--add"
              onClick={() => setKrepQuanVisible((prevState) => !prevState)}>
              {disk.selectedKrepQuan.name || 'Выберите КОЛ-ВО КРЕПЕЖНЫХ ОТВЕРСТИЙ'}
            </button>
            <div
              id="menu"
              className={krepQuanVisible ? 'admin__krep_quan--open' : 'admin__krep_quan--close'}>
              {disk.krepQuans.map((krepQuan) => (
                <button
                  className="admin__btns--add"
                  key={krepQuan.id}
                  onClick={() => {
                    disk.setSelectedKrepQuan(krepQuan);
                    setKrepQuanVisible((prevState) => !prevState);
                  }}>
                  {krepQuan.name}
                </button>
              ))}
            </div>
          </div>
          <div className="admin__menu">
            <button
              className="admin__btns--add"
              onClick={() => setDiametrDiskKrepVisible((prevState) => !prevState)}>
              {disk.selectedDiametrDiskKrep.name || 'Выберите ДИАМЕТР ПОД КРЕПЕЖНЫЕ ОТВЕРСТИЯ'}
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
                  className="admin__btns--add"
                  key={diametrDiskKrep.id}
                  onClick={() => {
                    disk.setSelectedDiametrDiskKrep(diametrDiskKrep);
                    setDiametrDiskKrepVisible((prevState) => !prevState);
                  }}>
                  {diametrDiskKrep.name}
                </button>
              ))}
            </div>
          </div>
          <div className="admin__menu">
            <button
              className="admin__btns--add"
              onClick={() => setViletVisible((prevState) => !prevState)}>
              {disk.selectedVilet.name || 'Выберите ET (ВЫЛЕТ)'}
            </button>
            <div id="menu" className={viletVisible ? 'admin__vilet--open' : 'admin__vilet--close'}>
              {disk.vilets.map((vilet) => (
                <button
                  className="admin__btns--add"
                  key={vilet.id}
                  onClick={() => {
                    disk.setSelectedVilet(vilet);
                    setViletVisible((prevState) => !prevState);
                  }}>
                  {vilet.name}
                </button>
              ))}
            </div>
          </div>
          <div className="admin__menu">
            <button
              className="admin__btns--add"
              onClick={() => setDiumVisible((prevState) => !prevState)}>
              {disk.selectedDium.name || 'Выберите dia'}
            </button>
            <div id="menu" className={diumVisible ? 'admin__dium--open' : 'admin__dium--close'}>
              {disk.diums.map((dium) => (
                <button
                  className="admin__btns--add"
                  key={dium.id}
                  onClick={() => {
                    disk.setSelectedDium(dium);
                    setDiumVisible((prevState) => !prevState);
                  }}>
                  {dium.name}
                </button>
              ))}
            </div>
          </div>
          <div className="admin__menu">
            <button
              className="admin__btns--add"
              onClick={() => setBrandDiskVisible((prevState) => !prevState)}>
              {disk.selectedBrandDisk.name || 'Выберите ПРОИЗВОДИТЕЛЯ'}
            </button>
            <div
              id="menu"
              className={brandDiskVisible ? 'admin__brand_disk--open' : 'admin__brand_disk--close'}>
              {disk.brandDisks.map((brandDisk) => (
                <button
                  className="admin__btns--add"
                  key={brandDisk.id}
                  onClick={() => {
                    disk.setSelectedBrandDisk(brandDisk);
                    setBrandDiskVisible((prevState) => !prevState);
                  }}>
                  {brandDisk.name}
                </button>
              ))}
            </div>
          </div>
          <div className="admin__menu">
            <button
              className="admin__btns--add"
              onClick={() => setTypeVisible((prevState) => !prevState)}>
              {disk.selectedType.name || 'Выберите тип диска'}
            </button>
            <div id="menu" className={typeVisible ? 'admin__type--open' : 'admin__type--close'}>
              {disk.types.map((type) => (
                <button
                  className="admin__btns--add"
                  key={type.id}
                  onClick={() => {
                    disk.setSelectedType(type);
                    setTypeVisible((prevState) => !prevState);
                  }}>
                  {type.name}
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
          <button className="admin__btns--add" onClick={addDisk}>
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
