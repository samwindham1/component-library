import styled from 'styled-components';

export const Button = styled.button`
    background-color: #0055ff;
    font-size: 16px;
    color: white;
    border: none;
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 8px 16px;

    :hover,
    :focus {
        background-color: #2075ff;
        color: white;
        cursor: pointer;
    }

    :focus {
        outline: 2px solid blue;
    }

    :active {
        background-color: blue;
    }
`;
