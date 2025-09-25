import React, { useState } from 'react';
import './App.css';

/**
 * Componente principal de la aplicación
 * Maneja el registro de estudiantes con formulario completo
 * @returns {JSX.Element} Formulario de registro de estudiantes
 */
function App() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    direccion: '',
    telefono: '',
    email: ''
  });
  
  const [submitting, setSubmitting] = useState(false);

  /**
   * Maneja el envío del formulario
   * Muestra los datos por 7 segundos y luego limpia el formulario
   */
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    // Muestra los datos por 7 segundos y luego volver al formulario
    setTimeout(() => {
      setSubmitting(false);
      // Limpia el formulario para permitir nuevo registro
      setFormData({
        nombres: '',
        apellidos: '',
        fechaNacimiento: '',
        direccion: '',
        telefono: '',
        email: ''
      });
    }, 7000);
  }

  /**
   * Maneja los cambios en los campos del formulario
   * @param {Event} event - Evento del input
   */
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className="estilo">
      <h1>Registro de Estudiante</h1>
      
      {submitting ? (
        <div className="confirmacion">
          <h2>Datos del Estudiante Registrado:</h2>
          <div className="datos-estudiante">
            <p><strong>Nombres:</strong> {formData.nombres}</p>
            <p><strong>Apellidos:</strong> {formData.apellidos}</p>
            <p><strong>Fecha de Nacimiento:</strong> {formData.fechaNacimiento}</p>
            <p><strong>Dirección:</strong> {formData.direccion}</p>
            <p><strong>Teléfono:</strong> {formData.telefono}</p>
            <p><strong>Email:</strong> {formData.email}</p>
          </div>
          <p className="mensaje-retorno">Retornando al formulario en unos segundos...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Nombres:</p>
              <input 
                type="text"
                name="nombres" 
                value={formData.nombres}
                onChange={handleChange}
                required
              />
            </label>
            
            <label>
              <p>Apellidos:</p>
              <input 
                type="text"
                name="apellidos" 
                value={formData.apellidos}
                onChange={handleChange}
                required
              />
            </label>
            
            <label>
              <p>Fecha de Nacimiento:</p>
              <input 
                type="date"
                name="fechaNacimiento" 
                value={formData.fechaNacimiento}
                onChange={handleChange}
                required
              />
            </label>
            
            <label>
              <p>Dirección:</p>
              <textarea 
                name="direccion" 
                value={formData.direccion}
                onChange={handleChange}
                rows="3"
                required
              />
            </label>
            
            <label>
              <p>Teléfono:</p>
              <input 
                type="tel"
                name="telefono" 
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </label>
            
            <label>
              <p>Email:</p>
              <input 
                type="email"
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </fieldset>
          <button type="submit">Registrar Estudiante</button>
        </form>
      )}
    </div>
  );
}

export default App;
