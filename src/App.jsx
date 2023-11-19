import React from 'react';
import Navbar from './Components/Home/Navbar/Navbar';

import Footer from './Components/Home/Footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;