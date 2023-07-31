import React from 'react'
import { StyledButton } from './ButtonStyles'

const Button = ({
    children,
    radius = '32',
    disabled = false
}) => {
    return (
        <StyledButton
            
            disabled={disabled}
            radius={radius}
        >
            {children}
        </StyledButton>
    )
}

export default Button