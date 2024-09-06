import React from 'react'

export const Login = () => {
    return (
        <>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Ingresa a tu cuenta.</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Correo@ejemplo.com' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Contraseña' />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" className="btn btn-link">Crear cuenta</button>
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Ingresar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
