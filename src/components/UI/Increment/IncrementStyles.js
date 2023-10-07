import styled from 'styled-components';
import { motion } from 'framer-motion';

export const IncrementStyled = styled(motion.button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: ${({ bgColor }) => bgColor};
    // sino se le puede poner otro color en caso que no se setee|| 'var(--btn-gradient)'}
    border: none;
    border-radius: 15px;
    font-size: 1.1rem;
    font-weight: 800;
    color: #ffff;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;