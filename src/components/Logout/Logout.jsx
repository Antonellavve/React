import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCurrentUser } from '../../Redux/User/userSlice';
import Submit from '../UI/Submit/Submit';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Limpiar el carrito
      await dispatch(clearCurrentUser());

      // Limpiar el token de autenticación
      sessionStorage.removeItem('token');

      // Redirigir al usuario a la página de inicio de sesión
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  useEffect(() => {
    const handleUnload = () => {
      // Llamar a la función de logout cuando el usuario cierra la pestaña o recarga la página
      handleLogout();
    };

    // Agregar el evento unload
    window.addEventListener('unload', handleUnload);

    // Retornar una función de limpieza para quitar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('unload', handleUnload);
    };
  }, []);

  return (
    <div>
      <p>¿Estás seguro de que deseas cerrar sesión?</p>
      <Submit onClick={handleLogout}>Cerrar Sesión</Submit>
    </div>
  );
};

export default Logout;