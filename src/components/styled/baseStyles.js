import styledNormalize from 'styled-normalize';
import styled, { injectGlobal } from 'styled-components';

export const baseStyles = () => injectGlobal`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    height: 100%;
  }

  body {
    height: 100%
    font-family: 'Roboto', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  p {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    font-weight: 300;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 700;
  }

  button:hover,
  a:hover {
    cursor: pointer;
  }
`;

export const AppBase = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
