import React from 'react';
import { Carrusel, SubItem, SeccionOfertas } from '../components';

export const HomePageMarketApp = () => {
  return (
    <>
      <div className='container'>
        <div className='row mb-3'>
          <Carrusel />
        </div>
        <div className='row'>
          <SubItem />
        </div>
        <div className='row'>
          <SeccionOfertas />
        </div>
      </div>
    </>
  );
};
