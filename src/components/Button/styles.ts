import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${(props) => props.theme.componentLibrary.button.backgroundColor};
    font-size: ${(props) => props.theme.componentLibrary.button.fontSize};
    color: ${(props) => props.theme.componentLibrary.button.color};
    border: ${(props) => props.theme.componentLibrary.button.border};
    box-shadow: ${(props) => props.theme.componentLibrary.button.boxShadow};
    border-radius: ${(props) => props.theme.componentLibrary.button.borderRadius};
    padding: ${(props) => props.theme.componentLibrary.button.padding};

    :hover,
    :focus {
        background-color: ${(props) => props.theme.componentLibrary.button.backgroundColor_hover};
        cursor: pointer;
    }

    :focus {
        outline: 2px solid blue;
    }

    :active {
        background-color: ${(props) => props.theme.componentLibrary.button.backgroundColor_active};
    }
`;
