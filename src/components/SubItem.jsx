import React from 'react'
import iconLimpieza from '../img/iconLimpieza.png';
import iconAlcohol from '../img/iconAlcohol.png';
import iconFrutaVerdura from '../img/iconFrutaVerdura.png';
import iconBebe from '../img/iconBebe.png';
import iconCarnes from '../img/iconCarnes.png';
import { NavLink } from 'react-router-dom';


export const SubItem = () => {
    return (
        <>
            <div className="container text-center">
                <div className="row row-cols-5">
                    <div className="col-sm">
                    <NavLink to="/listadoItem" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        <button type="button" className="btn custom-btn border-0">
                            <img src={iconLimpieza} width="100" />
                        </button>
                    </NavLink>
                        <p>Limpieza</p>
                    </div>
                    <div className="col-sm">
                        <button type="button" className="btn custom-btn border-0">
                            <img src={iconAlcohol} width="100" />
                        </button>
                        <p>Alcohol</p>
                    </div>
                    <div className="col-sm">
                        <button type="button" className="btn custom-btn border-0">
                            <img src={iconFrutaVerdura} width="100" />
                        </button>
                        <p>Fruta y Verduras</p>
                    </div>
                    <div className="col-sm">
                        <button type="button" className="btn custom-btn border-0">
                            <img src={iconBebe} width="100" />
                        </button>
                        <p>Bebe</p>
                    </div>
                    <div className="col-sm">
                        <button type="button" className="btn custom-btn border-0">
                            <img src={iconCarnes} width="100" />
                        </button>
                        <p>Carnes</p>
                    </div>
                </div>
            </div>
        </>
    )
}
