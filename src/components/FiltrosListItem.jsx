import React from 'react'

export const FiltrosListItem = ({ handleBrandChange }) => {

    const brands = ['Clorox', 'Virginia', 'Quix', 'Cif', 'Lysoform', 'Nubelin', 'Confort'];

    return (
        <>
            <div className="left-side">
                <h3>Marca</h3>
                {brands.map((brand) => (
                    <div className="form-check mb-3 " key={brand}>
                        <input
                            className="form-check-input "
                            type="checkbox"
                            value={brand}
                            id={`flexCheck-${brand}`}
                            onChange={(e) => handleBrandChange(brand, e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor={`flexCheck-${brand}`}>
                            {brand}
                        </label>
                    </div>
                ))}
            </div>
        </>

    )
}
