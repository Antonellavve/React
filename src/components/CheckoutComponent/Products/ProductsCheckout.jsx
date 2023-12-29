import { formatPrice } from "../../../utils/formatPrice";

import CardProductCheckout from "../../CardProductCheck/CardProductCheckout";
import Submit from "../../UI/Submit/Submit";
import {
    CardsWrapper,
    EnvioStyled,
    HrStyled,
    PriceContainerStyled,
    PriceTotalStyled,
    ProductosContainerStyled,
    SubtotalStyled,
    TotalStyled,
    } from "./ProductsCheckoutStyles";

    const ProductsCheckout = ({cartItems, shippingCost, price}) => {
    return (
        <ProductosContainerStyled>
            <h1>Tu pedido</h1>
            <CardsWrapper>

                {
                cartItems.length ? (
                    cartItems.map((item) => {
                    return <CardProductCheckout key={item.id} {...item} />
                    })
                ) : (
                    <p>No hay productos en el carrito</p>
                )
                }
            </CardsWrapper>
            <PriceContainerStyled>
                <SubtotalStyled>
                    <p>Subtotal</p>
                    <span>{formatPrice(price)}</span>
                </SubtotalStyled>
                <EnvioStyled>
                    <p>Envío:</p>
                    <span>{formatPrice(shippingCost)}</span>
                </EnvioStyled>
                <HrStyled />
                <TotalStyled>
                    <p>Total:</p>
                    <PriceTotalStyled>{formatPrice(price + shippingCost)}</PriceTotalStyled>
                </TotalStyled>
                </PriceContainerStyled>
                
        </ProductosContainerStyled>
    );
};

export default ProductsCheckout;