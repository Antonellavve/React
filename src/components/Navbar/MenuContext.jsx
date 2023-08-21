import { createContext, useReducer } from 'react'

const Contexto = createContext();

const MenuContext = ({children}) => {
    const initialState = {
        isMenuOpen : false,
    }

    const contextReducer = (state, action) => {
        switch (action.type) {
            case 'openMenu':
            return{
                ...state,
                isMenuOpen : !state.isMenuOpen,
            };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(contextReducer, initialState)

    return (
        <Contexto.Provider value={{state, dispatch}}>
            {children}
        </Contexto.Provider>
    );
};

export {Contexto, MenuContext};
