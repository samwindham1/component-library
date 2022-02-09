import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${({ theme }) => theme.componentLibrary.button.backgroundColor};
    font-size: ${({ theme }) => theme.componentLibrary.button.fontSize};
    color: ${({ theme }) => theme.componentLibrary.button.color};
    border: ${({ theme }) => theme.componentLibrary.button.border};
    box-shadow: ${({ theme }) => theme.componentLibrary.button.boxShadow};
    border-radius: ${({ theme }) => theme.componentLibrary.button.borderRadius};
    padding: ${({ theme }) => theme.componentLibrary.button.padding};

    :hover,
    :focus {
        background-color: ${({ theme }) => theme.componentLibrary.button.backgroundColor_hover};
        cursor: pointer;
    }

    :focus {
        outline: 2px solid blue;
    }

    :active {
        background-color: ${({ theme }) => theme.componentLibrary.button.backgroundColor_active};
    }
`;
