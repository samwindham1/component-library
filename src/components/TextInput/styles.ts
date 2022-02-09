import styled from 'styled-components';
export const TextInput = styled.input.attrs({ type: 'text' })`
    border: ${({ theme }) => theme.componentLibrary.textInput.border};
    border-radius: ${({ theme }) => theme.componentLibrary.textInput.borderRadius};
    height: ${({ theme }) => theme.componentLibrary.textInput.height};
    padding: ${({ theme }) => theme.componentLibrary.textInput.padding};

    :focus,
    :active {
        outline: 0;
        border: 2px solid #0055ff;
    }
`;
