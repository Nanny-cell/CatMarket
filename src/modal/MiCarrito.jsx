import React from 'react';

export const MiCarrito = () => {
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
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Contenido del carrito</p>
          </div>
        </div>
      </div>
    </div>
  );
};
