import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../../components/UI/Input/Input';
import Submit from '../../components/UI/Submit/Submit';
import { Form, ContainerValidate } from './ValidateUserStyles';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../../axios/user';
import { validateInitialValues } from '../../formik/Values';
import { validateValidation } from '../../formik/Validation'
import { setVerified, setCurrentUser } from '../../Redux/User/userSlice';

const ValidateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser); 

  useEffect(() => {
    const handleVerification = async () => {
      try {
        if (currentUser) {
          if (currentUser.verified) {
            navigate('/heroCheck');
          }
        }
      } catch (error) {
        console.error('Error en la verificación', error);
      }
    };
  }, [currentUser, navigate]);

  return (
    <ContainerValidate>
      <h1>Validar cuenta</h1>
      <p>Ingresa el codigo de validación que te enviamos a tu correo electrónico</p>
      <Formik
        initialValues={validateInitialValues}
        validationSchema={validateValidation}
        onSubmit={async values => {
          try {
            await verifyUser(currentUser.email, values.code); 
            dispatch(setVerified());
            navigate('/heroCheck');
          } catch (error) {
            console.error('Error during user verification:', error);
          }
        }}
      >
        <Form>
          <LoginInput name='code' type='code' placeholder='Código de validación' />
          <Submit>Validar Usuario</Submit>
        </Form>
      </Formik>
    </ContainerValidate>
  );
};

export default ValidateUser;
