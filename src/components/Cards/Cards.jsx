import React from 'react'
import { CardProducts, CardsContainer, CardsWrapper } from './CardsStyles'
import { cards } from '../../data/cards'
import Card from './Card'

const Cards = () => {
    return (
    <CardsWrapper>
        <h2>Productos Destacados</h2>
        <CardsContainer>
            {
                cards.map ((clothes) =>{
                    return <Card key={clothes.id} {...clothes}/>
                })
            }
        </CardsContainer>
    </CardsWrapper>
    )
}

export default Cards
