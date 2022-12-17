import { styled } from "../../theme";
import { Box } from "../Box";

export const SideBar = styled(Box, {
    borderColor: "$celestial",
    borderStyle: "$solid",
    borderWidth: "$1",
    width: "20vw",
    height: "100vh",

    "@mediumPhone": {
        display: "none",
    }
})

