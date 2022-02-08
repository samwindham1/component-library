import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { buildTheme } from './theme';
import { Theme } from './types';
import { NormalizeStyle } from './global/normalize';
import { GlobalStyle } from './global/global';

export const ThemeProvider = (props: { theme?: Theme; children: any }) => {
    const theme = buildTheme(props.theme);

    return (
        <StyledComponentsThemeProvider theme={theme}>
            <>
                {props.children}
                <NormalizeStyle />
                <GlobalStyle />
            </>
        </StyledComponentsThemeProvider>
    );
};
