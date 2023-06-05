export function LoginPage ( ) {
    return (
        <div style={{minHeight:"100vh"}} className="d-flex align-items-center justify-content-end">
            <div style={{ minWidth:"360px"}} className="p-3 border me-3">
                <div className="d-flex flex-column align-items-start justify-content-start">
                    <h1 className="fw-bold text-left">Autoparts</h1>
                    <p>
                        Bienvenido a Autoparts.
                    </p>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="inputEmailId" placeholder="yo@ejemplo.com"></input>
                    <label for="inputEmailId">Correo electrónico</label>
                </div>
                    <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="inputPasswordId" placeholder="Contraseña"></input>
                    <label for="inputPasswordId">Contraseña</label>
                </div>
                <div className="d-flex justify-content-start">
                    <button className="btn btn-light me-2">Crear una cuenta</button>
                    <button className="btn btn-primary">Acceder</button>
                </div>
            </div>
        </div>
    )
}