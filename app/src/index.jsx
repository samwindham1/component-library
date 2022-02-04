import { debug, StateWrapper } from './utils';
import { Button, Checkbox, TextInput } from '@samwindham1/component-library';
import './index.css';

const components = [
    <Button key={'test-app-button'} id={'test-app-button'} label={'Button'} onClick={() => debug('Button Click')} />,
    <StateWrapper key={'test-app-checkbox'} initialState={true}>
        {(state, setState) => (
            <Checkbox label={'Checkbox'} id={'test-app-checkbox'} checked={state} onChange={setState} />
        )}
    </StateWrapper>,
    <StateWrapper key={'test-app-input-field'} initialState={''}>
        {(state, setState) => <TextInput id={'test-app-input-field'} value={state} onChange={setState} />}
    </StateWrapper>
];

export const App = () => (
    <div className='App'>
        {components.map((component) => (
            <div key={component.key}>{component}</div>
        ))}
    </div>
);
