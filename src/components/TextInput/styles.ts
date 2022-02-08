import styled from 'styled-components';
export const TextInput = styled.input.attrs({ type: 'text' })`
    border: ${(props) => props.theme.componentLibrary.textInput.border};
    border-radius: ${(props) => props.theme.componentLibrary.textInput.borderRadius};
    height: ${(props) => props.theme.componentLibrary.textInput.height};
    padding: ${(props) => props.theme.componentLibrary.textInput.padding};

    :focus,
    :active {
        outline: 0;
        border: 2px solid #0055ff;
    }
`;
