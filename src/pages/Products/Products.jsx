import React, { useState, useEffect } from 'react';
import { ProductsContainer, Card, Title } from './ProductsStyled';
import { productsList } from '../../data/products';
import Button from '../../components/UI/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { LIMITE_INICIAL } from '../../utils/limitProducts';
import { ButtonContainer } from "../../components/UI/Button/ButtonStyles";
import { addToCart } from '../../Redux/Cart/cartSlice';
import { formatPrice } from "../../utils/formatPrice";

const Products = () => {
    const [limit, setLimit] = useState(LIMITE_INICIAL);
    const dispatch = useDispatch();

    const { selectedCategory } = useSelector((state) => state.categories);
    let products = useSelector((state) => state.products.products);
    const totalProducts = useSelector((state) => state.products.totalProducts);

    if (selectedCategory) {
        products = products[selectedCategory];
    }

    useEffect(() => {
        setLimit(LIMITE_INICIAL);
    }, [selectedCategory]);

    const handleShowMore = () => {
        // Aumentar el límite en LIMITE_INICIAL cuando se hace clic en "Ver más"
        setLimit((prevLimit) => prevLimit + LIMITE_INICIAL);
    };

    const handleShowLess = () => {
        // Disminuir el límite en LIMITE_INICIAL cuando se hace clic en "Ver menos"
        setLimit((prevLimit) => prevLimit - LIMITE_INICIAL);
    };

    const handleAddToCart = (product) => {
        // Agregar el producto al carrito utilizando la acción addToCart de Redux
        dispatch(addToCart(product));
    };

    return (
        <>
            <Title>
                <h2>Nuestros Productos</h2>
            </Title>
            <ProductsContainer>
                {productsList?.slice(0, limit).map((product) => {
                    const { id, title, img, price } = product;
                    return (
                        <Card key={id}>
                            <img src={img} alt={title} />
                            <h2>{title}</h2>
                            <span>{formatPrice(price)}</span>
                            <Button onClick={() => handleAddToCart({ id, title, img, price })}>
                                Comprar
                            </Button>
                        </Card>
                    );
                })}
            </ProductsContainer>
            {!selectedCategory && (
                <ButtonContainer>
                    <Button
                        onClick={handleShowLess}
                        secondary='true'
                        disabled={limit <= LIMITE_INICIAL}
                    >
                        <span>Ver menos</span>
                    </Button>
                    <Button
                        onClick={handleShowMore}
                        disabled={limit >= totalProducts}
                    >
                        Ver más
                    </Button>
                </ButtonContainer>
            )}
        </>
    );
};

export default Products;
