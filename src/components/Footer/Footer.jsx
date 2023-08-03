import React from 'react'
import { FooterContainer, FooterNewsletter, Icons, HoverableIcon } from './FooterStyles'
import {BsInstagram, BsFacebook, BsTiktok} from "react-icons/bs"


const Footer = () => {

    return (
        <FooterContainer>
            <FooterNewsletter>
                <p>Suscribite a nuestro <span>Newsletter</span> y recibi un <span>10% OFF</span></p>
                <form name="suscribir">
                    <input type="email" placeholder='Ingresá tu e-mail' />
                    <button>Suscribirme</button>
                </form>
                </FooterNewsletter>
                <Icons>
                    <h3>Seguinos en nuestras redes</h3>
                    <HoverableIcon>
                        <BsInstagram fontSize={30}/>
                    </HoverableIcon>
                    <HoverableIcon>
                        <BsFacebook fontSize={30} />
                    </HoverableIcon>
                    <HoverableIcon>
                        <BsTiktok fontSize={30}/>
                    </HoverableIcon>
                </Icons>
                <p>Copyright © <span>2023 AKIKA</span> Todos los derechos reservados.</p> 
        </FooterContainer>
    )    
}

export default Footer
