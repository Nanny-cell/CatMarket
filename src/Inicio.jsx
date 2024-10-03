import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { ListadoProductos } from './pages/ListadoProductos';
import { HomePageMarketApp } from './pages/HomePageMarketApp';

export const Inicio = () => {

    const [cartItems, setCartItems] = useState([]);

    const handlerAddProductCart = (product) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find(item => item.id === product.id);
            if (itemExists) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    return (
        <>
            <Navbar cartItems={cartItems} />

            <Routes>
                <Route path='/' element={<HomePageMarketApp />} />
                <Route path='/listadoItem' element={<ListadoProductos handlerAddProductCart={handlerAddProductCart} />} />

            </Routes>

        </>
    );
};
