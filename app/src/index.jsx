import { useState } from 'react';
import { debug } from './utils';
import { ThemeProvider, Button, Checkbox, TextInput } from '@samwindham1/component-library';
import { theme } from './theme';
import './index.css';

export const App = () => {
    const [state, setState] = useState({ checkbox: false, textInput: '' });

    const components = [
        <Button
            key={'test-app-button'}
            id={'test-app-button'}
            label={'Button'}
            onClick={() => debug('Button Click')}
        />,
        <Checkbox
            key={'test-app-checkbox'}
            label={'Checkbox'}
            id={'test-app-checkbox'}
            checked={state.checkbox}
            onChange={(value) => debug(`Checkbox click: ${value}`, setState({ ...state, checkbox: value }))}
        />,
        <TextInput
            key={'test-app-input-field'}
            id={'test-app-input-field'}
            value={state.textInput}
            onChange={(value) => debug(`TextInput type: ${value}`, setState({ ...state, textInput: value }))}
        />
    ];

    return (
        <div className='App'>
            <ThemeProvider theme={theme}>
                {components.map((component) => (
                    <div key={component.key}>{component}</div>
                ))}
            </ThemeProvider>
        </div>
    );
};
