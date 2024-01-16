import React, { useState, useEffect } from 'react';
import { CardsWrapper, CardsTitle } from './CardsStyles';
import CardDestacados from './CardDestacados';
import axios from 'axios'; // Asegúrate de tener Axios instalado
import { BASE_URL } from '../../utils/limitProducts';

const Card = () => {
  const [destacados, setDestacados] = useState([]);

  useEffect(() => {
    const fetchDestacados = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/destacados`); // Reemplaza con la URL correcta
        setDestacados(response.data.destacados);
      } catch (error) {
        console.error('Error al obtener productos destacados desde el servidor:', error);
      }
    };

    fetchDestacados();
  }, []); // El segundo parámetro [] significa que este efecto se ejecuta solo una vez al montar el componente

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
