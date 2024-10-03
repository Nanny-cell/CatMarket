import React from 'react'
import { FiltrosListItem, ListadoItems } from '../components';

export const ListadoProductos = ({handlerAddProductCart}) => {
    return (
        <>
            <div className="container2">
                <FiltrosListItem />
                <ListadoItems handlerAddProductCart={handlerAddProductCart} />
            </div>
        </>
    )
}
