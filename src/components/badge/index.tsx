import { styled } from "../../theme"

/** Badges with size, margin, padding and fill variants . */ 

export const Badge = styled("div", {
    borderRadius: "$6",
    textAlign: "center",
    width: "fit-content",
    height: "fit-content",
    fontWeight: "$semiBold",
    cursor: "default",
    boxShadow: "$1",
    userSelect: "none",
    variants: {
        variant: {
            filled: {
                background: "$primary",
                color: "$white"
                
            },
            outline: {
                background: "$white",
                color: "$primary",
                border: "$borderWidths$1 $borderStyles$solid $primary",
            },
            neutral: {
                background: "$grayLight",
                color: "$black"
            },
        },
        size: {
            small: {
                padding: "$1 $2",
                fontSize: "$1",
            },
            medium: {
                padding: "$1 $2",
                fontSize: "$2",
            },
            large: {
                padding: "$2 $3",
                fontSize: "$3",
            }
        },
        marginTop: {
            1: {
                my: "$1"
            },
            2: {
                my: "$2"
            },
            3: {
                my: "$3"
            },
        },
        marginBottom: {
            1: {
                mb: "$1"
            },
            2: {
                mb: "$2"
            },
            3: {
                mb: "$3"
            },
        },
        marginLeft: {
            1: {
                ml: "$1"
            },
            2: {
                ml: "$2"
            },
            3: {
                ml: "$3"
            },
        },
        marginRight: {
            1: {
                mr: "$1"
            },
            2: {
                mr: "$2"
            },
            3: {
                mr: "$3"
            },
        },
        my: {
            1: {
                my: "$1"
            },
            2: {
                my: "$2"
            },
            3: {
                my: "$3"
            },
        },
        mx: {
            1: {
                mx: "$1"
            },
            2: {
                mx: "$2"
            },
            3: {
                mx: "$3"
            },
        },
        margin: {
            1: {
                margin: "$1"
            },
            2: {
                margin: "$2"
            },
            3: {
                margin: "$3"
            },
        },
        px: {
            1: {
                px: "$1"
            },
            2: {
                px: "$2"
            },
            3: {
                px: "$3"
            },
        },
        py: {
            1: {
                py: "$1"
            },
            2: {
                py: "$2"
            },
            3: {
                py: "$3"
            },
        },
        positive: {
            true: {
                background: "$green",
                color: "$white",
            }
        },
        negative: {
            true: {
                background: "$red",
                color: "$white",
            }
        },
        warning: {
            true: {
                background: "$yellow",
                color: "$black",
            }
        }
    },
    defaultVariants: {
        variant: "filled",
        size: "small"
    }
})