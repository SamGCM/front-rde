import React, { ReactNode } from 'react';
import { CSSButtonVariants } from '../Input';

export type TInputSearch<T> = React.HTMLAttributes<HTMLInputElement> & CSSButtonVariants & IInputSearch<T>

export interface IInputSearch<T> {
    id?: string;
    name?: string;
    value?: string;
    data: T[];
    keyExtractor: (item: T) => string;
    renderItem: (item: T) => ReactNode;
}