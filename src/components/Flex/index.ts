import { styled } from "../../theme";
import { Box } from "../Box";

export const Flex = styled(Box, {
    width: "$full",
    display: "flex",
    variants: {
        align: {
            flexStart: {
                alignItems: "flex-start"
            },
            start: {
                alignItems: "start"
            },
            center: {
                alignItems: "center"
            },
            flexEnd: {
                alignItems: "flex-end"
            },
            end: {
                alignItems: "end"
            },
            baseline: {
                alignItems: "baseline"
            }
        },
        
        direction: {
            column: {
                flexDirection: "column"
            },
            row: {
                flexDirection: "row"
            },
            "column-reverse": {
                flexDirection: "column-reverse"
            },
            "row-reverse": {
                flexDirection: "row-reverse"
            }
        },
        justify: {
            flexStart: {
                justifyContent: "flex-start"
            },
            start: {
                justifyContent: "start"
            },
            center: {
                justifyContent: "center"
            },
            flexEnd: {
                justifyContent: "flex-end"
            },
            end: {
                justifyContent: "end"
            },
            "space-between": {
                justifyContent: "space-between"
            },
            "space-around": {
                justifyContent: "space-around"
            },
            "space-evenly": {
                justifyContent: "space-evenly"
            }
        },
        wrap: {
            nowrap: {
                flexWrap: "nowrap"
            },
            wrap: {
                flexWrap: "wrap"
            },
            "wrap-reverse": {
                flexWrap: "wrap-reverse"
            }
        },
        basis: {
            auto: {
                flexBasis: "auto"
            },
        },
        grow: {
            1: {
                flexGrow: 1
            },
            2: {
                flexGrow: 2
            },
            3: {
                flexGrow: 3
            },
            4: {
                flexGrow: 4
            },
            5: {
                flexGrow: 5
            }
        },
        flex: {
            1: {
                flex: 1
            }
        },
        shrink: {
            1: {
                flexShrink: 1
            },
            2: {
                flexShrink: 2
            },
            3: {
                flexShrink: 3
            },
        },
    }
})