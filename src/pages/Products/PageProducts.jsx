// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Form as FormikForm } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewProduct,

} from '../../Redux/Products/productsSlice';
import Input from '../../components/UI/Input/Input';
import Submit from '../../components/UI/Submit/Submit';
import { ContainerOfProducts, Form } from './ProductsStyled';
import { ProductsInitialValues } from "../../formik/Values";
import { ProductsValidationSchema } from '../../formik/Validation';
import { useNavigate } from 'react-router-dom';
import { ADMIN } from '../../utils/limitProducts';
import {createProduct} from "../../axios/products.js";

const AddProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const navigate = useNavigate();

  useEffect(() => {
    if (products && products.length > 0) {
      navigate('/productsAdd');
    } else {
      const user = JSON.parse(localStorage.getItem('user')); // Adjust this based on how you store user data
      if (user && user.rol !== ADMIN) {
        navigate('/heroCheck');
      }
    }
  }, [products, navigate]);

  return (
    <ContainerOfProducts>
      <h1>Agregar Producto</h1>
      <Formik
        initialValues={ProductsInitialValues}
        validationSchema={ProductsValidationSchema}
        onSubmit={async (values, actions) => {
          const userString = localStorage.getItem('user');
          const userObject = JSON.parse(userString);
          // Obtener el token del usuario
          const token = userObject?.currentUser?.token;
          const productData = await createProduct(
              values.id,
              values.title,
              values.img,
              values.price,
              values.category,
              values.stock
          );
          if (productData) {
            dispatch(addNewProduct(productData));
            navigate('/products'); // Cambiar a la ruta deseada
          }
          actions.resetForm();
        }}
      >
        {/* Formulario renderizado por Formik */}
        <Form>
          <Input name='id' type='text' placeholder='ID' />
          <Input name='title' type='text' placeholder='Título' />
          <Input name='img' type='text' placeholder='URL de la imagen' />
          <Input name='price' type='text' placeholder='Precio' />
          <Input name='category' type='text' placeholder='Categoría' />
          <Input name='stock' type='text' placeholder='Stock' />
          <Submit>Agregar Producto</Submit>
        </Form>
      </Formik>
    </ContainerOfProducts>
  );
};

export default AddProduct;
