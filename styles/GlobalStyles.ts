import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset default margin and padding */
  body, h1, h2, h3, h4, h5, h6, p, ul, ol, figure, blockquote, dl, dd {
    margin: 0;
    padding: 0;
  }

  /* Set font family and other global styles */
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }

  /* Add more global styles here as needed */
`;

export default GlobalStyles;
