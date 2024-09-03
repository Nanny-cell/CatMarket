import React from 'react'
import { FiltrosListItem, ListadoItems } from '../components';

export const ListadoProductos = () => {
    return (
        <>
            <div className="container2">
                <FiltrosListItem />
                <ListadoItems />
            </div>
        </>
    )
}
