import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { BaseStyles } from "@fuegokit/react";
import { GlobalStyles } from "./components/index.tsx";

import "@atlaskit/css-reset";

import { BlendedThemeProvider } from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BlendedThemeProvider>
      <GlobalStyles />
      <BaseStyles />
      <App />
    </BlendedThemeProvider>
  </StrictMode>
);
