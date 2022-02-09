import { Color, Font } from '../types';

export const font = (color: Color): Font => ({
    fontFamily: `'Helvetica', 'Arial', sans-serif`,
    lineHeight: {
        normal: 'normal',
        default: '1.42857em'
    },
    size: {
        primary: '14px'
    },
    color: {
        primary: color.black,
        inverted: color.white
    },
    fontWeight: {
        normal: 'normal',
        bold: 'bold'
    }
});
