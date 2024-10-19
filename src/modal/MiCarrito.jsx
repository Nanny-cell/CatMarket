import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const MiCarrito = ({ cartItems, handleCountProducts, countItems, setCartItems }) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  const incrementQuantity = (id) => {
    // Actualiza los items locales
    const updatedItems = items.map(item =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setItems(updatedItems); // Actualiza el estado local
    setCartItems(updatedItems); // Actualiza el carrito en Inicio
    handleCountProducts(updatedItems); // Actualiza el contador
  };

  const decrementQuantity = (id) => {
    const updatedItems = items
      .map(item =>
        item._id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0); // Elimina si cantidad es 0

    setItems(updatedItems); // Actualiza el estado local
    setCartItems(updatedItems); // Actualiza el carrito en Inicio
    handleCountProducts(updatedItems); // Actualiza el contador
  };

  const total = items.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  const handlePayClick = () => {
    Swal.fire({
      title: (items.length > 0) ? "¡Buen trabajo!" : "Ops!",
      text: (items.length > 0) ? "¡Pago realizado exitosamenrte!"  : "Tu carrito esta vacio!",
      icon: (items.length > 0) ? "success"  : "warning",
      confirmButtonText: "Continuar" 
    });
    setItems([]); // Actualiza el estado local
    setCartItems([]); // Actualiza el carrito en Inicio
    handleCountProducts([]); // Actualiza el contador
  };

  return (
    <div
      className="modal fade"
      id="miCarritoModal"
      tabIndex="-1"
      aria-labelledby="miCarritoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-right">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="miCarritoModalLabel">
              Tu Carrito ({countItems})
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">

            </button>
          </div>

          <div className="modal-body" >
            <table className="table">
              <thead>
                <tr>
                  <th> </th>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item._id}>
                    <td><img src={item.imagen} alt="50" style={{ width: '30px', height: '30px' }} /></td>
                    <td>{item.nombre} {item.marca.nombre} </td>
                    {/* Multiplica el precio por la cantidad */}
                    <td>${item.precio * item.quantity}</td>
                    <td>
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" onClick={() => decrementQuantity(item._id)}>-</button>
                        <button type="button" className="btn btn-secondary">{item.quantity}</button>
                        <button type="button" className="btn btn-secondary" onClick={() => incrementQuantity(item._id)}>+</button>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="2" >Total:</td>
                  <td>${total}</td>
                  <td>
                    <button className="btn btn-dark" data-bs-dismiss="modal" aria-label="Close" onClick={handlePayClick}>Ir a pagar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
