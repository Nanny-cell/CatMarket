import React from 'react'

export const FiltrosListItem = ({ handleBrandChange }) => {

    const brands = ['Clorox', 'Virginia', 'Quix', 'Cif', 'Lysoform', 'Nubelin', 'Confort'];

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid col-md-4 mb-4">
                    <h3 className="navbar-brand">Marca</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#brandMenu" aria-controls="brandMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="brandMenu">
                        <ul className="navbar-nav flex-column">
                            {brands.map((brand) => (
                                <li className="nav-item" key={brand}>
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
        </>

    )
}
