import React from 'react';
import Advantage from '../components/Advantage';
import CarBrand from '../components/CarBrand';
import FewContacts from '../components/MiniContacts';
import Hero from '../components/Hero';
import LittleAbout from '../components/MiniAbout';
import Services from '../components/Services';
import SmallInformation from '../components/SmallInformation';
import Request from '../components/Request';

const Home = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    goToTop();
  }, []);
  return (
    <>
      <Hero />
      <SmallInformation />
      <CarBrand />
      <Services />
      <Advantage />
      <LittleAbout />
      <Request />
      <FewContacts />
    </>
  );
};

export default Home;
