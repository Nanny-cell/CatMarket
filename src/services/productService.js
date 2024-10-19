const productos = "http://localhost:5000/api/products"

export const getProductos = async (tipo) => {
    const filtrado = `${productos}?tipoProducto=${tipo}`;

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

export const getMarcasByTipo = async (tipo) => {
    try {
        const data = await getProductos(tipo);
        if (data.productos.length > 0) {
            const nombresMarcas = data.productos.map(producto => producto.marca.nombre);
            const marcasUnicas = [...new Set(nombresMarcas)];
            return marcasUnicas;
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}
