import React from 'react';
import { ContainerDatos, DataUser } from "./DatosPersonalesStyles";
// import { useNavigate } from 'react-router-dom';import { BASE_URL } from '../../utils/limitProducts';
import { useSelector, useDispatch } from 'react-redux';

const DatosPersonales = () => {
  const { currentUser } = useSelector(state => state.user);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  return (
    <ContainerDatos>
      <h2>Mis Datos</h2>
        <p>Modifica tus datos personales a continuación para que tu cuenta esté actualizada.</p>
      <h2>Detalles</h2>  
        
      <DataUser>
        
              <h4>Nombre: {currentUser?.nombre}</h4>
         
              <h4>Correo Electrónico: {currentUser?.email}</h4>
              
          
              <h4>Dirección:</h4>
          
      </DataUser>

      
    </ContainerDatos>
  );
};

export default DatosPersonales;
