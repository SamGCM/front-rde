import { styled } from "../../theme"

export const Button = styled(
    "button", 
    {
        lineHeight: "1.2",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "$1 $2",
        borderRadius: "$2",
        fontWeight: "$semiBold",
        fontSize: "$12",
        height: "fit-content",
        "&:disabled": {
            background: "$gray",
            color: "$white",
        },
        variants: {
            variant: {
                filled: {
                    background: "$primary",
                    color: "$primaryText",
                    "&:hover": {
                        background: "$secondary",
                    },
                    "&:active": {
                        background: "$primary",
                    }
                },
                outline: {
                    background: "transparent",
                    color: "$primary",
                    border: "$borderWidths$1 $borderStyles$solid $primary",
                    "&:hover": {
                        color: "$secondary",
                        border: "$borderWidths$1 $borderStyles$solid $secondary",
                    },
                    "&:active": {
                        color: "$primary",
                        borderColor: "$borderWidths$1 $borderStyles$solid $quaternary",
                    }
                },
                ghost: {
                    background: "transparent",
                    color: "$primary",
                    "&:hover": {
                        background: "$secondary",
                        color: "$white",
                    },
                    "&:active": {
                        background: "$primary",
                    }
                },
                link: {
                    background: "transparent",
                    color: "$primary",
                    "&:hover": {
                        textDecoration: "$decoration$1",
                        color: "$secondary",
                    },
                },
                text: {
                    background: "transparent",
                    color: "$primary",
                    "&:hover": {
                        color: "$secondary",
                    },
                    "&:active": {
                        color: "$primary",
                    }
                },
                elevated: {
                    background: "$white",
                    color: "$primary",
                    boxShadow: "$shadows$4",
                    "&:hover": {
                        color: "$secondary",
                    },
                    "&:active": {
                        color: "$primary",
                    }
                }
            },
            size: {
                small: {
                    padding: "$2 $4",
                    fontSize: "$fontSizes$2",
                },
                medium: {
                    padding: "$3 $5",
                    fontSize: "$fontSizes$3",
                },
                larger: {
                    padding: "$4 $6",
                    fontSize: "$fontSizes$4",
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
            rounded: {
                true: {
                    borderRadius: "$6"
                }
            },
            max: {
                true: {
                    width: "100%"
                }
            },
            positive: {
                true: {
                    background: "$green",
                    color: "$white",
                    "&:hover": {
                        background: "$green",
                    },
                    "&:active": {
                        background: "$green",
                    }
                }
            },
            negative: {
                true: {
                    background: "$red",
                    color: "$white",
                    "&:hover": {
                        background: "$red",
                    },
                    "&:active": {
                        background: "$red",
                    }
                }
            },
            warning: {
                true: {
                    background: "$yellow",
                    color: "$white",
                    "&:hover": {
                        background: "$yellow",
                    },
                    "&:active": {
                        background: "$yellow",
                    }
                }
            }
        },
        defaultVariants: {
            variant: "filled",
            size: "medium"
        },
    }
)