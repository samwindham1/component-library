import { ComponentProps } from '../types';

export interface TextInputTheme {
    border: string;
    borderRadius: string;
    height: string;
    padding: string;
}

export interface TextInputProps extends ComponentProps {
    value: string;
    onChange: (vale: string) => void;
}
