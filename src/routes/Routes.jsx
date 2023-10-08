import React from 'react'
import { 
    BrowserRouter,
    Routes as ReactDomRoutes,
    Route
} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'
import Contact from '../pages/Contact/Contact'
import Products from '../pages/Products/Products';
import Checkout from '../pages/Checkout/Checkout';
import PedidoRealizado from '../pages/PedidoRealizado/PedidoRealizado';

function Routes() {
return (
    <BrowserRouter>
        <Layout>
            <ReactDomRoutes>
                <Route path='/' element= {<Home/>}/>
                <Route path='aboutus' element={<AboutUs/>} />
                <Route path='contact' element={<Contact/>} />
                <Route path='products' element={<Products/>}/>
                <Route path='checkout' element={<Checkout/>}/>
                <Route path='pedidoRealizado' element={<PedidoRealizado/>}/>
                <Route path='*' element={<h2>ERROR!</h2>}/>
            </ReactDomRoutes>
        </Layout>
        
    </BrowserRouter>
)
}

export default Routes