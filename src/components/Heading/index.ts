import { styled } from "../../theme";

export const Heading = styled("h2", {
    margin: "0",
    variants: {
        size: {
            xs: {
                fontSize: "$2",
            },
            sm: {
                fontSize: "$4",
            },
            md: {
                fontSize: "$6",
            },
            lg: {
                fontSize: "$9",
            },
        }
    },
    defaultVariants: {
        size: "sm"
    }
})