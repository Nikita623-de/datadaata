import React, { useState } from 'react';
import BrandModal from '../components/shop-modals/BrandModal';
import DiametrModal from '../components/shop-modals/DiametrModal';
import HeightModal from '../components/shop-modals/HeightModal';
import IndexModal from '../components/shop-modals/IndexModal';
import SpeedModal from '../components/shop-modals/SpeedModal';
import WidthModal from '../components/shop-modals/WidthModal';
import ProductModal from '../components/shop-modals/ProductModal';
import DiskModal from '../components/shop-modals/DiskModal';
import TypeModal from '../components/shop-modals/TypeModal';
import ThornModal from '../components/shop-modals/ThornModal';
import SeasonalityModal from '../components/shop-modals/SeasonalityModal';
import KrepQuanModal from '../components/shop-modals/KrepQuanModal';
import ViletModal from '../components/shop-modals/ViletModal';
import WidthDiskModal from '../components/shop-modals/WidthDiskModal';
import DiumModal from '../components/shop-modals/DiumModal';
import DiametrDiskModal from '../components/shop-modals/DiametrDiskModal';
import BrandDiskModal from '../components/shop-modals/BrandDiskModal';
import DiametrDiskKrepModal from '../components/shop-modals/DiametrDiskKrepModal';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [widthVisible, setWidthVisible] = useState(false);
  const [diskVisible, setDiskVisible] = useState(false);
  const [diametrDiskKrepVisible, setDiametrDiskKrepVisible] = useState(false);
  const [diametrDiskVisible, setDiametrDiskVisible] = useState(false);
  const [brandDiskVisible, setBrandDiskVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [thornVisible, setThornVisible] = useState(false);
  const [seasonalityVisible, setSeasonalityVisible] = useState(false);
  const [widthDiskVisible, setWidthDiskVisible] = useState(false);
  const [viletVisible, setViletVisible] = useState(false);
  const [diumVisible, setDiumVisible] = useState(false);
  const [krepQuanVisible, setKrepQuanVisible] = useState(false);
  const [heightVisible, setHeightVisible] = useState(false);
  const [indexVisible, setIndexVisible] = useState(false);
  const [speedVisible, setSpeedVisible] = useState(false);
  const [diametrVisible, setDiametrVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);
  return (
    <div className="admin">
      <div className="container">
        <button className="admin__btn" onClick={() => setWidthVisible(true)}>
          ширина профиля, мм
        </button>
        <button className="admin__btn" onClick={() => setHeightVisible(true)}>
          высота профиля, мм
        </button>
        <button className="admin__btn" onClick={() => setDiametrVisible(true)}>
          диаметр шины
        </button>
        <button className="admin__btn" onClick={() => setIndexVisible(true)}>
          индекс нагрузки
        </button>
        <button className="admin__btn" onClick={() => setSpeedVisible(true)}>
          индекс скорости
        </button>
        <button className="admin__btn" onClick={() => setBrandVisible(true)}>
          производитель шин
        </button>
        <button className="admin__btn" onClick={() => setSeasonalityVisible(true)}>
          сезонность
        </button>
        <button className="admin__btn" onClick={() => setThornVisible(true)}>
          Шипы
        </button>
        <button className="admin__btn" onClick={() => setProductVisible(true)}>
          шина
        </button>
        <button className="admin__btn" onClick={() => setDiskVisible(true)}>
          диск
        </button>
        <button className="admin__btn" onClick={() => setDiametrDiskKrepVisible(true)}>
          ДИАМЕТР ПОД КРЕПЕЖНЫЕ ОТВЕРСТИЯ
        </button>
        <button className="admin__btn" onClick={() => setViletVisible(true)}>
          ET (ВЫЛЕТ)
        </button>
        <button className="admin__btn" onClick={() => setWidthDiskVisible(true)}>
          ШИРИНА ДИСКА
        </button>
        <button className="admin__btn" onClick={() => setDiametrDiskVisible(true)}>
          ДИАМЕТР ДИСКА
        </button>
        <button className="admin__btn" onClick={() => setTypeVisible(true)}>
          ТИП ДИСКА
        </button>
        <button className="admin__btn" onClick={() => setBrandDiskVisible(true)}>
          ПРОИЗВОДИТЕЛЬ ДИСКОВ
        </button>
        <button className="admin__btn" onClick={() => setKrepQuanVisible(true)}>
          КОЛ-ВО КРЕПЕЖНЫХ ОТВЕРСТИЙ
        </button>
        <button className="admin__btn" onClick={() => setDiumVisible(true)}>
          Dia
        </button>
      </div>
      <BrandModal show={brandVisible} onHide={() => setBrandVisible(false)} />
      <DiametrModal show={diametrVisible} onHide={() => setDiametrVisible(false)} />
      <HeightModal show={heightVisible} onHide={() => setHeightVisible(false)} />
      <IndexModal show={indexVisible} onHide={() => setIndexVisible(false)} />
      <SpeedModal show={speedVisible} onHide={() => setSpeedVisible(false)} />
      <WidthModal show={widthVisible} onHide={() => setWidthVisible(false)} />
      <ProductModal show={productVisible} onHide={() => setProductVisible(false)} />
      <TypeModal show={typeVisible} onHide={() => setTypeVisible(false)} />
      <ThornModal show={thornVisible} onHide={() => setThornVisible(false)} />
      <SeasonalityModal show={seasonalityVisible} onHide={() => setSeasonalityVisible(false)} />
      <BrandDiskModal show={brandDiskVisible} onHide={() => setBrandDiskVisible(false)} />
      <DiskModal show={diskVisible} onHide={() => setDiskVisible(false)} />
      <WidthDiskModal show={widthDiskVisible} onHide={() => setWidthDiskVisible(false)} />
      <DiametrDiskModal show={diametrDiskVisible} onHide={() => setDiametrDiskVisible(false)} />
      <DiametrDiskKrepModal
        show={diametrDiskKrepVisible}
        onHide={() => setDiametrDiskKrepVisible(false)}
      />
      <DiumModal show={diumVisible} onHide={() => setDiumVisible(false)} />
      <ViletModal show={viletVisible} onHide={() => setViletVisible(false)} />
      <KrepQuanModal show={krepQuanVisible} onHide={() => setKrepQuanVisible(false)} />
    </div>
  );
};

export default Admin;
