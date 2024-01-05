import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegUser } from 'react-icons/fa';
import { UserContainer } from './NavbarStyles';
import { useNavigate } from 'react-router-dom';
import { clearCurrentUser } from '../../Redux/User/userSlice';
import { CiLogout } from "react-icons/ci";

const UserIcon = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(clearCurrentUser());
        sessionStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <UserContainer>
            {currentUser ? (
                <>
                    <CiLogout size={20} onClick={handleLogout} />
                    {/* Additional UserIcon logic for logged-in state */}
                </>
            ) : (
                <FaRegUser size={20} onClick={() => navigate("/Login")} />
            )}
        </UserContainer>
    );
};

export default UserIcon;
