import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useRedirect = redirectTo => {
  const { currentUser } = useSelector(state => state.user);
//Si el usuario está autenticado (currentUser existe), 
//se realiza la redirección a la ruta especificada.
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate(redirectTo);
    }
  }, [currentUser, navigate, redirectTo]);
};

export default useRedirect;

//Este redirecciona el estado del usuario. 
//Por ejemplo, se puede usar en una página de 
//inicio de sesión para redirigir al usuario 
//a la página principal después de iniciar sesión.