export function SignUpPage () {
    return (
        <div style={{minHeight:"100vh"}} className="d-flex align-items-center justify-content-end">
            <div style={{ minWidth:"360px"}} className="p-3 border me-3">
                <div className="d-flex flex-column align-items-start justify-content-start">
                    <h1 className="fw-bold text-left">Crear tu cuenta</h1>
                    <p>
                        Crea tu cuenta de forma gratuita.
                    </p>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputNombresId" placeholder="Nombres y apellidos"></input>
                    <label for="inputNombresId">Nombre y apellido</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputNombresId" placeholder="Nombres"></input>
                    <label for="inputNombresId">Teléfono</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="inputEmailId" placeholder="yo@ejemplo.com"></input>
                    <label for="inputEmailId">Correo electrónico</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="inputPasswordId" placeholder="Contraseña"></input>
                    <label for="inputPasswordId">Contraseña</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="inputConfirmPasswordId" placeholder="Confirmar Contraseña"></input>
                    <label for="inputConfirmPasswordId">Confirmar contraseña</label>
                </div>
                <div className="d-flex justify-content-start">
                    <button className="btn btn-light me-2">Volver</button>
                    <button className="btn btn-primary">Crear una cuenta</button>
                </div>
            </div>
        </div>
    )
}