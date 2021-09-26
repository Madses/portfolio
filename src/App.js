import Container from "./components/Container";
import GlobalStyle from "./styles/Globalstyle";
import { ThemeProvider } from "styled-components";
import { themeSelector } from "./styles/theme";
import { useThemeStore } from "./store";

function App() {
    const { theme } = useThemeStore();
    console.log(theme);
    return (
        <>
            <ThemeProvider theme={themeSelector(theme)}>
                <GlobalStyle />
                <Container />
            </ThemeProvider>
        </>
    );
}

export default App;
