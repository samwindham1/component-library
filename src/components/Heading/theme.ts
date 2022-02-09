import { HeadingTheme } from './types';
import { Constants } from '@theme/types';

export const heading = ({ font }: Constants): HeadingTheme => ({
    sizes: [2, 1.5, 1.3, 1, 0.8, 0.7],
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight.bold,
    color: font.color.primary
});
