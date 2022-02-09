import styled from 'styled-components';

export const Heading = styled.div<{ level: number }>`
    color: ${({ theme }) => theme.componentLibrary.heading.color};
    font-size: ${({ level, theme }) => {
        const sizes = theme.componentLibrary.heading.sizes;
        return sizes[level - 1];
    }}em;
    font-weight: ${({ theme }) => theme.componentLibrary.heading.fontWeight};
    font-family: ${({ theme }) => theme.componentLibrary.heading.fontFamily};
`;
