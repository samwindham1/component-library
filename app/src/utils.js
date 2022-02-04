import { useState } from 'react';

export const debug = (value) => {
    console.log(`=== Debug: ${value}`);
};

export const StateWrapper = ({ initialState, children }) => {
    const [state, setState] = useState(initialState);

    const debugState = (value) => {
        debug(value);
        return setState(value);
    };

    return children(state, debugState);
};
