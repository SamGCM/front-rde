import { styled, theme } from "../../theme";
import type * as Stitches from "@stitches/react";

export const Input = styled("input", {
    borderColor: "transparent",
    outline: "none",
    transition: "all 0.18s ease-out 0s",
    boxShadow: "$0",
    borderRadius: "$2",
    variants: {
        errorBorderColor: {
            true: {
                borderColor: "$red",
            },
        },
        isDisabled: {
            true: {
                background: "$celestial",
                pointerEvents: "none",
                userSelect: "none",
            },
        },
        sizes: {
            xss: {
                fontSize: "$1",
                height: "$1",
            },
            xs: {
                fontSize: "$2",
                height: "$2",
            },
            sm: {
                fontSize: "$3",
                height: "$2",
            },
            md: {
                fontSize: "$4",
                height: "$3",
            },
            lg: {
                fontSize: "$5",
                height: "$3",
            },
        },
        variant: {
            unstyled: {
                background: "$transparent",
                border: "none",
                boxShadow: "none",
            },
            flushed: {
                borderBottomWidth: "$3",
                borderBottomStyle: "$solid",
                borderBottomColor: "$grayLight",
                borderRadius: "initial",
                boxShadow: "none",
                "&:focus": {
                    borderBottomWidth: "$3",
                    borderBottomStyle: "$solid",
                    borderBottomColor: "$quaternary",
                },
            },
            filled: {
                paddingInlineStart: "$3",
                paddingInlineEnd: "$3",
                background: "$quaternary",
                "&:hover": {
                    boxShadow: `-4px 3px 19px -8px ${theme.colors.quaternary}`,
                },
                "&:focus": {
                    borderWidth: "$1",
                    borderStyle: "$solid",
                    borderColor: "$quaternary",
                    background: "$transparent",
                    boxShadow: `-4px 3px 19px -8px ${theme.colors.quaternary}`,
                },
            },
            outline: {
                paddingInlineStart: "$3",
                paddingInlineEnd: "$3",
                borderWidth: "$1",
                borderStyle: "$solid",
                borderColor: "$grayLight",
                "&:hover": {
                    boxShadow: `-4px 3px 19px -8px ${theme.colors.quaternary}`,
                },
                "&:focus": {
                    borderWidth: "$1",
                    borderStyle: "$solid",
                    borderColor: "$quaternary",
                    boxShadow: `-4px 3px 19px -8px ${theme.colors.quaternary}`,
                },
            },
        },
    },
    defaultVariants: {
        variant: "outline",
        sizes: "sm",
    },
});

export type CSSButtonVariants = Stitches.VariantProps<typeof Input>;
