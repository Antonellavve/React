import React, { useState } from 'react';
import Button from '../Button/Button';
import { CardsWrapper, CardsContainer, CardProducts } from './CardsStyles'
import {TbPlayerTrackPrev} from 'react-icons/tb';
import {TbPlayerTrackNext} from 'react-icons/tb';

const Carousel = ({ images, groupSize }) => {
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

// Función para avanzar al siguiente grupo de imágenes
const nextGroup = () => {
    setCurrentGroupIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
};

// Función para retroceder al grupo de imágenes anterior
const prevGroup = () => {
    setCurrentGroupIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
};

// Obtener el grupo actual de imágenes
const currentGroup = images[currentGroupIndex];

return (
    <CardsWrapper> {/* Utiliza el componente de estilo CardsWrapper */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <CardsContainer> {/* Utiliza el componente de estilo CardsContainer */}
        {currentGroup.map((image, index) => (
            <CardProducts key={index}> {/* Utiliza el componente de estilo CardProducts */}
            <img
                src={image.img}
                alt={image.title}
            />
            <h3>{image.title}</h3>
            <span>${image.price}</span>
            <Button>Agregar</Button>
            </CardProducts>
        ))}
        </CardsContainer>
        <div style={{display: 'flex', marginTop: '10px', justifyContent: 'space-between', width: '280px'}}>
            <TbPlayerTrackPrev onClick={prevGroup} style={{ color: '#bfff00', width: '30px', fontSize: '30px'}} />
            <TbPlayerTrackNext onClick={nextGroup} style={{ color: '#bfff00', width: '30px', fontSize: '30px'}} />
        </div>
    </div>
    </CardsWrapper>
);
};

export default Carousel;
