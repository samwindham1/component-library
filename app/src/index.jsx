import { useState } from 'react';
import { debug } from './utils';
import { ThemeProvider, Button, Checkbox, Heading, TextInput } from '@samwindham1/component-library';
import { theme } from './theme';
import './index.css';

export const App = () => {
    const [state, setState] = useState({ checkbox: false, textInput: '' });

    const components = [
        <Heading key={'Heading'} id={'test-app-heading'} level={1}>
            Heading 1 - Title
        </Heading>,
        <Button key={'Button'} id={'test-app-button'} label={'Button'} onClick={() => debug('Button Click')} />,
        <Checkbox
            key={'Checkbox'}
            id={'test-app-checkbox'}
            label={'Checkbox'}
            checked={state.checkbox}
            onChange={(value) => debug(`Checkbox click: ${value}`, setState({ ...state, checkbox: value }))}
        />,
        <TextInput
            key={'Input-Field'}
            id={'test-app-input-field'}
            value={state.textInput}
            onChange={(value) => debug(`TextInput type: ${value}`, setState({ ...state, textInput: value }))}
        />
    ];

    return (
        <div className='App'>
            <ThemeProvider theme={theme}>
                <div className='header'>
                    <h1 className='header-title'>Component Library</h1>
                    <a className='header-link' href='https://github.com/samwindham1/component-library'>
                        samwindham1/component-library
                    </a>
                </div>
                <div className='components'>
                    {components.map((component) => (
                        <div className='component-row' key={component.key}>
                            <div className='component-label'>
                                <h4>{component.key}:</h4>
                            </div>
                            <div className='component'>{component}</div>
                        </div>
                    ))}
                </div>
            </ThemeProvider>
        </div>
    );
};
