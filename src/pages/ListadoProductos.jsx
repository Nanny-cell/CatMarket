import React from 'react'
import confort from '../img/confortListItem.png'

export const ListadoProductos = () => {
    return (
        <>
            <div className="container2">
                <div className="left-side">
                    <h3>Zona Izquierda</h3>
                    <p>Contenido en la zona izquierda.</p>
                </div>
                <div className="right-side">
                    <div className="row-right">


                        <div className="top-right" style={{ width: "18rem;" }}>
                            <img src={confort} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Confort</h5>
                            </div>
                            <div className="card-body">
                                <button>Agregar</button>
                                <span>$1290</span>
                            </div>
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
            </div>
        </>
    )
}



<div className="card" style={{ width: "18rem;" }}>
    <img src={confort} className="card-img-top" alt="..." />
    <div className="card-body">
        <h5 className="card-title">Confort</h5>
    </div>
    <div className="card-body">
        <button>Agregar</button>
        <span>$1290</span>
    </div>
</div>