import { createGlobalStyle } from "styled-components";
import { themeGet } from "@fuegokit/react";
// if you don't want to use @atlaskit/tokens at all, you can use Fuegokit tokens compiled CSS vars for Atlassian cloud:
// import * as lightStyles from "@fuegokit/tokens/tokens-next-gen-private/css/fk-atlassian/colors/light.css";
// import * as darkStyles from "@fuegokit/tokens/tokens-next-gen-private/css/fk-atlassian/colors/dark.css";

console.log("this is the update version");

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
  }
  body, html, #root {
    height: 100%
  }
  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${themeGet("colors.elevation.surface.default.[default]")};
    color: ${themeGet("colors.text.default")};
  }
  input, button, textarea, select {
    font: inherit;
  }

`;
