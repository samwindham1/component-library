import { BaseCheckboxProps } from './types';
import { HiddenCheckbox, StyledCheckbox, BaseCheckboxContainer } from './styles';

const BaseCheckbox = ({ checked, className, onChange, ...componentProps }: BaseCheckboxProps) => {
    return (
        <BaseCheckboxContainer className={className} onClick={() => onChange(checked)}>
            <HiddenCheckbox
                checked={!!checked}
                onChange={(event) => onChange(event.target.checked)}
                {...componentProps}
            />
            <StyledCheckbox checked={checked} />
        </BaseCheckboxContainer>
    );
};
BaseCheckbox.displayName = 'BaseCheckbox';

export { BaseCheckbox };
