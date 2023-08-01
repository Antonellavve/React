import React, { useState } from 'react';
import Logo from "../../assets/Logo.png";
import { LinksContainer, MenuStyled, NavbarContainer } from './NavbarStyles';
import { FaRegUser } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
};

return (
    <NavbarContainer>
        <div>
            <a href="/#">
            <img src={Logo} alt="Logo" width={110} height={90} />
            </a>
        </div>
        <LinksContainer isOpen={menuOpen}>
            <a href="#">HOME</a>
            <a href="#">CATEGORIAS</a>
            <a href="#">SALE</a>
            <FaRegUser />
        </LinksContainer>
        <MenuStyled onClick={handleMenuClick}>
            <BiMenuAltRight />
        </MenuStyled>
    </NavbarContainer>
);
};

export default Navbar;
