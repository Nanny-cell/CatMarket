import React from 'react'
import congelados from '../img/congelados.png';
import mascotaSeccionOfertas from '../img/mascotaSeccionOfertas.png';
import herramientasSeccionOfertas from '../img/herramientasSeccionOfertas.png';

export const SeccionOfertas = () => {
    return (
        <>
            <div className="container">
                <div className="grupoOfertas row align-items-stretch">
                    <div className="ofertas col-6">
                        <img src={congelados} alt="Aseo Seccion Ofertas" className="img-opacity" />
                    </div>
                    <div className="col-6">
                        <div className="imgOfertas right-images">
                            <img src={mascotaSeccionOfertas} alt="Mascota Seccion Ofertas" className="img-opacity" />
                            <img src={herramientasSeccionOfertas} alt="Herramientas Seccion Ofertas" className="img-opacity" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
