import React from 'react';
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

const Login = () => {
  const dispatch = useDispatch();

  useRedirect('/heroCheck');

  return (
    <LoginContainer>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={loginInitialValues}  
        validationSchema={loginValidation}  
        onSubmit={async (values) => {
          const user = await loginUser(
            values.email,  
            values.password
          );
          if (user) {
            dispatch(setCurrentUser({
              ...user.usuario,
              token: user.token
            }));
          }
        }}
      >
        <Form>
          <Input name={"email"} type={"text"} placeholder={"Usuario"}/>
          <Input name={"password"} type={"password"} placeholder={"Contraseña"}/>
          
          <Link to={"/register"}>
            <LoginEmail>¿No tienes usuario? Regístrate</LoginEmail>
          </Link>
          
          <Submit >Ingresar</Submit>
        </Form>
      </Formik>
    </LoginContainer>
  );
};

export default Login;
