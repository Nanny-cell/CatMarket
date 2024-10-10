import React from 'react';
import carnesCarrusel from '../img/carnesCarrusel.png'
import frutasCarrusel from '../img/frutasCarrusel.png'
import comidaPerroCarrusel from '../img/comidaPerroCarrusel.png'



export const Carrusel = () => {

    const imgStyle = {
        width: '100%',
        height: '400px',  // Ajusta la altura según tus necesidades
        objectFit: 'contain'  // Contiene la imagen dentro del contenedor sin recortar
    };
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                    <img src={comidaPerroCarrusel} className="d-block w-100" alt="..." style={imgStyle} />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={frutasCarrusel} className="d-block w-100" alt="..." style={imgStyle} />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={carnesCarrusel} className="d-block w-100" alt="..." style={imgStyle} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
