import { Color, Font } from '../types';

export const font = (color: Color): Font => ({
    fontFamily: `'Helvetica', 'Arial', sans-serif`,
    size: {
        primary: '14px'
    },
    color: {
        primary: color.black,
        inverted: color.white
    }
});
