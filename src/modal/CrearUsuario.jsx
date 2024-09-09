import React from 'react'

export const CrearUsuario = () => {
  return (
    <>
        <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Crear una cuenta</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputName" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="exampleInputName" placeholder="Nombre completo" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail2" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Correo@ejemplo.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword2" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Contraseña" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-link" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Ya tengo cuenta</button>
                            <button className="btn btn-primary">Crear cuenta</button>
                        </div>
                    </div>
                </div><p></p>
    </>
  )
}
