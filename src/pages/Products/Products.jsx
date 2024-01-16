import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../Redux/Categories/categoriesSlice';
import { addToCart } from '../../Redux/Cart/cartSlice';
import { formatPrice } from "../../utils/formatPrice";
import { ProductsSection, ContainerSelect, ProductsContainer, Card, Title } from './ProductsStyled';
import Submit from "../../components/UI/Submit/Submit";
import Button from '../../components/UI/Button/Button';
import axios from "axios";
import { BASE_URL, LIMITE_INICIAL } from '../../utils/limitProducts';
import { fetchAllProducts } from '../../axios/products';

const Products = () => {
    const [limit, setLimit] = useState(LIMITE_INICIAL);
    const dispatch = useDispatch();

    const selectedCategory = useSelector((state) => state.categories.selectedCategory);
    const products = useSelector((state) => state.products.products);
    const totalProducts = useSelector((state) => state.products.totalProducts);

    useEffect(() => {
        setLimit(LIMITE_INICIAL);
    }, [selectedCategory]);

    const filteredProducts = selectedCategory
        ? products[selectedCategory] || []
        : products; // Si no se selecciona ninguna categoría, muestra todos los productos

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

    useEffect(() => {
        fetchAllProducts();
    }, []);

    const fetchAllProducts = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/products`);
            dispatch({ type: 'SET_PRODUCTS', payload: response.data.products });
        } catch (error) {
            console.error("Error al obtener productos del servidor:", error);
        }
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
                {filteredProducts && filteredProducts.slice(0, limit).map((product) => {
                    const { id, title, img, price } = product;
                    return (
                        <Card key={id}>
                            <img src={img} alt={title} />
                            <h2>{title}</h2>
                            <span>{formatPrice(price)}</span>
                            <Button onClick={() => handleAddToCart(product)}>
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
