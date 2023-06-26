import React from 'react';
import { Link } from 'react-router-dom';

const TiresWheels = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    goToTop();
  }, []);
  return (
    <section className="tires-wheels">
      <div className="container">
        <h2 className="small-title tires-wheels__title">Наши товары</h2>
        <div className="tires-wheels__top">
          <Link to="/auto-shop" className="tires-wheels__block">
            <div className="tires-wheels__block">
              <div className="tires-wheels__block--imgs">
                <img src="./images/tire.png" alt="" />
              </div>
              <h3 className="tires-wheels__block-title">Шины</h3>
            </div>
          </Link>

          <Link to="/disk-shop" className="tires-wheels__block">
            <div className="tires-wheels__block">
              <img src="./images/wheel-by.png" alt="" />
              <h3 className="tires-wheels__block-title">Диски</h3>
            </div>
          </Link>
        </div>

        <div className="tires-wheels__bottom">
          <h3 className="tires-wheels__bottom-title">
            Шины и диски - это основные компоненты колеса, которые играют важную роль в безопасности
            и комфорте вождения автомобиля.
          </h3>
          <p className="tires-wheels__text">
            Шины - это резиновые оболочки, которые надеваются на диски и служат для обеспечения
            сцепления автомобиля с дорогой. Шины бывают разных типов в зависимости от условий
            эксплуатации: летние, зимние и всесезонные. Летние шины обеспечивают хорошую
            управляемость на сухой и мокрой дороге в теплое время года, зимние шины имеют глубокий
            протектор и предназначены для езды в условиях снега и льда, а всесезонные шины подходят
            для использования круглый год в умеренных климатических условиях.
          </p>

          <p className="tires-wheels__text">
            Диски - это металлические обода, которые крепятся к оси автомобиля и на которые
            надеваются шины. Диски бывают разных размеров и типов: литые, штампованные и кованые.
            Литые диски изготавливаются методом литья под давлением и отличаются более
            привлекательным внешним видом, штампованные диски производятся методом штамповки и более
            просты и дешевы в изготовлении, а кованые диски создаются путем обработки металла и
            обладают более высокой прочностью и надежностью.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TiresWheels;
