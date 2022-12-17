import { styled } from '../../theme';
/** Component for use how avatar ou logo. The prop `size` is width `em` of Container. */
export const Avatar = styled(
    "img", 
    {
        "@bp2": {
            width: "calc($5 * 1.2)",
            height: "calc($5 * 1.2)",
        },
        variants: {
            size: {
                small: {
                    maxWidth: "$1",
                    maxHeight: "$1",
                },
                medium: {
                    maxWidth: "$3",
                    maxHeight: "$3",
                },
                large: {
                    maxWidth: "$5",
                    maxHeight: "$5"
                }
            },
            format: {
                circle: {
                    borderRadius: "$round"
                },
                square: {
                    borderRadius: "$1"
                }
            },
            outlined: {
                true: {
                    borderColor: "$primary",
                    borderStyle: "$solid",
                    borderWidth: "$borderWidths$2"
                }
            },
            pointer: {
                true: {
                    cursor: "pointer"
                }
            }
        },
        defaultVariants: {
            format: "circle",
            size: "medium",
            outlined: false
        }
    }
)