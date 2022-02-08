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


export type Theme = Constants;

export type ComponentLibraryTheme = {
    componentLibrary: Theme;
};
