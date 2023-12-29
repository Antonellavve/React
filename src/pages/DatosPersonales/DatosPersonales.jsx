import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DatosPersonales = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userData);

    useEffect(() => {
        // Cuando se abre el componente, obtén los datos del usuario
        dispatch(fetchUserData());
      }, [dispatch]);
      if (loading) {
        return <p>Cargando...</p>;
      }
    
      if (error) {
        return <p>{error}</p>;
      }

  return (
    <ContainerDatos>
      <h2>Datos Personales</h2>
      <p>Nombre: {userData?.name}</p>
      <p>Email: {userData?.email}</p>
    </ContainerDatos>
  );
};

export default DatosPersonales;
