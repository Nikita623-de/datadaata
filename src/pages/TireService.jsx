import React from 'react';

const TireService = ({ setActive }) => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    goToTop();
  }, []);
  return (
    <section className="service">
      <div className="container">
        <h2 className="small-title service__title">ШИНОМОНТАЖ - наши услуги и их цена</h2>
        <article className="service__block">
          <h3 className="service__subtitle">ШИНОМОНТАЖ ДЛЯ ЛЕГКОВЫХ АВТОМОБИЛЕЙ </h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Замена колеса с шиномонтажем R12 </td>
                <td>от 250 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R12 </td>
                <td>от 1000 руб</td>
              </tr>
              <tr>
                <td>Замена колеса с шиномонтажем R13 </td>
                <td>от 275 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R13 </td>
                <td>от 1100 руб</td>
              </tr>
              <tr>
                <td>Замена колеса с шиномонтажем R14 </td>
                <td>от 300 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R14 </td>
                <td>от 1200 руб</td>
              </tr>
              <tr>
                <td>Замена колеса с шиномонтажем R15 </td>
                <td>от 325 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R15 </td>
                <td>от 1300 руб</td>
              </tr>
              <tr>
                <td>Замена колеса с шиномонтажем R16</td>
                <td>от 350 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R16 </td>
                <td>от 1400 руб</td>
              </tr>
              <tr>
                <td>Замена колеса с шиномонтажем R17 </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R17 </td>
                <td>от 1600 руб</td>
              </tr>
              <tr>
                <td>Замена колеса с шиномонтажем R18 </td>
                <td>от 475 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R18 </td>
                <td>от 1900 руб</td>
              </tr>
              <tr>
                <td>Диагностика развал схождения (рекомендуется) </td>
                <td>от 720 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
        <article className="service__block">
          <h3 className="service__subtitle">
            ШИНОМОНТАЖ ДЛЯ ЛЕГКОВЫХ АВТО С НИЗКОПРОФИЛЬНОЙ РЕЗИНОЙ
          </h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Замена колеса с шиномонтажем R15 </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R15 </td>
                <td>от 1600 руб</td>
              </tr>
              <tr>
                <td>Замена колеса с шиномонтажем R16 </td>
                <td>от 450 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R16 </td>
                <td>от 1800 руб</td>
              </tr>
              <tr>
                <td>Замена колеса с шиномонтажем R17 </td>
                <td>от 500 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R17 </td>
                <td>от 2000 руб</td>
              </tr>
              <tr>
                <td>Замена колеса с шиномонтажем R18 </td>
                <td>от 550 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R18 </td>
                <td>от 2200 руб</td>
              </tr>
              <tr>
                <td>Монтаж/Демонтаж колеса R17 </td>
                <td>от 40 руб</td>
              </tr>
              <tr>
                <td>Диагностика развал схождения (рекомендуется) </td>
                <td>от 720 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
        <article className="service__block">
          <h3 className="service__subtitle">ШИНОМОНТАЖ ДЛЯ ВНЕДОРОЖНИКОВ</h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Замена колеса с шиномонтажем R15 </td>
                <td>475 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R15 </td>
                <td>от 1800 руб</td>
              </tr>
              <tr>
                <td>Замена колеса с шиномонтажем R16 </td>
                <td>от 500 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R16 </td>
                <td>от 2000 руб</td>
              </tr>
              <tr>
                <td>Замена колеса с шиномонтажем R17 </td>
                <td>от 525 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R17 </td>
                <td>от 2100 руб</td>
              </tr>
              <tr>
                <td>Замена колеса с шиномонтажем R18 </td>
                <td>от 550 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R17 </td>
                <td>от 2200 руб</td>
              </tr>
              <tr>
                <td>Диагностика развал схождения (рекомендуется) </td>
                <td>от 800 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
        <article className="service__block">
          <h3 className="service__subtitle">
            ШИНОМОНТАЖ ДЛЯ ВНЕДОРОЖНИКОВ С НИЗКОПРОФИЛЬНОЙ РЕЗИНОЙ
          </h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Замена колеса с шиномонтажем R17 </td>
                <td>от 500 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R17 </td>
                <td>от 2000 руб</td>
              </tr>
              <tr>
                <td>Замена колеса с шиномонтажем R18 </td>
                <td>от 550 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R17 </td>
                <td>от 2200 руб</td>
              </tr>
              <tr>
                <td>Диагностика развал схождения (рекомендуется) </td>
                <td>от 800 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
        <article className="service__block">
          <h3 className="service__subtitle">ШИНОМОНТАЖ ДЛЯ КРОССОВЕРОВ И ПАРКЕТНИКОВ </h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Замена колеса с шиномонтажем R16 </td>
                <td>от 450 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R16 </td>
                <td>от 1800 руб</td>
              </tr>
              <tr>
                <td>Замена колеса с шиномонтажем R17 </td>
                <td>от 475 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R17 </td>
                <td>от 1900 руб</td>
              </tr>
              <tr>
                <td>Замена колеса с шиномонтажем R18 </td>
                <td>от 500 руб</td>
              </tr>
              <tr>
                <td>Замена комплекта колёс с шиномонтажем R18 </td>
                <td>от 2000 руб</td>
              </tr>
              <tr>
                <td>Диагностика развал схождения (рекомендуется) </td>
                <td>от 800 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
      </div>
    </section>
  );
};

export default TireService;
