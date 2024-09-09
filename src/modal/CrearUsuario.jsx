import React, { useState } from 'react';
import { createUser } from '../services/authService';

export const CrearUsuario =  () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (nombre === '' || email === '' || contrasenia === '') {
            setError(true);
            return;
        }
        setError(false);

        const body = {
            name: nombre,
            mail: email,
            password: contrasenia
        }

        const data = await createUser(body)
        console.log(data)
    };

    return (
        <>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                            Crear una cuenta
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputName"
                                    placeholder="Nombre completo"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail2" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail2"
                                    placeholder="Correo@ejemplo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword2" className="form-label">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword2"
                                    placeholder="Contraseña"
                                    value={contrasenia}
                                    onChange={(e) => setContrasenia(e.target.value)}
                                />
                            </div>
                            {error && <p style={{ color: 'red' }}>Todos los campos son obligatorios</p>}
                            <div className="modal-footer">
                                <button
                                    className="btn btn-link"
                                    data-bs-target="#exampleModalToggle"
                                    data-bs-toggle="modal"
                                >
                                    Ya tengo cuenta
                                </button>
                                <button className="btn btn-primary" type="submit">
                                    Crear cuenta
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
