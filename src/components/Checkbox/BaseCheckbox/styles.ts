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
    width: 16px;
    height: 16px;
    background-color: #fff;
    border: 2px solid #999;
    border-radius: 4px;
    transition: all 150ms;
    cursor: pointer;

    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 2px blue;
    }
`;

const CheckedStyle = css`
    background-color: #0055ff;
    border-color: #0055ff;

    ::after {
        content: '';
        position: absolute;
        height: 8px;
        width: 4px;
        border: 2px solid white;
        border-top: none;
        border-left: none;
        left: 5px;
        top: 1px;
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
