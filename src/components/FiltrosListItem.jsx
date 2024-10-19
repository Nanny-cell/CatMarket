import React, { useEffect, useState } from 'react';
import { getMarcasByTipo } from '../services/productService';

export const FiltrosListItem = ({ handleBrandChange }) => {

    const [marcas, setMarcas] = useState([]);

    useEffect(() => {
        const fetchMarcas = async () => {
            const marcas = await getMarcasByTipo("Limpieza");
            setMarcas(marcas);
        };

        fetchMarcas();
    }, []);

    
    return (
        <nav className="navbar navbar-expand-md">
            <div className='container-fluid'>
                <a className="navbar-brand d-md-none d-block" >Marca</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="list-group">
                        {marcas.map((brand) => (
                            <li className="list-group-item nav-item" key={brand}>
                                <div className="form-check mb-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={brand}
                                        id={`flexCheck-${brand}`}
                                        onChange={(e) => handleBrandChange(brand, e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor={`flexCheck-${brand}`}>
                                        {brand}
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
