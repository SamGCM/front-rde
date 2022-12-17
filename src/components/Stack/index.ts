import { styled } from "../../theme";

export const Stack = styled("div", {
    display: "flex",
    variants: {
        align: {
            center: {
                alignItems: "center"
            },
            start: {
                alignItems: "start"
            },
            end: {
                alignItems: "end"
            },
            stretch: {
                alignItems: "stretch"
            }
        },
        direction: {
            column: {
                flexDirection: "column"
            },
            row: {
                flexDirection: "row"
            },
        },
        isInline: {
            true: {
                flexDirection: "row"
            }
        },
        justify: {
            center: {
                justifyContent: "center"
            },
            start: {
                justifyContent: "start"
            },
            end: {
                justifyContent: "end"
            },
            "space-between": {
                justifyContent: "space-between"
            }
        },
        shouldWrapChildren: {
            true: {
                display: "inline-block"
            }
        },
        wrap: {
            wrap: {
                flexWrap: "wrap"
            },
            nowrap: {
                flexWrap: "nowrap"
            },
            "wrap-reverse": {
                flexWrap: "wrap-reverse"
            }
            
        },
        spacing: {
            1: {
                "& > :not(style) ~ :not(style)": {
                    marginTop: "0px",
                    marginInline: "$1 0px",
                    marginBottom: "0px",
                }
            },
            2: {
                "& > :not(style) ~ :not(style)": {
                    marginTop: "0px",
                    marginInline: "$2 0px",
                    marginBottom: "0px",
                }
            },
            3: {
                "& > :not(style) ~ :not(style)": {
                    marginTop: "0px",
                    marginInline: "$3 0px",
                    marginBottom: "0px",
                }
            },
            4: {
                "& > :not(style) ~ :not(style)": {
                    marginTop: "0px",
                    marginInline: "$4 0px",
                    marginBottom: "0px",
                }
            },
        }
    },
    defaultVariants: {
        spacing: "1"
    }
})