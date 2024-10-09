import React, { useEffect, useState } from 'react';
import { getProductos } from '../services/productService';

export const ListadoItems = ({handlerAddProductCart, selectedBrands }) => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            const productos = await getProductos();
            console.log(productos.productos);
            setProducts(productos.productos);
        };

        fetchProducts();
    }, []);

    // Filtrar productos según las marcas seleccionadas
    const filteredProducts = products.filter(product =>
            selectedBrands.length === 0 || selectedBrands.includes(product.marca.nombre)
    );

    return (
        <>
            <div className="container ">
                <div className="row ">
                    {filteredProducts.map(p => (
                        <div className="col-md-4 mb-4" key={p._id}>
                            <div className="card">
                            <img src={p.imagen} alt={p.nombre} className="card-img-top w-100 h-100" />
                                <div className="card-body">
                                    <h4 className="card-title mb-3">{p.marca.nombre}</h4>
                                    <h5 className="card-title mb-3">{p.nombre}</h5>
                                    <p>{p.medida}</p>
                                </div>
                                <div className="card-body d-flex justify-content-between text-danger">
                                    <button className="btn btn-danger" onClick={() => handlerAddProductCart(p)}>Agregar</button>
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
