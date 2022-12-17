import { styled } from "../../theme";
import { Flex } from "../Flex";

export const GroupCards = styled(Flex, {
    width: "100%",
    flexWrap: "wrap",

    "@media(min-width: 601px)": {
        "& > :not(style) ~ :not(style)": {
            marginTop: "0px",
            marginInline: "$4 0px",
            marginBottom: "0px",
        }
    },

    "@sm": {
        "& > :not(style) ~ :not(style)": {
            marginTop: "$4",
            marginInline: "0px 0px",
            marginBottom: "0px",
        },

        flexDirection: "column",
    }
})