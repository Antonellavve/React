import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import {
  HeroContainer,
  FormHeroCheck,
} from './HeroCheckStyles';
import { NavLinkStyled } from '../../components/Navbar/NavbarStyles';

const Hero = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const navigate = useNavigate();
  const [showUserDetails, setShowUserDetails] = useState(false);

  const toggleUserDetails = () => setShowUserDetails(!showUserDetails);

  return (
    <HeroContainer>
      {currentUser?.verified ? (
        <div>
          <h1 className='title'>Bienvenido {currentUser.username}</h1>
          <Button
            onClick={() => {
              navigate('/checkout');
            }}
            radius='10'
          >
            PEDIDOS
          </Button>
          <Button
            onClick={() => {
              navigate('/checkout');
            }}
            radius='10'
          >
            DESCUENTOS
          </Button>
          <Button
            onClick={toggleUserDetails}
            radius='10'
          >
            MI CUENTA
          </Button>
          {showUserDetails && (
            <NavLinkStyled to='/datosPersonales'>Datos Personales</NavLinkStyled>
          )}
        </div>
      ) : (
        <div>
          <h1 className='title'>HOLA </h1>
          <FormHeroCheck>
            <Button
              onClick={() => {
                navigate('/validate');
              }}
              radius='10'
            >
              Validar usuario
            </Button>
          </FormHeroCheck>
        </div>
      )}
    </HeroContainer>
  );
};

export default Hero;
