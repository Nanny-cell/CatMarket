import React from 'react'
import confort from '../img/confortListItem.png';


export const ListadoItems = () => {
    return (
        <>
            <div className="right-side">
                <div className="row-right">
                    <div className="top-right" >
                        <img src={confort} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title mb-3">Confort</h5>
                        </div>
                        <div className="card-body d-flex justify-content-between text-danger">
                            <button className="btn btn-danger">Agregar</button>
                            <span>$1290</span>
                        </div>
                    </div>
                    <div className="top-right" >
                        <img src={confort} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title mb-3">Confort</h5>
                        </div>
                        <div className="card-body d-flex justify-content-between text-danger">
                            <button className="btn btn-danger">Agregar</button>
                            <span>$1290</span>
                        </div>
                    </div>
                    <div className="top-right" >
                        <img src={confort} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title mb-3">Confort</h5>
                        </div>
                        <div className="card-body d-flex justify-content-between text-danger">
                            <button className="btn btn-danger">Agregar</button>
                            <span>$1290</span>
                        </div>
                    </div>

                </div>

                <div className="row-right">
                    <div className="top-right">
                        <h3>Zona Derecha 1</h3>
                        <p>Contenido en la zona derecha 1.</p>
                    </div>
                    <div className="middle-right">
                        <h3>Zona Derecha 2</h3>
                        <p>Contenido en la zona derecha 2.</p>
                    </div>
                    <div className="bottom-right">
                        <h3>Zona Derecha 3</h3>
                        <p>Contenido en la zona derecha 3.</p>
                    </div>
                </div>

                <div className="row-right">
                    <div className="top-right">
                        <h3>Zona Derecha 1</h3>
                        <p>Contenido en la zona derecha 1.</p>
                    </div>
                    <div className="middle-right">
                        <h3>Zona Derecha 2</h3>
                        <p>Contenido en la zona derecha 2.</p>
                    </div>
                    <div className="bottom-right">
                        <h3>Zona Derecha 3</h3>
                        <p>Contenido en la zona derecha 3.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
