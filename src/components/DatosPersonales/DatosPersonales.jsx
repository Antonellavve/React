import React, { useState } from 'react';
import { ContainerDatos, Datos, DataUser, EditButton, EditableField, DatosEdit } from './DatosPersonalesStyles';
import { useSelector, useDispatch  } from 'react-redux';
import { updateUserData } from '../../Redux/User/userSlice';

const DatosPersonales = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name: currentUser?.name || '',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Dispatch the action to update user data
    dispatch(updateUserData(editedData));
  
    // Set isEditing to false after saving the data
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedData({
      name: currentUser?.name || '',
      email: currentUser?.email || '',
    });
  
    // Set isEditing to false when canceling the edit
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <ContainerDatos>
      <h2>Mis Datos</h2>
      {isEditing ? (
        <DatosEdit>
          <EditableField>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={editedData.name}
              onChange={handleInputChange}
            />
            <label>Apellido:</label>
            <input
              type="text"
              name="apellido"
              value={editedData.apellido}
              onChange={handleInputChange}
            />
            <label>Dirección:</label>
            <input
              type="text"
              name="adress"
              value={editedData.adress}
              onChange={handleInputChange}
            />
          </EditableField>

          <button onClick={handleSave}>Guardar</button>
          <button onClick={handleCancelEdit}>Cancelar</button>
        </DatosEdit>
      ) : (
        <Datos>
          <p>Modifica tus datos personales para que tu cuenta este actualizada</p>
          <DataUser>
            <h4>Nombre: {currentUser?.name}</h4>
            <h4>Apellido: {editedData.apellido}</h4>
            <h4>Correo Electrónico: {currentUser?.email}</h4>
            <h4>Dirección: {editedData.adress}</h4>
          </DataUser>
          <EditButton>
            <button onClick={handleEditClick}>Editar</button>
          </EditButton>
        </Datos>
      )}
    </ContainerDatos>
  );
};

export default DatosPersonales;
