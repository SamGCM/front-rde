import { styled } from "../../theme";

export const NavItem = styled("li", {
    marginLeft: "$16",
    padding: "$1 0",
    fontFamily: "inherit",

    "@ultraWide":{
        marginLeft: "calc(76px / 2)"
    },

    "@widescreen": {
        marginLeft: "calc(76px / 2.3)"
    },

    "&:hover": {
        padding: "$1 0 0 0",
        borderBottomColor: "$primary",
        borderBottomStyle: "$solid",
        borderBottomWidth: "$px",

    },

    "@md": {
        margin: "0 10px",
        fontSize: ".9em",
    }
})