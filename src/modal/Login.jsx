import React, { useRef, useState } from 'react';
import { login } from '../services/authService';
import { CrearUsuario } from '../modal/CrearUsuario';

export const Login =  ({handler}) => {

    const [email, setEmail] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [error, setError] = useState(false);

    const modalRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === '' || contrasenia === '') {
            console.log("Error: Campos vacíos");
            setError(true);
            return;
        }
        const payload = {
            mail: email,
            password:contrasenia
        } 
        const data = await login(payload);
        handler(data.name)
        console.log(data);
        setError(false);

        // Cerrar el modal después de un inicio de sesión exitoso
        if (modalRef.current) {
            const modalElement = modalRef.current;
            const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
            if (modalInstance) {
                modalInstance.hide();
            }
        }
    };

    return (
        <>
            {/**Primera modal Ingresar cuenta */}
            <div
                className="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabIndex="-1"
                ref={modalRef}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Ingresa a tu cuenta</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Correo@ejemplo.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Contraseña"
                                        value={contrasenia}
                                        onChange={(e) => setContrasenia(e.target.value)}
                                    />
                                </div>
                                {error && <p className="text-danger">Todos los campos son obligatorios</p>}
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-link" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Crear cuenta</button>
                                    <button type="submit" className="btn btn-primary">Ingresar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/**Segundo Modal Crear cuenta */}
            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <CrearUsuario />
            </div>
        </>
    );
};
