import { styled, theme } from "../../theme";
import InputMask from "react-input-mask";

export const InputMasked = styled(InputMask, {
    borderColor: "transparent",
    outline: "none",
    transition: "all 0.18s ease-out 0s",
    boxShadow: "$0",
    borderRadius: "$2",
    width: "$full",
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
                height: "$3",
            },
            sm: {
                fontSize: "$4",
                height: "$4",
            },
            md: {
                fontSize: "$8",
                height: "$6",
            },
            lg: {
                fontSize: "$11",
                height: "$6",
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
