import React from 'react'
import { LinksContainer, MenuStyled, NavbarContainer } from './NavbarStyles'

import {FaRegUser} from "react-icons/fa"
import {BiMenuAltRight} from "react-icons/bi"

const Navbar = () => {
return (
    <NavbarContainer>
        <div>
            <a href="/#">
                <img src="./src/assets/Logo.png" alt="Logo" width={110} height={90}/>
            </a>
        </div>
        <LinksContainer>
            <a href="#">HOME</a>
            <a href="#">CATEGORIAS</a>
            <a href="#">SALE</a>
            <FaRegUser/>

                <MenuStyled>
                    <BiMenuAltRight />
                </MenuStyled>
        </LinksContainer>
    </NavbarContainer>
)
}

export default Navbar
