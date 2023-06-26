import React from 'react';
import SampleContacts from '../sample/SampleContacts';

const ContactsPage = () => {
  return (
    <section className="contacts contacts-page">
      <div className="container">
        <SampleContacts />
      </div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaffa8b388ca4fe230999520a5bb493bd34abaa392bffbf0c7b98d71e0f2d11f1&amp;source=constructor"
        width="100%"
        height="600"
        title="Мы на карте"
        className="map"
        id="map"></iframe>
    </section>
  );
};

export default ContactsPage;
