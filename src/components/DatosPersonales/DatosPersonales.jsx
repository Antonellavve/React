import React from 'react';
import { ContainerDatos } from "./DatosPersonalesStyles";
import { useNavigate } from 'react-router-dom';import { BASE_URL } from '../../utils/limitProducts';
import { useSelector, useDispatch } from 'react-redux';

const DatosPersonales = () => {
  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <ContainerDatos>
      <h2>Mis Datos</h2>
      <p>Modifica tus datos personales a continuación para que tu cuenta esté actualizada.</p>
      
      <h2>Detalles</h2>
      <ul>
        <li><h3>Nombre:</h3>{`${currentUser?.nombre}`}</li>
        <li><h3>Correo Electronico:</h3>{`${currentUser?.email}`}</li>
        <li><h3>Direccion</h3></li>
      </ul>
    </ContainerDatos>
  );
};

export default DatosPersonales;
