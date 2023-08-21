import React from 'react'
import {ContainerContact, ContainerForm, ContactUs} from './ContactStyles'
import Button from '../../components/Button/Button'

const Contact = () => {
    const StyleText={
        alignItems: 'center',
        textAlign: 'center',
        justifyConten: 'center',
        fontSize: '25px',
    }
return (
    <>
    <h2 style={StyleText}>Contactate con nosotros</h2>
    <p style={StyleText}>Ponete en contacto con nosotros y recibí asesoramiento</p>
    <ContainerContact>
        <ContactUs>
            <h4>Chatea con el equipo de Akika</h4>
            <p>Escribinos por mensaje directo a algunas de nuestras paginas o por via Whatsapp de 9 a 18 hs. y recibi un asesoriamiento mas personalizado</p>
            <a href="#">Contactarme por Whatsapp</a>
        </ContactUs>
        <ContainerForm>
            <h4>O completa el siguiente formulario y un asesor se pondra en contacto</h4>
            <form>
                <label htmlFor="nombre">Nombre completo</label>
                <input type="text" placeholder="Escribe tu nombre" id='nombre' />
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id='email' placeholder='Escribe tu correo'/>
                <label htmlFor="comentario">Comentarios</label>
                <textarea rows="5" cols="45" placeholder='Escribe tu comentario'></textarea>
            </form>
            <Button>Enviar</Button>
        </ContainerForm>
    </ContainerContact>
    </>
)
}

export default Contact
