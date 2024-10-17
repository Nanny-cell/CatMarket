import React, { useState } from 'react';
import logo from '../img/icon.png';
import { NavLink } from 'react-router-dom';
import { Login, MiCarrito } from '../modal';

export const Navbar = ({ cartItems, countItems, handleCountProducts, setCartItems }) => {

    const [user, setUser] = useState();

    const handlerShowUser = (nombre) => {
        setUser(nombre)
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img src={logo} width="100" /></NavLink>
                <NavLink className="navbar-brand" to="/">CatMarket</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item me-5">
                            <NavLink className="nav-link active" aria-current="page" to="/">Ofertas</NavLink>
                        </li>
                        <li className="nav-item me-5">
                            <NavLink
                                className="nav-link active"
                                aria-current="page"
                                to=""
                                data-bs-toggle="modal"
                                data-bs-target="#miCarritoModal"
                            >
                                Mi Carrito ({countItems})
                            </NavLink>
                            <MiCarrito cartItems={cartItems} handleCountProducts={handleCountProducts} countItems={countItems} setCartItems={setCartItems} />
                        </li>
                        <li className="nav-item me-5">
                            <NavLink
                                className="nav-link active"
                                aria-current="page"
                                to=""
                                data-bs-target="#exampleModalToggle"
                                data-bs-toggle="modal"
                            >
                                {user ? 'Hola ' + user : 'Iniciar sesion'}
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-person-circle mx-2" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                </svg>
                            </NavLink>
                            <Login handler={handlerShowUser} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}