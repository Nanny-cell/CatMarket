import React, { useState } from 'react';
import logo from '../img/icon.png';
import { NavLink } from 'react-router-dom';
import { Login, MiCarrito } from '../modal';

export const Navbar = ({ cartItems }) => {

    const [user, setUser] = useState();

    const handlerShowUser = (nombre) => {
        setUser(nombre)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid justify-content-center">
                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        <span href="#" className="navbar-brand">
                            <img src={logo} width="100" />
                        </span>
                    </NavLink>
                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        <span className="navbar-brand" href="#">CatMarket</span>
                    </NavLink>

                    <form className="d-flex ">
                        <div className="input-group border rounded-pill custom-search-width">
                            <span className="input-group-text bg-transparent border-0" id="search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </span>
                            <input className="form-control bg-transparent border-0 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                    </form>
                    <button type="button" className="btn custom-btn border-0">Ofertas</button>
                    <button type="button" className="btn custom-btn border-0" data-bs-toggle="modal" data-bs-target="#miCarritoModal">Mi Carrito ({cartItems.length}) </button>
                    <MiCarrito cartItems={cartItems} />

                    <button type='button' className='btn custom-btn' data-bs-target="#exampleModalToggle" data-bs-toggle="modal" >
                        <a className="navbar-brand" href="#">{ user ? 'Hola ' + user : 'Iniciar sesion'}</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                    </button>
                    <Login handler={handlerShowUser} />

                </div>
            </nav>
        </>
    )
}
