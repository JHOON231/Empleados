import "./Empleados.css";

function Empleados({ empleados, onEliminar, onEditar }) {
    return (
        <div className="container">
            <div className="header-section">
                <h2>Empleados</h2>
                <p>Registros</p>
            </div>
            
            {/* Este contenedor es la clave para que sea responsive con scroll horizontal */}
            <div className="table-responsive">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Departamento</th>
                            <th>Turno</th>
                            <th>Ingreso</th>
                            <th>Salario</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map((emp) => (
                            <tr key={emp.id || emp.nombre}>
                                <td>{emp.nombre}</td>
                                <td>{emp.edad}</td>
                                <td>{emp.departamento}</td>
                                <td>{emp.turno}</td>
                                <td>{emp.fechaIngreso}</td>
                                <td>{emp.salario}</td>
                                <td>
                                    <span className={`status-badge ${emp.estado?.toLowerCase() === 'activo' ? 'active' : 'inactive'}`}>
                                        {emp.estado}
                                    </span>
                                </td>
                                <td>
                                    <div className="actions-container">
                                        <button className="btn btn-edit" onClick={() => onEditar(emp)}>Editar</button>
                                        <button className="btn btn-delete" onClick={() => onEliminar(emp)}>Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Empleados;