import { ButtonTheme } from '../components/Button/types';
import { CheckboxTheme } from '../components/Checkbox/types';
import { TextInputTheme } from '../components/TextInput/types';

export interface Color {
    primary: string;
    primary_light: string;
    primary_dark: string;

    secondary: string;
    secondary_light: string;
    secondary_dark: string;

    black: string;
    white: string;
    gray: string;
    light: string;
}

export interface Font {
    fontFamily: string;
    size: {
        primary: string;
    };
    color: {
        primary: string;
        inverted: string;
    };
}

export interface Element {
    border: string;
    boxShadow: string;
    margin: {
        base: string;
        narrow: string;
        tiny: string;
        wide: string;
    };
    padding: {
        base: string;
        narrow: string;
        tiny: string;
        wide: string;
    };
    borderRadius: {
        normal: string;
        small: string;
        large: string;
    };
}

export type Constants = {
    color: Color;
    font: Font;
    element: Element;
};

export type Components = {
    button: ButtonTheme;
    checkbox: CheckboxTheme;
    textInput: TextInputTheme;
};

export type Theme = Constants & Components;

export type ComponentLibraryTheme = {
    componentLibrary: Theme;
};
