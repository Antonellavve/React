import React from 'react'
import {ProductsContainer, Card, Title} from "./ProductsStyled"
import { productsList } from '../../data/products';
import Button from "../../components/Button/Button";

const Products = () => {
    return (
        <>
        <Title>
            <h2>Nustros Productos</h2>
        </Title>
            <ProductsContainer> 
            {
                productsList?.map((products) => {
                    const {id, title, img, price} = products;
                    return <Card key={id}>
                        <img src={img} alt={title}/>
                        <h2>{title}</h2>
                        <span>${price}</span>
                        <Button>Agregar</Button>
                    </Card>
                })
            }
            </ProductsContainer>
        </>
    );
}

export default Products;
