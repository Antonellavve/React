import React from 'react';
import Carousel from './Carousel';
import { cards } from '../../data/cards';
import Card from './Card';

const Cards = () => {
  const groupSize = 5;
  const groupedCards = [];
  for (let i = 0; i < cards.length; i += groupSize) {
    groupedCards.push(cards.slice(i, i + groupSize));
  }

  return (
    <>
      <h2>Productos Destacados</h2>
    <Carousel images={groupedCards} groupSize={groupSize} />
    </>
  );
};

export default Cards;
