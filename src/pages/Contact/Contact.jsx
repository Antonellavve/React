import React, { useState } from 'react';
import { ContainerContact, ContainerForm, ContactUs, ContactTitle } from './ContactStyles';
import Button from '../../components/UI/Button/Button';
import Submit from '../../components/UI/Submit/Submit';

const Contact = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulación de envío exitoso del formulario
        // Aquí podrías realizar una solicitud HTTP para enviar el formulario

        // Mostrar el mensaje de éxito
        setShowSuccessMessage(true);
        // Reiniciar el formulario u otras acciones necesarias
        // Recargar la página después de 2 segundos
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

    return (
        <>
            <ContactTitle>
                <h1>Contactate con nosotros</h1>
                <h2>Ponete en contacto con nosotros y recibí asesoramiento</h2>
            </ContactTitle>
            
            <ContainerContact>
                <ContactUs>
                    <h4>Chatea con el equipo de Akika</h4>
                    <p>Escribinos por mensaje directo a algunas de nuestras paginas o por via Whatsapp de 9 a 18 hs. y recibi un asesoriamiento mas personalizado</p>
                    <Button>Contactarme por Whatsapp</Button>
                </ContactUs>
                <ContainerForm>
                    <h4>O completa el siguiente formulario y un asesor se pondra en contacto</h4>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" placeholder="Escribe tu nombre" id='nombre' />
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" placeholder="Escribe tu apellido" id='apellido' />
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" id='email' placeholder='Escribe tu correo'/>
                        <label htmlFor="Asunto">Asunto</label>
                        <textarea rows="5" cols="45" placeholder='Escribe tu comentario'></textarea>
                        <Submit type="submit">Enviar</Submit>
                    </form>
                </ContainerForm>
            </ContainerContact>

            {/* Mostrar el mensaje de éxito si showSuccessMessage es verdadero */}
            {showSuccessMessage && (
                <div>
                    <p>Tu mensaje ha sido enviado con éxito!</p>
                </div>
            )}
        </>
    )
}

export default Contact;
