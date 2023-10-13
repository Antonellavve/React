// MenuContext.js

import { createContext, useReducer, useEffect } from 'react';

const Contexto = createContext();

const MenuContext = ({ children }) => {
    const initialState = {
        isMenuOpen: false,
    };

    const contextReducer = (state, action) => {
        switch (action.type) {
        case 'openMenu':
            return {
            ...state,
            isMenuOpen: !state.isMenuOpen,
            };
        case 'closeMenu':
            return {
            ...state,
            isMenuOpen: false,
            };
        default:
            return state;
        }
    };

    const [state, dispatch] = useReducer(contextReducer, initialState);

  // Agrega un efecto para cerrar el menú cuando se hace scroll
    useEffect(() => {
        const handleScroll = () => {
        if (state.isMenuOpen) {
            // Si el menú está abierto, ciérralo cuando se hace scroll
            dispatch({ type: 'closeMenu' });
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [state.isMenuOpen]);

    return (
        <Contexto.Provider value={{ state, dispatch }}>
        {children}
        </Contexto.Provider>
    );
};

export { Contexto, MenuContext };
