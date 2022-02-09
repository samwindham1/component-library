import * as React from 'react';
import { ComponentProps } from '../types';

export interface HeadingTheme {
    sizes: number[];
    fontFamily: string;
    fontWeight: string;
    color: string;
}

export interface HeadingProps extends ComponentProps {
    level: number;
    children: React.ReactChildren;
}
