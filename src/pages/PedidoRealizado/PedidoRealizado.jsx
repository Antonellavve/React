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
        <TextStyled>
            <ContainerInfoStyled>
            <TitleStyled>Muchas gracias por tu compra</TitleStyled>
            <h2>Su pedido ha sido confirmado con éxito!</h2>
            <p>Estamos procesando tu pedido, pronto nos estaremos comuninando para enviarte el número de 
                seguimiento con el que podrás ver que día estará llegando tu compra a tu domicilio</p></ContainerInfoStyled>
            <Button onClick={() => navigate('/')}>Volver</Button>
        </TextStyled>
    );
};

export default PedidoRealizado;