import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
    padding: 0.8rem 1.5rem;
    outline: none;
    border: none;
    border-radius: 10px;
    background: #bff000;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    margin: 20px;
    &:hover {
        color: white;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;