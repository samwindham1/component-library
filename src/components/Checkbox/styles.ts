import styled from 'styled-components';

export const CheckboxLabel = styled.label`
    margin-left: ${({ theme }) => theme.componentLibrary.checkbox.label.margin};
    line-height: ${({ theme }) => theme.componentLibrary.checkbox.label.lineHeight};
    cursor: pointer;
`;
export const CheckboxContainer = styled.div`
    display: flex;
`;
