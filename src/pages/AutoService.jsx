import React from 'react';

const AutoService = ({ setActive }) => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    goToTop();
  }, []);
  return (
    <section className="service">
      <div className="container">
        <h2 className="small-title service__title">Автосервис - наши услуги и их цена</h2>
        <article className="service__block">
          <h3 className="service__subtitle">Диагностика авто</h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Диагностика авто перед покупкой </td>
                <td>от 1000 руб</td>
              </tr>
              <tr>
                <td>Компьютерная диагностика авто </td>
                <td>от 500 руб</td>
              </tr>
              <tr>
                <td>Диагностика двигателя авто </td>
                <td>от 1000 руб</td>
              </tr>
              <tr>
                <td>Диагностика рулевого управления </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Диагностика подвески</td>
                <td>от 350 руб</td>
              </tr>
              <tr>
                <td>Диагностика тормозной системы </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Диагностика аккумулятора </td>
                <td>от 100 руб</td>
              </tr>
              <tr>
                <td>Диагностика топливной системы</td>
                <td>от 320 руб</td>
              </tr>
              <tr>
                <td>
                  Диагностика ходовой части автомобиля (бесплатно при последующей регулировке)
                </td>
                <td>от 800 руб</td>
              </tr>
              <tr>
                <td>Диагностика развал - схождения (бесплатно при последующей регулировке)</td>
                <td>от 800 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
        <article className="service__block">
          <h3 className="service__subtitle">РЕМОНТ ПОДВЕСКИ (ХОДОВОЙ ЧАСТИ)</h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Замена балки </td>
                <td>от 5500 руб</td>
              </tr>
              <tr>
                <td>Замена подрамника </td>
                <td>от 2800 руб</td>
              </tr>
              <tr>
                <td>Замена пружин подвески передняя </td>
                <td>от 1300 руб</td>
              </tr>
              <tr>
                <td>Замена пружин подвески задняя </td>
                <td>от 900 руб</td>
              </tr>
              <tr>
                <td>Замена Амортизаторов передние </td>
                <td>от 1300 руб</td>
              </tr>
              <tr>
                <td>Замена Амортизаторов задние </td>
                <td>от 1300 руб</td>
              </tr>
              <tr>
                <td>Замена стоек амортизаторов </td>
                <td>от 600 руб</td>
              </tr>
              <tr>
                <td>Замена рычага передний верхний </td>
                <td>от 1200 руб</td>
              </tr>
              <tr>
                <td>Замена рычага передний нижний </td>
                <td>от 1000 руб</td>
              </tr>
              <tr>
                <td>Замена сайлентблок задней балки </td>
                <td>от 5500 руб</td>
              </tr>
              <tr>
                <td>Замена сайлентблок переднего рычага </td>
                <td>от 500 руб</td>
              </tr>
              <tr>
                <td>Замена сайлентблок заднего рычага </td>
                <td>от 1500 руб</td>
              </tr>
              <tr>
                <td>Замена стабилизатора</td>
                <td>от 500-600 руб</td>
              </tr>
              <tr>
                <td>Замена ступицы</td>
                <td>от 1500 руб</td>
              </tr>
              <tr>
                <td>Замена ступичных подшипников </td>
                <td>от 2000 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
        <article className="service__block">
          <h3 className="service__subtitle">РЕМОНТ СИСТЕМЫ ОХЛАЖДЕНИЯ</h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Замена вентилятора </td>
                <td>от 1200 руб</td>
              </tr>
              <tr>
                <td>Замена радиатора </td>
                <td>от 2800 руб</td>
              </tr>
              <tr>
                <td>Ремонт Термостата </td>
                <td>от 800 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
        <article className="service__block">
          <h3 className="service__subtitle">РЕМОНТ ТОРМАЗНОЙ СИСТЕМЫ</h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Замена вакуумного усилителя руля </td>
                <td>от 800 руб</td>
              </tr>
              <tr>
                <td>Замена ручника (ручного тормоза) </td>
                <td>от 800 руб</td>
              </tr>
              <tr>
                <td>Замена переднего/заднего тормозного суппорта </td>
                <td>от 800 руб</td>
              </tr>
              <tr>
                <td>Замена тормозной жидкости </td>
                <td>от 800 руб</td>
              </tr>
              <tr>
                <td>Замена тормозных трубок и шлангов </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена тормозных колодок (дисковые тормоза) </td>
                <td>от 540 руб</td>
              </tr>
              <tr>
                <td>Замена тормозных колодок (барабанные тормоза) </td>
                <td>от 1800 руб</td>
              </tr>
              <tr>
                <td>Замена заднего тормозного цилиндра </td>
                <td>от 600 руб</td>
              </tr>
              <tr>
                <td>Замена тормозного цилиндра (главного) с прокачкой </td>
                <td>от 1200 руб</td>
              </tr>
              <tr>
                <td>Замена тормозных дисков передних и задних </td>
                <td>от 2000 руб</td>
              </tr>
              <tr>
                <td>Замена передних тормозных дисков </td>
                <td>от 600 руб</td>
              </tr>
              <tr>
                <td>Прокачка тормозной системы после замены передних тормозных дисков </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена задних тормозных дисков </td>
                <td>от 1000 руб</td>
              </tr>
              <tr>
                <td>Замена щитка заднего тормозного диска </td>
                <td>от 600 руб</td>
              </tr>
              <tr>
                <td>Прокачка тормозной системы после замены задних тормозных дисков </td>
                <td>от 400 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
        <article className="service__block">
          <h3 className="service__subtitle">РЕМОНТ ТОПЛИВНОЙ СИСТЕМЫ</h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Замена бензонасоса(топливного насоса) </td>
                <td>от 1000 руб</td>
              </tr>
              <tr>
                <td>Замена впускного коллектора </td>
                <td>от 1000 руб</td>
              </tr>
              <tr>
                <td>Замена переднего лямбда зонда </td>
                <td>от 600 руб</td>
              </tr>
              <tr>
                <td>Замена заднего лямбда зонда </td>
                <td>от 700 руб</td>
              </tr>
              <tr>
                <td>Замена регулятора давления топлива </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена топливной рампы </td>
                <td>от 800 руб</td>
              </tr>
              <tr>
                <td>Замена топливного фильтра</td>
                <td>от 550 руб</td>
              </tr>
              <tr>
                <td>Комплексная чистка топливной системы</td>
                <td>уточняйте</td>
              </tr>
              <tr>
                <td>читка форсунок инжектора</td>
                <td>уточняйте</td>
              </tr>
              <tr>
                <td>замена топливного фильтра</td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>промывка топливного бака </td>
                <td>от 1600 руб</td>
              </tr>
              <tr>
                <td>Чистка инжектора топливной системы </td>
                <td>от 2500 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
        <article className="service__block">
          <h3 className="service__subtitle">РЕМОНТ ДВИГАТЕЛЯ АВТОМОБИЛЯ</h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Капитальный ремонт двигателя </td>
                <td>от 40000 руб</td>
              </tr>
              <tr>
                <td>Ремонт ГБЦ двигателя </td>
                <td>от 8000 руб</td>
              </tr>
              <tr>
                <td>Замена подушек (опоры) двигателя </td>
                <td>от 1200 руб</td>
              </tr>
              <tr>
                <td>Замена левой подушки двигателя </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена правой подушки двигателя </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена нижней подушки двигателя </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена задней подушки двигателя </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена передней подушки двигателя </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Диагностика и ремонт электропроводки </td>
                <td>от 800 руб</td>
              </tr>
              <tr>
                <td>Замена датчика уровня масла </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена датчика уровня охлаждающей жидкости (антифриза) </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена датчика включения вентилятора </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена датчика коленчатого вала </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена датчика распределительного вала </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена датчика детонации </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена регулятора холостого хода </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена датчика воздуха </td>
                <td>от 400 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
        <article className="service__block">
          <h3 className="service__subtitle">Ремонт ГРМ двигателя</h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Замена ремня ГРМ </td>
                <td>от 2400 руб</td>
              </tr>
              <tr>
                <td>Замена ремня ГРМ с заменой помпы </td>
                <td>от 2400 + 1600 руб</td>
              </tr>
              <tr>
                <td>Замена ремня ГРМ с заменой ремня навесного оборудования </td>
                <td>от 2400 руб</td>
              </tr>
              <tr>
                <td>
                  Замена ремня ГРМ с заменой переднего сальника коленвала и ремня навесного
                  оборудования
                </td>
                <td>от 2400 + 400 руб</td>
              </tr>
              <tr>
                <td>Замена ремня ГРМ с заменой цепи привода распредвала </td>
                <td>от 3200 руб</td>
              </tr>
              <tr>
                <td>Замена цепи ГРМ (газораспределительного механизма)</td>
                <td>от 8000 руб</td>
              </tr>
              <tr>
                <td>замена цепи</td>
                <td>от 8000 руб</td>
              </tr>
              <tr>
                <td>замена натяжителя цепи ГРМ </td>
                <td>от 8000 руб</td>
              </tr>
              <tr>
                <td>замена башмака цепи ГРМ</td>
                <td>от 8000 руб</td>
              </tr>
              <tr>
                <td>замена успокоителя цепи ГРМ</td>
                <td>от 8000 руб</td>
              </tr>
              <tr>
                <td>Замена цепи ГРМ с заменой ремня навесного оборудования </td>
                <td>от 8000 руб</td>
              </tr>
              <tr>
                <td>Замена цепи ГРМ с заменой помпы от </td>
                <td>от 8000 + 1600 руб</td>
              </tr>
              <tr>
                <td>Замена цепи ГРМ с заменой цепи привода распредвала </td>
                <td>от 8000 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
        <article className="service__block">
          <h3 className="service__subtitle">УСТРАНЕНИЕ ТЕЧИ ДВИГАТЕЛЯ</h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Устранение течи масла </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Устранение течи антифризаот </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена прокладки клапана крышки от </td>
                <td>от 1000 руб</td>
              </tr>
              <tr>
                <td>Герметизация/замена прокладки поддона двигателя</td>
                <td>от 1600 руб</td>
              </tr>
              <tr>
                <td>Замена датчика давления масла </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена датчика уровня масла </td>
                <td>от 400 руб</td>
              </tr>
              <tr>
                <td>Замена переднего сальника коленчатого вала (двигатель с ремнем ГРМ) </td>
                <td>от 2800 руб</td>
              </tr>
              <tr>
                <td>Замена переднего сальника коленчатого вала (двигатель с цепью ГРМ) </td>
                <td>от 1200 руб</td>
              </tr>
              <tr>
                <td>Замена заднего сальника коленчатого вала </td>
                <td>от 5000 руб</td>
              </tr>
              <tr>
                <td>Замена сальника распределительного вала </td>
                <td>от 2800 руб</td>
              </tr>
              <tr>
                <td>Герметизация передней крышки цепи ГРМ </td>
                <td>от 6000 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
        <article className="service__block">
          <h3 className="service__subtitle">Ремонт системы зажигания</h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Замена свечей зажигания </td>
                <td>от 320 руб</td>
              </tr>
              <tr>
                <td>Замена катушки (модуля) зажигания </td>
                <td>от 80 руб</td>
              </tr>
              <tr>
                <td>Проверка и замена высоковольтных проводов </td>
                <td>от 80 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
        <article className="service__block">
          <h3 className="service__subtitle">УСТАНОВКА СИГНАЛИЗАЦИЙ И ПЕРДПРОДАЖНАЯ ПОДГОТОВКА</h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>предпродажная подготовка автомобиля </td>
                <td>от 5000 руб</td>
              </tr>
              <tr>
                <td>Установка сигнализации на автомобили любых марок </td>
                <td>от 2500 руб</td>
              </tr>
              <tr>
                <td>Установка сигнализации с автозапуском(Отеч) </td>
                <td>от 3500 руб</td>
              </tr>
              <tr>
                <td>Установка сигнализации с автозапуском(Ином) </td>
                <td>от 5000 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
        <article className="service__block">
          <h3 className="service__subtitle">РАЗВАЛ - СХОЖДЕНИЕ АВТОМОБИЛЯ</h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Развал - схождение передней и задней оси </td>
                <td>от 1600 руб</td>
              </tr>
              <tr>
                <td>Развал - схождение передней оси </td>
                <td>от 800 руб</td>
              </tr>
              <tr>
                <td>Развал - схождение задней оси </td>
                <td>от 800 руб</td>
              </tr>
              <tr>
                <td>Развал-схождение после ремонта/замены рулевой рейки </td>
                <td>от 720 руб</td>
              </tr>
              <tr>
                <td>Развал-схождение после ремонта/замены насоса ГУР </td>
                <td>от 720 руб</td>
              </tr>
              <tr>
                <td>Развал-схождение после рулевых наконечников </td>
                <td>от 720 руб</td>
              </tr>
              <tr>
                <td>Развал-схождение после рулевых тяг </td>
                <td>от 720 руб</td>
              </tr>
              <tr>
                <td>Развал-схождение после замены шаровых опор </td>
                <td>от 720 руб</td>
              </tr>
              <tr>
                <td>Развал-схождение после шиномонтаж </td>
                <td>от 720 руб</td>
              </tr>
              <tr>
                <td>Развал-схождение после замены пружин и амортизаторов </td>
                <td>от 720 руб</td>
              </tr>
              <tr>
                <td>Развал-схождение после замены сайлентблоков в подрамнике </td>
                <td>от 720 руб</td>
              </tr>
              <tr>
                <td>Развал-схождение после замены сцепления со снятием подрамника </td>
                <td>от 720 руб</td>
              </tr>
            </tbody>
          </table>
        </article>
        <button className="btn btn--orange service__button" onClick={() => setActive(true)}>
          Записаться
        </button>
        <article className="service__block">
          <h3 className="service__subtitle">КУЗОВНЫЕ СВАРОЧНЫЕ РАБОТЫ</h3>
          <table className="service__table">
            <thead>
              <tr>
                <th>Услуги</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Сварочные работы </td>
                <td>от 500 руб</td>
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

export default AutoService;
