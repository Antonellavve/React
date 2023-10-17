import React from 'react'
import { CardProducts } from './CardsStyles'
import Button from "../UI/Button/Button"
import {useDispatch} from "react-redux"
import {addToCart} from "../../Redux/Cart/cartSlice"

const CardDestacados = ({img, title, price, id}) => {
    const dispatch = useDispatch();

    return (
        <CardProducts>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <span>${price}</span>
            <Button onClick={() => dispatch(addToCart({title, img, price, id}))}>
                Comprar
            </Button> 
        </CardProducts>
        
    )
}

export default CardDestacados
