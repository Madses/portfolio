import Container from "./components/Container";
import GlobalStyle from "./styles/Globalstyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";

function App() {
    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <Container />
            </ThemeProvider>
        </>
    );
}

export default App;
