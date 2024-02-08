import React from 'react';
import { CardsWrapper, CardsTitle } from './CardsStyles';
import { useSelector } from 'react-redux';
import CardDestacados from './CardDestacados'; 

const Card = () => {
  const { destacados } = useSelector((state) => state.destacados);

  return (
    <>
      <CardsTitle>
          <h3>Productos Destacados</h3>
          <a href='/products'>Ver más</a>
        </CardsTitle>
      <CardsWrapper>

      {destacados.map((producto) => (
        <CardDestacados
          key={producto.id} 
          img={producto.img}
          title={producto.title}
          price={producto.price}
        />
      ))}
      </CardsWrapper>
    </>
  );
};

export default Card;