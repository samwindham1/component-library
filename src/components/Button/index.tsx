import { ButtonProps } from './types';
import { Button as StyledButton } from './styles';

export const Button = ({ label, onClick, ...componentProps }: ButtonProps) => (
    <StyledButton onClick={onClick} {...componentProps}>
        {label}
    </StyledButton>
);
