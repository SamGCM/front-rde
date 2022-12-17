import { createTheme } from "./";

export const creamTheme = createTheme({
    colors: {
        primary: "#FFE0C8",
        secondary: "#ffe3cd",
        tertiary: "#7d7d7d",
        quaternary: "#FFFBF8",

        iconColor: "#B48162",
        iconBackground: "#FFFBF8",
        iconBackgroundHover: "#f0e9e5",

        link: "#B48162",
    
        black: "#1a1a1a",
        white: "#fff",

        primaryText: "#000000",
        secondaryText: "#fff",
    },

    fonts: {
        muli: "$muli",
        muliLight: "$muliLight"
    },
});