import React from 'react';
import Navbar from './Components/Home/Navbar/Navbar';
import SpecialPackage from './Components/Home/SpecialPackage/SpecialPackage';
import Offer from './Components/Home/Offer/Offer';

const App = () => {
  return (
    <>
      <Navbar />
      <SpecialPackage />
      <Offer />
    </>
  );
};

export default App;