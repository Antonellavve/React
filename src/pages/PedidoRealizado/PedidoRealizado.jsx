import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

import {
    ContainerInfoStyled,
    TextStyled,
    TitleStyled,
} from "./PedidoRealizadoStyles";

const PedidoRealizado = () => {
    const navigate = useNavigate();
    return (
        <div>
        <TextStyled>
            {/* <img
            src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648433/coding/NucbaZappi/Assets/Success-illustration_sbucqm.png'
            alt=''
            /> */}
            <ContainerInfoStyled>
            <TitleStyled>Muchas gracias por tu compra</TitleStyled>
            <h2>Su pedido ha sido confirmado con éxito!</h2>
            <p>Estamos procesando tu pedido, pronto nos estaremos comuninando para enviarte el numero de 
                seguimiento con el que podras ver que dia estara llegando tu compra a tu domicilio</p></ContainerInfoStyled>
            <Button onClick={() => navigate('/')}>Volver</Button>
        </TextStyled>
        </div>
    );
};

export default PedidoRealizado;