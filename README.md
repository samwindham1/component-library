# @samwindham1/component-library &middot; [![npm version](https://img.shields.io/npm/v/@samwindham1/component-library?style=flat)](https://www.npmjs.com/package/@samwindham1/component-library)

## Introduction

This is a themable component library that uses React and styled-components. Simply import the components into your project to style and build your site.

## Setup

```
npm install @samwindham1/component-library --save
```

Add the `ThemeProvider` at the top-most level of your app, and supply it your theme overrides.

```jsx
// app.jsx

import { ThemeProvider } from '@samwindham1/component-library';
import { theme } from './theme';

export const App = () => (
    <ThemeProvider theme={theme}>
        <... />
    </ThemeProvider>
);
```

Set up your theme overrides (See below for theme structure):

```js
// theme.js
export const theme = {
    color: {
        primary: 'blue'
        ...
    },
    button: {
        color: 'magenta'
        ...
    },
    ...
}
```

Import and use a component:

```jsx
// Component.jsx

import { Button } from '@samwindham1/component-library';

const Component = () => (
    <>
        ...
        <Button label={'Label'} onClick={() => {}} />
    </>
);
```

## Components:

### Default Props

| prop     | type    | default        | description       |
| -------- | ------- | -------------- | ----------------- |
| id       | string  | [empty string] | custom id         |
| disabled | boolean | false          |                   |
| classes  | string  | [empty string] | custom classnames |

### Button

| prop    | type       | default | description            |
| ------- | ---------- | ------- | ---------------------- |
| label   | string     |         |                        |
| onClick | () => void |         | onClick event function |

### Checkbox

| prop     | type                     | default | description                                   |
| -------- | ------------------------ | ------- | --------------------------------------------- |
| label    | string                   |         |                                               |
| checked  | boolean                  |         | parent component needs to control the state   |
| onChange | (value: boolean) => void |         | onChange function to control the parent state |

### TextInput

| prop     | type                    | default | description                                   |
| -------- | ----------------------- | ------- | --------------------------------------------- |
| value    | string                  |         | parent component needs to control the state   |
| onChange | (value: string) => void |         | onChange function to control the parent state |
