import React, { useState } from 'react'
import { FiltrosListItem, ListadoItems } from '../components';

export const ListadoProductos = ({ handlerAddProductCart }) => {

    // Estado para las marcas seleccionadas
    const [selectedBrands, setSelectedBrands] = useState([]);

    // Función para manejar los cambios en los filtros
    const handleBrandChange = (brandName, isChecked) => {
        if (isChecked) {
            setSelectedBrands([...selectedBrands, brandName]);
        } else {
            setSelectedBrands(selectedBrands.filter(brand => brand !== brandName));
        }
    };

    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col md-2">
                        <FiltrosListItem handleBrandChange={handleBrandChange} />
                    </div>
                    <div className="col md-10">
                        <ListadoItems handlerAddProductCart={handlerAddProductCart} selectedBrands={selectedBrands} />
                    </div>
                </div>
            </div>
        </>
    )
}