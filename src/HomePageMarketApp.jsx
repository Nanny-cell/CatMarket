import React from 'react';
import { Navbar, Carrusel, SubItem, SeccionOfertas } from './components';

export const HomePageMarketApp = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row mb-3' >
          <Carrusel />
        </div>
        <div className='row' >
          <SubItem />
        </div>
        <div className='row' >
          <SeccionOfertas />
        </div>
      </div>
    </>
  )
}
