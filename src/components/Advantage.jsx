import React from 'react';

const Advantage = () => {
  return (
    <section className="advantage" id="advantage">
      <div className="container">
        <h2 className="big-title advantage__title">
          Наш автосервис предоставляет множество преимуществ
        </h2>
        <div className="advantage__inner">
          <div className="advantage__block">
            <h4 className="advantage__subtitle">Профессионализм</h4>
            <p className="advantage__text">
              Наши механики являются профессионалами своего дела и имеют богатый опыт работы со
              всеми марками автомобилей
            </p>
          </div>
          <div className="advantage__block">
            <h4 className="advantage__subtitle">Качество</h4>
            <p className="advantage__text">
              Мы используем только качественные запчасти и оборудование, чтобы обеспечить
              максимальную надежность и долговечность вашего автомобиля
            </p>
          </div>
          <div className="advantage__block">
            <h4 className="advantage__subtitle">Быстрота</h4>
            <p className="advantage__text">
              Мы понимаем, что ваше время ценно, поэтому стремимся выполнить работы в кратчайшие
              сроки, сохраняя высокое качество и точность
            </p>
          </div>
          <div className="advantage__block">
            <h4 className="advantage__subtitle">Прозрачность</h4>
            <p className="advantage__text">
              Мы гарантируем прозрачность и честность в работе, а также дружелюбный и индивидуальный
              подход к каждому клиенту
            </p>
          </div>
          <div className="advantage__block">
            <h4 className="advantage__subtitle">Доступность</h4>
            <p className="advantage__text">
              Мы предоставляем разумные и демократичные цены на наши услуги и не завышаем стоимость
              ремонта
            </p>
          </div>
          <div className="advantage__block">
            <h4 className="advantage__subtitle">Обширный опыт</h4>
            <p className="advantage__text">
              Мы имеем большой опыт в ремонте и обслуживании автомобилей различных марок и моделей
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
