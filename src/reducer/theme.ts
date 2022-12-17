import { theme } from "../theme";

const initialState = theme;
export const UPDATE_THEME = "UPDATE_THEME";
export const RESET_THEME = "RESET_THEME";

export const resetTheme = () => {
    return initialState;
}

const updateTheme = (theme: any, state: any) => {
    const updateTheme = {...state, theme}

    return updateTheme
}

export const themeReducer = (state: any, action: any) => {
    switch (action.type) {
        case UPDATE_THEME:
            return updateTheme(action.theme, state);

        case RESET_THEME:
            return resetTheme()

        default:
            return state;
    }
}

