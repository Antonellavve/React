import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCurrentUser } from '../../Redux/store'

const LogoutContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Lógica para cerrar sesión
      // Puedes realizar acciones adicionales aquí, como hacer una solicitud HTTP al servidor
      // para cerrar la sesión, limpiar el token de autenticación, etc.

      // Despachar una acción para limpiar el estado de autenticación (redux)
      await dispatch(clearCurrentUser());

      // Redirigir al usuario a la página de inicio de sesión u otra página relevante
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      // Manejar errores según tus necesidades
    }
  };

  return (
    <div>
      <p>¿Estás seguro de que deseas cerrar sesión?</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default LogoutContent;
