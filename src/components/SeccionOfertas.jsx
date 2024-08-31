import React from 'react'
import aseoSeccionOfertas from '../img/aseoSeccionOfertas.png';
import mascotaSeccionOfertas from '../img/mascotaSeccionOfertas.png';
import herramientasSeccionOfertas from '../img/herramientasSeccionOfertas.png';

export const SeccionOfertas = () => {
    return (
        <>
            <div className="container">
                <div className="grupoOfertas row align-items-stretch">
                    <div className="ofertas col-6">
                        <img src={aseoSeccionOfertas} alt="Aseo Seccion Ofertas" />
                    </div>
                    <div className="col-6">
                        <div className="imgOfertas right-images">
                            <img src={mascotaSeccionOfertas} alt="Mascota Seccion Ofertas" />
                            <img src={herramientasSeccionOfertas} alt="Herramientas Seccion Ofertas" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
