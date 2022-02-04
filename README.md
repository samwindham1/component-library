# @samwindham1/component-library &middot; [![npm version](https://img.shields.io/npm/v/@samwindham1/component-library?style=flat)](https://www.npmjs.com/package/@samwindham1/component-library)

## Introduction

This is a themable component library that uses React and styled-components. Simply import the components into your project to style and build your site.

## Setup

```
npm install @samwindham1/component-library --save
```

Anywhere in your code:

```jsx
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

```ts
id: string;
disabled: boolean;
```

### Button

```ts
label: string;
onClick: () => void;
```

### Checkbox

```ts
label: string;
checked: boolean;
onChange: (value: boolean) => void;
```

### TextInput

```ts
value: string;
onChange: (vale: string) => void;
```
