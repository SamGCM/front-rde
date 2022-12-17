import { styled } from "../../theme";
import { Box } from "../Box";

export const VStack = styled(Box, {
    flexDirection: "column",
    display: "flex",
    variants: {
        spacing: {
            1: {
                "& > :not(style) ~ :not(style)": {
                    marginTop: "$1",
                    marginInline: "0px",
                    marginBottom: "0px",
                }
            },
            2: {
                "& > :not(style) ~ :not(style)": {
                    marginTop: "$2",
                    marginInline: "0px",
                    marginBottom: "0px",
                }
            },
            3: {
                "& > :not(style) ~ :not(style)": {
                    marginTop: "$3",
                    marginInline: "0px",
                    marginBottom: "0px",
                }
            },
            4: {
                "& > :not(style) ~ :not(style)": {
                    marginTop: "$4",
                    marginInline: "0px",
                    marginBottom: "0px",
                }
            },
            
        },
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
    }
})