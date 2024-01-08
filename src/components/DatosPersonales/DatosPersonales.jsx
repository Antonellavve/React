import React, { useState } from 'react';
import { ContainerDatos, DataUser, EditButton, EditableField } from './DatosPersonalesStyles';
import { useSelector, useDispatch  } from 'react-redux';
import { updateUserData } from '../../Redux/User/userSlice';

const DatosPersonales = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name: currentUser?.name || '',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateUserData(editedData));
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditedData({
      name: currentUser?.name || '',
      email: currentUser?.email || '',
    });

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
        <div>
          <EditableField>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={editedData.name}
              onChange={handleInputChange}
            />
          </EditableField>

          <button onClick={handleSave}>Guardar</button>
          <button onClick={handleCancelEdit}>Cancelar</button>
        </div>
      ) : (
        <div>
          <p>Modifica tus datos personales a continuación para que tu cuenta esté actualizada.</p>
          <h2>Detalles</h2>
          <DataUser>
            <h4>Nombre: {currentUser?.name}</h4>
            <h4>Correo Electrónico: {currentUser?.email}</h4>
          </DataUser>
          <EditButton>
            <button onClick={handleEditClick}>Editar</button>
          </EditButton>
        </div>
      )}
    </ContainerDatos>
  );
};

export default DatosPersonales;
