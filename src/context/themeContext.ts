import { createContext } from "react";
import { theme } from "../theme";

export const themeContext = createContext({
    theme: theme,
    updateTheme: function (theme: string): void {
        // update theme
    },
    resetTheme: function (): void {
        // reset theme to default
    },
});
