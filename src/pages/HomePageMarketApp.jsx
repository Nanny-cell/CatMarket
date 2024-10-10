import React from 'react';
import { Carrusel, SubItem, SeccionOfertas } from '../components';

export const HomePageMarketApp = () => {
  return (
    <div className='container text-center'>
      <div className='row mb-3'>
        <div className="col-12">
          <Carrusel />
        </div>
      </div>
      
      <SubItem />
      
      <div className='row'>
        <div className="col-12">
          <SeccionOfertas />
        </div>
      </div>
    </div>
  );
};
