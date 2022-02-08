import { ComponentLibraryTheme, Theme } from './types';
import { merge, pick } from '../utils';

// Constants
import { color } from './constants/color.theme';
import { font } from './constants/font.theme';
import { element } from './constants/element.theme';

// Components
import { button } from '../components/Button/theme';
import { checkbox } from '../components/Checkbox/theme';
import { textInput } from '../components/TextInput/theme';

const constantKeys = ['color', 'font', 'element'];
const componentKeys = ['button', 'checkbox', 'textInput'];

export const buildTheme = (theme: Theme): ComponentLibraryTheme => {
    const colorTheme = color();

    // Initialize constants
    const constants = {
        color: colorTheme,
        font: font(colorTheme),
        element: element(colorTheme)
    };

    // Pick and merge constants from user's theme
    const constantTheme = pick(theme, constantKeys);
    merge(constants, constantTheme);

    // Initialize components
    const components = {
        button: button(constants),
        checkbox: checkbox(constants),
        textInput: textInput(constants)
    };

    // Pick and merge components from user's theme
    const componentTheme = pick(theme, componentKeys);
    merge(components, componentTheme);

    // Combine constants and components theme
    const componentLibraryTheme = {
        componentLibrary: {
            ...constants,
            ...components
        }
    };

    return componentLibraryTheme;
};
