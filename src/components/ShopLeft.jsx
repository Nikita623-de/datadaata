import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';

const ShopLeft = observer(() => {
  const { product } = useContext(Context);
  return (
    <>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">ширина профиля, мм</strong>
        <div className="auto-shop__filters">
          {product.widths.map((width) => (
            <span
              key={width.id}
              className={
                width.id === product.selectedWidth.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => product.setSelectedWidth(width)}>
              {width.name}
            </span>
          ))}
        </div>
      </div>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">высота профиля, мм</strong>
        <div className="auto-shop__filters">
          {product.heights.map((height) => (
            <span
              key={height.id}
              className={
                height.id === product.selectedHeight.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => product.setSelectedHeight(height)}>
              {height.name}
            </span>
          ))}
        </div>
      </div>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">диаметр шины</strong>
        <div className="auto-shop__filters">
          {product.diametrs.map((diametr) => (
            <span
              key={diametr.id}
              className={
                diametr.id === product.selectedDiametr.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => product.setSelectedDiametr(diametr)}>
              {diametr.name}
            </span>
          ))}
        </div>
      </div>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">индекс нагрузки</strong>
        <div className="auto-shop__filters">
          {product.indexs.map((index) => (
            <span
              key={index.id}
              className={
                index.id === product.selectedIndex.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => product.setSelectedIndex(index)}>
              {index.name}
            </span>
          ))}
        </div>
      </div>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">индекс скорости</strong>
        <div className="auto-shop__filters">
          {product.speeds.map((speed) => (
            <span
              key={speed.id}
              className={
                speed.id === product.selectedSpeed.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => product.setSelectedSpeed(speed)}>
              {speed.name}
            </span>
          ))}
        </div>
      </div>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">производитель</strong>
        <div className="auto-shop__filters">
          {product.brands.map((brand) => (
            <span
              key={brand.id}
              className={
                brand.id === product.selectedBrand.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => product.setSelectedBrand(brand)}>
              {brand.name}
            </span>
          ))}
        </div>
      </div>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">Шипы</strong>
        <div className="auto-shop__filters">
          {product.thorns.map((thorn) => (
            <span
              key={thorn.id}
              className={
                thorn.id === product.selectedThorn.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => product.setSelectedThorn(thorn)}>
              {thorn.name}
            </span>
          ))}
        </div>
      </div>
      <div className="auto-shop__prop">
        <strong className="auto-shop__cartion">Сезонность</strong>
        <div className="auto-shop__filters">
          {product.seasonalitys.map((seasonality) => (
            <span
              key={seasonality.id}
              className={
                seasonality.id === product.selectedSeasonality.id
                  ? 'auto-shop__input auto-shop__input--active'
                  : 'auto-shop__input'
              }
              onClick={() => product.setSelectedSeasonality(seasonality)}>
              {seasonality.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
});

export default ShopLeft;
