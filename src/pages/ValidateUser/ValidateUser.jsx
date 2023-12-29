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
    if (!currentUser) {
      navigate('/login');
    } else if (currentUser.verified) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <ContainerValidate>
      <h1>Validar cuenta</h1>
      <Formik
        initialValues={validateInitialValues}
        validationSchema={validateValidation}
        onSubmit={async values => {
          await verifyUser(currentUser.email, values.code); 
          dispatch(setVerified());
          navigate('/');
        }}
      >
        <Form>
          <LoginInput name='code' type='code' placeholder='code' />
          <Submit>Validar</Submit>
        </Form>
      </Formik>
    </ContainerValidate>
  );
};

export default ValidateUser;