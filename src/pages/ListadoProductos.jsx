import React, { useState } from 'react'
import { FiltrosListItem, ListadoItems } from '../components';

export const ListadoProductos = ({handlerAddProductCart}) => {

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
            <div className="container2">
                {/* Pasar el estado y la función para actualizarlo */}
                <FiltrosListItem handleBrandChange={handleBrandChange} />
                {/* Pasar las marcas seleccionadas a ListadoItems */}
                <ListadoItems handlerAddProductCart={handlerAddProductCart} selectedBrands={selectedBrands} />
            </div>
        </>
    )
}
