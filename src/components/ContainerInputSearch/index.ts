import { styled, theme } from "../../theme";
import { ContainerInput } from "../ContainerInput";

export const ContainerInputSearch = styled(ContainerInput, {
    position: "relative",
    variants: {
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
                }
            },
            filled: {
                paddingInlineStart: "$3",
                paddingInlineEnd: "$3",
                transition: "all 0.18s ease-out 0s",
                borderRadius: "$2",
                background: "$quaternary",
                "&:hover": {
                    boxShadow: `-4px 3px 19px -8px ${theme.colors.quaternary}`
                },
                "&:focus": {
                    borderWidth: "$1",
                    borderStyle: "$solid",
                    borderColor: "$quaternary",
                    background: "$transparent",
                    boxShadow: `-4px 3px 19px -8px ${theme.colors.quaternary}`,
    
                }
            },
            outline: {
                paddingInlineStart: "$3",
                paddingInlineEnd: "$3",
                borderWidth: "$1",
                borderStyle: "$solid",
                borderColor: "$grayLight",
                transition: "all 0.18s ease-out 0s",
                borderRadius: "$2",
                "&:hover": {
                    boxShadow: `-4px 3px 19px -8px ${theme.colors.quaternary}`
                },
                "&:focus": {
                    borderWidth: "$1",
                    borderStyle: "$solid",
                    borderColor: "$quaternary",
                    boxShadow: `-4px 3px 19px -8px ${theme.colors.quaternary}`,
                }
            }
        }
    },
    defaultVariants: {
        variant: "unstyled"
    }
    
})