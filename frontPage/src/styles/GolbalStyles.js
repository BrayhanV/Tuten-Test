import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
		"Droid Sans", "Helvetica Neue", sans-serif;
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  a { text-decoration: none; color: #000 }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: #303030;
    height: 100vh;
    margin: 0;
    overscroll-behavior: none;
    width: 100%; 
  }

  #App {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    position: relative;
  }

  .full-width {
    width: 100%;
  }
`;
