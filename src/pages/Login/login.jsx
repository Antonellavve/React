import React, {useState} from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { loginValidation } from '../../formik/Validation';
import { loginInitialValues } from "../../formik/Values";
import useRedirect from '../../hooks/useRedirect';
import Input from '../../components/UI/Input/Input';
import Submit from '../../components/UI/Submit/Submit';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../Redux/User/userSlice';
import { Form, LoginEmail, LoginContainer } from "./LoginStyles";
import { loginUser } from '../../axios/user';
import Modal from 'react-modal';

const Login = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useRedirect('/heroCheck');

  return (
    <LoginContainer>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={loginInitialValues}  
        validationSchema={loginValidation}  
        onSubmit={async (values) => {
          const userData = await loginUser(
            values.email,  
            values.password
          );
          if (userData) {
            dispatch(setCurrentUser({
              ...userData.user,
              token: userData.token
            }));
          } else {
            setShowModal(true); // Mostrar el modal si no se encuentra el correo
          }
        }}
      >
        <Form>
          <Input name='email' type="text" placeholder="Email" />
          <Input name='password' type="password" placeholder="Password" />
          
          <Link to="/register">
            <LoginEmail>¿No tienes cuenta? Regístrate</LoginEmail>
          </Link>
          <p>¿Olvidaste tu contraseña?</p>
          
          <Submit>Ingresar</Submit>
        </Form>
      </Formik>

      {/* Modal para mostrar cuando no se encuentra el correo */}
      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.803)',
          zIndex: 1000,
        },
        content: {
          width: '60%',
          height: '10%',
          margin: 'auto',
          padding: '40px',
          zIndex: 1001,
          borderRadius: '10px',
          color: 'black',
          textAlign: 'center',
        },
      }}>
        <h2>No se encontró el correo electrónico.</h2>
        <Link to={"/register"} onClick={() => setShowModal(false)}
        style={{color: 'black',
        textAlign: 'center', 
        textDecoration: 'underline', cursor: 'pointer' }}
        >Registrarme</Link>
      </Modal>
    </LoginContainer>
  );
};

export default Login;
