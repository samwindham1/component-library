import { ComponentProps } from '../../types';

export interface BaseCheckboxProps extends ComponentProps {
    checked: boolean;
    onChange: (value: boolean) => void;
    className?: string;
}
