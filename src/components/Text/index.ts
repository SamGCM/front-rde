import { styled } from "../../theme";
import { Box } from "../Box";

export const Text = styled(Box, {
    variants: {
        align: {
            center: {
                textAlign: "center",
            },
            start: {
                textAlign: "start"
            },
            end: {
                textAlign: "end"
            }
        },
        casing: {
            capitalize: {
                textTransform: "capitalize"
            },
            uppercase: {
                textTransform: "uppercase"
            },
            lowercase: {
                textTransform: "lowercase"
            },
            none: {
                textTransform: "none"
            },
            "full-width": {
                textTransform: "full-width"
            },
        },
        decoration: {
            underline: {
                textDecoration: "underline"
            },
            overline: {
                textDecoration: "overline"
            },
            "line-through": {
                textDecoration: "line-through"
            },
            blink: {
                textDecoration: "blink"
            },
            none: {
                textDecoration: "none"
            },
            underover: {
                textDecoration: "underline overline"
            },
        },
        size: {
            inherit: {
                fontSize: "inherit"
            },
            xss: {
                fontSize: "$1"
            },
            xs: {
                fontSize: "$2"
            },
            sm: {
                fontSize: "$3"
            },
            md: {
                fontSize: "$4"
            },
            lg: {
                fontSize: "$5"
            },
        },
        weight: {
            thin: {
                fontWeight: "$thin"
            },
            hairline: {
                fontWeight: "$hairline"
            },
            light: {
                fontWeight: "$light"
            },
            normal: {
                fontWeight: "$thin"
            },
            semibold: {
                fontWeight: "$semibold"
            },
            bold: {
                fontWeight: "$bold"
            },
            medium: {
                fontWeight: "$medium"
            },
        }
    },
    defaultVariants: {
        size: "sm"
    }
})