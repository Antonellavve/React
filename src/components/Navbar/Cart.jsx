import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsShopWindow } from 'react-icons/bs';
import { toggleHiddenCart } from '../../Redux/Cart/cartSlice';
import { CartContainer } from './NavbarStyles';

const Cart = () => {
    const totalCartItems = useSelector((state) => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)
    const dispatch = useDispatch();

    return (
        <CartContainer onClick={() => dispatch(toggleHiddenCart())}>
            <BsShopWindow size={20} />
            <span>{totalCartItems}</span>
        </CartContainer>
    );
};

export default Cart;
