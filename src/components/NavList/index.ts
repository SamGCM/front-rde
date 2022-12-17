import { styled } from "../../theme";

export const NavList = styled("ul", {
    width: "auto",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "inherit",
    marginBottom: "0",

    "@media (max-width: 600px)": {
        flexDirection: "column",
    }
})