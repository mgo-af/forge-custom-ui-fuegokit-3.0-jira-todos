import React, { useEffect } from "react";
import { useThemeObserver } from "@atlaskit/tokens";

import { view } from "@forge/bridge";
import {
  ThemeProvider as FuegokitThemeProvider,
  ColorModeWithAuto,
} from "@fuegokit/react"; // Adjust the import based on your setup

type BlendedThemeProviderProps = {
  children?: React.ReactNode;
};

const colorModes: Record<string, ColorModeWithAuto> = {
  light: "day",
  dark: "night",
  auto: "auto",
};

const BlendedThemeProvider = ({ children }: BlendedThemeProviderProps) => {
  // call view.theme.enable() when the component mounts, which ensures that theming is activated in the Forge environment.
  useEffect(() => {
    const enableTheming = async () => {
      await view.theme.enable();
    };

    enableTheming();
  }, []);
  const { colorMode: currentColorMode } = useThemeObserver();
  console.log("currentColorMode: ", currentColorMode);

  return (
    <FuegokitThemeProvider
      colorMode={
        currentColorMode === undefined ? "auto" : colorModes[currentColorMode]
      }
    >
      {children}
    </FuegokitThemeProvider>
  );
};

export default BlendedThemeProvider;
