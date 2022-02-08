import { ComponentProps } from '../types';

export interface ButtonTheme {
    color: string;
    fontSize: string;
    padding: string;
    backgroundColor: string;
    backgroundColor_hover: string;
    backgroundColor_active: string;
    border: string;
    borderRadius: string;
    boxShadow: string;
}

export interface ButtonProps extends ComponentProps {
    label: string;
    onClick: () => void;
}
