import React from 'react'
import { LayoutWrapper, ContentContainerStyled } from './LayoutStyles'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
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
