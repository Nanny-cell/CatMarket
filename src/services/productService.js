const productos = "http://localhost:5000/api/products"

export const getProductos = async (tipo) => {
    const filtrado = `${productos}?tipoProducto=${tipo}`;
    console.log(filtrado)
    try {
        const response = await fetch(filtrado);
        if (!response.ok) {
            throw new Error('Error al obtener los productos');
        }
        const data = await response.json();
        return data.productos;
    } catch (error) {
        console.error(error);
        return [];
    }
};
