export const miniReset = `
	html {
	  box-sizing: border-box;
	}

	*, *:before, *:after {
	  box-sizing: inherit;
	}
	
    *, *:focus, *:hover{
        outline:none;
    }

	body, h1, h2, h3, h4, h5, h6, p, ol, ul {
	  margin: 0;
	  padding: 0;
	  font-weight: normal;
	}

	ul {
	  list-style: none;
	}

	img {
	  max-width: 100%;
	  height: auto;
	}

	button {
	    background: none;
	    box-shadow: none;
	    border: 0;
	    &:hover {
	    	cursor: pointer;
	    }		
	}
`;
