import { TextInputTheme } from './types';
import { Constants } from '@theme/types';

export const textInput = ({ element }: Constants): TextInputTheme => ({
    border: element.border,
    borderRadius: element.borderRadius.normal,
    height: '20px',
    padding: `${element.padding.tiny} ${element.padding.base}`
});
