import { CheckboxTheme } from './types';
import { Constants } from '@theme/types';

export const checkbox = ({ font, color, element }: Constants): CheckboxTheme => ({
    label: {
        margin: element.margin.narrow,
        lineHeight: font.lineHeight.default
    },
    width: '16px',
    height: '16px',
    border: element.border,
    borderColor_checked: color.primary,
    borderRadius: element.borderRadius.small,
    backgroundColor: color.white,
    backgroundColor_checked: color.primary,
    check: {
        width: '4px',
        height: '8px',
        left: '5px',
        top: '1px',
        border: `2px solid ${color.white}`
    }
});
