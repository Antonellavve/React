import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import Tabs from '../../components/UI/Tab/Tab'; 
import DatosPersonales from '../../components/DatosPersonales/DatosPersonales'; // Ajusta la ruta según tu estructura
import { HeroContainer} from './HeroCheckStyles';
import LogoutContent from '../../components/Logout/Logout';

const Hero = () => {
  const { currentUser } = useSelector(state => state.user);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('welcome');
  const [showUserDetails, setShowUserDetails] = useState(false);

  const handleTabChange = tabId => {
    setActiveTab(tabId);
    setShowUserDetails(false); // Para cerrar los detalles del usuario al cambiar de pestaña
  };


  return (
    <HeroContainer>
      {currentUser?.verified ? (
        <div>
          
              <h1 className='title'>BIENVENIDO {`${currentUser?.nombre}`}</h1>
           
          <Tabs
            
            tabs={[
              { id: 'account', label: 'MI CUENTA' },
              { id: 'order', label: 'MI PEDIDO' },
              { id: 'logout', label: 'CERRAR SESIÓN' },
            ]}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
          {activeTab === 'order' && (
                navigate("/checkout")
          )}
          {activeTab === 'account' && (
            <div>
              <DatosPersonales />
            </div>
          )}
          {activeTab === 'logout' && (
            <div>
              <LogoutContent/>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h1>HOLA</h1>
            <Button
              onClick={() => {
                navigate('/validate');
              }}
              radius='10'
            >
              Validar usuario
            </Button>
        </div>
      )}
    </HeroContainer>
  );
};

export default Hero;