import styled from 'styled-components';
export const TextInput = styled.input.attrs({ type: 'text' })`
    border: 2px solid #999;
    border-radius: 4px;
    height: 20px;
    padding: 2px 8px;

    :focus,
    :active {
        outline: none;
        border: 2px solid #0055ff;
    }
`;
