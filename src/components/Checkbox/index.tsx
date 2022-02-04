import { CheckboxProps } from './types';
import { BaseCheckbox } from './BaseCheckbox';
import { CheckboxLabel, CheckboxContainer } from './styles';

const Checkbox = ({ label, checked, className, onChange, ...componentProps }: CheckboxProps) => {
    return (
        <CheckboxContainer className={className} {...componentProps}>
            <BaseCheckbox checked={checked} onChange={() => onChange(!checked)} />
            <CheckboxLabel onClick={() => onChange(!checked)}>{label}</CheckboxLabel>
        </CheckboxContainer>
    );
};
Checkbox.displayName = 'Checkbox';

export { Checkbox };
