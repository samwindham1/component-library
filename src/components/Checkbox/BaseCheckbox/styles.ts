import styled, { css } from 'styled-components';

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const UncheckedStyle = css`
    display: inline-block;
    position: relative;
    width: ${({ theme }) => theme.componentLibrary.checkbox.width};
    height: ${({ theme }) => theme.componentLibrary.checkbox.height};
    background-color: ${({ theme }) => theme.componentLibrary.checkbox.backgroundColor};
    border: ${({ theme }) => theme.componentLibrary.checkbox.border};
    border-radius: ${({ theme }) => theme.componentLibrary.checkbox.borderRadius};
    transition: all 150ms;
    cursor: pointer;

    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 2px blue;
    }
`;

const CheckedStyle = css`
    background-color: ${({ theme }) => theme.componentLibrary.checkbox.backgroundColor_checked};
    border-color: ${({ theme }) => theme.componentLibrary.checkbox.borderColor_checked};

    ::after {
        content: '';
        position: absolute;
        width: ${({ theme }) => theme.componentLibrary.checkbox.check.width};
        height: ${({ theme }) => theme.componentLibrary.checkbox.check.height};
        border: ${({ theme }) => theme.componentLibrary.checkbox.check.border};
        border-top: none;
        border-left: none;
        left: ${({ theme }) => theme.componentLibrary.checkbox.check.left};
        top: ${({ theme }) => theme.componentLibrary.checkbox.check.top};
        transform: rotate(45deg);
    }
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
    ${UncheckedStyle}
    ${({ checked }) => checked && CheckedStyle}
`;

export const BaseCheckboxContainer = styled.div`
    display: flex;
`;
