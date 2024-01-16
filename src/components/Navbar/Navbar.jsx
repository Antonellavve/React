import React, { useContext, useState } from 'react';
import Logo from "../../assets/Logo.png";
import { ContainerNavbar, LinksContainer, MenuStyled, NavLinkStyled, NavbarContainer, CartAndUser } from './NavbarStyles';
import { Contexto } from './MenuContext';
import { useSelector } from 'react-redux'; 
import { clearCurrentUser } from '../../Redux/User/userSlice';

import { BiMenuAltRight } from "react-icons/bi";
import ModalCart from './ModalCart/ModalCart';
import CartIcon from './CartIcon';
import UserIcon from './UserIcon';

const Navbar = () => {
    const { state, dispatch } = useContext(Contexto);
    const currentUser = useSelector((state) => state.user.currentUser);
    // const handleLogout = () => {
    //     dispatch(clearCurrentUser());
    //     sessionStorage.removeItem('token');

    // };
    return (
        <NavbarContainer>
            <div>
                <a href="/#">
                    <img src={Logo} alt="Logo" width={110} height={90} />
                </a>
            </div>
            <ContainerNavbar>
                
                <LinksContainer className={state.isMenuOpen ? "open" : ""}>
                    <NavLinkStyled to='/'>Home</NavLinkStyled>
                    <NavLinkStyled to='/products'>Productos</NavLinkStyled>
                    <NavLinkStyled to='/contact'>Contacto</NavLinkStyled>
                    <NavLinkStyled to='/aboutUs'>Nosotros</NavLinkStyled>
                    <NavLinkStyled to='/heroCheck'>Mi cuenta</NavLinkStyled>

                </LinksContainer>
                
                <CartAndUser>
                    <CartIcon />
                    <ModalCart />
                    <UserIcon />
                </CartAndUser>
                
                <MenuStyled onClick={() => dispatch({ type: "openMenu" })}>
                    <BiMenuAltRight />
                </MenuStyled>
                
            </ContainerNavbar>
            
            
        </NavbarContainer>
    );
};

export default Navbar;
