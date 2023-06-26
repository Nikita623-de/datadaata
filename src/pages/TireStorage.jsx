import React from 'react';

const TireStorage = ({ setActive }) => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    goToTop();
  }, []);
  return (
    <section className="service">
      <div className="container">
        <h2 className="small-title service__title">ХРАНЕНИЕ И ПРОДАЖА ШИН И ДИСКОВ</h2>
        <article className="service__block">
          <h3 className="service__subtitle">ШИНОМОНТАЖ ДЛЯ ЛЕГКОВЫХ АВТОМОБИЛЕЙ </h3>
          <table className="service__table tire-storage__table">
            <thead>
              <tr>
                <th className="storage__table--subtitle">Посадочный диаметр (дюйм)</th>
                <th className="storage__table--subtitle">Стоимость хранения за 1 шт./месяц</th>
                <th className="storage__table--subtitle">4 шт. на 6 месяцев</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12"-13"</td>
                <td>125</td>
                <td>3000</td>
              </tr>
              <tr>
                <td>14"</td>
                <td>135</td>
                <td>3240</td>
              </tr>
              <tr>
                <td>15"</td>
                <td>150</td>
                <td>3600</td>
              </tr>
              <tr>
                <td>16"</td>
                <td>160</td>
                <td>3840</td>
              </tr>
              <tr>
                <td>17"</td>
                <td>175</td>
                <td>4200</td>
              </tr>
              <tr>
                <td>18"</td>
                <td>190</td>
                <td>4560</td>
              </tr>
              <tr>
                <td>От 19"</td>
                <td>200</td>
                <td>4800</td>
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

export default TireStorage;
