import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';

const ShopDiskLeft = observer(() => {
  const { disk } = useContext(Context);
  return (
    <>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">ДИАМЕТР ПОД КРЕПЕЖНЫЕ ОТВЕРСТИЯ</strong>
        <div className="auto-shop__filters">
          {disk.diametrDiskKreps.map((diametrDiskKrep) => (
            <span
              key={diametrDiskKrep.id}
              className={
                diametrDiskKrep.id === disk.selectedDiametrDiskKrep.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => disk.setSelectedDiametrDiskKrep(diametrDiskKrep)}>
              {diametrDiskKrep.name}
            </span>
          ))}
        </div>
      </div>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">ШИРИНА</strong>
        <div className="auto-shop__filters">
          {disk.widthDisks.map((widthDisk) => (
            <span
              key={widthDisk.id}
              className={
                widthDisk.id === disk.selectedWidthDisk.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => disk.setSelectedWidthDisk(widthDisk)}>
              {widthDisk.name}
            </span>
          ))}
        </div>
      </div>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">ДИАМЕТР ДИСКА</strong>
        <div className="auto-shop__filters">
          {disk.diametrDisks.map((diametrDisk) => (
            <span
              key={diametrDisk.id}
              className={
                diametrDisk.id === disk.selectedDiametrDisk.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => disk.setSelectedDiametrDisk(diametrDisk)}>
              {diametrDisk.name}
            </span>
          ))}
        </div>
      </div>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">ТИП ДИСКА</strong>
        <div className="auto-shop__filters">
          {disk.types.map((type) => (
            <span
              key={type.id}
              className={
                type.id === disk.selectedType.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => disk.setSelectedType(type)}>
              {type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">ET (ВЫЛЕТ)</strong>
        <div className="auto-shop__filters">
          {disk.vilets.map((vilet) => (
            <span
              key={vilet.id}
              className={
                vilet.id === disk.selectedVilet.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => disk.setSelectedVilet(vilet)}>
              {vilet.name}
            </span>
          ))}
        </div>
      </div>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">DIA</strong>
        <div className="auto-shop__filters">
          {disk.diums.map((dium) => (
            <span
              key={dium.id}
              className={
                dium.id === disk.selectedDium.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => disk.setSelectedDium(dium)}>
              {dium.name}
            </span>
          ))}
        </div>
      </div>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">КОЛ-ВО КРЕПЕЖНЫХ ОТВЕРСТИЙ</strong>
        <div className="auto-shop__filters">
          {disk.krepQuans.map((krepQuan) => (
            <span
              key={krepQuan.id}
              className={
                krepQuan.id === disk.selectedKrepQuan.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => disk.setSelectedKrepQuan(krepQuan)}>
              {krepQuan.name}
            </span>
          ))}
        </div>
      </div>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">ПРОИЗВОДИТЕЛЬ</strong>
        <div className="auto-shop__filters">
          {disk.brandDisks.map((brandDisk) => (
            <span
              key={brandDisk.id}
              className={
                brandDisk.id === disk.selectedBrandDisk.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => disk.setSelectedBrandDisk(brandDisk)}>
              {brandDisk.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
});

export default ShopDiskLeft;
