import React, {useEffect} from 'react'
import { LayoutWrapper, ContentContainerStyled } from './LayoutStyles'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router-dom';

const Layout = ({children}) => {
    //para que cuando cambie de ruta no me mantenga en una
    //posicion intermedia sino que me suba a la parte superior
    
    const { pathname } = useLocation(); //cada vez que cambie el 
    //pathname con el useLocation (lo de url)
    //genere un useEffect, que agarra el objete window y scrollee al 0,0
    //(HACIA ARRIBA)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <LayoutWrapper>
            <Navbar/>
            <ContentContainerStyled>
                {children}
            </ContentContainerStyled>
            <Footer/>
        </LayoutWrapper>
    );
}

export default Layout;
