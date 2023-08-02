import React from 'react'
import { CardProducts } from './CardsStyles'
import Button from '../Button/Button'

const Card = ({img, title, price}) => {
    return (
        <CardProducts>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <span>${price}</span>
            <Button>
                Agregar
            </Button> 
        </CardProducts>
        
    )
}

export default Card
