import React from 'react';
import Navbar from './Components/Home/Navbar/Navbar';
import SpecialPackage from './Components/Home/SpecialPackage/SpecialPackage';
import Offer from './Components/Home/Offer/Offer';
import HajjUmrah from './Components/Home/HajjUmrah/HajjUmrah';
import PersonPackage from './Components/Home/PersonPckage/PersonPackage';
import Discount from './Components/Home/Discount/Discount';

const App = () => {
  return (
    <>
      <Navbar />
      <SpecialPackage />
      <Offer />
      <HajjUmrah />
      <PersonPackage />
      <Discount />
    </>
  );
};

export default App;