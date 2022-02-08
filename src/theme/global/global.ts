import { createGlobalStyle } from 'styled-components';
import { ComponentLibraryTheme } from '@theme/types';

export const GlobalStyle = createGlobalStyle<{ theme: ComponentLibraryTheme }>`
/*
 * Set default font for all components
 */

body * {
    font-family: ${(props) => props.theme.componentLibrary.font.fontFamily};
    font-size: ${(props) => props.theme.componentLibrary.font.size.primary};
    color: ${(props) => props.theme.componentLibrary.font.color.primary};
    font-weight: normal;
    line-height: 20px;
}
`;
