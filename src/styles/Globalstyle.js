import { createGlobalStyle } from "styled-components";
import { miniReset } from "./miniReset";
import { normalize } from "./normalize";

const GlobalStyle = createGlobalStyle`
	${miniReset}
    ${normalize}   

	html {
		font-size: 62.5%; 
		height: 100%;
	}
	
	body {
		font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-weight: 400;
		font-size: 1.6rem;
		position: relative;
		min-height: 100%;
		color: #333333;
	}
`;

export default GlobalStyle;
