import { styled } from "../../theme";
import { Box } from "../Box";

export const LayoutContent = styled(Box, {
    padding: "0px $10",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "0",

    "@largePhone": {
        padding: "0px $3",
    }
})