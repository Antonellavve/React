import { formatPrice } from '../../utils/formatPrice';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import Increase from '../UI/Increment/Increment';
import Counter from "../UI/Counter/Counter"
import {
    CardContainerStyled,
    CardInfoStyled,
    PriceStyled,
    ProductTitleStyled,
    TextStyled,
    QuantityContainerStyled,
} from './CardProductCheckStyles';
import { useDispatch } from 'react-redux';
import { addToCart, removeProductToCart } from '../../Redux/Cart/cartSlice';
import { IoMdTrash } from 'react-icons/io';

const CardProductCheckout = ({img, title, desc, price, quantity, id}) => {

    const dispatch = useDispatch();

    return (
        <CardContainerStyled>
        <img
            src={img}
            alt={title}
        />
        <CardInfoStyled>
            <ProductTitleStyled>{title}</ProductTitleStyled>
            <TextStyled>{desc}</TextStyled>
            <PriceStyled>{formatPrice(price)}</PriceStyled>
        </CardInfoStyled>
        <QuantityContainerStyled>
            <Increase
            bgColor='var(--btn-gradient-secondary)'
            onClick={() => dispatch(removeProductToCart(id))}
            >
            {
                quantity === 1 ? <IoMdTrash /> : <FaMinus />
            }
            </Increase>
            <Counter>{quantity}</Counter>
            <Increase onClick={() => dispatch(addToCart({img, title, desc, price, quantity, id}))}>
            <BsPlusLg />
            </Increase>
        </QuantityContainerStyled>
        </CardContainerStyled>
    );
};

export default CardProductCheckout;