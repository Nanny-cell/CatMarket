export const getProductos = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/products');
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
