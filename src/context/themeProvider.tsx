import { useReducer } from "react"
import { themeContext as Theme } from "./themeContext"
import { RESET_THEME, themeReducer, UPDATE_THEME } from "../reducer/theme"
import themesCollection from "../theme/themesCollection"
import { IThemeProvider } from "../interfaces/themeProvider"
import { theme } from "../theme"

export const ThemeProvider = ({
    children
}: IThemeProvider
): React.ReactElement => {
    
    const [themeState, dispatch] = useReducer(themeReducer, { theme: theme }) 

    const updateTheme = (theme: string) => {
        setTimeout(() => {
            dispatch({type: UPDATE_THEME, theme: themesCollection[theme as keyof typeof themesCollection] })
        }, 700)
    }

    const resetTheme = () => {
        setTimeout(() => {
            dispatch({ type: RESET_THEME })
        }, 700)
    }

    return (
        <Theme.Provider value={{
            theme: themeState.theme,
            updateTheme: updateTheme,
            resetTheme: resetTheme
        }}>
            {children}
        </Theme.Provider>
    )
}