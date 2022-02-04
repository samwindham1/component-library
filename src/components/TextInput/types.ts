import { ComponentProps } from '../types';

export interface TextInputProps extends ComponentProps {
    value: string;
    onChange: (vale: string) => void;
}
