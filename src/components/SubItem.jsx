import React from 'react'
import iconLimpieza from '../img/iconLimpieza.png';
import iconAlcohol from '../img/iconAlcohol.png';
import iconFrutaVerdura from '../img/iconFrutaVerdura.png';
import iconBebe from '../img/iconBebe.png';
import iconCarnes from '../img/iconCarnes.png';
import { NavLink } from 'react-router-dom';


export const SubItem = () => {
    return (
        <div className="row">
            <div className="col-md-2 offset-1">
                <NavLink to="/listadoItem" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                    <button type="button" className="btn custom-btn border-0">
                        <img src={iconLimpieza} width="100" />
                    </button>
                </NavLink>
                <p>Limpieza</p>
            </div>
            <div className="col-md-2">
                <NavLink to="/listadoItem" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                    <button type="button" className="btn custom-btn border-0">
                        <img src={iconAlcohol} width="100" />

                    </button>
                </NavLink>
                <p>Alcohol</p>
            </div>
            <div className="col-md-2">
                <NavLink to="/listadoItem" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                    <button type="button" className="btn custom-btn border-0">
                        <img src={iconFrutaVerdura} width="100" />
                    </button>
                </NavLink>
                <p>Fruta y Verduras</p>
            </div>
            <div className="col-md-2">
                <NavLink to="/listadoItem" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                    <button type="button" className="btn custom-btn border-0">
                        <img src={iconBebe} width="100" />

                    </button>
                </NavLink>
                <p>Bebe</p>
            </div>
            <div className="col-md-2">
                <NavLink to="/listadoItem" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                    <button type="button" className="btn custom-btn border-0">
                        <img src={iconCarnes} width="100" />
                    </button>
                </NavLink>
                <p>Carnes</p>
            </div>
        </div>
    )
}
