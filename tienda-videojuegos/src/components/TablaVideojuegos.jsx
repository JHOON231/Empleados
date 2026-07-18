import React from 'react';
import './TablaVideojuegos.css'; // Aquí conectamos los estilos del paso 4

function TablaVideojuegos({ videojuegos }) {
    return (
        <div className="container">
            <div className="header-section">
                <h2>Tienda de Videojuegos</h2>
                <p>Catálogo y Progreso de Descarga</p>
            </div>
            
            <div className="table-responsive">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Género</th>
                            <th>Plataforma</th>
                            <th>Lanzamiento</th>
                            <th>Precio</th>
                            <th>Estado</th>
                            <th>Progreso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {videojuegos.map((juego) => (
                            <tr key={juego.id}>
                                <td className="game-title">{juego.titulo}</td>
                                <td>{juego.genero}</td>
                                <td>{juego.plataforma}</td>
                                <td>{juego.lanzamiento}</td>
                                <td>${juego.precio}</td>
                                <td>
                                    <span className={`status-badge ${juego.disponible ? 'active' : 'inactive'}`}>
                                        {juego.disponible ? 'Disponible' : 'Agotado'}
                                    </span>
                                </td>
                                <td>
                                    <div className="progress-container">
                                        {/* Aquí usamos la etiqueta <progress> recomendada por la documentación oficial */}
                                        <progress value={juego.progreso} max="1"></progress>
                                        <span className="progress-text">{Math.round(juego.progreso * 100)}%</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TablaVideojuegos;