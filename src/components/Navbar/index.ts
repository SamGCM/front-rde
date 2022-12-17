import { styled } from "../../theme";

export const Navbar = styled("nav", {
    background: "transparent",
    fontFamily: "$tertiary",
    zIndex: "2",
    marginRight: "$9",
    ".navbar-list-mobile": {
        display: "none",
        transition: "0.3s"
    },
    "@ultraWide": {
        marginRight: "calc($9 / 1.7)"
    },
    "@widescreen": {
        marginRight: "calc($9 / 2)"
    },
    "@md": {
        marginRight: "0",
        ".navbar-list":  {
            display: "none"
        },
        ".navbar-list-mobile": {
            display: "flex",
            position: "absolute",
            alignItems: "center",
            padding: "50px 0",
            flexDirection: "column",
            width: "100%",
            right: "0",
            background: "$white",
            top: "0",
            transition: ".2s",
            animationName: "liq",
            animationDuration: ".5s",
            boxShadow: "0px .5px 5px 0px #0000002b",
        },
        "@keyframes liq": {
            "0%": {
                width: "0%"
            },
            "100%": {
                width: "100%"
            }
        }
    },


})