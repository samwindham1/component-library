import { TextInputProps } from './types';
import { TextInput as StyledInputField } from './styles';

export const TextInput = ({ value, onChange, ...componentProps }: TextInputProps) => (
    <StyledInputField value={value} onChange={(event) => onChange(event.target.value)} {...componentProps} />
);
