import React from 'react';

const SmallInformation = () => {
  return (
    <section className="small-information">
      <div className="container">
        <div className="small-information__inner">
          <div className="small-information__block">
            <img src="./images/phone.png" alt="" />
            <div className="small-information__text">
              <h4 className="small-information__subtitle">ТЕЛЕФОН</h4>
              <span className="small-information__span">8 992 333-00-98</span>
            </div>
          </div>
          <div className="small-information__block">
            <img src="./images/map-marks.png" alt="" />
            <div className="small-information__text">
              <h4 className="small-information__subtitle">Найдите нас на карте</h4>
              <span className="small-information__span">Ул Краснолесья 19, Екатеринбург</span>
            </div>
          </div>
          <div className="small-information__block">
            <img src="./images/calendar.png" alt="" />
            <div className="small-information__text">
              <h4 className="small-information__subtitle">ВРЕМЯ РАБОТЫ</h4>
              <span className="small-information__span">Пн-Вс 10:00-21:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallInformation;
