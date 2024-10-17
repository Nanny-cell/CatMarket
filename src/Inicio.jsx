import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { ListadoProductos } from './pages/ListadoProductos';
import { HomePageMarketApp } from './pages/HomePageMarketApp';

export const Inicio = () => {

    const [cartItems, setCartItems] = useState([]);

    const handlerAddProductCart = (product) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find(item => item._id === product._id);
            if (itemExists) {
                return prevItems.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    return (
        <div className="container">
            <div className="row">
                <Navbar cartItems={cartItems} />
            </div>
            <div className="row">
                <Routes>
                    <Route path='/' element={<HomePageMarketApp />} />
                    <Route path='/listadoItem' element={<ListadoProductos handlerAddProductCart={handlerAddProductCart} />} />

                </Routes>
            </div>
        </div>
    );
};
