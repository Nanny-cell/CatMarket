import React from 'react'
import { Navbar } from './components/Navbar'
import { Carrusel } from './components/Carrusel'

export const HomePageMarketApp = () => {
  return (
    <>
        <Navbar />
        <div className='container'>
          <Carrusel />
        </div>
    </>
  )
}
