import React from 'react';
import SampleAbout from '../sample/SampleAbout';
import { Link } from 'react-router-dom';

const MiniAbout = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <SampleAbout />
        </div>
        <Link to="about" className="about__link">
          Больше о нас
        </Link>
      </div>
    </section>
  );
};

export default MiniAbout;
