import { ComponentProps } from '../types';

export interface ButtonProps extends ComponentProps {
    label: string;
    onClick: () => void;
}
