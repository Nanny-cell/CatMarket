import React, { useEffect, useState } from 'react';

const initialCartItems = [];

export const MiCarrito = ({ cartItems }) => {

  const total = cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);

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
              Tu Carrito (
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
              )
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
                {cartItems.map(item => (
                  <tr key={item._id}>
                    <td><img src={item.imagen} alt="50" style={{ width: '30px', height: '30px' }} /></td>
                    <td>{item.nombre} {item.marca.nombre} </td>
                    {/* Multiplica el precio por la cantidad */}
                    <td>${item.precio * item.quantity}</td>
                    <td>
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" >-</button>
                        <button type="button" className="btn btn-secondary">{item.quantity}</button>
                        <button type="button" className="btn btn-secondary">+</button>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="2" >Total:</td>
                  <td>${total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
