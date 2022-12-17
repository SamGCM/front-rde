import React from 'react';
import { CSSButtonVariants } from '../Input';

export type TInput =  React.HTMLProps<HTMLInputElement> & CSSButtonVariants & IInput

export interface IInput   {
    handleChange?: React.ChangeEventHandler<HTMLInputElement>;
    id?: string;
    name?: string;
    value?: string;
    withMask?: boolean;
    mask?: string;
    errorMessage?: string;
}