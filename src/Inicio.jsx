import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { ListadoProductos } from './pages/ListadoProductos';
import { HomePageMarketApp } from './pages/HomePageMarketApp';

export const Inicio = () => {

    const [user, setUser] = useState([]);

    return (
        <>
            <Navbar setUser ={setUser} user={user} />

            <Routes>
                <Route path='/' element={<HomePageMarketApp />} />
                <Route path='/listadoItem' element={<ListadoProductos />} />

            </Routes>

        </>
    );
};
