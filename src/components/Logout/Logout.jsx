import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/limitProducts';
import {clearCurrentUser} from '../../Redux/User/userSlice'
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

  return (
    <div>
      <p>¿Estás seguro de que deseas cerrar sesión?</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Logout;
