import React from 'react';
import { Formik } from 'formik';
import {registerValidation} from "../../formik/Validation";
import {registerInitialValues} from "../../formik/Values"
import useRedirect from '../../hooks/useRedirect';
import Input from '../../components/UI/Input/Input';
import Submit from '../../components/UI/Submit/Submit';
import { useDispatch } from 'react-redux';
import { createUser } from '../../axios/user';
import { setCurrentUser } from '../../Redux/User/userSlice';
import {ContainerOfRegister, Form, LoginEmail} from "./RegisterStyles"

const Register = () => {
  const dispatch = useDispatch();
  useRedirect('/heroCheck');

  return (
    <ContainerOfRegister>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidation}
        onSubmit={async (values, actions) => {
          const userData = await createUser(
            values.name,
            values.email,
            values.password
          );
          actions.resetForm();
          if (userData) {
            dispatch(setCurrentUser({
                ...userData.user,
                token: userData.token,
              })
            );
          }
        }}
      >
        <Form>
          <Input name='name' type='text' placeholder='Nombre' />

          <Input name='email' type='text' placeholder='Email' />

          <Input name='password' type='password' placeholder='Password' />

          <LoginEmail to='/login'>
            <p>¿Ya tienes cuenta? Inicia sesión</p>
          </LoginEmail>
          <Submit>Registrarte</Submit>
        </Form>
      </Formik>
    </ContainerOfRegister>
  );
};

export default Register;
