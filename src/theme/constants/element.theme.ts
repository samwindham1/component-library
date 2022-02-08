import { Color, Element } from '../types';

export const element = (color: Color): Element => ({
    border: `2px solid ${color.gray}`,
    boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.25);',
    margin: {
        base: '16px',
        narrow: '8px',
        tiny: '2px',
        wide: '24px'
    },
    padding: {
        base: '16px',
        narrow: '8px',
        tiny: '2px',
        wide: '24px'
    },
    borderRadius: {
        normal: '8px',
        small: '4px',
        large: '16px'
    }
});
