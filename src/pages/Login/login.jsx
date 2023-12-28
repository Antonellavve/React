import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import  {loginValidation }  from '../../formik/Validation';
import { loginInitialValues} from "../../formik/Values"
import useRedirect from '../../hooks/useRedirect';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../axios/user';
import { setCurrentUser } from '../../Redux/User/userSlice';
import { Form, LoginEmailStyled } from "./LoginStyles";

const Login = () => {
  const dispatch = useDispatch();

  useRedirect('/');

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <Formik
        Values={loginInitialValues}
        validation={loginValidation}
        onSubmit={(values) => {
          dispatch(setCurrentUser(values.user))
        }}
      >
        <Form>
						<Input
							name={"user"}
							type={"text"}
							placeholder={"Usuario"}
						/>
						<Input
							name={"password"}
							type={"password"}
							placeholder={"Contraseña"}
						/>
						<Link to={"/register"}>
							<LoginEmailStyled>¿No tienes usuario? Regístrate</LoginEmailStyled>
						</Link>
						<Button>Ingresar</Button>
					</Form>
      </Formik>
    </div>
  );
};

export default Login;
