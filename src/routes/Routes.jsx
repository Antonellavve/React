import React from 'react';
import { BrowserRouter, Routes as ReactDomRoutes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/AboutUs/AboutUs';
import Contact from '../pages/Contact/Contact';
import Products from '../pages/Products/Products';
import Checkout from '../pages/Checkout/Checkout';
import PedidoRealizado from '../pages/PedidoRealizado/PedidoRealizado';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/login';
import Hero from '../pages/HeroCheck/HeroCheck';
import ValidateUser from '../pages/ValidateUser/ValidateUser';
import DatosPersonales from '../pages/DatosPersonales/DatosPersonales';

function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/pedidoRealizado' element={<PedidoRealizado />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/heroCheck' element={<Hero />} />
          <Route path='/validate' element={<ValidateUser />} />
          <Route path="/datosPersonales" element={<DatosPersonales />} />
          {/* La ruta 404 debe ir al final */}
          <Route path='*' element={<h2>ERROR!</h2>} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
}

export default Routes;
