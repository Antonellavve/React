import React from 'react';
import { useDispatch } from "react-redux";

import { formatPrice } from '../../utils/formatPrice';

import {
    ProductLeftStyled,
    ProductPriceStyled,
    ProductStyled,
    PriceContainerStyled,
} from './CardResumenStyles';

const CardResumen = ({id, title, quantity, img, price}) => {
    const dispatch = useDispatch();
    return (
        <ProductStyled>
        <ProductLeftStyled key={id}>
            <img
            src={img}
            alt={title}
            />
            <div>
            <h3>{title}</h3>
            </div>
        </ProductLeftStyled>
        <PriceContainerStyled>
            <p>{quantity}U</p>
            <ProductPriceStyled>{formatPrice(price * quantity)}</ProductPriceStyled>
        </PriceContainerStyled>
        </ProductStyled>
    );
};

export default CardResumen;