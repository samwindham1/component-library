import { ButtonTheme } from './types';
import { Constants } from '@theme/types';

export const button = ({ font, color, element }: Constants): ButtonTheme => ({
    color: font.color.inverted,
    fontSize: font.size.primary,
    padding: '8px 16px',
    backgroundColor: color.primary,
    backgroundColor_hover: color.primary_light,
    backgroundColor_active: color.primary_dark,
    border: 'none',
    borderRadius: '8px',
    boxShadow: element.boxShadow
});
