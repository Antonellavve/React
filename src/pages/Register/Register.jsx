import React from 'react';
import { Formik } from 'formik';
import { useLocation } from 'react-router-dom';
import {registerValidation} from "../../formik/Validation";
import {registerInitialValues} from "../../formik/Values"
import useRedirect from '../../hooks/useRedirect';
import Input from '../../components/UI/Input/Input';
import Submit from '../../components/UI/Submit/Submit';
import { useDispatch } from 'react-redux';
import { createUser } from '../../axios/user';
import { setCurrentUser } from '../../Redux/User/userSlice';
import {RegisterContainerStyled, Form, LoginEmailStyled} from "./RegisterStyles"

const Register = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  useRedirect('/');

  return (
    <RegisterContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidation}
        onSubmit={async (values, actions) => {
          const user = await createUser(
            values.name,
            values.email,
            values.password
          );
          actions.resetForm();
          if (user) {
            dispatch(setCurrentUser({
                ...user.usuario,
                token: user.token,
              })
            );
          }
        }}
      >
        <Form>
          <Input name='name' type='text' placeholder='Nombre' />

          <Input name='email' type='text' placeholder='Email' />

          <Input name='password' type='password' placeholder='Password' />

          <LoginEmailStyled to='/login'>
            <p>¿Ya tienes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit>Registrarte</Submit>
        </Form>
      </Formik>
    </RegisterContainerStyled>
  );
};

export default Register;
