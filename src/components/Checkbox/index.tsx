import { CheckboxProps } from './types';
import { BaseCheckbox } from './BaseCheckbox';
import { CheckboxLabel, CheckboxContainer } from './styles';

export const Checkbox = ({ label, checked, className, onChange, ...componentProps }: CheckboxProps) => (
    <CheckboxContainer className={className} {...componentProps}>
        <BaseCheckbox checked={checked} onChange={() => onChange(!checked)} />
        <CheckboxLabel onClick={() => onChange(!checked)}>{label}</CheckboxLabel>
    </CheckboxContainer>
);
