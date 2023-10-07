import { IncrementStyled } from "./IncrementStyles";

const Increment = ({
    children,
    bgColor,
    disabled = false,
    onClick = (e) => e.preventDefault(),
    }) => {
    return (
        <IncrementStyled
        whileTap={{ scale: 0.95 }}
        bgColor={bgColor}
        disabled={disabled}
        onClick={onClick}
        >
        {children}
        </IncrementStyled>
    );
};

export default Increment;