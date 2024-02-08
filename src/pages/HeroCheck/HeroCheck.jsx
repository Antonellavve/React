import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import Tabs from '../../components/UI/Tab/Tabs'; 
import DatosPersonales from '../../components/DatosPersonales/DatosPersonales'; 
import {  HeroCheckStyled, HeroContainer, HeroValidate } from './HeroCheckStyles';
import LogoutContent from '../../components/Logout/Logout';
import Questions from '../../components/Questions/Questions';
import { motion } from 'framer-motion';
import { ADMIN } from '../../utils/limitProducts';

const Hero = () => {
  const { currentUser } = useSelector(state => state.user);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('welcome');
  const [showUserDetails, setShowUserDetails] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      // si no hay usuario me envia a loguear
      navigate('/login');
    }
  }, [currentUser, navigate]);

  const handleTabChange = tabId => {
    setActiveTab(tabId);
    setShowUserDetails(false); // Para cerrar los detalles del usuario al cambiar de pestaña
  };


  return (
    <HeroCheckStyled>
      {currentUser?.verified ? (
        <HeroContainer>
              <h1 className='title'>BIENVENIDO {`${currentUser?.name}`}</h1>
          <Tabs
            
            tabs={[
              { id: 'account', label: 'MI CUENTA' },
              { id: 'order', label: 'MIS ORDENES' },
              { id: 'questions', label: 'PREGUNTAS FRECUENTES' },
              { id: 'logout', label: 'CERRAR SESIÓN' },
            ]}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
          
            {activeTab === 'order' && (
                navigate("/orders")
            )}
            {activeTab === 'account' && (
              <div>
                <DatosPersonales />
              </div>
            )}
            {activeTab === 'questions' && (
              <div>
                <Questions />
              </div>
            )}
            {activeTab === 'logout' && (
              <div>
                <LogoutContent/>
              </div>
            )}
            <br />
            <motion.div whileTap ={{scale:0.97}}>
              {currentUser?.rolAdmin===ADMIN?(
                <Link to='/productsAdd'>Crear Producto</Link>
              ):(
                <span>No puedes crear productos</span>
              )}
            </motion.div>
            <br />
            <br />
          
        </HeroContainer>
      ) : (
        <HeroValidate>
          <h1>BIENVENIDO</h1>
          <p>Ingresa el código que te enviamos a tu correo electrónico</p>
            <br />
            <Button
              onClick={() => {
                navigate('/validate');
              }}
              radius='10'
            >
              Validar usuario
            </Button>
        </HeroValidate>
      )}
    </HeroCheckStyled>
  );
};

export default Hero;