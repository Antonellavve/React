import React from 'react'
import { StyledButton } from './ButtonStyles'

const Button = ({
    children,
    radius = '20',
    disabled = false,
    onClick = (e) => e.preventDefault(),
}) => {
    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled}
            radius={radius}
        >
            {children}
        </StyledButton>
    )
}

export default Button