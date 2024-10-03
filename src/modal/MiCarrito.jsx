import React, { useEffect, useState } from 'react';

const initialCartItems = [];

export const MiCarrito = ({ cartItems }) => {

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
              Tu Carrito
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">

            </button>
          </div>

          <div className="modal-body" >
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                </tr>
              </thead>
              <tbody>
              {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.nombre}</td>
                    <td>{item.precio}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
