import { BaseCheckboxProps } from './BaseCheckbox/types';

export interface CheckboxTheme {
    label: {
        margin: string;
    };
    width: string;
    height: string;
    border: string;
    borderColor_checked: string;
    borderRadius: string;
    backgroundColor: string;
    backgroundColor_checked: string;
    check: {
        width: string;
        height: string;
        left: string;
        top: string;
        border: string;
    };
}

export interface CheckboxProps extends BaseCheckboxProps {
    label: string;
}
