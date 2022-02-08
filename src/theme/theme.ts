import { ComponentLibraryTheme, Theme } from './types';

// Constants
import { color } from './constants/color.theme';
import { font } from './constants/font.theme';
import { element } from './constants/element.theme';

const constantKeys = ['color', 'font', 'element'];

export const buildTheme = (theme: Theme): ComponentLibraryTheme => {
    const colorTheme = color();

    // Initialize constants
    const constants = {
        color: colorTheme,
        font: font(colorTheme),
        element: element(colorTheme)
    };

    // Combine constants and components theme
    const componentLibraryTheme = {
        componentLibrary: {
            ...constants,
        }
    };

    return componentLibraryTheme;
};
