import React, { useEffect, useState } from 'react';
import { getProductos } from '../services/productService';

export const ListadoItems = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productos = await getProductos();
            console.log(productos.productos);
            setProducts(productos.productos);
        };

        fetchProducts();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    {products.map(p => (
                        <div className="col-4 my-2"  key={p._id}>
                            <div className="card">
                            <img src={p.imagen} alt={p.nombre} style={{ width: '200px', height: 'auto' }} />
                                <div className="card-body">
                                    <h4 className="card-title mb-3">{p.marca.nombre}</h4>
                                    <h5 className="card-title mb-3">{p.nombre}</h5>
                                    <p>{p.medida}</p>
                                </div>
                                <div className="card-body d-flex justify-content-between text-danger">
                                    <button className="btn btn-danger">Agregar</button>
                                    <span>${p.precio}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
