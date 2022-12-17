import { ThemeProvider } from "./themeProvider"

interface IGlobalContext {
    children: React.ReactNode
}

const GlobalContext = ({
    children
}: IGlobalContext
): React.ReactElement => (
        <ThemeProvider>
            { children }
        </ThemeProvider>
)

export default GlobalContext