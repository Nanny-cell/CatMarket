import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { ListadoProductos } from './pages/ListadoProductos';
import { HomePageMarketApp } from './pages/HomePageMarketApp';

export const Inicio = () => {

    const [cartItems, setCartItems] = useState([]);
    const [countItems, setCountItems] = useState(0);

    const handleCountProducts = (items) => {
        setCountItems(items.reduce((total, item) => total + item.quantity, 0))
    }


    const handlerAddProductCart = (product) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find(item => item._id === product._id);
            let updatedItems;
            if (itemExists) {
                updatedItems = prevItems.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                updatedItems = [...prevItems, { ...product, quantity: 1 }];
            }
            handleCountProducts(updatedItems); // Llamamos a la función con los items actualizados
            return updatedItems;
        });
    };

    return (
        <div className="container">
            <div className="row">
                <Navbar cartItems={cartItems} countItems={countItems} handleCountProducts={handleCountProducts} setCartItems={setCartItems} />
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
