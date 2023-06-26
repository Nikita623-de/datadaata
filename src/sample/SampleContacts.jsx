import React from 'react';

const SampleContacts = () => {
  return (
    <>
      <h2 className="middle-title contacts__title">Контакты</h2>
      <div className="contacts__inner">
        <div className="contacts__block">
          <strong className="contacts__subtitle">Телефон</strong>
          <a href="/#" className="contacts__link">
            +7 992 333-00-98
          </a>
        </div>
        <div className="contacts__block">
          <strong className="contacts__subtitle">Время работы</strong>
          <span className="contacts__link">Пн-Вс 9:00-21:00</span>
        </div>
        <div className="contacts__block">
          <strong className="contacts__subtitle">E-mail</strong>
          <a href="mailto:Forward663@yandex.ru" className="contacts__link">
            Forward663@yandex.ru
          </a>
        </div>
      </div>
    </>
  );
};

export default SampleContacts;
