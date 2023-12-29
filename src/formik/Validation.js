import * as Yup from 'yup';

// Expresión regular para validar el formato de correo electrónico
export const regEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const checkoutValidation = Yup.object({
  name: Yup.string().required('Campo Requerido'),
  cellphone: Yup.string().required('Campo Requerido'),
  location: Yup.string().required('Campo Requerido'),
  address: Yup.string().required('Campo Requerido'),
});

export const registerValidation = Yup.object({
  name: Yup.string().required('Campo Requerido'),
  email: Yup.string()
    .matches(regEmail, 'Correo electrónico no válido') // Agrega la validación del correo electrónico
    .required('Campo Requerido'),
  password: Yup.string()
    .transform(value => value.trim()) // Elimina espacios en blanco al comienzo y al final
    .min(6, 'La contraseña no puede contener espacios en blanco y debe ser de 6 caracteres minimo')
    .test(
      'no-spaces',
      'La contraseña no puede contener espacios en blanco',
  value => !/\s/.test(value) // Verifica si hay espacios en blanco
    )
    .required('Campo Requerido'),  
});

export const loginValidation = Yup.object({
  email: Yup.string().email('Correo electrónico inválido').required('Campo Requerido'),
  password: Yup.string()
  .transform(value => value.trim()) // Elimina espacios en blanco al comienzo y al final
  .min(6, 'La contraseña no puede contener espacios en blanco y debe ser de 6 caracteres minimo')
  .test(
    'no-spaces',
    'La contraseña no puede contener espacios en blanco',
  value => !/\s/.test(value) // Verifica si hay espacios en blanco
  )
  .required('Campo Requerido'),
});

export const validateValidation = Yup.object({
  code: Yup.string()
    .min(6, 'Mínimo de caracteres: 6')
    .max(6, 'Máximo de caracteres: 6')
    .required('Campo Requerido'),
});
