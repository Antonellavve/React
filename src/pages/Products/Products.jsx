import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../Redux/Categories/categoriesSlice';
import { addToCart } from '../../Redux/Cart/cartSlice';
import { formatPrice } from "../../utils/formatPrice";
import {ProductsSection, ContainerSelect, ProductsContainer, Card, Title } from './ProductsStyled';
import {productsList} from "../../data/products" ;
import Submit from "../../components/UI/Submit/Submit";
import { LIMITE_INICIAL } from '../../utils/limitProducts';
import Button from '../../components/UI/Button/Button';

const Products = () => {
    const [limit, setLimit] = useState(LIMITE_INICIAL);
    const dispatch = useDispatch();

    const selectedCategory = useSelector((state) => state.categories.selectedCategory);
    const products = useSelector((state) => state.products.products);
    const totalProducts = useSelector((state) => state.products.totalProducts);

    useEffect(() => {
        setLimit(LIMITE_INICIAL); // Restablecer el límite cuando cambia la categoría seleccionada
    }, [selectedCategory]);

    const filteredProducts = selectedCategory
        ? products[selectedCategory] || []
        : productsList; // Si no se selecciona ninguna categoría, muestra todos los productos

    const handleShowMore = () => {
        // Aumentar el límite cuando se hace clic en "Ver más"
        setLimit((prevLimit) => prevLimit + 5);
    };

    const handleShowLess = () => {
        // Disminuir el límite cuando se hace clic en "Ver menos"
        setLimit((prevLimit) => prevLimit - 5);
    };

    const handleAddToCart = (product) => {
        // Agregar el producto al carrito utilizando la acción addToCart de Redux
        dispatch(addToCart(product));
    };

    const handleCategorySelect = (category) => {
        // Utiliza la acción selectCategory para cambiar la categoría seleccionada en el estado de Redux
        dispatch(selectCategory(category));
    };

    return (
        <ProductsSection>
            <Title>
                <h2>Nuestros Productos</h2>
            </Title>

            <ContainerSelect>
                <button className={`category ${selectedCategory === 'Camperas' ? 'active' : ''}`} onClick={() => handleCategorySelect('Camperas')}>
                    Camperas
                </button>
                <button className={`category ${selectedCategory === 'Pantalones' ? 'active' : ''}`} onClick={() => handleCategorySelect('Pantalones')}>
                    Pantalones
                </button>
                <button className={`category ${selectedCategory === 'Remeras' ? 'active' : ''}`} onClick={() => handleCategorySelect('Remeras')}>
                    Remeras
                </button>
                <button className={`category ${selectedCategory === 'RemeronesYVestidos' ? 'active' : ''}`} onClick={() => handleCategorySelect('RemeronesYVestidos')}>
                    Vestidos
                </button>
                <button className={`category ${selectedCategory === 'Buzos' ? 'active' : ''}`} onClick={() => handleCategorySelect('Buzos')}>
                    Buzos
                </button>
            </ContainerSelect>


            <ProductsContainer>
                {filteredProducts.slice(0, limit).map((product) => {
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
                <div className="button-container">
                    <Submit
                        onClick={handleShowLess}
                        disabled={limit <= LIMITE_INICIAL}
                    >
                        Ver menos
                    </Submit>
                    <Submit
                        onClick={handleShowMore}
                        disabled={limit >= totalProducts}
                    >
                        Ver más
                    </Submit>
                </div>
            )}
        </ProductsSection>
    );
};

export default Products;
