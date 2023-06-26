import React from 'react';

const SampleAbout = () => {
  return (
    <>
      <div className="about__block">
        <p className="about__text about__text-1">
          Наш автосервис - это место, где вы можете полностью довериться профессиональному подходу и
          заботе о вашем автомобиле.
        </p>
      </div>
      <div className="about__block">
        <img src="./images/about-1.png" alt="" className="about__img" />
      </div>
      <div className="about__block">
        <img src="./images/about-2.png" alt="" className="about__img" />
      </div>
      <div className="about__block">
        <p className="about__text about__text-2">
          Мы&nbsp;понимаем, что ваше время ценно, поэтому мы&nbsp;стремимся выполнить работы
          в&nbsp;кратчайшие сроки, сохраняя высокое качество и&nbsp;точность.
        </p>
      </div>
    </>
  );
};

export default SampleAbout;
