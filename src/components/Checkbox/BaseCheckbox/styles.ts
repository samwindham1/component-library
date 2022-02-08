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

interface customProps {
    checked: boolean;
}

const UncheckedStyle = css`
    display: inline-block;
    position: relative;
    width: ${(props) => props.theme.componentLibrary.checkbox.width};
    height: ${(props) => props.theme.componentLibrary.checkbox.height};
    background-color: ${(props) => props.theme.componentLibrary.checkbox.backgroundColor};
    border: ${(props) => props.theme.componentLibrary.checkbox.border};
    border-radius: ${(props) => props.theme.componentLibrary.checkbox.borderRadius};
    transition: all 150ms;
    cursor: pointer;

    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 2px blue;
    }
`;

const CheckedStyle = css`
    background-color: ${(props) => props.theme.componentLibrary.checkbox.backgroundColor_checked};
    border-color: ${(props) => props.theme.componentLibrary.checkbox.borderColor_checked};

    ::after {
        content: '';
        position: absolute;
        width: ${(props) => props.theme.componentLibrary.checkbox.check.width};
        height: ${(props) => props.theme.componentLibrary.checkbox.check.height};
        border: ${(props) => props.theme.componentLibrary.checkbox.check.border};
        border-top: none;
        border-left: none;
        left: ${(props) => props.theme.componentLibrary.checkbox.check.left};
        top: ${(props) => props.theme.componentLibrary.checkbox.check.top};
        transform: rotate(45deg);
    }
`;

export const StyledCheckbox = styled.div<customProps>`
    ${UncheckedStyle}
    ${(props) => props.checked && CheckedStyle}
`;

export const BaseCheckboxContainer = styled.div`
    display: flex;
`;
