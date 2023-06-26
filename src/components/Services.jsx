import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="small-title services__title">Наши услуги</h2>
        <div className="services__inner">
          <div className="services__block">
            <img src="./images/keeping.png" alt="" />
            <h3 className="services__block-title">Хранение</h3>
            <p className="services__block-text">Быстрота, удобство, сохранность!</p>
            <Link to="tire-storage" className="btn btn--gray services__button">
              Подробнее
            </Link>
          </div>
          <div className="services__block">
            <img src="./images/auto-servic.png" alt="" />
            <h3 className="services__block-title">автосервис</h3>
            <p className="services__block-text">По самым доступным ценам</p>
            <Link to="service" className="btn btn--gray services__button">
              Подробнее
            </Link>
          </div>
          <div className="services__block">
            <img src="./images/tire-service.png" alt="" />
            <h3 className="services__block-title">шиномонтаж</h3>
            <p className="services__block-text">Делаем работу быстро и качественно!</p>
            <Link to="tire-service" className="btn btn--gray services__button">
              Подробнее
            </Link>
          </div>
          <div className="services__block">
            <img src="./images/tires-wheels.png" alt="" />
            <h3 className="services__block-title">шины и диски</h3>
            <p className="services__block-text">Мы гарантируем прозрачность и честность</p>
            <Link to="/tire-wheels" className="btn btn--gray services__button">
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
