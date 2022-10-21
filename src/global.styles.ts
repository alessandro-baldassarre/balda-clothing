import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
body {
    margin: 0;
    padding: 20px 40px;
    font-family: "Open Sans Condensed", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  
    &::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }
`;
