import React from 'react';
import Logo from "../../assets/Logo.png";
import { LinksContainer, MenuStyled, NavLinkStyled, NavbarContainer } from './NavbarStyles';
import {useContext} from "react"
import {Contexto} from './MenuContext';

import { FaRegUser } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
    const {state, dispatch} = useContext(Contexto);

    return (
    <NavbarContainer>
        <div>
        <a href="/#">
            <img src={Logo} alt="Logo" width={110} height={90} />
        </a>
        </div>
        <LinksContainer className={state.isMenuOpen ? "open" : ""}>
            <NavLinkStyled to='/'>Home</NavLinkStyled>
            <NavLinkStyled to='/products'>Productos</NavLinkStyled>
            <NavLinkStyled to='/contact'>Contacto</NavLinkStyled>
            <NavLinkStyled to='/aboutUs'>Sobre Nosotros</NavLinkStyled>
            <FaRegUser size={20} />
        </LinksContainer>
        <MenuStyled onClick={() => dispatch({ type: "openMenu" })}>
            <BiMenuAltRight />
        </MenuStyled>
    </NavbarContainer>
);
};

export default Navbar;
