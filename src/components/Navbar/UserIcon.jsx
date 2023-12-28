import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegUser } from 'react-icons/fa';
import { toggleHiddenMenu } from '../../Redux/User/userSlice';
import { UserContainer } from './NavbarStyles';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate

const UserIcon = () => {
    const currentUser = useSelector((state) => state.user.currentUser);  // Asegúrate de obtener el estado actual del usuario
    const totalCartItems = useSelector((state) => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)
    const dispatch = useDispatch();
    const navigate = useNavigate();  // Obtén la función de navegación

    return (
        <UserContainer onClick={() => {
            currentUser ?
            dispatch(toggleHiddenMenu()) :
            navigate("/Login")}
          }>
        <FaRegUser size={20} />
        </UserContainer>
    );
};

export default UserIcon;
