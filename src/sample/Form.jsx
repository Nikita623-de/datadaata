import React from 'react';
import { InputMask } from 'primereact/inputmask';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [nameValue, setNameValue] = React.useState('');
  const [phoneValue, setPhoneValue] = React.useState('');

  const sendEmail = (e) => {
    var data = { name: nameValue, phone: phoneValue };
    e.preventDefault();

    emailjs.send('service_01b4lom', 'template_vrr01ep', data, 'CQu1J5P7nEyx6f-Gu').then(
      (result) => {
        alert('Заявка успешно отправлена!');
      },
      (error) => {
        console.log(error.text);
      },
    );

    setNameValue('');
    setPhoneValue('');
  };
  const handlePhoneChange = (e) => {
    setPhoneValue(e.target.value);
  };
  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };
  const isButtonActive = nameValue.length >= 2 && phoneValue.replace(/\D/g, '').length === 11;
  return (
    <>
      <h3 className="request__title">ОСТАВИТЬ ЗАЯВКУ</h3>
      <p className="request__text">Оставьте заявку и наш менеджер свяжется с вами</p>
      <form className="form__column" onSubmit={sendEmail}>
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            name="name"
            id="name"
            value={nameValue}
            placeholder=" "
            onChange={handleNameChange}></input>
          <label className="form__lable">Ваше имя</label>
        </div>
        <div className="form__group">
          <InputMask
            className="form__input"
            mask="+7 (999) 999-99-99"
            name="phone"
            id="phone"
            type="tel"
            placeholder=" "
            value={phoneValue}
            onChange={handlePhoneChange}></InputMask>
          <label className="form__lable">Ваш телефон</label>
        </div>
        <button
          type="submit"
          id="button"
          value="Send"
          className={
            isButtonActive
              ? 'btn btn--orange request__btn'
              : 'btn btn--orange request__btn disabled'
          }>
          Записаться
        </button>
      </form>
      <p className="request__text-send">
        Нажав на кнопку «Отправить», вы даёте согласие на обработку персональных данных
      </p>
    </>
  );
};

export default Form;
