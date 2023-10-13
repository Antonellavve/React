import React from 'react'
import {AboutUsContainer, TextAboutUs, Contact} from './AboutUsStyles';
import {AiFillPhone, AiOutlineMail} from "react-icons/ai"
import {BsFillPinMapFill} from "react-icons/bs"

const AboutUs = () => {
return (
    <AboutUsContainer>
        <h1>Nuestra Historia</h1>
        <TextAboutUs>
            <h3>Bienvenidos a nuestro mundo</h3> 
                <p>Akika se crea en el 2020, con el comienzo de una pandemia que iba a dejar una marca en todos.
                Somos un grupo de tres amigas, que cada una en ese momento tenia su profesion, y comenzamos con este 
                proyecto impulsadas por un deseo personal de crecer, nunca pensamos que ese crecimiento llegaria tan rapido.
                A partir de los deseos, comenzamos vendiendo nuestros productos via online desde el instagram de la marca, y 
                ahora tenemos mas de 1000 pedidos diarios. Actualmente estamos abriendo nuestro primer local en la provincia de 
                San Luis, y con todas las ganas de abrir mas locales en el resto del país. Actualmente dejamos nuestras profesiones
                para dedicarnos enteramente en este proyecto, apostando por ese deseo personal.

                Akika esta pensado para mujeres atrevidas, que se animan a darlo todo, que quieren mostrar lo mejor de si. Nos inspiramos 
                en prendas de la actualidad con un toque vintage, envuelto en un arte contemporáneo y con la moda innovadora. Creación, orgullo y
                resiliencia, a nosotras nos representa, y queremos llevar esa ideologia a todas las mujeres del mundo.

                Hoy Akika continua prosperando en la persecución de la vida mas alla de las reglas sociales. Los visionarios del
                pasado pavimentaron el camino para una nueva generación que continua la tradición de la vieja guardia, llevando a 
                la juventud los valores de las marcas fundadoras. 
                
                AKIKA esta acá para quedarse, y continuaremos expresándonos como queremos. 
                Tirándonos de cabeza, libre de limitaciones e inspirando a los que vendrán después.
                Y vos... ¿queres ser parte?
            </p>
            <Contact>
                <h4>Datos de Contacto</h4>
            <ul>
                <li><AiFillPhone/> +5492664281151</li>
                <li><AiOutlineMail/> info@akika.com.ar</li>
                <li><BsFillPinMapFill/>  San Martin n° 853 - 5700- Provincia de San Luis</li>
            </ul>
            </Contact>
            
            </TextAboutUs>
    </AboutUsContainer>
)
}

export default AboutUs
